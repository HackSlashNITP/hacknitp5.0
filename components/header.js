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

  const onRectangleImageClick = useCallback(() => {
    window.open(
      "https://discord.com/channels/773227056573448192/980693078258090014"
    );
  }, []);

  return (
    <nav
      className="relative w-full flex flex-row p-[5px_0px] box-border items-center justify-between gap-[25px] md:flex-col"
      id="navbar"
    >
      <img
        className="relative w-[236.15px] h-[75px] shrink-0 pr-[35px] cursor-pointer hover:animate-[1s_ease_0s_2_alternate-reverse_none_roll-in-left] hover:opacity-[1]"
        alt=""
        src="../hacknitp57.svg"
        onClick={onHacknitp5ImageClick}
      />
      <h3
        className="m-[0] relative text-2xs font-bold font-space-grotesk text-white text-center flex items-center justify-center w-[120.05px] shrink-0 cursor-pointer hover:animate-[1s_ease_0s_1_normal_none_shake-horizontal] hover:opacity-[1]"
        id="About_us"
        onClick={onAboutUsClick}
      >
        About Us
      </h3>
      <h3
        className="m-[0] relative text-2xs font-bold font-space-grotesk text-white text-center flex items-center justify-center w-[109px] shrink-0 cursor-pointer hover:animate-[1s_ease_0s_1_reverse_none_tilt-in-top-1] hover:opacity-[1]"
        id="Timeline"
        onClick={onTimelineClick}
      >
        Timeline
      </h3>
      <h3
        className="m-[0] relative text-2xs font-bold font-space-grotesk text-white text-center flex items-center justify-center w-[52.6px] shrink-0 cursor-pointer hover:animate-[1s_ease_0s_2_alternate_none_flip-horizontal-bottom] hover:opacity-[1]"
        id="Rules"
        onClick={onUlClick}
      >
        Rules
      </h3>
      <h3
        className="m-[0] relative text-2xs font-bold font-space-grotesk text-white text-center flex items-center justify-center w-[120px] shrink-0 cursor-pointer hover:animate-[1s_ease_0s_2_alternate-reverse_none_rotate-center] hover:opacity-[1]"
        id="Sponsors"
        onClick={onSponsorsClick}
      >
        Sponsors
      </h3>
      <h3
        className="m-[0] relative text-2xs font-bold font-space-grotesk text-white text-center flex items-center justify-center w-[107.19px] shrink-0 cursor-pointer hover:animate-[1s_ease_0s_1_normal_none_jello-horizontal] hover:opacity-[1]"
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
