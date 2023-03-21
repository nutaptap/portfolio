import { LanguageContext } from "../App";
import { useContext } from "react";
import languageData from "../languageData";
import { Link } from "react-router-dom";

function NavBar() {
  const language = useContext(LanguageContext);

  return (
    <div className="nav-container">
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#app">
              {(language === "en" && languageData.en.navigation.home) ||
                (language === "es" && languageData.es.navigation.home) ||
                (language === "ca" && languageData.ca.navigation.home)}
            </a>
          </li>
          <li>
            <a href="#work">
              {(language === "en" && languageData.en.navigation.work) ||
                (language === "es" && languageData.es.navigation.work) ||
                (language === "ca" && languageData.ca.navigation.work)}
            </a>
          </li>
          <li>
            <a href="#about">
              {(language === "en" && languageData.en.navigation.about) ||
                (language === "es" && languageData.es.navigation.about) ||
                (language === "ca" && languageData.ca.navigation.about)}
            </a>
          </li>
          <li>
            <a target="_blank">CV</a>
          </li>
        </ul>
        <div>
          <ul className="nav-languages">
            <li>
              <Link
                to="/en"
                className={language === "en" ? "active" : undefined}
              >
                en
              </Link>
            </li>
            <li>
              <Link
                to="/es"
                className={language === "es" ? "active" : undefined}
              >
                es
              </Link>
            </li>
            <li>
              <Link
                to="/ca"
                className={language === "ca" ? "active" : undefined}
              >
                ca
              </Link>
            </li>
          </ul>
          <button type="button">
            <a href="#contact">
              {(language === "en" && languageData.en.navigation.button) ||
                (language === "es" && languageData.es.navigation.button) ||
                (language === "ca" && languageData.ca.navigation.button)}
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
