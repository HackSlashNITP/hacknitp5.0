import { useEffect } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import bgImage from "../public/anirudhxu4pz7gi9jyunsplash-11@2x.png";
import Carousel from "../components/carousel";

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

  return (
    <div
      className="relative bg-black w-full h-screen overflow-y-auto text-center text-xs text-white font-space-grotesk"
      id="about"
    >
      <Image className="absolute top-[0px] left-[0px]" alt="" src={bgImage} />
      <div className="absolute w-full h-screen top-0 left-0">
        <div className="wrapper min-h-full mb-[-0px]">
          <Header />
          <div className="content w-full h-full flex flex-col justify-start items-center ">
            <div className="about-us-info my-10">
              <h1 className="text-5xl md:text-xl sm:text-xl">ABOUT US</h1>
              <div className="w-full flex justify-start my-4 md:w-[90%] sm:w-[90%]">
                <div className="bg-[#1C172F] p-5 w-[50%] rounded-4xl md:w-full sm:w-full">
                  <p>
                    National Institute of Technology Patna is the 18th National
                    Institute of Technology created by the Ministry of H.R.D.
                    Government of India after rechristening the erstwhile Bihar
                    College of Engineering Patna on 28. 01. 2004.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-end my-4 md:w-[90%] sm:w-[90%]">
                <div className="bg-[#1C172F] p-5 w-[50%] rounded-4xl md:w-full sm:w-full">
                  <p>
                    National Institute of Technology Patna is the 18th National
                    Institute of Technology created by the Ministry of H.R.D.
                    Government of India after rechristening the erstwhile Bihar
                    College of Engineering Patna on 28. 01. 2004.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-us-judges w-full flex flex-col justify-center items-center">
              <h1 className="text-5xl md:text-xl sm:text-xl my-10">JUDGES</h1>
              <Carousel images={images} />
            </div>
            {/* <h3
                className="m-[0]  top-[1959px] left-[472px] text-6xl font-bold font-noto-sans inline-block w-[336px] h-[54px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
                id="judges"
                data-animate-on-scroll
              >
                JUDGES
              </h3>
              <div
                className=" top-[1225px] left-[99px] w-[1082px] h-[655px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
                id="box2"
                data-animate-on-scroll
              >
                <img
                  className=" top-[0px] left-[0px] rounded-[25px] w-[1082px] h-[585.8px] object-cover"
                  alt=""
                  src="../1892-2@2x.png"
                />
                <img
                  className=" top-[246.08px] left-[981.63px] w-[66px] h-[66px]"
                  alt=""
                  src="../iconlybulkarrow--right-circle.svg"
                />
                <img
                  className=" top-[246.32px] left-[28.93px] w-[66px] h-[66px]"
                  alt=""
                  src="../iconlybulkarrow--left-circle.svg"
                />
                <img
                  className=" top-[637px] left-[459px] w-[18px] h-[18px]"
                  alt=""
                  src="../ellipse-9.svg"
                />
                <img
                  className=" top-[637px] left-[495.72px] w-[18px] h-[18px]"
                  alt=""
                  src="../ellipse-10.svg"
                />
                <img
                  className=" top-[637px] left-[532.44px] w-[18px] h-[18px]"
                  alt=""
                  src="../ellipse-11.svg"
                />
                <img
                  className=" top-[637px] left-[569.16px] w-[18px] h-[18px]"
                  alt=""
                  src="../ellipse-12.svg"
                />
                <img
                  className=" top-[637px] left-[605.88px] w-[18px] h-[18px]"
                  alt=""
                  src="../ellipse-13.svg"
                />
              </div>
              <p className="m-[0]  top-[2457px] left-[423px] text-4xl font-bold inline-block w-[437px]">
                Judge Name
              </p>
              <span
                className=" top-[2510px] left-[423px] text-base inline-block w-[437px]"
                id="post"
              >
                CEO Bhagwa Gang NITP
              </span>
              <img
                className=" top-[2541px] left-[0px] w-[1280px] h-[339px] overflow-hidden"
                alt=""
                src="../frame-26.svg"
              /> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
