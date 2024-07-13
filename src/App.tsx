import { LITLY_PROJECT_ID } from "./config";
import { Lit } from "litlyx";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

Lit.init(LITLY_PROJECT_ID);

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="selection:bg-darkBlue selection:text-offWhite overflow-x-hidden h-auto md:w-2/3 w-[100%] mx-auto px-2 md:px-0 flex flex-col justify-center items-center">
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default App;
