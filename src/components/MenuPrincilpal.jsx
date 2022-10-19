import Detalle from "../views/Detalle/detalle"
import imgMenu from "../templates/img/menu-img.jpg";
import menuLogo from "../templates/img/data.jpg";
import Hor from "../views/home/inicio" 
import "../templates/styles/nav.css";


const MenuPrincipal = () => {

const alert = () => {
  console.log("HOla");
}



return (
    <>
      <div className="contenedor">
        <div className="header__container">
          <div className="header_nav">
            <ul className="header_ul">
              <li>Titulo</li>
              <li>Titulo</li>
              <li>Titulo</li>
              <li>Titulo</li>
            </ul>
          </div>
          <div className="header_nav">
            <ul className="header_ul ">
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
          </div>
        </div>



      </div>
      <Detalle/>
    
     

    </>
  );
};
export default MenuPrincipal;
