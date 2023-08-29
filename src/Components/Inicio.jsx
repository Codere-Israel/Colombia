import { Helmet } from "react-helmet";
import "@fontsource/roboto-condensed";
import React, { useState } from "react";
import MySwiper from "./Parts/MySwiper";
import Games from "./Parts/Games";
import Content from "./Parts/Content";
import banners from "../JSON/data.json";

const Splash = (props) => {
  const regis = "https://m.codere.com.co/deportescolombia/#/RegistroCONewPage";
  const [showTimer, setShowTimer] = useState(true);
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "codere",
    alternateName: [
      "codere colombia",
      "codere.co",
      "codere.com.co",
      "codere co",
    ],
    legalName: "Codere Online Colombia S.A.S.",
    url: "https://www.codere.com.co/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Codere_Logo.svg",
    foundingDate: "1980",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "[01-8000-975827]",
      email: "apuestas@codere.com",
    },
    description:
      "Codere es la casa de apuestas deportivas y casino online #1 en Colombia. Blackjack, ruleta online, slots y muchos tipos de deporte.",
    sameAs: [
      "https://www.facebook.com/CodereColombia",
      "https://twitter.com/CodereCO",
      "https://www.youtube.com/channel/UCT46v9eapBGC-3-vSHBlRvg",
      "https://www.instagram.com/codereco/",
      "https://apps.apple.com/co/app/codere-apuestas-deportivas-co/id1313823849",
      "https://play.google.com/store/apps/details?id=co.codere.apuestas",
      "https://es.wikipedia.org/wiki/Codere",
      "https://www.wikidata.org/wiki/Q2918415",
      "https://www.crunchbase.com/organization/codere",
      "https://play.google.com/store/apps/details?id=co.codere.casino",
      "https://www.google.com/search?kgmid=/g/121c515_",
    ],
  };

  const inicioFAQPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es el mejor mercado para las apuestas deportivas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El mejor mercado para apostar o el más rentable es 1,2 lo que quiere decir que: gana local o gana visitante, ya sea en deportes como: Baloncesto, Béisbol o tenis, ya que en el caso del fútbol es diferente, porque está la opción 1X2, que incluye igualmente, gana local o gana visitante, pero además, el empate.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto es lo mínimo en dinero para poder apostar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Codere, la casa de apuestas en Colombia más bacana, el dinero mínimo que el usuario deberá tener para apostar son $1.000 pesos colombianos, con este monto, el usuario podrá apostar a cualquier deporte, ya sea baloncesto, tenis, béisbol, fútbol, entre otros que se pueden encontrar en la plataforma.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo hacer pronósticos de fútbol?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Existen diferentes tipos de herramientas para que el usuario pueda hacer pronósticos de fútbol, por ejemplo aplicaciones con datos y estadísticas, e incluso páginas web que registran el rendimiento de los equipos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo ganar en apuestas deportivas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las apuestas combinadas deportivas te pueden hacer ganar más dinero, ya que todas las selecciones que hagas se multiplican dependiendo de lo que apuestes, pero así como puedes ganar más, el nivel de complejidad aumenta, recuerda que si fallas una selección, fallarás la apuesta.",
        },
      },
    ],
  };
  return (
    <>
      <Helmet>
        <title>Apuestas Deportivas y Casino » Bono de $100.000 | Codere®</title>
        <link rel="canonical" href="https://www.codere.com.co/" />
        <meta
          name="description"
          content="La casa de apuestas deportivas y casino online #1 en Colombia. Juega en línea Blackjack, ruleta, slots y apuesta en tus deportes favoritos ⚽."
        ></meta>
        <script type="application/ld+json">
          {JSON.stringify(organization)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(inicioFAQPage)}
        </script>
      </Helmet>

      <div id="first-section">
        <MySwiper
          banners={banners}
          regis={regis}
          flag={props.flag}
          setShowTimer={setShowTimer}
        />
      </div>

      <Games flag={props.flag} />
      <Content />
    </>
  );
};

export default Splash;
