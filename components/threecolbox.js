import { useEffect } from "react";

const Threecolbox = () => {
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
      className="relative bg-gray-1400 w-full overflow-hidden flex flex-col items-center justify-center [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
      data-animate-on-scroll
    >
      <div className="bg-gray-1400 overflow-hidden flex flex-row p-[44px_36px] box-border items-center justify-center sm:flex-col">
        <div className="flex flex-row items-start justify-start gap-[74px] md:flex-col">
          <img
            className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
            alt=""
            src="../rectangle-39515@2x.png"
          />
          <img
            className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
            alt=""
            src="../rectangle-39515@2x.png"
          />
          <img
            className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
            alt=""
            src="../rectangle-39515@2x.png"
          />
          {/* <img
            className="relative rounded-[20px] w-[230px] h-[118px] shrink-0 object-cover"
            alt=""
            src="../rectangle-39515@2x.png"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Threecolbox;
