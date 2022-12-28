import React from "react";

const SocialMediaIcon = ({link, icon}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      <div className="cursor-pointer bg-[transparent] my-3 md:text-sm text-white text-lg">
        {icon}
      </div>
    </a>
  );
};

export default SocialMediaIcon;
