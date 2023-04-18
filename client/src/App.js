import React from "react";
import { Route, Routes } from "react-router-dom";
//styles
import "./App.css";
//components
import Home from "./components/views/home/Home";
import QuienesSomos from "./components/views/quienesSomos/QuienesSomos";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
    </div>
  );
}

export default App;
