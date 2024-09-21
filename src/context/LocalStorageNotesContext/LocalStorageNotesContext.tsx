// react
import { ILSNotes } from "@src/types";
import { createContext, Dispatch, SetStateAction } from "react";

interface LocalStorageNotesContext {
  notes: ILSNotes[];
  saveNewTextOfNotes: (newText: string) => void;
  deleteNote: (id: number) => void;
  setDeleteNoteId: Dispatch<SetStateAction<number>>;
  deleteNoteId: number;
}

export const LocalStorageNotesContext = createContext<LocalStorageNotesContext>(
  {
    notes: [],
    saveNewTextOfNotes: () => {},
    deleteNote: () => {},
    setDeleteNoteId: () => {},
    deleteNoteId: 0,
  }
);
