import React from "react";
import CreateDOM from "react-dom/client";

import App from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("Failed to find the root element");
const appRoot = CreateDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
