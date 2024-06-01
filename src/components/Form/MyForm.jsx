import React, { useState } from 'react';
import styles from './MyForm.module.scss';
import mobile from '../../assets/imgs/undraw_mobile_search_jxq5 1.png';
import { useForm } from 'react-hook-form';
import { useCreateFeedbackMutation } from '../../features/api/getApiSlice';

const MyForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [createFeedback, { isLoading, error }] = useCreateFeedbackMutation();
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const handleCreateFeedback = async (data) => {
    try {
      await createFeedback(data);
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

  const onSubmit = (data) => {
    handleCreateFeedback(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form action="" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.heading}>
            <h2>Не нашли подходящую вакансию?</h2>
            <p>Расскажи о себе и мы рассмотрим твою кандидатуру</p>
          </div>
          <div className={styles.inputWrapp}>
            <input
              type="text" 
              placeholder='ФИО'
              {...register("name", {
                required: true
              })}
            />
            {errors?.name && <p>Это поле обязательно!</p>}
          </div>
          <div className={styles.inputWrapp}>
            <input
              type="email" 
              placeholder='Email'
              {...register("email", {
                required: true
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