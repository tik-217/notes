// react
import { useContext } from "react";

// react-router-dom
import { Link, useParams } from "react-router-dom";

// context
import { LocalStorageNotes } from "@context/LocalStorageNotes";
import { EditNoteContext } from "@context/EditNoteContext";

// components
import { UserSection } from "@components/UserSection";
import { Search } from "@components/Search";

// mantine
import { Group, Text, UnstyledButton } from "@mantine/core";

// styles
import classes from "./Sidebar.module.css";

// icons
import { IconNote } from "@tabler/icons-react";

export function Sidebar() {
  const { editNote } = useContext(EditNoteContext);
  const { notes } = useContext(LocalStorageNotes);
  const { id: noteId } = useParams();

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
            <Link
              key={link.id}
              to={`/notes/${link.id}`}
              onClick={() => editNote(false)}
            >
              <UnstyledButton
                className={classes.mainLink}
                style={
                  noteId && +noteId === link.id
                    ? { backgroundColor: "#dbe4ff" }
                    : {}
                }
              >
                <div className={classes.mainLinkInner}>
                  <IconNote
                    size={20}
                    className={classes.mainLinkIcon}
                    stroke={1.5}
                  />
                  <span>{link.label}</span>
                </div>
              </UnstyledButton>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
