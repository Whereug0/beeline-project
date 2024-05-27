import React, { useEffect } from "react";
import styles from "./Values.module.scss";
import CardItemValues from "./CardItemValues/CardItemValues";
import Customer from "../../assets/icons/customer.svg";
import Collaborative from "../../assets/icons/Collaborative.svg";
import Entrepreneurial from "../../assets/icons/Entrepreneurial.svg";
import Innovative from "../../assets/icons/Innovative.svg";
import Truthful from "../../assets/icons/Truthful.svg";

import Aos from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";

const Values = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos="zoom-in-down">
          <h1>
            Наши ценности
            <div className={styles.line} />
          </h1>
          <span>
            В Beeline все начинается с наших клиентов. Наш новаторский дух
            восходит к нашим предпринимательским корням, вдохновляя
            взаимодействие, инновации и прежде всего честность с самим собой и
            по отношению к окружающему миру.
          </span>
        </div>
        <div className={styles.cards_wrapp}>
          <div className={styles.cards_1_2}>
            <CardItemValues
              img={Customer}
              className={styles.card1}
              heading="Люблю клиента"
              text="В центре всего, что мы делаем – забота о наших клиентах. Мы готовы к смелым решениям в интересах наших клиентов.
              Мы всегда в курсе того, что происходит на рынке и у наших конкурентов, но работаем для клиентов.
              В основе всех наших инноваций и диджитал решений – потребности и интересы клиентов."
              // text="В центре всего, что мы делаем – забота о наших клиентах. Мы готовы к смелым решениям в интересах наших клиентов. Мы всегда в курсе того, что происходит на рынке и у наших конкурентов, но работаем для клиентов. В основе всех наших инноваций и диджитал решений – потребности и интересы клиентов."
            />
            <CardItemValues
              img={Entrepreneurial}
              className={styles.card2}
              heading="Отвечаю за бизнес-результат"
              text="Мы думаем и действуем как предприниматели, увлеченно занимаемся своим делом и отвечаем за бизнес-результат. Мы гибкие и динамичные. Нам нравится расширять границы и открывать новые возможности. Мы не боимся совершать ошибки и всегда стремимся создавать новое. Мы готовы на оправданный риск, но только в интересах наших клиентов. Мы подаем пример: всегда делаем то, что обещаем."
            />
          </div>
          <CardItemValues
            img={Innovative}
            className={styles.card3}
            heading="Создаю будущее"
            text="Мы постоянно в поиске прорывных идей. Мы открыты к
            изменениям и новым подходам. Мы быстро внедряем 
            новые подходы."
          />
          <div className={styles.cards_4_5}>
            <CardItemValues
              img={Collaborative}
              className={styles.card4}
              heading="Работаю в команде"
              text="Мы работаем в команде, уважаем и ценим время друг 
              друга. Мы не ищем виноватых, мы предлагаем решения и
              берем на себя ответственность. Когда мы работаем вместе
              мы достигаем результата лучше и быстрее. Мы - команда."
            />
            <CardItemValues
              img={Truthful}
              className={styles.card5}
              heading="Честен и открыт"
              text="Мы открыты, честны, верны своим принципам. Мы 
              надежные партнеры, держим свои обещания, признаем
              ошибки перед клиентами, партнерами, руководством,
              акционерами."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
