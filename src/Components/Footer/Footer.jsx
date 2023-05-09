import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons/faHeadset";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import "./Footer.css";
// Codere Footer \\
function Footer() {
  return (
    <div>
      {/* <hr /> */}
      <footer className="nb-footer">
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
                  <FontAwesomeIcon icon={faTwitter} />
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
                      href="/ayuda/juego-responsable"
                      target="_blank"
                      title=""
                      rel="nofollow"
                    >
                      Juego Responsable
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ayuda/politica-de-cookies"
                      target="_blank"
                      title=""
                      rel="nofollow"
                    >
                      Política de cookies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.codere.com.co/csbgonline/condicionesgenerales/ContratoColombia.pdf"
                      target="_blank"
                      title=""
                      rel="nofollow"
                    >
                      Contrato
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://condiciones.apuestas.codere.es/colombia/Condiciones_Colombia.html"
                      target="_blank"
                      title=""
                      rel="nofollow"
                    >
                      Reglas Apuestas
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.codere.com.co/csbgonline/condicionesgenerales/politicaPrivacidadColombia.pdf"
                      target="_blank"
                      title=""
                      rel="nofollow"
                    >
                      Política de Privacidad
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.codere.com.co/csbgonline/condicionesgenerales/Acuerdo_08_2020.pdf"
                      target="_blank"
                      title=""
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
                      title=""
                      rel="nofollow"
                    >
                      {" "}
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
                      href="/ayuda/resultados-y-estadisticas"
                      target="_blank"
                      title=""
                      rel="nofollow"
                    >
                      Resultados y estadísticas{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.codere.com.co/deportescolombia/#/DownloadApp"
                      target="_blank"
                      title=""
                      rel="nofollow"
                    >
                      Descarga App{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.codere.com.co"
                      target="_blank"
                      title=""
                    >
                      Blog Codere{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://blog.codere.com.co/lo-que-viene/"
                      target="_blank"
                      title=""
                      rel="nofollow"
                    >
                      Lo Que Viene{" "}
                    </a>
                  </li>
                  <ul className={"footerList34u"}>
                    <li>
                      <a href="/casino/jackpots">Jackpots</a>
                    </li>
                    <li>
                      <a href="/casino/slots">Slots</a>
                    </li>
                    <li>
                      <a href="/casino/ruleta">Ruleta</a>
                    </li>
                    <li>
                      <a href="/casino">Casino</a>
                    </li>
                    <li>
                      <a href="/casino/blackjack">Blackjack</a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="footer-info-single">
                <span className="title">DEPORTES</span>

                <ul className="list-unstyled">
                  <li>
                    <a href="/ayuda/deposito-online" title="">
                      Info depósitos y cobros
                    </a>
                  </li>
                  <li>
                    <a href="/ayuda/como-y-donde-apostar" title="">
                      Cómo y dónde apostar
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.codere.com.co/deportescolombia/#/CuotaTypePage"
                      title=""
                    >
                      Opciones de apuesta
                    </a>
                  </li>
                  <li>
                    <a href="/eventos-deportivos">Eventos deportivos</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-6">
              <div className="footer-info-single">
                <span className="title">AYUDA</span>

                <ul className="list-unstyled">
                  <li>
                    <a href="/ayuda" title="">
                      Área de ayuda
                    </a>
                  </li>
                  <li>
                    <a href="https://m.codere.com.co/deportescolombia/#/ContactPage" title="" target='_blank'>
                      Área de contacto
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=573112025833&amp;text=Hola%20Coderista,%0D%0A%20Bienvenido%20a%20nuestro%20soporte%20online%20al%20usuario%20%0D%0A%C2%BFEn%20que%20podemos%20ayudarte?"
                      title=""
                      rel="nofollow"
                      target="_blank"
                      className="whatsapp"
                    >
                      WhatsApp:  +573 1120 25833
                    </a>
                  </li>

                  <li>
                    <a
                      href="tel:018000834313"
                      title=""
                      rel="nofollow"
                      target="_blank"
                    >
                      Teléfono: 01-8000-934313
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:apuestas@codere.com"
                      title=""
                      rel="nofollow"
                      target="_blank"
                    >
                      Contacto:  apuestas@codere.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ marginBottom: "2vw" }} />

        <div className="juegas-banners">
          <div className="col-3 col-sm-1 ">
            <img
              className="logoBottomImg"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/img/FooterLocalCodere.png"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <div className="col-3 col-sm-1 ">
            <img
              className="logoBottomImg"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/img/FooterVisa.png"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <div className="col-3 col-sm-1 ">
            <img
              className="logoBottomImg"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/img/FooterMasterCard.png"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <div className="col-3 col-sm-1 ">
            <img
              className="logoBottomImg"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/images/PSE.png"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <div className="col-3 col-sm-1 ">
            <img
              className="logoBottomImg"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/images/PayU.png"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <div className="col-3 col-sm-1 ">
            <img
              className="logoBottomImg"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/img/dimonex.png"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <div className="col-3 col-sm-1 ">
            <img
              className="logoBottomImg"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/img/Logo_Puntored.png"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <div className="col-3 col-sm-1 ">
            <img
              className="logoBottomImg"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/img/daviplata.png"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <div className="col-3 col-sm-1 ">
            <img
              className="logoBottomImg"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/img/efecty.png"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <div className="col-3 col-sm-1 ">
            <img
              className="logoBottomImg"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/images/Nequi.png"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
          <div className="col-3 col-sm-1 ">
            <img
              className="logoBottomImg"
              src="https://www.codere.com.co/_catalogs/masterpage/codere/images/TPaga_logo.png"
              width="auto"
              height="auto"
              alt=""
            />
          </div>
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

        <div className="row lass7858a">
          <div id="legals" className="col-  legalsFooterComCo ">
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
          <div className="col- fd089">
            <a
              className=""
              href="https://m.codere.com.co/csbgonline/condicionesgenerales/politicaseguridadinformacion.pdf"
              rel="nofollow"
            >
              <img
                src="https://m.apuestas.codere.es/deportes/assets/img/logoaenoriso27001.png"
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
                S.A.U. Está licenciada en Colombia por COLJUEGOS con el número
                de concesión C1901 del 15 de noviembre de 2022 al 10 noviembre
                de 2025. Operado por Codere Apuestas, S.A.U.
                <br />
                01-8000-975827 -{" "}
                <a href="mailto:apuestas@codere.com">apuestas@codere.com</a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
