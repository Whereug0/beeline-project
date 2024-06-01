import React, { useEffect } from "react";
import styles from "./Vacancies.module.scss";
import CardItemVacancies from "./CardItemVacancies/CardItemVacancies";
import { useGetVacanciesQuery } from "../../features/api/getApiSlice";

import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Vacancies = () => {
  const { data: vacancies, isLoading, error } = useGetVacanciesQuery();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const translation = {
    expert: "Эксперт",
    carrier: "Старт карьеры",
    practic: "Стажёр",
    online: "Удаленно",
    offline: "В офисе",
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos="zoom-in-down">
          <h1>
            Найди работу вместе с
            <span>
              Beeline
              <div className={styles.line} />
            </span>
          </h1>
        </div>
        <div className={styles.cards_wrapp}>
          {vacancies?.results?.length > 0 ? (
            vacancies.results
              .slice(0, 6)
              .map((vacancy) => (
                <CardItemVacancies
                  key={vacancy.id}
                  id={vacancy.id}
                  title={vacancy.title}
                  salary={vacancy.salary}
                  description={vacancy.description}
                  location={vacancy.location.location}
                  format={translation[vacancy.format]}
                  type={translation[vacancy.job_type]}
                />
              ))
          ) : (
            <div>Вакансий нет</div>
          )}
        </div>
        <NavLink className={styles.all} to={ROUTES.VACANCIES}>
          Все вакансии
        </NavLink>
      </div>
    </div>
  );
};

export default Vacancies;
