import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <div className="mb-6">
          <input
            type="text"
            id="fullName"
            className="bg-[transparent] focus:border-none border-collapse border-[#C0C0C0] text-[#C8C8C8] focus:border-white font-poppins text-[16px] rounded-lg block w-full px-5 py-2.5"
            placeholder="Full name"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            id="email"
            className="bg-[transparent] focus:border-none border-collapse border-[#C0C0C0] text-[#C8C8C8] focus:border-white font-poppins text-[16px] rounded-lg block w-full px-5 py-2.5"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            id="phone"
            className="bg-[transparent] focus:border-none border-collapse border-[#C0C0C0] text-[#C8C8C8] focus:border-white font-poppins text-[16px] rounded-lg block w-full px-5 py-2.5"
            placeholder="Mobile No."
            required
          />
        </div>

        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-[16px] bg-[transparent] focus:border-none border-collapse border-[#C0C0C0] text-[#C8C8C8] focus:border-white font-poppins rounded-lg"
          placeholder="Leave a comment..."
        ></textarea>

        <button
          type="submit"
          className="text-black my-5 font-bold bg-[#2BFF08] hover:bg-[#28dd08] cursor-pointer focus:outline-none font-space-grotesk rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
