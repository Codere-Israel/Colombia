import { observer } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

// Codere StickyFooter Footer \\
const StickyFooter = observer(() => {
  const data = [
    {
      url: "",
      text: "deportes",
      icon: null,
    },
    {
      url: "",
      text: "directo",
      icon: null,
    },
    {
      url: "",
      text: "casino",
      icon: null,
    },
  ];

  const segmented_data = [
    {
      url: "",
      text: "deportes",
      icon: {},
    },
    {
      url: "",
      text: "deportes",
      icon: {},
    },
    {
      url: "",
      text: "deportes",
      icon: {},
    },
  ];

  return (
    <div className="sticky-footer-contatiner">
      <a
        href="https://m.codere.com.co/deportescolombia/#/HomePage"
        className="sticky-item"
        rel="nofollow"
      >
        DEPORTES
      </a>
      <a
        href="https://m.codere.com.co/deportes/#/CasinoPage?filter=Casino"
        className="sticky-item"
        rel="nofollow"
      >
        ★ CASINO ★
      </a>
      <a
        href="https://m.codere.com.co/deportescolombia/#/DirectosPage"
        className="sticky-item"
        rel="nofollow"
      >
        EN VIVO
      </a>
    </div>
  );
});

export default StickyFooter;
