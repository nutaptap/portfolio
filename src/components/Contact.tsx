import { LanguageContext } from "../App";
import { useContext, useEffect, useRef, useState } from "react";
import languageData from "../languageData";

function Contact() {
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
      className={isVisible ? "visible contact" : "contact"}
      ref={containerRef}
      id="contact"
    >
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
