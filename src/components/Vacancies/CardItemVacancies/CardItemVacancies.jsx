import React, { useEffect, useState } from "react";
import styles from "./CardItemVacancies.module.scss";
import bag from "../../../assets/icons/shopping_bag.svg";
import locationIcon from "../../../assets/icons/location_on.svg";
import Modal from "../../Modal/Modal";


import Aos from "aos";
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

const CardItemVacancies = (props) => {
  const {
    id,
    location,
    description,
    title,
    salary,
    format,
    category,
    type,
  } = props;

  const [modalActive, setModalActive] = useState(false);
  const [vacancyId, setVacancyId] = useState(null);

  const handleSubmit = (id, e) => {
    e.stopPropagation();
    setVacancyId(id);
    setModalActive(true);
  };

  const handleClose = () => {
    setModalActive(false);
    setVacancyId(null);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className={styles.card} data-aos="flip-left">
      <NavLink to={ROUTES.SINGLE_VACANCY} className={styles.cardLink}>
        <div className={styles.vacancy_wrapp}>
          <img className={styles.bagImg} src={bag} alt="bag" />
          <div className={styles.vacancy_name}>
            <h2>{title}</h2>
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
      </NavLink>
        <div className={styles.conditions_wrapp}>
          <div className={styles.conditions}>
            <p className={styles.salary}>
              Зарплата - <span>{salary} сомов</span>
            </p>
            <p>{format}</p>
          </div>
          <button onClick={(e) => handleSubmit(id, e)}>Откликнуться</button>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} close={handleClose} vacancyId={vacancyId} />
    </>
  );
};

export default CardItemVacancies;
