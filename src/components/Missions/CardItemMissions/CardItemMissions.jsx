import React, { useEffect } from 'react';
import styles from './CardItemMissions.module.scss'

import Aos from "aos";
import 'aos/dist/aos.css';
import Tilt from 'react-parallax-tilt';

const CardItemMissions = ({img, text}) => {

  useEffect(() => {
    Aos.init({ duration: 2000 }); // Инициализация AOS
  }, []);

  return (
    
    <Tilt data-tilt data-tilt-scale='0.5'>
      <div className={`${styles.card} ${styles.rgb}`} data-aos="flip-up">
        <img src={img} alt="img" />
        <h2 className={styles.text}>
          {text}
        </h2>
      </div>
    </Tilt>
  )
}

export default CardItemMissions
