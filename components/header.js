import { useCallback } from "react";
import { useRouter } from "next/router";

const Header= () => {
  const router = useRouter();

  const onHacknitp5ImageClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onAboutUsClick = useCallback(() => {
    router.push("/about-us");
  }, [router]);

  const onTimelineClick = useCallback(() => {
    router.push("/timeline");
  }, [router]);

  const onUlClick = useCallback(() => {
    router.push("/rules");
    // Please sync "5 Rules" to the project
  }, []);

  const onSponsorsClick = useCallback(() => {
    router.push("/sponsors");
  }, [router]);

  const onContactUsClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <nav
      className="relative w-full flex flex-row p-[5px_20px] box-border items-center justify-between gap-[25px] md:flex-col"
      id="navbar"
    >
      <img
        className="relative w-[236.15px] h-[75px] shrink-0 cursor-pointer"
        alt=""
        src="../hacknitp57.svg"
        onClick={onHacknitp5ImageClick}
      />
      <h3
        className="m-[0] relative text-2xs font-bold font-space-grotesk text-white text-center flex items-center justify-center w-[120.05px] shrink-0 cursor-pointer"
        id="About_us"
        onClick={onAboutUsClick}
      >
        About Us
      </h3>
      <h3
        className="m-[0] relative text-2xs font-bold font-space-grotesk text-white text-center flex items-center justify-center w-[109px] shrink-0 cursor-pointer"
        id="Timeline"
        onClick={onTimelineClick}
      >
        Timeline
      </h3>
      <h3
        className="m-[0] relative text-2xs font-bold font-space-grotesk text-white text-center flex items-center justify-center w-[52.6px] shrink-0 cursor-pointer"
        id="Rules"
        onClick={onUlClick}
      >
        Rules
      </h3>
      <h3
        className="m-[0] relative text-2xs font-bold font-space-grotesk text-white text-center flex items-center justify-center w-[120px] shrink-0 cursor-pointer"
        id="Sponsors"
        onClick={onSponsorsClick}
      >
        Sponsors
      </h3>
      <h3
        className="m-[0] relative text-2xs font-bold font-space-grotesk text-white text-center flex items-center justify-center w-[107.19px] shrink-0 cursor-pointer"
        onClick={onContactUsClick}
      >
        Contact Us
      </h3>
      <a href="https://bit.ly/hacknitp-4-discord" target={"_blank"} rel="noreferrer noopener">
        <button className="border-0 font-bold py-2 px-5 text-xs cursor-pointer focus:outline-none rounded-xl  md:mt-1 sm:mt-1 text-black bg-[#2BFF08]">
            Join Discord
          </button>
          </a>

    </nav>
  );
};

export default Header;
