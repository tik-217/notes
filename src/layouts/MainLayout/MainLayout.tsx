// components
import { Sidebar } from "@components/Sidebar";

// mantine
import { Flex } from "@mantine/core";

// react-router-dom
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <Flex direction={"row"} align={"start"}>
      <Sidebar />
      <Outlet />
    </Flex>
  );
}
