import React from "react";
import Image from "next/image";
import styles from "../styles/judgesCarousel.module.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const JudgesCarousel = () => {
  const judges = [
    {
      id: 1,
      name: "Abhinav",
      role: "Software Development Engineer",
      des: "Amazon",
      url: "/judges/Abhinav.jpeg",
      linkedin: "https://www.linkedin.com/in/mastersabh/",
      twitter: "",
      github: "",
    },
    {
      id: 2,
      name: "Adeeba Naaz",
      role: "SDE",
      des: "Microsoft",
      url: "/judges/adeeba.png",
      linkedin: "https://www.linkedin.com/in/adeeba-naaz-153427113/",
      twitter: "",
      github: "",
    },

    {
      id: 3,
      name: "Vrinda Gupta",
      role: "Web developer",
      des: "Microsoft",
      url: "/judges/vrinda.png",
      linkedin: "https://www.linkedin.com/in/vrindagupta6828/",
      twitter: "",
      github: "",
    },
    {
      id: 4,
      name: "Shrankhla Srivastava",
      role: "ML, AI Mentor",
      des: "AnitaB.org",
      url: "/judges/srk.png",
      linkedin: "https://www.linkedin.com/in/shrankhla-srivastava-igdtuw/",
      twitter: "",
      github: "",
    },
     
    {
      id: 6,
      name: "Shreya Singh",
      role: "Software Development Engineer",
      des: "Uber",
      url: "/judges/Shreya.jpeg",
      linkedin: "https://www.linkedin.com/in/singh-shreya/",
      twitter: "",
      github: " ",
    },
    {
      id: 6,
      name: "Aman Singh",
      role: "Software Development Engineer",
      des: "Microsoft",
      url: "/judges/aman.png",
      linkedin: "https://www.linkedin.com/in/aman-singh-1b3287174/",
      twitter: "",
      github: " ",
    },
    {
      id: 7,
      name: "Gunjan Madaan",
      role: "Software Development Engineer",
      des: "Microsoft",
      url: "/judges/gunjan.png",
      linkedin: "https://www.linkedin.com/in/gunjanmadaan",
      twitter: "",
      github: " ",
    },

    {
      id: 6,
      name: "Pallavi Shrivastava",
      role: "Product /UI/UX Designer",
      des: "Busibud",
      url: "/judges/pallavi.png",
      linkedin: "https://www.linkedin.com/in/pallavisrstv/",
      twitter: "",
      github: " ",
    },
    
    {
      id: 9,
      name: "Ayushi Prakash",
      role: "UI/UX Designer",
      des: "Gif Games",
      url: "/judges/ayushi.png",
      linkedin: "https://www.linkedin.com/in/ayushiprakash03/",
      twitter: "",
      github: " ",
    },
    
    // {
    //   id: 12,
    //   url: "/judges/arko.jpeg",
    // },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.slider}>
        <div className={styles.slide_track}>
          {/* mapping here */}
          {judges.map((judge) => {
            return (
              <div className={styles.slide} key={judge.id}>
                {/* trying apply overlay here */}

                <div className={styles.wrapper}>
                  <img
                    className={styles.images}
                    src={judge.url}
                    layout="fill"
                  />
                  <div className={styles.overlay}>
                    <div className={styles.content}>
                      <a className={styles.tag}>{judge.name}</a>
                      <small className={styles.des}>({judge.des})</small>
                      <div className={styles.tag}>
                        {judge.linkedin && (
                          <a
                            href={judge.linkedin}
                            target="_blank"
                            className="text-[#2BFF08]"
                          >
                            <AiFillLinkedin />
                          </a>
                        )}
                        {judge.github && (
                          <a
                            href={judge.github}
                            target="_blank"
                            className="text-[#2BFF08]"
                          >
                            <AiFillGithub />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JudgesCarousel;
