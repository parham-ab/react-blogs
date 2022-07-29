import React from "react";
// react-router-dom
import { Routes, Route, Navigate } from "react-router-dom";
// components
import LayOut from "./components/layout";
import HomePage from "./components/home/HomePage";

const App = () => {
  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </LayOut>
  );
};

export default App;
