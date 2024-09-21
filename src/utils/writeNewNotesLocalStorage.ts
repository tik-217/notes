import { LSNoteName } from "@constants/LSNoteName";
import { ILSNotes } from "@src/types";

export const writeNewNotesLocalStorage = ({ notes }: { notes: ILSNotes[] }) => {
  if (!notes.length) {
    localStorage.setItem(LSNoteName, "");
    return;
  }

  localStorage.setItem(LSNoteName, JSON.stringify(notes));
};
