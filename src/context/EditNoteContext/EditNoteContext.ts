// react
import { createContext } from "react";

// types
import { IEditNoteContext } from "@context/EditNoteContext/EditNoteContext.types";

export const EditNoteContext = createContext<IEditNoteContext>({
  isEditNote: false,
  editNote() {},
});
