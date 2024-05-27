import React, { useState } from "react";
import styles from "./Header.module.scss";
import BurgerMobile from "../BurgerIcon/BurgerIcon";
import { ReactComponent as BeelineIcon } from "../../assets/icons/Beeline_Icon.svg";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Header = () => {
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);

  const handleShowBurgerMenu = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <BurgerMobile
          isActiveBurgerMenu={isActiveBurgerMenu}
          setIsActiveBurgerMenu={setIsActiveBurgerMenu}
          onClick={handleShowBurgerMenu}
        />
        <div className={styles.logo}>
          <BeelineIcon className={styles.icon} />
        </div>

        <div className={styles.navMenu}>
          <ul className={styles.links}>
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
