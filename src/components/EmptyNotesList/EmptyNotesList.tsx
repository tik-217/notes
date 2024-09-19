// mantine
import { Flex, Title } from "@mantine/core";

export function EmptyNotesList() {
  return (
    <Flex
      mt={"lg"}
      ml={"lg"}
      mr={"lg"}
      justify={"space-between"}
      align={"flex-start"}
      w={"100%"}
    >
      <Title order={3}>Нет такой заметки</Title>
    </Flex>
  );
}
