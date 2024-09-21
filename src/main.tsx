// react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// react-router-dom
import { BrowserRouter } from "react-router-dom";

// routes
import { MainRoutes } from "./routes/MainRoutes";

// serviceWorkers
import { registerServiceWorker } from "@serviceWorkers/registerServiceWorker";

//mantine
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

// styles
import "@mantine/core/styles.css";
import "@app/index.css";

registerServiceWorker();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <ModalsProvider>
          <MainRoutes />
        </ModalsProvider>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
