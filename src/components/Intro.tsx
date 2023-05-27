import { LanguageContext } from "../App";
import { useContext } from "react";
import languageData from "../languageData";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Intro() {
  const language = useContext(LanguageContext);

  return (
    <div className="intro">
      <h5>
        {(language === "en" && languageData.en.intro.greeting) ||
          (language === "es" && languageData.es.intro.greeting) ||
          (language === "ca" && languageData.ca.intro.greeting)}
      </h5>
      <h2>Nuria</h2>
      <h2>Fernández Granell</h2>
      <h3>
        {(language === "en" && languageData.en.intro.subtitle) ||
          (language === "es" && languageData.es.intro.subtitle) ||
          (language === "ca" && languageData.ca.intro.subtitle)}
      </h3>
      <div className="intro-divider" />
      <div className="intro-links">
        <a target="_blank" href="https://github.com/nutaptap">
          <img src={github}></img>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/nuriafg/">
          <img src={linkedin}></img>
        </a>
      </div>
    </div>
  );
}

export default Intro;
