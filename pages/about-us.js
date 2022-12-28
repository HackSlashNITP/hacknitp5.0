import { useEffect } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import JudgesCarousel from "../components/judgesCarousel";
import Hacknitp from "../public/hacknitp.png";
import gdsc from "../public/gdsc.png";

const AboutUs = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const images = [
    {
      id: 1,
      src: "/1892-2@2x.png",
      alt: "",
    },
    {
      id: 2,
      src: "/group-1332@2x.png",
      alt: "",
    },
  ];

  const data = [
    {
      name: "HackSlash Club",
      logo: Hacknitp,
      facebook: "https://www.facebook.com/hackSlash.nitp",
      insta: "https://www.instagram.com/hackslash.nitp",
      linkedin: "https://www.linkedin.com/company/hackslash",
      desc: "HackSlash Developer Club, NIT Patna is a community intended to provide a room for college students to learn and collaborate on a plethora of projects among themselves as well as with mentors. It is open for every student, ranging from novice developers who are just starting, to advanced developers who want to further enhance their skills.",
    },
    {
      name: "GDSC NIT Patna",
      logo: gdsc,
      facebook: "https://www.facebook.com/gdscnitp",
      insta: "https://www.instagram.com/gdscnitp",
      linkedin: "https://www.linkedin.com/company/gdscnitp",
      desc: "Google Developer Student Clubs NIT Patna is local community group of NIT Patna college students interested in Google developer technologies. The GDSC organizes numerous events ranging from small meetups for working on projects to large-scale hackathons.",
    },
  ];

  return (
    <div
      className="bg-black w-full h-screen overflow-y-auto text-center text-xs text-white font-space-grotesk"
      id="about"
    >
      <div className="w-full md:bg-[url('../public/background-medium.jpg')] bg-[url('../public/background.jpg')] bg-cover md:bg-center bg-no-repeat h-screen top-0 left-0">
        <div className="wrapper min-h-full mb-[-0px]">
          <Header />
          <div className="content w-full h-full flex flex-col justify-start items-center md:justify-center sm:justify-center">
            <div className="about-us-info my-10">
              <h1 className="text-5xl md:text-[25px] sm:text-[25px]">
                ABOUT US
              </h1>
              <div className="w-full flex justify-start rounded-r-2xl my-4 md:w-full sm:w-full sm:text-[15px] md:text-[16px]">
                <div className="bg-[#1C172F] p-5 w-[45%] rounded-4xl md:w-full sm:w-full flex flex-col gap-y-3 justify-center items-center">
                  <Image
                    src={data[0].logo.src}
                    alt={data[0].name}
                    width={200}
                    height={200}
                    className="rounded-2xl"
                  />
                  <h2>{data[0].name}</h2>
                  <span className="flex flex-wrap gap-10 sm:mt-0 mt-4 items-center justify-center sm:center">
                    <a
                      href={data[0].insta}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="cursor-pointer bg-[transparent] mb-3 flex text-white text-4xl justify-center items-center hover:scale-150 hover:text-[#a21caf]">
                        <AiFillInstagram />
                      </div>
                    </a>
                    <a
                      href={data[0].facebook}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="cursor-pointer bg-[transparent] mb-3 flex text-white text-4xl justify-center items-center hover:scale-150 hover:text-[#0ea5e9]">
                        <AiFillFacebook />
                      </div>
                    </a>
                    <a
                      href={data[0].linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="cursor-pointer bg-[transparent] mb-3 flex text-white text-4xl justify-center items-center hover:scale-150 hover:text-[#2563eb]">
                        <AiFillLinkedin />
                      </div>
                    </a>
                  </span>
                  <p className="p-3">{data[0].desc}</p>
                </div>
              </div>
              <div className="w-full flex justify-end my-4 md:my-10 md:w-full sm:w-full">
                <div className="bg-[#1C172F] p-5 w-[45%] rounded-4xl md:w-full sm:w-full flex flex-col gap-y-3 justify-center items-center">
                  <Image
                    src={data[1].logo.src}
                    alt={data[1].name}
                    width={200}
                    height={200}
                    className="rounded-2xl"
                  />
                  <h2>{data[1].name}</h2>
                  <span className="flex flex-wrap gap-10 sm:mt-0 mt-4 items-center justify-center sm:center">
                    <a
                      href={data[1].insta}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="cursor-pointer bg-[transparent] mb-3 flex text-white text-4xl justify-center items-center hover:scale-150 hover:text-[#a21caf]">
                        <AiFillInstagram />
                      </div>
                    </a>
                    <a
                      href={data[1].facebook}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="cursor-pointer bg-[transparent] mb-3 flex text-white text-4xl justify-center items-center hover:scale-150 hover:text-[#0ea5e9]">
                        <AiFillFacebook />
                      </div>
                    </a>
                    <a
                      href={data[1].linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div className="cursor-pointer bg-[transparent] mb-3 flex text-white text-4xl justify-center items-center hover:scale-150 hover:text-[#2563eb]">
                        <AiFillLinkedin />
                      </div>
                    </a>
                  </span>
                  <p className="p-3">{data[1].desc}</p>
                </div>
              </div>
            </div>
            <div className="about-us-judges w-full flex flex-col justify-center items-center my-3">
              <h1 className="text-5xl md:text-[25px] sm:text-[25px] my-10 md:my-0 sm:my-0">
                PAST-YEAR JUDGES
              </h1>
              <JudgesCarousel />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
