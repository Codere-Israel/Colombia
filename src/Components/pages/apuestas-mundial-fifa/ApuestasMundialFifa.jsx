import { Helmet } from "react-helmet";
import { Accordion, Image, Row, Col } from "react-bootstrap";

import articleStructuredData from "./articleStructuredData.json";
import "../pages.css";
import "../pagesMobile.css";
import "./apuestas-mundial-fifa.css";

const ApuestasMundialFifa = () => {
  return (
    <>
      <Helmet>
        <title>Apuestas online para el Mundial de la Fifa | Codere®</title>
        <link
          rel="canonical"
          href="https://www.codere.com.co/eventos-deportivos/apuestas-mundial-fifa"
        />
        <meta
          name="description"
          content="Juega online y realiza tus apuestas deportivas con la mejores cuotas del mercado para el mundial de futbol. Codere la mejor casa de apuestas de Colombia."
        ></meta>
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      </Helmet>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 mt-3-6">
            <Image
              className="img-fluid img-desktop imgFsDiv"
              src="https://codere.com.co/SEOpagesReact/apuestas-mundial-fifa/assets/images/banner-qatar-desk.webp"
            />
            <Image
              className="img-fluid img-mobile imgFsDiv"
              src="https://codere.com.co/SEOpagesReact/apuestas-mundial-fifa/assets/images/banner-qatar-mobile.webp"
            />
          </div>
        </div>

        <div className="row mb-5 mt-3">
          <div className="col-12">
            <h1 className="PageH1TitleSeoPages923">
              Guía de apuestas para el Mundial de Qatar
            </h1>
          </div>
        </div>

        <div className="row mb-5 mt-3">
          <div className="col-12">
            <h2 className="PageH2TitleSeoPages923">
              Los Mejores Mundiales de la Historia
            </h2>
            <p className="text982T">
              La Copa del Mundo se celebra cada 4 años y siempre ha sido el
              torneo más importante para el fútbol y sus aficionados. Es el{" "}
              <a href="https://www.codere.com.co/eventos-deportivos">
                evento deportivo
              </a>{" "}
              por excelencia, aun cuando existen varios certámenes relevantes en
              el mundo del balompié, sin embargo, ninguno tiene esa mística
              especial de vivir los partidos y poder tener la posibilidad de ver
              a una nación coronarse campeón. Mundiales hay muchos, pero son
              pocos los que han quedado marcados en la mente de los apasionados
              de este deporte. Dentro de los más destacados están:
            </p>
            <Col className="text-center">
              <Image
                className="img-fluid imgFsDiv"
                src="https://codere.com.co/SEOpagesReact/apuestas-mundial-fifa/assets/images/banner2-qatar-desk.webp"
              />
            </Col>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
              Suiza 1954, "El milagro de Berna"
            </h3>
            <p className="text982T">
              {" "}
              siempre será recordado por ser el que más goles ha tenido, 140
              tantos en 26 partidos. El mundial se organizó en Suiza por ser la
              sede de la FIFA que cumplía medio siglo de vida. Además, también
              fue el primer Mundial retransmitido por televisión.{" "}
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
              Suecia 1958, con Pelé, la "perla negra"
            </h3>
            <p className="text982T">
              Brasil conquistó Europa y una nueva era comenzaba en el fútbol. En
              ese mundial, Lev Yashin, la Araña Negra, se convirtió en el primer
              portero en llevar guantes en un campeonato del mundo, además,
              también fue la primera y única vez que participaron las cuatro
              selecciones británicas. Pelé y Garrincha hacen una presentación
              brillante en sociedad y el delantero francés Fontaine nos hacen
              disfrutar de algunos de los mejores partidos jamás recordados.
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
              México 1970, "el fútbol se convirtió en arte"
            </h3>
            <p className="text982T">
              Considerado por muchos hinchas como el{" "}
              <strong>"Mundial de Fútbol por excelencia" </strong>. Quizá se
              deba a que en ésta certamen tuvo lugar, la que está considerada
              como la mejor parada de la historia de los mundiales, realizada
              por Gordon Banks a Pelé; o tal vez porque en él se jugó el
              denominado <strong>"partido del siglo XX" </strong>, disputado
              entre Italia y Alemania.
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
              México 1986, el "Diego" se hace inmortal
            </h3>
            <p className="text982T">
              El Mundial de Platini, Zico, Butragueño, Ruummenige, pero sobre
              todo, el de Diego Armando Maradona, ese mundial que lo llevo a ser
              considerado un <strong> "Dios del fútbol" </strong>. Sin duda, la
              participación del Pelusa fue clave para Argentina. Además de
              anotar un doblete en semifinales y dar la asistencia al gol de la
              victoria en la final, Maradona se encargó de crear y ejecutar{" "}
              <strong> "el gol del siglo" </strong>, además de la polémica{" "}
              <strong> "mano de Dios" </strong>
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
              Alemania 2006, Zidane se retira con un cabezazo{" "}
            </h3>
            <p className="text982T">
              Xavi, Iniesta, Villa, Puyol, Ramos, Xabi, Raúl, Torres,... Luis
              Aragonés empezó el proceso de creación de algo que se convertiría
              en una de las mejores generaciones jóvenes de futbolistas
              Españoles. Además, es el mundial que confirmaba el ascenso de
              Zinedine Zidane al olimpo del futbol, pero que con ese cabezazo
              tan desafortunado a Marco Materazzi, después de que éste lo
              provocara, dejó manchada su impecable carrera.
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
              Sudáfrica 2010, primer mundial en territorio africano{" "}
            </h3>
            <p className="text982T">
              Vicente del Bosque, con la generación dorada que heredó de Luis
              Aragonés, y adicionado piezas de su propio proceso, consiguió
              dominar el mundo con un juego de toque, donde la posesión y una
              enorme cantidad de centrocampistas de talento, lideraron a una
              selección irrepetible que lograría lo que nadie en el futbol hasta
              ahora, el trío de títulos Eurocopa 2008 - Mundial 2010 - Eurocopa
              2012.
            </p>
            <Col className="text-center">
              <Image
                className="img-fluid imgFsDiv"
                src="https://codere.com.co/SEOpagesReact/apuestas-mundial-fifa/assets/images/banner3-qatar-desk.webp"
              />
            </Col>

            <h2 className="PageH2TitleSeoPages923">
              ¿Cuántos equipos clasifican al mundial?
            </h2>
            <p className="text982T">
              Para la Copa Mundial de Fútbol de 2022, que se realizará en Catar,
              32 equipos serán los participantes en la fase final. La selección
              de Catar clasificó para disputar el torneo en su condición de
              organizador y será la primera vez que juegue el certamen.
            </p>

            <h2 className="PageH2TitleSeoPages923">
              Tipos de apuestas comunes para la copa mundial de fútbol
            </h2>
            <p className="text982T">
              Te presentamos los tipos de{" "}
              <a
                href="https://m.codere.com.co/deportescolombia/#/HomePage"
                rel="nofollow"
              >
                apuestas deportivas en línea
              </a>{" "}
              que podrás encontrar en Codere para el Mundial de Qatar 2022:
            </p>

            <ol className="text982T">
              <li> 1,2 Ganador del partido </li>
              <li> Goles en el partido; Mas o Menos </li>
              <li> Ganador primer tiempo </li>
              <li> Goles primer tiempo; Mas o Menos </li>
              <li> Local y más o menos Goles </li>
              <li> Visitante y más o menos Goles </li>
              <li> Ganador del Torneo (Anticipadas) </li>
              <li> Goleador del Partido </li>
              <li> Goleador del Torneo (Anticipadas) </li>
            </ol>
            <p className="text982T">¿Con cuáles te irías?</p>

            <h2 className="PageH2TitleSeoPages923">
              Partidos principales en la primera ronda de Qatar
            </h2>
            <p className="text982T">
              <strong>
                {" "}
                La Copa del Mundo Qatar comienza el 21 de noviembre{" "}
              </strong>{" "}
              y estos son algunos de los partidos más importantes de la ronda
              inicial para que los puedas marcar en tu calendario.
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
              Senegal vs. Holanda - 21 de noviembre:{" "}
            </h3>
            <p className="text982T">
              Senegal es el más fuerte de los cinco representantes africanos en
              Qatar, como lo demuestran su triunfo en la Copa Africana de
              Naciones a principios de este año y su victoria a dos partidos
              sobre Egipto para llegar a la Copa del Mundo, y un partido contra
              los tres veces finalistas de Holanda nos presenta una perspectiva
              atractiva.
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
              Francia vs. Dinamarca - 26 de noviembre:{" "}
            </h3>
            <p className="text982T">
              Desde Brasil 1962, los campeones reinantes de la Copa del Mundo no
              habían defendido su título, pero Francia buscará contrarrestar esa
              tendencia en Qatar. Dinamarca podría ser su enemigo más duro del
              Grupo D.
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
              Argentina vs México - 26 de noviembre:{" "}
            </h3>
            <p className="text982T">
              El único partido de la fase de grupos entre dos equipos que
              actualmente se encuentran entre los diez primeros de la
              Clasificación Mundial de la FIFA, el clásico latinoamericano entre
              Argentina y México bien podría decidir quién encabeza el Grupo C.
              Los equipos son enemigos relativamente regulares en el escenario
              internacional y México estará a la caza de una primera victoria
              sobre La Albiceleste desde la Copa América 2004.
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
              España vs Alemania - 27 de noviembre:{" "}
            </h3>
            <p className="text982T">
              Dos pesos pesados europeos que se han reconstruido en los últimos
              dos años se enfrentarán en un delicioso partido del Grupo E. La
              Copa del Mundo será una prueba de fuego de cuán lejos están ambas
              naciones de recuperar sus glorias del pasado.{" "}
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
              Ghana vs. Uruguay - 2 de diciembre:{" "}
            </h3>
            <p className="text982T">
              Otro partido de la fase de grupos con una historia mundialista
              memorable, Ghana y Uruguay solo se han enfrentado una vez, pero es
              un partido que vivirá en la infamia.
            </p>

            <h2 className="PageH2TitleSeoPages923">
              Favoritos a ganar la Copa del Mundo
            </h2>
            <p className="text982T">
              Cada vez crece la expectativa por una nueva edición del Mundial, y
              pese a que algunas selecciones 'grandes' como Italia se quedaron
              por fuera de esta gran cita, se prevé que el espectáculo será
              'mayúsculo', dentro de la lista de las Selecciones favoritas a
              llevarse la Copa del Mundo están:
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">Brasil </h3>
            <p className="text982T">
              Los dirigidos por Tite se perfilan como uno de los favoritos de
              las casas de apuestas ya que confían plenamente en sus estrellas
              tales como Neymar o Vini Jr.
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">Francia </h3>
            <p className="text982T">
              La actual campeona del mundo también es otra de las favoritas para
              el título. A pesar de que durante varios años ha persistido la
              maldición del campeón se espera que sean los Bleus quienes rompan
              esa mala racha, ya que cuenta con grandes jugadores como Kylian
              Mbappé, Paul Pogba y por supuesto Karim Benzema.
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">España </h3>
            <p className="text982T">
              El equipo dirigido por Luis Enrique también tiene a los
              aficionados con las expectativas altas para llevarse el título.
              Asimismo, además de una joven y muy buena plantilla, La Roja
              mostró una gran actuación en la Eurocopa 2020, la cual podría
              repetirse.
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">Argentina </h3>
            <p className="text982T">
              La Albiceleste es otro de los equipos que siempre se encuentra
              dentro de los favoritos. Los sudamericanos consiguieron llevarse
              la Copa América 2020 y también son los campeones de la Finalissima
              que disputaron frente a Italia. Además, este podría ser el último
              mundial de Lionel Messi por lo que la motivación para llevarse la
              copa podría ser mayor.
            </p>

            <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">Bélgica </h3>
            <p className="text982T">
              Los Diablos Rojos se encuentran en el segundo puesto del Ranking
              FIFA y figuras como Kevin De Bruyne, Romelu Lukaku y Eden Hazard
              los posiciona dentro de los favoritos. Y Portugal: La gran figura
              de los portugueses, Cristiano Ronaldo, también podría disputar su
              última Copa Mundial por lo que no cabe duda que lucharán con todo
              por conseguir una estrella para su camiseta.
            </p>

            <Accordion
              className="content-accordion"
              // defaultActiveKey={["/"]}
              alwaysOpen
            >
              <Accordion.Item className="accordionT454" eventKey="0">
                <Accordion.Header className="PageH3TitleSeoPages923 accordionT454">
                  ¿Qué otras apuestas habrá en el Mundial de Qatar?
                </Accordion.Header>
                <h3 className="PageH3TitleSeoPages923 "> </h3>
                <Accordion.Body className="accordionBody text982T">
                  <p className="text982T">
                    Máximo goleador: Se trata de un pronóstico donde se apuesta
                    quien será o quien anotará más goles en la competición.
                  </p>
                  <p className="text982T">
                    Tarjetas y sanciones: Se trata de indicar en un partido si
                    habrá más o menos de un número determinado de Tarjetas
                    amarillas y rojas en el encuentro O por equipo. Ejemplo:
                    ¿Equipo local tendrá más o menos de un número determinado de
                    tarjetas amarillas o rojas en el encuentro? (Actualmente
                    este mercado de tarjetas no está disponible en la oferta de
                    Codere en todos los encuentros.)
                  </p>
                  <p className="text982T">
                    Córners y tiros libres: Es un mercado donde el jugador debe
                    indicar en un partido si habrá más o menos de un número
                    determinado de Córner o Tiros libres en el encuentro o por
                    equipo. Ejemplo: ¿Equipo local tendrá más o menos de un
                    número determinado de Córner o Tiros libres en el encuentro?
                    (Actualmente este mercado de tiros libres no está disponible
                    en la oferta de Codere en todos los encuentros.)
                  </p>
                  <p className="text982T">
                    Premio Fair Play: Se concede al equipo con el récord de
                    juego limpio durante el campeonato. Para este premio, solo
                    se consideran equipos que pasan a la segunda ronda. Por lo
                    tanto, esta apuesta se trata de indicar que equipo jugará
                    más limpio en el torneo y será ganador de este premio.
                  </p>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className="accordionT454" eventKey="1">
                <Accordion.Header className="PageH3TitleSeoPages923 accordionT454">
                  Preguntas frecuentes sobre Qatar 2022
                </Accordion.Header>
                <h3 className="PageH3TitleSeoPages923 "> </h3>
                <Accordion.Body className="accordionBody text982T">
                  <p className="text982T">
                    Aquí te orientamos con algunas preguntas frecuentes que
                    pueden ayudar a resolver tus dudas acerca del mundial de
                    fútbol.{" "}
                  </p>

                  <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
                    ¿Qué Mundial viene después de Qatar 2022?
                  </h3>
                  <p className="text982T">
                    El siguiente Mundial a Qatar 2022 se llevará a cabo en
                    Canadá/Estados Unidos/México en el 2026. La sede triple fue
                    escogida el 13 de junio de 2018, durante el 68.º Congreso de
                    la FIFA en Moscú, Rusia. Es la primera vez que la FIFA
                    otorga una sede a tres países para organizar el campeonato.
                  </p>
                  <p className="text982T">
                    Esta será la primera ocasión en que 48 selecciones
                    clasifiquen a la fase final luego de la decisión de FIFA,
                    promovida por Gianni Infantino, aprobada el 10 de enero de
                    2017 de elevar de 32 plazas a 48 donde habrá 16 grupos de
                    tres equipos y las eliminatorias empezarán en dieciseisavos.
                  </p>
                  <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
                    ¿Qué países participarán en el Mundial 2022?{" "}
                  </h3>
                  <p className="text982T">
                    {" "}
                    Los 32 países que lograron conseguir su cupo a Qatar 2022
                    son: Qatar, Alemania, Dinamarca, Brasil, Francia, Bélgica,
                    Croacia, España, Serbia, Inglaterra, Suiza, Holanda,
                    Argentina, Irán, Corea del Sur, Japón, Arabia Saudita,
                    Ecuador, Uruguay, Canadá, Ghana, Senegal, Portugal, Polonia,
                    Túnez, Marruecos, Camerún, México, Estados Unidos, Gales,
                    Australia y Costa Rica.{" "}
                  </p>
                  <h3 className="PageH3TitleSeoPages923 mt-4 mb-2">
                    ¿Por qué el Mundial de Qatar es en noviembre?{" "}
                  </h3>
                  <p className="text982T">
                    En 2011, Joseph Blatter anunció que este mundial podría ser
                    adelantado a enero de 2022 o postergado a noviembre del
                    mismo año, debido a que en Catar en verano las temperaturas
                    en los meses de junio y julio llegan a 50º C. Al final,
                    decidieron postergarlo al mes de noviembre y diciembre, ya
                    que el clima en esos meses es de entre 20° y 30° y así
                    podría protegerse a los futbolistas y a todos los
                    relacionados con dicho certamen.{" "}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <Row>
          <Col className="text-center imgFsDiv">
            <Image
              className="img-fluid"
              src="https://codere.com.co/SEOpagesReact/apuestas-mundial-fifa/assets/images/banner4-qatar-desk.webp"
            />
          </Col>
        </Row>

        <div className="row">
          {/* <div className="col-12 mt-6 eventosDeportivasLinkTitle">
            <h2>
              Vive la emoción de apostar a tus eventos deportivos favoritos
            </h2>
          </div> */}
          <div className="col-12 mt-6 RegistrateMobBtn">
            <a
              rel="nofollow"
              className="registrate-button  bottomContentPromoButton btn btn-primary"
              href="https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"
            >
              Juega ahora
            </a>
          </div>
          <hr className="mt-6" />
        </div>
      </div>{" "}
      {/*container end div*/}
    </>
  );
};

export default ApuestasMundialFifa;
