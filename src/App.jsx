import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ForLoginData from "./views/login/forLoginData";
import {Link, Route, Routes } from "react-router-dom";
import MenuPrincipal from './components/MenuPrincilpal'

function App() {
  const [count, setCount] = useState(0);

  return (
    <MenuPrincipal />
  );
}

export default App;
