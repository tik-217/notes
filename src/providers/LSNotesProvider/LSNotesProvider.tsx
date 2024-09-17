// react
import { useContext } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// context
import { LocalStorageNotes } from "@context/LocalStorageNotes";
import { EditNoteContext } from "@context/EditNoteContext";

// hooks
import { useGetItemsFromLS } from "@hooks/useGetItemsFromLS";

// constants
import { LSNoteName } from "@constants/LSNoteName";

export const LSNotesProvider = ({ children }: { children: JSX.Element }) => {
  const { id: noteId } = useParams();

  const { isEditNote } = useContext(EditNoteContext);

  const { notes } = useGetItemsFromLS({ noteId });

  const saveNewNotes = (newText: string) => {
    if (!notes.length) return;
    if (!isEditNote) return;
    if (!noteId) return;

    const filterAllNotes = notes.map((el) => {
      if (el.id === +noteId) {
        el.text = newText;
        return el;
      }

      return el;
    });

    localStorage.setItem(LSNoteName, JSON.stringify(filterAllNotes));
  };

  const outOptions = {
    notes,
    saveNewNotes,
  };

  return (
    <LocalStorageNotes.Provider value={outOptions}>
      {children}
    </LocalStorageNotes.Provider>
  );
};
