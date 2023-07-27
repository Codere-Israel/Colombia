import Floating from "../parts/Floating";
import {
	Container,
	Accordion,
	Row,
	Col,
	NavLink,
	Button,
} from "react-bootstrap";
import {Helmet} from "react-helmet";
import {LazyLoadImage} from "react-lazy-load-image-component";
import TableOfContents from "../parts/TableOfContents";
import "./localCSS/casinoLocal.css";
// import { regis } from "../../App/App";
import {useEffect} from "react";
import Secondarymenu from "../parts/Secondarymenu";

export default function Blackjack(props)
{
	useEffect(() =>
	{
		window.scrollTo(0, 0);
	}, []);
	const game_prefix = "https://m.codere.com.co/deportes/#/CasinoPage?playgame=";

	const title = "Juega 21 Blackjack Online ♦️ Bono de Hasta $100.000 | Codere®";
	const description =
		      "Casino Codere trae para ti las mejores mesas para jugar Blackjack en línea, te invitamos a vivir la aventura de este popular juego en vivo.";

	const json = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
			"@type": "Question",
			"name": "¿Cómo jugar al Blackjack?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Si esta es la primera vez que vas a probar este juego lo más importante será que tengas en cuenta cómo se juega y las reglas principales para que nuestras partidas sean las mejores. En este juego solo tienes que pensar en un número: Esa cifra tiene que ser el 21 ya que si lo consigues la victoria estará asegurada. El valor de las cartas es muy importante: Del 2 al 10 su valor es dicha cifra, el J, Q o K tienen el valor de 10 y el AS podrá ser usado como 1 u 11."
			}
		}]

	};

	const top_par = {
		h1: "Blackjack 21: Suerte y estrategia para ganar",
		p : [
			"En este artículo aprenderás sobre:",
		],
	};

	// Table of Contents  \\
	const table_of_contents_list = [
		{
			title: "Principales Juegos de Blackjack Online en Codere",
			id   : "anchor-1",
		},
		{
			title: "¿Cómo jugar al Blackjack?",
			id   : "anchor-2",
		},
		{
			title: "¿Cuáles son las reglas del blackjack?",
			id   : "anchor-3",
		},
		{
			title: "¿Cómo ganar en el Blackjack? Estrategias y trucos",
			id   : "anchor-4",
		},

	];

	// Table
	const table = [
		[
			"Divir",
			"En esta opción buscaremos doblar la apuesta original. Aquí el jugador tendrá dos manos separadas contra el croupier. Solo se podrá lograr si se tienen dos cartas iguales, como por ejemplo dos nueves o dos cincos.",
		],
		[
			"Plantarse",
			"Este tipo de jugada se basa en hacer lo opuesto a pedir a la banca. La estrategia de esta jugada es sencilla, solo debes quedarte con la mano que tengas, sin añadir más cartas.",
		],
		[
			"Doblar",
			"Con esta jugada duplicas tu apuesta original a cambio de recibir una única carta.",
		],
		[
			"Separar",
			"Consiste en separar dos cartas iguales para poder jugarla en manos diferentes.",
		],
	];

	// Games Data
	const live_games = [
		{
			name   : "PT%20Premium%20Blackjack",
			img    : "PTPremiumBlackjack_Square",
			sponsor: "MGS",
		},
		{
			name   : "EVG%20RNG%20Blackjack",
			img    : "EVGRNGBlackjack_Square",
			sponsor: "EVG",
		},
		{
			name   : "EVG%20VIP%20Blackjack%20Espanol%207",
			img    : "EVGVIPBlackjackEspanol7_Square",
			sponsor: "EVG",
		},
		{
			name   : "HAB%20Blackjack%20Double%20Exposure%203%20Hand",
			img    : "HABBlackjackDoubleExposure3Hand_Square",
			sponsor: "EVG",
		},
		{
			name   : "G1%20Blackjack%20Multihand",
			img    : "G1BlackjackMultihand_Square",
			sponsor: "EVG",
		},
		{
			name   : "EVG%20Blackjack%20Espanol%205",
			img    : "EVGBlackjackEspanol5_Square",
			sponsor: "EVG",
		},
	];

	const como_juega = {
		id: "como_juega",

		p: "Seguro que muchos recordamos la mítica frase: “Ganaré, ganaré y gallinas cenaré”. Los que lograron recordarlo aprobaron el examen como cinéfilos. Ya que esta legendaria frase es una de las películas de casino más exitosas y que trata de manera diferente el hermoso juego del Blackjack. Por eso, en el casino online de Codere te queremos invitar a vivir la aventura de este popular juego disfrutando del 21 online. Pero esta aventura no debe ser solo un momento de suerte. Sino que, además, disfrutar y celebrar cada truco, estrategia y forma de jugar este emocionante juego. \n" +
			"De principio solo te daremos una razón para convencerte de que jugar Blackjack en línea en Codere es la mejor opción. Ya que desde antes de jugar puedes ganar. Suena extraño, pero es real. La manera de hacerla es el gran bono de bienvenida en casino que está esperando por ti y que podrás disfrutar desde tu registro y tu primera apuesta en casino. Este bono te permitirá recibir hasta $100.000 extras. \n",

	};

	const reglas = {
		id: "anchor-1",
		h2: "Principales Juegos de Blackjack Online en Codere",
		p : {
			p5  : "Es momento de darle una mirada a la lista a de opciones que te dará la oportunidad de disfrutar incluso la experiencia de disfrutar cada partida con un croupier en vivo",
			list: [
				"Codere Blackjack",
				"Blackjack Multihand",
				"Blackjack VIP",
				"Blackjack 3 Hand",
				"Double Exposure 3 Hand",
				"Atlantic City Blackjack",
			],
			pi  : [
				"Cada uno de estos juegos tiene una característica en particular que seguramente te gustará muchísimo, además de que la bonificación que puedes conseguir será totalmente distinta. Por lo que según tu estrategia encontrarás cuál es el juego que más se adapta a tus intereses.",
				"¿Qué te parece? ¿Quieres saber más sobre el Casino Codere y toda la diversión que forma parte del Blackjack?\n",
			],
		},

		inner: [
			{
				h2             : "¿Cómo jugar al Blackjack?",
				id             : "anchor-2",
				p              : [
					"Si esta es la primera vez que vas a probar este juego lo más importante será que tengas en cuenta cómo se juega y las reglas principales para que nuestras partidas sean las mejores.",
				],
				list           : [
					"En este juego solo tienes que pensar en un número: Esa cifra tiene que ser el 21 ya que si lo consigues la victoria estará asegurada.\n",
					"El valor de las cartas es muy importante: Del 2 al 10 su valor es dicha cifra, el J, Q o K tienen el valor de 10 y el AS podrá ser usado como 1 u 11.\n",
				],

			},
		],
		dropdownSection: [
			{
				title: "¿Cuáles son las reglas del blackjack?",
				id: "anchor-3",
				data : {
					p1  : "Para aprender a jugar como los mejores solo tienes que memorizar estos 7 pasos:",
					list: [
						"Seleccionar la cantidad que quieres apostar en cada partida.\n",
						"El crupier se encargará de repartir 2 cartas visibles a cada jugador y dejará descubierta 1 más para si mismo.\n",
						"De acuerdo con la mano del croupier, cada jugador podrá decidir si se planta con sus dos cartas o pide más cartas.\n",
						"Posteriormente el croupier hará lo mismo con su mano.\n",
						"El objetivo será conseguir una mano lo más cercana o igual a 21 pero sin pasarse de dicha cantidad, ya que si se rebasa la cifra automáticamente la mano se convierte en perdedora.\n",
						"Si la mano de un jugador es igual a la del croupier, se declara empate y se devuelve la apuesta.\n",
						"Si tienes la suerte de sacar una mano con AS y figura el pago será de 3X2 o si tu partida es ganadora con otra combinación, pago correspondiente será de 1X1\n",
					],
					p2  : "Durante cada partida habrá ciertos momentos en que puedes realizar ciertas acciones como estrategia de juego ¿Quieres que te revelemos los secretos?",
					p3  : "Pedir carta: Solo cuando creas que tu mano es un tanto baja para alcanzar el número 21. Plantarse: Aquí es cuando conviene utilizar el popular meme: “póker face” para cuando crees que tu mano es lo suficientemente buena para ganar. Doblar: Una apuesta arriesgada que consiste en duplicar el monto apostado justo después de recibir las dos primeras cartas. ¡Todo o nada! Separar: Esto suele hacerse cuando la mano está compuesta por dos figuras y se crea dos manos independientes, las cuales deben de tener la misma apuesta.",
				}
			}

		]
	};


	const estrategias = {
		id       : "anchor-4",
		h2       : "¿Cómo ganar en el Blackjack? Estrategias y trucos\n",
		p        : [
			"Si piensas que esto del Casino es 100% suerte, estás muy equivocado ya que existen muchos trucos que pueden convertiros en todos unos estrategas de este juego. Uno de los principales es aprender a diferenciar el tipo de cartas o clasificarlas. Puede haber cartas duras o cartas carta es que se recomienda pedir otra, plantarse o incluso separar débiles. El 7, 8, 9, 10 y As son cartas fuertes, 2, 3, 4, 5 y 6 cartas débiles.",
			"Los trucos de la película no valen para online. Si pensabas que por haber visto 3 o más veces la parte de cómo contar cartas ya podrías copiarlo, estás un poco equivocado. Este truco solo vale para Casinos físicos ya que las cartas se barajan y reparten tras cada partida, de modo que una misma carta puede aparecer en varias partidas seguidas.",
			"Decide cuando parar y si tu mano alcanza el 17, mejor ponerle un alto antes que te pases por querer ser muy arriesgado. Las posibilidades de que tu mano se vaya al traste son muy elevadas si optas por pedir otra carta. Lo mejor es aguantar y esperar a que la mano que tenga que correr el riesgo sea la del croupier.",
			"Si la suerte te cae del cielo y ves una mano con 8-8 o AS-AS, la opción que tienes que considerar es la de dividir cartas ya que 16 de las 52 cartas de la baraja tienen un valor de 10, por tanto las probabilidades de ganar son altísimas. Bueno, bueno, bueno, esto solo ha sido un adelanto de todo lo que puedes encontrar dentro de toda la variedad de juegos de slots, ruleta y apuestas en Codere.",
			"¡Acepta el reto!",
		],
		table_img:
			"https://www.codere.com.co/_catalogs/masterpage/codere/images/seo/Table_mobile.jpg",
	};



	return (
		<div className="cas-seo">
			<Helmet>
				<title>{title}</title>
				<link
					rel="canonical"
					href="https://www.codere.com.co/casino/blackjack"
				/>

				<meta name="description" content={description}/>
				<script type="application/ld+json">{JSON.stringify(json)}</script>
			</Helmet>




			<Floating text="¡El mejor BlackJack!" juega={true}/>
			<div
				className="top-bg-seo "

				style={{
					backgroundImage: `url(https://www.codere.com.co/Colombia/images/seoCasinoImages/blackjack/${
						props.flag ? "BJ_mob" : "BJ"
					}.jpg)`,
					backgroundSize : "cover",
				}}
			></div>

			<Container style={{color: "#fff"}}>
				<h1 className="header mt-4 mb-3">{top_par.h1}</h1>


				{/* Table */}
				{!props.flag ? (
					<TableOfContents table={table_of_contents_list}/>
				) : null}

				<h2 id={como_juega.id} className="mt-4 mb-3">
					{como_juega.h2}
				</h2>
				<p>{como_juega.p}</p>



				{/* Games */}
				<Row className="casino-row">
					{live_games
						.slice(0, !props.flag ? live_games.length : 4)
						.map((game, k) => (
							<Col lg={2} md={4} xs={6} key={k}>
								<NavLink href={`${game_prefix}${game.sponsor}${game.name}`}>
									<div className="cas-game-wrapper">
										<LazyLoadImage
											className="casino-game-img shining"
											src={
												"https://www.codere.com.co/Colombia/images/seoCasinoImages/blackjack/" +
												game.img +
												".jpg"
											}
										/>
										<div className="hvr">
											<p>{game.name}</p>
											<LazyLoadImage src="https://www.codere.com.co/Colombia/images/casinoIcons/playHoverLogo.svg"/>
										</div>
									</div>
								</NavLink>
							</Col>
						))}
				</Row>

				<div id={reglas.id}>
					<h2 className="mt-4 mb-3">{reglas.h2}</h2>
					<p>{reglas.p.p5} </p>
					<ol>
						{reglas.p.list.map((li, k) => (
							<li key={k}>{li}</li>
						))}
					</ol>
					{reglas.p.pi.map((p, k) => (
						<p key={k}>{p}</p>
					))}
					<Button href={"https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"} className="cas-reg-btn" rel="nofollow">
						Registrate
					</Button>

					{reglas.inner.map((game, k) => (
						<div key={k}>
							<h2 id={game.id} className={"mt-4"}>{game.h2}</h2>
							{game.p.map((pi, k) => (
								<p key={k}>{pi}</p>
							))}

							<ul>
								{game.list.map((li, k) => (
									<li key={k}>{li}</li>
								))}
							</ul>
						</div>
					))}

					{reglas.dropdownSection.map((t, k) => (
						<div key={k} id={reglas.dropdownSection.id}>
							<Accordion>
								<Accordion.Item >
									<Accordion.Header as={"h3"}>{t.title}</Accordion.Header>
									<Accordion.Body as={"div"}>
										<p>{t.data.p1}</p>
										<ul>
											{t.data.list.map((li, k) => (
												<li key={k}>{li}</li>
											))}
										</ul>
										<p>{t.data.p2}</p>
										<p>{t.data.p3}</p>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					))}
				</div>

				<div id={estrategias.id}>
					<h2 className="mt-4 mb-3">{estrategias.h2}</h2>
						<LazyLoadImage
							style={{margin: "auto", display: "flex", maxWidth: "90%"}}
							src={estrategias.table_img}
						/>
					<div className="estrategias_container">
						{estrategias.p.map((pi, k) => (
							<p key={k}>{pi}</p>
						))}
					</div>
				</div>

				<Button href={"https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"} className="cas-reg-btn" rel="nofollow">
					Registrate
				</Button>
			</Container>
		</div>
	);
}
