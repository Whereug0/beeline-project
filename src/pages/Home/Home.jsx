import React from 'react'
import styles from './Home.module.scss';
import MySwiper from '../../components/MySwiper/MySwiper';
import Values from '../../components/Values/Values';
import Missions from '../../components/Missions/Missions';
import Team from '../../components/Team/Team';
import WhyWe from '../../components/WhyWe/WhyWe';
import Vacancies from '../../components/Vacancies/Vacancies';
import MyForm from '../../components/Form/MyForm';



const Home = () => {
  return (
    <div className={styles.container}>
      <MySwiper />
      <Missions />
      <Values />
      <Team />
      <WhyWe />
      <Vacancies />
      <MyForm />
      <div className={styles.video_wrapp}>
        <iframe width="1200" height="500" src="https://www.youtube.com/embed/BzgLprGNU8I" title="Обзор головного офиса Beeline" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Home
