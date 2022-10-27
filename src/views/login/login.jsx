import "../registro/estiloRegistro.css";
import city from "../../templates/img/city.jpg";
import { Link , Navigate} from "react-router-dom";
import { LogeaUsuario } from "../../services/apis/ApisServer";
import { useFormik } from "formik";
import { Alert, Form } from "react-bootstrap";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
    },
  });
  const handleSave =() => {
    if(formik.values.username === 'leonardo@gmail.com'){
      window.alert("Bienvenido")
      return(<><Navigate to="home" /></>)
    }
    else{
      alert("Error al colocar el usuario")
      return(<><Navigate to="login" /></>)
    }
  }

  return (
    
    <div class="container w-75 mt-5 rounded shadow">
      
      <div class="row align-items-stretch">
        <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
          <img class="cityimg" src={city} className="rounded" />
        </div>
        <div class="col bg-white p-5 rounded-end">
          <h2 class="fw-bold tex-center py-5">Bienvenidos</h2>
    
          <div class="mb-4">
            <label for="text" class="form-label">
              Nombre usuario
            </label>
            {/* <input type="email" class="form-control" name="email" /> */}
            <Form.Control
                 className="form-control"
                   size="sm"
                  name="username"
                  type="text"
                  values={formik.values?.username} 
                  onChange={formik.handleChange}
                />
          </div>

          <div class="mb-4">
            <label for="password" class="form-label">
              Contraseña
            </label>
            <input type="password"  name="password" />
            <Form.Control
                 className="form-control"
                   size="sm"
                  name="password"
                  type="password"
                  values={formik.values?.password} 
                  onChange={formik.handleChange}
                />
          </div>

          <div className="d-grid">
            <a href="home">
              <button onClick={handleSave} className="btn btn-primary">Iniciar Sesión</button>
              <ToastContainer />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Login;
