/*
 ! This is the Hero component, it contains the main text and the canvas.
 ! It contains the computer figure, purple circle, purple arrow and the background.
*/
import { motion } from "framer-motion";
import { styles } from "../styles/";
import { MainCanvas } from "./MainCanvas";

const Hero = () => {
  const getYearsOfExp = () => {
    var currentDate = new Date(); // Get the current date
    var august2021 = new Date(2020, 7, 1); // August is the 8th month (index 7), so we subtract 1 from the year

    var diffInMonths =
      (currentDate.getFullYear() - august2021.getFullYear()) * 12;
    diffInMonths -= august2021.getMonth(); // Subtract the month index of August 2021
    diffInMonths += currentDate.getMonth(); // Add the month index of the current date

    var diffInYears = diffInMonths / 12;
    var roundedYears = Math.ceil(diffInYears); // Round to the nearest highest integer

    return roundedYears;
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`flex flex-col justify-between h-screen`}>
        <div
          className={`px-5 flex flex-col justify-center w-full items-center mt-28`}
        >
          <h1
            className={`${styles.heroHeadText} text-white text-center text-lg md:text-xl`}
          >
            Hi, my name is <span className="text-secondary"> Mohammad</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-xs md:text-lg text-center leading-7`}
          >
            I love building unique web and mobile applications.
          </p>
        </div>
        <div className="h-full absolute -bottom-20">
          <MainCanvas />
        </div>
      </div>
      {/* This is the gif wheel to scroll*/}
      <div className="pr-5 absolute md:bottom-20 bottom-40 w-full flex justify-end items-end">
        <a href="#about">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="md:w-[64px] md:h-[64px] w-[45px] h-[45px] rounded-full border-4 border-white bg-secondary flex justify-center items-start p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-white transform rotate-270"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
