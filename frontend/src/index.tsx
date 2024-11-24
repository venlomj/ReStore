import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/app/layout/styles.css";
import App from "./app/layout/App.tsx";
// Material UI Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);