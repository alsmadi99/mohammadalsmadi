import { ReactNode, useEffect, useState } from "react";
import { Popover } from "react-tiny-popover";
import LoadingList from "./LoadingList";

type ReactPopoverProps = {
  children: ReactNode;
  isOpen?: boolean;
  isLoading?: boolean;
  content: ReactNode;
  after?: string;
  before?: string;
};

const ReactPopover = ({
  children,
  isOpen = false,
  isLoading = false,
  content,
  after = "",
  before = "",
}: ReactPopoverProps) => {
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
    <div onMouseLeave={handleMouseLeft} className="">
      <span>{before + " "}</span>

      <Popover
        isOpen={show || isOpen}
        positions={["bottom", "top", "left", "right"]}
        content={
          <div
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
        <span onMouseEnter={handleMouseOver} className="text-nowrap">
          {children}
        </span>
      </Popover>
      <span>{" " + after}</span>
    </div>
  );
};

export default ReactPopover;
