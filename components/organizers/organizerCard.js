import React from "react";
import Image from "next/image";
import style from "../../styles/organisers.module.css";
import SocialMediaIcon from "../social_media_icon";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const OrganizerCard = ({ imgUrl, name, role, linkedin, github }) => {
  return (
    // Responsive, adapts to different name sizes, to be used when all social media handles are available
    // <div className="m-4 h-[285px] flex flex-col justify-between">
    //   <div className={style.container}>
    //     <Image
    //       src={imgUrl}
    //       width={125}
    //       height={125}
    //       objectFit="cover"
    //       className="rounded-full sm:w-[100px] sm:h-[100px] [border:2px_solid_transparent] hover:[border:2px_solid_#2BFF08]"
    //       id="pic"
    //     />
    //     <figcaption
    //       className="text-xs text-yellow-900"
    //       style={{ fontSize: "1.2rem" }}
    //     >
    //       {name}
    //     </figcaption>
    //   </div>

    //   <div className="details flex flex-col gap-y-0">
    //     <figcaption
    //       className="p-0 m-0 text-[#4ade80]"
    //       style={{ fontSize: "0.8rem" }}
    //     >
    //       {role}
    //     </figcaption>

    //     <div className="social-media-handles flex flex-row gap-x-4 justify-center items-center">
    //       {linkedin && (
    //         <SocialMediaIcon link={linkedin} icon={<AiFillLinkedin />} />
    //       )}
    //       {github && <SocialMediaIcon link={github} icon={<AiFillGithub />} />}
    //     </div>
    //   </div>
    // </div>

    <div className="m-4">
      <div className={style.container}>
        <Image
          src={imgUrl}
          width={125}
          height={125}
          objectFit="cover"
          className="rounded-full sm:w-[100px] sm:h-[100px] [border:2px_solid_transparent] hover:[border:2px_solid_#2BFF08]"
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

      <div className="social-media-handles flex flex-row gap-x-4 justify-center items-center">
        {linkedin && (
          <SocialMediaIcon link={linkedin} icon={<AiFillLinkedin />} />
        )}
        {github && <SocialMediaIcon link={github} icon={<AiFillGithub />} />}
      </div>
    </div>
  );
};

export default OrganizerCard;
