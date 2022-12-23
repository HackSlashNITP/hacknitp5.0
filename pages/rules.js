import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import RectangleComponentofRule1 from "../components/rectangle-componentof-rule1";
import RectangleComponentOfrule2 from "../components/rectangle-component-ofrule2";

const Rules = () => {
  const router = useRouter();

  const onHacknitp5Click = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onTimelineTextClick = useCallback(() => {
    router.push("/timeline");
  }, [router]);

  const onSponsorsTextClick = useCallback(() => {
    // Please sync "6 Sponsors" to the project
  }, []);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

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
    <div className="relative bg-gray-1000 w-full h-[2880px] overflow-y-auto text-center text-xs text-white font-space-grotesk">
      <img
        className="absolute top-[0px] left-[0px] w-[1280px] h-[2880px] object-cover"
        alt=""
        src="../anirudhxu4pz7gi9jyunsplash-15@2x.png"
      />
      <div className="absolute h-[2.6%] w-[94.14%] top-[0.76%] right-[2.81%] bottom-[96.63%] left-[3.05%]">
        <img
          className="absolute h-full w-[19.74%] top-[0%] right-[80.26%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src="../hacknitp56.svg"
          onClick={onHacknitp5Click}
        />
        <b className="absolute top-[16px] left-[407px] inline-block">
          About Us
        </b>
        <b
          className="absolute top-[16px] left-[536px] inline-block cursor-pointer"
          onClick={onTimelineTextClick}
        >
          Timeline
        </b>
        <b className="absolute top-[16px] left-[659px] inline-block">Rules</b>
        <b
          className="absolute top-[17px] left-[754px] inline-block cursor-pointer"
          onClick={onSponsorsTextClick}
        >
          Sponsors
        </b>
        <b
          className="absolute top-[16px] left-[882px] inline-block cursor-pointer"
          onClick={onContactUsTextClick}
        >
          Contact Us
        </b>
        <button className="cursor-pointer [border:none] p-[0] bg-green-100 absolute top-[5px] left-[1025px] rounded-[15px] w-[180px] h-[50px]" />
        <b className="absolute top-[18px] left-[1044px] text-2xs inline-block text-black">
          Join Our Discord
        </b>
      </div>
      <main className="absolute top-[206px] left-[32px] w-[1218px] h-[2565px]">
        <section
          className="absolute top-[1825px] left-[93px] w-[1030px] h-[740px] text-left text-[inherit] text-white font-inherit"
          id="prizes"
        >
          <section
            className="absolute top-[0px] left-[0px] rounded-[43px] bg-gray-1100 w-[1030px] h-[740px]"
            id="prizes"
          />
          <p className="m-[0] absolute top-[635px] left-[75px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[33px]">
              For top performing teams, exclusive t-shirts and swags will be
              provided*.
            </ul>
          </p>
          <p className="m-[0] absolute top-[539px] left-[75px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[33px]">
              Cash prize worth 20k for best Dapp built on Celo and Cash prize
              worth 20k for best use of IPFS and/or Filecoin*.
            </ul>
          </p>
          <p className="m-[0] absolute top-[443px] left-[75px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[33px]">
              Cash prize worth 20k for best Dapp built on Tezos. Continuity
              grant opportunity up to 5,000 USD(or equivalent) for an
              outstanding project*.
            </ul>
          </p>
          <p className="m-[0] absolute top-[287px] left-[75px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[33px]">
              Cash prize worth 10k for best hack built on top of Ethereum and
              for teams that integrate Polygon in their hacks as well the prize
              money will be 15k along with eligibility for internship/full-time
              role interviews and a chance to land seed funding of upto 5000
              USD(or equivalent)!*.
            </ul>
          </p>
          <p className="m-[0] absolute top-[193px] left-[75px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[32px]">
              Potential candidates get a chance to bag an internship or a full
              time job at Quidnunc’s IT division with stipend and seed funding
              upto 2Lakh*.
            </ul>
          </p>
          <p className="m-[0] absolute top-[128px] left-[75px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[32px]">
              Cash prize worth 20k sponsored by Quidnunc Infotainment and River
              Rises
            </ul>
          </p>
          <h2
            className="m-[0] absolute top-[38.11px] left-[257px] text-6xl font-bold font-noto-sans text-center inline-block w-[516px] h-[54.14px]"
            id="prizes_heading"
          >{`PRIZES & PERKS`}</h2>
        </section>
        <section
          className="absolute top-[951px] left-[0px] w-[1218px] h-[734px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-center text-6xl text-black font-space-grotesk"
          id="themes"
          data-animate-on-scroll
        >
          <div className="absolute top-[183px] left-[0px] w-[500px] h-[73px]">
            <RectangleComponentofRule1 />
            <h5
              className="m-[0] absolute top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
              data-animate-on-scroll
            >
              Theme name
            </h5>
          </div>
          <div className="absolute top-[183px] left-[718px] w-[500px] h-[73px]">
            <RectangleComponentOfrule2 />
            <h5
              className="m-[0] absolute top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] lg:opacity-[0]"
              data-animate-on-scroll
            >
              Theme name
            </h5>
          </div>
          <div className="absolute top-[422px] left-[0px] w-[500px] h-[73px]">
            <div
              className="absolute top-[-29px] left-[-68px] rounded-[20px] bg-green-100 w-[600px] h-[130px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
              data-animate-on-scroll
            />
            <h5
              className="m-[0] absolute top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
              data-animate-on-scroll
            >
              Theme name
            </h5>
          </div>
          <div className="absolute top-[422px] left-[718px] w-[500px] h-[73px]">
            <div
              className="absolute top-[-29px] left-[-35px] rounded-[20px] bg-green-100 w-[600px] h-[130px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] lg:opacity-[0]"
              data-animate-on-scroll
            />
            <h5
              className="m-[0] absolute top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] lg:opacity-[0]"
              data-animate-on-scroll
            >
              Theme name
            </h5>
          </div>
          <div className="absolute top-[661px] left-[0px] w-[500px] h-[73px]">
            <div
              className="absolute top-[-29px] left-[-68px] rounded-[20px] bg-green-100 w-[600px] h-[130px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
              data-animate-on-scroll
            />
            <h5
              className="m-[0] absolute top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
              data-animate-on-scroll
            >
              Theme name
            </h5>
          </div>
          <div className="absolute top-[661px] left-[718px] w-[500px] h-[73px]">
            <div
              className="absolute top-[-29px] left-[-35px] rounded-[20px] bg-green-100 w-[600px] h-[130px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] lg:opacity-[0]"
              id="theme6"
              data-animate-on-scroll
            />
            <h5
              className="m-[0] absolute top-[0px] left-[0px] text-[inherit] font-bold font-inherit flex items-center justify-center w-[500px] h-[73px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] lg:opacity-[0]"
              data-animate-on-scroll
            >
              Theme name
            </h5>
          </div>
          <div className="absolute top-[0px] left-[350px] w-[516px] h-[54px] text-white font-noto-sans">
            <h1
              className="m-[0] absolute top-[0px] left-[0px] text-[inherit] font-bold font-inherit inline-block w-[516px] h-[54px] mix-blend-normal"
              id="themes"
            >
              THEMES
            </h1>
          </div>
        </section>
        <section
          className="absolute top-[0px] left-[93px] w-[1030px] h-[864px] text-left text-[inherit] text-white font-inherit md:w-[700px] md:[transform:rotate(-500deg)]"
          id="instructions"
        >
          <main
            className="absolute top-[0px] left-[0px] rounded-[50px] bg-gray-1100 w-[1030px] h-[864px] [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
            id="instruction"
            data-animate-on-scroll
          />
          <div
            className="absolute top-[113px] left-[37px] w-[950px] h-[576px] [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-left] lg:opacity-[0]"
            id="rules"
            data-animate-on-scroll
          >
            <h3 className="m-[0] absolute top-[0px] left-[0px] text-[inherit] font-normal font-inherit inline-block w-[950px]">
              <ul className="m-[0] pl-[32px]">
                Participants can take part only as a team. A team must comprise
                of at least 2 members and at most 6. A team must comprise of at
                least 2 members.
              </ul>
            </h3>
            <h3 className="m-[0] absolute top-[102px] left-[0px] text-[inherit] font-normal font-inherit inline-block w-[950px]">
              <ul className="m-[0] pl-[32px]">
                Participants can take part only as a team. A team must comprise
                of at least 2 members and at most 6. A team must comprise of at
                least 2 members.
              </ul>
            </h3>
            <h3 className="m-[0] absolute top-[204px] left-[0px] text-[inherit] font-normal font-inherit inline-block w-[950px]">
              <ul className="m-[0] pl-[32px]">
                Participants can take part only as a team. A team must comprise
                of at least 2 members and at most 6. A team must comprise of at
                least 2 members.
              </ul>
            </h3>
            <h3 className="m-[0] absolute top-[306px] left-[0px] text-[inherit] font-normal font-inherit inline-block w-[950px]">
              <ul className="m-[0] pl-[32px]">
                Participants can take part only as a team. A team must comprise
                of at least 2 members and at most 6. A team must comprise of at
                least 2 members.
              </ul>
            </h3>
            <h3 className="m-[0] absolute top-[408px] left-[0px] text-[inherit] font-normal font-inherit inline-block w-[950px]">
              <ul className="m-[0] pl-[32px]">
                Participants can take part only as a team. A team must comprise
                of at least 2 members and at most 6. A team must comprise of at
                least 2 members.
              </ul>
            </h3>
            <h3 className="m-[0] absolute top-[510px] left-[0px] text-[inherit] font-normal font-inherit inline-block w-[950px]">
              <ul className="m-[0] pl-[32px]">
                Participants can take part only as a team. A team must comprise
                of at least 2 members and at most 6. A team must comprise of at
                least 2 members.
              </ul>
            </h3>
          </div>
          <button
            className="cursor-pointer [border:2px_solid_#59db8a] p-[10px_0px] bg-[transparent] absolute top-[732px] left-[348px] rounded-[15px] box-border flex flex-row items-start justify-start [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-left] lg:opacity-[0]"
            data-animate-on-scroll
          >
            <button
              className="cursor-pointer [border:none] p-[0] bg-[transparent] relative text-xl font-poppins text-turquoise text-center inline-block"
              id="rulebook_download"
            >
              Download Rulebok
            </button>
          </button>
          <h1
            className="m-[0] absolute top-[25px] left-[258px] text-6xl font-bold font-noto-sans text-center inline-block w-[516px] h-[54px] [&.animate]:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] [&.animate]:lg:animate-[0.75s_ease_0s_1_normal_forwards_slide-in-top] lg:opacity-[0]"
            data-animate-on-scroll
          >
            INSTRUCTIONS
          </h1>
        </section>
      </main>
    </div>
  );
};

export default Rules;
