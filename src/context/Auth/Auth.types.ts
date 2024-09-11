export interface IAuthFields {
  name: string;
  email: string;
}

export interface IAuthContext {
  user: IAuthFields | null;
  login: (email: IAuthFields, callback: () => void) => void;
  signOut: (callback: () => void) => void;
}
