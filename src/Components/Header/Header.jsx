import {
	Accordion,
	Button,
	Container,
	Dropdown,
	Nav,
	Navbar,
} from "react-bootstrap";
import {isMobileContext} from "../App/App";
import React, {useState} from "react";
// import Axios from "axios";
import {elastic as Menu} from "react-burger-menu";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
	faAngleDown,
	faAngleRight,
	faBullhorn,
	faCirclePlay,
	faCoins,
	faCrosshairs,
	faHeart,
	faStar,
} from "@fortawesome/free-solid-svg-icons";
import {faCodeFork} from "@fortawesome/free-solid-svg-icons/faCodeFork";
import {faList} from "@fortawesome/free-solid-svg-icons/faList";
import {faCannabis} from "@fortawesome/free-solid-svg-icons/faCannabis";
import {faFutbol} from "@fortawesome/free-solid-svg-icons/faFutbol";
import {faBaseball} from "@fortawesome/free-solid-svg-icons/faBaseball";
import "./Header.css";
import {NavLink, Link} from "react-router-dom";
import DropdownMenuComponent from "../Parts/DropdownMenuComponent";

function Header(props)
{
	const regLink =
		      "https://m.codere.com.co/deportescolombia/#/RegistroCONewPage";
	const acceder =
		      "https://m.codere.com.co/deportescolombia/#/HomePage?openlogin=true";
	const LOGO =
		      "https://www.codere.com.co/_catalogs/masterpage/codere/images/splash/SponsorsLogoGrey.png";

	// Hooks

	const [show, setShow] = useState(false);
	const [hamburger, setHamburger] = useState(false);
	const hamburgerHandler = (evt) =>
	{
		// console.log(evt.target.className);
		let flag = false;
		if (!hamburger && evt.target.id.includes("react-burger-menu-btn"))
		{
			evt.target.parentNode.classList.add("open");
			flag = true;
		} else if (evt.target.id.includes("react-burger-menu-btn"))
		{
			evt.target.parentNode.classList.remove("open");
			flag = true;
		} else if (
			evt.target.className.includes("bm-overlay") ||
			evt.target.id.includes("react-burger-cross-btn")
		)
		{
			document
				.getElementById("react-burger-menu-btn")
				.parentNode.classList.remove("open");
			flag = true;
		}
		if (flag) setHamburger(!hamburger);
	};

	const DropdownMenuDesktop = [
		{
			"name": "Casino",
			"path": "/casino"
		},
		{
			"name": "Casino en Vivo",
			"path": "/casino/casino-en-vivo"
		},
		{
			"name": "Ruleta",
			"path": "/casino/ruleta"
		},
		{
			"name": "Slots",
			"path": "/casino/slots"
		},
		{
			"name": "Blackjack",
			"path": "/casino/blackjack"
		},
		{
			"name": "Jackpots",
			"path": "/casino/jackpots"
		},
		{
			"name": "Baccarat",
			"path": "/casino/baccarat"
		},
		{
			"name": "Video Bingo",
			"path": "/casino/video-bingo"
		},
		{
			"name": "Eventos deportivos",
			"path": "/eventos-deportivos"
		}
	]

	return (
		<Navbar className="header_nav stroke" variant="dark">
			{props.flag ? (
				<div id="father">
					<div id="outer-container" onClick={hamburgerHandler}>
						<Menu
							id="elastic"
							left
							customCrossIcon={false}
							pageWrapId={"page-wrap"}
							outerContainerId={"outer-container"}
						>
							<a
								href="https://m.codere.com.co/deportescolombia/#/HomePage"
								rel="nofollow"
							>
								<FontAwesomeIcon icon={faCrosshairs}/>
								Deportes
								<FontAwesomeIcon icon={faAngleRight}/>
							</a>
							<a
								href="https://m.codere.com.co/deportescolombia/#/DirectosPage"
								rel="nofollow"
							>
								<FontAwesomeIcon icon={faCirclePlay}/>
								Directo
								<FontAwesomeIcon icon={faAngleRight}/>
							</a>
							<a
								href="https://m.codere.com.co/deportescolombia/#/SlotsPage"
								rel="nofollow"
							>
								<FontAwesomeIcon icon={faCoins}/>
								Crown
								<FontAwesomeIcon icon={faAngleRight}/>
							</a>
							<a
								href="https://m.codere.com.co/deportescolombia/#/CasinoPage"
								rel="nofollow"
							>
								<FontAwesomeIcon icon={faCoins}/>
								Casino
								<FontAwesomeIcon icon={faAngleRight}/>
							</a>
							<a
								href="https://m.codere.com.co/deportes/#/CasinoenVivoPage"
								rel="nofollow"
							>
								<FontAwesomeIcon icon={faList}/>
								Casino en vivo
								<FontAwesomeIcon icon={faAngleRight}/>
							</a>
							<a
								href="https://m.codere.com.co/deportescolombia/#/PromotionsPage"
								rel="nofollow"
							>
								<FontAwesomeIcon icon={faBullhorn}/>
								Promociones
								<FontAwesomeIcon icon={faAngleRight}/>
							</a>
							<a
								href="https://m.codere.com.co/deportescolombia/#/NearestLocalPage"
								rel="nofollow"
							>
								<FontAwesomeIcon icon={faCannabis}/>
								Locales
								<FontAwesomeIcon icon={faAngleRight}/>
							</a>
							<a href="/ayuda/deposito-en-efectivo" rel="nofollow">
								<FontAwesomeIcon icon={faBullhorn}/>
								Recargas Y Retiros
								<FontAwesomeIcon icon={faAngleRight}/>
							</a>
							{/*mobile*/}
							<Accordion className="hamb-accordion">
								<Accordion.Item eventKey="0">
									<Accordion.Header>¿Cómo jugar?</Accordion.Header>
									<Accordion.Body>
										<ul>
											<li>
												<a href="/casino">
													{/*<FontAwesomeIcon icon={faCoins}/>*/}
													Casino
													{/*<FontAwesomeIcon icon={faAngleRight}/>*/}
												</a>
											</li>
											<li>
												<a href="/casino/casino-en-vivo ">
													{/*<FontAwesomeIcon icon={faCoins}/>*/}
													Casino en Vivo
													{/*<FontAwesomeIcon icon={faAngleRight}/>*/}
												</a>
											</li>
											<li>
												<a href="/casino/ruleta">
													{/*<FontAwesomeIcon icon={faStar}/>*/}
													Ruleta
													{/*<FontAwesomeIcon icon={faAngleRight}/>*/}
												</a>
											</li>
											<li>
												<a href="/casino/slots">
													{/*<FontAwesomeIcon icon={faBaseball}/>*/}
													Slots
													{/*<FontAwesomeIcon icon={faAngleRight}/>*/}
												</a>
											</li>
											<li>
												<a href="/casino/blackjack">
													{/*<FontAwesomeIcon icon={faHeart}/>*/}
													Blackjack
													{/*<FontAwesomeIcon icon={faAngleRight}/>*/}
												</a>
											</li>
											<li>
												<a href="/casino/jackpots">
													{/*<FontAwesomeIcon icon={faFutbol}/>*/}
													Jackpots
													{/*<FontAwesomeIcon icon={faAngleRight}/>*/}
												</a>
											</li>

											<li>
												<a href="/casino/baccarat">
													{/*<FontAwesomeIcon icon={faFutbol}/>*/}
													Baccarat
													{/*<FontAwesomeIcon icon={faAngleRight}/>*/}
												</a>
											</li>

											<li>
												<a href="/casino/video-bingo">
													{/*<FontAwesomeIcon icon={faFutbol}/>*/}
													Video Bingo
													{/*<FontAwesomeIcon icon={faAngleRight}/>*/}
												</a>
											</li>

											<li>
												<NavLink to="/eventos-deportivos">
													{/*<FontAwesomeIcon icon={faHeart}/>*/}
													Eventos deportivos
													{/*<FontAwesomeIcon icon={faAngleRight}/>*/}
												</NavLink>
											</li>

										</ul>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</Menu>
						<main id="page-wrap"></main>
					</div>
					<a
						href="https://m.codere.com.co/deportescolombia/#/HomePage"
						rel="nofollow"
					>
						<img src={LOGO} alt="Logo Casa de Apuestas Codere - Real Madrid "/>
					</a>
					<div id="header_buttons">
						{/* onClick={handleShow} */}
						<Button
							href={acceder}
							className="acceder-button header_btn"
							rel="nofollow"
						>
							Acceder
						</Button>
						<Button
							href={regLink}
							className="registrate-button header_btn"
							rel="nofollow"
						>
							Regístrate
						</Button>
					</div>
				</div>
			) : (
				<Container>
					<a
						href="https://m.codere.com.co/deportescolombia/#/HomePage"
						rel="nofollow"
					>
						<img src={LOGO} alt="Logo Casa de Apuestas Codere - Real Madrid "/>
					</a>



					<Nav className="me-auto">
						<Nav.Link
							href="https://m.codere.com.co/deportescolombia/#/HomePage"
							rel="nofollow"
						>
							DEPORTES
						</Nav.Link>
						<Nav.Link
							href="https://m.codere.com.co/deportescolombia/#/DirectosPage"
							rel="nofollow"
						>
							DIRECTO
						</Nav.Link>
						<Nav.Link
							href="https://m.codere.com.co/deportescolombia/#/SlotsPage"
							rel="nofollow"
						>
							CROWN
						</Nav.Link>
						<Nav.Link
							href="https://m.codere.com.co/deportes/#/CasinoPage"
							rel="nofollow"
						>
							CASINO
						</Nav.Link>

						<Nav.Link
							href="https://m.codere.com.co/deportes/#/CasinoenVivoPage"
							rel="nofollow"
						>
							CASINO EN VIVO
						</Nav.Link>

						<Nav.Link
							href="https://m.codere.com.co/deportescolombia/#/PromotionsPage"
							rel="nofollow"
						>
							PROMOCIONES
						</Nav.Link>
						<Nav.Link
							href="https://m.codere.com.co/deportescolombia/#/NearestLocalPage"
							rel="nofollow"
						>
							LOCALES
						</Nav.Link>
						<Nav.Link href="/ayuda/deposito-en-efectivo" rel="nofollow">
							RECARGAS Y RETIROS
						</Nav.Link>
					</Nav>
					<DropdownMenuComponent menuItems={DropdownMenuDesktop} />
					<Button
						href={acceder}
						// onClick={handleShow}
						className="acceder-button header_btn"
						rel="nofollow"
					>
						Acceder
					</Button>
					<Button
						href={regLink}
						className="registrate-button header_btn"
						rel="nofollow"
					>
						Regístrate
					</Button>
				</Container>
			)}
		</Navbar>
	);
}

export default Header;
