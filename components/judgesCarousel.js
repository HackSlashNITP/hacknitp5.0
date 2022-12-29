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
      name: "Akash Bajpai",
      role: "Associate Software Engineer",
      des: "Lowe's India",
      url: "/judges/Akash.jpg",
      linkedin: "https://www.linkedin.com/in/akash4bajpai/",
      twitter: "",
      github: "",
    },
    {
      id: 3,
      name: "Ameer Jhan",
      role: "Senior Software Development Engineer",
      des: "HackerRank",
      url: "/judges/Ameer Jhan.jpg",
      linkedin: "https://www.linkedin.com/in/ameerthehacker/",
      twitter: "",
      github: "https://github.com/ameerthehacker",
    },
    {
      id: 4,
      name: "Dominic Norton",
      role: "Product Manager",
      des: "BlueOptima",
      url: "/judges/Dominic.png",
      linkedin: "https://www.linkedin.com/in/dominiconorton/",
      twitter: "",
      github: "",
    },
    {
      id: 5,
      name: 'Vinit Shahdeo',
      role: 'Software Engineer II',
      des:'Postman',
      url: "/judges/Vinit.png",
      linkedin: 'https://www.linkedin.com/in/vinitshahdeo/',
      twitter: '',
      github: 'https://github.com/vinitshahdeo',
    },
    {
      id: 6,
      name: "Kaustubh Karkare",
      role: "Senior Software Engineer",
      des: "Meta Platforms",
      url: "/judges/kaustubh.jpg",
      linkedin: "https://www.linkedin.com/in/kaustubh-karkare/",
      twitter: "",
      github: "https://github.com/kaustubh-karkare",
    },
    {
      id: 7,
      name: "Madhav Bahl",
      role: "Software Engineer",
      des: "Microsoft",
      url: "/judges/MadhavBahl.jpeg",
      linkedin: "https://www.linkedin.com/in/madhavbahl/",
      twitter: "",
      github: "https://github.com/MadhavBahl",
    },
    {
      id: 8,
      name: "Manish.k Vats",
      role: "Android Developer",
      des: "Fruitfal",
      url: "/judges/ManishKumar.png",
      linkedin: "https://www.linkedin.com/in/manish-kumar-vats",
      twitter: "",
      github: "https://github.com/manish-Kumar-Vats/",
    },
    {
      id: 9,
      name: "Sameer Kashyap",
      role: "Software Engineer",
      des: "FrontRow",
      url: "/judges/Sameer.png",
      linkedin: "https://www.linkedin.com/in/sameer-kashyap-083a89184",
      twitter: "",
      github: "https://github.com/Sameerkash",
    },
    {
      id: 10,
      name: "Shreya Singh",
      role: "Software Development Engineer",
      des: "Amazon",
      url: "/judges/Shreya.jpeg",
      linkedin: "https://www.linkedin.com/in/singh-shreya/",
      twitter: "",
      github: " ",
    },
    {
      id: 11,
      name: 'Kaustubh M. Patil',
            role: 'Software Developer',
            url: "/judges/kaustubh.jpeg",
            des:'FOSS United',
            linkedin: 'https://www.linkedin.com/in/kaustubh42/',
            twitter: '',
            github: 'https://github.com/nikochiko',
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
