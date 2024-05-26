import React, { useEffect } from 'react';
import styles from './CardItemValues.module.scss'
import Aos from "aos";
import 'aos/dist/aos.css';

const CardItemValues = (props) => {
  const {
    img,
    text,
    heading,
    className
  } = props

  useEffect(() => {
    Aos.init({duration:2000});
  },[])

  return (
    <div className={`${styles.card} ${className}`} data-aos='fade-up'>
      <img className={styles.img} src={img} alt="img" />
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  )
}

export default CardItemValues
