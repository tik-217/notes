// react
import { useContext } from "react";

// mantine
import { ActionIcon, Flex } from "@mantine/core";
import { IconPencil } from "@tabler/icons-react";

// modals
import { DeletingNotes } from "@modals/DeletingNote";

// context
import { EditNoteContext } from "@context/EditNoteContext";

interface IActionNoteButtons {
  listIdNote: number;
}

export const ActionNoteButtons = ({ listIdNote }: IActionNoteButtons) => {
  const { isEditNote, editNote } = useContext(EditNoteContext);

  return (
    <Flex m={0} wrap={"nowrap"}>
      <DeletingNotes listIdNote={listIdNote} />
      <ActionIcon
        variant="outline"
        color="gray"
        aria-label="IconPencil"
        onClick={() => editNote(!isEditNote)}
      >
        <IconPencil style={{ width: "70%", height: "70%" }} stroke={1.5} />
      </ActionIcon>
    </Flex>
  );
};
