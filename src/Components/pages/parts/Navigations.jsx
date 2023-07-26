import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Navigations(props) {
  const prefix = "https://www.codere.com.co/Colombia/images/casinoIcons/";

  const eNavStyleDesktop = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "2rem",
  };

  const eNavStyleMobile = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "1rem",
  };

  const navs = [
    [
      {
        icon: "baloncesto",
        title: "Baloncesto",
        url: "/eventos-deportivos/apuestas-mundial-baloncesto",
      },
      {
        icon: "formula1",
        title: "Grand Prix",
        url: "/eventos-deportivos/apuestas-grand-prix",
      },
      {
        icon: "mundial",
        title: "Mundial",
        url: "/eventos-deportivos/apuestas-mundial-fifa",
      },
    ],
    [
      {
        icon: "casino",
        title: "Casino",
        url: "/casino",
      },
      {
        icon: "LiveDealers",
        title: "EnVivo",
        url: "/casino/casino-en-vivo",
      },
      {
        icon: "jackpots",
        title: "Jackpots",
        url: "/casino/jackpots",
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

  const location = useLocation();

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
      <div className="e-nav" style={!isMobile ? eNavStyleDesktop : eNavStyleMobile}>
        {navs[props.type].map((n, k) => (
            <Link
                className={activeLink === n.url ? " colored" : ""}
                to={n.url}
                style={{ color: "#fff", textDecoration: "none" }}
                key={k}
            >
              <LazyLoadImage
                  src={prefix + n.icon + ".svg"}
                  style={isMobile ? { height: 32 } : { height: "2rem" }}
              />
              <h5 className={activeLink === n.url ? "colored" : ""}>{n.title}</h5>
            </Link>
        ))}
      </div>
  );
}
