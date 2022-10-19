import {BrowserRouter, Route, Routes } from "react-router-dom";
import Detalle from "../../views/Detalle/detalle";
import Listado from "../../views/listadoTablas/listadoUsuario";

const RoterVista = () => {
  return (
    <>
      <div className="ventana_principal">
    
        <Routes>
          <Route path="/listado" element={<Listado />} />
          <Route path="/detalle/:id" element={<Detalle />} />
        </Routes>
      
      </div>
    </>
  );
};

export default RoterVista;
