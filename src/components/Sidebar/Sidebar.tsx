// react
import { useContext } from "react";

// react-router-dom
import { Link } from "react-router-dom";

// context
import { EditNoteContext } from "@context/EditNoteContext";

// components
import { Search } from "@components/Search";
import { UserSection } from "@components/UserSection";

// mantine
import { Group, Text, UnstyledButton } from "@mantine/core";

// ui
import { notesList } from "@data/notesList";

// styles
import classes from "./Sidebar.module.css";

export function Sidebar() {
  const { editNote } = useContext(EditNoteContext);

  const mainLinks = notesList.map((link) => (
    <Link
      key={link.id}
      to={`/notes/${link.id}`}
      onClick={() => editNote(false)}
    >
      <UnstyledButton className={classes.mainLink}>
        <div className={classes.mainLinkInner}>
          <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
          <span>{link.label}</span>
        </div>
      </UnstyledButton>
    </Link>
  ));

  return (
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
  );
}
