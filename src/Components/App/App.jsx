import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect, useMemo} from "react";
import {Helmet} from "react-helmet";

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
	Navigate,
} from "react-router-dom";
import {isMobile} from "react-device-detect";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ApuestasMundialFifa from "../pages/apuestas-mundial-fifa/ApuestasMundialFifa";
import EventosDeportivos from "../pages/eventosDeportivos/EventosDeportivos";
import ApuestasMundialBaloncesto from "../pages/apuestasMundialBaloncesto/ApuestasMundialBaloncesto";
import ApuestasJuegoDeLasEstrellas from "../pages/apuestasJuegoDeLasEstrellas/ApuestasJuegoDeLasEstrellas";
import ApuestasSuperbowl from "../pages/apuestasSuperbowl/ApuestasSuperbowl";
import StickyFooter from "../Parts/StickyFooter";
import AQueApostar from "../pages/ayuda/apuestas/aQueApostar/aQueApostar";

import Splash from "../pages/splash/splash";

import {Page404, Redirect} from "../pages";
import Blackjack from "../pages/casino/blackjack";
import Casino from "../pages/casino/casino";
import Ruleta from "../pages/casino/ruleta";
import Slots from "../pages/casino/slots";
import Jackpots from "../pages/casino/jackpots";
import Baccarat from "../pages/casino/baccarat";
import casinoEnVivo from "../pages/casino/casinoEnVivo";
import CasinoEnVivo from "../pages/casino/casinoEnVivo";
import Bingo from "../pages/casino/bingo";

export const isMobileContext = React.createContext();
export const isMobileDT = isMobile;

const App = () =>
{

	let fontUrl;
	console.log(window.location.hostname)
	switch (window.location.hostname) {
		case 'localhost':
			fontUrl = "https://colambiastage.coderetech.com/Fonts/HighSchool-V3.1.c78c7153ed9023134905.ttf";
			break;
		case 'colambiastage.coderetech.com':
			fontUrl = 'https://colambiastage.coderetech.com/Fonts/HighSchool-V3.1.c78c7153ed9023134905.ttf';
			break;
		case 'codere.com.co':
			fontUrl = 'https://www.codere.com.co/Fonts/HighSchool-V3.1.c78c7153ed9023134905.ttf';
			break;
		default:
			fontUrl = 'https://www.codere.com.co/Fonts/HighSchool-V3.1.c78c7153ed9023134905.ttf';
	}

	const [flag, setFlag] = useState(isMobile);
	const [windowSize, setWindowSize] = useState({
		width : undefined,
		height: undefined,
	});

	useEffect(() =>
	{
		if (windowSize.width <= 768 || isMobile) setFlag(true);
		else setFlag(false);
		console.log("isMobile");
	}, [windowSize]);

	useEffect(() =>
	{
		function handleResize()
		{
			setWindowSize({
				width : window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Router>
			<div className="App">
				<Helmet>
					<style type="text/css">
						{`
                            @font-face {
                                font-family: Codere;
                                src: url(${fontUrl});
                                font-display: fallback;
                               
                             }
                        `}
					</style>
				</Helmet>
				<Header flag={flag}/>
				<main className="mainSeoPagesColombia">
					<Routes>
						<Route exact path="/" element={<Splash flag={flag}/>}/>
						<Route exact path="eventos-deportivos">
							<Route
								exact
								path=""
								element={<EventosDeportivos flag={flag}/>}
							/>
							<Route
								exact
								path="apuestas-mundial-fifa"
								element={<ApuestasMundialFifa/>}
							/>
							<Route
								exact
								path="apuestas-mundial-baloncesto"
								element={<ApuestasMundialBaloncesto/>}
							/>
							<Route
								exact
								path="apuestas-juego-de-las-estrellas"
								element={<ApuestasJuegoDeLasEstrellas/>}
							/>
							<Route
								exact
								path="apuestas-superbowl"
								element={<ApuestasSuperbowl/>}
							/>
						</Route>
						{/*SEO Casino */}
						<Route exact path="casino">

							<Route
								exact
								path=""
								element={<Casino flag={flag}/>}
							/>
							<Route
								exact
								path="casino-en-vivo"
								element={<CasinoEnVivo flag={flag}/>}
							/>
							<Route
								exact
								path="blackjack"
								element={<Blackjack flag={flag}/>}
							/>
							<Route
								exact
								path="ruleta"
								element={<Ruleta flag={flag}/>}
							/>
							<Route
								exact
								path="slots"
								element={<Slots flag={flag}/>}
							/>
							<Route
								exact
								path="jackpots"
								element={<Jackpots flag={flag}/>}
							/>
							<Route
								exact
								path="baccarat"
								element={<Baccarat flag={flag}/>}
							/>
							<Route
								exact
								path="video-bingo"
								element={<Bingo flag={flag}/>}
							/>
						</Route>

						{/* Ayuda  */}
						<Route exact path="apuestas">
							<Route exact path="aQueApostar" element={<AQueApostar/>}/>
						</Route>
					</Routes>
				</main>
				<Outlet/>
				{flag ? <StickyFooter/> : null}
				<Footer/>
			</div>
		</Router>
	);
};

export default App;
