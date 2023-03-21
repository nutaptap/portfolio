import { LanguageContext } from "../App";
import { useContext } from "react";
import languageData from "../languageData";

function Skills() {
  const language = useContext(LanguageContext);

  return (
    <div className="skills-container">
      <div className="skills">
        <div className="section-title">
          <div className="line" />
          <h5>
            {(language === "en" && languageData.en.skills.title) ||
              (language === "es" && languageData.es.skills.title) ||
              (language === "ca" && languageData.ca.skills.title)}
          </h5>
        </div>
        <ul>
          <li>JavaScript</li>
          <li>Typescript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Git</li>
          <li>Firebase</li>
          <li>
            {(language === "en" && languageData.en.skills.responsive) ||
              (language === "es" && languageData.es.skills.responsive) ||
              (language === "ca" && languageData.ca.skills.responsive)}
          </li>
          <li>
            {(language === "en" && languageData.en.skills.accessibility) ||
              (language === "es" && languageData.es.skills.accessibility) ||
              (language === "ca" && languageData.ca.skills.accessibility)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
