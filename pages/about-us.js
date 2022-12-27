import { useEffect } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import bgImage from "../public/anirudhxu4pz7gi9jyunsplash-11@2x.png";
import JudgesCarousel from "../components/judgesCarousel";

const AboutUs = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const images = [
    {
      id: 1,
      src: "/1892-2@2x.png",
      alt: "",
    },
    {
      id: 2,
      src: "/group-1332@2x.png",
      alt: "",
    },
  ];

  return (
    <div
      className="relative bg-black w-full h-screen overflow-y-auto text-center text-xs text-white font-space-grotesk"
      id="about"
    >
      {/* <Image className="absolute top-[0px] left-[0px]" alt="" src={bgImage} /> */}
      <div className="absolute w-full h-screen top-0 left-0">
        <div className="wrapper min-h-full mb-[-0px]">
          <Header />
          <div className="content w-full h-full flex flex-col justify-start items-center md:justify-center sm:justify-center">
            <div className="about-us-info my-10">
              <h1 className="text-5xl md:text-[25px] sm:text-[25px]">ABOUT US</h1>
              <div className="w-full flex justify-start my-4 md:w-full sm:w-full sm:text-[15px] md:text-[16px]">
                <div className="bg-[#1C172F] p-5 w-[45%] rounded-4xl md:w-full sm:w-full">
                  <p>
                    National Institute of Technology Patna is the 18th National
                    Institute of Technology created by the Ministry of H.R.D.
                    Government of India after rechristening the erstwhile Bihar
                    College of Engineering Patna on 28. 01. 2004.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-end my-4 md:w-full sm:w-full">
                <div className="bg-[#1C172F] p-5 w-[45%] rounded-4xl md:w-full sm:w-full sm:text-[15px] md:text-[16px]">
                  <p>
                    National Institute of Technology Patna is the 18th National
                    Institute of Technology created by the Ministry of H.R.D.
                    Government of India after rechristening the erstwhile Bihar
                    College of Engineering Patna on 28. 01. 2004.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-us-judges w-full flex flex-col justify-center items-center my-3">
              <h1 className="text-5xl md:text-[25px] sm:text-[25px] my-10 md:my-0 sm:my-0">PAST-YEAR JUDGES</h1>
              <JudgesCarousel/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
