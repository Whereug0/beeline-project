import React, { useEffect } from "react";
import styles from "./Values.module.scss";
import CardItemValues from "./CardItemValues/CardItemValues";


import Aos from "aos";
import "aos/dist/aos.css";

import { useGetValuesQuery } from "../../features/api/getApiSlice";

const Values = () => {
  const {data: values, isLoading, error} = useGetValuesQuery()

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos="zoom-in-down">
          <h1>
            Наши <span>
              ценности
              <div className={styles.line} />
            </span>
          </h1>
          <span>
            В Beeline все начинается с наших клиентов. Наш новаторский дух
            восходит к нашим предпринимательским корням, вдохновляя
            взаимодействие, инновации и прежде всего честность с самим собой и
            по отношению к окружающему миру.
          </span>
        </div>
        <div className={styles.cards_wrapp}>
        {values?.results?.length > 0 ? (
          values.results.map((value) => (
            <CardItemValues 
              key={value.id}
              icon={value.icon}
              title={value.title}
              description={value.description}
           />
          ))
        ) : (<div>Ценностей нет</div>)}
        </div>
      </div>
    </div>
  );
};

export default Values;
