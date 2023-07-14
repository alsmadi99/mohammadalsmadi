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
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5"></div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, my name is <span className="text-secondary"> Mohammad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I have over {`${getYearsOfExp()}`} years of experience in building
            web and mobile applications.
          </p>
        </div>
      </div>
      <MainCanvas />
      {/* This is the gif wheel to scroll*/}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
