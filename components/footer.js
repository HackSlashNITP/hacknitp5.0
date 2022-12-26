import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="px-4 bg-[#545454] md:px-6 md:py-8 font-space-grotesk">
      <div className="flex items-center justify-between sm:flex-col md:flex-col ">
        <Link href="/homepage" className="items-center flex-1">
          <img
            src="../hacknitp5.svg"
            className="mr-3 min-w-[100px] w-[200px] hover:animate-[1s_ease_0s_2_alternate-reverse_none_roll-in-left] hover:opacity-[1]"
            alt="Flowbite Logo"
          />
        </Link>
        <ul className="text-center flex flex-row flex-wrap justify-center items-center md:text-[15px] sm:text-[15px] text-xs text-white sm:mb-0 list-none flex-3">
          <li className="mb-1 mx-2">
            <a
              href="https://rebrand.ly/hacknitp-4/rulebook"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <b className="text-white none md:mr-6 cursor-pointer hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]">
                Terms and Conditions
              </b>
            </a>
          </li>
          <li className="mb-1 mx-2">
            <a
              href={"https://rebrand.ly/hackslash/community-guidelines"}
              target="_blank"
              rel="noreferrer noopener"
            >
              <b className="text-white none cursor-pointer  hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
                alt="">Code of Conduct</b>
            </a>
          </li>
          <li className="mb-1 mx-2">
            <b className="text-white none">
              <a
                href="https://bit.ly/hacknitp-4-discord"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button class="border-0 py-2 px-5 cursor-pointer text-xs font-bold focus:outline-none rounded-xl md:text-[15px] sm:text-[15px] md:mt-1 sm:mt-1 text-black bg-[#2BFF08] hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
                alt="">
                  Join our Discord
                </button>
              </a>
            </b>
          </li>
        </ul>
      </div>
      <hr className="border-[#545454] sm:mx-auto lg:my-8" />
      <div className="flex flex-row mr-[3%] justify-between items-center md:flex-col sm:flex-col">
        <span className="block text-sm text-white text-center font-bold flex-2 md:text-[20px] sm:text-[20px]">
          © 2023 HACKSLASH | All Rights Reserved.
        </span>
        <span class="flex flex-wrap sm:mt-0 mt-4 items-center justify-center sm:center flex-3">
          <a
            href="https://www.instagram.com/hackslash.nitp/?hl=en"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3 hover:animate-[1s_ease_0s_1_normal_none_flip-horizontal-bottom] hover:opacity-[1]">
              <AiFillInstagram />
            </div>
          </a>
          <a
            href="https://twitter.com/hackslash_nitp/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3 hover:animate-[1s_ease_0s_1_normal_none_flip-horizontal-bottom] hover:opacity-[1]">
              <AiFillTwitterCircle />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/hackslash"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3 hover:animate-[1s_ease_0s_1_normal_none_flip-horizontal-bottom] hover:opacity-[1]">
              <AiFillLinkedin />
            </div>
          </a>
          <a
            href="https://www.youtube.com/c/HackSlashDevelopersClub/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3 hover:animate-[1s_ease_0s_1_normal_none_flip-horizontal-bottom] hover:opacity-[1]">
              <AiFillYoutube />
            </div>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
