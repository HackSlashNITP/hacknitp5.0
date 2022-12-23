import { useEffect } from "react";


const Box2 = () => {
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
      className="rounded-[45px] bg-gray-1000 w-[1130.4px] flex flex-row p-[54px_0px] box-border items-center justify-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] text-center text-5xl text-white font-space-grotesk lg:w-[65rem] md:pl-[0px] md:box-border md:h-[22rem] md:w-[40rem] sm:h-[15rem] sm:w-[25rem]"
      id="box4"
      data-animate-on-scroll
    >
      <div className="flex-1 overflow-hidden flex flex-row p-[10px_209px] box-border items-center justify-between md:flex-col md:pr-[209px] md:box-border">
        <div className="flex flex-row p-[0px_41px] box-border items-center justify-start md:flex-col md:pr-[41px] md:box-border md:w-[5vh]">
          <div className="flex flex-col items-center justify-center gap-[17px] md:flex-col md:w-[50%]">
            <h3 className="m-[0] relative text-[inherit] font-bold font-inherit inline-block w-[535.78px] md:text-3xl sm:text-lg sm:top-[3rem]">
              Want to Sponsor us?
            </h3>
            <a className="[text-decoration:none] relative text-xl font-medium font-poppins text-turquoise inline-block w-[630.4px] h-[39px] shrink-0 sm:text-4xs sm:top-[3rem]">
              <span className="[text-decoration:underline]">Click here</span>
              {` to see our previous sponsors `}
            </a>
            <a className="[text-decoration:none] relative text-3xl font-bold text-[inherit] inline-block w-[579.37px] h-[113px] shrink-0 sm:text-xs sm:top-[2rem]">
              Contact us at hackslash@nitp.ac.in
            </a>
            <button className="cursor-pointer [border:none] p-[0] bg-turquoise relative rounded-[20px] w-[328.49px] h-[59px] shrink-0 sm:bottom-[3rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box2;
