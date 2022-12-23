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
        <main className="w-[100%] mt-[5%] flex flex-col justify-center items-center">
          <section
            className="relative w-[70%] text-left text-[inherit] text-white font-inherit md:w-[700px] md:[transform:rotate(-500deg)]"
            id="instructions"
          >
            <div
              className="flex flex-col justify-center items-center rounded-xl bg-gray-1100 [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
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
            className="w-[1218px] h-[734px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-center text-6xl text-black font-space-grotesk"
            id="themes"
            data-animate-on-scroll
          >
            <div className="top-[183px] left-[0px] w-[500px] h-[73px]">
              <RectangleComponentofRule1 />
              <h5
                className="m-[0]  top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
                data-animate-on-scroll
              >
                Theme name
              </h5>
            </div>
            <div className=" top-[183px] left-[718px] w-[500px] h-[73px]">
              <RectangleComponentOfrule2 />
              <h5
                className="m-[0]  top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] lg:opacity-[0]"
                data-animate-on-scroll
              >
                Theme name
              </h5>
            </div>
            <div className="top-[422px] left-[0px] w-[500px] h-[73px]">
              <div
                className=" top-[-29px] left-[-68px] rounded-[20px] bg-green-100 w-[600px] h-[130px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
                data-animate-on-scroll
              />
              <h5
                className="m-[0]  top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
                data-animate-on-scroll
              >
                Theme name
              </h5>
            </div>
            <div className=" top-[422px] left-[718px] w-[500px] h-[73px]">
              <div
                className=" top-[-29px] left-[-35px] rounded-[20px] bg-green-100 w-[600px] h-[130px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] lg:opacity-[0]"
                data-animate-on-scroll
              />
              <h5
                className="m-[0]  top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] lg:opacity-[0]"
                data-animate-on-scroll
              >
                Theme name
              </h5>
            </div>
            <div className=" top-[661px] left-[0px] w-[500px] h-[73px]">
              <div
                className=" top-[-29px] left-[-68px] rounded-[20px] bg-green-100 w-[600px] h-[130px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
                data-animate-on-scroll
              />
              <h5
                className="m-[0]  top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
                data-animate-on-scroll
              >
                Theme name
              </h5>
            </div>
            <div className=" top-[661px] left-[718px] w-[500px] h-[73px]">
              <div
                className=" top-[-29px] left-[-35px] rounded-[20px] bg-green-100 w-[600px] h-[130px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] lg:opacity-[0]"
                id="theme6"
                data-animate-on-scroll
              />
              <h5
                className="m-[0]  top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] lg:opacity-[0]"
                data-animate-on-scroll
              >
                Theme name
              </h5>
            </div>
            <div className=" top-[0px] left-[350px] w-[516px] h-[54px] text-white font-noto-sans">
              <h1
                className="m-[0]  top-[0px] left-[0px] text-[inherit] font-bold font-inherit inline-block w-[516px] h-[54px] mix-blend-normal"
                id="themes"
              >
                THEMES
              </h1>
            </div>
          </section>
          <section
            className="relative w-[70%] h-[864px] text-left text-[inherit] text-white font-inherit md:w-[700px] md:[transform:rotate(-500deg)]"
            id="instructions"
          >
            <div
              className="flex flex-col justify-center items-center rounded-xl bg-gray-1100 [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
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
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and River Rises
                  </h3>
                </li>
                <li>
                  <h3 className="m-[0] text-[inherit] font-normal font-inherit">
                    Cash prize worth 20k sponsored by Quidnunc Infotainment and River Rises
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
