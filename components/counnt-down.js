import { useEffect } from "react";
import { TextField } from "@mui/material";

const CounntDown = () => {
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
      className="absolute top-[242px] left-[392px] w-[497px] h-[189px] [&.animate]:animate-[3s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-center text-3xs text-white font-space-grotesk"
      id="countContainer"
      data-animate-on-scroll
    >
      <div className="absolute top-[0px] left-[0px] rounded-[25px] bg-gray-900 w-[497px] h-[189px]" />
      <h3
        className="m-[0] absolute top-[10px] left-[75px] text-lg font-bold font-noto-sans inline-block w-[346px] h-[33px]"
        id="eventCount"
      >
        EVENT STARTS IN
      </h3>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[64px] left-[38px]"
        sx={{ width: 60 }}
        color="primary"
        variant="standard"
        type="text"
        label="Label"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[64px] left-[158px]"
        sx={{ width: 60 }}
        color="primary"
        variant="standard"
        type="text"
        label="Label"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[64px] left-[278px]"
        sx={{ width: 60 }}
        color="primary"
        variant="standard"
        type="text"
        label="Label"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[64px] left-[398px]"
        sx={{ width: 60 }}
        color="primary"
        variant="standard"
        type="text"
        label="Label"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[64px] left-[38px]"
        sx={{ width: 60 }}
        color="primary"
        variant="standard"
        type="text"
        label="69"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[64px] left-[158px]"
        sx={{ width: 60 }}
        color="primary"
        variant="standard"
        type="text"
        label="69"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[64px] left-[278px]"
        sx={{ width: 60 }}
        color="primary"
        variant="standard"
        type="text"
        label="69"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[64px] left-[398px]"
        sx={{ width: 60 }}
        color="primary"
        variant="standard"
        type="text"
        label="69"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <p
        className="m-[0] absolute top-[128px] left-[38px] font-bold flex items-center justify-center w-[60px] h-[19px]"
        id="days"
      >
        Days
      </p>
      <p
        className="m-[0] absolute top-[128px] left-[158px] font-bold flex items-center justify-center w-[60px] h-[19px]"
        id="hours"
      >
        Hours
      </p>
      <p
        className="m-[0] absolute top-[128px] left-[278px] font-bold flex items-center justify-center w-[60px] h-[19px]"
        id="minutes"
      >
        Minutes
      </p>
      <p
        className="m-[0] absolute top-[128px] left-[398px] font-bold flex items-center justify-center w-[60px] h-[19px]"
        id="second"
      >
        Seconds
      </p>
    </div>
  );
};

export default CounntDown;
