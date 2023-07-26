import Navigations from "../parts/Navigations";
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
import Navbar from "../parts/Navbar";
import DynamicAccordion from "../parts/DynamicAccordion";

export default function Bingo(props)
{
	useEffect(() =>
	{
		window.scrollTo(0, 0);
	}, []);
	const game_prefix = "https://m.codere.com.co/deportes/#/CasinoPage?playgame=";

	const title = "Juega Video Bingo en línea 🎰 Bono de $100.000 | Codere®";
	const description =
		      "Disfruta del emocionante y entretenido juego de azar video bingo, juega online y emociónate con los gráficos y la tecnología más moderna. ¿Estás listo?";

	const json = {
		"@context": "https://schema.org",
		"@type"   : "FAQPage",
		mainEntity: [
			{

				"@type"         : "Question",
				"name"          : "¿Diferencia entre el bingo y el video bingo?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text" : "La única diferencia entre el bingo tradicional y video bingo en línea es que si estás a tan solo un número de ganar, podrás seguir pidiendo bolas extra por un módico precio."
				}
			},
			{
				"@type"         : "Question",
				"name"          : "¿Para jugar video bingo necesito instalar el juego?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text" : "Para jugar video bingo en Codere no necesitas descargar archivos. Registrate y juega en línea, es muy fácil."
				}

			}

		],
	};

	const top_par = {
		h1: "Video Bingo Online: ideal para jugar de desde Casa",
		p : [
			"Tabla de contenido:",
		],
	};

	// Table of Contents  \\
	const table_of_contents_list = [
		{
			title: "Juegos de Video Bingo en Codere",
			id   : "anchor-1",
		},
		{
			title: "¿Qué es el Video Bingo?",
			id   : "anchor-2",
		},
		{
			title: "¿Cómo se juega?",
			id   : "anchor-3",
		},
		{
			title: "Preguntas frecuentes",
			id   : "anchor-4",
		},


	];


	// Games Data
	const live_games = [
		{
			name   : "MGACircusBingo_Square",
			img    : "MGACircusBingo_Square",
			urlTxt : "MGA%20Circus%20Bingo",
			sponsor: "MGS",
		},
		{
			name   : "MGAHollyWoodBingo_Square",
			img    : "MGAHollyWoodBingo_Square",
			urlTxt : "MGA%20HollyWood%20Bingo",
			sponsor: "EVG",
		},
		{
			name   : "MGABuffalo_Square",
			img    : "MGABuffalo_Square",
			urlTxt : "MGA%20Buffalo",
			sponsor: "EVG",
		},
		{
			name   : "MGAZeus_Square",
			img    : "MGAZeus_Square",
			urlTxt : "MGA%20Zeus",
			sponsor: "EVG",
		},
		{
			name   : "MGAMariachis_Square",
			img    : "MGAMariachis_Square",
			urlTxt : "MGA%20Mariachis",
			sponsor: "MGS",
		},
		{
			name   : "MGASea_Square",
			img    : "MGASea_Square",
			urlTxt : "MGA%20Sea",
			sponsor: "EVG",
		},
		{
			name   : "MGABikers_Square",
			img    : "MGABikers_Square",
			urlTxt : "MGA%20Bikers",
			sponsor: "EVG",
		},
		{
			name   : "MGACastle_Square",
			img    : "MGACastle_Square",
			urlTxt : "MGA%20Castle",
			sponsor: "EVG",
		},
		{
			name   : "MGAChampion_Square",
			img    : "MGAChampion_Square",
			urlTxt : "MGA%20Champion",
			sponsor: "MGS",
		},
		{
			name   : "MGASweetHome_Square",
			img    : "MGASweetHome_Square",
			urlTxt : "MGA%20Sweet%20Home",
			sponsor: "EVG",
		},
		{
			name   : "MGARockLive_Square",
			img    : "MGARockLive_Square",
			urlTxt : "MGA%20Rock%20Live",
			sponsor: "EVG",
		},
		{
			name   : "MGAMagician_Square",
			img    : "MGAMagician_Square",
			urlTxt : "MGA%20Magician",
			sponsor: "EVG",
		},


	];



	const floor1 = {
		id: "anchor-1",
		title:"Juegos de Video Bingo en Codere",
		p : [
			"Selecciona en Codere la opciones de slots (video bingo) el que más te guste para comenzar:",
		]
	};
	const floor2 = {
		id  : "floor2",
		h3  : "Circus Bingo:",
		data: {
			p: [
				"Ambientado con payasos y colores llamativos al estilo del mítico casino de Las Vegas. En este juego de video bingo se sacan 30 bolas de un bombo de 60 bolas. Cada jugador tiene hasta cuatro cartones con 15 números por cartón. El jugador gana el valor asociado al cartón, si logra completar una figura de premio.\n",
				"En algunas ocasiones a los jugadores se les ofrece la opción de comprar bolas adicionales por un precio extra. Recuerda que el premio mayor se otorgará si el cartón se completa en las primeras 30 bolas.\n"

			]
		}

	}
	const floor3 = {
		id   : "floor3",
		title: "HollyWood Bingo:",
		data : {
			p: [
				"Bingo Hollywood ofrece una experiencia de alfombra roja en Codere, es un juego que está lleno de glamour, fama, emoción y ofrece grandes premios. En esta modalidad de Bingo se sacan 44 bolas de un bombo de 75 bolas. El jugador tiene un máximo de cuatro cartones con 24 números cada uno.",

				"Bingo Hollywood ofrece una experiencia de alfombra roja en Codere, es un juego que está lleno de glamour, fama, emoción y ofrece grandes premios. En esta modalidad de Bingo se sacan 44 bolas de un bombo de 75 bolas. El jugador tiene un máximo de cuatro cartones con 24 números cada uno.",
			],

		}
	}
	const floor4 = {
		id  : "floor4",
		h3  : "Rainforest Magic Bingo:",
		data: {
			p: [
				"Un juego de video bingo que ofrece una temática inspirada en la jungla, donde podrán apreciarse dos animales exóticos: un guacamayo y un tigre. Es un video bingo de 90 números y cuatro boletos, está formado por cuadrículas de 5x3 rodillos y 12 patrones de pago. Además, consta de algunas características adicionales que le permitirán al jugador mejorar las partidas.",
				"Podrás jugar con hasta 4 cartones, para iniciar la ronda debes darle clic a” jugar”, se extraen 30 bolas y se mostrarán las combinaciones ganadoras en los cartones y en los patrones de la tabla de pagos superior. Podrás comprar hasta 13 bolas extra. Elegir una flor para revelar premios o ganar un premio aleatorio instantáneamente.",
			]
		}
	};
	const floor5 = {
		id  : "floor5",
		h3  : "Sweet Alchemy Bingo:",
		data: {
			p: [
				"Sweet Alchemy Bingo es un video bingo, una combinación exitosa de una máquina tragamonedas y un juego de bingo, basado en el popular juego de rejilla de 2018 Sweet Alchemy. Coge tus cartones, crea patrones mágicos y desbloquea las rondas de bonificación, ¡mientras vas en busca del mayor premio de todos! ",
				"Puedes jugar hasta cuatro cartas a la vez, cada una con 15 números entre el 1 y el 90. Se extraen 30 bolas entre el 1 y el 90 del caldero de caramelos y, si alguna de ellas coincide con tus números, se marcará creando patrones en tus cartas. Recuerda que los premios que ganas se basan en los patrones que creas.",
			]
		}
	}

	const floor6 = {
		id             : "anchor-2",
		h2             : "¿Qué es el Video Bingo?",
		data           : {
			p: [
				"El Video Bingo es una variante de las clásicas tragamonedas en línea, que recrea el clásico juego de bingo pero en uno de los juegos de casino más apreciados por jugadores en todo el mundo, los slots, sus opciones son un poco diferentes a las del bingo normal. En la modalidad de video, el jugador elige sus cartones y el juego debe completarse con el número de bolas de cada categoría. A diferencia del bingo presencial, el video bingo permite bolas adicionales, un premio estándar y cambiar la velocidad de la rueda.",
				"Una de las ventajas es que los jugadores pueden disfrutar del juego en cualquier momento y lugar, sin tener que salir de casa. Además es un juego emocionante y entretenido que combina la emoción y el azar del bingo tradicional con los gráficos y la tecnología moderna. Si te gusta jugar al bingo, seguro disfrutarás esta experiencia",
			]
		},

	}

	const  floor6A = {
				id:"anchor-3",
				title: "¿Cómo se juega?",
				data : {
					p2: [
						"En la página de juegos de casino, en el buscador escribe “Bingo” y elige el juego de tu preferencia. Se puede jugar con hasta 4 cartones. Los cartones se organizan en series de 6 (en columnas). Se conoce como serie a todos los números que están en el bombo sin que se repita ninguno.",
						"Antes de cada partida puedes elegir los cartones con los que quieras jugar pulsando sobre ellos además de cambiar el precio de todos ellos mediante el selector de apuesta.",
						"El juego comienza y las bolas numeradas aparecen de forma consecutiva y los número de los cartones se marcará automáticamente.",
					]
				}
	}

	const floor7 = {
		id: "anchor-4",
		h2: "Preguntas frecuentes ",

	}

const preguntasFrecuentes = [
		{
			"title": "¿Qué diferencia hay entre el bingo y el video bingo?",
			"data": {
				"p1": "La única diferencia es que en el video bingo en línea hay la opción, que cuando estás a tan solo un número de ganar, podrás seguir pidiendo bolas extra por un módico precio extra.",
			}
		},
		{
			"title": "¿Para jugar video bingo necesito instalar el juego? ",
			"data": {
				"p1": "Para jugar video bingo en Codere no necesitas descargar archivos. Registrate y juega en línea, es muy fácil.",
			}
		}
	]
	return (
		<div className="cas-seo">
			<Helmet>
				<title>{title}</title>
				<link
					rel="canonical"
					href="https://www.codere.com.co/casino/video-bingo"
				/>

				<meta name="description" content={description}/>
				<script type="application/ld+json">{JSON.stringify(json)}</script>
			</Helmet>

			<Navbar />
			<Floating text="¡La versión moderna!" juega={true}/>
			<div
				className="top-bg-seo "

				style={{
					backgroundImage: `url(https://www.codere.com.co/Colombia/images/seoCasinoImages/bingo/${
						props.flag ? "bingo_mob" : "bingo"
					}.jpg)`,
					backgroundSize : "cover",
				}}
			></div>

			<Container style={{color: "#fff"}}>
				<h1 className="header mt-4 mb-3">{top_par.h1}</h1>

				{!props.flag ? (
					<TableOfContents table={table_of_contents_list}/>
				) : null}

				<h2  className="mt-4 mb-3">{floor1.title}</h2>
				{floor1.p.map((par, k) => (
					<p key={k}>{par}</p>
				))}


				{/*{como_juega.p.map((p, k) => (*/}
				{/*	<p key={k}>{p}</p>*/}
				{/*))}*/}

				{/* Games */}
				<Row className="casino-row">
					{live_games
						.slice(0, !props.flag ? live_games.length : 4)
						.map((game, k) => (
							<Col lg={2} md={4} xs={6} key={k}>
								<NavLink href={`${game_prefix}${game.urlTxt}`}>
									<div className="cas-game-wrapper">
										<LazyLoadImage
											className="casino-game-img shining"
											src={
												"https://www.codere.com.co/Colombia/images/seoCasinoImages/bingo/" +
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


				<div id={floor2.id}>
					<h3 className="mt-4 mb-3">{floor2.h3}</h3>
					<div className="estrategias_container">
						{floor2.data.p.map((pi, k) => (
								<p key={k}>{pi}</p>
						))}
					</div>
				</div>
				<div id={floor3.id}>
					<h3 className="mt-4 mb-3">{floor3.title}</h3>

					<div className="estrategias_container">
						{floor3.data.p.map((pi, k) => (
								<p key={k}>{pi}</p>
						))}
					</div>

				</div>


				<div id={floor4.id}>
					<h3 className="mt-4 mb-3">{floor4.h3}</h3>
					<div className="estrategias_container">
						{floor4.data.p.map((pi, k) => (
								<p key={k}>{pi}</p>
						))}
					</div>

				</div>

				<div id={floor5.id}>
					<h3 className="mt-4 mb-3">{floor5.h3}</h3>
					<div className="estrategias_container">
						{floor5.data.p.map((pi, k) => (
								<p key={k}>{pi}</p>
						))}
					</div>

				</div>

				<div id={floor6.id}>
					<h2 className="mt-4 mb-3">{floor6.h2}</h2>
					<div className="estrategias_container">
						{floor6.data.p.map((pi, k) => (
								<p key={k}>{pi}</p>
						))}
					</div>



				</div>


				<div id={floor6A.id}>
					<h2 className="mt-4 mb-3">{floor6A.title}</h2>
					<div className="estrategias_container">
						{floor6A.data.p2.map((pi, k) => (
								<p key={k}>{pi}</p>
						))}
					</div>



				</div>


				<div id={floor7.id}>
					<h2 className="mt-4 mb-3">{floor7.h2}</h2>
				</div>

				<DynamicAccordion data={preguntasFrecuentes} />
				{/*<Button href={"https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"} className="cas-reg-btn" rel="nofollow">*/}
				{/*	Registrate*/}
				{/*</Button>*/}

			</Container>
		</div>
	);
}
