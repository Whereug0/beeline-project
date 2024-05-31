import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const BurgerMobile = (props) => {
  const { isActiveBurgerMenu, setIsActiveBurgerMenu, onClick} = props;

  const burgerMenuClasses = clsx(styles["burger-mobile-wrap"], {
    [styles["burger-mobile-wrap__active"]]: isActiveBurgerMenu,
  });

  return (
    <div onClick={onClick} className={burgerMenuClasses}>
    <span className={styles.line}></span>
      <BurgerMenu
        setIsActiveBurgerMenu={setIsActiveBurgerMenu}
        isActiveBurgerMenu={isActiveBurgerMenu}
      />
    </div>
  );
};

export default BurgerMobile;
