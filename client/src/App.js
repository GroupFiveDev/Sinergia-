import React from "react";
import { Route, Routes } from "react-router-dom";
//styles
import "./App.css";
//components
import Home from "./components/views/home/Home";
import MisionYVision from "./components/views/quienesSomos/misionYVision/MisionYVision";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mision-y-vision" element={<MisionYVision />} />
        <Route
          path="/alianzas-estrategicas"
          element={<AlianzasEstrategicas />}
        />
        <Route path="/nuestros-logros" element={<NuestrosLogros />} />
      </Routes>
    </div>
  );
}

export default App;
