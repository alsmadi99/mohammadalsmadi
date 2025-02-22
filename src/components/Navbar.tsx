import { styles } from "../styles";
import { socials } from "../constants";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-none`}
    >
      <div className="w-full flex flex-row justify-between items-center">
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
                  className="h-7 w-7 md:h-10 md:w-10 opacity-80 transition-transform transform-gpu hover:scale-125 hover:opacity-100 cursor-pointer"
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
