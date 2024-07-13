import { email } from "../constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const textSize = "text-xs md:text-lg";
  return (
    <footer className="bg-darkBlue w-[100vw] h-fit py-2 mt-4">
      <div className="flex flex-row w-full items-center justify-center gap-2">
        <p className={textSize}>&copy; {currentYear} Mohammad Alsmadi.</p>
        <a
          href={`mailto:${email}`}
          className={`text-secondary underline ${textSize}`}
        >
          {email}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
