import React from "react";
import Image from "next/image";
import style from "../../styles/organisers.module.css";
import SocialMediaIcon from "../social_media_icon";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const OrganizerCard = ({imgUrl, name, role, linkedin, github}) => {
  return (
    <div className="m-4 ">
      <div className={style.container}>
        <Image
          src={imgUrl}
          width={125}
          height={125}
          objectFit='cover'
          className="border-2 rounded-full sm:w-[100px] sm:h-[100px]"
          id="pic"
        />
      </div>

      <figcaption
        className="text-xs text-yellow-900"
        style={{ fontSize: "1.2rem" }}
      >
        {name}
      </figcaption>

      <figcaption
        className="p-0 m-0 text-[#4ade80]"
        style={{ fontSize: "0.8rem" }}
      >
        {role}
      </figcaption>

      <div className="social-media-handles flex flex-row gap-x-3 justify-center items-center">
        {linkedin && <SocialMediaIcon link={linkedin} icon={<AiFillLinkedin />}/>}
        {github && <SocialMediaIcon link={github} icon={<AiFillGithub />}/>}
      </div>
    </div>
  );
};

export default OrganizerCard;
