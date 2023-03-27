import { LanguageContext } from "../App";
import { useContext, useEffect, useRef, useState } from "react";
import languageData from "../languageData";

function Skills() {
  const language = useContext(LanguageContext);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (entry.isIntersecting) {
      observer.disconnect();
    }
  };

  const options = {
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <div
      className={isVisible ? "visible skills-container" : "skills-container"}
      ref={containerRef}
    >
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
