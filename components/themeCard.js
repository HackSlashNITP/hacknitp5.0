import React from "react";

const ThemeCard = ({ img, desc }) => {
  return (
    <div className="bg-[#28e806] rounded-xl md:rounded-none my-4 p-5 sm:text-start md:text-start text-center flex gap-y-5 flex-col md:flex-row sm:flex-row justify-center md:justify-start sm:justify-start gap-x-5 items-center sm:w-[100%] md:w-[100%] h-auto">
      <img src={img} alt={desc} className="min-w-[100px] min-h-[100px] w-[30%] max-w-[150px] max-h-[150px]"/>
      <b className="w-full text-black text-xl md:text-[20px] sm:text-[20px] font-normal">{desc}</b>
    </div>
  );
};

export default ThemeCard;
