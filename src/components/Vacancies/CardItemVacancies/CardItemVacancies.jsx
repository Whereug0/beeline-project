import React, { useEffect, useState } from "react";
import styles from "./CardItemVacancies.module.scss";
import bag from "../../../assets/icons/shopping_bag.svg";
import locationIcon from "../../../assets/icons/location_on.svg";
import Modal from "../../Modal/Modal";


import Aos from "aos";
import 'aos/dist/aos.css';


const CardItemVacancies = (props) => {

  const {
    location,
    description,
    title,
    salary,
    format,
    category,
    type,
  } = props

  const [modalActive, setModalActive] = useState(false);
  const handleSubmit  = () =>{
    setModalActive(true)
  }
  const handleClose = () => {
    setModalActive(false)
  }

  useEffect(() => {
    Aos.init({duration:2000});
  },[])

  return (
    <>
    <div className={styles.card} data-aos="flip-left">
      <div className={styles.vacancy_wrapp}>
        <img className={styles.bagImg} src={bag} alt="bag" />
        <div className={styles.vacancy_name}>
          <h1>{title}</h1>
          <p>
            <img src={locationIcon} alt="locationIcon" />
            г. {location}
          </p>
          <p>{type}</p>
        </div>
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.conditions_wrapp}>
        <div className={styles.conditions}>
          <p className={styles.salary}>Зарплата - <span>{salary} сомов</span></p>
          <p>{format}</p>
        </div>
        <button onClick={handleSubmit}>Откликнуться</button>
      </div>
    </div>
    <Modal active={modalActive} setActive={setModalActive} close={handleClose} />
    </>
  );
};

export default CardItemVacancies;
