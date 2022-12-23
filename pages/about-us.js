import { useEffect } from "react";
import RectangleComponentOfAbbout from "../components/rectangle-component-of-abbout";

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
      className="relative bg-gray-1000 w-full h-[2880px] overflow-y-auto text-center text-xs text-white font-space-grotesk"
      id="about"
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1280px] h-[2880px] object-cover"
        alt=""
        src="../anirudhxu4pz7gi9jyunsplash-11@2x.png"
      />
      <div className="absolute h-[2.6%] w-[94.14%] top-[0.76%] right-[2.81%] bottom-[96.63%] left-[3.05%]">
        <img
          className="absolute h-full w-[19.74%] top-[0%] right-[80.26%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../hacknitp51.svg"
        />
        <b className="absolute top-[16px] left-[407px] inline-block">
          About Us
        </b>
        <b className="absolute top-[16px] left-[536px] inline-block">
          Timeline
        </b>
        <b className="absolute top-[16px] left-[659px] inline-block">Rules</b>
        <b className="absolute top-[17px] left-[754px] inline-block">
          Sponsors
        </b>
        <b className="absolute top-[16px] left-[882px] inline-block">
          Contact Us
        </b>
        <img
          className="absolute top-[5px] left-[1025px] rounded-[15px] w-[180px] h-[50px]"
          alt=""
          src="../rectangle-39715.svg"
        />
        <b className="absolute top-[18px] left-[1044px] text-2xs inline-block text-black">
          Join Our Discord
        </b>
      </div>
      <div
        className="absolute top-[142px] left-[124px] w-[1049px] h-[986px] text-left text-gray-100 font-noto-sans"
        id="box1"
      >
        <RectangleComponentOfAbbout />
        <p
          className="m-[0] absolute top-[356px] left-[528px] tracking-[0.02em] leading-[28px] inline-block w-[496px] h-[141px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          id="txt1"
          data-animate-on-scroll
        >
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
          <p className="m-[0]">&nbsp;</p>
        </p>
        <div
          className="absolute top-[102px] left-[0px] rounded-[25px] bg-gray-1100 w-[589px] h-[180px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
          id="aboutContent1"
          data-animate-on-scroll
        />
        <p
          className="m-[0] absolute top-[122px] left-[54px] tracking-[0.02em] leading-[28px] inline-block w-[509px] h-[141px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          id="txt4"
          data-animate-on-scroll
        >
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
          <p className="m-[0]">&nbsp;</p>
        </p>
        <div
          className="absolute top-[806px] left-[475px] rounded-[25px] bg-gray-1100 w-[574px] h-[180px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
          id="aboutContent4"
          data-animate-on-scroll
        />
        <p
          className="m-[0] absolute top-[826px] left-[528px] tracking-[0.02em] leading-[28px] inline-block w-[496px] h-[141px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          id="txt2"
          data-animate-on-scroll
        >
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
          <p className="m-[0]">&nbsp;</p>
        </p>
        <div
          className="absolute top-[571px] left-[0px] rounded-[25px] bg-gray-1100 w-[589px] h-[180px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
          id="aboutContent3"
          data-animate-on-scroll
        />
        <p
          className="m-[0] absolute top-[591px] left-[54px] tracking-[0.02em] leading-[28px] inline-block w-[509px] h-[141px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          id="txt3"
          data-animate-on-scroll
        >
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
          <p className="m-[0]">&nbsp;</p>
        </p>
        <h3
          className="m-[0] absolute top-[0px] left-[348px] text-6xl font-bold font-inherit text-white text-center inline-block w-[336px] h-[54px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          id="heading"
          data-animate-on-scroll
        >
          ABOUT US
        </h3>
      </div>
      <img
        className="absolute top-[2072px] left-[460px] w-[360px] h-[360px] object-cover [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        alt=""
        src="../group-1332@2x.png"
        data-animate-on-scroll
      />
      <img
        className="absolute top-[2382.5px] left-[124.5px] w-[166.35px] h-[166.35px] object-cover [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        alt=""
        src="../group-1333@2x.png"
        data-animate-on-scroll
      />
      <img
        className="absolute top-[2377.5px] left-[979.5px] w-[166.35px] h-[166.35px] object-cover [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        alt=""
        src="../group-1333@2x.png"
        data-animate-on-scroll
      />
      <h3
        className="m-[0] absolute top-[1959px] left-[472px] text-6xl font-bold font-noto-sans inline-block w-[336px] h-[54px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        id="judges"
        data-animate-on-scroll
      >
        JUDGES
      </h3>
      <div
        className="absolute top-[1225px] left-[99px] w-[1082px] h-[655px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        id="box2"
        data-animate-on-scroll
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-[25px] w-[1082px] h-[585.8px] object-cover"
          alt=""
          src="../1892-2@2x.png"
        />
        <img
          className="absolute top-[246.08px] left-[981.63px] w-[66px] h-[66px]"
          alt=""
          src="../iconlybulkarrow--right-circle.svg"
        />
        <img
          className="absolute top-[246.32px] left-[28.93px] w-[66px] h-[66px]"
          alt=""
          src="../iconlybulkarrow--left-circle.svg"
        />
        <img
          className="absolute top-[637px] left-[459px] w-[18px] h-[18px]"
          alt=""
          src="../ellipse-9.svg"
        />
        <img
          className="absolute top-[637px] left-[495.72px] w-[18px] h-[18px]"
          alt=""
          src="../ellipse-10.svg"
        />
        <img
          className="absolute top-[637px] left-[532.44px] w-[18px] h-[18px]"
          alt=""
          src="../ellipse-11.svg"
        />
        <img
          className="absolute top-[637px] left-[569.16px] w-[18px] h-[18px]"
          alt=""
          src="../ellipse-12.svg"
        />
        <img
          className="absolute top-[637px] left-[605.88px] w-[18px] h-[18px]"
          alt=""
          src="../ellipse-13.svg"
        />
      </div>
      <p className="m-[0] absolute top-[2457px] left-[423px] text-4xl font-bold inline-block w-[437px]">
        Judge Name
      </p>
      <span
        className="absolute top-[2510px] left-[423px] text-base inline-block w-[437px]"
        id="post"
      >
        CEO Bhagwa Gang NITP
      </span>
      <img
        className="absolute top-[2541px] left-[0px] w-[1280px] h-[339px] overflow-hidden"
        alt=""
        src="../frame-26.svg"
      />
    </div>
  );
};

export default AboutUs;
