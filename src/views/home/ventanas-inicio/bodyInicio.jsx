import "../../../App.css";
import img1 from "../../../templates/img/iconos/1.jpg";
import img2 from "../../../templates/img/iconos/2.jpg";
import img3 from "../../../templates/img/iconos/3.jpg";
import img4 from "../../../templates/img/iconos/4.jpg";
import img5 from "../../../templates/img/iconos/5.jpg";
import img6 from "../../../templates/img/iconos/6.jpg";

const bodyInicio = () => (
  <>
    <div className="container__body">
      <h2>
        <b> Software de mesa de ayuda y servicio TI </b>
      </h2>
      <div className="container__body__text">
        Nuestro ServiceDesk es revolucionario porque cambia el modo de trabajo
        de los equipos de TI para solucionar los problemas del día a día al ser
        los responsables de entregar un increíble servicio al cliente. Brinda
        una gran visibilidad y un control central al tratar con los problemas de
        TI para garantizar que el negocio no sufra momentos de inactividad y
        contando, entregamos sonrisas a millones de responsables de TI, usuarios
        finales y administradores.
      </div>
    </div>

    <h1 className="container_h2_body">
      {" "}
      Construido para potenciar su help desk de TI
    </h1>
    
    <div className="seccion__potencial">
      <div className="seccion_1">
        <div className="seccion1__div">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <p>Nuestro Equipo con las</p>
            <p>mejores prácticas</p>
          </div>
        </div>
        <div className="seccion1__div">
          <img src={img2} alt="" />
          <div>
            <p>Potentes integraciones</p>
            <p>para administración de TI</p>
          </div>
        </div>
        <div className="seccion1__div">
          <img src={img3} alt="" />
          <div>
            <p>Rapidos para una</p>
            <p>mejor Automatización</p>
          </div>
        </div>
      </div>
      <div className="seccion_1">
        <div className="seccion1__div">
          <img src={img4} alt="" />
          <div>
            <p>Amplias capacidades</p>
            <p>de informes</p>
          </div>
        </div>
        <div className="seccion1__div">
          <img src={img5} alt="" />
          <div >
            <p>Personalizaciones</p>
         
          </div>
        </div>
        <div className="seccion1__div">
          <img src={img6} alt="" />
          <div>
            <p>Implementación en </p>
            <p>la nube</p>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default bodyInicio;
