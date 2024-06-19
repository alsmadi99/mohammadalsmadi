import { useEffect, useState } from 'react';
import { Popover } from 'react-tiny-popover';

function ReactPopover({
  children,
  isOpen = false,
  content,
  after = '',
  before = '',
}) {
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
      <span>{before + ' '}</span>

      <Popover
        isOpen={show || isOpen}
        positions={['bottom', 'top', 'left', 'right']}
        content={
          <div
            className={`bg-darkBlue selection:bg-secondary selection:text-darkBlue overflow-y-hidden transition-all duration-500 ease-in-out transform opacity-${
              newShow ? '100' : '0'
            } p-3 rounded border-2 border-offWhite shadow-lg`}
          >
            {content}
          </div>
        }
      >
        <span onMouseEnter={handleMouseOver}>{children}</span>
      </Popover>
      <span>{' ' + after}</span>
    </div>
  );
}

export default ReactPopover;
