import React, { useEffect, useState } from "react";
import CardItemVacancies from "../../components/Vacancies/CardItemVacancies/CardItemVacancies";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow_downward.svg";
import searchIcon from "../../assets/icons/search.svg";
import styles from "./AllVacancies.module.scss";
import { useGetCategoriesQuery, useGetLocationsQuery, useGetVacanciesQuery } from "../../features/api/getApiSlice";

const AllVacancies = () => {
  // Состояние для управления активным списком (локация, специализация, экспертность)
  const [activeList, setActiveList] = useState(null);

  // Состояние для значения поиска
  const [searchValue, setSearchValue] = useState('');

  // Состояния для выбранных фильтров
  const [selectedLocation, setSelectedLocation] = useState('Локация');
  const [selectedCategory, setSelectedCategory] = useState('Дапартаменты');
  const [selectedExpertise, setSelectedExpertise] = useState('Экспертность');

  // Получение данных о вакансиях, локациях и категориях
  const { data: vacancies, isLoading, error } = useGetVacanciesQuery();
  const { data: locations, isLoading: locationIsLoading, error: locationError } = useGetLocationsQuery();
  const { data: categories } = useGetCategoriesQuery();
  console.log(vacancies);

  // Функция для переключения активного списка
  const toggleActive = (listName) => {
    setActiveList(activeList === listName ? null : listName);
  };

  // Прокрутка страницы к началу при загрузке компонента
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Обработчик изменения значения поиска
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  // Перевод типов работ
  const translation = {
    'expert': "Эксперт",
    'carrier': "Старт карьеры",
    'practic': "Стажёр"
  };

  // Функция фильтрации вакансий
  const filterVacancies = (vacancies, searchValue, selectedLocation, selectedCategory, selectedExpertise) => {
    if (!vacancies) return [];

    const searchLower = searchValue.toLowerCase();

    return vacancies.filter((vacancy) => {
      const matchesSearch = (
        vacancy.title.toLowerCase().includes(searchLower) ||
        (vacancy.salary && vacancy.salary.toString().toLowerCase().includes(searchLower)) ||
        (vacancy.format && vacancy.format.toLowerCase().includes(searchLower)) ||
        (vacancy.job_type && translation[vacancy.job_type].toLowerCase().includes(searchLower)) ||
        (vacancy.description && vacancy.description.toLowerCase().includes(searchLower))
      );

      const matchesLocation = selectedLocation === 'Локация' || vacancy.location.location === selectedLocation;
      const matchesCategory = selectedCategory === 'Дапартаменты' || vacancy.category.speciality === selectedCategory;
      const matchesExpertise = selectedExpertise === 'Экспертность' || translation[vacancy.job_type] === selectedExpertise;

      return matchesSearch && matchesLocation && matchesCategory && matchesExpertise;
    });
  };

  // Отфильтрованные вакансии
  const filteredVacancies = filterVacancies(vacancies?.results || [], searchValue, selectedLocation, selectedCategory, selectedExpertise);

  // Обработчики изменений выбранных фильтров
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    toggleActive(null); // Закрываем активный список после выбора
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    toggleActive(null); // Закрываем активный список после выбора
  };

  const handleExpertiseChange = (expertise) => {
    setSelectedExpertise(expertise);
    toggleActive(null); // Закрываем активный список после выбора
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos="zoom-in-down">
          <h1>Вакансии</h1>
          <div className={styles.search_wrapp}>
            <div className={styles.input_box}>
              <img src={searchIcon} alt="searchIcon" />
              <input
                type="text"
                placeholder="Поиск"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
        <div className={styles.selects_wrapp}>
          <div className={styles.select}>
            <button
              className={`${styles.button} ${activeList === "location" ? styles.active : ""}`}
              onClick={() => toggleActive("location")}
            >
              {selectedLocation}
              <ArrowIcon className={`${styles.arrow} ${activeList === "location" ? styles.activeArrow : ""}`} />
            </button>
            {activeList === "location" && (
              <div className={styles.sort_list}>
                <p onClick={() => handleLocationChange('Локация')}>Все</p>
                {locations?.results?.length > 0 ? (
                  locations.results.map((location) => (
                    <p key={location.id} onClick={() => handleLocationChange(location.location)}>{location.location}</p>
                  ))
                ) : (
                  <p>Локаций нет</p>
                )}
              </div>
            )}
          </div>
          <div className={styles.select}>
            <button
              className={`${styles.button} ${activeList === "category" ? styles.active : ""}`}
              onClick={() => toggleActive("category")}
            >
              {selectedCategory}
              <ArrowIcon className={`${styles.arrow} ${activeList === "category" ? styles.activeArrow : ""}`} />
            </button>
            {activeList === "category" && (
              <div className={styles.sort_list}>
                <p onClick={() => handleCategoryChange('Дапартаменты')}>Все</p>
                {categories?.results?.length > 0 ? (
                  categories.results.map((category) => (
                    <p key={category.id} onClick={() => handleCategoryChange(category.speciality)}>{category.speciality}</p>
                  ))
                ) : (
                  <p>Департаментов нет</p>
                )}
              </div>
            )}
          </div>
          <div className={styles.select}>
            <button
              className={`${styles.button} ${activeList === "expertise" ? styles.active : ""}`}
              onClick={() => toggleActive("expertise")}
            >
              {selectedExpertise}
              <ArrowIcon className={`${styles.arrow} ${activeList === "expertise" ? styles.activeArrow : ""}`} />
            </button>
            {activeList === "expertise" && (
              <div className={styles.sort_list}>
                <p onClick={() => handleExpertiseChange('Экспертность')}>Все</p>
                <p onClick={() => handleExpertiseChange('Стажёр')}>Стажёр</p>
                <p onClick={() => handleExpertiseChange('Эксперт')}>Эксперт</p>
                <p onClick={() => handleExpertiseChange('Старт карьеры')}>Старт карьеры</p>
              </div>
            )}
          </div>
        </div>
        <div className={styles.cards_wrapp}>
          {filteredVacancies.length > 0 ? (
            filteredVacancies.map((vacancy) => (
              <CardItemVacancies
                key={vacancy.id}
                title={vacancy.title}
                salary={vacancy.salary}
                description={vacancy.description}
                location={vacancy.location.location}
                format={vacancy.format}
                type={translation[vacancy.job_type]}
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