/*
 ! This is the navbar component, it contains the logo and the navigation links.
 ! The navigation links are stored in the constants folder.
 ! All navbar code is written in this file.
 ! Everything is ready till now.
 */
import React, { useContext, useEffect, useState } from "react";
import { LofiPlayerContext } from "./LofiPlayerProvider";
import { Link } from "react-router-dom";
import { styles } from "../styles/";
import { navLinks } from "../constants/";
import { logo, menu, close, icon } from "../assets/";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { setIsPlaying, isPlaying } = useContext(LofiPlayerContext);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-transparent`}
      style={{
        userSelect: "none",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-4"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={icon} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[17px] font-bold cursor-pointer flex mt-auto pb-0 mb-2">
            Mohammad Alsmadi
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <div
            className="p-2 bg-primary border-secondary rounded-md border-4 cursor-pointer"
            onClick={() => {
              setIsPlaying((val) => !val);
            }}
          >
            {isPlaying ? (
              <FaVolumeHigh color="#75C2F6" size={30} />
            ) : (
              <FaVolumeXmark color="#75C2F6" size={30} />
            )}
          </div>
        </ul>
        {/* This is the menu icon that appears on small screens, a div and a ul. */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] transition-all duration-300 ease-in-out`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}> {link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
