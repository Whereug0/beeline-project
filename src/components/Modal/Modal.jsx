import React from "react";
import styles from "./Modal.module.scss";
import closeIcon from "../../assets/icons/close.svg";
import { useForm } from "react-hook-form";

const Modal = ({ active, setActive, close }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
  };

  return (
    <div
      className={`${styles.modal} ${active ? styles.modal__active : ""}`}
      onClick={() => setActive(false)}
    >
      <form
        className={`${styles.modal__content} ${
          active ? styles.modal__content__active : ""
        }`}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.icon_wrapp}>
          <img src={closeIcon} alt="close" onClick={close} />
        </div>
        <h2>Заявка на вакансию</h2>
        <div className={styles.input_wrapp}>
          <label htmlFor="name">ФИО</label>
          <input
            type="text"
            placeholder="ФИО"
            {...register("fullName", {
              required: true,
            })}
          />
          {errors?.fullName && <p>Это поле обязательно!</p>}
        </div>
        <div className={styles.input_wrapp}>
          <label htmlFor="phone">Номер телефона</label>
          <input
              type="number" 
              placeholder='Номер телефона'
              {...register("number", {
                required: "Это поле обязательно!",
                minLength: {
                  value: 10,
                  message: "Некорректный номер телефона"
                }
              })}
            />
            {errors?.number && <p>{errors?.number?.message || ""}</p>}
        </div>
        <div className={styles.input_wrapp}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors?.email && <p>Это поле обязательно!</p>}
        </div>
        <div className={styles.input_wrapp}>
          <label htmlFor="letter">Сопроводителное письмо</label>
          <input
              type="text" 
              placeholder='Сопроводителное письмо'
              {...register("letter", {
                required: "Это поле обязательно!",
                minLength: {
                  value: 10,
                  message: "Минимум 10 симловов"
                }
              })}
            />
            {errors?.letter && <p>{errors?.letter?.message || ""}</p>}
        </div>
        <button className={styles.submitBtn} type="submit">Откликнуться</button>
      </form>
    </div>
  );
};

export default Modal;
