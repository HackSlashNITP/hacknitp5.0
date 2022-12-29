import { useEffect } from "react";
import Link from "next/link";

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
      className="rounded-3xl bg-[#1C172F] flex flex-col p-10 gap-y-5 box-border items-center justify-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] text-center text-white font-space-grotesk"
      id="box4"
      data-animate-on-scroll
    >
      <h4 className="text-4xl md:text-base sm:text-base font-light">Want to Sponsor Us?</h4>
      <p className="text-[#59DB8A] text-lg md:text-sm sm:text-sm"><Link href={'/prevSponsors'}><span className=" text-[#2BFF08] underline cursor-pointer hover:[border:2px_solid_#2BFF08]">Click here</span></Link> to see our previous sponsors </p>
      <div className="text-xl md:text-base sm:text-base font-normal my-[5px]">
        <p>Contact us at</p>
        <a className="font-medium text-[#16a34a] hover:text-[#2BFF08]" href="mailto:hackslashclub@nitp.ac.in" target="_blank">hackslashclub@nitp.ac.in</a>
      </div>
    </div>
  );
};

export default Box2;
