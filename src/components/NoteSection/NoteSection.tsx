// react
import { lazy, useCallback, useContext, useEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// react-markdown
import ReactMarkdown from "react-markdown";

// react-simplemde-editor
import { SimpleMdeReact } from "react-simplemde-editor";

// hooks
import { useGetItemsFromLS } from "@hooks/useGetItemsFromLS";

// context
import { EditNoteContext } from "@context/EditNoteContext";
import { LocalStorageNotesContext } from "@context/LocalStorageNotesContext";

// manitne
import { ActionIcon, Container, Flex } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconTrash } from "@tabler/icons-react";

// styles
import "easymde/dist/easymde.min.css";

const EmptyNotesList = lazy(() =>
  import("@components/EmptyNotesList").then(({ EmptyNotesList }) => ({
    default: EmptyNotesList,
  }))
);

export function NoteSection() {
  // params
  const { id: noteId } = useParams();

  // state
  const [mdText, setMdText] = useState("");

  // context
  const { isEditNote, editNote } = useContext(EditNoteContext);
  const { saveNewTextOfNotes, deleteNote } = useContext(
    LocalStorageNotesContext
  );

  // hooks
  const { notes } = useGetItemsFromLS({ noteId });

  const mdEdit = useCallback((newText: string) => {
    setMdText(newText);
  }, []);

  // assigning the current text of the note for editing
  useEffect(() => {
    if (!noteId) return;

    notes.forEach((el) => {
      if (el.id === +noteId) setMdText(el.text);
    });

    // eslint-disable-next-line
  }, [notes]);

  // saving a new note with new text
  useEffect(() => {
    saveNewTextOfNotes(mdText);
    // eslint-disable-next-line
  }, [mdText]);

  return (
    <>
      {notes.length ? (
        <Flex
          mt={"lg"}
          ml={"lg"}
          mr={"lg"}
          justify={"space-between"}
          align={"flex-start"}
          w={"100%"}
        >
          {!isEditNote ? (
            <Flex justify={"flex-start"} w={"auto"}>
              <ReactMarkdown>{mdText}</ReactMarkdown>
            </Flex>
          ) : (
            <Container w={"100%"}>
              <SimpleMdeReact value={mdText} onChange={mdEdit} />
            </Container>
          )}
          <Flex m={0} wrap={"nowrap"}>
            <ActionIcon
              variant="outline"
              color="red"
              aria-label="IconTrash"
              mr={"xs"}
              onClick={() => deleteNote()}
            >
              <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              variant="outline"
              color="gray"
              aria-label="IconPencil"
              onClick={() => editNote(!isEditNote)}
            >
              {!isEditNote ? (
                <IconPencil
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              ) : (
                <IconDeviceFloppy />
              )}
            </ActionIcon>
          </Flex>
        </Flex>
      ) : (
        <EmptyNotesList />
      )}
    </>
  );
}
