import { useEffect, useState } from "react";
import { Popover } from "react-tiny-popover";

function ReactPopover({ children, content, after = "", before = "" }) {
  const [show, setShow] = useState(false);
  const [newShow, setNewShow] = useState(false);

  const handleMouseOver = () => setShow(true);
  const handleMouseLeft = () => setShow(false);

  useEffect(() => {
    setTimeout(() => {
      setNewShow(show);
    }, 100);
  }, [show]);

  return (
    <div onMouseLeave={handleMouseLeft}>
      <span>{before + " "}</span>

      <Popover
        isOpen={show}
        positions={["top", "bottom", "left", "right"]}
        content={
          <div
            className={`max-h-[400px] overflow-y-auto transition-all duration-500 ease-in-out transform opacity-${
              newShow ? "100" : "0"
            } bg-primary p-3 rounded border-2 border-white shadow-lg`}
          >
            {content}
          </div>
        }
      >
        <span onMouseEnter={handleMouseOver}>{children}</span>
      </Popover>
      <span>{" " + after}</span>
    </div>
  );
}

export default ReactPopover;
