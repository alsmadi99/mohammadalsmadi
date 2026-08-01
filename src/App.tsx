import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PopoverProvider } from "./contexts/PopoverContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <PopoverProvider>
        <div className="flex flex-col text-offWhite selection:bg-darkBlue selection:text-offWhite overflow-x-hidden">
          <Navbar />
          <main className="xl:w-2/3 sm:w-[90%] xs:w-[100%] mx-auto px-2 md:px-0 flex flex-col justify-center items-center">
            <About />
            <Footer />
            <script
              src="https://www.meetmizan.com/embed/mizan-embed.js"
              data-partner="mohammadalsmadi"
              data-lang="en"
              data-currency="USD"
              data-primary="#123456"
              data-logo="https://mohammadalsmadi.com/logo.svg"
              data-cta-label="Give your Zakat"
              data-cta-url="https://mohammadalsmadi.com/donate"
              async
            ></script>
          </main>
        </div>
      </PopoverProvider>
    </ThemeProvider>
  );
};

export default App;
