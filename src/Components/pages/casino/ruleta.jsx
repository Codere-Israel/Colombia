import Floating from "../parts/Floating";
import {
	Container, Accordion, Row, Col, NavLink, Button,
} from "react-bootstrap";
import {Helmet} from "react-helmet";
import {LazyLoadImage} from "react-lazy-load-image-component";
import DynamicTable from "../parts/DynamicTable"
import TableOfContents from "../parts/TableOfContents";
import "./localCSS/casinoLocal.css";
import {useEffect} from "react";
import Navbar from "../parts/Navbar";

export default function Ruleta(props)
{
	useEffect(() =>
	{
		window.scrollTo(0, 0);
	}, []);
	const game_prefix = "https://m.codere.com.co/deportes/#/CasinoPage?playgame=";

	const title = "Juega Ruleta Online en Vivo » Bono hasta $100.000 | Codere®";
	const description = "¿Cuál vas a elegir hoy? La Ruleta Coderista, Ruleta Europea, o Ruleta Francesa. Estás a un solo clic. Juega en las mejores mesas de casino en vivo de Codere";

	const json = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
			"@type": "Question",
			"name": "¿Hay una apuesta mínima?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Los mini juegos de ruleta y las mesas de casino típicamente tienen un mínimo de apuestas, pero la apuesta mínima puede variar ampliamente dependiendo de la mesa. Cuando juegas en ruleta en vivo la apuesta mínima será de $2.500. En las demás ruletas la apuesta mínima será de $400. La mínima apuesta siempre se mostrará en la mesa. Ahora que sabes cómo participar, ¡es tiempo de jugar! Prepárate para probar tu suerte y usar tu nueva estrategia de ruleta para ganar dinero a lo grande."
			}
		}, {
			"@type": "Question",
			"name": "¿Qué hace único jugar a la Ruleta en Codere?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "En el casino online de Codere encuentras la mayor cantidad de opciones en juegos de ruleta de primera línea y, además, solo por ser cliente vas a poder disfrutar de nuestras promociones constantes en Casino y en los juegos de ruleta online para ganar aún más. Además, puedes acceder a los diferentes tipos de juegos de ruleta, incluido la ruleta LIVE, desde tu smartphone, donde podrás obtener bonificaciones especiales, realizar depósitos y solicitar tus pagos, todo desde la comodidad de tu casa. ¡Piensa en tu mejor estrategia, acepta el reto y empieza apostar!"
			}
		}]
	};

	const top_par = {
		h1: "Ruleta Online: Juega y diviértete en Codere",
		p: ["En este artículo aprenderás sobre el juego de casino de la ruleta:",],
	};

	// Table of Contents  \\
	const table_of_contents_list = [{
		title: "¿Cómo Jugar a la Ruleta Online?", id: "anchor-1",
	}, {
		title: "Reseña de los Diferente Juegos de Ruleta", id: "anchor-2",
	}, {
		title: "Estrategias y trucos para saber Cómo Ganar en la Ruleta", id: "anchor-3",
	}, {
		title: "¿Cómo es la Ruleta en Vivo?", id: "anchor-4",
	}, {
		title: "Una Guía en los diferentes Tipos de Apuesta", id: "anchor-5",
	},

	];

	// Table

	const tableData = {
		headers: ['Juego de Ruleta\t', 'Bolsillos', 'Ceros', 'Descripción'], rows: [{
			id: 1, a1: "Ruleta Europea\t", a2: "37", a3: "1", a4: "Se juega comúnmente en todo el mundo, excepto en Estados Unidos.\n"
		}, {
			id: 2, a1: "Ruleta Americana\t", a2: "38", a3: "2", a4: "Los números se encuentran ubicados en diferentes posiciones.\n"
		}, {
			id: 3, a1: "Ruleta Francesa\t", a2: "37", a3: "1", a4: "El diseño de la mesa difiere significativamente.\n"
		},

		],

	};

	// Games Data
	const live_games = [{
		name: "EVGInstantRoulette_Square", img: "EVGInstantRoulette_Square", urlImageTitle: "EVG%20Instant%20Roulette", sponsor: "MGS",
	}, {
		name: "EVGLightningRoulette_Square", img: "EVGLightningRoulette_Square", urlImageTitle: "EVG%20Lightning%20Roulette", sponsor: "MGS",
	}, {
		name: "PTLiveQuantumRoulette_Square", img: "PTLiveQuantumRoulette_Square", urlImageTitle: "PT%20Live%20Quantum%20Roulette", sponsor: "MGS",
	}, {
		name: "EVGDoubleBallRoulette_Square", img: "EVGDoubleBallRoulette_Square", urlImageTitle: "EVG%20Double%20Ball%20Roulette", sponsor: "MGS",
	}, {
		name: "PTPremiumAmericanRoulette_Square", img: "PTPremiumAmericanRoulette_Square", urlImageTitle: "PT%20Premium%20American%20Roulette", sponsor: "MGS",
	}, {
		name: "EVGRNGLightningRoulette_Square", img: "EVGRNGLightningRoulette_Square", urlImageTitle: "EVG%20RNG%20Lightning%20Roulette", sponsor: "MGS",
	},

	];

	const como_juega = {
		id: "como_juega",

		p: ["El casino online de Codere te abre las puertas a un mundo de emociones fuertes donde podrás disfrutar de los mejores juegos de Ruleta online. Antes de que la rueda gire tendrás que elegir entre la gran variedad de títulos de los que disponemos ¿Cuál vas a elegir hoy? ¿Ruleta americana? ¿Ruleta Europea? ¿Ruleta Francesa? Estás a un clic de disfrutar todo esto. Si eres de los jugadores que les gusta ver las cosas en vivo, ¡el juego de la Ruleta LIVE es para ti! Disfruta la rapidez y facilidad de jugar a la ruleta online con la última incorporación a nuestro catálogo en línea. Cuando las personas visitan los casinos, lo primero que normalmente hacen es sentarse a jugar en las máquinas de tragamonedas, el póker o blackjack. Por alguna extraña razón, la ruleta virtual queda en segundo plano, lo cual es una lástima porque girar la rueda de ruleta es una de las experiencias de casino más emocionantes que uno puede vivir como jugador. No nos malinterpretes. Las máquinas tragamonedas y los juegos de mesa son populares por una buena razón, pero ningún otro juego combina habilidades, suerte y suspenso, como jugar a la ruleta en vivo. En este artículo te vamos a enseñar cómo jugar a la ruleta online y a mostrarte opciones y variedades que puedes combinar para crear la mejor experiencia de ruleta online.",

		]


	};

	const reglas = {
		id: "anchor-1", h2: "¿Cómo Jugar a la Ruleta Online?\n", p: {
			pi: ["Las reglas básicas para jugar juegos de ruleta oficiales online son muy simples. Primero, hablemos sobre la rueda de la ruleta de casino como tal. La rueda de la ruleta europea tradicional está compuesta de 37 casillas enumeradas, llamadas bolsillos de colores rojos, negros y verdes. Los números pueden variar dependiendo del estilo de la ruleta que estés jugando, pero profundizaremos sobre esto más adelante.",

				"Antes de que la ruleta gire, los jugadores realizan sus apuestas, colocando sus fichas, en algún número, grupo de números o color que ellos creen será el ganador. Cada grupo de números tiene un pago diferente, dependiendo de la probabilidad del resultado. Una vez que se han colocado todas las apuestas, el croupier hace girar una pequeña pelota blanca en la rueda de la ruleta. Una vez que ésta para de girar, la pelota se asentará en uno de las casillas. Quien haya elegido el número y/o color correcto de la casilla, gana la apuesta.\n" + "\n",],
		},

		inner: [{
			h2: "Reseña de los Diferente Juegos de Ruleta\n", id: "anchor-2",
		},],

	};


	const estrategias = {
		id: "anchor-3",
		h2: "Estrategias y trucos para saber Cómo Ganar en la Ruleta\n",
		p : ["Muchos jugadores nuevos en el juego quieren saber cómo ganar en la ruleta. Preguntarse cómo ganar dinero en la ruleta es una pregunta perfectamente lógica. Si bien la ruleta está basada mayormente en habilidades, hay ciertos trucos y estrategias que un jugador puede usar para mejorar sus probabilidades de salir ganador e ir aumentando sus ganancias.", "Algunas estrategias se centran en las apuestas. Uno de los métodos más comunes se llama la estrategia de Martingale. Cuando se usa Martingale, los jugadores realizan la misma apuesta en cada giro hasta que ganen. Cada vez que pierden un giro, doblan sus apuestas perdidas. Por ejemplo, una apuesta de $10.000 se convierte en una apuesta de $20.000 Martingale se basa en la teoría de que, si continuas apostando en los mismos números, la probabilidad dice que deberías ganar eventualmente.",],
	};


	const floor1 = {
		id             : "anchor-4",
		h2             : "¿Cómo es la Ruleta en Vivo?\n",
		p              : ["Hay algunos jugadores que evitan jugar a la ruleta en vivo simplemente porque temen que las plataformas de apuestas online junten las probabilidades en contra de ellos. Algunas personas también prefieren la emoción creada cuando juegan a la ruleta con un dealer de la vida real.", "La ruleta en vivo combina lo mejor de ambos mundos: los amantes de la ruleta pueden jugar online con dealer en vivo desde la comodidad de sus propias casas. La ruleta en vivo permite a los jugadores ver al croupier girar la rueda de ruleta en tiempo real, agregando un nivel adicional de inmersión y confianza. Cuando estés buscando tu ruleta favorita, un juego en vivo podría ser la perfecta elección.",],
		dropdownSection: [{
			title: "Una Guía en los diferentes Tipos de Apuesta", id:"", data: {
				p1: ["Las apuestas de ruleta se pueden dividir en dos categorías: apuestas externas (outside bets) y apuestas internas (inside bets)\n", "Las apuestas internas son apuestas que podes colocar en los números como tales. Las apuestas exteriores incluyen las apuestas directas, división, fila, seis líneas, trio, esquina y canasta.\n", "Las apuestas externas se refieren a los sectores externos por fuera de la casilla del número. Hay cinco tipos de apuestas externas: rojo o negro, par o impar, 1-18 o 19-36, docenas y columnas. Las apuestas externas generalmente tienen probabilidades más altas y pagos más bajos.\n",],
				t1: "¿Hay una apuesta mínima?",
				p2: ["Los mini juegos de ruleta y las mesas de casino típicamente tienen un mínimo de apuestas, pero la apuesta mínima puede variar ampliamente dependiendo de la mesa. Cuando juegas en ruleta en vivo la apuesta mínima será de $2.500. En las demás ruletas la apuesta mínima será de $400. La mínima apuesta siempre se mostrará en la mesa.\n", "Ahora que sabes cómo participar, ¡es tiempo de jugar! Prepárate para probar tu suerte y usar tu nueva estrategia de ruleta para ganar dinero a lo grande.\n",],
				t2: "¿Qué hace único jugar a la Ruleta en Codere?\n",
				p3: ["En el casino online de Codere encuentras la mayor cantidad de opciones en juegos de ruleta de primera línea y, además, solo por ser cliente vas a poder disfrutar de nuestras promociones constantes en Casino y en los juegos de ruleta online para ganar aún más.\n", "Además, puedes acceder a los diferentes tipos de juegos de ruleta, incluido la ruleta LIVE, desde tu smartphone, donde podrás obtener bonificaciones especiales, realizar depósitos y solicitar tus pagos, todo desde la comodidad de tu casa.\n", "¡Piensa en tu mejor estrategia, acepta el reto y empieza apostar!\n",],
			}
		}]
	};


	return (<div className="cas-seo">
		<Helmet>
			<title>{title}</title>
			<link
				rel="canonical"
				href="https://www.codere.com.co/casino/ruleta"
			/>

			<meta name="description" content={description}/>
			<script type="application/ld+json">{JSON.stringify(json)}</script>
		</Helmet>

		<Navbar />
		<Floating text="¡Las mejores Ruletas!" juega={true}/>
		<div
			className="top-bg-seo "

			style={{
				backgroundImage: `url(https://www.codere.com.co/Colombia/images/seoCasinoImages/ruleta/${
					props.flag ? "Roulette_mob" : "Roulette"
				}.jpg)`,
				backgroundSize : "cover",
			}}
		></div>

		<Container style={{color: "#fff"}}>
			<h1 className="header mt-4 mb-3">{top_par.h1}</h1>
			{/*{top_par.p.map((par, k) => (<p key={k}>{par}</p>))}*/}

			{/* Table */}
			{!props.flag ? (<TableOfContents table={table_of_contents_list}/>) : null}

			{como_juega.p.map((p, k) => (<p key={k}>{p}</p>))}

			{/* Games */}
			<Row className="casino-row">
				{live_games
					.slice(0, !props.flag ? live_games.length : 4)
					.map((game, k) => (<Col lg={2} md={4} xs={6} key={k}>
						<NavLink href={`${game_prefix}${game.urlImageTitle}`}>
							<div className="cas-game-wrapper">
								<LazyLoadImage
									className="casino-game-img shining"
									src={"https://www.codere.com.co/Colombia/images/seoCasinoImages/ruleta/" + game.img + ".jpg"}
								/>
								<div className="hvr">
									<p>{game.name}</p>
									<LazyLoadImage src="https://www.codere.com.co/Colombia/images/casinoIcons/playHoverLogo.svg"/>
								</div>
							</div>
						</NavLink>
					</Col>))}
			</Row>

			<div id={reglas.id}>
				<h2 className="mt-4 mb-3">{reglas.h2}</h2>
				<p>{reglas.p.p5} </p>
				{/*<ol>*/}
				{/*	{reglas.p.list.map((li, k) => (*/}
				{/*		<li key={k}>{li}</li>*/}
				{/*	))}*/}
				{/*</ol>*/}
				{reglas.p.pi.map((p, k) => (<p key={k}>{p}</p>))}
				{/*<Button href={"https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"} className="cas-reg-btn" rel="nofollow">*/}
				{/*	Registrate*/}
				{/*</Button>*/}


			</div>


			{reglas.inner.map((game, k) => (<div key={k}>
				<h2 id={game.id} className={"mt-4"}>{game.h2}</h2>
				<DynamicTable table={tableData}/>
			</div>))}


			<div id={estrategias.id}>
				<h2 className="mt-4 mb-3">{estrategias.h2}</h2>
				<div className="estrategias_container">
					{estrategias.p.map((pi, k) => (<span key={k}></span>, <p>{pi}</p>))}
				</div>
				<Button href={"https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"} className="cas-reg-btn" rel="nofollow">
					Registrate
				</Button>
			</div>


			<div id={floor1.id}>
				<h2 className="mt-4 mb-3">{floor1.h2}</h2>
				<div className="estrategias_container">
					{floor1.p.map((pi, k) => (<span key={k}></span>, <p>{pi}</p>))}
				</div>

				<div className={'invisible'} id={'anchor-5'}></div>
				{floor1.dropdownSection.map((t, k) => (<div key={k} id={floor1.dropdownSection.id}>
					<Accordion>
						<Accordion.Item key={k} eventKey={k}>
							<Accordion.Header as={"h3"}>{t.title}</Accordion.Header>
							<Accordion.Body as={"div"}>
								{t.data.p1.map((pi, k) => (<span key={k}></span>, <p>{pi}</p>))}
								<h3>{t.data.t1} </h3>
								{t.data.p2.map((pi, k) => (<span key={k}></span>, <p>{pi}</p>))}
								<h3>{t.data.t2} </h3>
								{t.data.p3.map((pi, k) => (<span key={k}></span>, <p>{pi}</p>))}
								<Button href={"https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"}
								        className="cas-reg-btn" rel="nofollow">
									Registrate
								</Button>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>))}


			</div>


		</Container>
	</div>);
}
