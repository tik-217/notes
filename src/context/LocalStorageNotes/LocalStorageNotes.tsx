// react
import { ILSNotes } from "@src/types";
import { createContext } from "react";

interface ILocalStorageNotes {
  notes: ILSNotes[];
  saveNewNotes: (newText: string) => void;
}

export const LocalStorageNotes = createContext<ILocalStorageNotes>({
  notes: [],
  saveNewNotes: () => {},
});
