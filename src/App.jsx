import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import { BrowserRouter } from "react-router-dom";
import { About, Navbar, Projects, Contact } from "./components";
import { GlobalProvider } from "./hooks/GlobalContext";

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
    <GlobalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
