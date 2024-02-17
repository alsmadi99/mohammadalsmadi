import React, { useEffect, useRef } from "react";

const MarqueeSlider = ({ data }) => {
  // const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("mouseover", () => {
        slider.style.animationPlayState = "paused";
      });
      slider.addEventListener("mouseout", () => {
        slider.style.animationPlayState = "running";
      });
    }
  }, []);

  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     slider.scrollLeft = (slideIndex * slider.scrollWidth) / (data.length * 2);
  //   }
  // }, [slideIndex]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setSlideIndex((prevIndex) => {
  //       let newIndex = (prevIndex + 1) % (data.length * 2);

  //       if (newIndex === data.length) {
  //         sliderRef.current.style.transition = "all 0.5s ease-in-out";
  //         sliderRef.current.scrollLeft = 0;

  //         setTimeout(() => {
  //           sliderRef.current.style.transition = "none";
  //         }, 500);
  //       }

  //       return newIndex;
  //     });
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className="relative w-full">
      <div ref={sliderRef} className="flex animate-marquee h-[180px]">
        {data.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 justify-start p-4 min-w-[250px] mr-10 opacity-100 md:opacity-50 transition-all duration-500 ease-in-out cursor-pointer select-none outline-none hover:opacity-100 transform-gpu hover:scale-110"
            onClick={() => {
              if (!cert.link) {
                return;
              }
              window.open(cert.link, "_blank");
            }}
          >
            <div className="w-full min-h-[90%] justify-center items-center flex bg-white rounded-lg">
              <img
                src={cert.image}
                alt={"cert name" + cert.name}
                className="max-w-[90%] max-h-[90%] shadow-3xl"
              />
            </div>
            <div className="text-center text-sm md:text-base">
              <p>{cert.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSlider;
