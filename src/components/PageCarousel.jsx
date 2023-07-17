import React, { useState } from "react";
import { motion } from "framer-motion";
import { tamm } from "../assets";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is the first project.",
    image: tamm,
    links: {
      ios: "#",
      android: "#",
      website: "#",
    },
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is the first project.",
    image: tamm,
    links: {
      ios: "#",
      android: "#",
      website: "#",
    },
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is the first project.",
    image: tamm,
    links: {
      ios: "#",
      android: "#",
      website: "#",
    },
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is the first project.",
    image: tamm,
    links: {
      ios: "#",
      android: "#",
      website: "#",
    },
  },
  {
    id: 5,
    title: "Project 5",
    description: "This is the first project.",
    image: tamm,
    links: {
      ios: "#",
      android: "#",
      website: "#",
    },
  },
  {
    id: 6,
    title: "Project 6",
    description: "This is the first project.",
    image: tamm,
    links: {
      ios: "#",
      android: "#",
      website: "#",
    },
  },
];

const ProjectsCarousel = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(
    Math.ceil(projects.length / 2)
  );

  const handleNext = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? 0 : prevIndex - 1
    );
  };

  const cardWidth = 100; // Adjust this value based on your card width

  console.log({ selectedProjectIndex });
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white rounded-lg"
        onClick={handlePrev}
      >
        &lt;
      </motion.button>

      <motion.div
        className="flex"
        style={{
          transform: `translateX(-${(selectedProjectIndex - 1) * cardWidth}px)`,
          transition: "transform 0.3s ease",
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={project.id}
            selected={selectedProjectIndex === project.id - 1}
            project={project}
            onClick={() => {
              setSelectedProjectIndex(index);
            }}
          />
        ))}
      </motion.div>

      <motion.button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white rounded-lg"
        onClick={handleNext}
      >
        &gt;
      </motion.button>
    </div>
  );
};

const Card = ({ project, selected, onClick }) => {
  const { id, title, description, image } = project;
  console.log({ selected });
  return (
    <motion.div
      className="flex-shrink-0"
      style={{
        width: "300px", // Adjust this value based on your card width
        opacity: selected ? 1 : 0.5,
        marginRight: "20px",
      }}
      whileHover={{ opacity: 0.8, cursor: "pointer" }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="border-2 border-transparent rounded-lg p-4">
        <img
          src={image}
          alt={title}
          className="h-32 w-32 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-secondary">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectsCarousel;
