import React from "react";
import Image from "next/image";

const SponsorBox = ({ image, link }) => {
  return (
    <div className="p-10 h-[30%] max-h-[200px] min-h-[200px] max-w-[300px] min-w-[200px] bg-white rounded-xl overflow-hidden flex justify-center items-center">
      <a
        href={link}
        target={"_blank"}
        rel="noreferrer noopener"
      >
        <Image
          src={image.src}
          width={300}
          height={300}
          objectFit='contain'
        />
      </a>
    </div>
  );
};

export default SponsorBox;
