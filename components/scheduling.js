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
        <h3 className={styles.title}>Registration Starts</h3>
        <p>15 January, 21:00 IST / 15:30 GMT </p>
      </div>
    </div>
    
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>Info Session</h3>
        <p>3 February, 18:00 IST / 12:30 GMT</p>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>Workshop series starts</h3>
        <p>4 February</p>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>Workshop series ends</h3>
        <p>10 February</p>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>Hackathon registration ends</h3>
        <p>10 February, 21:00 IST / 15:30 GMT</p>
      </div>
    </div>


    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>Opening Ceremony</h3>
        <p>11 February, 16:00 IST / 10:30 GMT</p>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>Hackathon Starts.</h3>
        <p>11 February, 18:00 IST / 12:30 GMT</p>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>Hackathon Ends.</h3>
        <p>13 February, 18:00 IST / 12:30 GMT</p>
      </div>
    </div>

    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>Closing Ceremony.</h3>
        <p>20 February, 18:00 IST / 12:30 GMT</p>
      </div>
    </div>

    
  </div>
</div>
</section>
  )
}

export default Scheduling
