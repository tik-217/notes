// react
import { useContext, useState } from "react";

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

  // states
  const [deleteNoteId, setDeleteNoteId] = useState(0);

  // get the status of editing a note
  const { isEditNote } = useContext(EditNoteContext);

  // get all notes from local storage
  const { notes, currNote } = useGetItemsFromLS({ noteId });

  const navigate = useNavigate();

  const saveNewTextOfNotes = (newText: string) => {
    if (!isEditNote) return;
    if (!noteId) return;

    if (currNote) {
      currNote.text = newText;
    }

    writeNewNotesLocalStorage({ notes });
  };

  const deleteNote = (id: number) => {
    const filterAllNotes = notes.filter((el) => el.id !== id);

    writeNewNotesLocalStorage({ notes: filterAllNotes });

    switchingNotesList({
      notes: filterAllNotes,
      noteId: id,
      navigate,
    });
  };

  const outOptions = {
    notes,
    saveNewTextOfNotes,
    deleteNote,
    setDeleteNoteId,
    deleteNoteId,
  };

  return (
    <LocalStorageNotesContext.Provider value={outOptions}>
      {children}
    </LocalStorageNotesContext.Provider>
  );
};
