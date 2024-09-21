// react
import { lazy, useContext } from "react";

// react-router-dom
import { Link, useParams } from "react-router-dom";

// context
import { LocalStorageNotesContext } from "@context/LocalStorageNotesContext";

// components
import { ActionNoteButtons } from "@components/ActionNoteButtons";
import { UserSection } from "@components/UserSection";

// mantine
import { Flex, Group, Text, UnstyledButton } from "@mantine/core";

// styles
import classes from "./Sidebar.module.css";

// icons
import { IconNote } from "@tabler/icons-react";

const Search = lazy(() =>
  import("@components/Search").then(({ Search }) => ({
    default: Search,
  }))
);

export const Sidebar = () => {
  const { notes } = useContext(LocalStorageNotesContext);
  const { id: noteId } = useParams();

  const activeNoteStyles = (linkId: number) =>
    noteId && +noteId === linkId ? { color: "#fc8c0c" } : {};

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
        <div className={classes.collections}>
          {notes.map((link) => (
            <Link to={`/notes/${link.id}`} key={link.id}>
              <Flex align={"center"} justify={"space-between"}>
                <UnstyledButton className={classes.mainLink}>
                  <div className={classes.mainLinkInner}>
                    <IconNote
                      size={20}
                      className={classes.mainLinkIcon}
                      stroke={1.5}
                      style={activeNoteStyles(link.id)}
                    />
                    <span style={activeNoteStyles(link.id)}>{link.label}</span>
                  </div>
                </UnstyledButton>
                <ActionNoteButtons listIdNote={link.id} />
              </Flex>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
