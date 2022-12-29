import { Zoom } from "react-awesome-reveal";
import { Accordion, Table } from "react-bootstrap";
import React from "react";

var questions = ["¿Cuál es el mejor mercado para las apuestas deportivas?", "¿Cuánto es lo mínimo en dinero para poder apostar?", "¿Cómo hacer pronósticos de fútbol?", "¿Cómo ganar en apuestas deportivas?"];
var answers = ["El mejor mercado para apostar o el más rentable es 1,2 lo que quiere decir que: gana local o gana visitante, ya sea en deportes como: Baloncesto," + " Béisbol o tenis, ya que en el caso del fútbol es diferente, porque está la opción 1X2, que incluye igualmente, gana local o gana visitante, pero además, el empate.", "En Codere, la casa de apuestas en Colombia más bacana, el dinero mínimo que el usuario deberá tener para apostar son $1.000 pesos colombianos, con este monto, el usuario podrá apostar a cualquier deporte, ya sea baloncesto, tenis, béisbol, fútbol, entre otros que se pueden encontrar en la plataforma.", "Existen diferentes tipos de herramientas para que el usuario pueda hacer pronósticos de fútbol, por ejemplo aplicaciones con datos y estadísticas, e incluso páginas web que registran el rendimiento de los equipos.", "Las apuestas combinadas deportivas te pueden hacer ganar más dinero, ya que todas las selecciones que hagas se multiplican dependiendo de lo que apuestes, pero así como puedes ganar más, el nivel de complejidad aumenta, recuerda que si fallas una selección, fallarás la apuesta."]

function Content(props) {
	return (<div className='content-container'>
		<div className='row'>
			<div className='col-12 col-sm-4 left-col'>
				<Zoom triggerOnce>
					<h1 className='bottomContentSubTitle'>
						Bienvenido a la Mejor Casa de Apuestas Deportivas Online en Colombia
					</h1>
					<p className='bottomContentText'>
						Aquí podrás poner a prueba tus conocimientos y aprender estrategias potentes que te lleven a ganar dinero real apostando en línea, en un ambiente seguro y profesional, entre amigos, en la mejor casa de apuestas online del país.
					</p>
					<p>
						Puedes hacer apuestas en línea para hoy o cuando quieras. Todas son seguras, respaldadas por una multinacional que opera las mejores casas para apostar en varios países en Suramérica y Europa.
					</p>
					<p>
						En Codere puedes realizar apuestas online en muchos deportes, equipos y jugadores, con la facilidad de hacerlo desde tu móvil u ordenador. Lo que te hace vibrar lo tenemos a tu disposición para que vivas experiencias extraordinarias:
					</p>

					<ul>
						<li>Apuestas deportivas futbol en vivo</li>
						<li>Apuestas Champions League</li>
						<li>Apuestas mundial</li>
						<li>Apuestas deportivas baloncesto</li>
						<li>Apuestas NBA</li>
					</ul>
					<p>Y muchas más apuestas deportivas abiertas para ti</p>

					<h2 className='bottomContentSubTitle'>
						Guía Rápida de Apuestas Deportivas en Codere
					</h2>
					<div className='bottomContentText'>
						<p>
							Las apuestas deportivas son un mundo emocionante y de puertas abiertas para todas las personas. Con algo de conocimiento e intuición podrás diseñar estrategias de apuestas ganadoras.Y, ya que esto puede tomar algo de tiempo, en Codere podrás aprender de los profesionales y acelerar tu proceso.
						</p>
						<p>
							Contamos con todo tipo de apuestas deportivas, ya sean simples, múltiples, en Parlay y muchos más. ¿Qué es un Parlay? Es apostar por varios partidos en conjunto pronosticando ganadores o empates. Parlay en Colombia es una práctica muy popular con la que es posible ganar mucho dinero.
						</p>
						<p>
							Para que tu experiencia sea única y divertida, hemos preparado nuestros Tips Apuestas Deportivas, que te permitirán aprender a jugar como profesional, dejando que tu astucia se convierta en emoción y diversión.
						</p>
						<h3 className='bottomContentSubTitle'>Entender a los Equipos</h3>
						<div className='bottomContentText'>
							<p>
								Empecemos poniendo sobre la mesa la primera verdad para hacer una apuesta deportiva exitosa: el conocimiento es poder. Suena obvio y simple, y la verdad es que así es. Conocer en profundidad los equipos, los jugadores, los momentos y todo lo que gira en torno a tus deportes te traerá grandes ventajas para incrementar las probabilidades de ganar.
							</p>
							<p>
								Aquí no hablamos solo de conocer el histórico de los equipos y jugadores, sino también su situación actual, al día, al minuto. Para conseguir ganancias consistentes en las apuestas deportivas, hay que hacer la tarea: conocer los equipos, los jugadores, las fases de los campeonatos, qué necesita el equipo en un partido, qué jugadores están sancionados, cuáles lesionados, si llovió, si la barra está animada, etc.
							</p>

						</div>


					</div>
				</Zoom>
			</div>
			<div className='col-12 col-sm-4 middle-col'>
				<Zoom triggerOnce>

					<h3 className='bottomContentSubTitle'>
						Conocer Tus Probabilidades
					</h3>
					<div className='bottomContentText'>
						<p>
							Por supuesto, hay que tener un plan. En este determinamos ciertos parámetros que van a definir nuestro estilo para apostar: es clave establecer la cantidad de dinero que jugar y cómo distribuirlo entre las apuestas que interesan. Cada campeonato, cada equipo y cada jugador ofrece probabilidades diferentes, por lo que se debe estimar cuáles son esas probabilidades y con cuáles jugar.
						</p>
						<p>
							Es claro que, entre más se juegue, más grandes pueden ser las ganancias (o las pérdidas); por lo tanto, es fundamental ser profesionales y repartir los huevos en diferentes canastas, pues la idea es conseguir un balance que dé la comodidad suficiente para disfrutar el juego.
						</p>
					</div>
					<h3 className='bottomContentSubTitle'>Aprender las Estrategias</h3>
					<div className='bottomContentText'>
						<p>
							Para lograr resultados contundentes es necesario tener una estrategia. Cada quien define la propia según sus conocimientos, expectativas y todo lo que ha tenido en cuenta para sus decisiones. Hay que entrar a la cancha para entender cómo y por dónde jugar.
						</p>
						<p>
							Existen muchas estrategias que le funcionan a otras personas y que te pueden servir de referencia. Esta es una excelente ayuda para abrirse camino mientras se aprende. Una estrategia clara puede asegurar ganancias con las apuestas deportivas. Esta es una experiencia cargada de emociones: aferrarte a tu estrategia ayudará a gestionar mejor las emociones y apostar profesionalmente.
						</p>
						<p>
							En resumen:
						</p>
						<ul>
							<li>Conoce tu cancha, tu equipo y el momento</li>
							<li>Define tus herramientas</li>
							<li>Sigue tu estrategia</li>
							<li>Sácala del estadio</li>
						</ul>
						<h3 className='bottomContentSubTitle'>
							Tips Apuestas Deportivas Responsables
						</h3>

						<p>
							Partamos de la claridad de que aquí estamos jugando, como profesionales, pero jugando; por lo tanto, tiene que ser divertido. Como en todo juego, unas veces vamos a ganar, y otras, no tanto. Es raro un equipo que haga un campeonato completo sin goles en contra y nunca ves alguno que se retire porque perdió un partido. Aprende a celebrar las victorias y gestionar las derrotas, como los profesionales. Haz apuestas deportivas seguras. Esto no quiere decir que la probabilidad de ganar vaya a ser 100%, quiere decir que tu apuesta te genere tranquilidad, que tengas la seguridad de haber jugado con base en lo que sabes para hacer esa apuesta deportiva.
						</p>
						<p>
							Apuesta siempre lo que puedes, nunca más. Son muchas las emociones que se viven en este apasionante mundo, así que es necesario gestionarlas y amarrarlas a tu estrategia. Establece límites y respétalos. Una buena idea es distribuir el presupuesto por días, partidos, campeonatos o como prefieras. Queremos que la pases bien y nos visites cuantas veces quieras; por eso, repartir tu presupuesto asegurará que puedas hacerlo.
						</p>

					</div>
				</Zoom>
			</div>
			<div className='col-12 col-sm-4 right-col'>
				<Zoom triggerOnce>
					<p>
						Muchos profesionales encuentran útil considerar el dinero apostado como dinero que ya se fue. Si se gana la apuesta y cobras ganancias, maravilloso: ¡celebra! Y, si una apuesta no sale, pues ya te habías despedido de ese monto y será más fácil digerirlo. Nunca apuestes para recuperar. Lo que se perdió se perdió y ya está en el pasado. Las oportunidades de ganar están adelante, en lo que queda por jugar. Apuesta siempre con la mirada al frente.
					</p>
					<p>
						Zapatero a tus zapatos. Evita jugar en escenarios que no conoces: has hecho un gran esfuerzo y te has profesionalizado en tus deportes, equipos y jugadores, así que concéntrate en ellos. Meterte en escenarios que desconoces quizá no vaya a darte resultados tan buenos como cuando juegas en terreno conocido.
					</p>
					<h3 className='bottomContentSubTitle'>¿Por qué Codere es el lugar más seguro para hacer apuestas deportivas en Colombia?</h3>
					<div className='bottomContentText'>
						<p>En el país contamos con un equipo humano de más de 100 personas dedicadas a crear experiencias únicas en todas nuestras plataformas y salas de juego. Todos nuestros procesos están diseñados, operados y vigilados por personas y tecnologías especializadas en la industria.</p>
						<p>40 años de presencia en el mundo, creciendo consistentemente como multinacional, respaldan todas nuestras operaciones y esto nos ha permitido dominar el know-how de la industria y ofrecer plataformas totalmente confiables y seguras.</p>
						<p>En Colombia operamos bajo la vigilancia de Coljuegos cumpliendo con toda la legislación vigente. Todas nuestras transacciones y plataformas cumplen los más altos estándares en seguridad y privacidad de la industria.</p>

					</div>

					<h2 className='bottomContentTitle'>
						Casino Online de Codere
					</h2>
					<p>En Codere tienes mucho más que apuestas deportivas. Quizás, ya nos conozcas por nuestra presencia a lo largo del territorio nacional con nuestras exclusivas salas de juegos: Casino Crown, Mundo Fortuna, Fantasía Royal y Star Casino Games. Ahora, es el momento para que nos conozcas en nuestro casino en línea, y sigas disfrutando de los mejores juegos de casino desde tu computador o tu dispositivo móvil.</p>
					<p>En nuestro <a className={'bottomContentLink'} href='https://www.codere.com.co/casino'>casino online</a> encontrarás todas las mesas y máquinas que te puedas imaginar: <a
						className={'bottomContentLink'} href='https://www.codere.com.co/blackjack'
					>BlackJack</a>, Póker, <a className={'bottomContentLink'} href='https://www.codere.com.co/ruleta'>Ruleta</a>, <a
						className={'bottomContentLink'} href='https://www.codere.com.co/slots'
					>tragamonedas</a>, Video Bingo y mucho más. Puedes recorrer nuestras salas y escoger el juego que más te divierta, siempre con toda la tranquilidad y seguridad que solo Codere puede ofrecerte.
					</p>
					<p>Ningún otro casino online en Colombia te va a consentir tanto como Crown Casino. Siempre tendremos sorpresas, promociones, bonos y mucho más para ti. Todos nuestros esfuerzos buscan asegurarte una experiencia de casino increíble y haremos siempre todo lo que esté en nuestras manos para que así sea.</p>


				</Zoom>
			</div>
		</div>
		<Table striped bordered hover variant='dark'>
			<tbody>
				<tr>
					<td>🏆 Inicio de operaciones</td>
					<td>1984</td>
				</tr>
				<tr>
					<td>⚽ Apuestas Deportivas</td>
					<td>Apuestas deportivas futbol en vivo, Apuestas Champions League, Apuestas NBA y más</td>
				</tr>
				<tr>
					<td>🎲 Licencia</td>
					<td>C1901 15 de noviembre de 2022 al 10 noviembre de 2025</td>
				</tr>
				<tr>
					<td>✔️ Moneda</td>
					<td>COP</td>
				</tr>
				<tr>
					<td>💰 Depósito mínimo</td>
					<td>$8.000 COP</td>
				</tr>
				<tr>
					<td>💸 Límites de pago</td>
					<td>desde $50.000 pesos hasta $1.500.000 pesos por transacción.</td>
				</tr>
				<tr>
					<td>💳 Formas de Pago</td>
					<td>Visa, MasterCard, PSE, PAyU, tpaga, efecty, Dimonex, Punto Red, Daviplata, Via Baloto</td>
				</tr>
			</tbody>
		</Table>

		<section id='acc-section'>

			<h2 className='bottomContentTitle'>
				Preguntas frecuentes del Casino Online Codere
			</h2>

			<Accordion
				className='content-accordion'
				defaultActiveKey={["0"]}
				alwaysOpen
			>
				{answers.map((answer, index) => {
					return (<Accordion.Item key={index} eventKey={index}>
						<Accordion.Header as='h3'>
							<p>{questions[index]}</p>
						</Accordion.Header>
						<Accordion.Body>
							<p>{answer}</p>
						</Accordion.Body>
					</Accordion.Item>);
				})}
			</Accordion>

			<h3 className='bottomContentSpecialTitle'>¡ANÍMATE Y DESCUBRE TODAS LAS VENTAJAS QUE TE OFRECE CODERE!</h3>
			<div className='bottomContentPromoTitle'>La emoción del deporte y del casino al alcance de tu mano</div>
			<a
				role='button' tabIndex='0' href='https://m.codere.com.co/deportescolombia/#/RegistroCONewPage' rel='nofollow'
				className='registrate-button  bottomContentPromoButton btn btn-primary'
			>Regístrate Ahora</a>
			<div className='bottomContentSeperator'></div>

			<div className='row tg78dRea'>
				<div className='col-6 col-sm-2 '>
					<a href='https://codere.onelink.me/ymBn/bec1421' rel="noreferrer" target='_blank'><img
						className='logoBottomImg' src='https://www.codere.com.co/_catalogs/masterpage/codere/img/FooterdescargaIos.png' alt="Codere Colombia"
					/>
					</a>
				</div>
				<div className='col-6 col-sm-2 '>
					<a href='https://codere.onelink.me/ymBn/bec1421' rel="noreferrer" target='_blank'><img
						className='logoBottomImg' src='https://www.codere.com.co/_catalogs/masterpage/codere/img/android.webp' alt="Codere Colombia"
					/></a>
				</div>
				<div className='col-12 col-sm-2 logoBottomImgCodereLogoSP'>
					<img className='logoBottomImg' src='https://www.codere.com.co/_catalogs/masterpage/codere/img/Codere_PastillaRealMadrid.webp' alt="Codere Colombia" /></div>
				<div className='col-4 col-sm-2 '><img
					className='logoBottomImg logoBottomImg3ssa3' src='https://www.codere.com.co/_catalogs/masterpage/codere/img/CasinoFantasiaRoyal.webp' alt="Codere Colombia"
				/>
				</div>
				<div className='col-4 col-sm-2 '><img
					className='logoBottomImg logoBottomImg3ssa3' src='https://www.codere.com.co/_catalogs/masterpage/codere/img/logo_crown.webp' alt="Codere Colombia"
				/></div>

				<div className='col-4 col-sm-2 '><img
					className='logoBottomImg logoBottomImg3ssa3' src='https://www.codere.com.co/_catalogs/masterpage/codere/img/Logo-MF-Blanco.webp' alt="Codere Colombia"
				/>
				</div>
			</div>


		</section>
	</div>);
}

export default Content;
