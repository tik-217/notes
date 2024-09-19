// react-router-dom
import { NavigateFunction } from "react-router-dom";

// types
import { ILSNotes } from "@src/types";

// switching the current note when deleting the previous one
export const switchingNotesList = ({
  notes,
  noteId,
  navigate,
}: {
  notes: ILSNotes[];
  noteId: string;
  navigate: NavigateFunction;
}) => {
  if (notes[0].id >= +noteId) {
    navigate(`notes/${+noteId + 1}`);
  } else if (+noteId > notes.length) {
    navigate(`notes/${+noteId - 1}`);
  }
};
