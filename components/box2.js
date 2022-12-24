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
      className="rounded-3xl bg-[#1C172F] flex flex-col px-10 box-border items-center justify-center [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] text-center text-white font-space-grotesk"
      id="box4"
      data-animate-on-scroll
    >
      <h4 className="text-4xl md:text-xl sm:text-xl">Want to Sponsor Us?</h4>
      <p className="text-[#59DB8A] text-xl md:text-sm sm:text-sm"><span className="underline cursor-pointer">Click here</span> to see our previous sponsors </p>
      <div className="text-2xl md:text-base sm:text-base font-bold my-[5px]">
        <p>Contact us at</p>
        <p>hackslash@nitp.ac.in</p>
      </div>
    </div>
  );
};

export default Box2;
