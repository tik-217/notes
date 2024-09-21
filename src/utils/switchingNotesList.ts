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
  noteId: number;
  navigate: NavigateFunction;
}) => {
  const gettingThePreviousListItems = notes.filter((el) => el.id < +noteId);

  if (notes.length === 0) {
    navigate(`notes/1`);
    return;
  }

  if (!gettingThePreviousListItems.at(-1)) {
    navigate(`notes/${notes[0].id}`);
  } else {
    navigate(`notes/${gettingThePreviousListItems.at(-1)?.id}`);
  }
};
