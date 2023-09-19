import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import CookieConsent from "react-cookie-consent";
import { isMobile } from "react-device-detect";
import Footer from "./Components/Footer";
import Header from "./Components/Header/Header";
import StickyFooter from "./Components/Parts/StickyFooter";
import MyRouting from "./routes/MyRouting";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react";
import myStore from "./mobX/Store";

export const isMobileContext = React.createContext();
export const isMobileDT = isMobile;

const App = observer(() => {
  let fontUrl;
  switch (window.location.hostname) {
    case "localhost":
      fontUrl =
        "https://colambiastage.coderetech.com/Fonts/HighSchool-V3.1.c78c7153ed9023134905.ttf";
      break;
    case "colambiastage.coderetech.com":
      fontUrl =
        "https://colambiastage.coderetech.com/Fonts/HighSchool-V3.1.c78c7153ed9023134905.ttf";
      break;
    case "codere.com.co":
      fontUrl =
        "https://www.codere.com.co/Fonts/HighSchool-V3.1.c78c7153ed9023134905.ttf";
      break;
    default:
      fontUrl =
        "https://www.codere.com.co/Fonts/HighSchool-V3.1.c78c7153ed9023134905.ttf";
  }

  const [flag, setFlag] = useState(isMobile);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (windowSize.width <= 768 || isMobile) {
      myStore.updateFlag(true);
    } else myStore.updateFlag(false);
  }, [windowSize]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
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
        <Header />
        <main className="mainSeoPagesColombia">
          <MyRouting />
          <Outlet />
        </main>
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
        {flag ? <StickyFooter /> : null}
        <Footer />
      </div>
    </>
  );
});

export default App;
