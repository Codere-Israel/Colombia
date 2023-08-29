import { Helmet } from "react-helmet";
import {
  Accordion,
  Image,
  Row,
  Col,
  Table,
  Container,
  Button,
} from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Floating from "../../Floating";

// import articleStructuredData from "../../../pages/apuestas-mundial-fifa/articleStructuredData.json";
// import "../pages.css";
// import "../pagesMobile.css";
// import "./apuestas-mundial-fifa.css";

const Mundial = (props) => {
  const prefix =
    "https://www.codere.com.co/Colombia/images/seo-sport/eventos-dep/mundo";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuándo y dónde será la copa del mundo de 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FIFA anunció las 16 sedes de la Copa Mundial de 2026. Y por supuesto las ciudades que recibirán al evento más importante del deporte. Tres serán en México, dos en Canadá y las once restantes en Estados Unidos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuántos países clasifican al mundial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En la reciente edición del Mundial en total clasificaron 32 Selecciones. Sin embargo, para el Mundial 2026, que se realizará en Estados Unidos, Canadá y México, por primera vez, tendrá un total de 48 selecciones. De esta forma, la Copa Mundial 2026 tendrá 16 ciudades anfitrionas de la primera edición del torneo más emblemático del balompié mundial en enfrentar a 48 equipos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué país ha organizado más Mundiales en la historia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brasil sigue liderando la lista, no solo es el país que más Mundiales ha ganado, con un total de cinco, sino que también ha sido anfitrión del torneo en dos ocasiones. Ningún país ha albergado más de dos torneos, y los cinco grandes continentes han organizado al menos un Mundial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo inician los procesos de clasificación al Mundial de 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las Eliminatorias para el Mundial de Canadá, Estados Unidos y México 2026 comenzarán en este 2023, el fixture de las próximas eliminatorias todavía no está definido, se sorteará en las primeras semanas del año, y el torneo comenzará en marzo de 2023 con una doble fecha y terminará en octubre de 2025.",
        },
      },
    ],
  };

  const historia1 = [
    `Si hablamos de la historia de los Mundiales, Uruguay, fue el primer país en albergar una Copa del Mundo de fútbol y fue en 1930, cada cuatro años la fiesta más grande de dicho deporte, reúne a millones de personas en los medios de comunicación, en los estadios, en los bares y en cada sitio donde se puedan seguir los partidos del máximo evento deportivo. Este fenómeno no solo ocurre en el país que alberga la cita mundialista. En cada uno de los países participantes del torneo se vive una fiesta a gran escala, con pantallas gigantes en sitios emblemáticos y todo lo que haga falta para vivir el Mundial.`,
    `La Selección con más participaciones en los mundiales es Brasil, en total registra 20 participaciones, único equipo que no ha faltado nunca a una cita orbital, seguido de Alemania e Italia con 18 participaciones, luego Argentina con 16, México con 15 y España, Inglaterra y Francia con un total de 14 asistencias a mundiales.`,
    `Sin duda, muchos futbolistas han sido protagonistas en las diferentes ediciones de las Copas del Mundo, pero según el portal 'FourFourTwo' existe una lista con los futbolistas más destacados, como: Gary Lineker, quien fue goleador de México 1986, Roger Milla, delantero de Camerún en la copa de 1990 y volvió en 1994 para convertirse en el goleador con más edad, con 42 años, Rivaldo, Romario, Ronaldo y Ronaldinho con Brasil, Paolo Maldini con Italia, Eusebio con Portugal, Lothar Matthaus, Xavi, Cannavaro, Paolo Rossi, Johan Cruyff, Zidane, Garrincha, Cafu, Beckenbauer, Pelé, Maradona, y a la lista podemos sumar a Lionel Messi, Cristiano Ronaldo y Kylian Mbappé, entre otros.`,
  ];
  const historia2 = [
    "México 1970: Considerado el mejor de la historia, en donde Brasil (Pelé, Gerson, Tostao, Rivelino y Jairzinho) consiguió su tercer título.",
    "Alemania 2006: Un mundial destacado por el gran juego de España, Alemania y Argentina, Zidane brilló como nadie, pero Italia fue el que cosechó la gloria.",
    "Francia 1998: Por primera vez se acogieron a 32 selecciones y todo estuvo a la altura, Zidane y Ronaldo fueron protagonistas, y los mejores partidos fueron Brasil 3 – 2 Dinamarca, Argentina 2 – 2 Inglaterra y Holanda 2 – 1 Argentina.",
  ];

  const selecciones = {
    headers: ["Selección", "Títulos", "Mundial"],
    list: [
      { onu: "Brasil", dos: 5, tres: "1958, 1962, 1970, 1994, 2002" },
      { onu: "Alemania", dos: 4, tres: "1954, 1974, 1990, 2014" },
      { onu: "Italia", dos: 4, tres: "1934, 1938, 1982, 2006" },
      { onu: "Argentina", dos: 3, tres: "1978, 1986, 2022" },
      { onu: "Francia", dos: 2, tres: "1998, 2018" },
      { onu: "Uruguay", dos: 2, tres: "1930, 1950" },
      { onu: "Inglaterra", dos: 1, tres: "1966" },
      { onu: "España", dos: 1, tres: "2010" },
    ],
  };
  const jugadores_titulos = {
    headers: ["Jugador", "Títulos", "País"],
    list: [
      { onu: "Pelé", dos: 3, tres: "Brasil" },
      { onu: "Cafú", dos: 2, tres: "Brasil" },
      { onu: "Hilderaldo Luiz", dos: 2, tres: "Brasil" },
      { onu: "Carlos José Castilho", dos: 2, tres: "Brasil" },
      { onu: "Didi  ", dos: 2, tres: "Brasil" },
      { onu: "Garrincha", dos: 2, tres: "Brasil" },
    ],
  };
  const jugadores_partidos = {
    headers: ["Jugador", "Partidos", "País"],
    list: [
      { onu: "Lionel Messi", dos: 26, tres: "Argentina" },
      { onu: "Lothar Matthäus", dos: 25, tres: "Alemania" },
      { onu: "Miroslav Klose", dos: 25, tres: "Alemania" },
      { onu: "Cristiano Ronaldo", dos: 22, tres: "Portugal" },
    ],
  };
  const maximos = {
    headers: ["Jugador", "Partidos", "País"],
    list: [
      { onu: "Miroslav Klose", dos: 16, tres: "Alemania" },
      { onu: "Ronaldo", dos: 15, tres: "Brasil" },
      { onu: "Gerd Muller", dos: 14, tres: "Alemania" },
      { onu: "Just Fontaine", dos: 13, tres: "Francia" },
      { onu: "Lionel Messi", dos: 13, tres: "Argentina" },
      { onu: "Pelé", dos: 12, tres: "Brasil" },
      { onu: "Kylian Mbappé", dos: 12, tres: "Francia" },
    ],
  };

  const tableGen = (tbl) => {
    return (
      <Table bordered responsive style={{ color: "#fff" }}>
        <thead>
          <tr>
            {tbl.headers.map((h, k) => (
              <th key={k}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbl.list.map((s, k) => (
            <tr key={k}>
              <td>{s.onu}</td>
              <td>{s.dos}</td>
              <td>{s.tres}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const tips = [
    {
      h3: "Apuesta Simple",
      p: "Es aquella en la que se apuesta por un único resultado de un evento. Si el apostante acierta en su pronóstico, la apuesta es ganadora.",
    },
    {
      h3: "Apuesta Acumulada",
      p: "Para que una apuesta acumulada sea ganadora, el apostante debe acertar en todos los pronósticos que haya señalado.",
    },
    {
      h3: "Apuesta Multi Selección (con o sin banca)",
      p: "Es una apuesta de 3 o más pronósticos, en los cuales 2 o más de ellos pertenecen a un mismo evento. Para tener derecho a premio hay que acertar todos los pronósticos que forman parte de al menos una de las combinaciones.",
    },
    {
      h3: "1X2 o Resultado del Partido o Ganador o Ganador del partido (sin incluir la prórroga)",
      p: "Pronóstico sobre la victoria del equipo local (1), al empate (X), o a la victoria del equipo visitante (2). En este mercado no se tiene en consideración la prórroga o los penaltis (en tanda de penaltis) si los hubiese.",
    },
    {
      h3: "Ganador del resto del partido (prórroga, marcador X:Y):",
      p: "Es un pronóstico sobre el resultado del resto del partido a la finalización del mismo, incluida la prórroga si la hubiese. En este mercado no se tiene en consideración los penaltis (en tanda de penaltis) si los hubiese.",
    },
    {
      h3: "1X2 y Más/Menos goles: ",
      p: `Es un pronóstico simultáneo sobre 1X2 sobre el resultado al final del partido y sobre si en un partido se marcarán más o menos goles de un número determinado. En este mercado no se tiene en consideración la prórroga o los penaltis (en tanda de penaltis) si los hubiese.
    Se considera un único pronóstico, por lo que se fija un único multiplicador.`,
    },
    {
      h3: "Ultimo gol de una parte:",
      p: "Es un pronóstico sobre qué jugador o qué equipo marcará el último gol en una parte del partido. En este mercado no se tiene en consideración la prórroga o los penaltis (en tanda de penaltis) si los hubiese. Si se pronosticara que no habrá goles, en el pronóstico del boleto se indicará “sin goles” o “no hay goles”.",
    },
    {
      h3: "Minuto del próximo gol:",
      p: `Es un pronóstico sobre el minuto en el que se marcará el próximo gol del partido. En este mercado no se tiene en consideración la prórroga o los penaltis (en la tanda de penaltis) si los hubiese.
    En este pronóstico se aplicará el tiempo reglamentario establecido por el ente organizador del evento. El primer minuto del partido incluye el periodo de tiempo establecido entre los segundos 00:00 a 00:59 segundos, siendo el segundo minuto el periodo que abarca los segundos 1:00 a 1:59, y así sucesivamente.
    Ejemplo: Se pronostica que en un partido Real Madrid-Barcelona, se marcará el próximo gol en el minuto 33.
    El gol se marca en el minuto 32:20 el pronóstico es ganador
    El gol se marca en el minuto 33:00 el pronóstico es perdedor.`,
    },
    {
      h3: "Marca gol durante el partido:",
      p: "Es un pronóstico sobre si un jugador o un equipo marcarán durante el partido. En este mercado no se tiene en consideración la prórroga o los penaltis si los hubiese.",
    },
    {
      h3: "Número total de goles o cantidad de goles marcados:",
      p: "Es un pronóstico sobre el número total de goles que se marcaran a lo largo de un partido. En este mercado no se tiene en cuenta la prórroga ni los penaltis (en tanda de penaltis) si los hubiese. Se contabilizan los goles en propia meta y se adjudicarán al equipo a cuyo marcador suba.",
    },
  ];

  const preguntas = [
    {
      h3: "¿Cuándo y dónde será la copa del mundo de 2026?",
      p: "FIFA anunció las 16 sedes de la Copa Mundial de 2026. Y por supuesto las ciudades que recibirán al evento más importante del deporte. Tres serán en México, dos en Canadá y las once restantes en Estados Unidos.",
    },
    {
      h3: "¿Cuántos países clasifican al mundial?",
      p: "En la reciente edición del Mundial en total clasificaron 32 Selecciones. Sin embargo, para el Mundial 2026, que se realizará en Estados Unidos, Canadá y México, por primera vez, tendrá un total de 48 selecciones. De esta forma, la Copa Mundial 2026 tendrá 16 ciudades anfitrionas de la primera edición del torneo más emblemático del balompié mundial en enfrentar a 48 equipos.",
    },
    {
      h3: "¿Qué país ha organizado más Mundiales en la historia?",
      p: "Brasil sigue liderando la lista, no solo es el país que más Mundiales ha ganado, con un total de cinco, sino que también ha sido anfitrión del torneo en dos ocasiones. Ningún país ha albergado más de dos torneos, y los cinco grandes continentes han organizado al menos un Mundial.",
    },
    {
      h3: "¿Cuándo inician los procesos de clasificación al Mundial de 2026?",
      p: "Las Eliminatorias para el Mundial de Canadá, Estados Unidos y México 2026 comenzarán en este 2023, el fixture de las próximas eliminatorias todavía no está definido, se sorteará en las primeras semanas del año, y el torneo comenzará en marzo de 2023 con una doble fecha y terminará en octubre de 2025.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Apuestas online de para la Copa del Mundo | Codere®</title>
        <link
          rel="canonical"
          href="https://www.codere.com.co/eventos-deportivos/apuestas-mundial-fifa"
        />
        <meta
          name="description"
          content="Consulta esta guía, juega online en Codere y realiza tus apuestas deportivas para la Copa del Mundo, aprovecha las mejores cuotas del mercado colombiano."
        ></meta>
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      <Floating text="La Fiesta del fútbol" juega={false} />
      <div
        className="top-bg-seo"
        style={{
          backgroundImage: `url(${prefix}/${
            props.flag ? "M" : "D"
          }-header.jpg)`,
          backgroundSize: "cover",
        }}
      />
      <Container className="seo">
        <h1 className="PageH1TitleSeoPages923 mt-4">
          Guía de apuestas deportivas para el Mundial
        </h1>
        <p>
          La Copa del Mundo sin duda es la competición más importante del fútbol
          a nivel internacional, se disputa cada 4 años, y días o semanas
          previas al campeonato, diferentes personas relacionadas o no con dicho
          deporte comienzan a hacer sus pronósticos, las dudas principales:
          ¿Quién ganará el próximo título de la Copa del Mundo y qué equipos
          llegarán a la ronda final del Mundial?
        </p>
        <p>
          Los amantes de las apuestas deportivas consultan diversos pronósticos
          y eligen a su mayor referente para ampliar sus propios conocimientos o
          simplemente para tomarlos como consejos al momento de apostar.
        </p>
        <p>
          Codere te ofrece diferentes tipos de apuestas para este gran
          campeonato, aquí podrás apostarle a tus Selecciones favoritas, o al
          goleador del Mundial, o al campeón. Además, podrás encontrar una
          pestaña con cuotas anticipadas: ¿qué equipos llegan a la final? o
          cuotas especiales en las que podrás jugártela al mismo tiempo por el
          goleador y el campeón, entre otras.
        </p>

        <LazyLoadImage
          className="lazyloadimg"
          src={`${prefix}/${props.flag ? "M" : "D"}-Soccer-1.jpg`}
        />

        <h2 className="PageH2TitleSeoPages923 mt-4">
          La historia de los mundiales
        </h2>
        {historia1.map((h, k) => (
          <p key={k}>{h}</p>
        ))}
        <h2 className="PageH2TitleSeoPages923">
          Estos han sido los 3 Mundiales más icónicos en la historia
        </h2>
        <ul>
          {historia2.map((h, k) => (
            <li key={k}>{h}</li>
          ))}
        </ul>
        <LazyLoadImage
          className="lazyloadimg"
          src={`${prefix}/${props.flag ? "M" : "D"}-Soccer-2.jpg`}
        />
        <h2 className="PageH2TitleSeoPages923 mt-4">
          Principales datos de los Mundiales
        </h2>
        <p>Estos son los datos más destacados de las Copas del Mundo:</p>
        <div style={{ width: "100%" }}>
          <Row>
            <Col md={6}>
              <h3
                style={{ textAlign: "center" }}
                className="PageH3TitleSeoPages923 "
              >
                Selecciones con más campeonatos:
              </h3>
              {tableGen(selecciones)}
            </Col>
            <Col>
              <h3
                style={{ textAlign: "center" }}
                className="PageH3TitleSeoPages923 "
              >
                Máximos goleadores de los mundiales:
              </h3>
              {tableGen(maximos)}
            </Col>
          </Row>
          <Row>
            <Col>
              <h3
                style={{ textAlign: "center" }}
                className="PageH3TitleSeoPages923 "
              >
                Jugadores con más títulos:
              </h3>
              {tableGen(jugadores_titulos)}
            </Col>
            <Col>
              <h3
                style={{ textAlign: "center" }}
                className="PageH3TitleSeoPages923 "
              >
                Jugadores con más partidos:
              </h3>
              {tableGen(jugadores_partidos)}
            </Col>
          </Row>
        </div>

        <h2 className="PageH2TitleSeoPages923 mt-4">
          Tipos de apuestas más comunes para la copa mundial de fútbol
        </h2>
        <p>
          En Codere tendrás siempre muchas posibilidades de ganar, y más cuando
          se juega la Copa del Mundo, ya que podrás apostarle a tus Selecciones
          favoritas, a las Selecciones que avanzan a las instancias finales,
          goleadores, al campeón, si hay goles o no, el total de tiros de
          esquina en un partido etc:
        </p>
        <Container>
          {tips.map((t, k) => (
            <div key={k}>
              <h3 className="PageH3TitleSeoPages923 ">{t.h3}</h3>
              <p>{t.p}</p>
            </div>
          ))}
        </Container>
        <h2 className="PageH2TitleSeoPages923 mt-5">
          Preguntas frecuentes la Copa Mundial de Futbol
        </h2>
        <p>
          Para que estés siempre enterado de las Copas del Mundo, aquí te damos
          información detallada sobre la fiesta más grande del fútbol ¡No te la
          pierdas! Y recuerda jugar siempre en Codere.{" "}
        </p>

        <Accordion className="content-accordion">
          {preguntas.map((p, k) => (
            <Accordion.Item eventKey={k} key={k}>
              <Accordion.Header as="h3">{p.h3}</Accordion.Header>
              <Accordion.Body as="p">{p.p}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <LazyLoadImage
          className="lazyloadimg"
          src={`${prefix}/${props.flag ? "M" : "D"}-Soccer-3.jpg`}
        />
        <Button
          href="https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"
          style={{ margin: "auto", fontSize: "1.35rem", padding: "10px 35px" }}
          className="seo-reg-btn mt-5"
        >
          Regístrate
        </Button>
      </Container>
    </>
  );
};

export default Mundial;
