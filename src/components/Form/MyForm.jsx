import React, { useEffect, useState } from 'react';
import styles from './MyForm.module.scss';
import mobile from '../../assets/imgs/undraw_mobile_search_jxq5 1.png';
import { useForm } from 'react-hook-form';
import { useCreateFeedbackMutation } from '../../features/api/getApiSlice';
import fileIcon from "../../assets/icons/attach_file_white.svg";

const MyForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  const [value, setValue] = useState('');
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log('File selected:', file);
  };

  

  const [createFeedback, { isLoading, error }] = useCreateFeedbackMutation();
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const handleCreateFeedback = async (data) => {
    try {
      const formData = new FormData();
      for (const key in data) {
        if (key === "resume") {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      }
      console.log(formData)
      await createFeedback(formData);
      setSuccessMessage('Ваша заявка принята!');
      setErrorMessage('');
      reset();
    } catch (error) {
      console.error("Ошибка при создании/обновлении сообщения:", error);
      if (error.response && error.response.data) {
        console.log("Дополнительная информация об ошибке:", error.response.data);
      }
      setErrorMessage('Упс, что-то пошло не так');
      setSuccessMessage('');
    }
  };
  useEffect(() => {
    let timer;
    if (successMessage || errorMessage) {
      timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000); // 5 секунд
    }
    return () => clearTimeout(timer);
  }, [successMessage, errorMessage]);

  const onSubmit = (data) => {
    handleCreateFeedback(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} encType="multipart/form-data">
          <div className={styles.heading}>
            <h2>Не нашли подходящую вакансию?</h2>
            <p>Расскажи о себе и мы рассмотрим твою кандидатуру</p>
          </div>
          <div className={styles.inputWrapp}>
            <input
              type="text" 
              placeholder='ФИО'
              {...register("name", {
                required: true,
                maxLength: {
                  value: 50,
                  message: "Максимум 50 символов"
                },
              })}
            />
            {errors?.name && <p>{errors?.name?.message || ""}</p>}
          </div>
          <div className={styles.inputWrapp}>
            <input
              type="email" 
              placeholder='Email'
              {...register("email", {
                required: true,

              })}
            />
            {errors?.email && <p>Это поле обязательно!</p>}
          </div>
          <div className={styles.inputWrapp}>
            <input
              type="number" 
              placeholder='Номер телефона'
              {...register("phone", {
                required: "Это поле обязательно!",
                maxLength: {
                  value: 10,
                  message: "Некорректный номер телефона. Пример: 0700123456"
                },
                minLength: {
                  value: 10,
                  message: "Некорректный номер телефона, минимум 10 цифр"
                }
              })}
            />
            {errors?.phone && <p>{errors?.phone?.message || ""}</p>}
          </div>
          <div className={styles.inputWrapp}>
            <input
              type="text" 
              placeholder='Комментарии'
              {...register("feedback", {
                required: "Это поле обязательно!",
                minLength: {
                  value: 10,
                  message: "Минимум 10 символов"
                }
              })}
            />
            {errors?.feedback && <p>{errors?.feedback?.message || ""}</p>}
          </div>
          <div className={styles.file_wrapp}>
            <label htmlFor="file" className={styles["input-file"]}>
              <span>Резюме: </span>
              <input
                className={styles.file_input}
                id="file"
                name="resume"
                onChange={handleFileChange}
                accept=".jpg, .jpeg, .png, .svg, .pdf, .docs, .DOCX"
                type="file"
                {...register("resume", {
                  required: "Это поле обязательно!",
                })}
              />
              {/* <span>
                <img src={fileIcon} alt="fileIcon" />
                {selectedFile ? selectedFile.name : "Прикрепить файл"}
              </span> */}
            </label>
            {errors?.resume && <p>{errors?.resume?.message || ""}</p>}
          </div>
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          <button type='submit' disabled={isLoading}>Отправить</button>
          {error && <p className={styles.error}>Произошла ошибка: {error.message}</p>}
        </form>
        <img src={mobile} alt="mobile" />
      </div>
    </div>
  );
};

export default MyForm;