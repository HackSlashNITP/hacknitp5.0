import Image from "next/image";
import { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import backgroundImage from "../public/anirudhxu4pz7gi9jyunsplash-15@2x.png";

const Rules = () => {
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
    <div className="relative bg-black w-full h-screen overflow-y-auto text-center text-xs text-white font-space-grotesk">
      {/* <Image
        alt=""
        src={backgroundImage}
      /> */}
      <div className="absolute top-0 left flex flex-col w-full h-">
        <div className="wrapper min-h-full mb-[-0px]">
          <Header />
          <main className="w-full my-[5%] flex flex-col justify-between items-center">
            <section
              className="w-[70%] text-left text-white font-inherit md:w-[100%] sm:w-[100%]"
              id="instructions"
            >
              <div
                className="flex flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="instruction"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] text-6xl sm:text-xl md:text-xl font-bold font-noto-sans text-center [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  INSTRUCTIONS
                </h1>
                <ul className="w-[85%] md:w-[100%] sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  <li>
                    <h3 className="m-2 md:m-[5px] sm:m-[5px] font-normal font-inherit">
                      Participants can take part only as a team. A team must
                      comprise of at least 2 members and at most 6.
                    </h3>
                  </li>
                  <li>
                    <h3 className="m-2 font-normal font-inherit">
                      Participants can take part only as a team. A team must
                      comprise of at least 2 members and at most 6.
                    </h3>
                  </li>
                  <li>
                    <h3 className="m-2 font-normal font-inherit">
                      Participants can take part only as a team. A team must
                      comprise of at least 2 members and at most 6.
                    </h3>
                  </li>
                </ul>
                <button
                  className="cursor-pointer text-[#59db8a] text-base sm:text-xs md:text-xs [border:2px_solid_#59db8a] p-3 bg-[transparent] rounded-xl box-border [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-left] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  Download Rulebook
                </button>
              </div>
            </section>
            <section
              className="flex flex-col items-center justify-between w-full md:mx-auto sm:mx-auto [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-center text-6xl text-black font-space-grotesk"
              id="themes"
              data-animate-on-scroll
            >
              <h1
                className="text-white font-bold font-noto-sans md:text-[40px] sm:text-[40px]"
                id="themes"
              >
                THEMES
              </h1>

              <div className="w-full sm:text-[25px] md:text-[25px]">
                <div className="flex w-full justify-between sm:flex-col md:flex-col">
                  <div className="bg-[#2BFF08] my-4 p-5 flex justify-center items-center w-[40%] sm:w-[100%] md:w-[100%]">
                    <b className="text-black text-lg">Theme</b>
                  </div>
                  <div className="bg-[#2BFF08] my-4 p-5 flex justify-center items-center w-[40%] sm:w-[100%] md:w-[100%]">
                    <b className="text-black text-lg">Theme</b>
                  </div>
                </div>
                <div className="flex w-full justify-between sm:flex-col md:flex-col">
                  <div className="bg-[#2BFF08] my-4 p-5 flex justify-center items-center w-[40%] sm:w-[100%] md:w-[100%]">
                    <b className="text-black text-lg">Theme</b>
                  </div>
                  <div className="bg-[#2BFF08] my-4 p-5 flex justify-center items-center w-[40%] sm:w-[100%] md:w-[100%]">
                    <b className="text-black text-lg">Theme</b>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="w-[70%] mt-10 text-left text-white font-inherit md:w-[100%] sm:w-[100%]"
              id="prizes-section"
            >
              <div
                className="flex flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="prizes"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] text-6xl sm:text-xl md:text-xl font-bold font-noto-sans text-center [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  PRIZES & PERKS
                </h1>
                <ul className="w-[85%] md:w-[100%] sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  <li>
                    <h3 className="m-2 md:mx-[5px] sm:mx-[5px] font-normal font-inherit">
                      Cash prize worth 10k for best hack built on top of Ethereum
                      and for teams that integrate Polygon in their hacks as well
                      the prize money will be 15k along with eligibility for
                      internship/full-time role interviews and a chance to land
                      seed funding of upto 5000 USD(or equivalent)!*.
                    </h3>
                  </li>
                  <li>
                    <h3 className="m-2 md:mx-[5px] sm:mx-[5px] font-normal font-inherit">
                      Cash prize worth 10k for best hack built on top of Ethereum
                      and for teams that integrate Polygon in their hacks as well
                      the prize money will be 15k along with eligibility for
                      internship/full-time role interviews and a chance to land
                      seed funding of upto 5000 USD(or equivalent)!*.
                    </h3>
                  </li>
                  <li>
                    <h3 className="m-2 md:mx-[5px] sm:mx-[5px] font-normal font-inherit">
                      Cash prize worth 10k for best hack built on top of Ethereum
                      and for teams that integrate Polygon in their hacks as well
                      the prize money will be 15k along with eligibility for
                      internship/full-time role interviews and a chance to land
                      seed funding of upto 5000 USD(or equivalent)!*.
                    </h3>
                  </li>
                </ul>
              </div>
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Rules;
