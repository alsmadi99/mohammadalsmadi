import { styles } from "../styles";
import { github_sponsor_link, socials } from "../constants";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-none`}
    >
      <div className="w-full flex flex-row justify-between items-center">
        <a
          className="flex flex-row items-center gap-2 opacity-80 transition-transform transform-gpu duration-75 hover:scale-110 hover:opacity-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-darkBlue rounded px-2"
          href={github_sponsor_link}
          target="_blank"
          rel="noreferrer"
          aria-label="Sponsor on GitHub"
        >
          <FaGithub size={25} color="white" />
          <div className="font-medium white bg-transparent rounded text-sm">
            Sponsor
          </div>
        </a>
        <div className="flex justify-end items-end flex-[1]">
          <div className="flex flex-row items-center gap-4">
            {socials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Icon
                  key={index}
                  onClick={() => {
                    window.open(item.link, "_blank");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      window.open(item.link, "_blank");
                    }
                  }}
                  tabIndex={0}
                  role="link"
                  aria-label={`Visit ${item.text} profile`}
                  className="h-7 w-7 md:h-10 md:w-10 opacity-80 transition-transform transform-gpu duration-75 hover:scale-125 hover:opacity-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-darkBlue rounded"
                />
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
