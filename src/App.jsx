import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import "./App.css";
import { toastme } from "toastmejs";
import ForLoginData from "./views/login/forLoginData";
import { Link, Route, Routes } from "react-router-dom";
import MenuPrincipal from "./components/MenuPrincilpal";
import LayoutPanelDeControl from "./components/layout/menuTrabajador";
import Login from "./views/login/login";
import Registro from "./views/registro/registro";

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/home/*" element={<LayoutPanelDeControl />} />
      </Routes>
    </>
  );
}

export default App;
