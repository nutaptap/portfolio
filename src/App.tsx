import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, createContext, useEffect } from "react";
import { LanguageType } from "./types/types";
import { useParams } from "react-router-dom";

export const LanguageContext = createContext<LanguageType>("en");

function App() {
  const { lang } = useParams<{ lang: string }>();
  const [language, setLanguage] = useState<LanguageType>("en");

  function handleLanguageChange(newLanguage: LanguageType) {
    setLanguage(newLanguage);
    console.log(newLanguage);
  }

  useEffect(() => {
    if (lang === "en" || lang === "es" || lang === "ca") {
      setLanguage(lang as LanguageType);
    }
  }, [lang]);

  return (
    <div className="app" id="app">
      <LanguageContext.Provider value={language}>
        <NavBar />
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
