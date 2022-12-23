import { useEffect } from "react";

const RectangleComponentofRule1 = ({isLeft}) => {
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
    isLeft ? 
    <div
      className="rounded-r-2xl bg-green-100 w-[600px] h-[130px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
      data-animate-on-scroll
    />
    :
    <div
      className="rounded-l-2xl bg-green-100 w-[600px] h-[130px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0]"
      data-animate-on-scroll
    />
  );
};

export default RectangleComponentofRule1;
