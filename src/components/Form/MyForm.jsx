import React from 'react';
import styles from './MyForm.module.scss';
import mobile from '../../assets/imgs/undraw_mobile_search_jxq5 1.png'
const MyForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form action="" onSubmit={e => e.preventDefault()} className={styles.form}>
          <div className={styles.heading}>
            <h2>Не нашли подходящую вакансию?</h2>
            <p>Расскажи о себе и мы рассмотрим твою кандидатуру</p>
          </div>
          <input type="text" placeholder='ФИО'/>
          <input type="email" placeholder='Email'/>
          <input type="text" placeholder='Номер телефона'/>
          <input type="text" placeholder='Комментарии'/>
          <button type='submit'>Отправить</button>
        </form>
        <img src={mobile} alt="mobile" />
      </div>
    </div>
  )
}

export default MyForm
