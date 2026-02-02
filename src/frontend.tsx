/**
 * Entry point for this websites' frontend.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

if (import.meta.hot) {
  // With HMR, `import.meta.hot.data` is persisted
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // HMR API is not available in production
  createRoot(elem).render(app);
}
