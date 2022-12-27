import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const Faq = ({ query, ans, id }) => {
  const handleClick = () => {
    document.querySelectorAll(".answer")[id].classList.toggle("hidden");
    document.querySelectorAll(".indicator")[id].classList.toggle("rotate-180");
  };

  return (
    <div
      className="faq-container cursor-pointer md:w-full sm:w-full my-2 flex justify-start items-center "
      onClick={handleClick}
    >
      <div className="faq-section">
        <div className="flex flex-row items-start justify-start text-start gap-x-3">
          <div className="flex flex-col justify-start items-start">
            <div className="question flex flex-row justify-between items-center">
              <h3 className="faq-ques text-lg md:text-xs sm:text-xs font-normal">
                {query}
              </h3>
              <IoIosArrowDown className="indicator transition-transform font-bold md:text-[15px] sm:text-[15px] ml-[10px]"/>
            </div>
            <div className="answer hidden">
              <p className="faq-ans ml-[20px] text-xs md:text-[16px] sm:text-[16px] font-light text-start">
                {ans}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
