import { useEffect } from "react";
import Box2 from "../components/box2";
import Header from "../components/header";
import Footer from "../components/footer";
import EmptyBox from "../components/emptyBox";

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

  const platinumSponsors = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  return (
    <div className="bg-black w-full md:bg-[url('../public/background-medium.jpg')] bg-[url('../public/background.jpg')] bg-cover md:bg-fixed bg-no-repeat overflow-y-auto flex flex-col items-center justify-center gap-[0px] text-center text-5xl text-white font-space-grotesk">
      <Header />
      <div className="self-stretch overflow-hidden flex flex-col p-[16px_0px] box-border items-center justify-center text-4xl font-noto-sans">
        <div className="overflow-hidden flex flex-row box-border items-center justify-center">
          <h3
            className="text-[inherit] font-inherit inline-block font-normal md:text-xl"
            id="heading"
          >
            SPONSORS
          </h3>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[22px] lg:h-[auto] md:pt-[0px] md:pb-[0px] md:box-border md:h-[auto]">
        <div className="overflow-hidden flex flex-col box-border items-center justify-center">
          <b className="text-lg font-light md:text-sm">Title Sponsors</b>
        </div>
        <div
          className="grid grid-cols-3 md:grid-cols-1 gap-x-20 gap-y-10 [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          {platinumSponsors.map((sponsor) => {
            return <EmptyBox key={sponsor.id} />;
          })}
        </div>
      </div>
      <div className="self-stretch my-10 overflow-hidden flex flex-col items-center justify-center gap-[22px] md:flex-col md:pt-[0px] md:pb-[0px] md:box-border md:h-[auto]">
        <div className="overflow-hidden flex flex-col box-border items-center justify-center">
          <b className="text-lg font-light md:text-sm">Associate Sponsors</b>
        </div>
        <div
          className="grid grid-cols-3 md:grid-cols-1 gap-x-20 gap-y-10 [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          {platinumSponsors.map((sponsor) => {
            return <EmptyBox key={sponsor.id} />;
          })}
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[22px] lg:h-[auto] md:pt-[0px] md:pb-[0px] md:box-border md:h-[auto] sm:h-[auto]">
        <div className="shrink-0 overflow-hidden flex flex-col px-20 box-border items-center justify-center">
          <b className="text-lg font-light md:text-sm">Subevent Sponsors</b>
        </div>
        <div
          className="grid grid-cols-3 md:grid-cols-1 gap-x-20 gap-y-10 [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          {platinumSponsors.map((sponsor) => {
            return <EmptyBox key={sponsor.id} />;
          })}
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center gap-[22px] lg:h-[auto] md:pt-[0px] md:pb-[0px] md:box-border md:h-[auto] sm:h-[auto]">
        <div className="shrink-0 overflow-hidden flex flex-col px-20 box-border items-center justify-center">
          <b className="text-lg font-light md:text-sm">Certificate Sponsors</b>
        </div>
        <div
          className="grid grid-cols-3 md:grid-cols-1 gap-x-20 gap-y-10 [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          data-animate-on-scroll
        >
          {platinumSponsors.map((sponsor) => {
            return <EmptyBox key={sponsor.id} />;
          })}
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
