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
    <div class="mx-auto flex flex-wrap p-5 md:flex-col text-[17px] flex-row items-center justify-between w-full font-space-grotesk">
      <img
        className="min-w-[100px] w-[200px]"
        alt=""
        src="../hacknitp57.svg"
      />

      <nav class="flex flex-wrap justify-center items-center md:mt-4">
        <b class="mr-5 cursor-pointer md:mt-1 sm:mt-1" onClick={() => {}}>About Us</b>
        <b class="mr-5 cursor-pointer md:mt-1 sm:mt-1" onClick={onTimelineTextClick}>Timeline</b>
        <b class="mr-5 cursor-pointer md:mt-1 sm:mt-1" onClick={onRulesTextClick}>Rules</b>
        <b class="mr-5 cursor-pointer md:mt-1 sm:mt-1" onClick={() => {}}>Sponsors</b>
        <b class="mr-5 cursor-pointer md:mt-1 sm:mt-1" onClick={onContactUsTextClick}>Contact Us</b>
        <button class="border-0 py-2 px-5 cursor-pointer focus:outline-none rounded-xl  md:mt-1 sm:mt-1 text-black bg-[#2BFF08]">
          Join Discord
        </button>
      </nav>
    </div>
  );
};

export default Header;
