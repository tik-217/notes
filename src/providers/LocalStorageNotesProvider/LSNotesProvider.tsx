// react
import { useContext } from "react";

// react-router-dom
import { useNavigate, useParams } from "react-router-dom";

// context
import { LocalStorageNotesContext } from "@context/LocalStorageNotesContext";
import { EditNoteContext } from "@context/EditNoteContext";

// hooks
import { useGetItemsFromLS } from "@hooks/useGetItemsFromLS";

// utils
import { switchingNotesList } from "@utils/switchingNotesList";
import { writeNewNotesLocalStorage } from "@utils/writeNewNotesLocalStorage";

export const LocalStorageNotesProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const { id: noteId } = useParams();

  // get the status of editing a note
  const { isEditNote } = useContext(EditNoteContext);

  // get all notes from local storage
  const { notes } = useGetItemsFromLS({ noteId });

  const navigate = useNavigate();

  const saveNewTextOfNotes = (newText: string) => {
    if (!isEditNote) return;
    if (!noteId) return;

    const filterAllNotes = notes.map((el) => {
      if (el.id === +noteId) {
        el.text = newText;
        return el;
      }

      return el;
    });

    writeNewNotesLocalStorage({ notes, filterAllNotes });
  };

  const deleteNote = () => {
    if (!noteId) return;

    const filterAllNotes = notes.filter((el) => el.id !== +noteId);

    writeNewNotesLocalStorage({ notes, filterAllNotes });

    switchingNotesList({
      notes,
      noteId,
      navigate,
    });
  };

  const outOptions = {
    notes,
    saveNewTextOfNotes,
    deleteNote,
  };

  return (
    <LocalStorageNotesContext.Provider value={outOptions}>
      {children}
    </LocalStorageNotesContext.Provider>
  );
};
