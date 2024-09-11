// mantine
import { Flex, Loader } from "@mantine/core";

export function DefaultLoader() {
  return (
    <Flex justify={"center"} w={"100%"} mt={40}>
      <Loader color="blue" />
    </Flex>
  );
}
