import { Container, Row, Col, NavLink, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Floating from "../Floating";
import TableOfContents from "../TableOfContents";

export default function Slots(props) {
  const game_prefix = "https://m.codere.com.co/deportes/#/CasinoPage?playgame=";

  const title = "Slots Online » Bono De $100.000 en Tragamonedas | Codere®";
  const description =
    "Disfruta en línea de las mejores máquinas tragamonedas 🎰, juega en las Slots de Casino en Codere Colombia, ¡prueba tu suerte y diviértete!";

  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo jugar a las Tragamonedas Online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Antes de que juegues un juego de slot en línea, vas a querer entender cómo funciona el juego. Las maquinas tragamoneas clásicas cuentan con tres carretes y tres filas, pero esto puede variar ampliamente cuando estés jugando online, debido a los diferentes tipos que puedes encontrar. Más de esto más adelante online. Cada máquina de tragamoneda cuenta con un conjunto único de líneas de pago. Para que los jugadores de slot puedan ganar, debe coincidir varias veces el mismo símbolo en una sola línea de pago. Las líneas de pago no siempre corren en una línea recta. De hecho, a menudo se deslizan a través de los carretes como en un gráfico financiero en una sala de juntas. Cada máquina de slot contiene un conjunto único de símbolos los cuales determinan cuánto dinero se gana cuando el mismo símbolo se muestra múltiples veces en una solo línea de pago. Cada juego de tragamoneda contiene una tabla de pago que muestra la cantidad a pagar como recompensa de cada símbolo. El número de máquinas de slot que un casino tradicional puede tener se ve limitado por el espacio físico que un piso tiene. Casinos online a menudo contienen cientos de diferentes temas de slot a elegir, y ya que no hay limitaciones físicas, los usuarios no tiene que esperar para jugar su juego favorito.",
        },
      },
    ],
  };

  const top_par = {
    h1: "¡Juega a slots, las tragamonedas más divertidas de Colombia!",
    p: ["Aquí aprenderás acerca de:"],
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "¿Cómo jugar a las Tragamonedas Online?",
      id: "anchor-1",
    },
    {
      title: "Slot Online Vs. las Máquinas Tragamonedas",
      id: "anchor-2",
    },
    {
      title: "Trucos de Slots – ¿Realmente funcionan?",
      id: "anchor-3",
    },
    {
      title: "Bonos promocionales para jugar slots o máquinas tragamonedas",
      id: "anchor-4",
    },

    {
      title: "Juega en línea en las mejores tragamonedas de Colombia!",
      id: "anchor-6",
    },
  ];

  // Games Data
  const live_games = [
    {
      name: "Aviator",
      img: "PRPAviator_Square",
      urlImageName: "PRP%20Aviator",
      sponsor: "MGS",
    },
    {
      name: "PTBlueWizard_Square",
      img: "PTBlueWizard_Square",
      urlImageName: "PT%20Blue%20Wizard",
      sponsor: "EVG",
    },
    {
      name: "PTPharaohsDaughter_Square",
      img: "PTPharaohsDaughter_Square",
      urlImageName: "PT%20Pharaohs%20Daughter",
      sponsor: "EVG",
    },
    {
      name: "PTEternalLady_Square",
      img: "PTEternalLady_Square",
      urlImageName: "PT%20Eternal%20Lady",
      sponsor: "EVG",
    },
    {
      name: "PTTigerStacks_Square",
      img: "PTTigerStacks_Square",
      urlImageName: "PT%20Tiger%20Stacks",
      sponsor: "EVG",
    },
    {
      name: "PTSkyQueen_Square",
      img: "PTSkyQueen_Square",
      urlImageName: "PT%20Sky%20Queen",
      sponsor: "EVG",
    },
    {
      name: "PTAgeoftheGodsApolloPower_Square",
      img: "PTAgeoftheGodsApolloPower_Square",
      urlImageName: "PT%20Age%20of%20the%20Gods%20Apollo%20Power",
      sponsor: "MGS",
    },
    {
      name: "PTFireBlazeGoldenAmazingFactory_Square",
      img: "PTFireBlazeGoldenAmazingFactory_Square",
      urlImageName: "PT%20Fire%20Blaze%20Golden%20Amazing%20Factory",
      sponsor: "EVG",
    },
    {
      name: "PTAgeoftheGodsRuleroftheSeas_Square",
      img: "PTAgeoftheGodsRuleroftheSeas_Square",
      urlImageName: "PT%20Age%20of%20the%20Gods%20Ruler%20of%20the%20Seas",
      sponsor: "EVG",
    },
    {
      name: "PTTsaiShensGift_Square",
      img: "PTTsaiShensGift_Square",
      urlImageName: "PT%20Tsai%20Shens%20Gift",
      sponsor: "EVG",
    },
    {
      name: "HAB5MARIACHIS_Square",
      img: "HAB5MARIACHIS_Square",
      urlImageName: "HAB%205%20MARIACHIS",
      sponsor: "EVG",
    },
    {
      name: "PTAgeoftheGodsEpicTroy_Square",
      img: "PTAgeoftheGodsEpicTroy_Square",
      urlImageName: "PT%20Age%20of%20the%20Gods%20Epic%20Troy",
      sponsor: "EVG",
    },
  ];

  const como_juega = {
    id: "como_juega",
    p0: [
      "Los juegos de slots son una de las partes más fascinantes del casino online de Codere. Deja de preocuparte por sacar tiempo para acudir a tu casino más cercano, ya que ahora podrás jugar los mejores tragamonedas desde la palma de tu mano y la comodidad de tu casa o tu trabajo, en tu celular, en la app de Codere o desde tu computador.",
    ],
    p: [
      "Cada juego de slot que encuentres en el casino online de Codere contará con un conjunto único de líneas de pago. Para ganar, deberás hacer coincidir un símbolo concreto en una de estas líneas, así de sencillo." +
        "\n",
      "Elige entre muchas de nuestras opciones de juegos de máquinas “tragamonedas“ y “jackpots”, juegos de mesa clásicos y sus variables, así como nuestra emocionante ruleta en vivo, bingos o cualquiera que sea tu juego preferido. Puedes disfrutar jugando usando nuestras promociones y bonificaciones que ofrecemos constantemente, incluso sin depósito inicial y con las mejores condiciones de retiro de tus ganancias, las cuales puedes cobrar en efectivo." +
        "\n",
      "Visitar un casino es una de las experiencias más emocionantes del mundo. Las luces brillantes de las máquinas, combinadas con los gritos de alegría de los grandes ganadores que permanecen en el aire, son suficientes para hacer que el corazón de cualquiera se acelere. No hay nada que se compare a esta. El único problema es que los casinos no son siempre fácilmente accesibles y con ofertas limitadas. Si tú no vives cerca de uno, probablemente no juegues tanto como quisieras." +
        "\n",
      "Los sitios de casinos online han cambiado esto. Los juegos de casino online eliminan todas las limitaciones de los casinos físicos, permitiéndote jugar juegos de casino perfectamente diseñados desde cualquier lugar y a cualquier momento, incluso desde la comodidad de tu propia casa.",
    ],
  };

  const reglas = {
    id: "anchor-1",
    h2: "¿Cómo jugar a las Tragamonedas Online?\n",
    p: {
      pi: [
        "Antes de que juegues un juego de slot en línea, vas a querer entender cómo funciona el juego. Las maquinas tragamoneas clásicas cuentan con tres carretes y tres filas, pero esto puede variar ampliamente cuando estés jugando online, debido a los diferentes tipos que puedes encontrar. Más de esto más adelante online.​\n" +
          "\n",
        "Cada máquina de tragamoneda cuenta con un conjunto único de líneas de pago. Para que los jugadores de slot puedan ganar, debe coincidir varias veces el mismo símbolo en una sola línea de pago. Las líneas de pago no siempre corren en una línea recta. De hecho, a menudo se deslizan a través de los carretes como en un gráfico financiero en una sala de juntas.\n" +
          "\n",
        "Cada máquina de slot contiene un conjunto único de símbolos los cuales determinan cuánto dinero se gana cuando el mismo símbolo se muestra múltiples veces en una solo línea de pago. Cada juego de tragamoneda contiene una tabla de pago que muestra la cantidad a pagar como recompensa de cada símbolo.\n" +
          "\n",
        "El número de máquinas de slot que un casino tradicional puede tener se ve limitado por el espacio físico que un piso tiene. Casinos online a menudo contienen cientos de diferentes temas de slot a elegir, y ya que no hay limitaciones físicas, los usuarios no tiene que esperar para jugar su juego favorito.\n" +
          "\n",
      ],
    },

    inner: [
      {
        h2: "Reseña de los Diferente Juegos de Ruleta\n",
        id: "anchor-2",
      },
    ],
  };

  const estrategias = {
    id: "anchor-4",
    h2: "Bonos promocionales para jugar slots o máquinas tragamonedas\n",
    p: [
      "Codere ofrece uno de los mejores códigos de bonos de slot en la web. A los usuarios de Codere se les ofrecen bonos que van desde giradas gratis hasta depósitos en dinero real. Con cada bono que un usuario reclama, su oportunidad de obtener grandes ganancias, incrementa. Muchas personas han usado bonos de slot para ganar grandes pagos.\n" +
        "\n",
      "Cada jugador en Codere es tratado como VIP, bien sea si eres un nuevo usuario o si llevas años jugando los juegos de slot en Colombia. Incluso si recién creaste tu cuenta. Cuando se trata de bonos a nuevos usuarios, Codere ofrece las mejores experiencias en tragamonedas. ​\n" +
        "\n",
      "Ahora que sabes todo lo básico sobre máquinas tragamonedas, es el momento de abrir tu nueva cuenta y reclamar tu bono como nuevo usuario. Una vez registrado, ¡puedes empezar tu viaje de slot online!\n" +
        "\n",
    ],
  };

  const floor1 = {
    id: "anchor-2",

    title:
      "Slot Online Vs. las Máquinas Tragamonedas: Diferencias y Similitudes",
    data: {
      p1: [
        "Aunque las reglas básicas del juego se mantienen iguales en ambas, online y slots en vivo, existen grandes diferencias importantes.\n" +
          "\n",
        "Pese a que el clásico slot contiene solo tres carretes y tres filas, los slots online típicamente contienen por lo menos cinco carretes, aunque este número puede ser incluso mayor dependiendo del juego especifico. Desde que los slots online tienen más carretes, estas también contienen más líneas de pago, lo que significa que hay más maneras de ganar con cada giro.\n" +
          "\n",
        "Adicional a los carretes de mas, las maquinas slot online también contienen muchos más temas interactivos. Juegos de slots de casino online combina la emoción de las máquinas de slot, con gráficos 3D y las historias inmersas de los videojuegos.\n" +
          "\n",
      ],
    },
  };

  const floor3 = {
    id: "anchor-6",
    title: "¡Juega en línea en las mejores tragamonedas de Colombia!",
    data: {
      p: [
        "Si ya conoces las tragamonedas tradicionales, ¡Ya lo entendiste todo! Descubre los juegos del casino en línea de Codere, aumenta el número de carretes, las líneas de pago y tus posibilidades de ganar. Además, ¡te ofrecemos un bono de bienvenida increíble y bonificaciones todas las semanas para que ganes todavía más! Y eso sin contar los premios de Jackpots progresivos y millonarios adicionales que tendrás en muchos de nuestros juegos de slots y que se acumulan todos los días.​\n",

        "¡Descubre las diferentes ofertas, acepta el reto y empieza a realizar tus apuestas!",
      ],
    },
  };

  const floor4 = {
    id: "anchor-3",

    title: "Trucos de Slots – ¿Realmente funcionan?",
    data: {
      p1: [
        "Las máquinas de slot son principalmente juegos de suerte, lo que significa que no hay una gran cantidad de estrategias que puedas usar para mejorar tus posibilidades. Dicho esto, hay algunas cosas que puedas hacer para ganar pagos más altos.",
        "Uno de los más importantes trucos de slot que puedes aprender es navegar en sitios web www slot que ofrecen bonos sin depósitos. Los casinos son negocios y, como cualquier otro negocio, deben atraer clientes. Como resultado, los casinos a menudo ofrecen promociones especiales de introducción para nuevos usuarios con la esperanza de que se conviertan en clientes leales. Al usar bono sin depósito, los usuarios de casinos en línea incrementan sus posibilidades de ganar en grande con poca o mínima inversión.\n" +
          "\n",
      ],
    },
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="https://www.codere.com.co/casino/slots" />

        <meta name="description" content={description} />
        <script type="application/ld+json">{JSON.stringify(json)}</script>
      </Helmet>

      <Floating text="¡Los mejores Slots!" juega={true} />
      <div
        className="top-bg-seo "
        style={{
          backgroundImage: `url(https://www.codere.com.co/Colombia/images/seoCasinoImages/slots/${
            props.flag ? "Slots_mob" : "Slots"
          }.jpg)`,
          backgroundSize: "cover",
        }}
      ></div>

      <Container style={{ color: "#fff" }}>
        <h1 className="header mt-4 mb-3">{top_par.h1}</h1>

        {/* Table */}
        {!props.flag ? (
          <TableOfContents table={table_of_contents_list} />
        ) : null}
        {como_juega.p0.map((p, k) => (
          <p key={k}>{p}</p>
        ))}
        {/* Games */}
        <Row className="casino-row">
          {live_games
            .slice(0, !props.flag ? live_games.length : 4)
            .map((game, k) => (
              <Col lg={2} md={4} xs={6} key={k}>
                <NavLink href={`${game_prefix}${game.urlImageName}`}>
                  <div className="cas-game-wrapper">
                    <LazyLoadImage
                      className="casino-game-img shining"
                      src={
                        "https://www.codere.com.co/Colombia/images/seoCasinoImages/slots/" +
                        game.img +
                        ".jpg"
                      }
                    />
                    <div className="hvr">
                      <p>{game.name}</p>
                      <LazyLoadImage src="https://www.codere.com.co/Colombia/images/casinoIcons/playHoverLogo.svg" />
                    </div>
                  </div>
                </NavLink>
              </Col>
            ))}
        </Row>

        {como_juega.p.map((p, k) => (
          <p key={k}>{p}</p>
        ))}

        <div id={reglas.id}>
          <h2 className="mt-4 mb-3">{reglas.h2}</h2>
          <p>{reglas.p.p5} </p>
          {reglas.p.pi.map((p, k) => (
            <p key={k}>{p}</p>
          ))}
        </div>

        <div id={floor1.id}>
          <h2 className="mt-4 mb-3">{floor1.title}</h2>

          <div className="estrategias_container">
            {floor1.data.p1.map((pi, k) => (
              <p key={k}>{pi}</p>
            ))}
          </div>
        </div>

        <div id={floor4.id}>
          <h2 className="mt-4 mb-3">{floor4.title}</h2>

          <div className="estrategias_container">
            {floor4.data.p1.map((pi, k) => (
              <p key={k}>{pi}</p>
            ))}
          </div>
        </div>

        <div id={estrategias.id}>
          <h2 className="mt-4 mb-3">{estrategias.h2}</h2>
          {/*<LazyLoadImage*/}
          {/*	style={{margin: "auto", display: "flex", maxWidth: "90%"}}*/}
          {/*	src={estrategias.table_img}*/}
          {/*/>*/}
          <div className="estrategias_container">
            {estrategias.p.map((pi, k) => (
              <p key={k}>{pi}</p>
            ))}
          </div>
        </div>

        <div id={floor3.id}>
          <h2 className="mt-4 mb-3">{floor3.title}</h2>

          <div className="estrategias_container">
            {floor3.data.p.map((pi, k) => (
              <p key={k}>{pi}</p>
            ))}
          </div>
        </div>

        <Button
          href={"https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"}
          className="cas-reg-btn"
          rel="nofollow"
        >
          Registrate
        </Button>
      </Container>
    </div>
  );
}
