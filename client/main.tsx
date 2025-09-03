import { createRoot, type Root } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container #root not found");
}

declare global {
  interface Window {
    __reactRoot?: Root;
  }
}

if (!window.__reactRoot) {
  window.__reactRoot = createRoot(container);
}

window.__reactRoot.render(<App />);
