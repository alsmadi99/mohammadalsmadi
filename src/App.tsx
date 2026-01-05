import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PopoverProvider } from "./contexts/PopoverContext";

const App = () => {
  return (
    <PopoverProvider>
      <div className="flex flex-col selection:bg-darkBlue selection:text-offWhite overflow-x-hidden">
        <Navbar />
        <main className="xl:w-2/3 sm:w-[90%] xs:w-[100%] mx-auto px-2 md:px-0 flex flex-col justify-center items-center">
          <About />
          <Footer />
        </main>
      </div>
    </PopoverProvider>
  );
};

export default App;
