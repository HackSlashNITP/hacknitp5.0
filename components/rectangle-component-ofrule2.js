import { useEffect } from "react";

const RectangleComponentOfrule2 = () => {
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
      className="absolute top-[-29px] left-[-35px] rounded-[20px] bg-green-100 w-[600px] h-[130px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] opacity-[0] [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] lg:opacity-[0]"
      data-animate-on-scroll
    />
  );
};

export default RectangleComponentOfrule2;
