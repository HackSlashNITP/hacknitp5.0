import { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Homepage = () => {
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
      className=" bg-black w-full h-screen overflow-y-auto text-center text-5xl text-white font-space-grotesk"
      id="homepage"
    >
      <div className="w-full h-screen md:h-auto bg-black bg-[url('../public/background-medium.jpg')] bg-cover md:bg-center md:bg-fixed bg-no-repeat flex flex-col justify-between">
        <div className="wrapper min-h-full md:mb-[100px] sm:mb-[100px]">
          <Header />
          <div className="max-w-[800px] flex flex-col items-start md:items-center lg:items-center md:mx-10 sm:mx-10 mx-[10%] mt-[50px]">
            <img
              className="my-2 w-[75%] h-[75%] min-w-[200px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              alt=""
              src="../group-1303.svg"
              data-animate-on-scroll
            />
            <h3
              className="mb-8 md:text-[20px] sm:text-[20px] text-lg font-bold md:font-semibold sm:font-semibold font-noto-sans text-green-100 inline-block [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              id="date"
              data-animate-on-scroll
            >
              March 25,2023 - April 22,2023
            </h3>
            <h6
              className="m-[0] md:text-[16px] bg-clip-text bg-black text-xs font-normal font-noto-sans text-left md:text-center inline-block w-[100%] [-webkit-text-stroke:3px_rgba(255,_255,_255,_0)] [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
              id="texr"
              data-animate-on-scroll
            >
              While it might appear at first stance that the logistics of a
              hackathon seemingly only pivot around rigorous and brain-wracking
              coding discourses, its composition is not solely limited to
              problem solving. Hack NITP has been engineered so to provide
              medium for like-minded individuals with a technical bent of mind
              to get together and evolve into bigger, better communities and
              forums, thereby facilitating efficient networking in the
              technology sector. Not only that, the event will be packed with
              numerous sessions directed towards better understanding in legion
              of domains as in Machine Learning, Web Technology, Blockchain, so
              on and so forth. For the likes of absolute beginners as well as
              trained professionals all set to step into the corporate world,
              the ideals of HACK NITP have been built to appeal to serve to one
              and all. Hereby lies altiore proposito for our collective
              endeavor, HACK NITP.
            </h6>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
