import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useMemo } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import { isMobile } from "react-device-detect";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ApuestasMundialFifa from "../pages/apuestas-mundial-fifa/ApuestasMundialFifa";
import EventosDeportivos from "../pages/eventosDeportivos/EventosDeportivos";
import ApuestasMundialBaloncesto from "../pages/apuestasMundialBaloncesto/ApuestasMundialBaloncesto";
import ApuestasJuegoDeLasEstrellas from "../pages/apuestasJuegoDeLasEstrellas/ApuestasJuegoDeLasEstrellas";
import ApuestasSuperbowl from "../pages/apuestasSuperbowl/ApuestasSuperbowl";
import StickyFooter from "../Parts/StickyFooter";

import Splash from "../pages/splash/splash";

import { Page404, Redirect } from "../pages";

export const isMobileContext = React.createContext();
export const isMobileDT = isMobile;

const App = () => {
  const [flag, setFlag] = useState(isMobile);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (windowSize.width <= 768 || isMobile) setFlag(true);
    else setFlag(false);
    // console.log("isMobile");
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
    <Router>
      <div className="App">
        <isMobileContext.Provider value={flag}>
          <Header />
        </isMobileContext.Provider>
        <main className="mainSeoPagesColombia">
          <Routes>
            <Route exact path="testsplashreactseo" element={<Splash />} />
            <Route exact path="eventos-deportivos">
              <Route exact path="" element={<EventosDeportivos />} />
              <Route
                exact
                path="apuestas-mundial-fifa"
                element={<ApuestasMundialFifa />}
              />
              <Route
                exact
                path="apuestas-mundial-baloncesto"
                element={<ApuestasMundialBaloncesto />}
              />
              <Route
                exact
                path="apuestas-juego-de-las-estrellas"
                element={<ApuestasJuegoDeLasEstrellas />}
              />
              <Route
                exact
                path="apuestas-superbowl"
                element={<ApuestasSuperbowl />}
              />
            </Route>
          </Routes>
        </main>
        <Outlet />
        {flag ? <StickyFooter /> : null}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
