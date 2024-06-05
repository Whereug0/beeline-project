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
  const { id } = useParams();
  const { data: vacancy, isLoading, error } = useGetVacandyIdQuery(id);
  const [modalActive, setModalActive] = useState(false);
  console.log(vacancy)
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, 0);
    }
  }, [isLoading]);

  const handleSubmit = () => setModalActive(true);
  const handleClose = () => setModalActive(false);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const transition = {
    "online" : "Удалённо",
    "offline": "В офисе"
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h1>
              О вакансии
              <div className={styles.line} />
            </h1>
          </div>
          <div className={styles.card}>
            <div className={styles.city}>
              <p>
                <img src={locationIcon} alt="locationIcon" />
                г. {vacancy?.location?.location}
              </p>
            </div>
            <div className={styles.info_wrapp}>
              <div className={styles.vacancy_wrapp}>
                <img className={styles.bagImg} src={bagIcon} alt="bag" />
                <div className={styles.vacancy_name}>
                  <h2>{vacancy?.title}</h2>
                  <p>
                    Зарплата <span> - {vacancy?.salary} сомов</span> 
                  </p>
                </div>
              </div>
              <div className={styles.description}>
                {vacancy?.description}
              </div>
              <div className={styles.duties_wrapp}>
                <h3>Чем надо будет заниматься:</h3>
                <ul>
                  {vacancy?.duties?.map((duty, index) => (
                    <li key={index}>{duty}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.requirements_wrapp}>
                <h3>Вы нам подходите, если:</h3>
                <ul>
                  {vacancy?.requirements?.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.benefits_wrapp}>
                <h3>Что мы предлагаем:</h3>
                <ul>
                  {vacancy?.benefits?.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.conditions_wrapp}>
                <div className={styles.conditions}>
                  <h3>Режим работы:</h3>
                  <ul>
                    <li>{transition[vacancy?.format]}</li>
                    {vacancy?.work_hours?.map((workHour, index) => (
                      <li key={index}>{workHour}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.sbmBtn_wrapp}>
                <button onClick={handleSubmit}>Откликнуться</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        close={handleClose}
        vacancyId={id}
      />
    </>
  );
};

export default SingleVacancy;