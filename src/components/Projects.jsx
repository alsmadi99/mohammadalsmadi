/*
  ! This component is the About me section of the portfolio.
*/
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import CarouselComponent from "./Carousel";
import { projects } from "../constants";

const Projects = () => {
  return (
    <motion.div
      style={{ height: "100%" }}
      className="flex flex-col h-full justify-between"
    >
      <motion.div variants={textVariant()} className="mt-12">
        <h1 className={styles.sectionHeadText}>
          Some of the projects I have worked on.
        </h1>
      </motion.div>

      <motion.div className="h-1/2">
        <CarouselComponent
          cards={projects}
          className="h-1/2 w-4/5 m-auto"
          offset={2}
          showArrows={false}
        />
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Projects, "projects");
