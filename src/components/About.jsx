/*
  ! This component is the About me section of the portfolio.
*/
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  const getYearsOfExperience = () => {
    const startDate = new Date("2020-08-01");
    const currentDate = new Date();
    const experienceInMilliseconds = currentDate - startDate;
    const experienceInYears =
      experienceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    const experienceInWholeYears = Math.floor(experienceInYears);
    return experienceInWholeYears;
  };

  return (
    <div style={{ height: "100%" }}>
      <div variants={textVariant()}>
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

      <div className="flex flex-col justify-between w-full gap-1 md:gap-4 h-[60vh] mt-10">
        <div className="flex flex-col w-full gap-1 md:gap-5">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary flex w-full md:w-full text-[11px] md:text-xl leading-normal md:leading-relaxed"
          >
            I'm a software engineer with over {getYearsOfExperience()} years of
            hands-on experience. I'm all about diving into new tech and
            tinkering with AI tools. I've mastered JavaScript and TypeScript,
            working extensively with React, Node, and React Native. My portfolio
            includes building applications using various database engines like
            MongoDB and PostgreSQL.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary flex w-full md:w-full text-[11px] md:text-xl leading-normal md:leading-relaxed"
          >
            Team collaboration is something I truly enjoy, and I've had the
            privilege of working alongside incredibly talented individuals who
            have enriched my knowledge over the years. Leading features and
            projects, I've focused on constructing highly scalable, test-driven
            code.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary flex w-full md:w-full text-[11px] md:text-xl leading-normal md:leading-relaxed"
          >
            When I'm not coding I like to play video games and work on personal
            projects, as i like to work on unique projects as building standard
            applications is not something i like to do in my free time, instead
            i like to learn video game development as i have passion with video
            games and like to enhance my skills there and include ai tools with
            it.
          </motion.p>
        </div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-white flex w-full md:w-full text-[10px] md:text-lg"
        >
          Feel free to explore my portfolio to see some of the exciting projects
          I've worked on. If you have any questions or just want to chat, don't
          hesitate to reach out!
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
