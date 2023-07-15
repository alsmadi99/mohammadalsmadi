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

const Navbar = () => {
  const { setIsPlaying, isPlaying } = useContext(LofiPlayerContext);
  const isMobile = useIsMobile();

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      style={{
        userSelect: "none",
      }}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <a
          href="#"
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
          <p className="text-white text-xs md:text-lg font-bold cursor-pointer flex pb-0">
            Mohammad Alsmadi
          </p>
        </a>
        <ul className="list-none sm:flex flex-row gap-10">
          <div
            className="p-2 bg-secondary border-white rounded-md border-4 cursor-pointer"
            onClick={() => {
              setIsPlaying((val) => !val);
            }}
          >
            {isPlaying ? (
              <FaVolumeHigh color="#FFFFFF" size={isMobile ? 15 : 30} />
            ) : (
              <FaVolumeXmark color="#FFFFFF" size={isMobile ? 15 : 30} />
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
