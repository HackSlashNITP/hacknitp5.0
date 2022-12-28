import React from "react";
import Image from "next/image";
import style from "../../styles/organisers.module.css";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

const OrganizerCard = ({imgUrl, name, role}) => {
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
        <a
          className="text-[#4ade80] hover:scale-150"
          href="https://www.linkedin.com/company/hackslash"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillLinkedin /> <AiFillTwitterCircle />
        </a>
      </figcaption>
      <figcaption
        className="p-0 m-0 text-[#4ade80]"
        style={{ fontSize: "0.8rem" }}
      >
        {role}
      </figcaption>
    </div>
  );
};

export default OrganizerCard;
