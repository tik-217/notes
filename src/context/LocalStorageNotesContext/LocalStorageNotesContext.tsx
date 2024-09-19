// react
import { ILSNotes } from "@src/types";
import { createContext } from "react";

interface LocalStorageNotesContext {
  notes: ILSNotes[];
  saveNewTextOfNotes: (newText: string) => void;
  deleteNote: () => void;
}

export const LocalStorageNotesContext = createContext<LocalStorageNotesContext>(
  {
    notes: [],
    saveNewTextOfNotes: () => {},
    deleteNote: () => {},
  }
);
