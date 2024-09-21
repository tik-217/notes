import { Dispatch, SetStateAction } from "react";

export interface IEditNoteContext {
  isEditNote: boolean;
  editNote: (editState: boolean) => void;
  setIsEditNote: Dispatch<SetStateAction<boolean>>;
}
