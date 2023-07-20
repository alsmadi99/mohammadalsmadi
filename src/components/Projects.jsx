/*
  ! This component is the About me section of the portfolio.
*/
import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { carers, caterthumb, neom, sta, tamm } from "../assets";
import Card from "./Card";
import CarouselComponent from "./Carousel";

const projects = [
  {
    key: "1",
    content: (
      <Card
        imagen={tamm}
        link="https://www.tamm.abudhabi/"
        title="Tamm"
        description="A unified system helping you find Abu Dhabi government services and information"
      />
    ),
  },
  {
    key: "2",
    content: (
      <Card
        imagen={carers}
        link="https://carers.care/"
        title="Carers"
        description="Carers is a Home Care Digital Solution that provides reliable, affordable, and secure home care experiences for Care Receivers, Home Care Agencies, and Care Providers."
      />
    ),
  },
  {
    key: "3",
    content: (
      <Card
        imagen={caterthumb}
        link="https://www.caterthumb.com/"
        title="CaterThumb"
        description="
        Cater Thumb is an all-in-one SAAS E-procurement platform connecting Hotel and Restaurant buyers with suppliers, offering a marketplace for F&B services, non-food supplies, and equipment."
      />
    ),
  },
  {
    key: "4",
    content: (
      <Card
        imagen={neom}
        link="https://www.neom.com"
        title="Neom (OXAGON)"
        description="A city in neom, oxagon will be a new paradigm where people, industries and technology come together in harmony with nature."
      />
    ),
  },
  {
    key: "5",
    content: (
      <Card
        imagen={sta}
        link="https://www.sta.gov.sa"
        title="Saudi Tourism Authority"
        description="STA was established to support the growth of the travel and tourism sector by serving the needs of tourism companies and other commercial partners."
      />
    ),
  },
];

const Projects = () => {
  return (
    <motion.div
      style={{ height: "100%" }}
      className="flex flex-col h-full justify-between"
    >
      <motion.div variants={textVariant()} className="mt-12">
        <h1 className={styles.sectionHeadText}>Projects I have worked on.</h1>
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
