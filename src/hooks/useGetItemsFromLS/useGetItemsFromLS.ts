// react
import { useEffect, useState } from "react";

// constants
import { LSNoteName } from "@constants/LSNoteName";

// types
import { ILSNotes } from "@src/types";

export function useGetItemsFromLS({ noteId }: { noteId: string | undefined }) {
  const [notes, setNotes] = useState<ILSNotes[]>([]);
  const [currNote, setCurrNote] = useState<ILSNotes>();

  useEffect(() => {
    const LSNotes = localStorage.getItem(LSNoteName);

    if (!LSNotes) return setNotes([]);

    const parseNotes: ILSNotes[] = JSON.parse(LSNotes);

    if (!parseNotes.length) return;
    if (!noteId) return;

    const currNote = parseNotes.filter((el) => el.id === +noteId);

    setNotes(parseNotes);
    setCurrNote(currNote[0]);
  }, [noteId]);

  return {
    notes,
    currNote,
  };
}
