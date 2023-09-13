import React, { useState, useEffect } from "react";

import sportCSS from "../../CSS/sportgames.module.css";

// import { sortByDate } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Lazy, Navigation } from "swiper";
import { Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { BarLoader } from "react-spinners";
import "swiper/css/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import myStore from "../../mobX/Store";
import { observer } from "mobx-react";

const URL =
  "https://coderesbgonlinesbsbannersco.azurewebsites.net/api/feeds/leagues/3069005120/1/GetEventsByLeagueAndMarketId";
const headers = {
  CodereAffiliateApiKey: process.env.REACT_APP_KEY,
  CodereAffiliateApiSecret: process.env.REACT_APP_SECRET,
};

const spinnerCss = { margin: "auto", marginTop: "4rem", marginBottom: "2vw" };

const SportGames = observer(() => {
  const [data, setData] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);

  function americanOddsConvert(odd) {
    return odd;
    if (odd >= 2) return (odd - 1) * 100;
    else return -100 / (odd - 1);
  }

  function fixTeamName(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\x00-\x7F]/g, "")
      .replaceAll(" ", "-");
  }

  function shorthenTeamName(str) {
    switch (str) {
      case "Atlético Bucaramanga":
        str = "Atl. Bucaramanga";
        break;
      case "Independiente Medellin":
        str = "Ind. Medellin";
        break;
    }
    return str;
  }

  // revoke the 1X2 from server side
  useEffect(() => {
    axios.get(URL, { headers }).then((res) => {
      // get only the first 6 games.
      // setData(res.data.slice(0, 6));
      console.log(res.data);
      setData(
        res.data
          .sort((a, b) => new Date(a.StartDate) - new Date(b.StartDate))
          .filter((item) => item.Games.length > 0)
        // .slice(0, 6)
      );
      setShowSpinner(false);
    });
  }, []);

  function dateFix(date) {
    let x = new Date(date);
    // console.log(date);
    let day = x.getDate();
    let month = x.getMonth() + 1;
    if (day < 10) day = "0" + x.getDate();
    if (month < 10) day = "0" + x.getMonth();

    return day + "/" + month + "/" + x.getFullYear();
  }

  function getGameHour(date) {
    let x = new Date(date);
    let hours = x.getHours(),
      mins = x.getMinutes();
    if (x.getHours() < 10) hours = "0" + x.getHours();
    if (x.getMinutes() < 10) mins = "0" + x.getMinutes();
    return hours + ":" + mins;
  }

  return (
    <>
      {showSpinner ? (
        <>
          <BarLoader color="#79c000" cssOverride={spinnerCss} />
          <p style={{ textAlign: "center", color: "#fff" }}>Loading ...</p>
        </>
      ) : (
        <div className={sportCSS.sport_games_slider}>
          <>
            <h2
              style={{
                color: "#79c000",
                textTransform: "uppercase",
              }}
            >
              Primiera A
            </h2>
            <Swiper
              id="sportgames"
              modules={[Autoplay, Lazy, Navigation]}
              lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
              autoplay={{ delay: 9400 }}
              spaceBetween={15}
              slidesPerView={myStore.flag ? 1.2 : data.length < 2 ? 1 : 3.1}
              // slidesPerView={1}
              // loop={data.length > 1 ? true : false}
            >
              {data.map((item, key) => (
                <SwiperSlide
                  key={key}
                  style={{ color: "#fff", fontSize: "1.2rem" }}
                >
                  <Card className={sportCSS.card} bg="dark">
                    <Card.Header>
                      <div className={sportCSS.startdate}>
                        <span>{dateFix(item.StartDate)}</span>{" "}
                        <span>{getGameHour(item.StartDate)}</span>
                      </div>
                    </Card.Header>
                    <Card.Body
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      <Row className={sportCSS.row}>
                        <Col className={sportCSS.col}>
                          <img
                            style={{
                              width: "auto",
                              padding: "8px",
                              marginBottom: ".25rem",
                            }}
                            src={
                              "https://www.codere.com.co/landingpages/assets/shirts/" +
                              fixTeamName(item.Games[0].Results[0].Name) +
                              ".png"
                            }
                            alt={fixTeamName(item.Games[0].Results[0].Name)}
                            width="66"
                            height="66"
                          />
                          <Card.Link
                            className={sportCSS.url}
                            href={
                              "https://m.codere.com.co/deportescolombia/#/HomePage?addbet=" +
                              item.Games[0].Results[0].NodeId
                            }
                          >
                            <div
                              className={`${sportCSS.frame} ${sportCSS.framed}`}
                            >
                              <div className={sportCSS.overflowed}>
                                {shorthenTeamName(
                                  item.Games[0].Results[0].Name
                                )}
                              </div>
                              <div>
                                {americanOddsConvert(
                                  parseFloat(item.Games[0].Results[0].Odd)
                                )
                                  .toFixed(2)
                                  .replaceAll(".", ",")}
                              </div>
                            </div>
                          </Card.Link>
                        </Col>
                        <Col className={sportCSS.col}>
                          vs
                          <Card.Link
                            className={sportCSS.url}
                            href={
                              "https://m.codere.com.co/deportescolombia/#/HomePage?addbet=" +
                              item.Games[0].Results[1].NodeId
                            }
                          >
                            <div className={sportCSS.frame}>
                              <div>X</div>
                              <div style={{ fontSize: "1.2rem" }}>
                                {americanOddsConvert(
                                  parseFloat(item.Games[0].Results[1].Odd)
                                )
                                  .toFixed(2)
                                  .replaceAll(".", ",")}
                              </div>
                            </div>
                          </Card.Link>
                        </Col>

                        <Col className={sportCSS.col}>
                          <LazyLoadImage
                            style={{
                              width: "auto",
                              padding: "8px",
                              marginBottom: ".25rem",
                              transform: "scaleX(-1)",
                            }}
                            src={
                              "https://www.codere.com.co/landingpages/assets/shirts/" +
                              fixTeamName(item.Games[0].Results[2].Name) +
                              ".png"
                            }
                            alt={item.Games[0].Results[2].Name.replaceAll(
                              " ",
                              "-"
                            )}
                            width="66"
                            height="66"
                          />
                          <Card.Link
                            className={sportCSS.url}
                            href={
                              "https://m.codere.com.co/deportescolombia/#/HomePage?addbet=" +
                              item.Games[0].Results[2].NodeId
                            }
                          >
                            <div
                              className={`${sportCSS.frame} ${sportCSS.framed}`}
                            >
                              <div className={sportCSS.overflowed}>
                                {shorthenTeamName(
                                  item.Games[0].Results[2].Name
                                )}
                              </div>
                              <div>
                                {americanOddsConvert(
                                  parseFloat(item.Games[0].Results[2].Odd)
                                )
                                  .toFixed(2)
                                  .replaceAll(".", ",")}
                              </div>
                            </div>
                          </Card.Link>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      )}
    </>
  );
});

export default SportGames;
