import { useCallback } from "react";
import { useRouter } from "next/router";

const Header1 = () => {
  const router = useRouter();

  const onHacknitp5Click = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onTimelineTextClick = useCallback(() => {
    router.push("/timeline");
  }, [router]);

  const onUlTextClick = useCallback(() => {
    router.push("/rules");
  }, [router]);

  const onSponsorsTextClick = useCallback(() => {
    // Please sync " Sponsors_Check" to the project
  }, []);

  return (
    <nav
      className="absolute top-[36px] left-[113px] w-[1094px] flex flex-row p-[5px_0px] box-border items-center justify-center gap-[25px] md:flex-col"
      id="navbar"
    >
      <img
        className="relative w-[236.15px] h-[75px] shrink-0 cursor-pointer"
        alt=""
        src="../hacknitp53.svg"
        onClick={onHacknitp5Click}
      />
      <b className="relative text-xs flex font-space-grotesk text-white text-center items-center justify-center w-[88.34px] shrink-0">
        About Us
      </b>
      <b
        className="relative text-xs flex font-space-grotesk text-white text-center items-center justify-center w-[109px] shrink-0 cursor-pointer"
        onClick={onTimelineTextClick}
      >
        Timeline
      </b>
      <b
        className="relative text-xs flex font-space-grotesk text-white text-center items-center justify-center w-[52.6px] shrink-0 cursor-pointer"
        onClick={onUlTextClick}
      >
        Rules
      </b>
      <b
        className="relative text-xs flex font-space-grotesk text-white text-center items-center justify-center w-[120px] shrink-0 cursor-pointer"
        onClick={onSponsorsTextClick}
      >
        Sponsors
      </b>
      <b className="relative text-xs flex font-space-grotesk text-white text-center items-center justify-center w-[107.19px] shrink-0">
        Contact Us
      </b>
      <img
        className="relative rounded-[15px] w-[199px] h-[50px] shrink-0 hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
        alt=""
        src="../rectangle-397152.svg"
      />
    </nav>
  );
};

export default Header1;
