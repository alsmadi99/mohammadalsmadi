/*
  ! This component is the About me section of the portfolio.
*/
import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import CarouselComponent from "./Carousel";
import { certificates, projects } from "../constants";
import CertificatesCarousel from "./CertificatesCarousel";

const Projects = () => {
  return (
    <>
      <div style={{ height: "100%" }}>
        <div variants={textVariant()}>
          <h1 className={styles.sectionHeadText}>
            Some of the projects I have worked on.
          </h1>
        </div>
        <CarouselComponent
          cards={projects}
          className="h-[70vh] w-[90vw] m-auto"
          offset={2}
          showArrows={false}
        />
      </div>
      <div className="w-[100vw]">
        <CertificatesCarousel certificates={certificates} />
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
