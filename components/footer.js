import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="px-4 bg-[#545454] py-3 font-space-grotesk">
      <div className="flex items-center justify-between sm:flex-col md:flex-col mb-3 gap-y-5 text-center">
        <Link href="/homepage" className="items-center flex-1">
          <img
            src="../hacknitp5.svg"
            className="mr-3 min-w-[100px] w-[200px]"
            alt="Flowbite Logo"
          />
        </Link>
        <ul className="text-center font-semibold flex flex-row flex-wrap justify-center gap-y-2 items-center md:text-[15px] sm:text-[15px] text-xs text-white list-none">
          <li className="mx-2">
            <a
              href="https://rebrand.ly/hacknitp-4/rulebook"
              target={"_blank"}
              rel="noopener noreferrer"
              className="no-underline"
            >
              <b className="text-white cursor-pointer font-light hover:font-semibold">
                Terms and Conditions
              </b>
            </a>
          </li>
          <li className="mx-2">
            <a
              href={"https://rebrand.ly/hackslash/community-guidelines"}
              target="_blank"
              rel="noreferrer noopener"
              className="no-underline"
            >
              <b className="text-white none cursor-pointer font-light hover:font-semibold">Code of Conduct</b>
            </a>
          </li>
          <li className="mx-2">
            <b className="text-white none">
              <a
                href="https://bit.ly/hacknitp-4-discord"
                target="_blank"
                rel="noreferrer noopener"
                className="no-underline"
              >
                <button className="border-0 py-2 px-5 cursor-pointer text-xs font-semibold focus:outline-none rounded-xl md:text-[15px] sm:text-[15px] text-black bg-[#2BFF08] hover:bg-[#28e706]">
                  Join our Discord
                </button>
              </a>
            </b>
          </li>
        </ul>
      </div>
      <hr className="border-[#545454] sm:mx-auto lg:my-8" />
      <div className="flex flex-row mr-[3%] justify-between items-center md:flex-col sm:flex-col">
        <span className="block text-sm text-white text-center font-normal flex-2 md:text-[20px] sm:text-[20px]">
          © 2023 HACKSLASH | All Rights Reserved.
        </span>
        <span className="flex flex-wrap sm:mt-0 mt-4 items-center justify-center sm:center flex-3">
          <a
            href="https://www.instagram.com/hackslash.nitp/?hl=en"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3">
              <AiFillInstagram />
            </div>
          </a>
          <a
            href="https://twitter.com/hackslash_nitp/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3">
              <AiFillTwitterCircle />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/hackslash"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3">
              <AiFillLinkedin />
            </div>
          </a>
          <a
            href="https://www.youtube.com/c/HackSlashDevelopersClub/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="cursor-pointer bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3">
              <AiFillYoutube />
            </div>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
