import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Zoom } from "react-awesome-reveal";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

import "../CSS/sports.css";
// import articleStructuredData from "./articleStructuredData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Floating from "../Floating";

const EventosDeportivos = (props) => {
  const prefix = "https://www.codere.com.co/SEOpagesImg/EventosDeportivos/";

  const cardGenerator = (g, i) => {
    return (
      <Col md={6} xs={6} key={i}>
        <Card style={{ maxWidth: "500px" }} className={`eventos_card`}>
          <Link style={{ textDecoration: "unset" }} to={g.url}>
            <Card.Header as={"h2"}>{!props.flag ? g.h2 : g.game}</Card.Header>
          </Link>
          <Card.Body>
            <LazyLoadImage src={prefix + g.img + ".webp"} />
          </Card.Body>
          <Card.Footer>
            <Link rel="nofollow" to={g.url}>
              <Button
                as="span"
                style={{
                  width: "100%",
                  fontWeight: 600,
                  borderRadius: "1rem",
                }}
              >
                VER INFORMACIÓN
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    );
  };

  const data = {
    top_games: [
      {
        img: "banner-eventos-mundial",
        url: "/eventos-deportivos/apuestas-mundial-fifa",
        h2: "Apuestas para el Mundial",
        game: "Mundial",
      },
      {
        img: "banner-eventos-basket",
        url: "/eventos-deportivos/apuestas-mundial-baloncesto",
        h2: "Apuestas Mundial de Baloncesto",
        game: "Baloncesto",
      },
      {
        img: "banner-eventos-mlb",
        url: "/eventos-deportivos/apuestas-juego-de-las-estrellas",
        h2: "Apuestas Juego de las Estrellas MLB",
        game: "MLB",
      },
      {
        img: "banner-eventos-superbowl",
        url: "/eventos-deportivos/apuestas-superbowl",
        h2: "Apuestas para el Superbowl",
        game: "Superbowl",
      },
    ],
  };

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
      </Helmet>

      <div id="eventos">
        <Floating text="Vive la Experiencia" juega={false} />
        <div
          className="top-bg-seo"
          style={{
            backgroundImage: `url(${prefix}general-${
              !props.flag ? "desktop" : "mobile"
            }.jpg)`,
            backgroundSize: "cover",
          }}
        ></div>

        <h1 style={{ color: "#fff", textAlign: "center", padding: "1.5rem" }}>
          Los mejores Eventos Deportivos estan en Codere
        </h1>
        <Container className="eventos-container">
          <Row>
            {data.top_games.map((g, i) => {
              return cardGenerator(g, i);
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};
<Outlet />;
export default EventosDeportivos;
