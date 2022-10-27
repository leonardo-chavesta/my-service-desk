import { Button } from "react-bootstrap";
import "../../templates/styles/inicio.css";
import imgLogo from "../../templates/img/FONDO_icono.jpg";
import imgDescripcion from "../../templates/img/ico.png";
import BodyInicio from "./ventanas-inicio/bodyInicio";
import { Link } from "react-router-dom";

const ventanaPrincipal = () => (
  <>
    <div  className="container__logo">
      <div className="container__div">
        <h1>Forma parte de nosotros</h1>
        <h2>Service Desk de TI exitosos</h2>
        <p>Soporte a los ususarios empoder a los técnicos</p>
        <div className="container__botones">
          {/* <Link to='register' >
          <Button
            variant="danger"
            size="lg"
            className="container__botonesreact"
            active
          >
            Registrarse
          </Button></Link> */}

        </div>
      </div>
      <div className="container_img">
        <img src={imgLogo} alt="" />
      </div>
    </div>
    <div className="container__descripcion">
        <div className="container__descripcion__img">
            <img className='img' src={imgDescripcion} alt="" />
        </div>
        <div className="container__descripcion__text">
           <p>Soporte multifuncional que incorpora servicios técnicos a comerciales</p>
           <p>Nuestra funcion sirven para brindar soporte a los clientes y organizar los procesos internos de la empresa</p>
        </div>
    </div>
    <BodyInicio id="seccion" />
  </>
  
);
export default ventanaPrincipal;
