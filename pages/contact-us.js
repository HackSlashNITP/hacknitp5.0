import { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Form from "../components/form";
import Image from "next/image";
import Carousel from "../components/carousel";
import bgImage from "../public/anirudhxu4pz7gi9jyunsplash-13@2x.png";
import doubtImage from "../public/Group.png";

const ContactUs = () => {
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
      className="relative bg-black w-full h-screen overflow-y-auto text-center text-2xl text-white font-space-grotesk"
      id="container"
    >
      <Image className="absolute top-[0px] left-[0px]" alt="" src={bgImage} />
      <div className="absolute top-0 left-0 w-full h-screen">
        <div className="content mb-[-0px]">
          <Header />
          <div className="w-full h-full flex flex-col items-center">
            <div className="contact-us my-5 flex flex-col justify-center items-center bg-[#1C172F] rounded-3xl mx-auto w-[100%] md:w-[100%] sm:w-[100%]">
              <h3 className="font-noto-sans text-5xl md:text-xl sm:text-xl">
                ORGANIZERS
              </h3>
              <Carousel images={images}/>
            </div>
            <div className="contact-us my-5 bg-[#1C172F] rounded-3xl w-[75%] md:w-[100%] sm:w-[100%]">
              <h3 className="font-noto-sans text-5xl md:text-xl sm:text-xl">
                CONTACT US
              </h3>
              <h5 className="text-[#9E9E9E] text-lg md:text-sm sm:text-sm">
                For any query contact us
              </h5>
              <div className="flex flex-row w-full items-end mb-20 md:mb-5 sm:md-5 md:flex-col-reverse sm:flex-col-reverse md:items-center sm:items-center">
                <div className="form-field flex flex-col w-[50%] md:w-full sm:w-full justify-center items-center">
                  <b className="text-xs text-[#2BFF08] font-normal my-4 md:text-xs sm:text-xs">
                    Fill the details
                  </b>
                  <Form />
                </div>
                <div className="w-[50%] md:w-[75%] sm:w-[75%]">
                  <Image src={doubtImage} alt="Ask your doubts" />
                </div>
              </div>
            </div>
            <div className="my-10 bg-[#1C172F] rounded-3xl w-[75%] md:w-[100%] sm:w-[100%]">
              <h3 className="font-noto-sans text-5xl md:text-xl sm:text-xl">
                FREQUENTLY ASKED{" "}
                <span className="text-[#2BFF08]">QUESTIONS</span>
              </h3>
              <div className="w-[75%] mx-auto md:w-[100%] sm:w-[100%] flex flex-col justify-start items-stretch text-start px-10 md:px-1 sm:px-1 md:text-center sm:text-center">
                <p className="text-lg md:text-[20px] sm:text-[20px]">
                  Who can apply for the hackathon?
                </p>
                <p className="text-lg md:text-[20px] sm:text-[20px]">
                  Who can apply for the hackathon?
                </p>
                <p className="text-lg md:text-[20px] sm:text-[20px]">
                  Who can apply for the hackathon?
                </p>
                <p className="text-lg md:text-[20px] sm:text-[20px]">
                  Who can apply for the hackathon?
                </p>
              </div>
            </div>

            {/* <div
              className=" top-[calc(50%_-_1208px)] left-[calc(50%_-_555px)] rounded-[45px] bg-gray-1100 w-[1100px] h-[714px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
              id="box1"
              data-animate-on-scroll
            />
            <div
              className=" top-[calc(50%_-_1026px)] left-[calc(50%_-_555px)] w-[1100px] h-[425px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
              id="sub1Box1"
              data-animate-on-scroll
            >
              <div className=" top-[calc(50%_-_208.5px)] left-[calc(50%_-_550px)] w-[1093px] h-[421px] overflow-x-auto">
                <iframe
                  className="[border:none]  top-[0px] left-[0px] bg-gray-1400 w-[252px] h-[421px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                />
                <FrameComponent2 />
                <iframe
                  className="[border:none]  top-[0px] left-[562px] bg-gray-1400 w-[253px] h-[421px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
                  data-animate-on-scroll
                />
                <FrameComponent3 />
              </div>
              <img
                className=" top-[calc(50%_-_212.5px)] left-[calc(50%_-_550px)] w-[1180px] h-[152px]"
                alt=""
                src="../ellipse-116.svg"
              />
              <img
                className=" top-[calc(50%_+_151.5px)] left-[calc(50%_-_550px)] w-[1180px] h-[152px]"
                alt=""
                src="../ellipse-117.svg"
              />
            </div>
            <h3
              className="m-[0]  top-[45px] left-[calc(50%_-_287px)] text-6xl font-bold font-noto-sans inline-block w-[563px] h-[65px]"
              id="heading1"
            >
              ORGANIZERS
            </h3> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
