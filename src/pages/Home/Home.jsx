import React from "react";
import styles from "./Home.module.scss";
import MySwiper from "../../components/MySwiper/MySwiper";
import Values from "../../components/Values/Values";
import Missions from "../../components/Missions/Missions";
import Team from "../../components/Team/Team";
import WhyWe from "../../components/WhyWe/WhyWe";
import Vacancies from "../../components/Vacancies/Vacancies";
import MyForm from "../../components/Form/MyForm";
import { useGetVideoQuery } from "../../features/api/getApiSlice";

const Home = () => {
  const { data: video, isLoading, error } = useGetVideoQuery();
  console.log(video);

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
        {video?.results?.length > 0 ? (
          video.results.map((video) => (
            <video controls>
              <source src={video.video} />
            </video>
          ))
        ) : (
          <div>видео нет</div>
        )}
      </div>
    </div>
  );
};

export default Home;
