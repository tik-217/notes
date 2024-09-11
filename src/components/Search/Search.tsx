// mantine
import { Code, Kbd, rem, TextInput } from "@mantine/core";

// tabler-icons
import { IconSearch } from "@tabler/icons-react";

// styles
import classes from "./Search.module.css";

export function Search() {
  return (
    <TextInput
      placeholder="Search"
      size="xs"
      leftSection={
        <IconSearch style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
      }
      rightSectionWidth={70}
      rightSection={
        <Code className={classes.searchCode}>
          <Kbd>Shift</Kbd>
          <Kbd>K</Kbd>
        </Code>
      }
      styles={{ section: { pointerEvents: "none" } }}
      mb="sm"
    />
  );
}
