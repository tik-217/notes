// components
import { Sidebar } from "@components/Sidebar";
import { notesList } from "@data/notesList";

// mantine
import { Flex } from "@mantine/core";
import { useEffect } from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

export function MainLayout() {
  useEffect(() => {
    const lsNotes = localStorage.getItem("notes");

    if (lsNotes !== null) return;

    localStorage.setItem("notes", JSON.stringify(notesList));
  }, []);

  return (
    <Flex direction={"row"} align={"start"}>
      <Sidebar />
      <Outlet />
    </Flex>
  );
}
