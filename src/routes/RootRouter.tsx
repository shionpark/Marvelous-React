import React from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "@/App";
import { Home, Detail } from "../pages";

const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Home />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/character/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default RootRouter;
