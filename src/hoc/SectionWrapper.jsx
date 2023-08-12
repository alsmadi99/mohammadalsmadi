import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useEffect, useRef } from "react";

const StarWrapper = (Component, idName) =>
  function HOC(props) {
    const sectionRef = useRef(null);
    const debounceTimer = useRef(null);

    useEffect(() => {
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          console.log({ entry, idName });
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            window.location.hash = idName;
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
        style={{ height: "100vh" }}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={
          !!idName ? `sm:px-12 px-4 sm:py-12 py-7 mx-auto relative z-0` : ""
        }
      >
        <span id={idName}>&nbsp;</span>

        <Component {...props} />
      </motion.section>
    );
  };

export default StarWrapper;
