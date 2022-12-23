import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";

const Loadpage = () => {
  const router = useRouter();

  const onLoadpageClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

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
      className="relative bg-gray-1000 w-full h-[720px] overflow-y-auto cursor-pointer text-center text-2xl text-white font-space-grotesk"
      onClick={onLoadpageClick}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1280px] h-[720px] object-cover"
        alt=""
        src="../anirudhxu4pz7gi9jyunsplash-1@2x.png"
      />
      <h3
        className="m-[0] absolute top-[502px] left-[319px] text-[inherit] font-medium font-inherit inline-block w-[642px] h-[48px] [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        id="heading"
        data-animate-on-scroll
      >{`Innovate Far & Beyond`}</h3>
      <img
        className="absolute h-[25.65%] w-[45.77%] top-[32.5%] right-[24.94%] bottom-[41.85%] left-[29.3%] max-w-full overflow-hidden max-h-full [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in-left] opacity-[0]"
        alt=""
        src="../hacknitp5.svg"
        data-animate-on-scroll
      />
    </div>
  );
};

export default Loadpage;
