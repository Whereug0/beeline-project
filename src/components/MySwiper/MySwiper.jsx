import React, { useEffect } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import Aos from "aos";
import 'aos/dist/aos.css';


import styles from "./MySwiper.module.scss";

const MySwiper = () => {

  useEffect(() => {
    Aos.init({duration:1000});
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos='zoom-in-down'>
          <h1>Работа в билайн</h1>
          <span>
            Билайн был основан в 1992 году и стал первым Телеком-оператором на
            российском рынке.
          </span>
          <span>
            Сейчас билайн - это почти 50 миллионов клиентов и 27 тысяч
            сотрудников
          </span>
        </div>
        <Swiper
          data-aos='flip-up'
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
          {/* <SwiperSlide>
            <img src={photo2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo5} />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default MySwiper;
