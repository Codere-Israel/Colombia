import { Accordion, Button, Container, Image, InputGroup, Nav, Navbar, } from "react-bootstrap";
import React, { useState } from "react";
import { elastic as Menu } from "react-burger-menu";

// import "./Header.css";
import { Link } from "react-router-dom";
import DropdownMenuComponent from "../Parts/DropdownMenuComponent";
import { observer } from "mobx-react";
import myStore from "../../mobX/Store";
import { Arrowrightw, Deportes, Withdrawal, Envivo, LocalesMenuIcon, Promociones, CasinoMenuIcon, Directo, Crown } from '../../icons';


const Header = observer (() => {
	const regLink = "https://m.codere.com.co/deportescolombia/#/RegistroCONewPage";
	const acceder = "https://m.codere.com.co/deportescolombia/#/HomePage?openlogin=true";
	const LOGO = new Date () <= new Date ("2023-12-30T22:00:00Z") && new Date () >= new Date ("2023-12-01T07:00:00Z") ? "https://www.codere.com.co/_catalogs/masterpage/codere/images/splash/christmassLogo.gif" : "https://www.codere.com.co/_catalogs/masterpage/codere/images/splash/SponsorsLogoGrey.png";

	// Hooks

	const [ onShow, setOnShow ] = useState ("");
	const [ hamburger, setHamburger ] = useState (false);
	const hamburgerHandler = () => {
		hamburger ? setOnShow ("") : setOnShow ("open");
		setHamburger ( !hamburger);
	}

	const seo_menu = [ {
		name: "Casino", path: "/casino",
	}, {
		name: "Casino en Vivo", path: "/casino/casino-en-vivo",
	}, {
		name: "Ruleta", path: "/casino/ruleta",
	}, {
		name: "Slots", path: "/casino/slots",
	}, {
		name: "Blackjack", path: "/casino/blackjack",
	}, {
		name: "Jackpots", path: "/casino/jackpots",
	}, {
		name: "Baccarat", path: "/casino/baccarat",
	}, {
		name: "Video Bingo", path: "/casino/video-bingo",
	}, {
		name: "Eventos deportivos", path: "/eventos-deportivos",
	}, ];

	return (<>
			<Navbar className="header_nav stroke" variant="dark">
				{myStore.flag ? (<div id="father">
						<div id="outer-container">
							<Menu
								id="elastic"
								left
								customCrossIcon={false}
								pageWrapId={"page-wrap"}
								outerContainerId={"outer-container"}
								burgerButtonClassName={onShow}
								isOpen={hamburger}
								onOpen={hamburgerHandler}
								onClose={hamburgerHandler}
							>
								<a
									href="https://m.codere.com.co/deportescolombia/#/HomePage"
									rel="nofollow"
								>
									<div className={"mobMenuSVGwrapper"}>
										<Deportes/>
										Deportes
									</div>
									<div className={'arrowrightw'}><Arrowrightw/></div>
								</a>
								<a
									href="https://m.codere.com.co/deportescolombia/#/DirectosPage"
									rel="nofollow"
								>
									<div className={"mobMenuSVGwrapper"}>

										<Directo/>
										Directo
									</div>
									<div className={'arrowrightw'}><Arrowrightw/></div>
								</a>
								<a
									href="https://m.codere.com.co/deportescolombia/#/SlotsPage"
									rel="nofollow"
								>
									<div className={"mobMenuSVGwrapper"}>

										<Crown/>
										Crown
									</div>
									<div className={'arrowrightw'}><Arrowrightw/></div>
								</a>
								<a
									href="https://m.codere.com.co/deportescolombia/#/CasinoPage"
									rel="nofollow"
								>
									<div className={"mobMenuSVGwrapper"}>

										<CasinoMenuIcon/>
										Casino
									</div>
									<div className={'arrowrightw'}><Arrowrightw/></div>
								</a>
								<a
									href="https://m.codere.com.co/deportes/#/CasinoenVivoPage"
									rel="nofollow"
								>
									<div className={"mobMenuSVGwrapper"}>

										<Envivo/>
										Casino en vivo
									</div>
									<div className={'arrowrightw'}><Arrowrightw/></div>
								</a>
								<a
									href="https://m.codere.com.co/deportescolombia/#/PromotionsPage"
									rel="nofollow"
								>
									<div className={"mobMenuSVGwrapper"}>

										<Promociones/>
										Promociones
									</div>
									<div className={'arrowrightw'}><Arrowrightw/></div>
								</a>
								<a
									href="https://m.codere.com.co/deportescolombia/#/NearestLocalPage"
									rel="nofollow"
								>
									<div className={"mobMenuSVGwrapper"}>

										<LocalesMenuIcon/>
										Locales
									</div>
									<div className={'arrowrightw'}><Arrowrightw/></div>
								</a>
								<a href="/ayuda/deposito-en-efectivo" rel="nofollow">
									<div className={"mobMenuSVGwrapper"}>

										<Withdrawal/>
										Recargas Y Retiros
									</div>
									<div className={'arrowrightw'}><Arrowrightw/></div>
								</a>
								{/*mobile*/}
								<Accordion className="hamb-accordion">
									<Accordion.Item eventKey="0">
										<Accordion.Header>¿Cómo jugar?</Accordion.Header>
										<Accordion.Body>
											<ul>
												{seo_menu.map ((item, k) => (<li key={k}>
														<Link to={item.path} onClick={hamburgerHandler}>
															{item.name}
															<Arrowrightw/>
														</Link>
													</li>))}
											</ul>
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</Menu>
							<main id="page-wrap"></main>
						</div>
						<div className="header-menu">
							<a
								href="https://m.codere.com.co/deportescolombia/#/HomePage"
								rel="nofollow"
							>
								<Image
									src={LOGO}
									style={myStore.segmented ? { left: "0" } : { left: "25px" }}
									alt="Logo Casa de Apuestas Codere - Real Madrid "
								/>
							</a>
							<div id="header_buttons">
								<Button
									href={acceder}
									className="acceder-button header_btn"
									rel="nofollow"
								>
									Acceder
								</Button>
								{!myStore.segmented ? (<Button
										href={regLink}
										className="registrate-button header_btn"
										rel="nofollow"
									>
										Regístrate
									</Button>) : (<></>)}
							</div>
						</div>
					</div>) : (<Container>
						<InputGroup className="header-group-left">
							<a
								href="https://m.codere.com.co/deportescolombia/#/HomePage"
								rel="nofollow"
							>
								<img
									src={LOGO}
									alt="Logo Casa de Apuestas Codere - Real Madrid "
								/>
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
						</InputGroup>
						<div className="header-group-right">
							<DropdownMenuComponent menuItems={seo_menu}/>
							<Button
								href={acceder}
								// onClick={handleShow}
								className="acceder-button header_btn"
								rel="nofollow"
							>
								Acceder
							</Button>
							{!myStore.segmented ? (<Button
									href={regLink}
									className="registrate-button header_btn"
									rel="nofollow"
								>
									Regístrate
								</Button>) : null}
						</div>
					</Container>)}
			</Navbar>
		</>);
});

export default Header;
