// react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// react-router-dom
import { BrowserRouter } from "react-router-dom";

// routes
import { MainRoutes } from "./routes/MainRoutes";

//mantine
import { MantineProvider } from "@mantine/core";

// styles
import "@mantine/core/styles.css";
import "@app/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <MainRoutes />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
