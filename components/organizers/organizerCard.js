import React from "react";
import Image from "next/image";
import style from "../../styles/organisers.module.css";
import SocialMediaIcon from "../social_media_icon";
import { AiFillLinkedin, AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";

const OrganizerCard = ({imgUrl, name, role, linkedin, twitter, github}) => {
  return (
    <div className="m-4 ">
      <div className={style.container}>
        <Image
          src={imgUrl}
          width={100}
          height={100}
          objectFit='cover'
          className="border-2 rounded-full w-58 hover:bg-[#d4d4d8] hover:scale-150 transition duration-300 ease-in-out hover:opacity-50"
          id="pic"
        />
      </div>

      <figcaption
        className="text-xs text-yellow-900"
        style={{ fontSize: "1rem" }}
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
        {twitter && <SocialMediaIcon link={twitter} icon={<AiFillTwitterCircle />}/>}
      </div>
    </div>
  );
};

export default OrganizerCard;
