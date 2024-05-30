import React, { useEffect, useState } from "react";
import styles from "./SingleVacancy.module.scss";
import bagIcon from "../../assets/icons/shopping_bag.svg";
import Modal from "../../components/Modal/Modal";
import locationIcon from "../../assets/icons/location_on.svg";

import Aos from "aos";
import "aos/dist/aos.css";
import { useParams } from "react-router-dom";
import { useGetVacandyIdQuery } from "../../features/api/getApiSlice";

const SingleVacancy = () => {
  const {id} = useParams()
  const {data, isLoading, error} = useGetVacandyIdQuery(id)

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    setModalActive(true);
  };

  const handleClose = () => {
    setModalActive(false);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>О вакансии</h1>
          </div>
          <div className={styles.card}>
            <div className={styles.city}>
              <p>
                <img src={locationIcon} alt="locationIcon" />
                г. city
              </p>
            </div>

            <div className={styles.vacancy_wrapp}>
              <img className={styles.bagImg} src={bagIcon} alt="bag" />
              <div className={styles.vacancy_name}>
                <h2>тайтл</h2>
                <p>тип</p>
                <p>зарплата</p>
              </div>
            </div>
            <div className={styles.description}>описание</div>
            <div className={styles.conditions_wrapp}>
              <div className={styles.conditions}>
                <p>формат</p>
              </div>
              <button onClick={() => handleSubmit()}>Откликнуться</button>{" "}
            </div>
          </div>
        </div>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        close={handleClose}
      />{" "}
      {/* Передаем ID вакансии в модальное окно */}
    </>
  );
};

export default SingleVacancy;
