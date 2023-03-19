import { LanguageContext } from "../App";
import { useContext } from "react";
import languageData from "../languageData";
import cvpic from "../assets/cvpic.png";

function About() {
  const language = useContext(LanguageContext);

  return (
    <div className="about">
      <img className="picture" src={cvpic} alt="Nuria" />
      <div>
        <div className="section-title">
          <div className="line" />
          <h4>
            {(language === "en" && languageData.en.about.title) ||
              (language === "es" && languageData.es.about.title) ||
              (language === "ca" && languageData.ca.about.title)}
          </h4>
        </div>
        <p>
          👋{" "}
          {(language === "en" && languageData.en.about.text1) ||
            (language === "es" && languageData.es.about.text1) ||
            (language === "ca" && languageData.ca.about.text1)}
          <br />
          {(language === "en" && languageData.en.about.text2) ||
            (language === "es" && languageData.es.about.text2) ||
            (language === "ca" && languageData.ca.about.text2)}
          <br />
          {(language === "en" && languageData.en.about.text3) ||
            (language === "es" && languageData.es.about.text3) ||
            (language === "ca" && languageData.ca.about.text3)}
          <br />
          {(language === "en" && languageData.en.about.text4) ||
            (language === "es" && languageData.es.about.text4) ||
            (language === "ca" && languageData.ca.about.text4)}
          <br />
          {(language === "en" && languageData.en.about.text5) ||
            (language === "es" && languageData.es.about.text5) ||
            (language === "ca" && languageData.ca.about.text5)}
        </p>
        <button type="button">CV</button>
      </div>
    </div>
  );
}

export default About;
