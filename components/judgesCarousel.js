import React from "react";
import Image from "next/image";
import styles from "../styles/judgesCarousel.module.css";

const JudgesCarousel = () => {
  const judges = [
    {
      id: 1,
      url: "/judges/Abhinav.jpeg",
    },
    {
      id: 2,
      url: "/judges/Akash.jpg",
    },
    {
      id: 3,
      url: "/judges/Ameer Jhan.jpg",
    },
    {
      id: 4,
      url: "/judges/arko.jpeg",
    },
    {
      id: 5,
      url: "/judges/Dominic.png",
    },
    {
      id: 6,
      url: "/judges/Kaustubh.jpeg",
    },
    {
      id: 7,
      url: "/judges/kaustubh.jpg",
    },
    {
      id: 8,
      url: "/judges/MadhavBahl.jpeg",
    },
    {
      id: 9,
      url: "/judges/ManishKumar.png",
    },
    {
      id: 10,
      url: "/judges/Sameer.png",
    },
    {
      id: 11,
      url: "/judges/Shreya.jpeg",
    },
    {
      id: 12,
      url: "/judges/Vinit.png",
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.slide_track}>
          {judges.map((judge) => {
            return (
              <div className={styles.slide} key={judge.id} >
                <Image className={styles.images} src={judge.url} layout="fill"/>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JudgesCarousel;
