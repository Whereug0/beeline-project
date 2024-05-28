import React from "react";

import { Link, NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { ROUTES } from "../../utils/routes";

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
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            to={ROUTES.HOME}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            to={ROUTES.VACANCIES}
          >
            Вакансии
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BurgerMenu;
