import React from 'react';
import styles from './MyForm.module.scss';
import mobile from '../../assets/imgs/undraw_mobile_search_jxq5 1.png';
import { useForm } from 'react-hook-form';

const MyForm = () => {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

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
              {...register("fullName", {
                required: true
              })}
            />
            {errors?.fullName && <p>Это поле обязательно!</p>}
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
          <div className={styles.inputWrapp}>
            <input
              type="text" 
              placeholder='Комментарии'
              {...register("text", {
                required: "Это поле обязательно!",
                minLength: {
                  value: 10,
                  message: "Минимум 10 симловов"
                }
              })}
            />
            {errors?.text && <p>{errors?.text?.message || ""}</p>}
          </div>
          <button type='submit'>Отправить</button>
        </form>
        <img src={mobile} alt="mobile" />
      </div>
    </div>
  )
}

export default MyForm
