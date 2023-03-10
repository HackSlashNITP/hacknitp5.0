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
          {apiData.map((datum) => {
            return <SchedulingCard key={datum.id} title={datum.title} schedule={datum.schedule}/>
          })}
        </div>
      </div>
    </section>
  )
}

export default Apidays
