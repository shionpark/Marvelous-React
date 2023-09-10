import React from "react";
import CreateDOM from "react-dom/client";

import App from "./App";
import { createGlobalStyle } from "styled-components";

const root = document.getElementById("root");
if (!root) throw new Error("Failed to find the root element");
const appRoot = CreateDOM.createRoot(root);

const GlobalStyles = createGlobalStyle`
  
  body {
    padding: 30px 70px; 
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: black;
    color: white;
  }
  
  a {
  text-decoration: none;
  }

  a:visited:not(.history-link) {
    color: inherit;
  }
`;

appRoot.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
