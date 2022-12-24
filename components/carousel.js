import Image from "next/image";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative w-[50%] min-w-[300px] my-20">
      <div className="absolute left-0 m-auto inset-y-1/2 cursor-pointer z-20 bg-white p-2 w-[40px] h-[40px] rounded-full flex justify-center items-center">
        <AiOutlineLeft
          onClick={handlePrevSlide}
          className="text-5xl sm:text-sm md:text-base text-black"
        />
      </div>
      <div className="w-full h-[50vh] lg:h-[30vh] md:h-[25vh] sm:h-[20vh] flex overflow-hidden relative m-auto ">
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <Image
                  key={image.id}
                  src={image.src}
                  layout="fill"
                  objectFit="contain"
                  className="relative animate-fadeIn w-full h-full z-10"
                />
              );
            }
          })}
      </div>
      <div className="absolute right-0 m-auto inset-y-1/2 cursor-pointer z-20 bg-white p-2 w-[40px] h-[40px] rounded-full flex justify-center items-center">
        <AiOutlineRight
          onClick={handleNextSlide}
          className="text-5xl  sm:text-sm md:text-base text-black"
        />
      </div>

      <div className="relative flex justify-center">
        {images.map((_, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                  : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
