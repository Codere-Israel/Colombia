import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Navigations(props) {
  const prefix = !props.type
    ? "https://www.codere.com.co/Colombia/images/seo-sport/icons/"
    : "https://www.codere.com.co/Colombia/images/casinoIcons/";

  const eNavStyleDesktop = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "2rem",
  };
  const eNavStyleMobile = {
    display: "flex",
    alignItems: "center",
    justifyContent: `${props.type ? "unset" : "center"}`,
    textAlign: "center",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    gap: "1rem",
  };

  const navs = [
    [
      {
        icon: "mundial",
        title: "Mundial",
        url: "/eventos-deportivos/apuestas-mundial-fifa",
      },
      {
        icon: "baloncesto",
        title: "Baloncesto",
        url: "/eventos-deportivos/apuestas-mundial-baloncesto",
      },
      {
        icon: "mlb",
        title: "MLB",
        url: "/eventos-deportivos/apuestas-juego-de-las-estrellas",
      },
      {
        icon: "superbowl",
        title: "Superbowl",
        url: "/eventos-deportivos/apuestas-superbowl",
      },
    ],
    [
      {
        icon: "casino",
        title: "Casino",
        url: "/casino",
      },
      {
        icon: "en-vivo",
        title: "En Vivo",
        url: "/casino/casino-en-vivo",
      },
      {
        icon: "slots",
        title: "Slots",
        url: "/casino/slots",
      },
      {
        icon: "blackjack",
        title: "Blackjack",
        url: "/casino/blackjack",
      },
      {
        icon: "ruleta",
        title: "Ruleta",
        url: "/casino/ruleta",
      },
      {
        icon: "jackpots",
        title: "Jackpots",
        url: "/casino/jackpots",
      },
      {
        icon: "baccarat",
        title: "Baccarat",
        url: "/casino/baccarat",
      },
      {
        icon: "bingo",
        title: "Bingo",
        url: "/casino/video-bingo",
      },
    ],
  ];

  return (
    <div
      className="e-nav"
      style={!isMobile ? eNavStyleDesktop : eNavStyleMobile}
    >
      {navs[props.type].map((n, k) => (
        <Link
          to={n.url}
          style={{ color: "#fff", textDecoration: "none" }}
          key={k}
        >
          <LazyLoadImage
            src={prefix + n.icon + ".svg"}
            className={props.index === k + 1 ? "colored" : ""}
            style={isMobile ? { height: 32 } : { height: "2rem" }}
          />
          <span className={props.index === k + 1 ? "colored" : ""}>
            {n.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
