import React, { useEffect, useState } from "react";
import CardItemVacancies from "../../components/Vacancies/CardItemVacancies/CardItemVacancies";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow_downward.svg";
import searchIcon from "../../assets/icons/search.svg";
import styles from "./AllVacancies.module.scss";
import { useGetCategoriesQuery, useGetLocationsQuery, useGetVacanciesQuery } from "../../features/api/getApiSlice";

const AllVacancies = () => {
  const [activeList, setActiveList] = useState(null);

  const { data: vacancies, isLoading, error } = useGetVacanciesQuery();
  const { data: locations, isLoading: locationIsLoading, error: locationError} = useGetLocationsQuery()
  const { data: categories, } = useGetCategoriesQuery()
  console.log(categories)

  const toggleActive = (listName) => {
    setActiveList(activeList === listName ? null : listName);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos="zoom-in-down">
          <h1>Вакансии</h1>
          <div className={styles.search_wrapp}>
            <div className={styles.input_box}>
              <img src={searchIcon} alt="searchIcon" />
              <input type="text" placeholder="Поиск" />
            </div>
          </div>
        </div>
        <div className={styles.selects_wrapp}>
          <div className={styles.select}>
            <button
              className={`${styles.button} ${
                activeList === "location" ? styles.active : ""
              }`}
              onClick={() => toggleActive("location")}
            >
              Локация
              <ArrowIcon
                className={`${styles.arrow} ${
                  activeList === "location" ? styles.activeArrow : ""
                }`}
              />
            </button>
            {activeList === "location" && (
              <div className={styles.sort_list}>
                {locations?.results?.length > 0 ? (
                  locations.results.map((location) => (
                    <p key={location.id}>{location.location}</p>
                  ))
                ): <p>Локаций нет</p>}
              </div>
            )}
          </div>
          <div className={styles.select}>
            <button
              className={`${styles.button} ${
                activeList === "specialization" ? styles.active : ""
              }`}
              onClick={() => toggleActive("specialization")}
            >
              Специальность
              <ArrowIcon
                className={`${styles.arrow} ${
                  activeList === "specialization" ? styles.activeArrow : ""
                }`}
              />
            </button>
            {activeList === "specialization" && (
              <div className={styles.sort_list}>
                {categories?.results?.length > 0 ? (
                  categories.results.map((category) => (
                    <p>{category.speciality}</p>
                  ))
                ): <div>Специальности нет</div>}
              </div>
            )}
          </div>
          <div className={styles.select}>
            <button
              className={`${styles.button} ${
                activeList === "expertise" ? styles.active : ""
              }`}
              onClick={() => toggleActive("expertise")}
            >
              Экспертность
              <ArrowIcon
                className={`${styles.arrow} ${
                  activeList === "expertise" ? styles.activeArrow : ""
                }`}
              />
            </button>
            {activeList === "expertise" && (
              <div className={styles.sort_list}>
                <p>Стажёр</p>
                <p>Эксперт</p>
                <p>Старт карьеры</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.cards_wrapp}>
          {vacancies?.results?.length > 0 ? (
            vacancies.results
              .slice(0, 6)
              .map((vacancy) => (
                <CardItemVacancies
                  key={vacancy.id}
                  title={vacancy.title}
                  salary={vacancy.salary}
                  description={vacancy.description}
                  location={vacancy.location}
                  format={vacancy.format}
                  type={vacancy.job_type}
                />
              ))
          ) : (
            <div>Вакансий нет</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllVacancies;
