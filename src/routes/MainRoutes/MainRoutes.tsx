// react
import { lazy, useEffect, useState } from "react";

// react-router-dom
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

// constants
import { LSNoteName } from "@constants/LSNoteName";

// utils
import { getInitialNoteId } from "@utils/getInitialNoteId";
import { getDatabaseNotes } from "@utils/getDatabaseNotes";

// providers
import { LocalStorageNotesProvider } from "@providers/LocalStorageNotesProvider";
import { CheckAuthProvider } from "@providers/CheckAuthProvider";
import { EditNoteProvider } from "@providers/EditNoteProvider";
import { SuspenseProvider } from "@providers/SuspenseProvider";
import { AuthProvider } from "@providers/AuthProvider";

const MainLayout = lazy(() =>
  import("@layouts/MainLayout/MainLayout").then(({ MainLayout }) => ({
    default: MainLayout,
  }))
);

const Authentication = lazy(() =>
  import("@pages/Authentication").then(({ Authentication }) => ({
    default: Authentication,
  }))
);

const NoteSection = lazy(() =>
  import("@components/NoteSection").then(({ NoteSection }) => ({
    default: NoteSection,
  }))
);

const NotFound = lazy(() =>
  import("@pages/NotFound").then(({ NotFound }) => ({
    default: NotFound,
  }))
);

export function MainRoutes() {
  const [firstNoteId, setFirstNoteId] = useState(1);

  const location = useLocation();

  // getting the initial note id and assigning notes by default
  useEffect(() => {
    const LSNotes = localStorage.getItem(LSNoteName);

    if (LSNotes) {
      getInitialNoteId({ LSNotes, setFirstNoteId });
    } else {
      getDatabaseNotes()
        .then((snapshot) => {
          if (snapshot.exists()) {
            localStorage.setItem(LSNoteName, JSON.stringify(snapshot.val()));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthProvider>
            <CheckAuthProvider>
              <EditNoteProvider>
                <LocalStorageNotesProvider>
                  <SuspenseProvider>
                    <MainLayout />
                  </SuspenseProvider>
                </LocalStorageNotesProvider>
              </EditNoteProvider>
            </CheckAuthProvider>
          </AuthProvider>
        }
      >
        <Route index element={<Navigate to={`notes/${firstNoteId}`} />} />
        <Route path="notes" element={<Navigate to={`${firstNoteId}`} />} />
        <Route path="notes/:id" element={<NoteSection />} />
      </Route>
      <Route
        path="/auth"
        element={
          <AuthProvider>
            <Authentication />
          </AuthProvider>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
