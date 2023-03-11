import React from 'react'
import styles from "../styles/scheduling.module.css";
import apiData from './timeline/apiDaysData';
import SchedulingCard from "./timeline/schedulingCard";


const Apidays = () => {
  return (
    <section className={styles.main}>
      <div className={styles.timeline}>
        <div className={styles.heading}> API-Days Patna Schedule</div>
        <div className={styles.outer}>
         
        <div className={styles.card}>
       <div className={styles.info}>
        <h3 className={styles.title}>Day 0</h3>
        <p>Online Student Expert Training Session</p>
      </div>
    </div>

    <div className={styles.card}>
       <div className={styles.info}>
        <h3 className={styles.title}>Day 1</h3>
        <p>- APIs 101</p>
        <p>- APIs 102</p>
      </div>
    </div>

    <div className={styles.card}>
       <div className={styles.info}>
        <h3 className={styles.title}>Day 2</h3>
        <p>- APIs 103(Integrated MongoDB Data API and automated testing).</p>
        <p>- Securely Package and Deploy your APIs with Docker and Docker Compose.</p>
      </div>
    </div>

        </div>
      </div>
    </section>
  )
}

export default Apidays
