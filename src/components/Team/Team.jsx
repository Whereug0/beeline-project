import React, { useEffect } from 'react';
import styles from './Team.module.scss'
import team1 from '../../assets/imgs/team 1.png';
import team2 from '../../assets/imgs/team 2.png';
import team3 from '../../assets/imgs/team 3.png';
import stars from '../../assets/imgs/Stars.png';
import ball from '../../assets/imgs/ball.png';
import ball2 from '../../assets/imgs/ball2.png';

import Aos from "aos";
import 'aos/dist/aos.css';

const Team = () => {

  useEffect(() => {
    Aos.init({duration:3000});
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos='zoom-in-down'>
          <img className={styles.ball} src={ball} alt="ball" />
          <h1>Наша команда</h1>
          <img className={styles.ball} src={ball} alt="ball" />
        </div>
        <div className={styles.imgs_wrapp}>
          <img className={styles.photo} src={team1} alt="team1" data-aos="flip-up"/>
          <img className={styles.photo} src={team2} alt="team2" data-aos="flip-up"/>
          <div className={styles.img_box}>
            <img className={styles.ball} src={ball2} alt="ball2" data-aos="flip-up"/>
            <img className={styles.photo} src={team3} alt="team3" data-aos="flip-up"/>
            <img className={styles.ball} src={ball2} alt="ball2" data-aos="flip-up"/>
          </div>
        </div>
        <img className={styles.stars} src={stars} alt="stars" data-aos="flip-up"/>
      </div>
    </div>
  )
}

export default Team
