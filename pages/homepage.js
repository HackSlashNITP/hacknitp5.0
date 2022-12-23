import Image from "next/image";
import { useEffect } from "react";
import Header from "../components/header";

const Homepage = () => {
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
      className="relative bg-gray-1000 w-full h-screen overflow-y-auto text-center text-5xl text-white font-space-grotesk"
      id="homepage"
    >
      <Image
        className="absolute top-[0px] left-[0px] object-cover"
        alt=""
        src="/anirudhxu4pz7gi9jyunsplash-16@2x.png"
        layout='fill'
      />
      <div className="absolute top-[0px] left-[0px] w-full">
        <Header />
        <div className="max-w-[800px] sm:w-[70%] flex flex-col items-start lg:items-center lg:ml-4 md:mx-10 sm:mx-10 mt-20">
          <img
            className="h-[75%] w-[75%] md:h-[100%] md:w-[100%] my-2 max-w-full max-h-full [&.animate]:animate-[3s_ease_0s_1_normal_forwards_roll-in-left] opacity-[0]"
            alt=""
            src="../group-1303.svg"
            data-animate-on-scroll
          />
          <h3
            className="mb-8 md:text-[25px] text-lg font-bold font-noto-sans text-green-100 inline-block [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
            id="date"
            data-animate-on-scroll
          >
            December 20,2022 - February 19,2023
          </h3>
          <h6
            className="m-[0] md:text-[15px] bg-clip-text bg-black text-xs font-normal font-noto-sans text-left md:text-center inline-block w-[75%] md:w-[100%] [-webkit-text-stroke:3px_rgba(255,_255,_255,_0)] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
            id="texr"
            data-animate-on-scroll
          >
            The hack is only a small part of the competition. The real spirit lies
            in building your network in the growing tech community and collaborating
            with some of the finest minds of the nation. Just remember, taking the
            Hackathons too seriously defeats the purpose. Save the seriousness for
            pitching to investors. Keeping an open mind will open new doors, help
            build new relationships and acquire new skills. This is HackNITP.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
