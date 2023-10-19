/*
 ! This is the navbar component, it contains the logo and the navigation links.
 ! The navigation links are stored in the constants folder.
 ! All navbar code is written in this file.
 ! Everything is ready till now.
 */
import React, { useContext } from "react";
import { LofiPlayerContext } from "./LofiPlayerProvider";
import { styles } from "../styles/";
import { icon } from "../assets/";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import useIsMobile from "../hooks/useIsMobile";
import { sections } from "../constants";
import { useGlobalContext } from "../hooks/GlobalContext";

const Navbar = () => {
  const { setIsPlaying, isPlaying } = useContext(LofiPlayerContext);
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
              className={`w-10 h-10 md:w-14 md:h-14 object-contain rounded-full border-secondary border-2`}
            />
            <p className="hidden lg:hidden xl:flex text-white text-xs md:text-lg font-bold cursor-pointer pb-0 whitespace-nowrap">
              Mohammad Alsmadi
            </p>
          </a>
        </div>

        <div className="flex flex-row justify-around items-center flex-[2] xs:flex-[3]">
          {sections.map((item, index) => (
            <p
              onClick={() => {
                window.location.hash = `#${item}`;
              }}
              key={index}
              className={`capitalize cursor-pointer ${
                currentHash?.includes(item) ? "text-white" : "text-secondary"
              }`}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="flex justify-end items-end flex-[1]">
          <div
            className="w-11 h-11 flex justify-center items-center bg-secondary border-white rounded-md border-2 cursor-pointer"
            onClick={() => {
              setIsPlaying((val) => !val);
            }}
          >
            {isPlaying ? (
              <FaVolumeHigh color="#FFFFFF" size={isMobile ? 20 : 30} />
            ) : (
              <FaVolumeXmark color="#FFFFFF" size={isMobile ? 20 : 30} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
