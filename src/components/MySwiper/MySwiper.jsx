import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import Aos from "aos";
import "aos/dist/aos.css";

import styles from "./MySwiper.module.scss";

const MySwiper = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos="zoom-in-down">
          <h1>
            Реализуй себя вместе с Beeline
          <div className={styles.line}/>
          </h1>
          <span>
            1 августа 1998 года был совершен первый звонок в GSM сети
            Кыргызстана компанией «Бител», которая в 2009 году начала
            предоставлять услуги под брендом Beeline.
          </span>
          <span>
            В 2010 году компания вошла в группу VEON Ltd, предоставляющую
            телекоммуникационные услуги в различных странах.
          </span>
        </div>
        <Swiper
          data-aos="zoom-in-down"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="slide6">
            <div />
          </SwiperSlide>
          <SwiperSlide className="slide7">
            <div />
          </SwiperSlide>
          <SwiperSlide className="slide8">
            <div />
          </SwiperSlide>
          <SwiperSlide className="slide1">
            <div />
          </SwiperSlide>
          <SwiperSlide className="slide2">
            <div />
          </SwiperSlide>
          <SwiperSlide className="slide3">
            <div />
          </SwiperSlide>
          <SwiperSlide className="slide4">
            <div />
          </SwiperSlide>
          <SwiperSlide className="slide5">
            <div />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MySwiper;
