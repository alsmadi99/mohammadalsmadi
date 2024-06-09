/*
 ! This is the navbar component, it contains the logo and the navigation links.
 ! The navigation links are stored in the constants folder.
 ! All navbar code is written in this file.
 ! Everything is ready till now.
 */
import React from "react";
import { styles } from "../styles/";
import { icon } from "../assets/";
import useIsMobile from "../hooks/useIsMobile";
import { sections, socials } from "../constants";
import { useGlobalContext } from "../hooks/GlobalContext";

const Navbar = () => {
  const isMobile = useIsMobile();

  const { currentHash } = useGlobalContext();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 shadow-2xl border-b shadow-linear`}
      style={{
        userSelect: "none",
      }}
    >
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex-[1]">
          <a
            href="#about"
            className="flex items-center gap-4"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={icon}
              alt="logo"
              className={`w-8 h-8 md:w-10 md:h-10 object-container`}
            />
            <p className="hidden lg:hidden xl:flex text-white text-xs md:text-xl font-bold cursor-pointer pb-0 whitespace-nowrap">
              MOHAMMAD ALSMADI
            </p>
          </a>
        </div>

        <div className="flex flex-row justify-around items-center flex-[2] xs:flex-[3] drop-shadow-2xl">
          {sections.map((item, index) => (
            <p
              key={index}
              onClick={() => {
                window.location.hash = `#${item}`;
              }}
              className={`capitalize cursor-pointer text-xs md:text-lg ${
                currentHash?.includes(item)
                  ? "text-white text-shadow-lg shadow-secondary"
                  : "text-secondary"
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        {!isMobile && (
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
                    className="h-7 w-7 opacity-50 transition-transform transform-gpu hover:scale-125 hover:opacity-100 cursor-pointer"
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
