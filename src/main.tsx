import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "inversify-react";
import { container } from "@configs/inversify.config.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider container={container}>
      <App />
    </Provider>
  </StrictMode>
);
