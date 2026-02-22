import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  KeyboardEvent,
} from "react";
import { Popover, PopoverPosition } from "react-tiny-popover";
import LoadingList from "./LoadingList";
import useIsMobile from "../hooks/useIsMobile";
import { usePopoverContext } from "../contexts/PopoverContext";

type PopoverAlign = "start" | "center" | "end";

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
  const [positionPriority, setPositionPriority] = useState<PopoverPosition[]>([
    "bottom",
    "top",
    "right",
    "left",
  ]);
  const [align, setAlign] = useState<PopoverAlign>("center");
  const [boundaryElement, setBoundaryElement] = useState<
    HTMLElement | undefined
  >(undefined);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const computePositionPriority = useCallback((): PopoverPosition[] => {
    if (isMobile) return ["bottom", "top"];
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return ["bottom", "top", "right", "left"];

    // Available space in the viewport (not the document).
    const topSpace = rect.top;
    const bottomSpace = window.innerHeight - rect.bottom;
    const leftSpace = rect.left;
    const rightSpace = window.innerWidth - rect.right;

    const vertical = [
      { pos: "bottom" as const, space: bottomSpace },
      { pos: "top" as const, space: topSpace },
    ].sort((a, b) => b.space - a.space);

    const horizontal = [
      { pos: "right" as const, space: rightSpace },
      { pos: "left" as const, space: leftSpace },
    ].sort((a, b) => b.space - a.space);

    // Prefer vertical placements first (more natural for tooltips),
    // but pick the one with the most space as the first attempt.
    return [
      vertical[0].pos,
      vertical[1].pos,
      horizontal[0].pos,
      horizontal[1].pos,
    ];
  }, [isMobile]);

  const computeAlign = useCallback((): PopoverAlign => {
    if (isMobile) return "start";
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect || window.innerWidth <= 0) return "center";

    // If the trigger is near an edge, align away from it to keep popover in view.
    const triggerCenterX = rect.left + rect.width / 2;
    const pct = triggerCenterX / window.innerWidth;
    if (pct >= 0.66) return "end";
    if (pct <= 0.34) return "start";
    return "center";
  }, [isMobile]);

  const updatePlacement = useCallback(() => {
    setPositionPriority(computePositionPriority());
    setAlign(computeAlign());
  }, [computeAlign, computePositionPriority]);

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
      updatePlacement();
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
        updatePlacement();
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

  useEffect(() => {
    setBoundaryElement(document.documentElement);
  }, []);

  const isActuallyOpen = useMemo(() => show || isOpen, [isOpen, show]);

  // Keep the position choice dynamic while open (scroll/resize).
  useEffect(() => {
    if (!isActuallyOpen) return;

    let rafId: number | null = null;
    const onViewportChange = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        updatePlacement();
      });
    };

    window.addEventListener("resize", onViewportChange);
    // Capture scroll events from scrollable parents too.
    window.addEventListener("scroll", onViewportChange, true);

    // Initial update when opening.
    onViewportChange();

    return () => {
      window.removeEventListener("resize", onViewportChange);
      window.removeEventListener("scroll", onViewportChange, true);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [isActuallyOpen, updatePlacement]);

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
        isOpen={isActuallyOpen}
        positions={positionPriority}
        align={align}
        padding={isMobile ? 12 : 8}
        boundaryInset={8}
        boundaryElement={boundaryElement}
        reposition
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
                updatePlacement();
                setShow(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                scheduleClose();
              }
            }}
            className={`bg-darkBlue text-offWhite selection:bg-secondary selection:text-darkBlue w-[min(420px,calc(100vw-16px))] max-w-[calc(100vw-16px)] md:w-auto md:max-w-[min(720px,90vw)] max-h-[80vh] overflow-hidden transition-all duration-500 ease-in-out transform opacity-${
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
          aria-expanded={isActuallyOpen}
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
