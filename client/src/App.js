import React from "react";
import { Route, Routes } from "react-router-dom";
//styles
import "./App.css";
//components
import Home from "./components/views/home/Home";
//Quienes somos
import MisionYVision from "./components/views/quienesSomos/misionYVision/MisionYVision";
import AlianzasEstrategicas from "./components/views/quienesSomos/alianzasEstratégicas/AlianzasEstrategicas";
import NuestrosLogros from "./components/views/quienesSomos/nuestrosLogros/NuestrosLogros";
import RegimenTE from "./components/views/quienesSomos/regimenTE/RegimenTE";
import ResponsabilidadSE from "./components/views/quienesSomos/responsabilidadSE/ResponsabilidadSE";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mision-y-vision" element={<MisionYVision />} />
        <Route
          path="/responsabilidad-social-empresarial"
          element={<ResponsabilidadSE />}
        />
        <Route path="/regimen-tributario-especial" element={<RegimenTE />} />
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
