import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons/faHeadset";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <footer className="nb-footer mt-5">
      <div className="mobiles">
        <a
          href="https://codere.onelink.me/ymBn/bec1421"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://www.codere.com.co/_catalogs/masterpage/codere/img/FooterdescargaIos.png"
            alt="Codere Colombia"
          />
        </a>
        <a
          href="https://codere.onelink.me/ymBn/bec1421"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src="https://www.codere.com.co/Colombia/images/footer/android.png"
            alt="Codere Colombia"
          />
        </a>
      </div>
      <div className="logos">
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/img/Codere_PastillaRealMadrid.webp"
          alt="Codere Colombia"
        />
        <img
          className="logoBottomImg logoBottomImg3ssa3"
          src="https://www.codere.com.co/_catalogs/masterpage/codere/img/CasinoFantasiaRoyal.webp"
          alt="Codere Colombia"
        />
        <img
          className="logoBottomImg logoBottomImg3ssa3"
          src="https://www.codere.com.co/_catalogs/masterpage/codere/img/logo_crown.webp"
          alt="Codere Colombia"
        />

        <img
          className="logoBottomImg logoBottomImg3ssa3"
          src="https://www.codere.com.co/_catalogs/masterpage/codere/img/Logo-MF-Blanco.webp"
          alt="Codere Colombia"
        />
      </div>

      <div className="about">
        <div className="social-media">
          <ul className="list-inline">
            <li>
              <a
                href="https://m.codere.com.co/deportescolombia/#/ContactPage"
                title="Codere Colombia"
                rel="nofollow"
              >
                <FontAwesomeIcon icon={faHeadset} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/CodereColombia"
                title="Codere Colombia"
                rel="nofollow"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/codereco/"
                title="Codere Colombia"
                rel="nofollow"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/CodereCO"
                title="Codere Colombia"
                rel="nofollow"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCT46v9eapBGC-3-vSHBlRvg"
                title="Codere Colombia"
                rel="nofollow"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6">
            <div className="footer-info-single">
              <span className="title">SOBRE NOSOTROS</span>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.codere.com.co/ayuda/juego-responsable"
                    target="_blank"
                    rel="nofollow"
                  >
                    Juego Responsable
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codere.com.co/ayuda/politica-de-cookies"
                    rel="nofollow"
                  >
                    Política de cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://m.codere.com.co/csbgonline/condicionesgenerales/ContratoColombia.pdf"
                    target="_blank"
                    rel="nofollow"
                  >
                    Contrato
                  </a>
                </li>
                <li>
                  <a
                    href="http://condiciones.apuestas.codere.es/colombia/Condiciones_Colombia.html"
                    target="_blank"
                    rel="nofollow"
                  >
                    Reglas Apuestas
                  </a>
                </li>
                <li>
                  <a
                    href="https://m.codere.com.co/csbgonline/condicionesgenerales/politicaPrivacidadColombia.pdf"
                    target="_blank"
                    rel="nofollow"
                  >
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="https://m.codere.com.co/csbgonline/condicionesgenerales/Acuerdo_08_2020.pdf"
                    target="_blank"
                    rel="nofollow"
                  >
                    Reglamentos de los juegos de <br /> suerte y azar -
                    Coljuegos
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codere-partners.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    Afiliados de Codere
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="footer-info-single">
              <span className="title">LINKS DESTACADOS</span>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.codere.com.co/ayuda/resultados-y-estadisticas"
                    rel="nofollow"
                  >
                    Resultados y estadísticas
                  </a>
                </li>
                <li>
                  <a href="https://www.codere.com.co/casino">Casino</a>
                </li>
                <li>
                  <a href="https://www.codere.com.co/casino/casino-en-vivo">
                    Casino en Vivo
                  </a>
                </li>
                <li>
                  <a href="https://www.codere.com.co/casino/ruleta">Ruleta</a>
                </li>
                <li>
                  <a href="https://www.codere.com.co/casino/slots">Slots</a>
                </li>
                <li>
                  <a href="https://www.codere.com.co/casino/blackjack">
                    Blackjack
                  </a>
                </li>
                <li>
                  <a href="https://www.codere.com.co/casino/jackpots">
                    Jackpots
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.codere.com.co/ayuda/apuesta-en-tu-movil"
                  >
                    Descarga App
                  </a>
                </li>
                <li>
                  <a href="https://blog.codere.com.co" target="_blank">
                    Blog Codere
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="footer-info-single">
              <span className="title">DEPORTES</span>

              <ul className="list-unstyled">
                <li>
                  <a href="https://www.codere.com.co/ayuda/deposito-online">
                    Info depósitos y cobros
                  </a>
                </li>
                <li>
                  <a href="https://www.codere.com.co/ayuda/como-y-donde-apostar">
                    Cómo y dónde apostar
                  </a>
                </li>
                <li>
                  <a href="https://www.codere.com.co/ayuda/como-obtener-freebets">
                    Cómo obtener freebets
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="https://m.codere.com.co/deportescolombia/#/CuotaTypePage"
                  >
                    Opciones de apuesta
                  </a>
                </li>
                <li>
                  <a href="https://www.codere.com.co/eventos-deportivos">
                    Eventos deportivos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="footer-info-single">
              <span className="title">AYUDA</span>

              <ul className="list-unstyled">
                <li>
                  <a href="https://www.codere.com.co/ayuda" rel="nofollow">
                    Área de ayuda
                  </a>
                </li>
                <li>
                  <a
                    href="https://m.codere.com.co/deportescolombia/#/ContactPage"
                    target="_blank"
                  >
                    Área de contacto
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=573112025833&amp;text=Hola%20Coderista,%0D%0A%20Bienvenido%20a%20nuestro%20soporte%20online%20al%20usuario%20%0D%0A%C2%BFEn%20que%20podemos%20ayudarte?"
                    rel="nofollow"
                    target="_blank"
                    className="whatsapp"
                  >
                    WhatsApp: +57 311 202 5833
                  </a>
                </li>

                <li>
                  <a href="tel:018000975827" rel="nofollow" target="_blank">
                    Teléfono: 01-8000-975827
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:apuestas@codere.com"
                    rel="nofollow"
                    target="_blank"
                  >
                    Contacto: apuestas@codere.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="mb-5" />

      <div className="payments">
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/img/FooterLocalCodere.png"
          width="auto"
          height="auto"
          alt=""
        />
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/img/FooterVisa.png"
          width="auto"
          height="auto"
          alt=""
        />
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/img/FooterMasterCard.png"
          width="auto"
          height="auto"
          alt=""
        />
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/images/PSE.png"
          width="auto"
          height="auto"
          alt=""
        />
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/images/PayU.png"
          width="auto"
          height="auto"
          alt=""
        />
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/img/dimonex.png"
          width="auto"
          height="auto"
          alt=""
        />
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/img/Logo_Puntored.png"
          width="auto"
          height="auto"
          alt=""
        />
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/img/daviplata.png"
          width="auto"
          height="auto"
          alt=""
        />
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/img/efecty.png"
          width="auto"
          height="auto"
          alt=""
        />
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/images/Nequi.png"
          width="auto"
          height="auto"
          alt=""
        />
        <img
          src="https://www.codere.com.co/_catalogs/masterpage/codere/images/TPaga_logo.png"
          width="auto"
          height="auto"
          alt=""
        />
      </div>

      <div className="row juegas-banners">
        <div className="col kk93845l">
          <a
            rel="nofollow"
            href="https://www.coljuegos.gov.co/"
            target="_blank"
          >
            <img
              alt="Coljuegos"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/img/LogoColJuegos.png"
              width="auto"
              height="auto"
              className="logoColjuegos"
            />
          </a>
          <a
            rel="nofollow"
            href="https://www.coljuegos.gov.co/"
            target="_blank"
          >
            <img
              alt="Coljuegos"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/img/logojuegobienco.png"
              width="auto"
              height="auto"
              className="logoColjuegos"
            />
          </a>
        </div>
      </div>
      <Container className="legals-container">
        <div id="legals">
          <img
            alt="Mayores 18 años"
            className="more18"
            src="https://www.codere.com.co/_catalogs/masterpage/codere/img/18.png"
            width="auto"
            height="auto"
          />
          <span className=" legalFooter">
            <a
              rel="nofollow"
              href="https://www.jugadoresanonimoscolombia.org/"
              className=" text-center text-decoration-none text-white footer-link"
              target="_blank"
            >
              Jugar sin control causa adicción. El juego es entretenimiento,
              Juega con moderación. Ser responsable es parte del juego.
              Prohibida la venta a menores de edad.{" "}
            </a>
          </span>
        </div>
        <div className="aenor-wrapper">
          <a
            href="https://m.codere.com.co/csbgonline/condicionesgenerales/politicaseguridadinformacion.pdf"
            rel="nofollow"
          >
            <img
              src="https://www.codere.com.co/Colombia/images/footer/logoaenoriso27001.png"
              width="auto"
              height="auto"
              alt="AENOR Seguridad Información"
            />
          </a>
          <div className="text-center text-white">
            <span className="legalFooter">
              Licenciataria <strong>Codere Online Colombia S.A.S.</strong>
              on domicilio principal en Bogotá, Colombia, Ak.103 No. 25F-12 y
              cuyo procesamiento de pagos son operados por Codere Apuestas
              S.A.U. Está licenciada en Colombia por COLJUEGOS con el número de
              concesión C1901 del 15 de noviembre de 2022 al 14 noviembre de
              2025. Operado por Codere Apuestas, S.A.U.
              <br />
              01-8000-975827 -{" "}
              <a href="mailto:apuestas@codere.com">apuestas@codere.com</a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
