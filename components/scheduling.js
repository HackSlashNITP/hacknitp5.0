import React from "react";
import styles from "../styles/scheduling.module.css";
import data from "./timeline/timelineData";
import SchedulingCard from "./timeline/schedulingCard";

const Scheduling = () => {
  return (
    <section className={styles.main}>
      <div className={styles.timeline}>
        <div className={styles.heading}>Event Schedule</div>
        <div className={styles.outer}>
          {data.map((datum) => {
            return <SchedulingCard key={datum.id} title={datum.title} schedule={datum.schedule}/>
          })}
        </div>
      </div>
    </section>
  );
};

export default Scheduling;
