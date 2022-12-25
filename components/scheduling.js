import React from 'react'
import styles from "../styles/scheduling.module.css"

const Scheduling = () => {
  return (
    <section className={styles.main}>
    <div className={styles.timeline}>
        <div className={styles.heading}>Event Schedule</div>
  <div className={styles.outer}>
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>Event 1</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, quia! </p>
      </div>
    </div>
    
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>Event 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repudiandae. </p>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>Event 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repudiandae. </p>
      </div>
    </div>
    
  </div>
</div>
</section>
  )
}

export default Scheduling
