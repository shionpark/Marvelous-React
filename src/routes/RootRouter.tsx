import React from "react";
import { Route, Routes } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Home, Detail } from "../pages";

export const RootRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:characterId" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};
