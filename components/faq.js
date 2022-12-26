import React from "react";
const Faq = ({ query, ans, id }) => {
  const handleClick = () => {
    document.querySelectorAll(".answer")[id].classList.toggle("hidden");
  };

  return (
    <div
      className="faq-container cursor-pointer md:w-full sm:w-full my-2 flex justify-start items-center "
      onClick={handleClick}
    >
      <div className="faq-section">
        <div className="flex flex-row items-start justify-start text-start gap-x-3">
          <div className="flex flex-col justify-start items-start">
            <div className="question">
              <h3 className="faq-ques text-lg md:text-xs sm:text-xs font-normal">
                {query}
              </h3>
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
