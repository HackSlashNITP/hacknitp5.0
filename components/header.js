import { useCallback } from "react";
import { useRouter } from "next/router";;

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
    router.push("/sponsors");
  }, []);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div className="mx-auto flex flex-wrap p-5 md:flex-col text-[17px] text-white flex-row items-center justify-between w-full font-space-grotesk">
      <img
        className="min-w-[100px] w-[200px] cursor-pointer"
        alt=""
        src="../hacknitp57.svg"
        onClick={onLogoClick}
      />

      <nav className="flex flex-wrap justify-center items-center md:mt-4 text-base">
        <b className="mr-5 cursor-pointer md:mt-1 sm:mt-1" onClick={onAboutUsClick}>About Us</b>
        <b className="mr-5 cursor-pointer md:mt-1 sm:mt-1" onClick={onTimelineTextClick}>Timeline</b>
        <b className="mr-5 cursor-pointer md:mt-1 sm:mt-1" onClick={onRulesTextClick}>Rules</b>
        <b className="mr-5 cursor-pointer md:mt-1 sm:mt-1" onClick={onSponsorsTextClick}>Sponsors</b>
        <b className="mr-5 cursor-pointer md:mt-1 sm:mt-1" onClick={onContactUsTextClick}>Contact Us</b>
        <a href="https://bit.ly/hacknitp-4-discord" target={"_blank"} rel="noreferrer noopener">
          <button className="border-0 font-bold py-2 px-5 text-xs cursor-pointer focus:outline-none rounded-xl  md:mt-1 sm:mt-1 text-black bg-[#2BFF08]">
            Join Discord
          </button>
        </a>
      </nav>
    </div>
  );
};

export default Header;
