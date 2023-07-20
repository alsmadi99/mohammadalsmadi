import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { AiOutlineLink } from "react-icons/AI";

const Card = ({ imagen, title, description, link }) => {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className="flex flex-col justify-between bg-secondary w-64 p-8 pt-0 h-[500px] shadow-lg rounded-md cursor-pointer"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" className="rounded-xl -mt-10" />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="mt-2 text-sm w-full">{description}</p>

      <button
        onClick={() => {
          window.open(link, "_blank");
        }}
        className="mt-4 flex flex-row justify-between items-center bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-white hover:white rounded"
      >
        View Website
        <AiOutlineLink />
      </button>
    </animated.div>
  );
};

export default Card;
