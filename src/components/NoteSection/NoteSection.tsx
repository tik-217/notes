// react
import { useCallback, useContext, useEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// react-markdown
import ReactMarkdown from "react-markdown";

// react-simplemde-editor
import { SimpleMdeReact } from "react-simplemde-editor";

// context
import { EditNoteContext } from "@context/EditNoteContext/EditNoteContext";

// hooks
import { useGetItemsFromLS } from "@hooks/useGetItemsFromLS";
import { useSaveNewNotes } from "@hooks/useSaveNewNotes";

// manitne
import { ActionIcon, Container, Flex } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconTrash } from "@tabler/icons-react";

// styles
import "easymde/dist/easymde.min.css";

export function NoteSection() {
  const { id: noteId } = useParams();
  const { isEditNote, editNote } = useContext(EditNoteContext);
  const [mdText, setMdText] = useState("");

  const mdEdit = useCallback((newText: string) => {
    setMdText(newText);
  }, []);

  const { notes } = useGetItemsFromLS({ noteId });

  useEffect(() => {
    if (!noteId) return;
    if (!notes.length) return;

    const currNoteLS = notes[+noteId - 1];

    setMdText(currNoteLS.text);
    // eslint-disable-next-line
  }, [notes]);

  useSaveNewNotes({ notes, isEditNote, noteId, mdText });

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
