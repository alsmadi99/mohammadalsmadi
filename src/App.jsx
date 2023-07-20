import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import { BrowserRouter } from "react-router-dom";
import { About, Hero, Navbar, LofiPlayer } from "./components";
import Projects from "./components/Projects";

if (!("THREE" in window) || !window.THREE) {
  window.THREE = THREE;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionElement = document.getElementById(pathname.slice(1));
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    let touchStartY = 0;
    const handleScroll = (event) => {
      const delta = Math.sign(event.wheelDelta || -event.detail);
      const sections = ["", "about", "projects"]; // Add more sections if needed

      // Skip touch move if user is in the first section
      if (window.location.hash === "#" || !window.location.hash) {
        return;
      }
      if (delta > 0) {
        // Scrolling up
        const currentSectionIndex = sections.indexOf(
          window.location.hash.substring(1)
        );
        if (currentSectionIndex > 0) {
          const prevSection = sections[currentSectionIndex - 1];
          window.location.hash = `#${prevSection}`;
        }
      } else if (delta < 0) {
        // Scrolling down
        const currentSectionIndex = sections.indexOf(
          window.location.hash.substring(1)
        );
        if (currentSectionIndex < sections.length - 1) {
          const nextSection = sections[currentSectionIndex + 1];
          window.location.hash = `#${nextSection}`;
        }
      }
    };

    const handleTouchStart = (event) => {
      // Skip touch move if user is in the first section
      if (window.location.hash === "#" || !window.location.hash) {
        return;
      }
      touchStartY = event.touches[0].clientY;
    };

    let touchMoveTimeoutId = null;
    const handleTouchMove = (event) => {
      // If there is an existing timeout, return and do nothing
      if (touchMoveTimeoutId !== null) {
        return;
      }
      // Skip touch move if user is in the first section
      if (window.location.hash === "#" || !window.location.hash) {
        return;
      }
      const touchEndY = event.touches[0].clientY;
      const touchDelta = touchEndY - touchStartY;
      const sections = ["", "about", "projects"]; // Add more sections if needed

      if (touchDelta > 0) {
        // Scrolling up
        const currentSectionIndex = sections.indexOf(
          window.location.hash.substring(1)
        );
        if (currentSectionIndex > 0) {
          const prevSection = sections[currentSectionIndex - 1];
          window.location.hash = `#${prevSection}`;
        }
      } else if (touchDelta < 0) {
        // Scrolling down
        const currentSectionIndex = sections.indexOf(
          window.location.hash.substring(1)
        );
        if (currentSectionIndex < sections.length - 1) {
          const nextSection = sections[currentSectionIndex + 1];
          window.location.hash = `#${nextSection}`;
        }
      }
      // Set a new timeout to prevent further function calls for a certain delay
      touchMoveTimeoutId = setTimeout(() => {
        touchMoveTimeoutId = null; // Reset timeout ID after the function call
      }, 500); // Adjust the delay (in milliseconds) as needed
    };

    window.addEventListener("mousewheel", handleScroll);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousewheel", handleScroll);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>
      <LofiPlayer />
    </BrowserRouter>
  );
};

export default App;
