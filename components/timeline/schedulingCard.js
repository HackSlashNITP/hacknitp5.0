import React from "react";
import styles from "../../styles/scheduling.module.css";

const SchedulingCard = ({title, schedule}) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p>{schedule}</p>
      </div>
    </div>
  );
};

export default SchedulingCard;
