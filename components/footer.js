import Link from "next/link";
import { AiFillInstagram } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';


// CiFacebook
const Footer = () => {
  return (
    <footer className="p-4 bg-[#545454] md:px-6 md:py-8 font-space-grotesk">
      <div className="flex items-center justify-between sm:flex-col md:flex-col">
        <Link href="/" className="items-center mb-4 flex-1">
          <img
            src="../hacknitp5.svg"
            className="mr-3 min-w-[100px] w-[200px]"
            alt="Flowbite Logo"
          />
        </Link>
        <ul className="text-center flex flex-row flex-wrap justify-center items-center mb-6 md:text-[15px] sm:text-[15px] text-xs text-white sm:mb-0 list-none flex-3">
          <li className="mb-1 mx-2">
            <b className="text-white none md:mr-6">
              Terms and Conditions
            </b>
          </li>
          <li className="mb-1 mx-2">
            <b className="text-white none">Code of Conduct</b>
          </li>
          <li className="mb-1 mx-2">
            <b className="text-white none">
              <button class="border-0 py-2 px-5 cursor-pointer text-xs font-bold focus:outline-none rounded-xl md:text-[15px] sm:text-[15px] md:mt-1 sm:mt-1 text-black bg-[#2BFF08]">
                Join our Discord
              </button>
            </b>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-[#545454] sm:mx-auto lg:my-8" />
      <div className="flex flex-row mr-[3%] justify-between items-center md:flex-col sm:flex-col">
        <span className="block text-sm text-white text-center font-bold flex-2 md:text-[20px] sm:text-[20px]">
          © 2023 HACKSLASH | All Rights Reserved.
        </span>
        <span class="flex flex-wrap sm:mt-0 mt-4 items-center justify-center sm:center flex-3">
          <div className="bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3">
            <AiFillInstagram />
          </div>
          <div className="bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3">
            <AiFillTwitterCircle/>
          </div>
          <div className="bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3">
            <BsDiscord />
          </div>
          <div className="bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3">
            <AiFillLinkedin />
          </div>
          <div className="bg-black mb-3 flex text-white text-base justify-center items-center w-[40px] h-[40px] rounded-full mx-3">
            <AiFillYoutube/>
          </div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
