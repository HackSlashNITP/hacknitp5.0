import React from "react";
import SponsorBox from "./sponsorBox";

const SponsorGrid = ({ sponsors, title }) => {
  return (
    <section className="title-sponsor w-full flex flex-col items-center">
      <h4 className="text-2xl font-normal my-5 md:text-lg md:my-3">{title}</h4>
      <div className="w-[75%] md:w-[100%] grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-2 place-items-center">
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
