import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ForLoginData from "./views/login/forLoginData";
import { Link, Route, Routes } from "react-router-dom";
import MenuPrincipal from "./components/MenuPrincilpal";
import LayoutPanelDeControl from "./components/layout/menuTrabajador";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path='*' element={<MenuPrincipal />} />
        <Route path="/login" element={<LayoutPanelDeControl />} />
      </Routes>
      
    </>
  );
}

export default App;
