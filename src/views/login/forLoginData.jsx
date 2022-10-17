import { NavLink } from "react-router-dom";


const ForLoginData = () => {
  const hola= () => {
    console.log("hola")
  }
  return (
    <><head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>login</title>
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link href="cssU.css" rel="stylesheet" type="text/css" />
      <link href="javascriptU.js" />
    </head><body>
        <script href="javascriptU.js"></script>
        <div class="container w-75 bg-primary mt-5 rounded shadow">
          <div class="row align-items-stretch">
            <div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">

            </div>
            <div class="col bg-white p-5 rounded-end">
              <div class="text-end">
                <img class="cat" src="img/st,small,507x507-pad,600x600,f8f8f8.jpg" width="48" alt="" />
              </div>

              <h2 class="fw-bold tex-center py-5">Bienvenidos</h2>


              <form action="#">
                <div class="mb-4">
                  <label for="email" class="form-label">Correo electronico</label>
                  <input type="email" class="form-control" name="email" />
                </div>

                <div class="mb-4">
                  <label for="password" class="form-label">Contraseña</label>
                  <input type="password" class="form-control" name="password" />
                </div>

                <div class="mb-4 form-check">
                  <input type="checkbox" name="connected" class="form-check-input" />
                  <label for="connected" class="form-check-label">Recordar contraseña</label>
                </div>

                <div class="d-grid">
                  <button type="submit" class="btn btn-primary"><a href="menuU.html">Iniciar Sesión</a></button>

                </div>

                <div class="my-3">
                  <span>No tienes cuenta?&nbsp;<a href="#">Registrate</a></span> <br />
                  <span><a href="#">Recuperar Contraseña</a></span>
                </div>
              </form>
            </div>
          </div>
        </div>

        <script src="js/bootstrap.bundle.min.js"></script>
      </body></>
  );
};
export default ForLoginData;
