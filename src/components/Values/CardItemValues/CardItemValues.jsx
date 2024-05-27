import React, { useEffect } from 'react';
import styles from './CardItemValues.module.scss'
import Aos from "aos";
import 'aos/dist/aos.css';

const CardItemValues = (props) => {
  const { img, text, heading, className } = props;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // Разбиваем текст на предложения
  const paragraphs = text.split('. ').filter(Boolean);

  return (
    <div className={`${styles.card} ${styles.rgb} ${className}`} data-aos='flip-left'>
      <img className={styles.img} src={img} alt="img" />
      <h2>{heading}</h2>
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}.</p>
        ))}
      </div>
    </div>
  );
};

export default CardItemValues;
