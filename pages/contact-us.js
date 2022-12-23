import { useEffect } from "react";
import { Button } from "@mui/material";
import Header1 from "../components/header1";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import Footer from "../components/footer";
import Form from "../components/form";

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

  return (
    <div
      className="relative bg-black w-full h-[2880px] overflow-y-auto text-center text-2xl text-white font-space-grotesk"
      id="container"
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1280px] h-[2880px] object-cover"
        alt=""
        src="../anirudhxu4pz7gi9jyunsplash-13@2x.png"
      />
      <Header1 />
      <div className="absolute top-[calc(50%_-_1241px)] left-[calc(50%_-_540px)] w-[1110px] h-[2416px]">
        <div
          className="absolute top-[calc(50%_-_422px)] left-[calc(50%_-_554px)] rounded-[45px] bg-gray-1100 w-[1100px] h-[727px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
          id="box2"
          data-animate-on-scroll
        />
        <h3
          className="m-[0] absolute top-[811px] left-[calc(50%_-_162px)] text-6xl font-bold font-noto-sans inline-block w-[314px] h-[73px]"
          id="heading2"
        >
          CONTACT US
        </h3>
        <h5
          className="m-[0] absolute top-[887px] left-[318px] text-base font-bold font-inherit text-gray-800 inline-block w-[465px] h-[41px]"
          id="text1Box2"
        >
          For any query contact us
        </h5>
        <h4
          className="m-[0] absolute top-[928px] left-[52px] text-base font-bold font-inherit text-green-100 inline-block w-[185px] h-[32px]"
          id="text2Box2"
        >
          Fill the details
        </h4>
        <div
          className="absolute bottom-[0px] left-[calc(50%_-_545px)] rounded-[45px] bg-gray-1100 w-[1100px] h-[832px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          id="box3"
          data-animate-on-scroll
        />
        <h5
          className="m-[0] absolute top-[1429px] left-[100px] text-2xs font-semibold font-poppins text-black inline-block w-[56px] h-[25px]"
          id="send"
        >
          Send
        </h5>
        <div className="absolute top-[2185.57px] left-[49.5px] border-t-[1px_solid_#545454] box-border w-[1001px] h-[1px]" />
        <h3
          className="m-[0] absolute top-[1611px] left-[162px] text-6xl font-bold font-noto-sans inline-block w-[816px] h-[67px]"
          id="heading3"
        >
          <span>{`FREQUENTLY ASKED `}</span>
          <span className="text-green-100">QUESTIONS</span>
        </h3>
        <p
          className="m-[0] absolute top-[1794px] left-[119px] text-base font-poppins text-gray-200 text-left inline-block w-[681px] h-[74px]"
          id="freq"
        >{`Participants can take part only as a team. A team must comprise of at least 2 members and at `}</p>
        <p
          className="m-[0] absolute top-[1727px] left-[101px] font-medium text-left inline-block w-[642px] h-[47px]"
          id="freq"
        >
          Who can apply for the hackathon?
        </p>
        <p
          className="m-[0] absolute top-[1889px] left-[101px] font-medium text-left inline-block w-[642px] h-[47px]"
          id="freq"
        >
          Who can apply for the hackathon?
        </p>
        <p
          className="m-[0] absolute top-[1956px] left-[101px] font-medium text-left inline-block w-[642px] h-[48px]"
          id="freq"
        >
          Who can apply for the hackathon?
        </p>
        <p
          className="m-[0] absolute top-[2024px] left-[101px] font-medium text-left inline-block w-[642px] h-[49px]"
          id="freq"
        >
          Who can apply for the hackathon?
        </p>
        <p
          className="m-[0] absolute top-[2093px] left-[101px] font-medium text-left inline-block w-[642px] h-[47px]"
          id="freq"
        >
          Who can apply for the hackathon?
        </p>
        <Button
          className="absolute top-[2290px] left-[calc(50%_-_153px)]"
          sx={{ width: 296 }}
          variant="contained"
          color="success"
        >
          Register Now
        </Button>
        <b className="absolute top-[2305px] left-[468px] text-base inline-block text-black w-[164px] h-[32px]">
          Register Now
        </b>
        <h5
          className="m-[0] absolute h-[calc(100%_-_2368px)] top-[2216px] left-[calc(50%_-_371px)] text-4xl font-bold font-inherit text-green-200 inline-block w-[733px]"
          id="text3Box3"
        >
          What are you waiting for? Register now.
        </h5>
        <img
          className="absolute top-[calc(50%_-_160px)] left-[calc(50%_+_53.17px)] w-[382.83px] h-[342.38px]"
          alt=""
          src="../group.svg"
        />
        <div
          className="absolute top-[calc(50%_-_1208px)] left-[calc(50%_-_555px)] rounded-[45px] bg-gray-1100 w-[1100px] h-[714px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
          id="box1"
          data-animate-on-scroll
        />
        <div
          className="absolute top-[calc(50%_-_1026px)] left-[calc(50%_-_555px)] w-[1100px] h-[425px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
          id="sub1Box1"
          data-animate-on-scroll
        >
          <div className="absolute top-[calc(50%_-_208.5px)] left-[calc(50%_-_550px)] w-[1093px] h-[421px] overflow-x-auto">
            <iframe
              className="[border:none] absolute top-[0px] left-[0px] bg-gray-1400 w-[252px] h-[421px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            />
            <FrameComponent2 />
            <iframe
              className="[border:none] absolute top-[0px] left-[562px] bg-gray-1400 w-[253px] h-[421px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
              data-animate-on-scroll
            />
            <FrameComponent3 />
          </div>
          <img
            className="absolute top-[calc(50%_-_212.5px)] left-[calc(50%_-_550px)] w-[1180px] h-[152px]"
            alt=""
            src="../ellipse-116.svg"
          />
          <img
            className="absolute top-[calc(50%_+_151.5px)] left-[calc(50%_-_550px)] w-[1180px] h-[152px]"
            alt=""
            src="../ellipse-117.svg"
          />
        </div>
        <h3
          className="m-[0] absolute top-[45px] left-[calc(50%_-_287px)] text-6xl font-bold font-noto-sans inline-block w-[563px] h-[65px]"
          id="heading1"
        >
          ORGANIZERS
        </h3>
      </div>
      <div
        className="absolute top-[2640px] left-[-1px] flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1]"
        id="footer"
        data-animate-on-scroll
      >
        <footer
          className="flex flex-col items-start justify-start [&.animate]:animate-[3s_ease_0s_1_normal_forwards_roll-in-left] opacity-[0] lg:flex-col lg:pl-[1px] lg:pr-[0px] lg:pb-[5px] lg:box-border md:flex-row"
          id="footer"
          data-animate-on-scroll
        >
          <footer
            className="relative w-[1280px] h-[236px] shrink-0 text-center text-sm text-beige font-space-grotesk"
            id="foot"
          >
            <Footer />
            <img
              className="absolute top-[142.58px] left-[34px] w-[1175.39px] h-[7.14px]"
              alt=""
              src="../line-4.svg"
            />
            <h5
              className="m-[0] absolute top-[49px] left-[430px] text-[inherit] font-bold font-inherit inline-block w-[250px] h-[30px]"
              id="footertxt2"
            >
              Terms and conditions
            </h5>
            <h5
              className="m-[0] absolute top-[49px] left-[721px] text-[inherit] font-bold font-inherit inline-block w-[190px] h-[30px]"
              id="footertxt1"
            >
              Code of conduct
            </h5>
            <img
              className="absolute h-[36.44%] w-[21.31%] top-[3.81%] right-[75.56%] bottom-[59.75%] left-[3.13%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../hacknitp54.svg"
            />
            <Button
              className="absolute top-[calc(50%_-_81px)] left-[calc(50%_+_319px)]"
              sx={{ width: 269 }}
              variant="contained"
              color="success"
            >
              Join our discord
            </Button>
            <b className="absolute top-[50px] left-[959px] inline-block text-black w-[269px] h-[27px]">
              Join our Discord
            </b>
            <p
              className="m-[0] absolute top-[170px] left-[38px] text-base font-bold text-white inline-block w-[469px] h-[33px]"
              id="footertxt"
            >
              ©2023 HACKSLASH | All rights reserved
            </p>
            <img
              className="absolute top-[160px] left-[747px] w-[54px] h-[53px]"
              alt=""
              src="../ellipse-14.svg"
            />
            <img
              className="absolute top-[160px] left-[826px] w-[54px] h-[53px]"
              alt=""
              src="../ellipse-14.svg"
            />
            <img
              className="absolute top-[160px] left-[906px] w-[53px] h-[53px]"
              alt=""
              src="../ellipse-16.svg"
            />
            <img
              className="absolute top-[160px] left-[985px] w-[53px] h-[53px]"
              alt=""
              src="../ellipse-16.svg"
            />
            <img
              className="absolute top-[160px] left-[1065px] w-[53px] h-[53px]"
              alt=""
              src="../ellipse-16.svg"
            />
            <iframe
              className="[border:none] absolute bottom-[39px] left-[763px] w-[22px] h-[21px] overflow-hidden"
              src={`https://fontawesome.com/icons/twitter?s=&f=brands`}
            />
            <iframe
              className="[border:none] absolute bottom-[39px] left-[840px] w-[25px] h-[21px] overflow-hidden"
              src={`https://fontawesome.com/icons/twitter?s=&f=brands`}
            />
            <iframe
              className="[border:none] absolute top-[176px] left-[922px] w-[23px] h-[22px]"
              src={`https://fontawesome.com/icons/twitter?s=&f=brands`}
            />
            <iframe
              className="[border:none] absolute bottom-[37px] left-[1079px] w-[26px] h-[25px] overflow-hidden"
              src={`https://fontawesome.com/icons/twitter?s=&f=brands`}
            />
            <iframe
              className="[border:none] absolute bottom-[41px] left-[1003px] w-[18px] h-[18px] overflow-hidden"
              src={`https://fontawesome.com/icons/twitter?s=&f=brands`}
            />
          </footer>
        </footer>
      </div>
      <Form />
    </div>
  );
};

export default ContactUs;
