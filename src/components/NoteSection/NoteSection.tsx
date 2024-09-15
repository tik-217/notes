// react
import { useCallback, useContext, useEffect, useState } from "react";

// react-router-dom
import { useParams } from "react-router-dom";

// context
import { EditNoteContext } from "@context/EditNoteContext/EditNoteContext";

// data
import { notesList } from "@data/notesList";

// manitne
import { ActionIcon, Container, Flex } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

// react-markdown
import ReactMarkdown from "react-markdown";

// react-simplemde-editor
import { SimpleMdeReact } from "react-simplemde-editor";

// styles
import "easymde/dist/easymde.min.css";

export function NoteSection() {
  const { id: noteId } = useParams();
  const { isEditNote, editNote } = useContext(EditNoteContext);
  const [mdText, setMdText] = useState("");

  const mdEdit = useCallback((newText: string) => {
    setMdText(newText);
  }, []);

  useEffect(() => {
    const initialText = noteId
      ? notesList.filter((el) => el.id === +noteId)
      : [];

    setMdText(initialText[0].text);
  }, [noteId]);

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
          <Container>
            <ReactMarkdown>{mdText}</ReactMarkdown>
          </Container>
        ) : (
          <Container>
            <SimpleMdeReact value={mdText} onChange={mdEdit} />
          </Container>
        )}
        <Container m={0}>
          <ActionIcon
            variant="outline"
            color="red"
            aria-label="Settings"
            mr={"xs"}
          >
            <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            variant="outline"
            color="gray"
            aria-label="Settings"
            onClick={() => editNote(!isEditNote)}
          >
            <IconPencil style={{ width: "70%", height: "70%" }} stroke={1.5} />
          </ActionIcon>
        </Container>
      </Flex>
    </>
  );
}
