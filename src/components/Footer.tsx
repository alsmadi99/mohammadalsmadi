import { MdOutlineEmail } from "react-icons/md";

import { email } from "../constants";
import useIsMobile from "../hooks/useIsMobile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  const textSize = "text-xs md:text-lg text-center";
  return (
    <footer className="bg-darkBlue w-full h-fit py-5 md:py-2 mt-4 px-4">
      <div className="flex flex-row w-full items-center justify-between">
        <p className={textSize}>&copy; {currentYear} Mohammad Alsmadi.</p>
        <a
          href={`mailto:${email}`}
          className={`flex flex-row items-center gap-1 text-secondary hover:text-primary underline ${textSize}`}
        >
          <MdOutlineEmail size={isMobile ? 18 : 22} />

          {email}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
