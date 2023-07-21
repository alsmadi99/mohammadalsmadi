import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { AiOutlineLink, AiFillAndroid, AiFillApple } from "react-icons/ai";

const Card = ({ imagen, title, description, link, android, ios }) => {
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
      className="flex flex-col justify-between bg-secondary w-[18rem] p-8 pt-0 h-[500px] shadow-lg rounded-md cursor-pointer"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div className="w-full">
        <img src={imagen} alt="" className="rounded-xl -mt-10" />
        <div className="mt-5 h-full">
          <h2
            className={`text-${
              title.length > 20 ? "sm" : "lg"
            } font-bold mt-2 w-full`}
          >
            {title}
          </h2>
          <p className="mt-2 text-sm w-full">{description}</p>
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={() => {
            window.open(link, "_blank");
          }}
          className="mt-4 w-full flex flex-row justify-between items-center bg-primary hover:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-white hover:white rounded"
        >
          View Website
          <AiOutlineLink />
        </button>
        {!!android && !!ios && (
          <div className="flex flex-row w-full justify-between mt-2">
            <button
              onClick={() => {
                window.open(link, "_blank");
              }}
              className="w-[45%] flex text-xs flex-row justify-between items-center bg-primary hover:bg-blue-500 py-2 px-2 border-b-4 border-white hover:white rounded"
            >
              iOS
              <AiFillApple size={17} />
            </button>
            <button
              onClick={() => {
                window.open(link, "_blank");
              }}
              className="w-[45%] flex text-xs flex-row justify-between items-center bg-primary hover:bg-blue-500 py-2 px-2 border-b-4 border-white hover:white rounded"
            >
              Android
              <AiFillAndroid size={17} />
            </button>
          </div>
        )}
      </div>
    </animated.div>
  );
};

export default Card;
