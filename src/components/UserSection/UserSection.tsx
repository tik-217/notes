// react
import { memo, useContext } from "react";

// mantine
import { UnstyledButton, Group, Avatar, Text, rem } from "@mantine/core";

// tabler-icons
import { IconChevronRight } from "@tabler/icons-react";

// context
import { AuthContext } from "@context/AuthContext";

// styles
import classes from "./UserSection.module.css";

export const UserSection = memo(() => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <UnstyledButton className={classes.user} onClick={() => signOut(() => {})}>
      <Group wrap="nowrap">
        <Avatar name={user?.name} radius="xl" color="initials" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {user?.name}
          </Text>

          <Text c="dimmed" size="xs">
            {user?.email && user?.email}
          </Text>
        </div>

        <IconChevronRight
          style={{ width: rem(14), height: rem(14) }}
          stroke={1.5}
        />
      </Group>
    </UnstyledButton>
  );
});
