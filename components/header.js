import { useCallback } from "react";
import { useRouter } from "next/router";

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
    <div className="absolute h-[10.42%] w-[94.14%] top-[3.06%] right-[2.81%] bottom-[86.53%] left-[3.05%] text-center text-xs text-white font-space-grotesk">
      <img
        className="absolute h-full w-[19.74%] top-[0%] right-[80.26%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../hacknitp57.svg"
      />
      <b className="absolute top-[16px] left-[407px] inline-block">About Us</b>
      <b
        className="absolute top-[16px] left-[536px] inline-block cursor-pointer"
        onClick={onTimelineTextClick}
      >
        Timeline
      </b>
      <b
        className="absolute top-[16px] left-[659px] inline-block cursor-pointer"
        onClick={onRulesTextClick}
      >
        Rules
      </b>
      <b
        className="absolute top-[17px] left-[754px] inline-block cursor-pointer"
        onClick={onSponsorsTextClick}
      >
        Sponsors
      </b>
      <b
        className="absolute top-[16px] left-[882px] inline-block cursor-pointer"
        onClick={onContactUsTextClick}
      >
        Contact Us
      </b>
      <img
        className="absolute top-[5px] left-[1025px] rounded-[15px] w-[180px] h-[50px]"
        alt=""
        src="../rectangle-39715.svg"
      />
      <b className="absolute top-[18px] left-[1044px] text-2xs inline-block text-black">
        Join Our Discord
      </b>
    </div>
  );
};

export default Header;
