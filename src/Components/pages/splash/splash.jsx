import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import "@fontsource/roboto-condensed";
import React, { useState, useEffect, useMemo } from "react";
import CookieConsent from "react-cookie-consent";

import articleStructuredData from "./articleStructuredData.json";
import MySwiper from "../../Parts/MySwiper";
import Games from "../../Parts/Games";
import Content from "../../Parts/Content";
import "../../Parts/CSS/App.css";

const Splash = (props) => {
  const regis = "https://m.codere.com.co/deportescolombia/#/RegistroCONewPage";
  const [showTimer, setShowTimer] = useState(true);

  return (
    <>
      <Helmet>
        <title>
        Apuestas Deportivas y Casino » Bono de $100.000 | Codere®
        </title>
        <link rel="canonical" href="https://www.codere.com.co/" />
        <meta
          name="description"
          content="La casa de apuestas deportivas y casino online #1 en Colombia. Juega en línea Blackjack, ruleta, slots y apuesta en tus deportes favoritos ⚽."
        ></meta>
      </Helmet>

      <div id="first-section">
        <CookieConsent
          cookieName="codere_cookie"
          expires={365}
          buttonText="- Aceptar -"
          buttonClasses="cookie-btn"
          overlay={false}
          cookieValue={"accepted"}
          extraCookieOptions={{ domain: ".codere.com.co" }}
          overlayClasses="cookie-overlay"
          containerClasses="cookie-container"
          contentClasses="cookie-content"
        >
          <h3>Uso Cookies</h3>
          Utilizamos cookies propias y de terceros para mejorar tu
          accesibilidad, personalizar, analizar tu navegación, así como para
          mostrar anuncios basados en tus intereses. Si sigues navegando,
          consideramos que aceptas su uso. Puedes obtener más información en
          nuestra{" "}
          <a href="https://www.codere.com.co/Paginas/Pol%C3%ADtica-de-cookies.aspx">
            política de cookies
          </a>
          .
        </CookieConsent>
        <MySwiper regis={regis} flag={props.flag} setShowTimer={setShowTimer} />
      </div>

      <Games flag={props.flag} />
      <Content />
    </>
  );
};

<Outlet />;
export default Splash;
