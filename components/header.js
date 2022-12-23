import { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  const onTimelineTextClick = useCallback(() => {
    router.push("/timeline");
  }, [router]);

  const onRulesTextClick = useCallback(() => {
    router.push("/rules");
  }, [router]);

  const onSponsorsTextClick = useCallback(() => {
    // Please sync "6 Sponsors" to the project
  }, []);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div className="absolute flex justify-between w-[100%] px-10 py-5 items-center text-center text-xs text-white font-space-grotesk">
      <img
        className="min-w-[100px] w-auto"
        alt=""
        src="../hacknitp57.svg"
      />
      <div className="flex flex-row justify-between items-center sm:text-xs">
        <b className="cursor-pointer mx-4">About Us</b>
        <b
          className="cursor-pointer mx-4"
          onClick={onTimelineTextClick}
        >
          Timeline
        </b>
        <b
          className="cursor-pointer mx-4"
          onClick={onRulesTextClick}
        >
          Rules
        </b>
        <b
          className="cursor-pointer mx-4"
          onClick={onSponsorsTextClick}
        >
          Sponsors
        </b>
        <b
          className="cursor-pointer mx-4"
          onClick={onContactUsTextClick}
        >
          Contact Us
        </b>
        <div className="cursor-pointer relative z-0 mx-4">
          <img
            className="rounded-[15px]"
            alt=""
            src="/rectangle-39715.svg"
          />
          <b className="absolute top-[20%] left-[0px] text-2xs inline-block mx-4 z-10 text-black">
            Join Our Discord
          </b>
        </div>
      </div>
    </div>
  );
};

export default Header;
