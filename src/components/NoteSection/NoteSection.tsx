import { useCallback, useContext } from "react";

// react
import { useState } from "react";

// context
import { EditNoteContext } from "@context/EditNoteContext/EditNoteContext";

// manitne
import { ActionIcon, Container, Flex, Text } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

// react-simplemde-editor
import { SimpleMdeReact } from "react-simplemde-editor";

// styles
import "easymde/dist/easymde.min.css";

export function NoteSection() {
  const [value, setValue] = useState("Initial text");

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  const { isEditNote, editNote } = useContext(EditNoteContext);

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
            <Text>{value}</Text>
          </Container>
        ) : (
          <Container>
            <SimpleMdeReact value={value} onChange={onChange} />
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
