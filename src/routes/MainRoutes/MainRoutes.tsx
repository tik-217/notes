// react
import { lazy } from "react";

// react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";

// components
import { CheckAuth } from "@components/CheckAuth";

// providers
import { SuspenseWrap } from "@providers/SuspenseWrap";
import { Auth } from "@providers/Auth";
import { EditNote } from "@providers/EditNote";

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

export function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Auth>
            <CheckAuth>
              <EditNote>
                <SuspenseWrap>
                  <MainLayout />
                </SuspenseWrap>
              </EditNote>
            </CheckAuth>
          </Auth>
        }
      >
        <Route index element={<Navigate to={"/notes/1"} />} />
        <Route path="/notes/:id" element={<NoteSection />} />
      </Route>
      <Route
        path="/auth"
        element={
          <Auth>
            <Authentication />
          </Auth>
        }
      />
    </Routes>
  );
}
