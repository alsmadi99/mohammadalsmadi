/*
  ! This component is the About me section of the portfolio.
*/
import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  const getYearsOfExperience = () => {
    const startDate = new Date("2020-08-01");
    const currentDate = new Date();
    const experienceInMilliseconds = currentDate - startDate;
    const experienceInYears =
      experienceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
    const experienceInWholeYears = Math.ceil(experienceInYears);
    return experienceInWholeYears;
  };

  return (
    <div className="h-full flex flex-col pt-5">
      <div variants={textVariant()}>
        <h1
          className={`text-white text-center md:text-6xl text-2xl font-black`}
        >
          Hi, my name is <span className="text-secondary"> Mohammad</span>
        </h1>

        <p
          className={`mt-2 text-white-100 md:text-2xl text-lg text-center leading-7`}
        >
          I love building unique applications.
        </p>
      </div>

      <div className="flex flex-col justify-between w-full gap-4 h-[60vh] mt-5">
        <div className="flex flex-col w-full gap-3">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary flex w-full md:w-full text-[11px] md:text-lg leading-normal md:leading-relaxed"
          >
            I'm a software engineer based in Jordan with around
            {" " + getYearsOfExperience()} years of hands-on experience. I've
            mastered JavaScript and TypeScript, working extensively with React,
            Node, and React Native. My portfolio includes building applications
            using various database engines like MongoDB and PostgreSQL.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary flex w-full md:w-full text-[11px] md:text-lg leading-normal md:leading-relaxed"
          >
            Team collaboration is something I truly enjoy, and I've had the
            privilege of working alongside incredibly talented individuals who
            have enriched my knowledge over the years. As solo working on
            projects isn't something that motivates me.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary flex w-full md:w-full text-[11px] md:text-lg leading-normal md:leading-relaxed"
          >
            Outside of coding, I enjoy playing video games and tackling
            freelance projects. I'm not much into standard applications;
            instead, I like taking on unique challenges. Learning new
            development skills is a hobby of mine, and I'm keen on getting
            involved in open-source projects.
          </motion.p>
        </div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-white flex w-full md:w-full text-[10px] md:text-sm"
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
