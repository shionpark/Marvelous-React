import React from "react";
import CreateDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles";
import { RootRouter } from "./routes";

const root = document.getElementById("root");
if (!root) throw new Error("Failed to find the root element");
const appRoot = CreateDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={RootRouter} />
  </React.StrictMode>
);
