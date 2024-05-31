import React, { useEffect } from "react";
import styles from "./Missions.module.scss";
import CardItemMissions from "./CardItemMissions/CardItemMissions";


import Aos from "aos";
import 'aos/dist/aos.css';
import { useGetMissionsQuery } from "../../features/api/getApiSlice";

const Missions = () => {

  const {data: missions, isLoading, error} = useGetMissionsQuery()

  useEffect(() => {
    Aos.init({duration:2000});
  },[])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos='zoom-in-down'>
          <h1>
            Наша миссия
            <div className={styles.line}/>
          </h1>
          <span>
            Делая связь частью жизни, мы открываем доступ к информации, общению
            и даем кыргызстанцам безграничные возможности для развития страны и
            общества.
          </span>
        </div>
        <div className={styles.cards_wrapp}>
          {missions?.results?.length > 0 ? (
            missions.results.map((mission) => (
              <CardItemMissions key={mission.id} img={mission.icon} text={mission.block_text}/>
            ))
          ) : (<div>Миссий нет</div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Missions;
