import React from "react";
import styles from "./MyFooter.module.scss";
import inst from "../../assets/icons/inst.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import vk from "../../assets/icons/ic_vk.svg.svg";
import whatsapp from "../../assets/icons/wa.svg.svg";
import mail from "../../assets/icons/mail.svg";
import blackLogo from "../../assets/imgs/Logo-onblack-01.png";
import phone from "../../assets/icons/phone_android.svg";
import youtube from "../../assets/icons/ic_yotube.svg.svg";
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/ic_fb.svg.svg";
const MyFooter = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.lists_wrapp}>
          <ul>
            <h2>Частным лицам</h2>
            <li>Перейти в Beeline</li>
            <li>Тарифы</li>
            <li>Услуги</li>
            <li>Акции и новости</li>
            <li>Роуминг и звонки зарубеж</li>
            <li>Пополнение</li>
            <li>О компании</li>
          </ul>
          <ul>
            <h2>Бизнес</h2>
            <li>Стать корпоративным клиентом</li>
            <li>Тарифы</li>
            <li>Тарифы</li>
            <li>Тарифы</li>
          </ul>
          <ul>
            <h2>Компания</h2>
            <li>О нас</li>
            <li>Устойчивое развитие</li>
            <li>Работа в Beeline</li>
            <li>Стажировка в Beeline</li>
            <li>Кодекс поведения БП</li>
            <li>Новости компании</li>
            <li>Закупки</li>
            <li>Политика конфиденциальности</li>
          </ul>
          <ul>
            <h2>Поддержка</h2>
            <li>Обратная связь</li>
            <li>Настройки интернета</li>
            <li>Офисы</li>
            <li>Оставить заявку</li>
            <li>Полезные документы</li>
            <li>Отправка SMS</li>
            <li>Whatsapp-чат</li>
          </ul>
        </div>
        <div className={styles.media_contacts}>
          <div className={styles.media_wrapp}>
            <a
              href="https://www.instagram.com/beeline_kyrgyzstan/"
              target="_blank"
            >
              <img src={inst} alt="inst" />
            </a>

            <a href="https://vm.tiktok.com/ZSJD2aSBd/" target="_blank">
             <img src={tiktok} alt="tiktok" />
            </a>
            <a href="https://www.youtube.com/channel/UCFfbciGMeZbl6rL69VOC2gQ" target="_blank">
              <img src={youtube} alt="youtube" />
            </a>

            <a href="https://vk.com/beelinekg" target="_blank">
              <img src={vk} alt="vk" />
            </a>

            <a href="https://x.com/beelinekg" target="_blank">
              <img src={twitter} alt="x.com" />
            </a>

            <a href="https://api.whatsapp.com/send/?phone=996777006611&text&type=phone_number&app_absent=0" target="_blank">
              <img src={whatsapp} alt="whatsapp" />
            </a>

            <a href="https://www.facebook.com/beeline.kg/" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          <div className={styles.contacts_wrapp}>
            <div className={styles.contact}>
              <img src={mail} alt="mail" />
              <p>answer@beeline.kg</p>
            </div>
            <div className={styles.contact}>
              <img src={phone} alt="phone" />
              <p>*611 справочная</p>
            </div>
            <div style={{ width: "238px" }} className={styles.contact}>
              <div>Для оператора других сетей +996 (775)-58-0611</div>
            </div>
          </div>
        </div>
        <div className={styles.logo}>
          <img src={blackLogo} alt="logo" className={styles.icon} />
          <p>© Beeline 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
