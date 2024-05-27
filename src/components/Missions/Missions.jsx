import React, { useEffect } from "react";
import styles from "./Missions.module.scss";
import CardItemMissions from "./CardItemMissions/CardItemMissions";
import fist from '../../assets/icons/fist.svg';
import hands from '../../assets/icons/hands.svg';
import humans from '../../assets/icons/humans.svg';
import communication from '../../assets/icons/communication.svg';

import Aos from "aos";
import 'aos/dist/aos.css';

const Missions = () => {

  useEffect(() => {
    Aos.init({duration:2000});
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos='zoom-in-down'>
          <h1>
            Наша миссия
            <div className={styles.line}/>
          </h1>
          <span>
            Делая связь частью жизни, мы открываем доступ к информации, общению
            и даем кыргызстанцам безграничные возможности для развития страны и
            общества.
          </span>
        </div>
        <div className={styles.cards_wrapp}>
          <div className={styles.cards_box}>
            <CardItemMissions img={hands} text="Клиентоцентричность"/>
            <CardItemMissions img={fist} text="Ответственность"/>
          </div>
          <div className={styles.cards_box}>
            <CardItemMissions img={humans} text="Сотрудничество"/>
            <CardItemMissions img={communication} text="Вовлеченность"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
