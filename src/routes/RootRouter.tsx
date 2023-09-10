import React from "react";
import { Route, Routes } from "react-router";

import { Home, Detail } from "../pages";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};
