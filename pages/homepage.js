import { useEffect } from "react";
import Header from "../components/header";

const Homepage = () => {
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
      className="relative bg-gray-1000 w-full h-[720px] overflow-y-auto text-center text-5xl text-white font-space-grotesk"
      id="homepage"
    >
      <img
        className="absolute top-[0px] left-[0px] w-[3823px] h-[3823px] object-cover"
        alt=""
        src="../anirudhxu4pz7gi9jyunsplash-16@2x.png"
      />
      <img
        className="absolute h-[25.65%] w-[45.77%] top-[37.22%] right-[13.84%] bottom-[37.13%] left-[40.39%] max-w-full overflow-hidden max-h-full opacity-[0]"
        alt=""
      />
      <div className="absolute top-[502px] left-[489px] text-2xl font-medium inline-block w-[642px] h-[48px] opacity-[0]">{`Innovate Far & Beyond`}</div>
      <Header />
      <h6
        className="m-[0] absolute top-[403px] left-[131px] text-xs font-normal font-noto-sans text-left inline-block w-[555px] h-[225px] [-webkit-text-stroke:3px_rgba(255,_255,_255,_0)] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
        id="texr"
        data-animate-on-scroll
      >
        The hack is only a small part of the competition. The real spirit lies
        in building your network in the growing tech community and collaborating
        with some of the finest minds of the nation. Just remember, taking the
        Hackathons too seriously defeats the purpose. Save the seriousness for
        pitching to investors. Keeping an open mind will open new doors, help
        build new relationships and acquire new skills.This is hackNITP.
      </h6>
      <img
        className="absolute h-[13.61%] w-[30.47%] top-[28.06%] right-[60.23%] bottom-[58.33%] left-[9.3%] max-w-full overflow-hidden max-h-full [&.animate]:animate-[3s_ease_0s_1_normal_forwards_roll-in-left] opacity-[0]"
        alt=""
        src="../group-1303.svg"
        data-animate-on-scroll
      />
      <h3
        className="m-[0] absolute top-[321px] left-[119px] text-lg font-bold font-noto-sans text-green-100 inline-block w-[477px] h-[30px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
        id="date"
        data-animate-on-scroll
      >
        December 20,2022 - February 19,2023
      </h3>
      <div className="absolute top-[242px] left-[704px] w-[497px] h-[189px] opacity-[0] text-2xl">
        <div className="absolute top-[0px] left-[0px] rounded-[25px] bg-gray-900 w-[497px] h-[189px]" />
        <b className="absolute top-[10px] left-[75px] text-lg inline-block font-noto-sans w-[346px] h-[33px]">
          EVENT STARTS IN
        </b>
        <div className="absolute top-[64px] left-[38px] rounded-[12px] bg-gray-700 w-[60px] h-[60px]" />
        <div className="absolute top-[64px] left-[158px] rounded-[12px] bg-gray-700 w-[60px] h-[60px]" />
        <div className="absolute top-[64px] left-[278px] rounded-[12px] bg-gray-700 w-[60px] h-[60px]" />
        <div className="absolute top-[64px] left-[398px] rounded-[12px] bg-gray-700 w-[60px] h-[60px]" />
        <b className="absolute top-[64px] left-[38px] flex text-black items-center justify-center w-[60px] h-[60px]">
          69
        </b>
        <b className="absolute top-[64px] left-[158px] flex text-black items-center justify-center w-[60px] h-[60px]">
          69
        </b>
        <b className="absolute top-[64px] left-[278px] flex text-black items-center justify-center w-[60px] h-[60px]">
          69
        </b>
        <b className="absolute top-[64px] left-[398px] flex text-black items-center justify-center w-[60px] h-[60px]">
          69
        </b>
        <b className="absolute top-[128px] left-[38px] text-3xs flex items-center justify-center w-[60px] h-[19px]">
          Days
        </b>
        <b className="absolute top-[128px] left-[158px] text-3xs flex items-center justify-center w-[60px] h-[19px]">
          Hours
        </b>
        <b className="absolute top-[128px] left-[278px] text-3xs flex items-center justify-center w-[60px] h-[19px]">
          Minutes
        </b>
        <b className="absolute top-[128px] left-[398px] text-3xs flex items-center justify-center w-[60px] h-[19px]">
          Seconds
        </b>
      </div>
      <div className="absolute top-[741px] left-[116px] w-[1048px] h-[2361px] opacity-[0] text-4xl text-green-100 font-poppins">
        <img
          className="absolute top-[931px] left-[30px] w-[988px] h-[912.5px]"
          alt=""
        />
        <img
          className="absolute top-[2361px] left-[30px] w-[988px] h-[711px]"
          alt=""
        />
        <img
          className="absolute top-[1649.5px] left-[30px] w-[988px] h-[718.5px]"
          alt=""
        />
        <div className="absolute top-[220px] left-[148px] rounded-[45px] bg-gray-1100 w-[790px] h-[182px]" />
        <div className="absolute top-[570px] left-[139px] rounded-[45px] bg-gray-1100 w-[790px] h-[193px]" />
        <div className="absolute top-[931px] left-[139px] rounded-[45px] bg-gray-1100 w-[790px] h-[193px]" />
        <div className="absolute top-[1290px] left-[139px] rounded-[45px] bg-gray-1100 w-[790px] h-[193px]" />
        <div className="absolute top-[1649px] left-[139px] rounded-[45px] bg-gray-1100 w-[790px] h-[193px]" />
        <div className="absolute top-[2008px] left-[139px] rounded-[45px] bg-gray-1100 w-[790px] h-[193px]" />
        <img
          className="absolute top-[281px] left-[0px] w-[60px] h-[60px]"
          alt=""
        />
        <img
          className="absolute top-[0px] left-[0px] w-[60px] h-[60px]"
          alt=""
        />
        <img
          className="absolute top-[996px] left-[0px] w-[60px] h-[60px]"
          alt=""
        />
        <img
          className="absolute top-[1719px] left-[0px] w-[60px] h-[60px]"
          alt=""
        />
        <img
          className="absolute top-[635px] left-[988px] w-[60px] h-[60px]"
          alt=""
        />
        <img
          className="absolute top-[2075px] left-[988px] w-[60px] h-[60px]"
          alt=""
        />
        <img
          className="absolute top-[1357px] left-[988px] w-[60px] h-[60px]"
          alt=""
        />
        <img
          className="absolute top-[334px] left-[105px] w-[56px] h-[43px]"
          alt=""
        />
        <img
          className="absolute top-[1056px] left-[96px] w-[56px] h-[43px]"
          alt=""
        />
        <img
          className="absolute top-[1775px] left-[96px] w-[56px] h-[43px]"
          alt=""
        />
        <img
          className="absolute top-[639px] left-[972px] w-[56px] h-[43px]"
          alt=""
        />
        <img
          className="absolute top-[1357px] left-[972px] w-[56px] h-[43px]"
          alt=""
        />
        <div className="absolute top-[251px] left-[210px] font-semibold inline-block">
          1 January, 2021
        </div>
        <div className="absolute top-[595px] left-[605px] font-semibold inline-block">
          3 January, 2021
        </div>
        <div className="absolute top-[311px] left-[210px] text-xl font-medium text-gray-300 inline-block">
          Registration for the hackathon starts
        </div>
        <div className="absolute top-[672px] left-[353px] text-xl font-medium text-gray-300 inline-block">
          Registration for the hackathon ends
        </div>
        <b className="absolute top-[60px] left-[253px] text-6xl inline-block font-noto-sans text-white w-[542px] h-[54px]">
          EVENT SCHEDULE
        </b>
      </div>
      <div className="absolute top-[79px] left-[0px] w-[1280px] h-[1049px] text-left text-xs text-gray-100 font-noto-sans">
        <div className="absolute top-[399px] left-[706px] rounded-[25px] bg-gray-1100 w-[574px] h-[180px] opacity-[0]" />
        <div className="absolute top-[419px] left-[353px] tracking-[0.02em] leading-[28px] inline-block w-[496px] h-[141px] opacity-[0]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
          <p className="m-[0]">&nbsp;</p>
        </div>
        <div className="absolute top-[165px] left-[0px] rounded-[25px] bg-gray-1100 w-[589px] h-[180px] opacity-[0]" />
        <div className="absolute top-[185px] left-[347px] tracking-[0.02em] leading-[28px] inline-block w-[509px] h-[141px] opacity-[0]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
          <p className="m-[0]">&nbsp;</p>
        </div>
        <div className="absolute top-[869px] left-[706px] rounded-[25px] bg-gray-1100 w-[574px] h-[180px] opacity-[0]" />
        <div className="absolute top-[889px] left-[353px] tracking-[0.02em] leading-[28px] inline-block w-[496px] h-[141px] opacity-[0]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
          <p className="m-[0]">&nbsp;</p>
        </div>
        <div className="absolute top-[634px] left-[0px] rounded-[25px] bg-gray-1100 w-[589px] h-[180px] opacity-[0]" />
        <div className="absolute top-[654px] left-[347px] tracking-[0.02em] leading-[28px] inline-block w-[509px] h-[141px] opacity-[0]">
          <p className="[margin-block-start:0] [margin-block-end:0px]">{`National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. `}</p>
          <p className="m-[0]">&nbsp;</p>
        </div>
        <b className="absolute top-[0px] left-[472px] text-6xl inline-block text-white text-center w-[336px] h-[54px] opacity-[0]">
          ABOUT US
        </b>
      </div>
      <div className="absolute top-[113px] left-[-590px] w-[2480px] h-[2703px] text-left text-[inherit] font-inherit">
        <div className="absolute top-[1831.11px] left-[600px] w-[1280px] h-[871.89px] opacity-[0]">
          <div className="absolute top-[86.89px] left-[250px] rounded-[43px] bg-gray-1100 w-[1030px] h-[785px]" />
          <div className="absolute top-[721.89px] left-[0px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[33px]">
              For top performing teams, exclusive t-shirts and swags will be
              provided*.
            </ul>
          </div>
          <div className="absolute top-[787.89px] left-[0px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[33px]">
              For top performing teams, exclusive t-shirts and swags will be
              provided*.
            </ul>
          </div>
          <div className="absolute top-[625.89px] left-[0px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[33px]">
              Cash prize worth 20k for best Dapp built on Celo and Cash prize
              worth 20k for best use of IPFS and/or Filecoin*.
            </ul>
          </div>
          <div className="absolute top-[529.89px] left-[0px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[33px]">
              Cash prize worth 20k for best Dapp built on Tezos. Continuity
              grant opportunity up to 5,000 USD(or equivalent) for an
              outstanding project*.
            </ul>
          </div>
          <div className="absolute top-[373.89px] left-[0px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[33px]">
              Cash prize worth 10k for best hack built on top of Ethereum and
              for teams that integrate Polygon in their hacks as well the prize
              money will be 15k along with eligibility for internship/full-time
              role interviews and a chance to land seed funding of upto 5000
              USD(or equivalent)!*.
            </ul>
          </div>
          <div className="absolute top-[279.89px] left-[0px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[32px]">
              Potential candidates get a chance to bag an internship or a full
              time job at Quidnunc’s IT division with stipend and seed funding
              upto 2Lakh*.
            </ul>
          </div>
          <div className="absolute top-[214.89px] left-[0px] flex items-center w-[863px]">
            <ul className="m-[0] pl-[32px]">
              Cash prize worth 20k sponsored by Quidnunc Infotainment and River
              Rises
            </ul>
          </div>
          <b className="absolute top-[0px] left-[382px] text-6xl inline-block font-noto-sans text-center w-[516px] h-[54.14px]">{`PRIZES & PERKS`}</b>
        </div>
        <div className="absolute top-[979px] left-[0px] w-[2480px] h-[827px] opacity-[0] text-center text-6xl font-space-grotesk">
          <div className="absolute top-[219px] left-[0px] rounded-[20px] bg-green-100 w-[600px] h-[130px]" />
          <div className="absolute top-[458px] left-[0px] rounded-[20px] bg-green-100 w-[600px] h-[130px]" />
          <div className="absolute top-[697px] left-[0px] rounded-[20px] bg-green-100 w-[600px] h-[130px]" />
          <div className="absolute top-[219px] left-[1880px] rounded-[20px] bg-green-100 w-[600px] h-[130px]" />
          <div className="absolute top-[458px] left-[1880px] rounded-[20px] bg-green-100 w-[600px] h-[130px]" />
          <div className="absolute top-[697px] left-[1880px] rounded-[20px] bg-green-100 w-[600px] h-[130px]" />
          <b className="absolute top-[248px] left-[771px] flex items-center justify-center w-[500px] h-[73px]">
            Theme name
          </b>
          <b className="absolute top-[248px] left-[1210px] flex items-center justify-center w-[500px] h-[73px]">
            Theme name
          </b>
          <b className="absolute top-[487px] left-[771px] flex items-center justify-center w-[500px] h-[73px]">
            Theme name
          </b>
          <b className="absolute top-[487px] left-[1210px] flex items-center justify-center w-[500px] h-[73px]">
            Theme name
          </b>
          <b className="absolute top-[726px] left-[771px] flex items-center justify-center w-[500px] h-[73px]">
            Theme name
          </b>
          <b className="absolute top-[726px] left-[1210px] flex items-center justify-center w-[500px] h-[73px]">
            Theme name
          </b>
          <b className="absolute top-[0px] left-[982px] inline-block font-noto-sans w-[516px] h-[54px]">
            THEMES
          </b>
        </div>
        <div className="absolute top-[0px] left-[600px] w-[1280px] h-[1009px] opacity-[0]">
          <div className="absolute top-[93px] left-[250px] rounded-[50px] bg-gray-1100 w-[1030px] h-[864px]" />
          <div className="absolute top-[206px] left-[0px] inline-block w-[950px]">
            <ul className="m-[0] pl-[32px]">
              Participants can take part only as a team. A team must comprise of
              at least 2 members and at most 6. A team must comprise of at least
              2 members.
            </ul>
          </div>
          <div className="absolute top-[308px] left-[0px] inline-block w-[950px]">
            <ul className="m-[0] pl-[32px]">
              Participants can take part only as a team. A team must comprise of
              at least 2 members and at most 6. A team must comprise of at least
              2 members.
            </ul>
          </div>
          <div className="absolute top-[410px] left-[0px] inline-block w-[950px]">
            <ul className="m-[0] pl-[32px]">
              Participants can take part only as a team. A team must comprise of
              at least 2 members and at most 6. A team must comprise of at least
              2 members.
            </ul>
          </div>
          <div className="absolute top-[512px] left-[0px] inline-block w-[950px]">
            <ul className="m-[0] pl-[32px]">
              Participants can take part only as a team. A team must comprise of
              at least 2 members and at most 6. A team must comprise of at least
              2 members.
            </ul>
          </div>
          <div className="absolute top-[614px] left-[0px] inline-block w-[950px]">
            <ul className="m-[0] pl-[32px]">
              Participants can take part only as a team. A team must comprise of
              at least 2 members and at most 6. A team must comprise of at least
              2 members.
            </ul>
          </div>
          <div className="absolute top-[716px] left-[0px] inline-block w-[950px]">
            <ul className="m-[0] pl-[32px]">
              Participants can take part only as a team. A team must comprise of
              at least 2 members and at most 6. A team must comprise of at least
              2 members.
            </ul>
          </div>
          <div className="absolute top-[949px] left-[473px] rounded-[15px] [border:2px_solid_#59db8a] box-border w-[333px] h-[60px]" />
          <div className="absolute top-[959px] left-[473px] text-xl font-poppins text-turquoise text-center inline-block w-[333px] h-[34px]">
            Download Rulebok
          </div>
          <b className="absolute top-[0px] left-[383px] text-6xl inline-block font-noto-sans text-center w-[516px] h-[54px]">
            INSTRUCTIONS
          </b>
        </div>
      </div>
      <b className="absolute top-[302px] left-[474px] inline-block w-[332px] h-[61px] opacity-[0]">
        Platinum Sponsors
      </b>
      <b className="absolute top-[653px] left-[509px] inline-block text-gold w-[262px] h-[61px] opacity-[0]">
        Gold Sponsors
      </b>
      <b className="absolute top-[1039px] left-[525px] inline-block text-gray-600 w-[230px] h-[62px] opacity-[0]">
        Silver Sponsors
      </b>
      <div className="absolute top-[447px] left-[323px] rounded-[20px] bg-gray-1100 w-[230px] h-[117px] opacity-[0]" />
      <div className="absolute top-[447px] left-[698px] rounded-[20px] bg-gray-1100 w-[230px] h-[117px] opacity-[0]" />
      <div className="absolute top-[797px] left-[217px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px] opacity-[0]" />
      <div className="absolute top-[799px] left-[510px] rounded-[20px] bg-gray-1100 w-[231px] h-[117px] opacity-[0]" />
      <div className="absolute top-[799px] left-[800px] rounded-[20px] bg-gray-1100 w-[230px] h-[117px] opacity-[0]" />
      <div className="absolute top-[1188px] left-[372px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px] opacity-[0]" />
      <div className="absolute top-[1371px] left-[372px] rounded-[20px] bg-gray-1100 w-[230px] h-[117px] opacity-[0]" />
      <div className="absolute top-[1553px] left-[372px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px] opacity-[0]" />
      <div className="absolute top-[1188px] left-[67px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px] opacity-[0]" />
      <div className="absolute top-[1371px] left-[67px] rounded-[20px] bg-gray-1100 w-[230px] h-[117px] opacity-[0]" />
      <div className="absolute top-[1553px] left-[67px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px] opacity-[0]" />
      <div className="absolute top-[1188px] left-[677px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px] opacity-[0]" />
      <div className="absolute top-[1371px] left-[677px] rounded-[20px] bg-gray-1100 w-[230px] h-[117px] opacity-[0]" />
      <div className="absolute top-[1553px] left-[677px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px] opacity-[0]" />
      <div className="absolute top-[1188px] left-[982px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px] opacity-[0]" />
      <div className="absolute top-[1371px] left-[982px] rounded-[20px] bg-gray-1100 w-[230px] h-[117px] opacity-[0]" />
      <div className="absolute top-[1553px] left-[982px] rounded-[20px] bg-gray-1100 w-[230px] h-[118px] opacity-[0]" />
      <div className="absolute top-[1865px] left-[0px] w-[1279px] h-[506px] text-7xl">
        <div className="absolute top-[0px] left-[0px] rounded-[45px] bg-gray-1100 w-[999px] h-[506px] opacity-[0]" />
        <b className="absolute top-[59px] left-[731px] inline-block opacity-[0]">
          Want to Sponsor us?
        </b>
        <div className="absolute top-[150px] left-[686px] text-xl font-medium font-poppins text-turquoise inline-block w-[593px] h-[39px] opacity-[0]">
          <span className="[text-decoration:underline]">Click here</span>
          {` to see our previous sponsors `}
        </div>
        <b className="absolute top-[243px] left-[710px] text-3xl inline-block w-[545px] h-[113px] opacity-[0]">
          Contact us at hackslash@nitp.ac.in
        </b>
        <div className="absolute top-[393px] left-[828px] rounded-[20px] bg-turquoise w-[309px] h-[59px] opacity-[0]" />
        <div className="absolute top-[404px] left-[833px] text-base font-medium font-poppins text-black inline-block w-[299px] h-[33px] opacity-[0]">
          Download Brochure
        </div>
      </div>
      <div className="absolute top-[161px] left-[358px] text-6xl font-semibold font-noto-sans inline-block w-[563px] h-[65px] opacity-[0]">
        SPONSORS
      </div>
      <div className="absolute top-[130px] left-[0px] w-[1280px] h-[2750px] opacity-[0] text-base">
        <div className="absolute top-[2536px] left-[0px] w-[1280px] h-[214px] text-sm">
          <div className="absolute top-[0px] left-[0px] bg-gray-1300 w-[1280px] h-[214px]" />
          <div className="absolute top-[131.15px] left-[33.49px] border-t-[1px_solid_#545454] box-border w-[1176.4px] h-[1px]" />
          <b className="absolute top-[64px] left-[430px] inline-block w-[250px] h-[30px]">
            Terms and conditions
          </b>
          <b className="absolute top-[64px] left-[721px] inline-block w-[190px] h-[30px]">
            Code of conduct
          </b>
          <img
            className="absolute h-[40.19%] w-[21.31%] top-[13.55%] right-[75.56%] bottom-[46.26%] left-[3.13%] max-w-full overflow-hidden max-h-full"
            alt=""
          />
          <div className="absolute top-[52px] left-[959px] rounded-[15px] bg-green-100 w-[269px] h-[57px]" />
          <b className="absolute top-[65px] left-[959px] inline-block text-black w-[269px] h-[27px]">
            Join our Discord
          </b>
          <b className="absolute top-[155px] left-[38px] text-base inline-block w-[469px] h-[33px]">
            ©2023 HACKSLASH | All rights reserved
          </b>
          <img
            className="absolute top-[145px] left-[747px] w-[54px] h-[53px]"
            alt=""
          />
          <img
            className="absolute top-[145px] left-[826px] w-[54px] h-[53px]"
            alt=""
          />
          <img
            className="absolute top-[145px] left-[906px] w-[53px] h-[53px]"
            alt=""
          />
          <img
            className="absolute top-[145px] left-[985px] w-[53px] h-[53px]"
            alt=""
          />
          <img
            className="absolute top-[145px] left-[1065px] w-[53px] h-[53px]"
            alt=""
          />
          <img
            className="absolute bottom-[32px] left-[763px] w-[22px] h-[21px] overflow-hidden"
            alt=""
          />
          <img
            className="absolute bottom-[32px] left-[840px] w-[25px] h-[21px] overflow-hidden"
            alt=""
          />
          <img
            className="absolute top-[161px] left-[922px] w-[23px] h-[22px]"
            alt=""
          />
          <img
            className="absolute bottom-[30px] left-[1079px] w-[26px] h-[25px] overflow-hidden"
            alt=""
          />
          <img
            className="absolute bottom-[34px] left-[1003px] w-[18px] h-[18px] overflow-hidden"
            alt=""
          />
        </div>
        <div className="absolute top-[851px] left-[0px] rounded-[45px] bg-gray-1100 w-[1100px] h-[727px]" />
        <b className="absolute top-[793px] left-[483px] text-6xl inline-block font-noto-sans w-[314px] h-[73px]">
          CONTACT US
        </b>
        <b className="absolute top-[869px] left-[408px] inline-block text-gray-800 w-[465px] h-[41px]">
          For any query contact us
        </b>
        <b className="absolute top-[1012px] left-[354px] inline-block text-green-100 w-[185px] h-[32px]">
          Fill the details
        </b>
        <div className="absolute top-[1066px] left-[359.88px] w-[428.55px] h-[48.6px] text-2xs text-gray-400 font-poppins">
          <div className="absolute top-[0px] left-[0px] w-[428.55px] h-[48.6px]">
            <div className="absolute top-[0px] left-[0px] rounded-[15px] [border:2px_solid_#c0c0c0] box-border w-[428.55px] h-[48.6px]" />
            <div className="absolute top-[12.37px] left-[16.79px] font-semibold inline-block w-[120.16px] h-[23.86px]">
              Full name
            </div>
          </div>
        </div>
        <div className="absolute top-[1219.75px] left-[359.88px] w-[428.55px] h-[48.6px] text-2xs text-gray-400 font-poppins">
          <div className="absolute top-[0px] left-[0px] w-[428.55px] h-[48.6px]">
            <div className="absolute top-[0px] left-[0px] rounded-[15px] [border:2px_solid_#c0c0c0] box-border w-[428.55px] h-[48.6px]" />
            <div className="absolute top-[10.6px] left-[16.79px] font-semibold inline-block w-[120.16px] h-[23.86px]">
              Mobile no.
            </div>
          </div>
        </div>
        <div className="absolute top-[1295.74px] left-[359px] w-[429.44px] h-[161.7px] text-2xs text-gray-400 font-poppins">
          <div className="absolute top-[0px] left-[0px] w-[429.44px] h-[161.7px]">
            <div className="absolute top-[0px] left-[0px] rounded-[15px] [border:2px_solid_#c0c0c0] box-border w-[429.44px] h-[161.7px]" />
            <div className="absolute top-[18.56px] left-[15.02px] font-semibold inline-block w-[212.07px] h-[79.53px]">
              Enter your message..
            </div>
          </div>
        </div>
        <div className="absolute top-[1141.99px] left-[359.88px] w-[428.55px] h-[48.6px] text-2xs text-gray-400 font-poppins">
          <div className="absolute top-[0px] left-[0px] w-[428.55px] h-[48.6px]">
            <div className="absolute top-[0px] left-[0px] rounded-[15px] [border:2px_solid_#c0c0c0] box-border w-[428.55px] h-[48.6px]" />
            <div className="absolute top-[12.37px] left-[6.19px] font-semibold inline-block w-[120.16px] h-[23.86px]">
              E-mail
            </div>
          </div>
        </div>
        <div className="absolute top-[1639px] left-[90px] rounded-[45px] bg-gray-1100 w-[1100px] h-[832px]" />
        <div className="absolute top-[1485px] left-[360px] rounded-[15px] bg-green-100 w-[165px] h-[47px]" />
        <div className="absolute top-[1496px] left-[416px] text-2xs font-semibold font-poppins text-black inline-block w-[56px] h-[25px]">
          Send
        </div>
        <div className="absolute top-[2252.57px] left-[139.5px] border-t-[1px_solid_#545454] box-border w-[1001px] h-[1px]" />
        <b className="absolute top-[1678px] left-[252px] text-6xl inline-block font-noto-sans w-[816px] h-[67px]">
          <span>{`FREQUENTLY ASKED `}</span>
          <span className="text-green-100">QUESTIONS</span>
        </b>
        <div className="absolute top-[1861px] left-[209px] font-poppins text-gray-200 text-left inline-block w-[681px] h-[74px]">{`Participants can take part only as a team. A team must comprise of at least 2 members and at `}</div>
        <div className="absolute top-[1794px] left-[191px] text-2xl font-medium text-left inline-block w-[642px] h-[47px]">
          Who can apply for the hackathon?
        </div>
        <div className="absolute top-[1956px] left-[191px] text-2xl font-medium text-left inline-block w-[642px] h-[47px]">
          Who can apply for the hackathon?
        </div>
        <div className="absolute top-[2023px] left-[191px] text-2xl font-medium text-left inline-block w-[642px] h-[48px]">
          Who can apply for the hackathon?
        </div>
        <div className="absolute top-[2091px] left-[191px] text-2xl font-medium text-left inline-block w-[642px] h-[49px]">
          Who can apply for the hackathon?
        </div>
        <div className="absolute top-[2160px] left-[191px] text-2xl font-medium text-left inline-block w-[642px] h-[47px]">
          Who can apply for the hackathon?
        </div>
        <div className="absolute top-[1814px] left-[1065px] bg-white w-[24px] h-[3px]" />
        <div className="absolute top-[1967px] left-[1065px] w-[24.48px] h-[24.48px]">
          <div className="absolute top-[10.71px] left-[0px] bg-gray-500 w-[24.48px] h-[3.06px]" />
          <div className="absolute top-[24.48px] left-[10.71px] bg-gray-500 w-[24.48px] h-[3.06px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[2034.48px] left-[1065px] w-[24.48px] h-[24.48px]">
          <div className="absolute top-[10.71px] left-[0px] bg-gray-500 w-[24.48px] h-[3.06px]" />
          <div className="absolute top-[24.48px] left-[10.71px] bg-gray-500 w-[24.48px] h-[3.06px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute bottom-[622.52px] left-[1065px] w-[24.48px] h-[24.48px]">
          <div className="absolute bottom-[10.71px] left-[0px] bg-gray-500 w-[24.48px] h-[3.06px]" />
          <div className="absolute bottom-[-3.06px] left-[10.71px] bg-gray-500 w-[24.48px] h-[3.06px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute bottom-[555.03px] left-[1065px] w-[24.48px] h-[24.48px]">
          <div className="absolute bottom-[10.71px] left-[0px] bg-gray-500 w-[24.48px] h-[3.06px]" />
          <div className="absolute bottom-[-3.06px] left-[10.71px] bg-gray-500 w-[24.48px] h-[3.06px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
        </div>
        <div className="absolute top-[2357px] left-[492px] rounded-[15px] bg-green-100 w-[296px] h-[60px]" />
        <b className="absolute top-[2372px] left-[558px] inline-block text-black w-[164px] h-[32px]">
          Register Now
        </b>
        <b className="absolute top-[2283px] left-[274px] text-4xl inline-block text-green-200 w-[733px] h-[48px]">
          What are you waiting for? Register now.
        </b>
        <img
          className="absolute h-[12.45%] w-[29.91%] top-[40.55%] right-[0.08%] bottom-[47%] left-[70.01%] max-w-full overflow-hidden max-h-full"
          alt=""
        />
        <div className="absolute top-[67px] left-[0px] rounded-[45px] bg-gray-1100 w-[1100px] h-[714px]" />
        <div className="absolute top-[250px] left-[180px] w-[1100px] h-[425px] text-black">
          <div className="absolute top-[4px] left-[0px] w-[1093px] h-[421px] overflow-x-auto">
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
                src="../image-11@2x.png"
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
                src="../image-11@2x.png"
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
                src="../image-11@2x.png"
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
                src="../image-11@2x.png"
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
                src="../image-11@2x.png"
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
                src="../image-11@2x.png"
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
                src="../image-11@2x.png"
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
                src="../image-11@2x.png"
              />
            </div>
          </div>
          <img
            className="absolute top-[-86px] left-[-40px] w-[1180px] h-[152px]"
            alt=""
          />
          <img
            className="absolute top-[364px] left-[-40px] w-[1180px] h-[152px]"
            alt=""
          />
        </div>
        <b className="absolute top-[0px] left-[358px] text-6xl inline-block font-noto-sans w-[563px] h-[65px]">
          ORGANIZERS
        </b>
      </div>
    </div>
  );
};

export default Homepage;
