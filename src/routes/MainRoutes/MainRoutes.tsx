// react
import { lazy } from "react";

// react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";

// components
import { CheckAuthProvider } from "@providers/CheckAuthProvider";

// providers
import { LSNotesProvider } from "@providers/LSNotesProvider/LSNotesProvider";
import { EditNoteProvider } from "@providers/EditNoteProvider";
import { SuspenseWrap } from "@providers/SuspenseWrap";
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
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthProvider>
            <CheckAuthProvider>
              <EditNoteProvider>
                <LSNotesProvider>
                  <SuspenseWrap>
                    <MainLayout />
                  </SuspenseWrap>
                </LSNotesProvider>
              </EditNoteProvider>
            </CheckAuthProvider>
          </AuthProvider>
        }
      >
        <Route index element={<Navigate to={"notes/1"} />} />
        <Route path="notes" element={<Navigate to={"/notes/1"} />} />
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
