// react
import { createContext } from "react";

// context
import { IAuthContext } from "@context/AuthContext/AuthContext.types";

export const AuthContext = createContext<IAuthContext>({
  user: {
    name: "",
    email: "",
  },
  login: () => {},
  signOut: () => {},
});
