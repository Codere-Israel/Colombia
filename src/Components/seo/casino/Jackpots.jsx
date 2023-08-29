import { Container, Row, Col, NavLink, Button } from "react-bootstrap";
import Floating from "../Floating";
import TableOfContents from "../TableOfContents";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DynamicTable from "../DynamicTable";

export default function Jackpots(props) {
  const game_prefix = "https://m.codere.com.co/deportes/#/CasinoPage?playgame=";

  const title = "¿Cómo Ganar Un Jackpot? » Obtén Bono de $100.000 | Codere®";
  const description =
    "Un Jackpot es el premio máximo que un slot puede dar a un jugador. Prueba tu suerte en las mejores tragamonedas en línea que Codere Colombia tiene.";

  const top_par = {
    h1: "Jackpots de slots, el premio máximo",
    p: ["En este artículo aprenderás sobre:\n"],
  };

  // Table of Contents  \\
  const table_of_contents_list = [
    {
      title: "¿Qué es un jackpot y cuales son sus diferentes tipos?",
      id: "anchor-1",
    },
    {
      title: "Tu oportunidad con los jackpots es todos los días",
      id: "anchor-2",
    },
    {
      title: "4 consejos para agarrar un premio millonario en los jackpots",
      id: "anchor-3",
    },
  ];

  // Table

  const tableData = {
    headers: [],
    rows: [
      {
        id: 1,
        a1: "Jackpot fijos",
        a2: "Son slots en los cuales la cantidad en juego no tiene variación. Esta cantidad siempre se mantendrá sin importar si juegas más veces.",
      },
      {
        id: 2,
        a1: "Jackpot progresivo",
        a2: "Son los premios acumulados que pueden ir creciendo cada vez más. Estos Jackpots crecerán de acuerdo un porcentaje de la cantidad que tú sigas jugando en esta slot. ¡No pierdas de vista este tipo de Jackpots! ¡Relájate! Sabemos que hay una amplia variedad de juegos, por eso hemos creado una lista con la mejor selección de slots, juegos que su trama y temática te llevará a divertirte y ganar.",
      },
    ],
  };

  // Games Data
  const live_games = [
    {
      name: "PT%20Age%20of%20the%20Gods%20Ruler%20of%20the%20Seas",
      img: "PTAgeoftheGodsRuleroftheSeas_Square",
      sponsor: "MGS",
    },
    {
      name: "PT%20Age%20of%20the%20Gods%20Epic%20Troy",
      img: "PTAgeoftheGodsEpicTroy_Square",
      sponsor: "EVG",
    },
    {
      name: "PT%20Age%20of%20the%20Gods%20Apollo%20Power",
      img: "PTAgeoftheGodsApolloPower_Square",
      sponsor: "EVG",
    },
    {
      name: "PGP%20Sweet%20Bonanza",
      img: "PGPSweetBonanza_Square",
      sponsor: "EVG",
    },
    {
      name: "PGP%20Great%20Rhino",
      img: "PGPGreatRhino_Square",
      sponsor: "EVG",
    },
    {
      name: "PGP%20Gates%20of%20Olympus",
      img: "PGPGatesofOlympus_Square",
      sponsor: "EVG",
    },
    {
      name: "PGO%20Wild%20Frames",
      img: "PGOWildFrames_Square",
      sponsor: "MGS",
    },
    {
      name: "HAB%20Panda%20Panda",
      img: "HABPandaPanda_Square",
      sponsor: "EVG",
    },
    {
      name: "HAB%20Hot%20Hot%20Fruit",
      img: "HABHotHotFruit_Square",
      sponsor: "EVG",
    },
    {
      name: "HAB%20Fa%20Cai%20Shen",
      img: "HABFaCaiShen_Square",
      sponsor: "EVG",
    },
    {
      name: "PT%20Kingdoms%20Rise%20Sands%20of%20Fury",
      img: "PTKingdomsRiseSandsofFury_Square",
      sponsor: "EVG",
    },
    {
      name: "PT%20Kingdoms%20Rise%20Forbidden%20Forest",
      img: "PTKingdomsRiseForbiddenForest_Square",
      sponsor: "EVG",
    },
  ];

  //https://m.codere.com.co/deportes/#/CasinoPage?playgame=%20HAB%20Panda%20Panda
  //https://m.codere.com.co/deportes/#/CasinoPage?playgame=HAB%20Panda%20Panda

  const como_juega = {
    id: "como_juega",

    p: [
      "¿Recuerdas la escena de Ocean’s Eleven con Brad Pitt, George Cloney, Andi García y Julia Roberts donde en un casino de las Vegas ingresan una moneda a una máquina tragamonedas y gana mucho dinero esa persona?\n" +
        "\n",
      "Bueno eso es un JACKPOT y esa persona puedes ser tú jugando en un slot o tragamonedas del Casino Codere online para ganar un premio millonario.\n" +
        "\n",
      "Claro, ahora todo ha evolucionado para que pases más y mejores horas de diversión, esto te lo decimos porque ya no deberás esperar a tirar y esperar a que se alineen el mismo símbolo. Ahora, encontrarás múltiples rodillos que pueden girar en diferentes direcciones para crear muchas combinaciones que te pueden hacer ganar.\n" +
        "\n",
      "Podrás elegir entre los diferentes slots que tenemos disponibles en el casino Codere, elige entre las míticas historias de dioses, reyes, civilizaciones antiguas, tacos o hermosos animales animados que tienen millones esperando por ti.\n" +
        "\n",
    ],
  };

  const reglas = {
    id: "anchor-2",
    h2: "TU OPORTUNIDAD CON LOS JACKPOTS ES TODOS LOS DÍAS\n",
    p: {
      p1:
        "Te preguntarás, ¿cuál es la mejor hora para jugar y cazar un jackpot millonario? Bueno, la respuesta a cualquier hora puede ser la mejor. Eso es lo más divertido de los slots, ya que cuando menos te lo esperes tú puedes salir ganando. Es cierto, también puedes hacer un plan para divertirte y poder ser uno de los ganadores, aunque nunca está de más cruzar los dedos.\n" +
        "\n",
      innerTitle:
        "4 CONSEJOS PARA AGARRAR UN PREMIOS MILLONARIO EN LOS JACKPOT\n",
      innerTitleId: "anchor-3",
      list: [
        "Primero que todo, define un presupuesto para jugar, recuerda que la diversión también aguarda con un juego responsable.\n",
        "Echa un vistazo a los slots con jackpots disponibles, no siempre el que tenga una mayor premio acumulado será el más fácil de ganar.\n",
        "Alterna la cantidad de tus apuestas, arriesga un poco más en algunas ocasiones. Algunos aconsejan también jugar a los Jackpots de tipo progresivo ya que hay más posibilidades de que salgan en comparación con las slots que cuestan menos dinero.\n",
        "Disfruta el momento, por ahí dicen que todo llega cuando menos lo esperas. No olvides que siempre hay que jugar con cabeza y nunca abusar del tiempo y/o la cantidad de dinero con la que se puede jugar.\n",
      ],

      pi: [
        "En el Casino Codere hemos puesto a tu alcance diferentes tipos de jackpots, podrás decidir por los que explotan en determinado tiempo o cuando lleguen a determinada cantidad.\n" +
          "\n",
        "¿Hasta no ver no creer? Te entendemos, jugar con dinero puede generar temor e incredibilidad, pero te queremos contar una historia muy real que ocurrió en Codere España, en enero de 2020, un usuario se puso a jugar de forma habitual su slot preferido de Gladiator Road to Rome sin saber que ese día tendría un golpe de suerte y ganaría una de las bolsas más grandes del Jackpot: ¡1,510,172.82 Euros! Y en nuestro país hemos entregado hasta 110 millones de pesos en un solo juego.\n" +
          "\n",
        "¡Vuélvete el próximo ganador de Codere, ponte tu amuleto de la suerte, cruza los dedos y comienza a girar tu slot favorito, porque ganar en Codere es un relajo!\n" +
          "\n",
      ],
    },
  };

  const estrategias = {
    id: "estrategias",
    h2: "Bonos promocionales para jugar slots o máquinas tragamonedas\n",
    p: [
      "Codere ofrece uno de los mejores códigos de bonos de slot en la web. A los usuarios de Codere se les ofrecen bonos que van desde giradas gratis hasta depósitos en dinero real. Con cada bono que un usuario reclama, su oportunidad de obtener grandes ganancias, incrementa. Muchas personas han usado bonos de slot para ganar grandes pagos.\n" +
        "\n",
      "Cada jugador en Codere es tratado como VIP, bien sea si eres un nuevo usuario o si llevas años jugando los juegos de slot en Colombia. Incluso si recién creaste tu cuenta. Cuando se trata de bonos a nuevos usuarios, Codere ofrece las mejores experiencias en tragamonedas. ​\n" +
        "\n",
      "Ahora que sabes todo lo básico sobre máquinas tragamonedas, es el momento de abrir tu nueva cuenta y reclamar tu bono como nuevo usuario. Una vez registrado, ¡puedes empezar tu viaje de slot online!\n" +
        "\n",
    ],
    // table_img:
    // 	"https://www.codere.com.co/_catalogs/masterpage/codere/images/seo/Table_mobile.jpg",
  };

  const floor1 = {
    id: "floor1",
    title: "¿QUÉ ES UN JACKPOT Y CUALES SON SUS DIFERENTES TIPOS?",
    data: {
      p1: [
        "Un Jackpot es el premio máximo que un slot puede dar a un jugador. Este premio es independiente al que puedes ganar en tus giros y de la nada en alguno de los giros puede explotar el Jackpot y tú puedes ser el ganador.\n" +
          "\n",
        "Mucho es cuestión de suerte pero también puedes generar una estrategia para lograrlo con mayor facilidad.\n" +
          "\n",
        "Primero registrarte en Codere Colombia y obtén un increíble bono de bienvenida en el casino online Codere. Después da clic en la pestaña Crown del Casino y ve a la sección de Jackpots.\n" +
          "\n",
        "Aquí verás todos los slots que tienen un jackpot disponible, en la etiqueta amarilla verás la cantidad que puedes ganar. En el casino Codere existen dos tipos de Jackpots:\n" +
          "\n",
      ],
      p2: [
        "¡Relájate! Sabemos que hay una amplia variedad de juegos, por eso hemos creado una lista con la mejor selección de slots, juegos que su trama y temática te llevará a divertirte y ganar.\n" +
          "\n",
        "En este momento encuentras con Jackpot los siguientes juegos:\n" +
          "\n",
      ],

      list: [
        "5 Lucky Lions\n",
        "Wizards Want War\n",
        "Hot Hot Fruit\n",
        "Magic Qak\n",
        "5 Mariachis\n",
        "Panda Panda\n",
        "Ruffled Up\n",
        "12 Zodiacs\n",
        "Four Divine Beats\n",
        "Bird Of Thunder\n",
      ],
    },
  };

  const floor3 = {
    id: "floor3",
    title: "¡Juega en línea en las mejores tragamonedas de Colombia!",
    data: {
      p: [
        "Si ya conoces las tragamonedas tradicionales, ¡Ya lo entendiste todo! Descubre los juegos del casino en línea de Codere, aumenta el número de carretes, las líneas de pago y tus posibilidades de ganar. Además, ¡te ofrecemos un bono de bienvenida increíble y bonificaciones todas las semanas para que ganes todavía más! Y eso sin contar los premios de Jackpots progresivos y millonarios adicionales que tendrás en muchos de nuestros juegos de slots y que se acumulan todos los días.​\n",

        "¡Descubre las diferentes ofertas, acepta el reto y empieza a realizar tus apuestas!",
      ],
    },
  };

  const floor4 = {
    id: "floor4",
    dropdownSection: [
      {
        title: "Trucos de Slots – ¿Realmente funcionan?",
        data: {
          p1: [
            "Las máquinas de slot son principalmente juegos de suerte, lo que significa que no hay una gran cantidad de estrategias que puedas usar para mejorar tus posibilidades. Dicho esto, hay algunas cosas que puedas hacer para ganar pagos más altos.",
            "Uno de los más importantes trucos de slot que puedes aprender es navegar en sitios web www slot que ofrecen bonos sin depósitos. Los casinos son negocios y, como cualquier otro negocio, deben atraer clientes. Como resultado, los casinos a menudo ofrecen promociones especiales de introducción para nuevos usuarios con la esperanza de que se conviertan en clientes leales. Al usar bono sin depósito, los usuarios de casinos en línea incrementan sus posibilidades de ganar en grande con poca o mínima inversión.\n" +
              "\n",
          ],
        },
      },
    ],
  };

  return (
    <div className="cas-seo">
      <Helmet>
        <title>{title}</title>
        <link
          rel="canonical"
          href="https://www.codere.com.co/casino/jackpots"
        />

        <meta name="description" content={description} />
        {/*<script type="application/ld+json">{JSON.stringify(json)}</script>*/}
      </Helmet>

      <Floating text="¡Los mejores Jackpots!" juega={true} />
      <div
        className="top-bg-seo "
        style={{
          backgroundImage: `url(https://www.codere.com.co/Colombia/images/seoCasinoImages/jackpots/${
            props.flag ? "JACKPOTS_mob" : "JACKPOTS"
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

        {como_juega.p.map((p, k) => (
          <p key={k}>{p}</p>
        ))}
        {/* Games */}
        <Row className="casino-row">
          {live_games
            .slice(0, !props.flag ? live_games.length : 4)
            .map((game, k) => (
              <Col lg={2} md={4} xs={6} key={k}>
                <NavLink href={`${game_prefix}${game.name}`}>
                  <div className="cas-game-wrapper">
                    <LazyLoadImage
                      className="casino-game-img shining"
                      src={
                        "https://www.codere.com.co/Colombia/images/seoCasinoImages/jackpots/" +
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

        <div id={floor1.id}>
          <h2 className="mt-4 mb-3">{floor1.title}</h2>
          {floor1.data.p1.map((p, k) => (
            <p key={k}>{p}</p>
          ))}

          <DynamicTable table={tableData} />

          {floor1.data.p2.map((p, k) => (
            <p key={k}>{p}</p>
          ))}

          <ul>
            {floor1.data.list.map((p, k) => (
              <li key={k}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 id={reglas.id} className="mt-4 mb-3">
            {reglas.h2}
          </h2>
          <p>{reglas.p.p1} </p>
          <h2 id={reglas.p.innerTitleId} className="mt-4 mb-3">
            {reglas.p.innerTitle}
          </h2>
          <ul>
            {reglas.p.list.map((li, k) => (
              <li key={k}>{li}</li>
            ))}
          </ul>
          {reglas.p.pi.map((p, k) => (
            <p key={k}>{p}</p>
          ))}
          <Button
            href={
              "https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"
            }
            className="cas-reg-btn"
            rel="nofollow"
          >
            Registrate
          </Button>
        </div>
      </Container>
    </div>
  );
}
