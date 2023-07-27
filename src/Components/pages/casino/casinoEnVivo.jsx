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
import DynamicAccordion from "../parts/DynamicAccordion";
export default function CasinoEnVivo(props)
{
	useEffect(() =>
	{
		window.scrollTo(0, 0);
	}, []);
	const game_prefix = "https://m.codere.com.co/deportes/#/CasinoPage?playgame=";

	const title = "Casino Live con Crupieres en Vivo » Bono $100Mil | Codere®";
	const description =
		      "¿Jugar casino en vivo online?, Codere Colombia es la mejor experiencia para jugar en línea. Acá hay variedad de juegos como ruletas, blackjack o póker.";

	const json = {
		"@context": "https://schema.org",
		"@type"   : "FAQPage",
		mainEntity: [

			{
				"@context"  : "https://schema.org",
				"@type"     : "FAQPage",
				"mainEntity": [{
					"@type"         : "Question",
					"name"          : "¿Puedo jugar en un casino en vivo en mi dispositivo móvil?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text" : "Claro que si, en el casino en vivo de Codere, te puedes divertir desde donde estés, con cualquiera de tus dispositivos móviles. ¿Qué esperas para ingresar?"
					}
				}, {
					"@type"         : "Question",
					"name"          : "¿En qué consisten los juegos de casino en vivo?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text" : "Los juegos de casino en vivo son una sección donde los jugadores pueden apostar y disfrutar desde donde estés, de una sesión de juego que será transmitida en vivo. ¡Disfruta de la experiencia!"
					}
				}]
			}

		],
	};

	const top_par = {
		h1: "Diviértete en el Casino en Vivo de Codere Colombia:\n",
		p : [],
	};

	// Table of Contents  \\
	const table_of_contents_list = [
		{
			title: "¿Cómo jugar en vivo en Casino Codere?",
			id   : "anchor-1",
		},
		{
			title: "Chatea en vivo con croupiers y jugadores",
			id   : "anchor-2",
		},
		{
			title: "Juegos de casino en vivo",
			id   : "anchor-3",
		},
	];

	// Games Data
	const live_games = [
		{
			name   : "PTLiveQuantumRoulette_Square",
			img    : "PTLiveQuantumRoulette_Square",
			link_name: "PT%20Live%20Quantum%20Roulette",
			sponsor: "MGS",
		},
		{
			name   : "PTLiveMajorityRulesSpeedBlackjack_Square",
			img    : "PTLiveMajorityRulesSpeedBlackjack_Square",
			link_name: "PT%20Live%20All%20Bets%20Blackjack",
			sponsor: "EVG",
		},
		{
			name   : "PTLiveAmericanRoulette_Square",
			img    : "PTLiveAmericanRoulette_Square",
			link_name: "PT%20Live%20American%20Roulette",
			sponsor: "EVG",
		},
		{
			name   : "PTLiveAllBetsBlackjack_Square",
			img    : "PTLiveAllBetsBlackjack_Square",
			link_name: "PT%20Live%20Majority%20Rules%20Speed%20Blackjack",
			sponsor: "EVG",
		},
		{
			name   : "PTLiveBuffaloBlitz_Square",
			img    : "PTLiveBuffaloBlitz_Square",
			link_name: "PT%20Live%20Buffalo%20Blitz",
			sponsor: "EVG",
		},
		{
			name   : "PTLiveRoulette_Square",
			img    : "PTLiveRoulette_Square",
			link_name: "PT%20Live%20Roulette",
			sponsor: "EVG",
		},


	];

	const como_juega = {
		id    : "como_juega",
		title1: "¿Cómo jugar en vivo en Casino Codere?\n",
		p1    : "¿Jugar en vivo? es la mejor experiencia que podrás tener, si te encanta estar en casa, pero… sin que te falte la diversión. Para jugar casino en vivo, lo primero que debes hacer es iniciar sesión en Codere, la casa de apuestas más bacana de Colombia, luego tendrás que dirigirte a la pestaña que dice “Casino en vivo”, y allá encontrarás gran variedad de juegos como: ruletas en vivo, black jack, baccarat, Hold’em, Dragon Tiger y muchas más, juegos que te harán vivir una experiencia real con croupiers que estarán ahí girando la ruleta o repartiéndose las cartas. ¡Es increíble! No esperes para vivirla.",
		title2: "Chatea en vivo con croupiers y jugadores\n",
		p2    : "Lo mejor de nuestro casino en vivo, es que es muy fácil chatear con croupiers profesionales, además, siempre podrás encontrar una sección de chat habilitado donde te emocionarás al interactuar y compartir la diversión del juego con otros usuarios / jugadores. ¡Es súper sencillo! Selecciona la opción de chat y listo, la ventana de conversación la encuentras en la parte superior derecha ¿Te animas a jugar?\n" +
			"\n",
		title3: "Juegos de casino en vivo\n",
		p3    : "La diversión no tiene fin, y más con nuestros 49 juegos en vivo: distribuidos en 14 Ruletas, 7 Black jack, 6 Baccarat y otros 22 juegos que te pondrán a prueba. El casino online de Codere te abre las puertas a un mundo de emociones fuertes donde podrás disfrutar de los mejores juegos de Ruleta Casino online. Antes de que gire la ruleta tendrás que elegir entre la gran variedad de títulos. ¿Cuál vas a elegir hoy? ¿Ruleta americana? ¿Ruleta Europea? ¿Ruleta Francesa? Estás a un clic de disfrutar todo esto.\n" +
			"\n",


	};

	const floor2 = {
		id:'floor2',
		data: [{
			b1: {
				title : "21 Blackjack",
				text: [
					"Blackjack: Seguro que muchos recordamos la mítica frase: “Ganaré, ganaré y gallinas cenaré”. Los que lograron recordarlo aprobaron el examen como cinéfilos. Ya que esta legendaria frase es una de las películas de casino más exitosas y que trata de manera diferente el hermoso juego del Blackjack. Por eso, Codere te quiere invitar a vivir la aventura de este popular juego disfrutando del blackjack online. Pero esta aventura no debe ser solo un momento de suerte. Sino que además, disfrutar y celebrar cada truco, estrategia y forma de jugar este emocionante juego. ¿Qué esperas para vivirlo?\n" +
					"\n",
					"Blackjack Colombia: Diviértete con uno de los juegos de cartas más populares, pero lo mejor, es que disfrutarás de una mesa hablada en español, así que: ¡Siente el sabor latino!\n" +
					"\n",
				],
			},
			b2: {
				title :"Monopoly",
				text:[
					"Monopoly Live: Es un juego de mesa clásico, no lo pienses y haz parte del mundo mágico del Monopolio, uno de los juegos más conocidos del mundo, y lo mejor es que Mr. Monopoly camina por el tablero y acumula premios para ti, una posibilidad de ganancias multiplicadoras masivas. ¡Te transportarás años atrás!,"
				]
			},

			b3: {
				title: "Póker",
				text: ["Póker Texas Hold’em: Es una versión estándar del juego de cartas de poker, sin duda, se encuentra en el top de los más jugados, tiene una estrategia de juego compleja, pero las reglas son muy sencillas ¿Estás listo (a) para dominarlas?",]
			},
			b4: {
				title: "Juegode Dados",
				text: ["Craps Live: Un juego de dados bastante popular, atractivo tanto para los profesionales como para los novatos, Es un juego animado y de ritmo rápido con muchas formas de apostar y aún más formas de gana, y lo mejor, es que está ambientado en un estudio clandestino ¿te le medirías?" ,
				"SicBo Deluxe: El juego consiste en tres dados que ruedas y cada uno se detiene al azar en uno de los números del 1 al 6, y el jugador que adivine correctamente los resultados propuestos ¡GANA! Así que anímate porque ¡Podrías estar celebrando!\\n",]
			},
			b5: {
				title: "Otros Juegos",
				text: ["Bufalo Blitz Live: Existen más de 4.000 formas de ganar en este juego en vivo, es bastante sencillo, está dedicado a todos los animales salvajes del planeta, una máquina tragamonedas de 6 carretes, puedes obtener grandes ganancias de manera rápida ¿puedes creerlo? ¡No lo pienses más!\\n\" +\n" +
				"\t\t\t\t\t\t\"\\n\",\n" +
				"\t\t\t\t\t\t\"Deal or no deal: Es un juego que está de moda, es un juego multidimensional que se basa en el programa de juegos súper exitoso, compite contra otros jugadores y muestra tu suerte, para clasificar, deberás hacer girar la rueda de la bóveda del banco. ¿Quieres vivir esta emoción?\\n\" +\n" +
				"\t\t\t\t\t\t\"\\n\",\n" +
				"\t\t\t\t\t\t\"Crazy time: Es un juego en el que el anfitrión hace girar la gran ruedade dinero de 54 segmentos, aquí puedes ganar uno de los cuatro números o una de las cuatro caractarísticas, puedes apostar en una o varias opciones al mismo tiempo. ¿Te le medirías a descubrir este misterio?\\n\" +\n" +
				"\t\t\t\t\t\t\"\\n\",\n" +
				"\t\t\t\t\t\t\"Sette e Mezzo Live: Este es un emocionante juego de cartas italiano, bastante popular, un juego de siete cartas y media en línea.El objetivo del juego es tratar de hacer una puntuación de siete y medio o acercarse a ese número sumando el valor de sus cartas. ¿Estás listo (a) para emprender el viaje?\\n\" +\n" +
				"\t\t\t\t\t\t\"\\n\",\n" +
				"\t\t\t\t\t\t\"Spin a Win: Este es un apasionante juego interactivo que contiene una ruleta, dividida en 54 secciones iguales, marcadas con los números 1, 2, 5, 10, 20, 40, x2 o x7. Los jugadores realizarán apuestas en la sección en la que crean que se detendrá, un cursor indicará la sección ganadora en la parte superior de la ruleta cuando esta deje de girar. Aquí las apuestas paralelas como Par, Impar y Multiplicador te dan aún más posibilidades de ganar con cada tirada. ¡Haz parte de este espectáculo!",]
			},
			b6: {
				title: "Preguntas Frecuentes Sobre El Casino En Vivo",

			},
		}],
	}





	const acc = [
		{
			"title": "¿Puedo jugar en un casino en vivo en mi dispositivo móvil?",
			"data": {
				"p1": "Claro que si, en el casino en vivo de Codere, te puedes divertir desde donde estés, con cualquiera de tus dispositivos móviles. ¿Qué esperas para ingresar?",

			}
		},
		{
			"title": "¿En qué consisten los juegos de casino en vivo?",
			"data": {
				"p1": "Los juegos de casino en vivo son una sección donde los jugadores pueden apostar y disfrutar desde donde estés, de una sesión de juego que será transmitida en vivo. ¡Disfruta de la experiencia!",

			}
		}
	]




	return (
		<div className="cas-seo">
			<Helmet>
				<title>{title}</title>
				<link
					rel="canonical"
					href="https://www.codere.com.co/casino/casino-en-vivo"
				/>
				<meta name="description" content={description}/>
				<script type="application/ld+json">{JSON.stringify(json)}</script>
			</Helmet>


			<Floating text="¡El mejor Casino En Vivo!" juega={true}/>
			<div
				className="top-bg-seo "

				style={{
					backgroundImage: `url(https://www.codere.com.co/Colombia/images/seoCasinoImages/casinoEnVivo/${
						props.flag ? "CASINO%20EN%20VIVO_mob" : "CASINO%20EN%20VIVO"
					}.jpg)`,
					backgroundSize : "cover",
				}}
			></div>

			<Container style={{color: "#fff"}}>
				<h1 className="header mt-4 mb-3">{top_par.h1}</h1>
				{top_par.p.map((par, k) => (
					<p key={k}>{par}</p>
				))}

				{/* Table */}
				{!props.flag ? (
					<TableOfContents table={table_of_contents_list}/>
				) : null}


				<div id={como_juega.id}>
					<h2 className="mt-4 mb-3" id={"anchor-1"}>{como_juega.title1}</h2>
					<p>{como_juega.p1} </p>
					{/* Games */}
					<Row className="casino-row">
						{live_games
							.slice(0, !props.flag ? live_games.length : 4)
							.map((game, k) => (
								<Col lg={2} md={4} xs={6} key={k}>
									<NavLink href={`${game_prefix}${game.link_name}`}>
										<div className="cas-game-wrapper">
											<LazyLoadImage
												className="casino-game-img shining"
												src={
													"https://www.codere.com.co/Colombia/images/seoCasinoImages/casinoEnVivo/" +
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

					<h2 className="mt-4 mb-3" id={"anchor-2"}>{como_juega.title2}</h2>
					<p>{como_juega.p2} </p>
					<h2 className="mt-4 mb-3" id={"anchor-3"}>{como_juega.title3}</h2>
					<p>{como_juega.p3} </p>
				</div>

				{floor2 && floor2.data && floor2.data.map((item, index) => (
					<div key={index}>
						<h3>{item.b1.title}</h3>
						{item.b1.text.map((text, index) => <p key={index}>{text}</p>)}

						<h3>{item.b2.title}</h3>
						{item.b2.text.map((text, index) => <p key={index}>{text}</p>)}

						<h3>{item.b3.title}</h3>
						{item.b3.text.map((text, index) => <p key={index}>{text}</p>)}

						<h3>{item.b4.title}</h3>
						{item.b4.text.map((text, index) => <p key={index}>{text}</p>)}

						<h3>{item.b5.title}</h3>
						{item.b5.text.map((text, index) => <p key={index}>{text}</p>)}

						<h3 className="mt-4 mb-3">{item.b6.title}</h3>
					</div>
				))}


				<DynamicAccordion data={acc} />
				<Button href={"https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"} className="cas-reg-btn" rel="nofollow">
					Registrate
				</Button>

			</Container>
		</div>
	);
}
