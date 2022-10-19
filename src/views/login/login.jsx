
import '../registro/estiloRegistro.css'
import city from '../../templates/img/city.jpg'


const Login = () => {
  return (
    <div class="container w-75 bg-primary mt-5 rounded shadow">
      <div class="row align-items-stretch">
        <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded"></div>
        <div class="col bg-white p-5 rounded-end">
          <div className="cityimg">
            <img
              class="cityimg"
              src={city}
              className="rounded"
            />
          </div>
          <h2 class="fw-bold tex-center py-5">Bienvenidos</h2>
          <form action="#">
            <div class="mb-4">
              <label for="email" class="form-label">
                Correo electronico
              </label>
              <input type="email" class="form-control" name="email" />
            </div>

            <div class="mb-4">
              <label for="password" class="form-label">
                Contraseña
              </label>
              <input type="password" class="form-control" name="password" />
            </div>

            <div class="mb-4 form-check">
              <input
                type="checkbox"
                name="connected"
                class="form-check-input"
              />
              <label for="connected" class="form-check-label">
                Recordar contraseña
              </label>
            </div>

            <div className="d-grid">
              <button className='btn btn-primary'>
                Iniciar Sesión
              </button>
            </div>

            <div class="my-3">
              <span>
                No tienes cuenta?&nbsp;<a className='text-primary' href="#"> Registrate</a>
              </span>{" "}
              <br />
              <span>
                <a href="#"><p className='text-primary'>Recuperar Contraseña</p></a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
