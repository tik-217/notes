// react
import { useEffect, useState } from "react";

// constants
import { LSNoteName } from "@constants/LSNoteName";

// types
import { ILSNotes } from "@src/types";

export function useGetItemsFromLS({ noteId }: { noteId: string | undefined }) {
  const [notes, setNotes] = useState<ILSNotes[]>([]);

  useEffect(() => {
    const LSNotes = localStorage.getItem(LSNoteName);

    if (!LSNotes) return setNotes([]);

    const parseNotes: ILSNotes[] = JSON.parse(LSNotes);

    if (!parseNotes.length) return;
    if (!noteId) return;

    setNotes(parseNotes);
  }, [noteId]);

  return {
    notes,
  };
}
