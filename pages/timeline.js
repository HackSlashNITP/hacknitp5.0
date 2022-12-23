import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import CounntDown from "../components/counnt-down";
import TimelineStyleBox1 from "../components/timeline-style-box1";
import TimelineStyleBox2 from "../components/timeline-style-box2";

const Timeline = () => {
  const router = useRouter();

  const onRulesTextClick = useCallback(() => {
    router.push("/rules");
  }, [router]);

  const onSponsorsTextClick = useCallback(() => {
    // Please sync " Sponsors_Check" to the project
  }, []);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onHacknitp5Click = useCallback(() => {
    router.push("/homepage");
  }, [router]);

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
      className="relative bg-black w-full h-[2906px] overflow-hidden text-center text-xs text-white font-space-grotesk"
      id="Tcontainer"
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1280px] h-[2906px] object-cover"
        alt=""
        src="../anirudhxu4pz7gi9jyunsplash-12@2x.png"
      />
      <div className="absolute top-[22.2px] left-[39px] w-[1205px] h-[75.68px]">
        <b className="absolute top-[15.8px] left-[407px] inline-block">
          About Us
        </b>
        <b className="absolute top-[15.8px] left-[536px] inline-block">
          Timeline
        </b>
        <b
          className="absolute top-[15.8px] left-[659px] inline-block cursor-pointer"
          onClick={onRulesTextClick}
        >
          Rules
        </b>
        <b
          className="absolute top-[16.8px] left-[754px] inline-block cursor-pointer"
          onClick={onSponsorsTextClick}
        >
          Sponsors
        </b>
        <b
          className="absolute top-[15.8px] left-[882px] inline-block cursor-pointer"
          onClick={onContactUsTextClick}
        >
          Contact Us
        </b>
        <img
          className="absolute top-[4.8px] left-[1025px] rounded-[15px] w-[180px] h-[50px]"
          alt=""
          src="../rectangle-39715.svg"
        />
        <b className="absolute top-[17.8px] left-[1044px] text-2xs inline-block text-black">
          Join Our Discord
        </b>
        <img
          className="absolute h-full w-[19.74%] top-[0%] right-[80.26%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full cursor-pointer"
          alt=""
          src="../hacknitp52.svg"
          onClick={onHacknitp5Click}
        />
      </div>
      <CounntDown />
      <div
        className="absolute top-[calc(50%_-_1323px)] left-[calc(50%_-_640px)] w-[1280px] h-[2776px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-4xl font-poppins"
        id="timeline"
        data-animate-on-scroll
      >
        <img
          className="absolute top-[calc(50%_-_893.5px)] left-[calc(50%_-_501px)] w-[1008px] h-[851.5px]"
          alt=""
          src="../line-1.svg"
        />
        <img
          className="absolute top-[calc(50%_+_674.5px)] left-[calc(50%_-_501px)] w-[1008px] h-[713.5px]"
          alt=""
          src="../line-3.svg"
        />
        <img
          className="absolute top-[calc(50%_-_42px)] left-[calc(50%_-_501px)] w-[1008px] h-[718.5px]"
          alt=""
          src="../line-2.svg"
        />
        <div
          className="absolute top-[calc(50%_-_753px)] left-[calc(50%_-_373px)] rounded-[45px] bg-gray-1100 w-[790px] h-[182px]"
          id="box1"
        />
        <div className="absolute top-[0px] left-[0px] w-[1280px] h-[2776px] text-base font-space-grotesk">
          <div
            className="absolute top-[0px] left-[0px] w-[1280px] h-[2776px] opacity-[0]"
            id="container"
          >
            <div className="absolute top-[2559.98px] left-[0px] w-[1280px] h-[216.02px] text-sm">
              <div className="absolute top-[0px] left-[0px] bg-gray-1300 w-[1280px] h-[216.02px]" />
              <div className="absolute top-[132.4px] left-[33.49px] border-t-[1px_solid_#545454] box-border w-[1176.4px] h-[1px]" />
              <b className="absolute top-[64.61px] left-[430px] inline-block w-[250px] h-[30.28px]">
                Terms and conditions
              </b>
              <b className="absolute top-[64.61px] left-[721px] inline-block w-[190px] h-[30.28px]">
                Code of conduct
              </b>
              <img
                className="absolute h-[40.55%] w-[21.31%] top-[24.92%] right-[75.56%] bottom-[34.53%] left-[3.13%] max-w-full overflow-hidden max-h-full"
                alt=""
              />
              <div className="absolute top-[52.49px] left-[959px] rounded-[15px] bg-green-100 w-[269px] h-[57.54px]" />
              <b className="absolute top-[65.61px] left-[959px] inline-block text-black w-[269px] h-[27.26px]">
                Join our Discord
              </b>
              <b className="absolute top-[156.47px] left-[38px] text-base inline-block w-[469px] h-[33.31px]">
                ©2023 HACKSLASH | All rights reserved
              </b>
              <img
                className="absolute top-[146.37px] left-[747px] w-[54px] h-[53.5px]"
                alt=""
              />
              <img
                className="absolute top-[146.37px] left-[826px] w-[54px] h-[53.5px]"
                alt=""
              />
              <img
                className="absolute top-[146.37px] left-[906px] w-[53px] h-[53.5px]"
                alt=""
              />
              <img
                className="absolute top-[146.37px] left-[985px] w-[53px] h-[53.5px]"
                alt=""
              />
              <img
                className="absolute top-[146.37px] left-[1065px] w-[53px] h-[53.5px]"
                alt=""
              />
              <img
                className="absolute bottom-[6.06px] left-[763px] w-[22px] h-[21.2px] overflow-hidden"
                alt=""
              />
              <img
                className="absolute bottom-[6.06px] left-[840px] w-[25px] h-[21.2px] overflow-hidden"
                alt=""
              />
              <img
                className="absolute top-[162.52px] left-[922px] w-[23px] h-[22.21px]"
                alt=""
              />
              <img
                className="absolute bottom-[4.04px] left-[1079px] w-[26px] h-[25.24px] overflow-hidden"
                alt=""
              />
              <img
                className="absolute bottom-[8.08px] left-[1003px] w-[18px] h-[18.17px] overflow-hidden"
                alt=""
              />
            </div>
            <div className="absolute top-[859.05px] left-[0px] rounded-[45px] bg-gray-1100 w-[1100px] h-[733.87px]" />
            <b className="absolute top-[800.5px] left-[483px] text-6xl inline-block font-noto-sans w-[314px] h-[73.69px]">
              CONTACT US
            </b>
            <b className="absolute top-[877.22px] left-[408px] inline-block text-gray-800 w-[465px] h-[41.39px]">
              For any query contact us
            </b>
            <b className="absolute top-[1021.57px] left-[354px] inline-block text-green-100 w-[185px] h-[32.3px]">
              Fill the details
            </b>
            <div className="absolute top-[1076.08px] left-[359.88px] w-[428.55px] h-[49.06px] text-2xs text-gray-400 font-poppins">
              <div className="absolute top-[0px] left-[0px] w-[428.55px] h-[49.06px]">
                <div className="absolute top-[0px] left-[0px] rounded-[15px] [border:2px_solid_#c0c0c0] box-border w-[428.55px] h-[49.06px]" />
                <div className="absolute top-[12.49px] left-[16.79px] font-semibold inline-block w-[120.16px] h-[24.08px]">
                  Full name
                </div>
              </div>
            </div>
            <div className="absolute top-[1231.28px] left-[359.88px] w-[428.55px] h-[49.06px] text-2xs text-gray-400 font-poppins">
              <div className="absolute top-[0px] left-[0px] w-[428.55px] h-[49.06px]">
                <div className="absolute top-[0px] left-[0px] rounded-[15px] [border:2px_solid_#c0c0c0] box-border w-[428.55px] h-[49.06px]" />
                <div className="absolute top-[10.7px] left-[16.79px] font-semibold inline-block w-[120.16px] h-[24.08px]">
                  Mobile no.
                </div>
              </div>
            </div>
            <div className="absolute top-[1307.99px] left-[359px] w-[429.44px] h-[163.23px] text-2xs text-gray-400 font-poppins">
              <div className="absolute top-[0px] left-[0px] w-[429.44px] h-[163.23px]">
                <div className="absolute top-[0px] left-[0px] rounded-[15px] [border:2px_solid_#c0c0c0] box-border w-[429.44px] h-[163.23px]" />
                <div className="absolute top-[18.73px] left-[15.02px] font-semibold inline-block w-[212.07px] h-[80.28px]">
                  Enter your message..
                </div>
              </div>
            </div>
            <div className="absolute top-[1152.79px] left-[359.88px] w-[428.55px] h-[49.06px] text-2xs text-gray-400 font-poppins">
              <div className="absolute top-[0px] left-[0px] w-[428.55px] h-[49.06px]">
                <div className="absolute top-[0px] left-[0px] rounded-[15px] [border:2px_solid_#c0c0c0] box-border w-[428.55px] h-[49.06px]" />
                <div className="absolute top-[12.49px] left-[6.19px] font-semibold inline-block w-[120.16px] h-[24.08px]">
                  E-mail
                </div>
              </div>
            </div>
            <div className="absolute top-[1654.5px] left-[90px] rounded-[45px] bg-gray-1100 w-[1100px] h-[839.87px]" />
            <div className="absolute top-[1499.04px] left-[360px] rounded-[15px] bg-green-100 w-[165px] h-[47.44px]" />
            <div className="absolute top-[1510.14px] left-[416px] text-2xs font-semibold font-poppins text-black inline-block w-[56px] h-[25.24px]">
              Send
            </div>
            <div className="absolute top-[2273.87px] left-[139.5px] border-t-[1px_solid_#545454] box-border w-[1001px] h-[1px]" />
            <b className="absolute top-[1693.86px] left-[252px] text-6xl inline-block font-noto-sans w-[816px] h-[67.63px]">
              <span>{`FREQUENTLY ASKED `}</span>
              <span className="text-green-100">QUESTIONS</span>
            </b>
            <div className="absolute top-[1878.59px] left-[209px] font-poppins text-gray-200 text-left inline-block w-[681px] h-[74.7px]">{`Participants can take part only as a team. A team must comprise of at least 2 members and at `}</div>
            <div className="absolute top-[1810.96px] left-[191px] text-2xl font-medium text-left inline-block w-[642px] h-[47.44px]">
              Who can apply for the hackathon?
            </div>
            <div className="absolute top-[1974.49px] left-[191px] text-2xl font-medium text-left inline-block w-[642px] h-[47.44px]">
              Who can apply for the hackathon?
            </div>
            <div className="absolute top-[2042.13px] left-[191px] text-2xl font-medium text-left inline-block w-[642px] h-[48.45px]">
              Who can apply for the hackathon?
            </div>
            <div className="absolute top-[2110.77px] left-[191px] text-2xl font-medium text-left inline-block w-[642px] h-[49.46px]">
              Who can apply for the hackathon?
            </div>
            <div className="absolute top-[2180.42px] left-[191px] text-2xl font-medium text-left inline-block w-[642px] h-[47.44px]">
              Who can apply for the hackathon?
            </div>
            <div className="absolute top-[1831.15px] left-[1065px] bg-white w-[24px] h-[3.03px]" />
            <div className="absolute top-[1985.6px] left-[1065px] w-[24.48px] h-[24.72px]">
              <div className="absolute top-[10.81px] left-[0px] bg-gray-500 w-[24.48px] h-[3.09px]" />
              <div className="absolute top-[24.72px] left-[10.71px] bg-gray-500 w-[24.72px] h-[3.06px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            </div>
            <div className="absolute top-[2053.72px] left-[1065px] w-[24.48px] h-[24.72px]">
              <div className="absolute top-[10.81px] left-[0px] bg-gray-500 w-[24.48px] h-[3.09px]" />
              <div className="absolute top-[24.72px] left-[10.71px] bg-gray-500 w-[24.72px] h-[3.06px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            </div>
            <div className="absolute bottom-[602.15px] left-[1065px] w-[24.48px] h-[24.72px]">
              <div className="absolute bottom-[10.81px] left-[0px] bg-gray-500 w-[24.48px] h-[3.09px]" />
              <div className="absolute bottom-[-3.06px] left-[10.71px] bg-gray-500 w-[24.72px] h-[3.06px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            </div>
            <div className="absolute bottom-[534.03px] left-[1065px] w-[24.48px] h-[24.72px]">
              <div className="absolute bottom-[10.81px] left-[0px] bg-gray-500 w-[24.48px] h-[3.09px]" />
              <div className="absolute bottom-[-3.06px] left-[10.71px] bg-gray-500 w-[24.72px] h-[3.06px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
            </div>
            <div className="absolute top-[2379.28px] left-[492px] rounded-[15px] bg-green-100 w-[296px] h-[60.57px]" />
            <b className="absolute top-[2394.43px] left-[558px] inline-block text-black w-[164px] h-[32.3px]">
              Register Now
            </b>
            <b className="absolute top-[2304.58px] left-[274px] text-4xl inline-block text-green-200 w-[733px] h-[48.45px]">
              What are you waiting for? Register now.
            </b>
            <img
              className="absolute h-[12.56%] w-[29.91%] top-[40.95%] right-[0.08%] bottom-[46.48%] left-[70.01%] max-w-full overflow-hidden max-h-full"
              alt=""
            />
            <div className="absolute top-[67.63px] left-[0px] rounded-[45px] bg-gray-1100 w-[1100px] h-[720.75px]" />
            <div className="absolute top-[252.36px] left-[180px] w-[1100px] h-[429.02px] text-black">
              <div className="absolute top-[4.04px] left-[0px] w-[1093px] h-[424.98px] overflow-x-auto">
                <div className="absolute top-[0px] left-[0px] bg-gray-1400 w-[252px] h-[421px] overflow-hidden">
                  <b className="absolute top-[274px] left-[0px] flex items-center justify-center w-[251px]">
                    Shivam Jha
                  </b>
                  <div className="absolute top-[308px] left-[1px] text-2xs font-medium flex items-center justify-center w-[251px]">
                    Community Lead
                  </div>
                  <img
                    className="absolute top-[89px] left-[41px] w-[170px] h-[170px] object-cover"
                    alt=""
                    src="../image-1@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[281px] bg-gray-1400 w-[252px] h-[421px] overflow-hidden">
                  <b className="absolute top-[274px] left-[0px] flex items-center justify-center w-[251px]">
                    Shivam Jha
                  </b>
                  <div className="absolute top-[308px] left-[1px] text-2xs font-medium flex items-center justify-center w-[251px]">
                    Community Lead
                  </div>
                  <img
                    className="absolute top-[89px] left-[41px] w-[170px] h-[170px] object-cover"
                    alt=""
                    src="../image-1@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[562px] bg-gray-1400 w-[253px] h-[421px] overflow-hidden">
                  <b className="absolute top-[274px] left-[1px] flex items-center justify-center w-[251px]">
                    Shivam Jha
                  </b>
                  <div className="absolute top-[308px] left-[2px] text-2xs font-medium flex items-center justify-center w-[251px]">
                    Community Lead
                  </div>
                  <img
                    className="absolute top-[89px] left-[42px] w-[170px] h-[170px] object-cover"
                    alt=""
                    src="../image-1@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[843px] bg-gray-1400 w-[253px] h-[421px] overflow-hidden">
                  <b className="absolute top-[274px] left-[1px] flex items-center justify-center w-[251px]">
                    Shivam Jha
                  </b>
                  <div className="absolute top-[308px] left-[2px] text-2xs font-medium flex items-center justify-center w-[251px]">
                    Community Lead
                  </div>
                  <img
                    className="absolute top-[89px] left-[42px] w-[170px] h-[170px] object-cover"
                    alt=""
                    src="../image-1@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[1124px] bg-gray-1400 w-[253px] h-[421px] overflow-hidden">
                  <b className="absolute top-[274px] left-[1px] flex items-center justify-center w-[251px]">
                    Shivam Jha
                  </b>
                  <div className="absolute top-[308px] left-[2px] text-2xs font-medium flex items-center justify-center w-[251px]">
                    Community Lead
                  </div>
                  <img
                    className="absolute top-[89px] left-[42px] w-[170px] h-[170px] object-cover"
                    alt=""
                    src="../image-1@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[1405px] bg-gray-1400 w-[253px] h-[421px] overflow-hidden">
                  <b className="absolute top-[274px] left-[1px] flex items-center justify-center w-[251px]">
                    Shivam Jha
                  </b>
                  <div className="absolute top-[308px] left-[2px] text-2xs font-medium flex items-center justify-center w-[251px]">
                    Community Lead
                  </div>
                  <img
                    className="absolute top-[89px] left-[42px] w-[170px] h-[170px] object-cover"
                    alt=""
                    src="../image-1@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[1687px] bg-gray-1400 w-[252px] h-[421px] overflow-hidden">
                  <b className="absolute top-[274px] left-[0px] flex items-center justify-center w-[251px]">
                    Shivam Jha
                  </b>
                  <div className="absolute top-[308px] left-[1px] text-2xs font-medium flex items-center justify-center w-[251px]">
                    Community Lead
                  </div>
                  <img
                    className="absolute top-[89px] left-[41px] w-[170px] h-[170px] object-cover"
                    alt=""
                    src="../image-1@2x.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[1968px] bg-gray-1400 w-[252px] h-[421px] overflow-hidden">
                  <b className="absolute top-[274px] left-[0px] flex items-center justify-center w-[251px]">
                    Shivam Jha
                  </b>
                  <div className="absolute top-[308px] left-[1px] text-2xs font-medium flex items-center justify-center w-[251px]">
                    Community Lead
                  </div>
                  <img
                    className="absolute top-[89px] left-[41px] w-[170px] h-[170px] object-cover"
                    alt=""
                    src="../image-1@2x.png"
                  />
                </div>
              </div>
              <img
                className="absolute top-[-86.81px] left-[-40px] w-[1180px] h-[153.44px]"
                alt=""
              />
              <img
                className="absolute top-[367.44px] left-[-40px] w-[1180px] h-[153.44px]"
                alt=""
              />
            </div>
            <b className="absolute top-[0px] left-[358px] text-6xl inline-block font-noto-sans w-[563px] h-[65.61px]">
              ORGANIZERS
            </b>
          </div>
          <TimelineStyleBox1 />
          <TimelineStyleBox2 />
        </div>
        <div
          className="absolute top-[calc(50%_-_403px)] left-[calc(50%_-_382px)] rounded-[45px] bg-gray-1100 w-[790px] h-[193px]"
          id="box2"
        />
        <div
          className="absolute top-[calc(50%_-_42px)] left-[calc(50%_-_382px)] rounded-[45px] bg-gray-1100 w-[790px] h-[193px]"
          id="box3"
        />
        <div
          className="absolute top-[calc(50%_+_1035px)] left-[calc(50%_-_382px)] rounded-[45px] bg-gray-1100 w-[790px] h-[193px]"
          id="box6"
        />
        <img
          className="absolute top-[calc(50%_-_692px)] left-[calc(50%_-_521px)] w-[60px] h-[60px]"
          alt=""
          src="../ellipse-2.svg"
        />
        <img
          className="absolute top-[calc(50%_-_916px)] left-[calc(50%_-_521px)] w-[60px] h-[60px]"
          alt=""
          src="../ellipse-2.svg"
        />
        <img
          className="absolute top-[calc(50%_+_23px)] left-[calc(50%_-_521px)] w-[60px] h-[60px]"
          alt=""
          src="../ellipse-2.svg"
        />
        <img
          className="absolute top-[calc(50%_+_746px)] left-[calc(50%_-_521px)] w-[60px] h-[60px]"
          alt=""
          src="../ellipse-2.svg"
        />
        <img
          className="absolute top-[calc(50%_-_338px)] left-[calc(50%_+_467px)] w-[60px] h-[60px]"
          alt=""
          src="../ellipse-2.svg"
        />
        <img
          className="absolute top-[calc(50%_+_1102px)] left-[calc(50%_+_467px)] w-[60px] h-[60px]"
          alt=""
          src="../ellipse-2.svg"
        />
        <img
          className="absolute top-[calc(50%_+_384px)] left-[calc(50%_+_467px)] w-[60px] h-[60px]"
          alt=""
          src="../ellipse-2.svg"
        />
        <img
          className="absolute top-[calc(50%_-_695px)] left-[calc(50%_-_411.84px)] w-[38.84px] h-[56px]"
          alt=""
          src="../polygon-6.svg"
        />
        <img
          className="absolute top-[calc(50%_+_27px)] left-[calc(50%_-_420.84px)] w-[38.84px] h-[56px]"
          alt=""
          src="../polygon-6.svg"
        />
        <img
          className="absolute top-[calc(50%_-_334px)] left-[calc(50%_+_408px)] w-[38.84px] h-[56px]"
          alt=""
          src="../polygon-8.svg"
        />
        <h4
          className="m-[0] absolute top-[calc(50%_-_722px)] left-[calc(50%_-_311px)] text-[inherit] font-semibold font-inherit text-green-100 inline-block"
          id="title1"
        >
          1 January, 2021
        </h4>
        <h4
          className="m-[0] absolute top-[calc(50%_-_378px)] left-[calc(50%_+_84px)] text-[inherit] font-semibold font-inherit text-green-100 inline-block"
          id="text2"
        >
          3 January, 2021
        </h4>
        <p
          className="m-[0] absolute top-[calc(50%_-_662px)] left-[calc(50%_-_311px)] text-xl font-medium text-gray-300 inline-block"
          id="t1"
        >
          Registration for the hackathon starts
        </p>
        <p
          className="m-[0] absolute top-[calc(50%_-_301px)] left-[calc(50%_-_168px)] text-xl font-medium text-gray-300 inline-block"
          id="t2"
        >
          Registration for the hackathon ends
        </p>
        <h3
          className="m-[0] absolute top-[calc(50%_-_913px)] left-[calc(50%_-_271px)] text-6xl font-bold font-noto-sans inline-block w-[542px] h-[54px]"
          id="heading"
        >
          EVENT SCHEDULE
        </h3>
      </div>
    </div>
  );
};

export default Timeline;
