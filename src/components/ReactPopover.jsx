// @flow strict
"use client";
import { useEffect, useRef, useState } from "react";

function ReactPopover({ children, content, trigger = "click" }) {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef(null);

  const handleMouseOver = () => {
    if (trigger === "hover") {
      setShow(true);
    }
  };

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      setShow(false);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    if (show) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show, wrapperRef]);

  const calculatePosition = () => {
    const rect = wrapperRef.current.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const popoverHeight = 200; // Set your popover height
    const popoverWidth = 200; // Set your popover width
    let topPosition = rect.bottom;
    let leftPosition = rect.left;

    // Adjust position based on screen dimensions
    if (topPosition + popoverHeight > screenHeight) {
      topPosition = rect.top - popoverHeight;
    }
    if (leftPosition + popoverWidth > screenWidth) {
      leftPosition = screenWidth - popoverWidth;
    }

    return { top: topPosition, left: leftPosition };
  };

  return (
    <div
      ref={wrapperRef}
      className="w-fit h-fit relative"
      onMouseLeave={handleMouseLeft}
    >
      <div onClick={() => setShow(!show)} onMouseEnter={handleMouseOver}>
        {children}
      </div>
      <div
        className={`max-w-[800px] h-fit absolute z-50 transition-all ease-in-out duration-500 ${
          show
            ? `top-[${calculatePosition().top}] left-[${
                calculatePosition().left
              }] opacity-100`
            : "opacity-0"
        }`}
      >
        <div className="rounded border-white border-2 text-nowrap bg-primary p-3 shadow-[10px_30px_150px_rgba(46,38,92,0.25)] mb-[10px]">
          {content}
        </div>
      </div>
    </div>
  );
}

export default ReactPopover;
