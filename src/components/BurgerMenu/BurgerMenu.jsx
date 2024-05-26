import React from "react";

import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import clsx from "clsx";

const BurgerMenu = (props) => {
  const { isActiveBurgerMenu, setIsActiveBurgerMenu } = props;

  const navMenuClasses = clsx(styles["nav-menu"], {
    [styles["nav-menu-active"]]: isActiveBurgerMenu,
  });

  const handleQuitBurgerMenu = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };

  return (
    <nav className={navMenuClasses}>
      <ul className={styles["nav-menu__list"]}>      
          <li>Тарифы</li>
          <li>Услуги</li>
          <li>Пополнение</li>
          <li>Роуминг</li>
          <li>Работа</li>
      </ul>
    </nav>
  );
};

export default BurgerMenu;
