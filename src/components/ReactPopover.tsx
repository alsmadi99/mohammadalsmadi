import { ReactNode, useEffect, useState, useRef } from "react";
import { Popover } from "react-tiny-popover";
import LoadingList from "./LoadingList";

type ReactPopoverProps = {
  children: ReactNode;
  isOpen?: boolean;
  isLoading?: boolean;
  content: ReactNode;
  after?: string;
  before?: string;
  ariaLabel?: string;
};

const ReactPopover = ({
  children,
  isOpen = false,
  isLoading = false,
  content,
  after = "",
  before = "",
  ariaLabel,
}: ReactPopoverProps) => {
  const [show, setShow] = useState(false);
  const [newShow, setNewShow] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);

  const handleMouseOver = () => setShow(true);
  const handleMouseLeft = () => setShow(false);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setShow(!show);
    } else if (e.key === "Escape") {
      setShow(false);
      triggerRef.current?.focus();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setNewShow(show);
    }, 100);
  }, [show]);

  return (
    <div onMouseLeave={handleMouseLeft} className="">
      <span>{before + " "}</span>

      <Popover
        isOpen={show || isOpen}
        content={
          <div
            role="dialog"
            aria-label={ariaLabel || "Additional information"}
            className={`bg-darkBlue selection:bg-secondary selection:text-darkBlue overflow-y-hidden transition-all duration-500 ease-in-out transform opacity-${
              newShow || isOpen ? "100" : "0"
            } p-3 rounded border-2 border-offWhite shadow-lg`}
          >
            {isLoading ? (
              <LoadingList
                cellSizes={[
                  { percentage: 40, height: 20 },
                  { percentage: 100 },
                  { percentage: 40 },
                  { percentage: 70 },
                  { percentage: 40 },
                  { percentage: 70 },
                ]}
              />
            ) : (
              content
            )}
          </div>
        }
      >
        <span
          ref={triggerRef}
          onMouseEnter={handleMouseOver}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-expanded={show || isOpen}
          aria-haspopup="dialog"
          aria-label={ariaLabel}
          className="text-nowrap focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-darkBlue rounded"
        >
          {children}
        </span>
      </Popover>
      <span>{" " + after}</span>
    </div>
  );
};

export default ReactPopover;
