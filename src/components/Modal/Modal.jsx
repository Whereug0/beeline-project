import React from 'react';
import styles from './Modal.module.scss';
import closeIcon from '../../assets/icons/close.svg'

const Modal = ({ active, setActive, close}) => {
  return (
    <div className={`${styles.modal} ${active ? styles.modal__active : ''}`} onClick={() => setActive(false)}>
      <div className={`${styles.modal__content} ${active ? styles.modal__content__active : ''}`} onClick={e => e.stopPropagation()}>
        <div className={styles.icon_wrapp}>
          <img src={closeIcon} alt="close" onClick={close}/>
        </div>
        <h2>Заявка на вакансию</h2>
        <div className={styles.input_wrapp}>
          <label htmlFor="city">Город вакансии</label>
          <input type="text" id='city'/>
        </div>
        <div className={styles.input_wrapp}>
          <label htmlFor="vacancy">Вакансия</label>
          <input type="text" id='vacancy'/>
        </div>
        <div className={styles.input_wrapp}>
          <label htmlFor="name">ФИО</label>
          <input type="text" id='name'/>
        </div>
        <div className={styles.input_wrapp}>
          <label htmlFor="phone">Номер телефона</label>
          <input type="text" id='phone'/>
        </div>
        <div className={styles.input_wrapp}>
          <label htmlFor="email">Email</label>
          <input type="email" id='email'/>
        </div>
        <div className={styles.input_wrapp}>
          <label htmlFor="letter">Сопроводителное письмо</label>
          <textarea type="text" id='letter'/>
        </div>
        <button className={styles.submitBtn}>Откликнуться</button>
      </div>
    </div>
  )
}

export default Modal
