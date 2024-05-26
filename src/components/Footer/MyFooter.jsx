import React from "react";
import styles from "./MyFooter.module.scss";
import inst from "../../assets/icons/instagram.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import vk from "../../assets/icons/vk.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import mail from '../../assets/icons/mail.svg';
import phone from '../../assets/icons/phone_android.svg';
import logo from '../../assets/icons/Beeline_Icon.svg'

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
            <img src={inst} alt="inst" />
            <img src={tiktok} alt="tiktok" />
            <img src={vk} alt="vk" />
            <img src={whatsapp} alt="whatsapp" />
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
            <div style={{width: "238px"}} className={styles.contact}>
              <div>Для оператора других сетей +996 (775)-58-0611</div>
            </div>
          </div>
        </div>
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles.icon}/>
          <p>© Beeline 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
