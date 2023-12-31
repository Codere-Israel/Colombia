import { Route, Routes, useLocation } from "react-router-dom";
import Navigations from "../Components/seo/Navigations";
import { useEffect, useState } from "react";
import EventosDeportivos from "../Components/seo/sports/EventosDeportivos";
import Mundial from "../Components/seo/sports/events/Mundial";
import Baloncesto from "../Components/seo/sports/events/Baloncesto";
import MLB from "../Components/seo/sports/events/MLB";
import Superbowl from "../Components/seo/sports/events/Superbowl";
import Casino from "../Components/seo/casino/Casino";
import Blackjack from "../Components/seo/casino/Blackjack";
import Slots from "../Components/seo/casino/Slots";
import Baccarat from "../Components/seo/casino/Baccarat";
import Bingo from "../Components/seo/casino/Bingo";
import Inicio from "../Components/Inicio";
import Jackpots from "../Components/seo/casino/Jackpots";
import Ruleta from "../Components/seo/casino/Ruleta";
import CasinoEnVivo from "../Components/seo/casino/CasinoEnVivo";
import AQueApostar from "../Components/seo/aQueApostar/AQueApostar";
import InicioSegmented from "../Components/InicioSegmented";
import { observer } from "mobx-react";
import myStore from "../mobX/Store";

const MyRouting = observer(() => {
  const location = useLocation();
  const [activated, setActivated] = useState(0);

  const cookieExist = (name) => {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      if (cookie.startsWith(name + "=")) {
        return cookie.substring(name.length + 1);
      }
    }

    return null;
  };

  // console.log(location);
  if (location.search.includes("tlv-segmented"))
    document.cookie = "tlv-segmented=true";
  myStore.updateSegmentedValue(cookieExist("tlv-segmented"));

  useEffect(() => {
    window.scrollTo(0, 0);
    setActivated(activeHandler);
  }, [location.pathname]);

  const activeHandler = () => {
    switch (location.pathname) {
      default:
        return 0;
      case "/casino":
      case "/eventos-deportivos/apuestas-mundial-fifa":
        return 1;
      case "/casino/casino-en-vivo":
      case "/eventos-deportivos/apuestas-mundial-baloncesto":
        return 2;
      case "/casino/slots":
      case "/eventos-deportivos/apuestas-juego-de-las-estrellas":
        return 3;
      case "/casino/blackjack":
      case "/eventos-deportivos/apuestas-superbowl":
        return 4;
      case "/casino/ruleta":
        return 5;
      case "/casino/jackpots":
        return 6;
      case "/casino/baccarat":
        return 7;
      case "/casino/video-bingo":
        return 8;
    }
  };

  return (
    <>
      {location.pathname.includes("eventos") ||
      location.pathname.includes("casino") ? (
        <Navigations
          index={activated}
          type={location.pathname.includes("eventos") && !location.hash ? 0 : 1}
        />
      ) : null}
      <Routes>
        {!myStore.segmented ? (
          <Route exact path="/" element={<Inicio flag={myStore.flag} />} />
        ) : (
          <Route
            exact
            path="/"
            element={<InicioSegmented flag={myStore.flag} />}
          />
        )}
        <Route exact path="eventos-deportivos">
          <Route
            exact
            path=""
            element={<EventosDeportivos flag={myStore.flag} />}
          />
          <Route
            exact
            path="apuestas-mundial-fifa"
            element={<Mundial flag={myStore.flag} />}
          />
          <Route
            exact
            path="apuestas-mundial-baloncesto"
            element={<Baloncesto flag={myStore.flag} />}
          />
          <Route
            exact
            path="apuestas-juego-de-las-estrellas"
            element={<MLB flag={myStore.flag} />}
          />
          <Route
            exact
            path="apuestas-superbowl"
            element={<Superbowl flag={myStore.flag} />}
          />
        </Route>
        {/*SEO Casino */}
        <Route exact path="casino">
          <Route exact path="" element={<Casino flag={myStore.flag} />} />
          <Route
            exact
            path="casino-en-vivo"
            element={<CasinoEnVivo flag={myStore.flag} />}
          />
          <Route
            exact
            path="blackjack"
            element={<Blackjack flag={myStore.flag} />}
          />
          <Route exact path="ruleta" element={<Ruleta flag={myStore.flag} />} />
          <Route exact path="slots" element={<Slots flag={myStore.flag} />} />
          <Route
            exact
            path="jackpots"
            element={<Jackpots flag={myStore.flag} />}
          />
          <Route
            exact
            path="baccarat"
            element={<Baccarat flag={myStore.flag} />}
          />
          <Route
            exact
            path="video-bingo"
            element={<Bingo flag={myStore.flag} />}
          />
        </Route>

        {/* Ayuda  */}
        <Route exact path="apuestas">
          <Route exact path="aQueApostar" element={<AQueApostar />} />
        </Route>
      </Routes>
    </>
  );
});

export default MyRouting;
