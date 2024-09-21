// react
import { useContext } from "react";

// mantine
import { ActionIcon, Text } from "@mantine/core";
import { modals } from "@mantine/modals";

// context
import { LocalStorageNotesContext } from "@context/LocalStorageNotesContext";
import { IconTrash } from "@tabler/icons-react";

export const DeletingNotes = ({ listIdNote }: { listIdNote: number }) => {
  const { deleteNote } = useContext(LocalStorageNotesContext);

  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: "Удалить заметку",
      centered: true,
      children: <Text size="sm">Вы уверенны, что хотите удалить заметку?</Text>,
      labels: { confirm: "Удалить заметку", cancel: "Не удалять" },
      confirmProps: { color: "red" },
      onConfirm: () => deleteNote(listIdNote),
    });

  return (
    <ActionIcon
      variant="outline"
      onClick={openDeleteModal}
      color="red"
      aria-label="IconTrash"
      mr={"xs"}
    >
      <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
    </ActionIcon>
  );
};
