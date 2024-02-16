import React, { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./hooks/GlobalContext";

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
        <ScrollToTop />
        <Suspense fallback={<div></div>}>
          <Navbar />
          <About />
          <Projects />
          <Contact />
        </Suspense>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
