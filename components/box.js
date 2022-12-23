import { useEffect } from "react";
import { Button } from "@mui/material";

const Box = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="rounded-[45px] bg-gray-1100 flex flex-col p-[54px_216px] box-border items-center justify-center gap-[21px] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] text-center text-7xl text-white font-space-grotesk"
      id="box4"
      data-animate-on-scroll
    >
      <h3 className="m-[0] relative text-[inherit] font-bold font-inherit inline-block w-[535.78px]">
        Want to Sponsor us?
      </h3>
      <a className="[text-decoration:none] relative text-xl font-medium font-poppins text-turquoise inline-block w-[630.4px] h-[39px] shrink-0">
        <span className="[text-decoration:underline]">Click here</span>
        {` to see our previous sponsors `}
      </a>
      <a className="[text-decoration:none] relative text-3xl font-bold text-[inherit] inline-block w-[579.37px] h-[113px] shrink-0">
        Contact us at hackslash@nitp.ac.in
      </a>
      <div className="relative text-base font-medium font-poppins text-black inline-block w-[317.86px] h-[33px] shrink-0">
        Download Brochure
      </div>
      <Button
        className="relative"
        sx={{ width: 328.4864807128906 }}
        variant="contained"
        color="success"
      >
        Download brouchure
      </Button>
    </div>
  );
};

export default Box;
