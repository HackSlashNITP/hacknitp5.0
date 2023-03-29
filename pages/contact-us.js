import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Form from "../components/form";
import Image from "next/image";
import doubtImage from "../public/Group.png";
import Faq from "../components/faq";
import Organizers from "../components/organizers/organizers.js";
import { IoIosArrowDown } from "react-icons/io";

function useWindowSize() {

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const [windowWidth, setWindowWidth] = useState({ width: undefined });

  //handle to call on window resize
  useEffect(() => {
    function handleResize() {
      //set window width to state
      setWindowWidth({ width: window.innerWidth });
    }

    //add event listener
    window.addEventListener("resize", handleResize);

    //call handle right away so that the state gets initialized with original window size
    handleResize();

    //remove listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}
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

  const faqs = [
    {
      id: 0,
      query: "What do I need to do to participate?",
      ans: "Apply using Devfolio and join HackSlash Discord server",
    },
    {
      id: 1,
      query: "What can be the size of Team ?",
      ans: "A team can consist of 1-4 members",
    },
    {
      id: 2,
      query: "Are there any registration charges ?",
      ans: "Nope! None at all",
    },
    {
      id: 3,
      query: "Do we get any certificate for participation ?",
      ans: "Yes, you do get a Certificate of Participation if your hack is submitted successfully",
    },
  ];

  const [show, setShow] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 990) {
      setShow(true);
      setShowIndicator(false);
    } else {
      setShow(false);
      setShowIndicator(true);
    }
  }, [size]);

  const revealOrganizers = () => {
    setShow(!show);
    document.querySelector(".showOrganizers").classList.toggle("rotate-180");
  };

  return (
    <div
      className="bg-black w-full h-screen overflow-y-auto text-center text-2xl text-white font-space-grotesk"
      id="container"
    >
      <div className="w-full h-screen">
        <div className="bg-[url('../public/background.jpg')] md:bg-[url('../public/background-medium.jpg')] bg-cover md:bg-fixed bg-no-repeat content mb-[-0px]">
          <Header />
          <div className="w-full h-full flex flex-col items-center">
            <div className="contact-us p-5 my-5 flex flex-col justify-center items-center bg-[#1C172F] rounded-3xl mx-auto w-[100%] md:w-[100%] gap-y-3 ">
              <h3 className="font-noto-sans text-5xl md:text-xl sm:text-xl">
                ORGANIZERS
              </h3>
              <div className="flex flex-col justify-center items-center gap-y-0" onClick={revealOrganizers}>
                {showIndicator && <IoIosArrowDown className="showOrganizers cursor-pointer transition-transform" />}
                {show || <p className="text-xs">Click to reveal...</p>}
              </div>
              {show && <Organizers />}
            </div>
            <div className="contact-us my-5 py-6 bg-[#1C172F] rounded-3xl w-[75%] md:w-[100%] sm:w-[100%]">
              <h3 className="font-noto-sans text-5xl md:text-xl sm:text-xl">
                CONTACT US
              </h3>
              <h5 className="text-[#9E9E9E] text-lg md:text-sm sm:text-sm font-normal">
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
            <div className="my-10 py-6 bg-[#1C172F] rounded-3xl w-[75%] md:w-[100%] sm:w-[100%] px-5">
              <h3 className="font-noto-sans text-5xl md:text-xl sm:text-xl">
                FREQUENTLY ASKED{" "}
                <span className="text-[#2BFF08]">QUESTIONS</span>
              </h3>
              <div className="w-full md:my-5 sm:my-5 my-10 mx-auto md:w-[100%] sm:w-[100%] flex flex-col justify-start items-stretch text-start px-10 md:px-1 sm:px-1 md:text-center sm:text-center">
                {faqs.map((faq) => {
                  return (
                    <Faq
                      query={faq.query}
                      ans={faq.ans}
                      key={faq.id}
                      id={faq.id}
                    />
                  );
                })}
              </div>
              <hr className="text-[#545454] w-[95%] mx-auto" />
              <div className="flex flex-col justify-center items-center">
                <p className="my-5 text-base font-bold text-[#1BFF25]">
                  What are you waiting for? Register Now!!
                </p>
                <div className="md:w-[70%] sm:w-[70%]  w-[400px]  h-[50px] flex justify-center items-center">
                <div
                  className="apply-button"
                  data-hackathon-slug="byteverse"
                  data-button-theme="light"
                  style={{
                    height: "44px",
                    width: "312px"
                  }}
                >
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;







//  for custom devfolio button

{/* <b className="text-xs"><a src="../Byteverse_logo2.png"></a></b> */}
                {/* <a href="https://devfolio.co/" target="blank" className="md:w-[70%] sm:w-[70%]  w-[400px]  h-[50px] py-1 no-underline text-white hover: w-[400px] bg-black">
                  <img src="../logoD.png" className="p-auto w-6" alt=""/><p className="inline-block text-sm sm:text-xs pb-2 pl-1"> Apply with Devfolio</p>
        </a> */}

                {/* <div className="md:w-[70%] sm:w-[70%] cursor-pointer hover:bg-[#2563eb] w-[400px]   bg-[#3b82f6] flex justify-center items-center text-black rounded">
                  */}
                {/* <b className="text-xs"><a src="../Byteverse_logo2.png"></a></b> */}

                {/* <a href="https://devfolio.co/" target="blank" className="hover:text-white w-[400px]">
                  <img  className="w-1/12 mt-2 overflow-hidden "
        alt=""
        src="../logoD.png"
        data-animate-on-scroll/><p className="relative bottom-2 left-1 inline-block text-white text-sm sm:text-xs ">Apply with Devfolio</p>
        </a>
                </div> */}
