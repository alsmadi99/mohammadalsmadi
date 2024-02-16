/*
  ! This component is the About me section of the portfolio.
*/
import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import CarouselComponent from "./Carousel";
import { certificates, projects } from "../constants";
import CertificatesCarousel from "./CertificatesCarousel";

const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="h-full w-3/4 m-auto">
        <div>
          <h1 className={styles.sectionHeadText}>Projects I have worked on.</h1>
        </div>
        <CarouselComponent
          cards={projects}
          className="h-[70vh]"
          offset={2}
          showArrows={false}
        />
      </div>

      <div className="h-full w-3/4 m-auto">
        <h1 className={styles.sectionHeadText}>Certifications.</h1>
      </div>
      <div className="w-[100vw]">
        <CertificatesCarousel certificates={certificates} />
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
