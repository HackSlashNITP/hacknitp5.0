import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import Image from 'next/image';

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
      className="flex flex-col justify-center bg-[url('../public/background-medium.jpg')]  items-center bg-black bg-cover md:bg-center md:bg-fixed bg-no-repeat w-full h-screen  cursor-pointer text-center text-2xl text-white font-space-grotesk"
      onClick={onLoadpageClick}
    >
      <img
        className="max-w-full md:w-5/6 overflow-hidden max-h-full [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in-left] opacity-[0]"
        alt=""
        src="../hacknitp5.svg"
        data-animate-on-scroll
      />
      <h3
        className="mt-[2%] md:text-sm text-[inherit] font-medium font-inherit inline-block [&.animate]:animate-[4s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        id="heading"
        data-animate-on-scroll
      >{`Innovate Far & Beyond`}</h3>
    </div>
  );
};

export default Loadpage;
