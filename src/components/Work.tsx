import { LanguageContext } from "../App";
import { useContext } from "react";
import Project from "./Poject";
import languageData from "../languageData";

function Work() {
  const language = useContext(LanguageContext);
  const projects = languageData[language].projects;

  return (
    <div className="work" id="work">
      <div className="section-title">
        <div className="line" />
        <h5>
          {(language === "en" && languageData.en.projectsTitle) ||
            (language === "es" && languageData.es.projectsTitle) ||
            (language === "ca" && languageData.ca.projectsTitle)}
        </h5>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}

export default Work;
