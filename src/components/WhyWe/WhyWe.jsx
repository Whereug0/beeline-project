import React, { useEffect } from 'react';
import styles from './WhyWe.module.scss';
import earth from '../../assets/icons/earth-line.svg';
import nimbus from '../../assets/icons/nimbus_university.svg';
import partner from '../../assets/icons/partner_exchange.svg';
import monitoring from '../../assets/icons/monitoring.svg';
import voolunteer from '../../assets/icons/volunteer_activism.svg';
import head from '../../assets/icons/head-idea.svg'

import Aos from "aos";
import 'aos/dist/aos.css';

const WhyWe = () => {
  
  useEffect(() => {
    Aos.init({duration:2000});
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos="zoom-in-down">
          <h1>
            Почему мы?
            <div className={styles.line}/>
          </h1>
        </div>
        <div className={styles.cards_wrapp}>
          <div className={styles.card} data-aos="flip-up">
            <img src={head} alt="head" />
            <p>Поощрение твоих идей</p>
          </div>
          <div className={styles.card} data-aos="flip-up">
            <img src={earth} alt="earth" />
            <p>Масштабные проекты </p>
          </div>
          <div className={styles.card} data-aos="flip-up">
            <img src={nimbus} alt="nimbus" />
            <p>Оплачиваемое обучение</p>
          </div>
          <div className={styles.card} data-aos="flip-up">
            <img src={voolunteer} alt="voolunteer" />
            <p>Уют и стабильность</p>
          </div>
          <div className={styles.card} data-aos="flip-up">
            <img src={partner} alt="partner" />
            <p>Доверие</p>
          </div>
          <div className={styles.card} data-aos="flip-up">
            <img src={monitoring} alt="monitoring" />
            <p>Карьерный рост</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyWe
