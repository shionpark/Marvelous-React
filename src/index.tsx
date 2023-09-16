import React from "react";
import CreateDOM from "react-dom/client";
import { GlobalStyles } from "./styles";
import { RouterProvider } from "react-router-dom";
import router from "./routes/RootRouter";

const root = document.getElementById("root");
if (!root) throw new Error("Failed to find the root element");
const appRoot = CreateDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />;
  </React.StrictMode>
);
