import { useRef, useState } from "react";

function ReactPopover({
  children,
  content,
  trigger = "click",
  after = "",
  before = "",
}) {
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

  const calculatePosition = () => {
    if (!wrapperRef.current) {
      return {
        top: 0,
        left: 0,
      };
    }
    const rect = wrapperRef.current.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const popoverHeight = 1300; // Set your popover height
    const popoverWidth = 1300; // Set your popover width
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
    <div className={"w-fit h-fit relative"} onMouseLeave={handleMouseLeft}>
      <div>
        <span>{before + " "}</span>
        <span onMouseEnter={handleMouseOver} ref={wrapperRef}>
          {children}
        </span>
        <span>{" " + after}</span>
      </div>
      <div
        className={`max-w-[800px] h-fit absolute z-50 transition-all ease-in-out duration-500`}
        style={{
          top: 30,
          left: calculatePosition().left,
          opacity: show ? 1 : 0,
          pointerEvents: show ? "auto" : "none",
        }}
      >
        <div className="rounded border-white border-2 text-nowrap bg-primary p-3 shadow-[10px_30px_150px_rgba(46,38,92,0.25)] mb-[10px]">
          {content}
        </div>
      </div>
    </div>
  );
}

export default ReactPopover;
