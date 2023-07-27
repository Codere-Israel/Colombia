import Navigations from "../parts/Secondarymenu";
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
import DynamicTable from "../parts/DynamicTable"
import TableOfContents from "../parts/TableOfContents";
import "./localCSS/casinoLocal.css";
// import { regis } from "../../App/App";
import {useEffect} from "react";
import Secondarymenu from "../parts/Secondarymenu";
import DynamicAccordion from "../parts/DynamicAccordion";

export default function Baccarat(props)
{
	useEffect(() =>
	{
		window.scrollTo(0, 0);
	}, []);
	const game_prefix = "https://m.codere.com.co/deportes/#/CasinoPage?playgame=";

	const title = "Baccarat Online » Juega en Vivo » Bono de $100.000 | Codere®";
	const description =
		      "¿Sabías que el Baccarat era el juego favorito de cartas de James Bond? ¡Vive la experiencia en nuestro Casino en línea desde Colombia! ¿Listo para jugar?";

	const json = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
			"@type": "Question",
			"name": "¿Qué cartas se utilizan para jugar al baccarat?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Para jugar Baccarat vamos a utilizar 8 barajas de 52 cartas cada una, cuatro de un color y cuatro de otro, o bien barajas de un mismo color, siempre y cuando se alternan los colores de mesa en mesa."
			}
		},{
			"@type": "Question",
			"name": "¿Cuál es el valor de las cartas en Baccarat?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Las figuras, J, Q y K más los dieces, valen cero, los ases valen 1, las restantes cartas conservan su valor. En el bacará no es posible superar el nueve porque solo se contabiliza la última cifra."
			}
		}]



	};

	const top_par = {
		h1: "Baccarat Online: juega en vivo y logra 9 puntos",
		p : [
			"Tabla de contenido:",
		],
	};

	// Table of Contents  \\
	const table_of_contents_list = [
		{
			title: "Juegos de Baccarat en Codere",
			id   : "anchor-1",
		},
		{
			title: "¿Qué es el Baccarat?",
			id   : "anchor-2",
		},
		{
			title: "¿Cómo se juega Baccarat Online?",
			id   : "anchor-3",
		},
		{
			title: "Consejos",
			id   : "anchor-4",
		},
		{
			title: "Preguntas frecuentes",
			id   : "anchor-5",
		},


	];

	// Table

	const tableData = {
		headers: ["Cartas", "Valor"],
		rows   : [
			{
				id: 1,
				a1: "2 al 9",
				a2: "Las cartas tienen su valor nominal (2 tiene un valor de 2, 3 tiene un valor de 3, etc.).",

			},
			{
				id: 2,
				a1: "10 al K",
				a2: "Estas cartas tienen un valor de cero.",

			},
			{
				id: 3,
				a1: "El As",
				a2: "Vale 1 punto.",

			},

		],

	};

	// Games Data
	const live_games = [
		{
			name   : "PTLiveBaccarat_Square",
			img    : "PTLiveBaccarat_Square",
			urlText: "PT%20Live%20Baccarat",
			sponsor: "MGS",
		},
		{
			name   : "EVGNoCommissionBaccarat_Square",
			img    : "EVGNoCommissionBaccarat_Square",
			urlText: "EVG%20No%20Commission%20Baccarat",
			sponsor: "MGS",
		},
		{
			name   : "PTLive7SeatBaccarat_Square",
			img    : "PTLive7SeatBaccarat_Square",
			urlText: "PT%20Live%207%20Seat%20Baccarat",
			sponsor: "MGS",
		},
		{
			name   : "PTLiveNoCommissionBaccarat_Square",
			img    : "PTLiveNoCommissionBaccarat_Square",
			urlText: "PT%20Live%20No%20Commission%20Baccarat",
			sponsor: "MGS",
		},
		{
			name   : "PTLive7SeatNoCommissionBaccarat_Square",
			img    : "PTLive7SeatNoCommissionBaccarat_Square",
			urlText: "PT%20Live%20No%20Commission%20Baccarat",
			sponsor: "MGS",
		},
		{
			name   : "EVGLightningBaccarat_Square",
			img    : "EVGLightningBaccarat_Square",
			urlText: "EVG%20Lightning%20Baccarat",
			sponsor: "MGS",
		},



	];



	const reglas = {
		id      : "lightningBaccarat",
		h3      : "Lightning Baccarat",
		spanbold: "La visión de este juego está centrada en el crupier y la mesa, por lo que tendrás una visión brillante de ambos además de interactuar en vivo con ellos. ",
		p       : {
			p1         : [
				"Las barajas de cartas que se utilizarán en el juego se mantienen en la parte superior de la mesa. El espacio decorativo será de color rojo oscuro y el punto focal tendrá las categorías de jugador y banquero. Estas son las áreas para las cartas que surgirán durante cada ronda. El vendedor sacará cartas de las barajas y, dependiendo de la ronda, tanto el jugador como la banca pueden obtener algunas cartas para calcular la puntuación.",
				"Solo el jugador puede ver la tercera parte del juego de baccarat. Se divide en tres piezas. El primero contiene las cartas Lucky Lightning, que tienen multiplicadores. El segundo enumera las distintas apuestas que los jugadores pueden realizar. Consiste en apuestas de jugador, banquero y empate, así como apuestas de par de jugador y banquero. La tabla de estadísticas se encuentra en la tercera área a la izquierda de la sección de apuestas. Esta tabla mantiene un registro de las rondas, así como quién ganó y quién empató.",
			],
			innerTitle1: "7 seat Baccarat Live",
			p2         : [
				"Esta mesa te ofrece ocho mazos de cartas, con crupier en vivo y una mesa real de Baccarat, usando las reglas estándar del Baccarat.",
				"Tienes que tener en cuenta, si cuando llegas a una mesa y ya se está jugando una ronda, espera a la siguiente y haz tus apuestas. Para hacer una apuesta debes escoger una ficha y ponerla en la posición de apuesta. Puedes poner varias fichas en posiciones de apuesta distintas a la vez. El reloj de la ventana de juego te mostrará cuánto tiempo te queda para hacer tus apuestas. La ronda de juego comienza tras la señal de “No más apuestas”. Los premios se pagarán según las apuestas ganadoras al final de cada ronda. Para jugar una ronda de juego, vuelve a hacer tus apuestas, o usa el botón “reapostar” y para pasar un turno, basta con que no hagas apuestas en la mesa.",
			],
			innerTitle2: "Live Baccarat",
			p3         : [
				"El juego se transmite en tiempo real desde un estudio terrestre. Al igual que otros juegos de casino en vivo de Codere, este tiene características adicionales como estadísticas avanzadas, diferentes variantes de Baccarat y la posibilidad de apostar en varias mesas a la vez.",
				"Tes recibirán crupieres profesionales en un entorno idéntico al de un casino asiático de primera categoría. En esta experiencia cómoda y emocionante, notará que el tema del oro y el rojo se destacan. También podrás ver cómo se juegan diferentes variantes de Baccarat en el fondo.",
				"El entorno es colorido y tranquilo para que puedas concentrarte en el juego. El Baccarat es bastante sencillo y no suele requerir el uso de los múltiples ángulos de cámara que ofrecen. Sin embargo, siempre es bueno tener múltiples ángulos de cámara porque algunas personas pueden preferir usarlos.",
				"Las cartas se reparten boca abajo o boca arriba en la mesa dorada o de cualquier otro color, dependiendo del tipo de variante de Baccarat que estés jugando.",
			],


		},


	};


	const estrategias = {
		id: "estrategias",
		h2: "Bonos promocionales para jugar slots o máquinas tragamonedas\n",
		p : [
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
		id   : "anchor-2",
		title: "¿Qué es el Baccarat?",
		p    : "El Baccarat o Bacará es uno de los juegos más populares de Codere, es un conocido juego de cartas francesas común en los casinos, es muy parecido al blackjack, con la diferencia, que aquí el objetivo es lograr nueve puntos o la cantidad más cercana posible. Los puntos se obtienen de la suma de dos o tres cartas que tiene cada una de las dos manos que se enfrentan: el punto o la banca.",
	};

	const floor2 = {
		id         : "anchor-3",
		title      : "¿Cómo se juega Baccarat Online?",
		p          : [
			"El baccarat es uno de los juego de cartas en los casinos que se juega entre el jugador y el banquero. La finalidad del juego es apostar por la mano que tendrá la puntuación más alta, la del jugador o la del banquero, o apostar por un empate. ",
			"El valor de las cartas en el baccarat es el siguiente:",
		],
		innerTitle1: "Dinámica de las apuestas en línea",
		list       : [
			"Si hay una ronda de juego en curso, espera a la próxima ronda y entonces podrás hacer tus apuestas.",
			"Para realizar una apuesta, elige una ficha y luego ponla en una posición de apuesta.",
			"Puedes poner varias fichas en diferentes posiciones de apuesta a la vez.",
			"El temporizador en la ventana de juego indica el tiempo límite que debes tener para realizar tus apuestas.",
			"La partida empieza después de la señal “No más apuestas”.",
			"Al final de cada ronda de juego se pagan premios por las apuestas ganadoras.",
			"Para jugar una partida, haz tus apuestas de nuevo o dale clic al botón Apostar de nuevo.",
			"Para saltarte un turno, basta con no poner ninguna apuesta sobre la mesa.",
		],
		innerTitle2: "Apuestas adicionales ",
		p1         : [
			"Una apuesta adicional es una apuesta adicional a las apuestas principales: Jugador, Banca o Empate. En Baccarat Online, es posible realizar apuestas adicionales sin hacer apuestas principales.",
			"A continuación encontrarás las reglas de las apuestas adicionales:",
		],
		list2:[
			"Las apuestas adicionales: Par del Jugador, Par de la Banca y  Cualquier par ganan si las primeras dos cartas que el dealer saca forman un par en la posición correspondiente.",
			"La apuesta adicional Perfect PairsTM (Pares Perfectos) gana si las primeras dos cartas de la posición Jugador o Banca forman un par del mismo palo, por ejemplo, un par de 7 de Diamante.",
			"La apuesta adicional Grande gana si el número total de cartas repartidas entre las posiciones Jugador y Banca es 5 ó 6.",
			"La apuesta adicional Pequeño gana si el número total de cartas repartidas entre las posiciones Jugador y Banca es 4.",
			"Las apuestas adicionales son independientes de las apuestas principales del juego. Podrás apostar, por ejemplo, a la apuesta principal Jugador y a la apuesta adicional Par de la banca, y viceversa.",
		],
		p2:"Para minimizar el riesgo de técnicas de abuso o trampa, las apuestas adicionales pueden ser desactivadas en cualquier momento.",
		innerTitle3: "Apuestas Adicionales Égalité Extra*",
		p3:"Égalité Extra: es un tipo de Apuesta Adicional del Baccarat que permite apostar a que las manos Jugador y Banca tendrá como resultado un empate con un resultado específico.",
		list3:[
			"Tu apuesta gana si el resultado de la mano es el valor de Empate al cual apostaste. Si el resultado de la mano no es un empate, todas las apuestas Égalité Extra pierden.",
			"Puedes hacer una apuesta Égalité Extra sin realizar una apuesta principal.        ",
			"Las Apuestas Adicionales Égalité Extra te permiten hacer una o más apuestas al resultado específico de la apuesta Empate.",
		],
		innerTitle4: "Consejos",
		innerTitle4_id : "anchor-4",
		p4:"¡Se acerca la hora de divertirte! En Codere te damos algunos consejos para tener en cuenta antes de jugarlo.",
		list4:[
			"Aprende las reglas.",
			"Aprende cómo es la puntuación de las manos.",
			"Comprende cómo funciona la extracción de cartas adicionales para el jugador.",
			"Aprende cuándo el banquero puede extraer una carta.",
			"Aprende las probabilidades.",
			"Monitorea tus ganancias.",
			"Apuesta en series.",
			"Si estás en duda, apuesta al banquero.",
			"Calcula ¿cuánto dinero estás dispuesto a perder? #JuegaResponsable",
			"Sigue tu instinto.",
		]
	};

	const floor3 = {
		id   : "anchor-5",
		title: "Preguntas frecuentes",

	}

	const preguntasFrecuentes = [
		{
			"title": "¿Qué cartas se utilizan para jugar al baccarat?",
			"data": {
				"p1": "Para jugar Baccarat vamos a utilizar 8 barajas de 52 cartas cada una, cuatro de un color y cuatro de otro, o bien barajas de un mismo color, siempre y cuando se alternan los colores de mesa en mesa.",

			}
		},
		{
			"title": "¿Cuál es el valor de las cartas en Baccarat?",
			"data": {
				"p1": "Las figuras, J, Q y K más los dieces, valen cero, los ases valen 1, las restantes cartas conservan su valor. En el bacará no es posible superar el nueve porque solo se contabiliza la última cifra.",

			}
		}
	]


	const floor4 = {
		id   : "anchor-1",
		title: "Juegos de Baccarat en Codere ",
		p:"Existen diferentes juegos de Baccarat en Codere y aquí te explicamos de qué se trata cada uno de ellos, al final podrás decidir cuál es tu favorito.",
	}

	return (
		<div className="cas-seo">
			<Helmet>
				<title>{title}</title>
				<link
					rel="canonical"
					href="https://www.codere.com.co/casino/baccarat"
				/>

				<meta name="description" content={description}/>
				<script type="application/ld+json">{JSON.stringify(json)}</script>
			</Helmet>

			<Floating text="¡Elegante y emociónate!" juega={true}/>
			<div
				className="top-bg-seo "

				style={{
					backgroundImage: `url(https://www.codere.com.co/Colombia/images/seoCasinoImages/baccarat/${
						props.flag ? "Baccarat_mob" : "Baccarat"
					}.jpg)`,
					backgroundSize : "cover",
				}}
			></div>

			<Container style={{color: "#fff"}}>
				<h1 className="header mt-4 mb-3">{top_par.h1}</h1>
				{/*{top_par.p.map((par, k) => (*/}
				{/*	<p key={k}>{par}</p>*/}
				{/*))}*/}

				{/* Table */}
				{!props.flag ? (
					<TableOfContents table={table_of_contents_list}/>
				) : null}
				<div id={floor4.id}>
					<h2 className="mt-4 mb-3">{floor4.title}</h2>
					<p>{floor4.p}</p>
				</div>
				{/* Games */}
				<Row className="casino-row">
					{live_games
						.slice(0, !props.flag ? live_games.length : 4)
						.map((game, k) => (
							<Col lg={2} md={4} xs={6} key={k}>
								<NavLink href={`${game_prefix}${game.urlText}`}>
									<div className="cas-game-wrapper">
										<LazyLoadImage
											className="casino-game-img shining"
											src={
												"https://www.codere.com.co/Colombia/images/seoCasinoImages/baccarat/" +
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
					<h3 className="mt-4 mb-3">{reglas.h3}</h3>
					<span>{reglas.spanbold} </span>
					<h3 className="mt-4 mb-3">{reglas.p.innerTitle}</h3>
					{reglas.p.p1.map((i, k) => (
						<p key={k}>{i}</p>
					))}
					<h3 className="mt-4 mb-3">{reglas.p.innerTitle1}</h3>
					{reglas.p.p2.map((i, k) => (
						<p key={k}>{i}</p>
					))}
					<h3 className="mt-4 mb-3">{reglas.p.innerTitle2}</h3>
					{reglas.p.p3.map((i, k) => (
						<p key={k}>{i}</p>
					))}

					<Button href={"https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"} className="cas-reg-btn" rel="nofollow">
						Registrate
					</Button>
				</div>


				<div id={floor1.id}>
					<h2 className="mt-4 mb-3">{floor1.title}</h2>
					<p>{floor1.p}</p>
				</div>

				<div id={floor2.id}>
					<h2 className="mt-4 mb-3">{floor2.title}</h2>
					{floor2.p.map((i, k) => (
						<p key={k}>{i}</p>
					))}
					<DynamicTable table={tableData}/>
					<h3 className="mt-4 mb-3">{floor2.innerTitle1}</h3>
					<ol>
						{floor2.list.map((i, k) => (
							<li key={k}>{i}</li>
						))}
					</ol>
					<h3 className="mt-4 mb-3">{floor2.innerTitle2}</h3>
					{floor2.list.map((i, k) => (
						<p key={k}>{i}</p>
					))}
					<ol>
						{floor2.list2.map((i, k) => (
							<li key={k}>{i}</li>
						))}
					</ol>
					<p>{floor2.p2}</p>
					<h3 className="mt-4 mb-3">{floor2.innerTitle3}</h3>
					<p>{floor2.p3}</p>
					<ul>
						{floor2.list3.map((i, k) => (
							<li key={k}>{i}</li>
						))}
					</ul>
					<h3 className="mt-4 mb-3" id={floor2.innerTitle4_id}>{floor2.innerTitle4}</h3>
					<p>{floor2.p4}</p>
					<ol>
						{floor2.list4.map((i, k) => (
							<li key={k}>{i}</li>
						))}
					</ol>

				</div>
				<div id={floor3.id}>
					<h2 className="mt-4 mb-3">{floor3.title}</h2>

					<DynamicAccordion data={preguntasFrecuentes} />
					<Button href={"https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"} className="cas-reg-btn" rel="nofollow">
						Registrate
					</Button>
				</div>

			</Container>
		</div>
	);
}
