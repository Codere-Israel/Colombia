import {
  Accordion,
  Button,
  Container,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import React, { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBullhorn,
  faCirclePlay,
  faCoins,
  faCrosshairs,
  faLocationDot,
  faList,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
// import "./Header.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import DropdownMenuComponent from "../Parts/DropdownMenuComponent";

function Header(props) {
  const regLink =
    "https://m.codere.com.co/deportescolombia/#/RegistroCONewPage";
  const acceder =
    "https://m.codere.com.co/deportescolombia/#/HomePage?openlogin=true";
  const LOGO =
    "https://www.codere.com.co/_catalogs/masterpage/codere/images/splash/SponsorsLogoGrey.png";

  // Hooks

  const [onShow, setOnShow] = useState("");
  const [hamburger, setHamburger] = useState(false);
  const hamburgerHandler = () => {
    hamburger ? setOnShow("") : setOnShow("open");
    setHamburger(!hamburger);
  };

  const seo_menu = [
    {
      name: "Casino",
      path: "/casino",
    },
    {
      name: "Casino en Vivo",
      path: "/casino/casino-en-vivo",
    },
    {
      name: "Ruleta",
      path: "/casino/ruleta",
    },
    {
      name: "Slots",
      path: "/casino/slots",
    },
    {
      name: "Blackjack",
      path: "/casino/blackjack",
    },
    {
      name: "Jackpots",
      path: "/casino/jackpots",
    },
    {
      name: "Baccarat",
      path: "/casino/baccarat",
    },
    {
      name: "Video Bingo",
      path: "/casino/video-bingo",
    },
    {
      name: "Eventos deportivos",
      path: "/eventos-deportivos",
    },
  ];

  return (
    <>
      <Navbar className="header_nav stroke" variant="dark">
        {props.flag ? (
          <div id="father">
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
                  <FontAwesomeIcon icon={faCrosshairs} />
                  Deportes
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a
                  href="https://m.codere.com.co/deportescolombia/#/DirectosPage"
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faCirclePlay} />
                  Directo
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a
                  href="https://m.codere.com.co/deportescolombia/#/SlotsPage"
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faCrown} />
                  Crown
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a
                  href="https://m.codere.com.co/deportescolombia/#/CasinoPage"
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faCoins} />
                  Casino
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a
                  href="https://m.codere.com.co/deportes/#/CasinoenVivoPage"
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faList} />
                  Casino en vivo
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a
                  href="https://m.codere.com.co/deportescolombia/#/PromotionsPage"
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faBullhorn} />
                  Promociones
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a
                  href="https://m.codere.com.co/deportescolombia/#/NearestLocalPage"
                  rel="nofollow"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                  Locales
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
                <a href="/ayuda/deposito-en-efectivo" rel="nofollow">
                  <FontAwesomeIcon icon={faBullhorn} />
                  Recargas Y Retiros
                  <FontAwesomeIcon icon={faAngleRight} />
                </a>
                {/*mobile*/}
                <Accordion className="hamb-accordion">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>¿Cómo jugar?</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        {seo_menu.map((item, k) => (
                          <li key={k}>
                            <Link to={item.path} onClick={hamburgerHandler}>
                              {item.name}
                              <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                          </li>
                        ))}
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
              <img
                src={LOGO}
                alt="Logo Casa de Apuestas Codere - Real Madrid "
              />
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
              <DropdownMenuComponent menuItems={seo_menu} />
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
            </div>
          </Container>
        )}
      </Navbar>
    </>
  );
}

export default Header;
