/*
  ! This component is the About me section of the portfolio.
*/
import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { tamm } from "../assets";
import ProjectsCarousel from "./PageCarousel";

const cardData = [
  {
    image: tamm,
    title: "Card 1",
    description: "Description of Card 1",
    iosLink: "ios_link_1",
    androidLink: "android_link_1",
    websiteLink: "website_link_1",
  },
  // Add data for other cards
];

const Projects = () => {
  return (
    <motion.div style={{ height: "100%" }}>
      <motion.div variants={textVariant()} className="mt-12">
        <h2 className={styles.sectionHeadText}>Projects I have worked on.</h2>
      </motion.div>

      <ProjectsCarousel />
    </motion.div>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <motion.div
        style={{ position: "relative", width: "80%", height: "400px" }}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            cardData={card}
            isSelected={index === currentIndex}
          />
        ))}
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <motion.button onClick={handlePrev} style={{ zIndex: 10 }}>
            {/* Render your left arrow icon here */}
          </motion.button>
          <motion.button onClick={handleNext} style={{ zIndex: 10 }}>
            {/* Render your right arrow icon here */}
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Card = ({ cardData, isSelected }) => {
  const { image, title, description, iosLink, androidLink, websiteLink } =
    cardData;

  const cardWidth = isSelected ? "400px" : "200px";
  const cardOpacity = isSelected ? 1 : 0.5;
  const cardZIndex = isSelected ? 1 : 0;
  const cardScale = isSelected ? 1.2 : 1;

  return (
    <motion.div
      style={{
        position: "absolute",
        width: cardWidth,
        height: "300px",
        borderRadius: "8px",
        background: `url(${image}) center/cover no-repeat`,
        opacity: cardOpacity,
        zIndex: cardZIndex,
        scale: cardScale,
        cursor: "pointer",
      }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Render card content here, including title, description, and links */}
      <div style={{ padding: "16px", color: "#fff" }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <a href={iosLink} target="_blank" rel="noopener noreferrer">
            iOS
          </a>
          <a href={androidLink} target="_blank" rel="noopener noreferrer">
            Android
          </a>
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Projects, "projects");
