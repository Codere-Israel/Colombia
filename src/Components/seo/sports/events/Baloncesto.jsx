import { Helmet } from "react-helmet";
import {
  Accordion,
  Table,
  Image,
  Col,
  Container,
  Button,
} from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Floating from "../../Floating";

const Baloncesto = (props) => {
  const prefix =
    "https://www.codere.com.co/Colombia/images/seo-sport/eventos-dep/basketball";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Quién ha ganado más mundiales de baloncesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Estados Unidos es el país que lidera el medallero general del Mundial. En la era profesional, el equipo se consagró campeón olímpico en 1992, 1996, 2000, 2008, 2012, 2016 y 2020. ",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo es el próximo Mundial de Baloncesto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La Copa Mundial de Baloncesto se llevará a cabo el viernes 25 de agosto de 2023 hasta el domingo 10 de septiembre y se celebrará conjuntamente en Filipinas, Japón e Indonesia.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Apuestas para el Mundial de Baloncesto | Codere®</title>
        <link
          rel="canonical"
          href="https://www.codere.com.co/eventos-deportivos/apuestas-mundial-baloncesto"
        />
        <meta
          name="description"
          content="Los mejores partidos del mundial de baloncesto se viven por Codere, coloca tus apuestas online con las mejores cuotas del mercado Colombiano."
        ></meta>
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      <Floating text="Da tu mejor clavada" juega={false} />

      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(${prefix}/${
            props.flag ? "M" : "D"
          }-header.jpg)`,
          backgroundSize: "cover",
        }}
      ></div>
      <Container>
        <h1 className="PageH1TitleSeoPages923 mt-4">
          Guía de apuestas para el Mundial de Baloncesto FIBA
        </h1>
        <h2 className="PageH2TitleSeoPages923">
          Historia del Mundial de Basketball
        </h2>
        <p className="text982T">
          Fue creado en una reunión del Congreso Mundial de la FIBA en los
          Juegos Olímpicos de 1948 en Londres. El secretario general, Renato
          William Jones, instó a crear un Campeonato del Mundo, similar a la
          Copa Mundial de Fútbol, que se disputara cada cuatro años entre dos
          ediciones de los Juegos Olímpicos.
        </p>
        <p className="text982T">
          El Congreso, teniendo como ejemplo el exitoso torneo olímpico de 23
          selecciones durante ese año, aceptó la propuesta, creando el{" "}
          <a href="https://www.codere.com.co/eventos-deportivos">
            torneo deportivo
          </a>{" "}
          en 1950 donde Argentina fue seleccionada como anfitrión, en gran parte
          porque era el único país dispuesto a hacerse cargo. Argentina
          aprovechó la ventaja de ser anfitriona, ganando todos los partidos y{" "}
          <b>
            convirtiéndose en el primer vencedor del Campeonato Mundial de
            Baloncesto.
          </b>
        </p>
        <p className="text982T">
          Los primeros cinco torneos se celebraron en Sudamérica, y los equipos
          del continente americano dominaron el campeonato, ganando ocho de
          nueve medallas en los tres primeros mundiales. A partir de 1963, sin
          embargo, los equipos de Europa Oriental –la Unión Soviética y
          Yugoslavia en particular– comenzaron a plantar cara a los equipos
          americanos.
        </p>
        <p className="text982T">
          En 1994, los jugadores profesionales participaron por primera vez en
          el torneo. Aunque los Estados Unidos inicialmente dominaron con los
          jugadores de la NBA, otras naciones utilizaron finalmente a jugadores
          profesionales para ponerse a la altura de las cuatro potencias.
        </p>
        <p className="text982T">
          En 2002, Argentina, liderada por cuatro futuros jugadores de la NBA,
          consiguió la medalla de plata, mientras que el jugador de la NBA y MVP
          del torneo, Dirk Nowitzki, guió a Alemania al bronce. Mientras tanto,
          el equipo estadounidense, formado en totalidad por jugadores de la
          NBA, cayó hasta la sexta plaza.
        </p>
        <p className="text982T">
          En 2006, España derrotó a Grecia en la primera aparición en una final
          de ambas selecciones, convirtiéndose en el séptimo equipo en ganar el
          Campeonato Mundial. Esta nueva era de igualdad convenció a la
          Organización para expandir el torneo a (24) equipos en las ediciones
          de 2006 y 2010.
        </p>
        <LazyLoadImage
          className="lazyloadimg"
          src={`${prefix}/${props.flag ? "M" : "D"}-Basketball-1.jpg`}
        />
        <h2 className="PageH2TitleSeoPages923 mt-4 mb-2">
          ¿Cómo se clasifica al Campeonato Mundial de Baloncesto?
        </h2>
        <p className="text982T">
          Tradicionalmente, los mejores equipos de cada campeonato continental
          clasificaban a la Copa Mundial. Una vez finalizado la Copa Mundial de
          Baloncesto de 2014, el formato de clasificación cambió al crearse una
          serie de campeonatos premundiales. Los equipos se dividen en grupos
          continentales, donde hay tres o cuatro equipos por grupo y a su vez
          ascensos y descensos entre estos grupos. También las eliminatorias al
          certamen cambian, duran dos años, y en el transcurso de ese tiempo,
          hay seis «ventanas» donde se enfrentan los equipos. Otro cambio es que
          Asia y Oceanía juegan en una misma región pero mantienen sus plazas
          para los Juegos Olímpícos.
        </p>
        <p className="text982T">
          Los certámenes continentales también se disputarán cada 4 años y con
          un sistema nuevo y similar al de la Copa Mundial. La clasificación
          para los Juegos Olímpicos de Tokio 2020 será mediante la Copa Mundial
          de Baloncesto de 2019 y cuatro certámenes más.
        </p>
        <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
          Distribución de plazas para próximos mundiales
        </h3>
        <ul className="text982T">
          <li>País Anfitrión: 1 plaza</li>
          <li>
            FIBA Américas (Norte, Centro, Sudamérica y el Caribe): 7 plazas
          </li>
          <li>FIBA Asia y FIBA Oceanía (Asia y Oceanía): 7 plazas</li>
          <li>FIBA Europa (Europa): 12 plazas</li>
          <li>FIBA África (África): 5 plazas</li>
        </ul>
        <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">Máximos ganadores</h3>
        <p className="text982T">
          Actualizado hasta la edición de la Copa Mundial de Baloncesto de 2019
        </p>
        <Table striped bordered hover size="sm" variant="dark">
          <thead>
            <tr>
              <th>Posición</th>
              <th>Selección</th>
              <th>Oro</th>
              <th>Plata</th>
              <th>Bronce</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Estados Unidos</td>
              <td>5</td>
              <td>3</td>
              <td>4</td>
              <td>12</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Yugoslavia FR Yugoslavia</td>
              <td>5</td>
              <td>3</td>
              <td>2</td>
              <td>10</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Unión Soviética </td>
              <td>3</td>
              <td>3</td>
              <td>2</td>
              <td>8</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Brasil</td>
              <td>2</td>
              <td>2</td>
              <td>2</td>
              <td>6</td>
            </tr>
            <tr>
              <td>5</td>
              <td>España</td>
              <td>2</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Argentina</td>
              <td>1</td>
              <td>2</td>
              <td>0</td>
              <td>3</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Rusia</td>
              <td>0</td>
              <td>2</td>
              <td>0</td>
              <td>2</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Grecia</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Turquía</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Serbia</td>
              <td>0</td>
              <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Chile</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Francia</td>
              <td>0</td>
              <td>0</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Lituania</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Croacia</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Alemania</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Filipinas</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td>18</td>
              <td>18</td>
              <td>18</td>
              <td>54</td>
            </tr>
          </tbody>
        </Table>

        <Accordion className="content-accordion  mb-4" alwaysOpen>
          <Accordion.Item className="accordionT454" eventKey="0">
            <Accordion.Header className="PageH3TitleSeoPages923 accordionT454">
              Máximos anotadores
            </Accordion.Header>
            <Accordion.Body className="accordionBody text982T">
              <p className="text982T">
                Actualizado al finalizar la Copa Mundial de Baloncesto de 2019
              </p>
              <Table striped bordered hover size="sm" variant="dark">
                <thead>
                  <tr>
                    <th>Posición</th>
                    <th>Jugador</th>
                    <th>Puntos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Oscar Schmidt</td>
                    <td>843</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>Luis Scola</td>
                    <td>823</td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>Andrew Gaze</td>
                    <td>594</td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>Dražen Dalipagić</td>
                    <td>563</td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>José Rafael Ortiz</td>
                    <td>511</td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>Dragan Kićanović</td>
                    <td>491</td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td>Pau Gasol </td>
                    <td>482</td>
                  </tr>

                  <tr>
                    <td>8</td>
                    <td>Panagiotis Giannakis </td>
                    <td>469</td>
                  </tr>

                  <tr>
                    <td>9</td>
                    <td>Juan Carlos Navarro </td>
                    <td>462</td>
                  </tr>

                  <tr>
                    <td>10</td>
                    <td>Marques Wlamir </td>
                    <td>437</td>
                  </tr>
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <LazyLoadImage
          className="lazyloadimg"
          src={`${prefix}/${props.flag ? "M" : "D"}-Basketball-2.jpg`}
        />
        <h3 className="PageH3TitleSeoPages923 mt-4">
          Jugadores Colombianos en la NBA
        </h3>
        <p className="text982T">
          Jaime Echenique es el primer colombiano en la NBA, el equipo de la
          capital de Estados Unidos llamó a Echenique para que reemplazara el
          espacio de Montrezl Harrell, quien entró en protocolo de prevención
          por Covid-19. A pesar de ser sólo por 10 días, el barranquillero
          entrará en la historia como el primer jugador de baloncesto colombiano
          en jugar en la NBA. Álvaro Teherán estuvo cerca de hacerlo con los
          76ers de Filadelfia en 1992 mientras que Braian Angola quedó
          descartado en el draft de 2018.
        </p>

        <h2 className="PageH2TitleSeoPages923">
          Tipos de Apuestas en Baloncesto
        </h2>
        <p className="text982T">
          Te presentamos que tipos de{" "}
          <a
            href="https://m.codere.com.co/deportescolombia/#/HomePage"
            rel="nofollow"
          >
            apuestas deportivas{" "}
          </a>{" "}
          podrás encontrar y hacer en línea desde Codere:
        </p>

        <ul className="text982T">
          <li>1,2 Ganador del partido</li>
          <li>Puntaje; Más o Menos</li>
          <li>Ganador primer tiempo</li>
          <li>Puntaje primer tiempo; Mas o Menos</li>
          <li>Local y más o menos puntos</li>
          <li>Visitante y más o menos puntos</li>
        </ul>

        <p className="text982T">¿Por cuál mercado te irías? </p>

        <h2 className="PageH2TitleSeoPages923">
          Preguntas frecuentes sobre el Mundial de Baloncesto
        </h2>

        <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
          ¿Quién ha ganado más mundiales de baloncesto?
        </h3>
        <p className="text982T">
          Estados Unidos es el país que lidera el medallero general del Mundial.
          En la era profesional, el equipo se consagró campeón olímpico en 1992,
          1996, 2000, 2008, 2012, 2016 y 2020.
        </p>

        <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
          ¿Cuándo es el próximo Mundial de Baloncesto?
        </h3>
        <p className="text982T">
          La Copa Mundial de Baloncesto se llevará a cabo el viernes 25 de
          agosto de 2023 hasta el domingo 10 de septiembre y se celebrará
          conjuntamente en Filipinas, Japón e Indonesia.
        </p>
        <LazyLoadImage
          className="lazyloadimg"
          src={`${prefix}/${props.flag ? "M" : "D"}-Basketball-3.jpg`}
        />

        <Button
          href="https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"
          className="mt-5 seo-reg-btn"
        >
          Regístrate
        </Button>
      </Container>
    </>
  );
};

export default Baloncesto;
