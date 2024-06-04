import React, { useEffect } from 'react';
import styles from './WhyWe.module.scss';

import Aos from "aos";
import 'aos/dist/aos.css';
import { useGetWhyWeQuery } from '../../features/api/getApiSlice';

const WhyWe = () => {
  
  const {data: items, isLoading, error} = useGetWhyWeQuery()
  
  

  useEffect(() => {
    Aos.init({duration:2000});
  },[])

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heading} data-aos="zoom-in-down">
          <h1>
            Почему мы?
            <div className={styles.line}/>
          </h1>
        </div>
        <div className={styles.cards_wrapp}>
          {items?.results?.length > 0 ? (
            items.results.map((item) => (
              <div key={item.id} className={styles.card} data-aos="flip-up">
                <img src={item.icon} alt="head" />
                <p>{item.block_text}</p>
              </div>
            ))
          ) : (
            <div>Упс, что-то пошло не так</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WhyWe
