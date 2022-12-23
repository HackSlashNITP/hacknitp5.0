import { useEffect } from "react";
import RectangleIcon from "../components/rectangle-icon";
import Box from "../components/box";

const Sponsors = () => {
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
    <div className="relative bg-gray-1000 w-full h-[2885px] overflow-y-auto text-center text-xs text-white font-space-grotesk">
      <img
        className="absolute top-[0px] left-[0px] w-[1244px] h-[2885px] object-cover"
        alt=""
        src="../anirudhxu4pz7gi9jyunsplash-14@2x.png"
      />
      <div className="absolute h-[2.6%] w-[96.95%] top-[0.76%] right-[0%] bottom-[96.63%] left-[3.05%]">
        <img
          className="absolute h-full w-[19.17%] top-[0%] right-[80.83%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../hacknitp55.svg"
        />
        <b className="absolute top-[15.96px] left-[408.1px] inline-block">
          About Us
        </b>
        <b className="absolute top-[15.96px] left-[537.1px] inline-block">
          Timeline
        </b>
        <b className="absolute top-[15.96px] left-[660.1px] inline-block">
          Rules
        </b>
        <b className="absolute top-[16.96px] left-[755.1px] inline-block">
          Sponsors
        </b>
        <b className="absolute top-[15.96px] left-[883.1px] inline-block">
          Contact Us
        </b>
        <img
          className="absolute top-[4.96px] left-[1026.1px] rounded-[15px] w-[180px] h-[50px]"
          alt=""
          src="../rectangle-39715.svg"
        />
        <b className="absolute top-[17.96px] left-[1045.1px] text-2xs inline-block text-black">
          Join Our Discord
        </b>
      </div>
      <div
        className="absolute top-[97px] left-[0px] bg-gray-1500 w-[1244px] overflow-hidden flex flex-col p-[47px_3px] box-border items-center justify-center gap-[93px] text-5xl"
        id="container"
      >
        <h3
          className="m-[0] relative text-6xl font-bold font-noto-sans inline-block w-[563px] h-[65px] shrink-0"
          id="heading"
        >
          SPONSORS
        </h3>
        <div
          className="bg-gray-1500 overflow-hidden flex flex-col p-[27px_21px] box-border items-center justify-center gap-[0px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          id="box1"
          data-animate-on-scroll
        >
          <div className="relative bg-gray-1500 w-[774px] h-[117px] shrink-0 overflow-hidden">
            <b className="absolute top-[20px] left-[239px] inline-block w-[332px] h-[117px]">
              Platinum Sponsors
            </b>
          </div>
          <div className="relative bg-gray-1500 w-[774px] h-[155px] shrink-0 overflow-hidden">
            <img
              className="absolute top-[19px] left-[43px] rounded-[20px] w-[230px] h-[117px] object-cover hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
              alt=""
              src="../rectangle-39509@2x.png"
            />
            <RectangleIcon />
          </div>
        </div>
        <div
          className="bg-gray-1500 overflow-hidden flex flex-col p-[39px_0px] box-border items-center justify-center gap-[43px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] text-gold"
          id="box2"
          data-animate-on-scroll
        >
          <h3
            className="m-[0] relative bg-gray-1500 w-[823px] h-[117px] shrink-0 overflow-hidden text-[inherit] font-inherit"
            id="heading2"
          >
            <b className="absolute top-[11px] left-[280px] inline-block w-[262px] h-[106px]">
              Gold Sponsors
            </b>
          </h3>
          <div className="relative bg-gray-1500 w-[983px] h-[167px] shrink-0 overflow-hidden">
            <img
              className="absolute top-[25px] left-[48px] rounded-[20px] w-[230px] h-[118px] object-cover hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
              alt=""
              src="../rectangle-39511@2x.png"
            />
            <img
              className="absolute top-[25px] left-[376px] rounded-[20px] w-[231px] h-[117px] object-cover hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
              alt=""
              src="../rectangle-39512@2x.png"
            />
            <img
              className="absolute top-[25px] left-[705px] rounded-[20px] w-[230px] h-[117px] object-cover hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
              alt=""
              src="../rectangle-39513@2x.png"
            />
          </div>
        </div>
        <div
          className="bg-gray-1500 overflow-hidden flex flex-col items-center justify-center gap-[39px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] text-gray-600"
          id="box3"
          data-animate-on-scroll
        >
          <div className="relative bg-gray-1500 w-[823px] h-[117px] shrink-0 overflow-hidden">
            <h3
              className="m-[0] absolute top-[0px] left-[296px] text-[inherit] font-bold font-inherit inline-block w-[230px] h-[86px]"
              id="heading3"
            >
              Silver Sponsors
            </h3>
          </div>
          <div className="relative bg-gray-1500 w-[1254px] h-[804px] shrink-0 overflow-hidden">
            <div className="absolute top-[0px] left-[16px] bg-gray-1500 w-[1221px] h-[206px] overflow-hidden">
              <div className="absolute top-[44px] left-[36px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px]" />
              <div className="absolute top-[44px] left-[339px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px]" />
              <div className="absolute top-[44px] left-[644px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px]" />
              <img
                className="absolute top-[44px] left-[947px] rounded-[20px] w-[230px] h-[118px]"
                alt=""
                src="../rectangle-39525.svg"
              />
            </div>
            <div className="absolute top-[206px] left-[0px] bg-gray-1500 w-[1221px] h-[206px] overflow-hidden">
              <div className="absolute top-[44px] left-[36px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px]" />
              <div className="absolute top-[44px] left-[339px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px]" />
              <img
                className="absolute top-[44px] left-[644px] rounded-[20px] w-[230px] h-[118px] object-cover hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
                alt=""
                src="../rectangle-39516@2x.png"
              />
              <img
                className="absolute top-[44px] left-[947px] rounded-[20px] w-[230px] h-[118px]"
                alt=""
                src="../rectangle-39525.svg"
              />
            </div>
            <div className="absolute top-[402px] left-[16px] bg-gray-1500 w-[1221px] h-[206px] overflow-hidden">
              <div className="absolute top-[44px] left-[36px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px]" />
              <div className="absolute top-[44px] left-[339px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px]" />
              <div className="absolute top-[44px] left-[644px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px]" />
              <img
                className="absolute top-[44px] left-[947px] rounded-[20px] w-[230px] h-[118px]"
                alt=""
                src="../rectangle-39525.svg"
              />
            </div>
            <div
              className="absolute top-[564px] left-[16px] bg-gray-1500 w-[1221px] h-[206px] overflow-hidden"
              id="4contentBox"
            >
              <div className="absolute top-[44px] left-[36px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px]" />
              <div className="absolute top-[44px] left-[339px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px]" />
              <div className="absolute top-[44px] left-[644px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px]" />
              <img
                className="absolute top-[44px] left-[947px] rounded-[20px] w-[230px] h-[118px]"
                alt=""
                src="../rectangle-39525.svg"
              />
            </div>
          </div>
        </div>
        <Box />
      </div>
    </div>
  );
};

export default Sponsors;
