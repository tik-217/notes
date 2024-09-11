// mantine
import { UnstyledButton, Text, Group, Flex } from "@mantine/core";

// components
import { UserSection } from "@components/UserSection";

import { Search } from "@components/Search";
// tabler-icons
import { IconNote } from "@tabler/icons-react";

// styles
import classes from "./Main.module.css";
import { NoteSection } from "@components/NoteSection";

const links = [
  {
    icon: IconNote,
    label: "Lorem ipsum dolor sit",
  },
  { icon: IconNote, label: "Tasks" },
  { icon: IconNote, label: "Contacts" },
];

export function Main() {
  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
    </UnstyledButton>
  ));

  return (
    <Flex direction={"row"} align={"start"}>
      <nav className={classes.navbar}>
        <div className={classes.section}>
          <UserSection />
        </div>

        <Search />

        <div className={classes.section}></div>

        <div className={classes.section}>
          <Group className={classes.collectionsHeader} justify="space-between">
            <Text size="xs" fw={500} c="dimmed">
              Notes
            </Text>
          </Group>
          <div className={classes.collections}>{mainLinks}</div>
        </div>
      </nav>
      <NoteSection />
    </Flex>
  );
}
