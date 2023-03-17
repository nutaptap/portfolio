import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, createContext } from "react";
import { LanguageType } from "./types/types";

const LanguageContext = createContext<LanguageType>("en");

function App() {
  const [language, setLanguage] = useState<LanguageType>("en");

  function handleLanguageChange(newLanguage: LanguageType) {
    setLanguage(newLanguage);
  }

  return (
    <div className="app">
      <LanguageContext.Provider value={language}>
        <NavBar onLanguageChange={handleLanguageChange} />
        <Intro />
        <Skills />
        <Work />
        <About />
        <Contact />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
