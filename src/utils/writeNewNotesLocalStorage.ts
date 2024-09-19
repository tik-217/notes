import { LSNoteName } from "@constants/LSNoteName";
import { ILSNotes } from "@src/types";

export const writeNewNotesLocalStorage = ({
  notes,
  filterAllNotes,
}: {
  notes: ILSNotes[];
  filterAllNotes: ILSNotes[];
}) => {
  if (!notes.length) return;

  const writeNotesToLS = !filterAllNotes.length
    ? ""
    : JSON.stringify(filterAllNotes);

  localStorage.setItem(LSNoteName, writeNotesToLS);
};
