// manitne
import { ActionIcon, Container, Flex, Title } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";

export function NoteSection() {
  return (
    <Flex
      mt={"lg"}
      ml={"lg"}
      mr={"lg"}
      justify={"space-between"}
      align={"center"}
      w={"100%"}
    >
      <Container size={"md"} m={0}>
        <Title order={2}>Main Notes</Title>
      </Container>
      <Container m={0}>
        <ActionIcon
          variant="outline"
          color="red"
          aria-label="Settings"
          mr={"xs"}
        >
          <IconTrash style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ActionIcon>
        <ActionIcon variant="outline" color="gray" aria-label="Settings">
          <IconPencil style={{ width: "70%", height: "70%" }} stroke={1.5} />
        </ActionIcon>
      </Container>
    </Flex>
  );
}
