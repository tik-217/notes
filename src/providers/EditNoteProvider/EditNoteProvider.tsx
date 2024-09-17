// context
import { EditNoteContext } from "@context/EditNoteContext/EditNoteContext";
import { useState } from "react";

export function EditNoteProvider({ children }: { children: JSX.Element }) {
  const [isEditNote, setIsEditNote] = useState(false);

  function editNote(editState: boolean) {
    setIsEditNote(editState);
  }

  const options = {
    isEditNote,
    editNote,
  };

  return (
    <EditNoteContext.Provider value={options}>
      {children}
    </EditNoteContext.Provider>
  );
}
