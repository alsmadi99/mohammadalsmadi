import { ReactNode, useEffect, useState, useRef, KeyboardEvent } from "react";
import { Popover } from "react-tiny-popover";
import LoadingList from "./LoadingList";
import useIsMobile from "../hooks/useIsMobile";
import { usePopoverContext } from "../contexts/PopoverContext";

type ReactPopoverProps = {
  children: ReactNode;
  isOpen?: boolean;
  isLoading?: boolean;
  content: ReactNode;
  after?: string;
  before?: string;
  ariaLabel?: string;
  popoverId?: string;
};

const ReactPopover = ({
  children,
  isOpen = false,
  isLoading = false,
  content,
  after = "",
  before = "",
  ariaLabel,
  popoverId = "",
}: ReactPopoverProps) => {
  const [show, setShow] = useState(false);
  const [newShow, setNewShow] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const isMobile = useIsMobile();
  const { openPopoverId, setOpenPopoverId } = usePopoverContext();

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    if (isMobile) return;
    clearCloseTimeout();
    // Small delay so users can move into the popover without it closing.
    closeTimeoutRef.current = window.setTimeout(() => {
      setShow(false);
    }, 150);
  };

  const handleMouseOver = () => {
    if (!isMobile) {
      clearCloseTimeout();
      setShow(true);
    }
  };
  const handleMouseLeft = () => {
    if (!isMobile) {
      scheduleClose();
    }
  };
  const handleClick = () => {
    if (isMobile) {
      if (show) {
        setShow(false);
        setOpenPopoverId(null);
      } else {
        // Close any other open popover first
        setOpenPopoverId(popoverId);
        setShow(true);
      }
    }
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isMobile) {
        if (show) {
          setShow(false);
          setOpenPopoverId(null);
        } else {
          setOpenPopoverId(popoverId);
          setShow(true);
        }
      } else {
        setShow(!show);
      }
    } else if (e.key === "Escape") {
      setShow(false);
      if (isMobile) {
        setOpenPopoverId(null);
      }
      triggerRef.current?.focus();
    }
  };

  useEffect(() => {
    const t = window.setTimeout(() => {
      setNewShow(show);
    }, 100);
    return () => window.clearTimeout(t);
  }, [show]);

  // Close this popover if another one opens on mobile
  useEffect(() => {
    if (isMobile && openPopoverId !== popoverId && show) {
      setShow(false);
    }
  }, [isMobile, openPopoverId, popoverId, show]);

  // Handle click outside on mobile
  const handleClickOutside = () => {
    if (isMobile && show) {
      setShow(false);
      setOpenPopoverId(null);
    }
  };

  return (
    <div className="relative">
      <span>{before + " "}</span>

      <Popover
        isOpen={show || isOpen}
        containerClassName="popover-container"
        containerStyle={{ zIndex: "9999" } as Partial<CSSStyleDeclaration>}
        onClickOutside={isMobile ? handleClickOutside : undefined}
        clickOutsideCapture={isMobile}
        content={
          <div
            role="dialog"
            aria-label={ariaLabel || "Additional information"}
            onMouseEnter={() => {
              if (!isMobile) {
                clearCloseTimeout();
                setShow(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                scheduleClose();
              }
            }}
            className={`bg-darkBlue selection:bg-secondary selection:text-darkBlue max-h-80 overflow-y-auto overscroll-contain transition-all duration-500 ease-in-out transform opacity-${
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
          onMouseLeave={handleMouseLeft}
          onClick={handleClick}
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
