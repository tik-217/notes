// react
import { lazy, useCallback, useContext, useEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// react-markdown
import ReactMarkdown from "react-markdown";

// react-simplemde-editor
import { SimpleMdeReact } from "react-simplemde-editor";

// providers
import { SuspenseProvider } from "@providers/SuspenseProvider";

// components
import { ActionNoteButtons } from "@components/ActionNoteButtons";

// hooks
import { useGetItemsFromLS } from "@hooks/useGetItemsFromLS";

// context
import { EditNoteContext } from "@context/EditNoteContext";
import { LocalStorageNotesContext } from "@context/LocalStorageNotesContext";

// manitne
import { Container, Flex, Title } from "@mantine/core";

// styles
import "easymde/dist/easymde.min.css";

const EmptyNotesList = lazy(() =>
  import("@components/EmptyNotesList").then(({ EmptyNotesList }) => ({
    default: EmptyNotesList,
  }))
);

export const NoteSection = () => {
  // params
  const { id: noteId } = useParams();

  // states
  const [mdText, setMdText] = useState("");

  // context
  const { isEditNote } = useContext(EditNoteContext);
  const { saveNewTextOfNotes } = useContext(LocalStorageNotesContext);

  // hooks
  const { notes, currNote } = useGetItemsFromLS({ noteId });

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
            <Flex justify={"flex-start"} w={"auto"} direction={"column"}>
              <Title order={3}>{currNote?.label}</Title>
              <ReactMarkdown>{mdText}</ReactMarkdown>
            </Flex>
          ) : (
            <Container w={"100%"}>
              <SimpleMdeReact value={mdText} onChange={mdEdit} />
            </Container>
          )}
          {currNote?.id && <ActionNoteButtons listIdNote={currNote.id} />}
        </Flex>
      ) : (
        <SuspenseProvider>
          <EmptyNotesList />
        </SuspenseProvider>
      )}
    </>
  );
};
