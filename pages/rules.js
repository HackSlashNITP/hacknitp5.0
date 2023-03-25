import React,{useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import ThemeCard from "../components/themeCard";
import ListItem from "../components/prev_prizes/listItem";
import allparticpant from "../components/prev_prizes/allParticipants";
import firstPrize from "../components/prev_prizes/firstPrize";
import secondPrize from "../components/prev_prizes/secondPrize";
import thirdPrize from "../components/prev_prizes/thirdPrize";
import girlsPrize from "../components/prev_prizes/girlsPrize";
import trackPrize from "../components/prev_prizes/trackPrize";

const Rules = () => {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

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

  const tracks = [
    {
      id: 1,
      img: "/theme/edu.svg",
      desc: "Education",
    },
    {
      id: 2,
      img: "/theme/employ.svg",
      desc: "Employability",
    },
    {
      id: 3,
      img: "/theme/food.svg",
      desc: "Food",
    },
    {
      id: 4,
      img: "/theme/health.svg",
      desc: "Healthcare",
    },
    {
      id: 5,
      img: "/theme/social.svg",
      desc: "Social Security And Awareness",
    },
    {
      id: 6,
      img: "/theme/open.svg",
      desc: "Open Innovation",
    },
    {
      id: 7,
      img: "/theme/blockchain.svg",
      desc: "Blockchain",
    },
    {
      id: 8,
      img: "/theme/subst.svg",
      desc: "Sustainable Development",
    },
  ];

  return (
    <div className="bg-black md:bg-[url('../public/background-medium.jpg')] w-full h-screen overflow-y-auto text-center text-xs text-white font-space-grotesk">
      <div className="bg-[url('../public/background.jpg')] bg-cover md:bg-fixed bg-no-repeat flex flex-col w-full h-">
        <div className="wrapper min-h-full mb-[-0px]">
          <Header />
          <main className="w-full my-[5%] flex flex-col justify-between items-center">
            <section
              className="w-[70%] text-left text-white font-inherit md:w-[100%] sm:w-[100%]"
              id="instructions"
            >
              <div
                className="flex flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[2s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="instruction"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] text-6xl sm:text-xl md:text-xl font-bold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  INSTRUCTIONS
                </h1>
                <ul className="w-[85%] md:w-[100%] sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  <li>
                    <h3 className="m-2 md:m-[5px] sm:m-[5px] font-normal font-inherit">
                      The 32 hours hybrid hackathon would be live on 14/04/2023
                      at 12:00 IST till 16/04/2022 at 20:00 IST
                    </h3>
                  </li>
                  <li>
                    <h3 className="m-2 font-normal font-inherit">
                      The registration for the event is absolutely free of cost,
                      implying there is no registration fee.
                    </h3>
                  </li>
                  <li>
                    <h3 className="m-2 font-normal font-inherit">
                      To participate in the hackathon, register through{" "}
                      <a
                        className="text-[#2BFF08] hover:[border:2px_solid_#2BFF08] "
                        href="https://hacknitp-4.devfolio.co/."
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Devfolio.
                      </a>
                    </h3>
                  </li>
                  <li>
                    <h3 className="m-2 font-normal font-inherit">
                      The competition is open for teams comprising of students
                      currently enrolled in any educational institution.
                    </h3>
                  </li>
                  <li>
                    <h3 className="m-2 font-normal font-inherit">
                      The hackathon allows a maximum of four members in a team,
                      for participation in the hackathon.
                    </h3>
                  </li>
                  <li>
                    <h3 className="m-2 font-normal font-inherit">
                      Participants are allowed to form a team with members from
                      educational institutions other than where they are
                      enrolled in. That is, a team may have members from
                      multiple educational institutions.
                    </h3>
                  </li>
                </ul>
                <a
                  href="https://rebrand.ly/hacknitp-4/rulebook"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button
                    className="cursor-pointer hover:bg-[#22c55e] hover:[border:3px_solid_transparent] hover:text-black text-[#2BFF08] text-base sm:text-xs md:text-xs [border:3px_solid_#2BFF08] p-3 bg-[transparent] rounded-xl box-border [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-left] lg:opacity-[0]"
                    data-animate-on-scroll
                  >
                    Download Rulebook
                  </button>
                </a>
              </div>
            </section>
            <section
              className="flex flex-col my-10 items-center justify-between w-full md:mx-auto sm:mx-auto [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-center text-6xl text-black font-space-grotesk"
              id="themes"
              data-animate-on-scroll
            >
              <h1
                className="text-white font-bold font-noto-sans md:text-[40px] sm:text-[40px]"
                id="themes"
              >
                THEMES
              </h1>

              <div className="w-full px-10 md:px-0 sm:text-[25px] md:text-[25px] md:w-[90%] grid md:grid-cols-1 sm:grid-cols-1 grid-cols-2 gap-x-[15%]">
                {tracks.map((track) => {
                  return (
                    <ThemeCard
                      img={track.img}
                      desc={track.desc}
                      key={track.id}
                    />
                  );
                })}
              </div>
            </section>
            <section
              className="w-[70%] mt-10 text-left text-white font-inherit md:w-[100%] sm:w-[100%]"
              id="prizes-section"
            >
              <h1
                className="m-[0] my-5 text-6xl sm:text-xl md:text-xl font-bold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                data-animate-on-scroll
              >
                PREVIOUS YEAR PRIZES & PERKS
              </h1>
              
              {/* For winners */}
              <div
                className="flex my-7 flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="prizes"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] my-2 text-4xl md:text-lg font-semibold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  WINNER
                </h1>
                <b className="mb-3 text-xl md:text-xs font-bold text-[#28e806]">₹ 10,000/- Cash Prize</b>
                <ul className="w-[85%] md:w-[100%] text-xs sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  {firstPrize.map((prize, index) => {
                    return <ListItem key={index} msg={prize} />;
                  })}
                </ul>
              </div>
              {/* For 1st Runner Up */}
              <div
                className="flex my-7 flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="prizes"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] my-2 text-4xl md:text-lg font-semibold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  1st RUNNER UP
                </h1>
                <b className="mb-3 text-xl md:text-xs font-bold text-[#28e806]">₹ 8,000/- Cash Prize</b>
                <ul className="w-[85%] md:w-[100%] text-xs sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  {secondPrize.map((prize, index) => {
                    return <ListItem key={index} msg={prize} />;
                  })}
                </ul>
              </div>
              {/* For 2nd Runner Up */}
              <div
                className="flex my-7 flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="prizes"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] my-2 text-4xl md:text-lg font-semibold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  2nd RUNNER UP
                </h1>
                <b className="mb-3 text-xl md:text-xs font-bold text-[#28e806]">₹ 5,000/- Cash Prize</b>
                <ul className="w-[85%] md:w-[100%] text-xs sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  {thirdPrize.map((prize, index) => {
                    return <ListItem key={index} msg={prize} />;
                  })}
                </ul>
              </div>
              {/* For 1st All Girls Team */}
              <div
                className="flex my-7 flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="prizes"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] my-2 text-4xl md:text-lg font-semibold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  TOP ALL-GIRLS TEAM
                </h1>
                <b className="mb-3 text-xl md:text-xs font-bold text-[#28e806]">₹ 2,500/- Cash Prize</b>
                <ul className="w-[85%] md:w-[100%] text-xs sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  {girlsPrize.map((prize, index) => {
                    return <ListItem key={index} msg={prize} />;
                  })}
                </ul>
              </div>

              <div
                className="flex my-7 flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="prizes"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] my-2 text-4xl md:text-lg font-semibold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  TRACK PRIZE
                </h1>
                <b className="mb-3 text-xl md:text-xs font-bold text-[#28e806]">POLYGON</b>
                <ul className="w-[85%] md:w-[100%] text-xs sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  {trackPrize[0].map((prize, index) => {
                    return <ListItem key={index} msg={prize} />;
                  })}
                </ul>
              </div>
              <div
                className="flex my-7 flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="prizes"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] my-2 text-4xl md:text-lg font-semibold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  TRACK PRIZE
                </h1>
                <b className="mb-3 text-xl md:text-xs font-bold text-[#28e806]">TEZOS</b>
                <ul className="w-[85%] md:w-[100%] text-xs sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  {trackPrize[1].map((prize, index) => {
                    return <ListItem key={index} msg={prize} />;
                  })}
                </ul>
              </div>
              <div
                className="flex my-7 flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="prizes"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] my-2 text-4xl md:text-lg font-semibold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  TRACK PRIZE
                </h1>
                <b className="mb-3 text-xl md:text-xs font-bold text-[#28e806]">FILECOIN</b>
                <ul className="w-[85%] md:w-[100%] text-xs sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  {trackPrize[2].map((prize, index) => {
                    return <ListItem key={index} msg={prize} />;
                  })}
                </ul>
              </div>
              <div
                className="flex my-7 flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="prizes"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] my-2 text-4xl md:text-lg font-semibold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  TRACK PRIZE
                </h1>
                <b className="mb-3 text-xl md:text-xs font-bold text-[#28e806]">CELO</b>
                <ul className="w-[85%] md:w-[100%] text-xs sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  {trackPrize[3].map((prize, index) => {
                    return <ListItem key={index} msg={prize} />;
                  })}
                </ul>
              </div>
              <div
                className="flex my-7 flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="prizes"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] my-2 text-4xl md:text-lg font-semibold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  TRACK PRIZE
                </h1>
                <b className="mb-3 text-xl md:text-xs font-bold text-[#28e806]">FOSS</b>
                <ul className="w-[85%] md:w-[100%] text-xs sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  {trackPrize[4].map((prize, index) => {
                    return <ListItem key={index} msg={prize} />;
                  })}
                </ul>
              </div>
              <div
                className="flex flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
                id="prizes"
                data-animate-on-scroll
              >
                <h1
                  className="m-[0] my-2 text-4xl md:text-lg font-semibold font-noto-sans text-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                  data-animate-on-scroll
                >
                  FOR ALL PARTICIPANTS
                </h1>
                <ul className="w-[85%] md:w-[100%] text-xs sm:w-[100%] md:text-[15px] sm:text-[15px] flex-col justify-center">
                  {allparticpant.map((perk) => {
                    return <ListItem key={perk.id} msg={perk.msg} />;
                  })}
                </ul>
              </div>

             
              <div
                className="flex flex-col justify-center items-center rounded-xl p-10  [&.animate]:animate-[2s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[2s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"

                data-animate-on-scroll
              >

              <div className="md:w-[70%] sm:w-[70%] cursor-pointer hover:text-white w-[400px]  h-[50px] flex justify-center items-center text-black rounded-[15px]"> 
                  <div
                    className="apply-button"
                    data-hackathon-slug="YOUR-HACKATHON-SLUG"
                    data-button-theme="light"
                    style={{
                      height: "44px",
                      width: "312px"
                    }}
                  ></div>
                </div>

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
