import React, { useEffect } from 'react';
import styles from './CardItemValues.module.scss'
import Aos from "aos";
import 'aos/dist/aos.css';

const CardItemValues = (props) => {
  const { icon, description, title} = props;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const paragraphs = description.match(/[^\.!\?]+[\.!\?]+/g) || [description];

  return (
    <div className={`${styles.card} ${styles.rgb}`} data-aos='flip-left'>
      <img className={styles.img} src={icon} alt="img" />
      <h2>{title}</h2>
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>
    </div>
  );
};

export default CardItemValues;
