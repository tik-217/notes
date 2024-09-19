import { ILSNotes } from "@src/types";
import { Dispatch } from "react";

// getting the original ID of the note when the page is first launched
export const getInitialNoteId = ({
  LSNotes,
  setFirstNoteId,
}: {
  LSNotes: string;
  setFirstNoteId: Dispatch<React.SetStateAction<number>>;
}) => {
  const parseNotes: ILSNotes[] = JSON.parse(LSNotes);

  if (!parseNotes.length) return setFirstNoteId(0);

  setFirstNoteId(parseNotes[0].id);
};
