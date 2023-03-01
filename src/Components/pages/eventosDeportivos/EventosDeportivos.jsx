import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Zoom } from "react-awesome-reveal";
import { Card, Image } from "react-bootstrap";

import "../pages.css";
import "../pagesMobile.css";
import articleStructuredData from "./articleStructuredData.json";

const EventosDeportivos = () => {
  return (
    <>
      <Helmet>
        <title>Apuestas de Eventos Deportivos en Colombia | Codere®</title>
        <link
          rel="canonical"
          href="https://www.codere.com.co/eventos-deportivos"
        />
        <meta
          name="description"
          content="Conoce más acerca del mundo de los eventos deportivos y pon a prueba tu suerte en Codere, la casa de apuestas deportivas y casino online #1 en Colombia."
        ></meta>

        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      </Helmet>

      <div className="container">
        <div className="row mb-5">
          <div className="col-12 mt-3-6">
            <Image
              className="img-fluid"
              src="https://codere.com.co/SEOpagesImg/EventosDeportivos/top-banner-eventos.webp"
            />
          </div>
        </div>

        <div className="row mb-5 mt-3">
          <div className="col-12">
            <h1 className="PageH1TitleSeoPages923">
              En Codere encuentras los mejores Eventos Deportivos
            </h1>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-sm-6 ">
            <Zoom triggerOnce>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://codere.com.co/SEOpagesImg/EventosDeportivos/banner-eventos-mundial.webp"
                />
                <Card.Body>
                  <Link
                    to={"apuestas-mundial-fifa"}
                    className={"eventosDeportivasLinkTitle"}
                  >
                    <h2>Consejos de Apuestas para el Mundial de Qatar</h2>
                  </Link>
                  <Card.Text className="eventosDeportivasText">
                    Aquí podrás encontrar estadísticas y pronósticos para que
                    apuestes con las mejores cuotas deportivas de cara al
                    Mundial de Catar 2022.
                  </Card.Text>
                  <div className="wrapperEventosDeportivasLinkBtn">
                    <Link
                      to={"apuestas-mundial-fifa"}
                      rel={"nofollow"}
                      className={"eventosDeportivasLinkBtnMy78"}
                    >
                      Ver información
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Zoom>
          </div>

          <div className="col-12 col-sm-6 ">
            <Zoom triggerOnce>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://codere.com.co/SEOpagesImg/EventosDeportivos/banner-eventos-basket.webp"
                />
                <Card.Body>
                  <Link
                    to={"apuestas-mundial-baloncesto"}
                    className={"eventosDeportivasLinkTitle"}
                  >
                    <h2>Guía de Apuestas Mundial de Baloncesto FIBA</h2>
                  </Link>
                  <Card.Text className="eventosDeportivasText">
                    La temporada de la NBA acaba de empezar, en Codere podrás
                    consultar todos los pronósticos deportivos y análisis para
                    que selecciones adecuadamente tus apuestas.
                  </Card.Text>
                  <div className="wrapperEventosDeportivasLinkBtn">
                    <Link
                      to={"apuestas-mundial-baloncesto"}
                      rel={"nofollow"}
                      className={"eventosDeportivasLinkBtnMy78"}
                    >
                      Ver información
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Zoom>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <Zoom triggerOnce>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://codere.com.co/SEOpagesImg/EventosDeportivos/banner-eventos-mlb.webp"
                />
                <Card.Body>
                  <Link
                    to={"apuestas-juego-de-las-estrellas"}
                    className={"eventosDeportivasLinkTitle"}
                  >
                    <h2>Guía de Apuestas Juego de las Estrellas MLB</h2>
                  </Link>
                  <Card.Text className="eventosDeportivasText">
                    El Gran juego de las estrellas se acerca, por eso en Codere,
                    te traemos consejos y estadísticas para que decidas a que
                    jugador o conferencia vas a apostar.
                  </Card.Text>
                  <div className="wrapperEventosDeportivasLinkBtn">
                    <Link
                      to={"apuestas-juego-de-las-estrellas"}
                      rel={"nofollow"}
                      className={"eventosDeportivasLinkBtnMy78"}
                    >
                      Ver información
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Zoom>
          </div>

          <div className="col-12 col-sm-6  ">
            <Zoom triggerOnce>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://codere.com.co/SEOpagesImg/EventosDeportivos/banner-eventos-superbowl.webp"
                />
                <Card.Body>
                  <Link
                    to={"apuestas-superbowl"}
                    className={"eventosDeportivasLinkTitle"}
                  >
                    <h2>Consejos de Apuestas para el Superbowl</h2>
                  </Link>
                  <Card.Text className="eventosDeportivasText">
                    Consulta consejos y estadísticas deportivas sobre la
                    temporada de la NFL, decide a que equipos colocarás tus
                    apuestas y aprovecha las promociones.
                  </Card.Text>
                  <div className="wrapperEventosDeportivasLinkBtn">
                    <Link
                      to={"apuestas-superbowl"}
                      rel={"nofollow"}
                      className={"eventosDeportivasLinkBtnMy78"}
                    >
                      Ver información
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Zoom>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-6 eventosDeportivasLinkTitle">
            <h2>
              Vive la emoción de apostar a tus eventos deportivos favoritos
            </h2>
          </div>
          <div className="col-12 mt-6 RegistrateMobBtn">
            <a
              rel="nofollow"
              className="registrate-button  bottomContentPromoButton btn btn-primary"
              href="https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"
            >
              Regístrate
            </a>
          </div>
          <hr className="mt-6" />
        </div>
      </div>

      {/* end return  */}
    </>
  );
};
<Outlet />;
export default EventosDeportivos;
