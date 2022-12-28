import React from "react";

const SocialMediaIcon = ({link, icon}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <div className="cursor-pointer bg-[transparent] my-3 flex text-white text-sm justify-center items-center">
        {icon}
      </div>
    </a>
  );
};

export default SocialMediaIcon;
