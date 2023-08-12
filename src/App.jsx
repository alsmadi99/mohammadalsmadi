import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Hero,
  Navbar,
  LofiPlayer,
  Projects,
  Contact,
} from "./components";

if (!("THREE" in window) || !window.THREE) {
  window.THREE = THREE;
}

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
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <LofiPlayer />
    </BrowserRouter>
  );
};

export default App;
