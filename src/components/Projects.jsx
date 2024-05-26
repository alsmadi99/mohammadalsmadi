import React, { Suspense, lazy } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates, projects } from "../constants";
import MarqueeSlider from "./MarqueeSlider";

const LazyCarouselComponent = lazy(() => import("./Carousel"));

const Projects = () => {
  return (
    <div className="flex flex-col">
      <div className="h-full w-3/4 m-auto">
        <div>
          <h1 className={styles.sectionHeadText}>Projects I worked on.</h1>
        </div>
        <Suspense fallback={<div>Loading Projects Carousel...</div>}>
          <LazyCarouselComponent
            cards={projects}
            className="h-[70vh]"
            offset={2}
            showArrows={false}
          />
        </Suspense>
      </div>

      <div className="h-full w-3/4 m-auto">
        <h1 className={styles.sectionHeadText}>Certifications.</h1>
      </div>
      <div className="w-[100vw]">
        <MarqueeSlider data={certificates.concat(certificates)} />
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
