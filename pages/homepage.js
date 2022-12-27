import Image from "next/image";
import { useEffect } from "react";
import Header from "../components/header";
import bgImage from "../public/anirudhxu4pz7gi9jyunsplash-16@2x.png";
import Footer from "../components/footer";

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
      className=" bg-black w-full h-screen overflow-y-auto text-center text-5xl text-white font-space-grotesk"
      id="homepage"
    >
      <div className="w-full h-screen bg-[url('../public/background.jpg')] bg-cover md:bg-center md:bg-fixed bg-no-repeat md:h-auto flex flex-col justify-between">
        <div className="wrapper min-h-full md:mb-[100px] sm:mb-[100px]">
          <Header />
          <div className="max-w-[800px] sm:w-[70%] flex flex-col items-start lg:items-center md:mx-10 sm:mx-10 mx-[10%] mt-[100px]">
            <img
              className="my-2 w-[75%] h-[75%] min-w-[200px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              alt=""
              src="../group-1303.svg"
              data-animate-on-scroll
            />
            <h3
              className="mb-8 md:text-[20px] sm:text-[20px] text-lg font-bold md:font-semibold sm:font-semibold font-noto-sans text-green-100 inline-block [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
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
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;