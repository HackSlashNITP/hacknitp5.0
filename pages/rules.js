import { useEffect } from "react";
import RectangleComponentofRule1 from "../components/rectangle-componentof-rule1";
import RectangleComponentOfrule2 from "../components/rectangle-component-ofrule2";
import Header from "../components/header";

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
    <div className="relative bg-gray-1000 w-full h-screen overflow-y-auto text-center text-xs text-white font-space-grotesk">
      <img
        className="absolute top-[0px] left-[0px] w-full h-auto object-cover"
        alt=""
        src="../anirudhxu4pz7gi9jyunsplash-15@2x.png"
      />
      <div className="absolute top-0 left flex flex-col w-full">
        <Header />
        <main className="w-full mt-[5%] flex flex-col justify-between items-center">
          <section
            className="relative w-[70%] text-left text-[inherit] text-white font-inherit md:w-[700px]"
            id="instructions"
          >
            <div
              className="flex flex-col justify-center items-center rounded-xl p-10 bg-gray-1100 [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
              id="instruction"
              data-animate-on-scroll
            >
              <h1
                className="m-[0] text-6xl font-bold font-noto-sans text-center [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                data-animate-on-scroll
              >
                INSTRUCTIONS
              </h1>
              <ul className="w-[85%]">
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Participants can take part only as a team. A team must
                    comprise of at least 2 members and at most 6.
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Participants can take part only as a team. A team must
                    comprise of at least 2 members and at most 6.
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Participants can take part only as a team. A team must
                    comprise of at least 2 members and at most 6.
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Participants can take part only as a team. A team must
                    comprise of at least 2 members and at most 6.
                  </h3>
                </li>
              </ul>
              <button
                className="cursor-pointer text-[#59db8a] text-base [border:2px_solid_#59db8a] p-3 bg-[transparent] rounded-xl box-border [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-left] lg:opacity-[0]"
                data-animate-on-scroll
              >
                Download Rulebook
              </button>
            </div>
          </section>
          <section
            className="flex flex-col items-center justify-between w-full [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-center text-6xl text-black font-space-grotesk"
            id="themes"
            data-animate-on-scroll
          >
            <h1
              className="text-white font-bold font-noto-sans"
              id="themes"
            >
              THEMES
            </h1>
            <div className="w-full flex my-5 flex-row justify-between items-center">
              <div className="relative">
                <RectangleComponentofRule1 isLeft={true}/>
                <h5
                  className="absolute top-[-20%] left-[30%] font-bold [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
                  data-animate-on-scroll
                >
                  Theme name
                </h5>
              </div>
              <div className="relative">
                <RectangleComponentofRule1 isLeft={false} />
                <h5
                  className="absolute top-[-20%] left-[30%] font-bold [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
                  data-animate-on-scroll
                >
                  Theme name
                </h5>
              </div>
            </div>
            <div className="w-full flex my-5 flex-row justify-between items-center">
              <div className="relative">
                <RectangleComponentofRule1 isLeft={true}/>
                <h5
                  className="absolute top-[-20%] left-[30%] font-bold [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
                  data-animate-on-scroll
                >
                  Theme name
                </h5>
              </div>
              <div className="relative">
                <RectangleComponentofRule1 isLeft={false} />
                <h5
                  className="absolute top-[-20%] left-[30%] font-bold [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
                  data-animate-on-scroll
                >
                  Theme name
                </h5>
              </div>
            </div>
            
          </section>
          <section
            className="mt-20 relative w-[70%] h-[864px] text-left text-[inherit] text-white font-inherit md:w-[700px]"
            id="instructions"
          >
            <div
              className="flex flex-col p-10 justify-center items-center rounded-xl bg-gray-1100 [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
              id="instruction"
              data-animate-on-scroll
            >
              <h1
                className="m-[0] text-6xl font-bold font-noto-sans text-center [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
                data-animate-on-scroll
              >
                PRIZES & PERKS
              </h1>
              <ul className="w-[85%]">
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and
                    River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and
                    River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and
                    River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and
                    River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and
                    River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and
                    River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and
                    River Rises
                  </h3>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Rules;
