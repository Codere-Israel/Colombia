import Navbar from "../parts/Navbar";
import Floating from "../parts/Floating";
import {
	Container,
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
import {useEffect} from "react";

export default function Casino(props)
{
	useEffect(() =>
	{
		window.scrollTo(0, 0);
	}, []);
	const game_prefix = "https://m.codere.com.co/deportes/#/CasinoPage?playgame=";

	const title = "Juega Casino Online en Colombia » Bono $100.000 | Codere®";
	const description =
		      "Jugar en un Casino Online es muy fácil y con consejos básicos para empezar puedes iniciar una aventura en el mejor casino de Colombia.";

	const json = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [{
			"@type": "Question",
			"name": "¿Qué es un ‘Bono Casino sin Deposito’?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Una vez has elegido un casino en línea de Codere, estás listo para elegir todas las opciones de juegos casino y bonos de juego. Una vez empieces a navegar, podrás notar que el sitio ofrece un bono casino sin depósito. ¿Qué significa esto exactamente? Algunos sitios de casino ofrecen bonos que no requieren que el usuario realice cualquier depósito adicional, lo que significa que no se requiere de dinero para depositar. El bono casino sin depósito puede incluir giros gratis o incluso dinero gratis en el balance de tu cuenta. Algunos casinos online incluso ofrecen bonos sin depósito cuando los usuarios registran una cuenta por primera vez en sus sitios."
			}
		},{
			"@type": "Question",
			"name": "¿Por qué Codere es el mejor casino en línea?",
			"acceptedAnswer": {
				"@type": "Answer",
				"text": "Encuentra en el Casino Online de Codere una variedad increíble de juegos casino como blackjack, ruleta, ruleta en vivo y la última incorporación a nuestro catálogo, ¡el videobingo! Recuerda que en todos los juegos de casino tus ganancias no serán en bono y podrás retirarlas en cualquier momento sin problemas para tener tus premios en efectivo. Encuentra en el Casino Online de Codere, el mejor casino en línea, un gran número de títulos de juegos que te están esperando. Muchos slots tendrán premio extra y contarán con unos “jackpots” espectaculares. Gracias al buscador será fácil encontrarlos y podrás filtrar por tipo de juego, nombre, compañía, pagos… ¡e incluso hacer tu propia lista de slots favoritas! Además, sorpréndete con la rapidez de nuestra plataforma, tanto en tu ordenador como en tu aplicación móvil."
			}
		}]

	};

	const top_par = {
		h1: "El Casino en Colombia con los Mejores Juegos en Línea",
		p : [
			"",
		],
	};

	// Table of Contents  \\
	const table_of_contents_list = [
		{
			title: "Crown Casino: La emoción de los juegos de azar ahora en línea",
			id   : "anchor-1",
		},
		{
			title: "¿Cuáles son los beneficios de jugar Juegos de Casino en línea?",
			id   : "anchor-2",
		},
		{
			title: "Reseña de los Juegos Más Populares de Casino Online",
			id   : "anchor-3",
		},
		{
			title: "¿Primeros Pasos: ¿Cómo Jugar en un Casino Online en Colombia?",
			id   : "anchor-4",
		},
		{
			title: "¿Por qué Codere es el mejor casino en línea?",
			id   : "anchor-5",
		},

	];

	// Table

	const tableData = {
		headers: [],
		rows   : [
			{
				id: 1,
				a1: "🏆 Establecido",
				a2: "1984"
			},
			{
				id: 2,
				a1: "🥇 Juegos ofrecidos\t",
				a2: "900+\n"
			},
			{
				id: 3,
				a1: "🎲 Licencia de juego\t",
				a2: "C1901 November 15, 2022 to November 10, 2025​\n"
			},
			{
				id: 4,
				a1: "✔️ Moneda\t",
				a2: "COP"
			},
			{
				id: 5,
				a1: "💰 Depósito mínimo\t",
				a2: "$8.000 COP\n"
			},
			{
				id: 6,
				a1: "💸 Limites de Retiros\t",
				a2: "desde $50.000 pesos hasta $1.500.000 pesos por transacción.\n"
			},
			{
				id: 7,
				a1: "💳 Formas de Pago\t",
				a2: "Visa, MasterCard, PSE, PAyU, tpaga, efecty, Dimonex, Punto Red, Daviplata, Via Baloto\n"
			},
		],

	};

	// Games Data
	const live_games = [
		{
			name   : "PTPremiumBlackjack_Square",
			img    : "PTPremiumBlackjack_Square",
			urlImageTitle: "PT%20Premium%20Blackjack",
			sponsor: "MGS",
		},		{
			name   : "PRPAviator_Square",
			img    : "PRPAviator_Square",
			urlImageTitle: "PRP%20Aviator",
			sponsor: "MGS",
		},		{
			name   : "PTLiveQuantumRoulette_Square",
			img    : "PTLiveQuantumRoulette_Square",
			urlImageTitle: "PT%20Live%20Quantum%20Roulette",
			sponsor: "MGS",
		},		{
			name   : "PTLiveAmericanRoulette_Square",
			img    : "PTLiveAmericanRoulette_Square",
			urlImageTitle: "PT%20Live%20American%20Roulette",
			sponsor: "MGS",
		},		{
			name   : "PTBlueWizard_Square",
			img    : "PTBlueWizard_Square",
			urlImageTitle: "PT%20Blue%20Wizard",
			sponsor: "MGS",
		},		{
			name   : "PTLiveBaccarat_Square",
			img    : "PTLiveBaccarat_Square",
			urlImageTitle: "PT%20Live%20Baccarat",
			sponsor: "MGS",
		},		{
			name   : "EVGRNGBlackjack_Square",
			img    : "EVGRNGBlackjack_Square",
			urlImageTitle: "EVG%20RNG%20Blackjack",
			sponsor: "MGS",
		},		{
			name   : "EVGRuletaRelampagoEnVivo_Square",
			img    : "EVGRuletaRelampagoEnVivo_Square",
			urlImageTitle: "EVG%20Ruleta%20Relampago%20En%20Vivo",
			sponsor: "MGS",
		},		{
			name   : "PTPharaohsDaughter_Square",
			img    : "PTPharaohsDaughter_Square",
			urlImageTitle: "PT%20Pharaohs%20Daughter",
			sponsor: "MGS",
		},		{
			name   : "EVGRuletaEspanol_Square",
			img    : "EVGRuletaEspanol_Square",
			urlImageTitle: "EVG%20Ruleta%20Espanol",
			sponsor: "MGS",
		},		{
			name   : "EVGNoCommissionBaccarat_Square",
			img    : "EVGNoCommissionBaccarat_Square",
			urlImageTitle: "EVG%20No%20Commission%20Baccarat",
			sponsor: "MGS",
		},		{
			name   : "PTLiveAllBetsBlackjack_Square",
			img    : "PTLiveAllBetsBlackjack_Square",
			urlImageTitle: "PT%20Live%20All%20Bets%20Blackjack",
			sponsor: "MGS",
		},


	];

	const como_juega = {
		id: "como_juega",

		p: "Porque en Codere está la mejor selección de juegos de casino y las mejores condiciones! Entra en el mejor casino en línea, elige entre la enorme lista de juegos de slot que tendrás al alcance de tu mano, descubre las últimas novedades que han llegado al mercado y disfruta jugando con total seguridad." +
			"Acepta el reto, regístrate ahora, disfruta de todas las ventajas que tiene jugar en Codere y empieza a ganar en grande." +

			"¡Porque en Codere está la mejor selección de juegos de casino y las mejores condiciones! Entra en el mejor casino en línea, elige entre la enorme lista de juegos de slot que tendrás al alcance de tu mano, descubre las últimas novedades que han llegado al mercado y disfruta jugando con total seguridad." +
			"Acepta el reto, regístrate ahora, disfruta de todas las ventajas que tiene jugar en Codere y empieza a ganar en grande.\n"


	};

	const reglas = {
		id: "anchor-1",
		h2: "Crown Casino: La emoción de los juegos de azar ahora en línea",
		p : {
			p5: "Donde podrás ganar increíbles premios si tienes suerte, habilidad y sabes cómo utilizar tus giros y avances. Seguramente conozcas las máquinas clásicas de slots con tres carretes y tres filas, pero con los slots online se abre una nueva dimensión para aumentar la diversión.",
			pi: [
				"¿Qué pasa en los casinos que los hace tan emocionantes? Muchas personas dirán que son las luces parpadeantes, los temas coloridos y los grandes jackpots hacen de las maquinas slot la parte más fascinante de la experiencia de juegos casino. Las personas que van al casino acuden a sus máquinas de slot favorita y pasan todo el día y la noche girándola.",
				"Las máquinas de slot cuentan con una combinación de suerte y suspenso que las hacen difícil de resistir. Desafortunadamente, sacar tiempo para ir a tu casino más cercano no siempre es lo más conveniente.\n",

				"Jugar slots online es la manera perfecta de evitar este viaje y disfrutar de la emoción de jugar juegos de slot desde la comodidad de tu hogar.",
			],
		},

		inner: [
			{
				h2  : "¿Cuáles son los beneficios de jugar Juegos de Casino en línea?",
				id  : "anchor-2",
				p   : [
					"Jugar juegos de casino online trae muchos beneficios. En muchos casos, los juegos de casino online son incluso más divertidos que aquellos que se juegan en casinos físicos, principalmente debido a que incrementan la inmersión e interactividad. Aquí te dejamos algunos beneficios de jugar juegos de casino online:",
				],
				list: [
					"Juega en cualquier lugar y en cualquier momento. No hay necesidad de planear un día de excursión cuando juegas juegos de casino online. En la mayoría de casinos online puedes jugar desde cualquier lugar y en cualquier momento.",
					"Diseño del juego. Los juegos de casino online ofrecen una experiencia alusiva al juego ya que presentan hermosos gráficos en 3D con infinidad de opciones temáticas.",
					"Ofertas ilimitadas. Los casinos físicos tienen una cantidad limitada de espacio físico, lo que significa que la variedad de juegos que ofrecen están restringidos por el área de sus pisos. Los mejores sitios de casinos online proveen a sus usuarios con muchas ​opciones de juego, usualmente muchas más opciones que su contraparte en tierra.",
				],

			},
		],
	};


	const estrategias = {
		id: "anchor-3",
		h2: "Reseña de los Juegos Más Populares de Casino Online\n",
		p : [
			"Los juegos de casino online más populares pueden dividirse en dos categorías: juegos de mesa y los juegos tragamonedas. Los juegos de mesa incluyen juegos de cartas y cualquier otro juego que tradicionalmente se juegan en un casino de mesa. Estos juegos incluyen póker, blackJack, ruleta y los dados. Los casinos a menudo ofrecen una amplia diversidad de reglas y variaciones de juego para cada juego.",
			"Las máquinas de tragamonedas online son especialmente populares porque combinan riesgo, suerte y variedad. Los juegos de slots son una opción particularmente atractiva ya que hay muchísima variedad de opciones. Hay, literalmente, miles de diferentes juegos de casino online para explorar, disfrutar y aumentar tu oportunidad de ganar. Muchas de las mejores plataformas de casinos online ofrecen cientos de diferentes títulos de juegos de tragaperras, proveyendo a sus usuarios, prácticamente, opciones ilimitadas.",
			"Muchos sitios de casino online también ofrecen juegos en directo los cuales cuentan con dealers profesionales en la vida real y los jugadores pueden ver e interactuar en tiempo real.",
		],
	};


	const floor1 = {
		id: "anchor-4",
		h2: "Primeros Pasos: ¿Cómo Jugar en un Casino Online en Colombia?\n",
		p : [
			"Jugar en un casino online es muy fácil una vez que conozca unos pocos pasos básicos y consejos para empezar. Primero, vas a querer realizar una pequeña investigación. Comienza utilizando un motor de búsqueda que averigüe el mejor casino en línea para ti. Cada casino tiene un conjunto de pros y contras. Dependiendo de la plataforma, cada casino en línea ofrece su propio vuelco a la experiencia de jugar en línea.",
			"Una vez has encontrado el casino que mejor se ajuste a tus deseos de juego, es tiempo de registrarse en una cuenta. Antes de que divulgues cualquier información personal, como los datos de tu tarjeta, es importante verificar la seguridad del sitio. Un casino en línea debería ofrecer no menos de 128-bit SSL de cifrado digital. Cualquier casino en línea legítimo tendrá sus cualificaciones de seguridad fácilmente accesible a sus posibles usuarios.\n" +
			"\n",
			"Luego de que estés seguro que tu elección de casino online es seguro, ¡estás listo para registrarte, realizar tus apuestas y jugar!\n" +
			"\n",
		]
	};

	const floor2 = {
		id: "floor2",
		h2: "¿Qué es un ‘Bono Casino sin Deposito’?\n",
		p : [
			"Una vez has elegido un casino en línea de Codere, estás listo para elegir todas las opciones de juegos casino y bonos de juego. Una vez empieces a navegar, podrás notar que el sitio ofrece un bono casino sin depósito. ¿Qué significa esto exactamente? Algunos sitios de casino ofrecen bonos que no requieren que el usuario realice cualquier depósito adicional, lo que significa que no se requiere de dinero para depositar. ",
			"El bono casino sin depósito puede incluir giros gratis o incluso dinero gratis en el balance de tu cuenta. Algunos casinos online incluso ofrecen bonos sin depósito cuando los usuarios registran una cuenta por primera vez en sus sitios.",

		]
	};

	const floor3 = {
		id   : "anchor-5",
		h2   : "¿Por qué Codere es el mejor casino en línea?\n",
		p    : [
			"Encuentra en el Casino Online de Codere una variedad increíble de juegos casino como blackjack, ruleta, ruleta en vivo y la última incorporación a nuestro catálogo, ¡el videobingo! Recuerda que en todos los juegos de casino tus ganancias no serán en bono y podrás retirarlas en cualquier momento sin problemas para tener tus premios en efectivo.\n",
			"Además, sorpréndete con la rapidez de nuestra plataforma, tanto en tu ordenador como en tu aplicación móvil.\n" +
			"\n",

		],
		table: "",
	};


	return (
		<div className="cas-seo">
			<Helmet>
				<title>{title}</title>
				<link
					rel="canonical"
					href="https://www.codere.com.co/casino"
				/>
				<meta name="description" content={description}/>
				<script type="application/ld+json">{JSON.stringify(json)}</script>
			</Helmet>

			<Navbar />
			<Floating text="¡El mejor Casino!" juega={true}/>
			<div
				className="top-bg-seo "
				/*
				style={{
					backgroundImage: `url(https://www.codere.com.co/Colombia/images/seoCasinoImages/casino/${
						props.flag ? "TODOS_mob" : "TODOS"
					}.jpg)`,
					backgroundSize : "cover",
				}}
				*/

				style={{
					backgroundImage: `url(https://www.codere.com.co/Colombia/images/seoCasinoImages/blackjack/${
						props.flag ? "BJ_mob" : "BJ"
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
				<p>{como_juega.p}</p>

				{/* Games */}
				<Row className="casino-row">
					{live_games
						.slice(0, !props.flag ? live_games.length : 4)
						.map((game, k) => (
							<Col lg={2} md={4} xs={6} key={k}>
								<NavLink href={`${game_prefix}${game.urlImageTitle}`}>
									<div className="cas-game-wrapper">
										<LazyLoadImage
											className="casino-game-img shining"
											src={
												"https://www.codere.com.co/Colombia/images/seoCasinoImages/casino/" +
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
					{reglas.p.pi.map((p, k) => (
						<p key={k}>{p}</p>
					))}
				</div>


				{reglas.inner.map((game, k) => (
					<div key={k}>
						<h2 id={game.id} className={"mt-4"}>{game.h2}</h2>
						{game.p.map((pi, k) => (
							<p key={k}>{pi}</p>
						))}

						<ol>
							{game.list.map((li, k) => (
								<li key={k}>{li}</li>
							))}
						</ol>
					</div>
				))}


				<div id={estrategias.id}>
					<h2 className="mt-4 mb-3">{estrategias.h2}</h2>
					<div className="estrategias_container">
						{estrategias.p.map((pi, k) => (
							<p key={k} >{pi}</p>
						))}
					</div>
				</div>


				<div id={floor1.id}>

					<h2 className="mt-4 mb-3">{floor1.h2}</h2>
					<div className="estrategias_container">
						{floor1.p.map((pi, k) => (
								<p key={k}>{pi}</p>
						))}
					</div>
				</div>

				<div id={floor2.id}>
					<h2 className="mt-4 mb-3">{floor2.h2}</h2>
					<div className="estrategias_container">
						{floor2.p.map((pi, k) => (
								<p key={k}>{pi}</p>
						))}
					</div>
				</div>

				<div id={floor3.id}>
					<h2 className="mt-4 mb-3">{floor3.h2}</h2>
					<div className="estrategias_container">
						{floor3.p.map((pi, k) => (
								<p key={k}>{pi}</p>
						))}
					</div>
				</div>

				<DynamicTable table={tableData}/>
				<Button href={"https://m.codere.com.co/deportescolombia/#/RegistroCONewPage"} className="cas-reg-btn" rel="nofollow">
					Registrate
				</Button>

			</Container>
		</div>
	);
}
