// react
import { useContext } from "react";

// react-router-dom
import { Navigate, useLocation } from "react-router-dom";

// context
import { AuthContext } from "@context/Auth";

export function CheckAuth({ children }: { children: JSX.Element }) {
  const { user } = useContext(AuthContext);

  const locations = useLocation();

  if (user === null) {
    return <Navigate to={"/auth"} state={locations.state?.from ?? "/"} />;
  }

  return <>{children}</>;
}
