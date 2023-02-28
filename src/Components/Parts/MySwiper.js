import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Lazy } from "swiper";
import SlideButton from "./Slide-Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import banners from "../../JSON/data.json";

import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { useState } from "react";
import { isMobileDT } from "../App/App";
var imgs = [];

function MySwiper(props) {
  const [regisButtonText, setRegisButtonText] = useState("");
  const [regis, setRegis] = useState("");
  const indexHandler = (swiper) => {
    if (swiper.realIndex === 0) props.setShowTimer(true);
    else props.setShowTimer(false);

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

  if (!isMobileDT) imgs = banners.desktop_slide_list.filter(BannerFilter);
  else imgs = banners.mobile_slide_list.filter(BannerFilter);

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

            {!isMobileDT ? (
              <div id="des-reg">
                <Button
                  className="central-regis gl-effect"
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
      {isMobileDT ? (
        <>
          <SlideButton regis={regis} regisButtonText={regisButtonText} />
        </>
      ) : null}
    </div>
  );
}
export default MySwiper;
