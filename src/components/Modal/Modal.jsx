import React, { useState } from "react";
import styles from "./Modal.module.scss";
import closeIcon from "../../assets/icons/close.svg";
import { useForm } from "react-hook-form";
import { useCreateAnketaMutation } from "../../features/api/getApiSlice";
import fileIcon from "../../assets/icons/attach_file.svg";

const Modal = ({ active, setActive, close, vacancyId }) => {
  const [createAnketa] = useCreateAnketaMutation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };



  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleCreateAnketa = async (data) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        if (key === "resume") {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      }
      formData.append("vacancy", vacancyId);

      await createAnketa(formData);
      setSuccessMessage("Вы откликнулись на вакансию успешно!");
      setErrorMessage("");
      reset();
      setTimeout(() => {
        setActive(false);
      }, 1500);
    } catch (error) {
      console.error("Ошибка при создании/обновлении сообщения:", error);
      if (error.response && error.response.data) {
        console.log(
          "Дополнительная информация об ошибке:",
          error.response.data
        );
      }
      setErrorMessage("Упс, что-то пошло не так");
      setSuccessMessage("");
    }
  };

  const onSubmit = (data) => {
    handleCreateAnketa(data);
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
        encType="multipart/form-data"
      >
        <div className={styles.content_wrapp}>
          <div className={styles.icon_wrapp}>
            <img
              className={styles.closeIcon}
              src={closeIcon}
              alt="close"
              onClick={close}
            />
          </div>
          <h1>Заявка на вакансию</h1>
          <div className={styles.input_wrapp}>
            <label htmlFor="surname">Фамилия</label>
            <input
              type="text"
              placeholder="Фамилия"
              {...register("surname", {
                required: true,
              })}
            />
            {errors?.surname && <p>Это поле обязательно!</p>}
          </div>
          <div className={styles.input_wrapp}>
            <label htmlFor="name">Имя</label>
            <input
              type="text"
              placeholder="Имя"
              {...register("name", {
                required: true,
              })}
            />
            {errors?.name && <p>Это поле обязательно!</p>}
          </div>
          <div className={styles.input_wrapp}>
            <label htmlFor="phone">Номер телефона</label>
            <input
              type="number"
              placeholder="Номер телефона"
              {...register("phone", {
                required: "Это поле обязательно!",
                maxLength: {
                  value: 10,
                  message: "Некорректный номер телефона. Пример: 0700123456",
                },
                minLength: {
                  value: 10,
                  message: "Некорректный номер телефона",
                },
              })}
            />
            {errors?.phone && <p>{errors?.phone?.message || ""}</p>}
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
            <label htmlFor="motivation_letter">Сопроводительное письмо</label>
            <textarea
              type="text"
              {...register("motivation_letter", {
                required: "Это поле обязательно!",
                minLength: {
                  value: 10,
                  message: "Минимум 10 символов",
                },
              })}
            />
            {errors?.motivation_letter && (
              <p>{errors?.motivation_letter?.message || ""}</p>
            )}
          </div>
          <div className={styles.file_wrapp}>
            <span>Резюме</span>
            <label htmlFor="file" className={styles["input-file"]}>
              <input
                className={styles.file_input}
                id="file"
                onChange={handleFileChange}
                accept=".jpg, .jpeg, .png, .svg, .pdf, .docs, .DOCX"
                type="file"
                {...register("resume", {
                  required: "Это поле обязательно!",
                })}
              />
              <span>
                <img src={fileIcon} alt="fileIcon" />
                {selectedFile ? selectedFile.name : "Прикрепить файл"}
              </span>
            </label>
            {errors?.resume && <p>{errors?.resume?.message || ""}</p>}
          </div>
          {successMessage && (
            <p className={styles.successMessage}>{successMessage}</p>
          )}
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
          <button className={styles.submitBtn} type="submit">
            Откликнуться
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
