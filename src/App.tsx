import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // BrowserRouter 추가
import { RootRouter } from "./routes";

const App = () => {
  return (
    <Router>
      <RootRouter />
    </Router>
  );
};

export default App;
