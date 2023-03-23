import { LanguageContext } from "../App";
import { useContext } from "react";
import languageData from "../languageData";

function About() {
  const language = useContext(LanguageContext);

  return (
    <div className="about-container">
      <div className="about" id="about">
        <div className="picture" />
        <div className="about-text">
          <div className="section-title">
            <div className="line" />
            <h5>
              {(language === "en" && languageData.en.about.title) ||
                (language === "es" && languageData.es.about.title) ||
                (language === "ca" && languageData.ca.about.title)}
            </h5>
          </div>
          <p>
            👋{" "}
            {(language === "en" && languageData.en.about.text1) ||
              (language === "es" && languageData.es.about.text1) ||
              (language === "ca" && languageData.ca.about.text1)}
          </p>
          <p>
            {(language === "en" && languageData.en.about.text2) ||
              (language === "es" && languageData.es.about.text2) ||
              (language === "ca" && languageData.ca.about.text2)}
          </p>
          <p>
            {(language === "en" && languageData.en.about.text3) ||
              (language === "es" && languageData.es.about.text3) ||
              (language === "ca" && languageData.ca.about.text3)}{" "}
            {(language === "en" && languageData.en.about.text4) ||
              (language === "es" && languageData.es.about.text4) ||
              (language === "ca" && languageData.ca.about.text4)}
          </p>
          <p>
            {(language === "en" && languageData.en.about.text5) ||
              (language === "es" && languageData.es.about.text5) ||
              (language === "ca" && languageData.ca.about.text5)}
          </p>
          <button type="button">
            <a target="_blank" href="">
              CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
