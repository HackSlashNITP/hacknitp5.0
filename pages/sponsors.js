import { useEffect } from "react";
import Box2 from "../components/box2";
import Header from "../components/header";
import Footer from "../components/footer";

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
    <div className="bg-black w-screen overflow-y-auto flex flex-col box-border items-center justify-center gap-[0px] text-center text-5xl text-white font-space-grotesk">
      <Header />
      <div className="self-stretch overflow-hidden flex flex-col p-[16px_0px] box-border items-center justify-center text-4xl font-noto-sans">
        <div className="overflow-hidden flex flex-row box-border items-center justify-center">
          <h3
            className="text-[inherit] font-bold font-inherit inline-block"
            id="heading"
          >
            SPONSORS
          </h3>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[22px] lg:h-[auto] md:pt-[0px] md:pb-[0px] md:box-border md:h-[auto]">
        <div className="overflow-hidden flex flex-col box-border items-center justify-center">
          <b className="text-lg">Platinum Sponsors</b>
        </div>
        <div
          className="self-stretch overflow-hidden flex flex-col items-center justify-center [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="overflow-hidden flex flex-row box-border items-center justify-center sm:flex-col">
            <div className="flex flex-row items-start justify-start gap-20 md:flex-col">
              <div className="relative rounded-[20px] bg-gray-1000 w-[230px] h-[118px] shrink-0" />
              <div className="relative rounded-[20px] bg-gray-1000 w-[230px] h-[118px] shrink-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch my-10 overflow-hidden flex flex-col items-center justify-center gap-[22px] md:flex-col md:pt-[0px] md:pb-[0px] md:box-border md:h-[auto]">
        <div className="overflow-hidden flex flex-col box-border items-center justify-center">
          <b className="text-lg text-[#FFE143]">Gold Sponsors</b>
        </div>
        <div
          className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-center [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] lg:flex-row md:flex-row"
          data-animate-on-scroll
        >
          <div className="overflow-hidden flex flex-row p-[44px_36px] box-border items-center justify-center md:flex-col sm:flex-col">
            <div className="flex flex-row items-center justify-center gap-10 md:flex-col">
            <div className="flex flex-row items-start justify-start gap-20 md:flex-col">
              <div className="relative rounded-[20px] bg-gray-1000 w-[230px] h-[118px] shrink-0" />
              <div className="relative rounded-[20px] bg-gray-1000 w-[230px] h-[118px] shrink-0" />
              <div className="relative rounded-[20px] bg-gray-1000 w-[230px] h-[118px] shrink-0" />
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[22px] lg:h-[auto] md:pt-[0px] md:pb-[0px] md:box-border md:h-[auto] sm:h-[auto]">
        <div className="shrink-0 overflow-hidden flex flex-col px-20 box-border items-center justify-center">
          <b className="text-lg text-[#BCBCBC]">Silver Sponsors</b>
        </div>
        <div
          className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[0px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="overflow-hidden flex flex-row p-[44px_36px] box-border items-center justify-center gap-[74px] sm:flex-col">
            <div className="flex flex-row items-start justify-start gap-[74px] md:flex-col">
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
                alt=""
                src="../rectangle-39515@2x.png"
              />
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
                alt=""
                src="../rectangle-39515@2x.png"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-[74px] md:flex-col">
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
                alt=""
                src="../rectangle-39515@2x.png"
              />
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0"
                alt=""
                src="../rectangle-39525.svg"
              />
            </div>
          </div>
          <div className="bg-gray-1400 overflow-hidden flex flex-row p-[44px_36px] box-border items-center justify-center gap-[74px] sm:flex-col">
            <div className="flex flex-row items-center justify-center gap-[74px] md:flex-col">
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
                alt=""
                src="../rectangle-39515@2x.png"
              />
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
                alt=""
                src="../rectangle-39515@2x.png"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-[74px] md:flex-col">
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
                alt=""
                src="../rectangle-39515@2x.png"
              />
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0"
                alt=""
                src="../rectangle-39525.svg"
              />
            </div>
          </div>
          <div className="bg-gray-1400 overflow-hidden flex flex-row p-[44px_36px] box-border items-start justify-start gap-[74px] sm:flex-col">
            <div className="flex flex-row items-start justify-start gap-[74px] md:flex-col">
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
                alt=""
                src="../rectangle-39515@2x.png"
              />
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
                alt=""
                src="../rectangle-39515@2x.png"
              />
            </div>
            <div className="flex flex-row items-start justify-start gap-[74px] md:flex-col">
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
                alt=""
                src="../rectangle-39515@2x.png"
              />
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0"
                alt=""
                src="../rectangle-39525.svg"
              />
            </div>
          </div>
          <div
            className="bg-gray-1400 overflow-hidden flex flex-row p-[44px_36px] box-border items-center justify-center gap-[74px] sm:flex-col"
            id="4contentBox"
          >
            <div className="flex flex-row items-center justify-center gap-[74px] md:flex-col">
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
                alt=""
                src="../rectangle-39515@2x.png"
              />
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
                alt=""
                src="../rectangle-39515@2x.png"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-[74px] md:flex-col">
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
                alt=""
                src="../rectangle-39515@2x.png"
              />
              <img
                className="relative rounded-[20px] w-[230px] h-[118px] shrink-0"
                alt=""
                src="../rectangle-39525.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-full sm:w-full my-20 flex flex-col box-border items-center justify-center">
        <Box2 />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Sponsors;
