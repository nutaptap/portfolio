import { LanguageContext } from "../App";
import { useContext } from "react";
import languageData from "../languageData";
import repo from "../assets/repo.svg";

function Work() {
  const language = useContext(LanguageContext);

  return (
    <div className="work">
      <div className="section-title">
        <div className="line" />
        <h4>
          {(language === "en" && languageData.en.projects.title) ||
            (language === "es" && languageData.es.projects.title) ||
            (language === "ca" && languageData.ca.projects.title)}
        </h4>
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
              <h4>Typescript</h4>
              <h4>React</h4>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/450/300?grayscale" />
            <a target="_blank">
              <img src={repo}></img>
              <h4>GitHub</h4>
            </a>
          </div>
        </article>
        {/* Habit tracker */}
        <article className="project">
          <div>
            <img src="https://picsum.photos/450/300?grayscale" />
            <a target="_blank">
              <img src={repo}></img>
              <h4>GitHub</h4>
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
              <h4>Typescript</h4>
              <h4>React</h4>
            </div>
          </div>
        </article>
        {/* Pomoglobo */}
        <article className="project">
          <div>
            <a target="_blank">
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
              <h4>Typescript</h4>
              <h4>React</h4>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/450/300?grayscale" />
            <a target="_blank">
              <img src={repo}></img>
              <h4>GitHub</h4>
            </a>
          </div>
        </article>
        {/* Cook that */}
        <article className="project">
          <div>
            <img src="https://picsum.photos/450/300?grayscale" />
            <a target="_blank">
              <img src={repo}></img>
              <h4>GitHub</h4>
            </a>
          </div>
          <div>
            <a target="_blank">
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
              <h4>Typescript</h4>
              <h4>React</h4>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Work;
