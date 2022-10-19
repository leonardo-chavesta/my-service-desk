import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer= () => {
  return (
    <>
      <div className="bg-dark text-center text-white">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Conéctese con nosotros en las redes sociales:</span>
          </div>

          <div >

            <a href="" className="me-4 link-secondary">
            <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 link-secondary">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary"></i>
                  Service Desk
                </h6>
                <p>
                Ser el punto central de contacto entre su equipo de servicio y el usuario del software o incluso el cliente que realizó o aún realizará una compra con tu empresa.
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contactos</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary"></i> Lima, Perú
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary"></i>
                  serviseDesk@7895gmai.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary"></i> +51 945535465
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary"></i> +51 945535649
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
        >
          © 2022 Derechos de autor : {' '}
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Service Desk 
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
