import { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Form from "../components/form";
import Image from "next/image";
import Carousel from "../components/carousel";
import bgImage from "../public/anirudhxu4pz7gi9jyunsplash-13@2x.png";
import doubtImage from "../public/Group.png";
import Faq from "../components/faq";

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

  const faqs = [
    {
      'id': 0,
      'query': 'Who can apply for the hackathon?',
      'ans': 'Participants can take part only as a team. A team must comprise of at least 2 members and at.',
    },
    {
      'id': 1,
      'query': 'What can be the size of Team ?',
      'ans': 'A team can consist of 1-4 members.',
    },
    {
      'id': 2,
      'query': 'Are there any registration charges ?',
      'ans': 'Nope! None at all.',
    },
    {
      'id': 3,
      'query': 'Do we get any certificate for participation ?',
      'ans': 'Yes, you do get a Certificate of Participation if your hack is submitted successfully.',
    },
  ];

  return (
    <div
      className="relative bg-black w-full h-screen overflow-y-auto text-center text-2xl text-white font-space-grotesk"
      id="container"
    >
      {/* <Image className="absolute top-[0px] left-[0px]" alt="" src={bgImage} /> */}
      <div className="absolute top-0 left-0 w-full h-screen">
        <div className="content mb-[-0px]">
          <Header />
          <div className="w-full h-full flex flex-col items-center">
            <div className="contact-us my-5 flex flex-col justify-center items-center bg-[#1C172F] rounded-3xl mx-auto w-[100%] md:w-[100%] sm:w-[100%]">
              <h3 className="font-noto-sans text-5xl md:text-xl sm:text-xl">
                ORGANIZERS
              </h3>
              <Carousel images={images} />
            </div>
            <div className="contact-us my-5 py-6 bg-[#1C172F] rounded-3xl w-[75%] md:w-[100%] sm:w-[100%]">
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
            <div className="my-10 py-6 bg-[#1C172F] rounded-3xl w-[75%] md:w-[100%] sm:w-[100%] px-5">
              <h3 className="font-noto-sans text-5xl md:text-xl sm:text-xl">
                FREQUENTLY ASKED{" "}
                <span className="text-[#2BFF08]">QUESTIONS</span>
              </h3>
              <div className="w-[75%] md:my-5 sm:my-5 my-10 mx-auto md:w-[100%] sm:w-[100%] flex flex-col justify-start items-stretch text-start px-10 md:px-1 sm:px-1 md:text-center sm:text-center">
                {faqs.map((faq) => {
                  return <Faq query={faq.query} ans={faq.ans} key={faq.id} id={faq.id}/>
                })}
                {/* <p className="text-lg md:text-[20px] sm:text-[20px]">
                  Do you have a particular theme for the Hackathon ?
                </p>
                <p className="text-lg md:text-[20px] sm:text-[20px]">
                What can be the size of Team ?
                </p>
                <p className="text-lg md:text-[20px] sm:text-[20px]">
                What do I need to do to participate?
                </p>
                <p className="text-lg md:text-[20px] sm:text-[20px]">
                Are there any registration charges ?
                </p>
                <p className="text-lg md:text-[20px] sm:text-[20px]">
                Do we get any certificate for participation ? 
                </p> */}
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
