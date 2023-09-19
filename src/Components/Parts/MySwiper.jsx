import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { useState } from "react";
import { observer } from "mobx-react";
import myStore from "../../mobX/Store";
var imgs = [];

const MySwiper = observer((props) => {
  const [regisButtonText, setRegisButtonText] = useState("");
  const [regis, setRegis] = useState("");

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const cur = new Date();
  const day = weekday[cur.getDay()];

  const indexHandler = (swiper) => {
    if (myStore.segmented) {
      setRegisButtonText("Acceder");
      setRegis(
        "https://m.codere.com.co/deportescolombia/#/HomePage?openlogin=true"
      );
      return;
    }

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
    if (banner.data.display === true) {
      if (banner.data.days.includes(day)) {
        let eventDate = new Date();
        let jsonDate = eventDate.toJSON();
        let jsonDatea = new Date().toISOString().split("T")[0];
        if (banner.data.timeStart != "" || banner.data.timeStart != undefined) {
          banner.startDate = jsonDatea + "T" + banner.data.timeStart + ":00Z";
        } else if (
          banner.data.timeEnd != "" ||
          banner.data.timeEnd != undefined
        ) {
          banner.endDate = jsonDatea + "T" + banner.data.timeEnd + ":00Z";
        }
        return banner;
      }
    } else {
      if (!banner.scheduled) return banner;
      else {
        if (dateInBetween(banner)) return banner;
      }
    }
  }

  if (!myStore.flag)
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
                {item.tycLink ? (
                  <a className="tyc" href={item.tycLink}>
                    Términos y condiciones
                  </a>
                ) : null}
              </div>
            ) : (
              <>
                {item.tycLink ? (
                  <div className="mob-tyc">
                    <a className="tyc" href={item.tycLink}>
                      Términos y condiciones
                    </a>
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
    </div>
  );
});
export default MySwiper;
