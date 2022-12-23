import { useEffect } from "react";

const RectangleComponentOfAbbout = () => {
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
      className="absolute top-[336px] left-[475px] rounded-[25px] bg-gray-1100 w-[574px] h-[180px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
      id="aboutContent2"
      data-animate-on-scroll
    />
  );
};

export default RectangleComponentOfAbbout;
