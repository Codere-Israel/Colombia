import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, Table } from "react-bootstrap";
import terms from "../../JSON/tyc.json";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import myStore from "../../mobX/Store";
var imgs = [];

const MySwiper = observer((props) => {
  const [swiper, setSwiper] = useState(null);

  const [currentTycType, setCurrentTycType] = useState(null);
  const [currentBannerName, setCurrentBannerName] = useState("");
  const [showTycModal, setShowTycModal] = useState(false);

  const [regisButtonText, setRegisButtonText] = useState("");
  const [regis, setRegis] = useState("");

  useEffect(() => {
    if (swiper) {
      if (showTycModal) swiper.autoplay.pause();
      else swiper.autoplay.run();
    }
  }, [showTycModal]);

  const indexHandler = (swiper) => {
    setSwiper(swiper);

    if (myStore.segmented) {
      setRegisButtonText("Acceder");
      setRegis(
        "https://m.codere.com.co/deportescolombia/#/HomePage?openlogin=true"
      );
      return;
    }

    if (imgs[swiper.realIndex].tycType) {
      setCurrentTycType(imgs[swiper.realIndex].tycType);
    }
    if (imgs[swiper.realIndex].name) {
      setCurrentBannerName(imgs[swiper.realIndex].name);
    } else setCurrentBannerName("");

    imgs[swiper.realIndex].ctaText
      ? setRegisButtonText(imgs[swiper.realIndex].ctaText)
      : setRegisButtonText("Regístrate");
    imgs[swiper.realIndex].ctaURL
      ? setRegis(imgs[swiper.realIndex].ctaURL)
      : setRegis(props.regis);
  };

  function dateInBetween(banner) {
    return (
      new Date() >= new Date(banner.startDate) &&
      new Date() <= new Date(banner.endDate)
    );
  }

  function BannerFilter(banner) {
    if (!banner.scheduled) return banner;
    else {
      if (dateInBetween(banner)) return banner;
    }
  }

  const modalGenerator = () => {
    return (
      <>
        <Modal
          centered
          show={showTycModal}
          onHide={() => setShowTycModal(false)}
          contentClassName="terms-tyc"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="test">
                <h5>Términos y condiciones</h5>
                <h5>{currentBannerName}</h5>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {currentTycType ? tycGenerator(currentTycType) : null}
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => setShowTycModal(false)}
              className="accept-btn"
            >
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  const tycGenerator = (type) => {
    let term = null;

    // console.log(terms);
    for (let i = 0; i < terms.length; i++) {
      if (terms[i].type === type) term = terms[i];
    }
    // console.log(term);
    return (
      <ol style={{ maxHeight: "50vh", overflowY: "scroll" }}>
        {term.ol.map((li, k) => (
          <li key={k}>
            {li.bolded ? <strong>{li.bolded}</strong> : null}
            {li.text}
            {li.inner ? (
              <ul>
                {li.inner.map((li2, k2) => (
                  <li key={k2}>{li2}</li>
                ))}
              </ul>
            ) : null}
            {li.table ? (
              <Table bordered className="mt-2">
                <thead>
                  <tr>
                    {li.table.th.map((h, k) => (
                      <th key={k}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {li.table.tr.map((tr, i) => (
                    <tr key={i}>
                      {tr.map((td, j) => (
                        <React.Fragment key={j}>
                          {Array.isArray(td) ? (
                            <td>
                              <ul>
                                {td.map((tds, k) => (
                                  <li key={k}>{tds}</li>
                                ))}
                              </ul>
                            </td>
                          ) : (
                            <td>{td}</td>
                          )}
                        </React.Fragment>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : null}
          </li>
        ))}
      </ol>
    );
  };

  if (myStore.flag === false)
    imgs = props.banners.desktop_slide_list.filter(BannerFilter);
  else imgs = props.banners.mobile_slide_list.filter(BannerFilter);

  return (
    <div id="carousel-section">
      <Swiper
        onSlideChange={(swiper) => indexHandler(swiper)}
        modules={[Pagination, EffectFade, Autoplay, Lazy]}
        pagination={{ clickable: true }}
        effect={"fade"}
        lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
        autoplay={{ delay: 3250, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        {imgs.map((item, index) => (
          <SwiperSlide key={index}>
            <a href={regis}>
              <img rel="preload" src={item.image} alt={item.img_alt} />
            </a>

            {!myStore.flag ? (
              <div id="des-reg">
                <Button
                  className={`central-regis gl-effect ${
                    myStore.segmented ? "segmentedReactSwipeButton" : ""
                  }`}
                  href={regis}
                  rel={"nofollow"}
                >
                  {regisButtonText}
                  <FontAwesomeIcon icon={faAngleRight} />
                </Button>
                {item.tycType ? (
                  <span className="tyc" onClick={() => setShowTycModal(true)}>
                    Términos y condiciones
                  </span>
                ) : null}
              </div>
            ) : (
              <>
                {item.tycType ? (
                  <div className="mob-tyc">
                    <span className="tyc" onClick={() => setShowTycModal(true)}>
                      Términos y condiciones
                    </span>
                  </div>
                ) : null}
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {myStore.flag ? (
        <>
          <SlideButton
            regis={regis}
            regisButtonText={myStore.segmented ? "Acceder" : regisButtonText}
            segmented={myStore.segmented}
          />
        </>
      ) : null}
      {modalGenerator()}
    </div>
  );
});
export default MySwiper;
