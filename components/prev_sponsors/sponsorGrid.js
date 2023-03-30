import React from "react";
import SponsorBox from "./sponsorBox";

const SponsorGrid = ({ sponsors, title }) => {
  return (
    <section className="title-sponsor w-full flex flex-col items-center">
      <h4 className="text-2xl font-normal my-5 md:text-lg md:my-3">{title}</h4>
      <div className="w-[75%] md:w-[100%] flex flex-row justify-center items-center gap-16 flex-wrap">
        {sponsors.map((sponsor) => {
          return (
            <SponsorBox
              key={sponsor.id}
              image={sponsor.logo}
              link={sponsor.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SponsorGrid;
