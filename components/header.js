import { useCallback } from "react";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const router = useRouter();

  const onLogoClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onAboutUsClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onTimelineTextClick = useCallback(() => {
    router.push("/timeline");
  }, [router]);

  const onRulesTextClick = useCallback(() => {
    router.push("/rules");
  }, [router]);

  const onSponsorsTextClick = useCallback(() => {
    router.push("/prevSponsors");
  }, []);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const handleHamburgerClick = () => {
    document.querySelector('.navigation-links').classList.toggle('md:hidden');
  };
  return (
    <div className="relative top-0 left-0 w-full">
      <div className="absolute right-0 top-0 md:my-10 md:mr-10">
        <GiHamburgerMenu className="text-white text-sm hidden md:block" onClick={handleHamburgerClick}/>
      </div>
      <div className="flex w-full flex-wap p-5 bp:flex-col md:justify-center md:items-center sm:flex-col sm:justify-center sm:items-center text-white flex-row items-center justify-between  font-space-grotesk">
       
       <figure className="py-0"> 
        <img
          className="min-w-[200px] max-w-[250px] w-[20%] cursor-pointer mr-10 bp:mr-0"
          alt=""
          src="../hacknitp5.svg"
          onClick={onLogoClick}
        />
        <figcaption className="text-xs  font-bold m-auto">X</figcaption>
        <figcaption className="text-sm font-bold m-atuo">API-Days Patna</figcaption>
        </figure>

        <nav className="navigation-links md:hidden flex mt-1 md:flex-col md:mt-10 md:gap-y-2 justify-center items-center text-xs gap-x-5 gap-y-1 font-light md:font-extralight md:text-[17px]">
          <b className="cursor-pointer  hover:text-[#2BFF08]" onClick={onAboutUsClick}>
            About Us
          </b>
          <b className="cursor-pointer hover:text-[#2BFF08]" onClick={onTimelineTextClick}>
            Timeline
          </b>
          <b className="cursor-pointer hover:text-[#2BFF08]" onClick={onRulesTextClick}>
            Rules
          </b>
          <b className="cursor-pointer hover:text-[#2BFF08]" onClick={onSponsorsTextClick}>
            Sponsors
          </b>
          <b className="cursor-pointer hover:text-[#2BFF08]" onClick={onContactUsTextClick}>
            Contact Us
          </b>
          <a
            href="https://bit.ly/hacknitp-4-discord"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <button className="border-0 font-semibold py-2 px-5 text-xs cursor-pointer md:text-[17px] hover:bg-[#28e706] focus:outline-none rounded-xl  md:mt-1 sm:mt-1 text-black bg-[#2BFF08]">
              Join Discord
            </button>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
