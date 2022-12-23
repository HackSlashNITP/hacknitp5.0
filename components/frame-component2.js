import { useEffect } from "react";

const FrameComponent2 = () => {
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
    <iframe
      className="[border:none] absolute top-[0px] left-[281px] bg-gray-1400 w-[252px] h-[421px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_scale-up] opacity-[1] hover:animate-[1s_ease_0s_1_normal_none_scale-up] hover:opacity-[1]"
      data-animate-on-scroll
    />
  );
};

export default FrameComponent2;
