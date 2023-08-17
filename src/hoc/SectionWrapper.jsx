import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { useEffect, useRef } from "react";
import { useGlobalContext } from "../hooks/GlobalContext";

const StarWrapper = (Component, idName) =>
  function HOC(props) {
    const sectionRef = useRef(null);
    const { setCurrentHash } = useGlobalContext();

    useEffect(() => {
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setCurrentHash(idName);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5, // Trigger when 50% of the section is in view
        rootMargin: "0px", // No margins
      });

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      // Clean up
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

    return (
      <motion.section
        ref={sectionRef}
        style={{ minHeight: "100vh" }} // Ensure at least full viewport height
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={
          !!idName
            ? `sm:px-12 px-4 sm:py-12 py-7 mx-auto relative z-0 flex flex-col justify-center items-center`
            : ""
        }
      >
        <span id={idName}>&nbsp;</span>

        <Component {...props} />
      </motion.section>
    );
  };

export default StarWrapper;
