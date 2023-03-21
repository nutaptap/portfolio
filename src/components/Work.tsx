import { LanguageContext } from "../App";
import { useContext } from "react";
import languageData from "../languageData";
import repo from "../assets/repo.svg";
import cookThat from "../assets/cook-that.png";
import pomoglobo from "../assets/pomodoro.png";

function Work() {
  const language = useContext(LanguageContext);

  return (
    <div className="work" id="work">
      <div className="section-title">
        <div className="line" />
        <h5>
          {(language === "en" && languageData.en.projects.title) ||
            (language === "es" && languageData.es.projects.title) ||
            (language === "ca" && languageData.ca.projects.title)}
        </h5>
      </div>
      {/* Portfolio */}
      <div className="projects-container">
        <article className="project">
          <div>
            <a target="_blank">
              <h3>
                {(language === "en" &&
                  languageData.en.projects.portfolio.title) ||
                  (language === "es" &&
                    languageData.es.projects.portfolio.title) ||
                  (language === "ca" &&
                    languageData.ca.projects.portfolio.title)}
              </h3>
            </a>
            <p>
              {(language === "en" && languageData.en.projects.portfolio.text) ||
                (language === "es" &&
                  languageData.es.projects.portfolio.text) ||
                (language === "ca" && languageData.ca.projects.portfolio.text)}
            </p>
            <div className="tags">
              <h5>Typescript</h5>
              <h5>React</h5>
            </div>
          </div>
          <div>
            <img
              src="https://picsum.photos/450/300?"
              className="project-image"
            />
            <a target="_blank" className="project-links">
              <img src={repo}></img>
              GitHub
            </a>
          </div>
        </article>
        {/* Habit tracker */}
        <article className="project">
          <div>
            <img
              src="https://picsum.photos/450/300?"
              className="project-image"
            />
            <a target="_blank" className="project-links">
              <img src={repo}></img>
              GitHub
            </a>
          </div>
          <div>
            <a target="_blank">
              <h3>
                {(language === "en" &&
                  languageData.en.projects.habitTracker.title) ||
                  (language === "es" &&
                    languageData.es.projects.habitTracker.title) ||
                  (language === "ca" &&
                    languageData.ca.projects.habitTracker.title)}
              </h3>
            </a>
            <p>
              {(language === "en" &&
                languageData.en.projects.habitTracker.text) ||
                (language === "es" &&
                  languageData.es.projects.habitTracker.text) ||
                (language === "ca" &&
                  languageData.ca.projects.habitTracker.text)}
            </p>
            <div className="tags">
              <h5>Typescript</h5>
              <h5>React</h5>
              <h5>Firebase</h5>
            </div>
          </div>
        </article>
        {/* Pomoglobo */}
        <article className="project">
          <div>
            <a target="_blank" href="https://nutaptap.github.io/pomoglobo/">
              <h3>
                {(language === "en" &&
                  languageData.en.projects.pomoglobo.title) ||
                  (language === "es" &&
                    languageData.es.projects.pomoglobo.title) ||
                  (language === "ca" &&
                    languageData.ca.projects.pomoglobo.title)}
              </h3>
            </a>
            <p>
              {(language === "en" && languageData.en.projects.pomoglobo.text) ||
                (language === "es" &&
                  languageData.es.projects.pomoglobo.text) ||
                (language === "ca" && languageData.ca.projects.pomoglobo.text)}
            </p>
            <div className="tags">
              <h5>Javascript</h5>
              <h5>Freesound API</h5>
            </div>
          </div>
          <div>
            <a target="_blank" href="https://nutaptap.github.io/pomoglobo/">
              <img src={pomoglobo} className="project-image" />
            </a>
            <a
              target="_blank"
              href="https://github.com/nutaptap/pomoglobo"
              className="project-links"
            >
              <img src={repo}></img>
              GitHub
            </a>
          </div>
        </article>
        {/* Cook that */}
        <article className="project">
          <div>
            <a target="_blank" href="https://nutaptap.github.io/cook-that/">
              <img src={cookThat} className="project-image" />
            </a>
            <a
              target="_blank"
              href="https://github.com/nutaptap/cook-that"
              className="project-links"
            >
              <img src={repo}></img>
              GitHub
            </a>
          </div>
          <div>
            <a target="_blank" href="https://nutaptap.github.io/cook-that/">
              <h3>
                {(language === "en" &&
                  languageData.en.projects.cookThat.title) ||
                  (language === "es" &&
                    languageData.es.projects.cookThat.title) ||
                  (language === "ca" &&
                    languageData.ca.projects.cookThat.title)}
              </h3>
            </a>
            <p>
              {(language === "en" && languageData.en.projects.cookThat.text) ||
                (language === "es" && languageData.es.projects.cookThat.text) ||
                (language === "ca" && languageData.ca.projects.cookThat.text)}
            </p>
            <div className="tags">
              <h5>Javascript</h5>
              <h5>Spoonacular API</h5>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Work;
