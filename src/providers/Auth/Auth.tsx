// react
import { useState } from "react";

// context
import { AuthContext } from "@context/Auth";
import { IAuthFields } from "@context/Auth/Auth.types";

export function Auth({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<IAuthFields | null>(null);

  const login = (authFields: IAuthFields, callback: () => void) => {
    setUser(authFields);
    callback();
  };

  function signOut(callback: () => void) {
    setUser(null);
    callback();
  }

  const authOptions = {
    user,
    login,
    signOut,
  };

  return (
    <AuthContext.Provider value={authOptions}>{children}</AuthContext.Provider>
  );
}
