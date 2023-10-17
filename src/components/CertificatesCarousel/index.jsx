import { Slider } from "infinite-react-carousel";
import React, { useMemo } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import "./style.css";

const CertificatesCarousel = ({ certificates }) => {
  const isMobile = useIsMobile();
  const settings = useMemo(() => {
    return {
      arrows: false,
      arrowsBlock: false,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      duration: 500,
      slidesPerRow: isMobile ? 1 : 5,
      wheel: true,
    };
  }, [isMobile]);

  let startX = 0;

  const handleMouseDown = (e) => {
    startX = e.clientX;
  };

  const handleMouseUp = (e, link) => {
    const endX = e.clientX;
    if (Math.abs(startX - endX) < 5 && !!link) {
      window.open(link, "_blank");
    }
  };

  return (
    <Slider {...settings}>
      {certificates.map((cert, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-4 opacity-100 md:opacity-50 transition-opacity duration-500 ease-in-out cursor-pointer select-none h-[200px] outline-none hover:opacity-100"
          onMouseDown={handleMouseDown}
          onMouseUp={(e) => handleMouseUp(e, cert.link)}
        >
          <div className="flex flex-col items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110">
            <img
              src={cert.image}
              alt={cert.name}
              className="image-overlay w-[20%] md:w-[50%] shadow-3xl"
            />
            <div className="text-center mt-2 text-sm md:text-base">
              <p className="mt-2">{cert.name}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CertificatesCarousel;
