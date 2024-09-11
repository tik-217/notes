// react
import { lazy } from "react";

// react-router-dom
import { Route, Routes } from "react-router-dom";

// components
import { CheckAuth } from "@components/CheckAuth";

// providers
import { SuspenseWrap } from "@providers/SuspenseWrap";
import { Auth } from "@providers/Auth";

const Main = lazy(() =>
  import("@pages/Main").then(({ Main }) => ({
    default: Main,
  }))
);
const Authentication = lazy(() =>
  import("@pages/Authentication").then(({ Authentication }) => ({
    default: Authentication,
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
              <SuspenseWrap>
                <Main />
              </SuspenseWrap>
            </CheckAuth>
          </Auth>
        }
      />
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
