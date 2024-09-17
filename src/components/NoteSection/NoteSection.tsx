// react
import { useCallback, useContext, useEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// react-markdown
import ReactMarkdown from "react-markdown";

// react-simplemde-editor
import { SimpleMdeReact } from "react-simplemde-editor";

// context
import { EditNoteContext } from "@context/EditNoteContext";
import { LocalStorageNotes } from "@context/LocalStorageNotes";

// manitne
import { ActionIcon, Container, Flex } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconTrash } from "@tabler/icons-react";

// styles
import "easymde/dist/easymde.min.css";

export function NoteSection() {
  // params
  const { id: noteId } = useParams();

  // state
  const [mdText, setMdText] = useState("");

  // context
  const { isEditNote, editNote } = useContext(EditNoteContext);
  const { notes, saveNewNotes } = useContext(LocalStorageNotes);

  const mdEdit = useCallback((newText: string) => {
    setMdText(newText);
  }, []);

  useEffect(() => {
    if (!noteId) return;
    if (!notes.length) return;

    const currNoteLS = notes[+noteId - 1];

    setMdText(currNoteLS.text);
    // eslint-disable-next-line
  }, [notes]);

  useEffect(() => {
    saveNewNotes(mdText);
    // eslint-disable-next-line
  }, [mdText]);

  return (
    <>
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
    </>
  );
}
