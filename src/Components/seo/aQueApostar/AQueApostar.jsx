import { Helmet } from "react-helmet";
import { Accordion, Image, Col } from "react-bootstrap";

// import "../../../pages.css";
// import "../../../pagesMobile.css";

const AQueApostar = () => {
  return (
    <>
      <Helmet>
        <title>Apuestas y pronósticos Super Bowl en Colombia | Codere®</title>
        <link
          rel="canonical"
          href="https://www.codere.com.co/eventos-deportivos/apuestas-superbowl"
        />
        <meta
          name="description"
          content="Juega online en Codere, la casa de apuestas deportivas #1 en Colombia y aprovecha las mejores cuotas del mercado para el Super Bowl de la NFL."
        ></meta>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-auto min-vh-100 bg-black mt-6 kuku">
            <h3 className="mt-5">¿Necesitas Ayuda?</h3>
            <ul>
              <li>
                <a href="#" className="nav-link px-2">
                  <i className="bi-house" />
                  <span className="ms-1 d-none d-sm-inline">
                    Registro y acceso
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  <i className="bi-house" />
                  <span className="ms-1 d-none d-sm-inline">Depósitos</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  <i className="bi-house" />
                  <span className="ms-1 d-none d-sm-inline">Retiros</span>
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2">
                  <i className="bi-house" />
                  <span className="ms-1 d-none d-sm-inline">Apuestas</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*container*/}
    </>
  );
};

export default AQueApostar;
