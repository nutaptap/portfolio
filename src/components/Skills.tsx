import { LanguageContext } from "../App";
import { useContext, useEffect, useRef, useState } from "react";
import languageData from "../languageData";
import js from "../assets/js.png";
import ts from "../assets/typescript.png";
import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import reactIcon from "../assets/react.png";
import git from "../assets/git.png";
import firebase from "../assets/firebase.png";
import jest from "../assets/jest.svg";

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
          <li>
            <img src={js} /> JavaScript
          </li>
          <li>
            <img src={ts} /> Typescript
          </li>
          <li>
            <img src={html} /> HTML
          </li>
          <li>
            <img src={css} /> CSS
          </li>
          <li>
            <img src={reactIcon} /> React
          </li>
          <li>
            <img className="git-icon" src={git} /> Git
          </li>
          <li>
            <img src={firebase} /> Firebase
          </li>
          <li>
            <img src={jest} /> Jest
          </li>
          <li>
            {(language === "en" && languageData.en.skills.accessibility) ||
              (language === "es" && languageData.es.skills.accessibility) ||
              (language === "ca" && languageData.ca.skills.accessibility)}
          </li>
          <li>
            {(language === "en" && languageData.en.skills.responsive) ||
              (language === "es" && languageData.es.skills.responsive) ||
              (language === "ca" && languageData.ca.skills.responsive)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
