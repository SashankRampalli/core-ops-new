import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import config from "devextreme/core/config";
import { licenseKey } from "./utils/devextreme-license.ts";

config({ licenseKey });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
