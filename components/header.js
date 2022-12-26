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
    <div className="flex w-full flex-wap p-5 md:flex-col md:justify-center md:items-center sm:flex-col sm:justify-center sm:items-center text-[17px] text-white flex-row items-center justify-between  font-space-grotesk">
      <img
        className="min-w-[150px] max-w-[250px] w-[20%] cursor-pointer"
        alt=""
        src="../hacknitp57.svg"
        onClick={onLogoClick}
      />

      <nav className="flex mt-1 flex-wrap justify-center items-center text-xs gap-x-5 gap-y-1 font-normal md:text-[16px] sm:text-[16px]">
        <b className="cursor-pointer" onClick={onAboutUsClick}>About Us</b>
        <b className="cursor-pointer" onClick={onTimelineTextClick}>Timeline</b>
        <b className="cursor-pointer" onClick={onRulesTextClick}>Rules</b>
        <b className="cursor-pointer" onClick={onSponsorsTextClick}>Sponsors</b>
        <b className="cursor-pointer" onClick={onContactUsTextClick}>Contact Us</b>
        <a href="https://bit.ly/hacknitp-4-discord" target={"_blank"} rel="noreferrer noopener">
          <button className="border-0 font-semibold py-2 px-5 text-xs cursor-pointer md:text-[14px] hover:bg-[#28e706] sm:text-[14px] focus:outline-none rounded-xl  md:mt-1 sm:mt-1 text-black bg-[#2BFF08]">
            Join Discord
          </button>
        </a>
      </nav>
    </div>
  );
};

export default Header;
