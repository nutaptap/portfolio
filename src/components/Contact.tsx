import { LanguageContext } from "../App";
import { useContext } from "react";
import languageData from "../languageData";

function Contact() {
  const language = useContext(LanguageContext);

  return (
    <div className="contact" id="contact">
      <div className="section-title">
        <div className="line" />
        <h5>
          {(language === "en" && languageData.en.contact.title) ||
            (language === "es" && languageData.es.contact.title) ||
            (language === "ca" && languageData.ca.contact.title)}
        </h5>
      </div>
      <div className="contact-container">
        <h4>
          {(language === "en" && languageData.en.contact.firstHeading) ||
            (language === "es" && languageData.es.contact.firstHeading) ||
            (language === "ca" && languageData.ca.contact.firstHeading)}
        </h4>
        <h3>
          {(language === "en" && languageData.en.contact.secondHeading) ||
            (language === "es" && languageData.es.contact.secondHeading) ||
            (language === "ca" && languageData.ca.contact.secondHeading)}
        </h3>
        <button type="button">
          <a href="mailto:nutaptap@gmail.com">
            {(language === "en" && languageData.en.contact.button) ||
              (language === "es" && languageData.es.contact.button) ||
              (language === "ca" && languageData.ca.contact.button)}
          </a>
        </button>
      </div>
    </div>
  );
}

export default Contact;
