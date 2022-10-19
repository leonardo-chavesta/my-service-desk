
import Detalle from "../views/Detalle/detalle"
import imgMenu from "../templates/img/menu-img.jpg";
import menuLogo from "../templates/img/data.jpg";
import Hor from "../views/home/inicio" 
import "../templates/styles/nav.css";
import Registro from "../views/registro/registro";
import Home from "../views/home/home";
import { Route, Link, Routes, NavLink, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const MenuPrincipal = () => {
  const alert = () => {
    console.log("Hola");
  };

  return (
    <>
      <div className="contenedor">
        <div className="header__container">
          <div className="header_nav">
            <ul className="header_ul ">
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="header_nav">
            <ul className="header_ul">
              <li>
                <Link to="">Inicio</Link>
              </li>
              <li>
                <NavLink to="/usuario">Acerca De Nosotros</NavLink>
              </li>
              <li>
                <a>Servicios</a>
              </li>
              <li>
                <Link to="/login">
                  <Button variant="danger" active >
                    Login Servicio
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <Detalle/>
      </div>
      {/* <Registro /> */}
      <Home />

    </>
  );
};
export default MenuPrincipal;
