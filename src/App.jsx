import React, { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./hooks/GlobalContext";
import { ParallaxProvider } from "react-scroll-parallax";

const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const ScrollToTop = () => {
  const { hash } = useLocation();

  useEffect(() => {
    const sectionElement = document.getElementById(hash.split("#")[1]);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return null;
};

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <ParallaxProvider>
          <ScrollToTop />
          <Suspense fallback={<div></div>}>
            <div className="selection:bg-secondary selection:text-primary">
              <Navbar />
              <About />
              <Projects />
              <Contact />
            </div>
          </Suspense>
        </ParallaxProvider>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
