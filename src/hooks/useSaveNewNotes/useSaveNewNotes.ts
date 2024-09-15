// react
import { useEffect } from "react";

// types
import { ILSNotes } from "@src/types";

// constants
import { LSNoteName } from "@constants/LSNoteName";

export function useSaveNewNotes({
  notes,
  isEditNote,
  noteId,
  mdText,
}: {
  notes: ILSNotes[];
  isEditNote: boolean;
  noteId: string | undefined;
  mdText: string;
}) {
  useEffect(() => {
    if (!notes.length) return;
    if (!isEditNote) return;
    if (!noteId) return;

    const filterAllNotes = notes.map((el) => {
      if (el.id === +noteId) {
        el.text = mdText;
        return el;
      }

      return el;
    });

    localStorage.setItem(LSNoteName, JSON.stringify(filterAllNotes));
    // eslint-disable-next-line
  }, [mdText]);
}
