import { useEffect } from "react";
import RectangleComponentOfAbbout from "../components/rectangle-component-of-abbout";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import bgImage from "../public/anirudhxu4pz7gi9jyunsplash-11@2x.png";

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

  return (
    <div
      className="relative bg-black w-full h-screen overflow-y-auto text-center text-xs text-white font-space-grotesk"
      id="about"
    >
      <Image className="absolute top-[0px] left-[0px]" alt="" src={bgImage} />
      <div className="absolute w-full h-screen top-0 left-0">
        <div className="wrapper min-h-full mb-[-0px]">
          <Header />
          <div className="content">
            <div
              className=" top-[142px] left-[124px] w-[1049px] h-[986px] text-left text-gray-100 font-noto-sans"
              id="box1"
            >
              <RectangleComponentOfAbbout />
              <p
                className="m-[0]  top-[356px] left-[528px] tracking-[0.02em] leading-[28px] inline-block w-[496px] h-[141px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
                id="txt1"
                data-animate-on-scroll
              >
                <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
                <p className="m-[0]">&nbsp;</p>
              </p>
              <div
                className=" top-[102px] left-[0px] rounded-[25px] bg-gray-1100 w-[589px] h-[180px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
                id="aboutContent1"
                data-animate-on-scroll
              />
              <p
                className="m-[0]  top-[122px] left-[54px] tracking-[0.02em] leading-[28px] inline-block w-[509px] h-[141px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
                id="txt4"
                data-animate-on-scroll
              >
                <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
                <p className="m-[0]">&nbsp;</p>
              </p>
              <div
                className=" top-[806px] left-[475px] rounded-[25px] bg-gray-1100 w-[574px] h-[180px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
                id="aboutContent4"
                data-animate-on-scroll
              />
              <p
                className="m-[0]  top-[826px] left-[528px] tracking-[0.02em] leading-[28px] inline-block w-[496px] h-[141px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
                id="txt2"
                data-animate-on-scroll
              >
                <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
                <p className="m-[0]">&nbsp;</p>
              </p>
              <div
                className=" top-[571px] left-[0px] rounded-[25px] bg-gray-1100 w-[589px] h-[180px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
                id="aboutContent3"
                data-animate-on-scroll
              />
              <p
                className="m-[0]  top-[591px] left-[54px] tracking-[0.02em] leading-[28px] inline-block w-[509px] h-[141px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
                id="txt3"
                data-animate-on-scroll
              >
                <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
                <p className="m-[0]">&nbsp;</p>
              </p>
              <h3
                className="m-[0]  top-[0px] left-[348px] text-6xl font-bold font-inherit text-white text-center inline-block w-[336px] h-[54px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
                id="heading"
                data-animate-on-scroll
              >
                ABOUT US
              </h3>
              <img
                className=" top-[2072px] left-[460px] w-[360px] h-[360px] object-cover [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
                alt=""
                src="../group-1332@2x.png"
                data-animate-on-scroll
              />
              <img
                className=" top-[2382.5px] left-[124.5px] w-[166.35px] h-[166.35px] object-cover [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
                alt=""
                src="../group-1333@2x.png"
                data-animate-on-scroll
              />
              <img
                className=" top-[2377.5px] left-[979.5px] w-[166.35px] h-[166.35px] object-cover [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
                alt=""
                src="../group-1333@2x.png"
                data-animate-on-scroll
              />
              <h3
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
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
