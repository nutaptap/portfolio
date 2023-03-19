import React from "react";
import { LanguageContext } from "../App";
import { useContext } from "react";
import { LanguageType } from "../types/types";
import languageData from "../languageData";

type NavBarProps = {
  onLanguageChange: (newLanguage: LanguageType) => void;
};

/* navigation:{
  home: 'Inicio',
  work: 'Proyectos',
  about: 'Sobre mi',
  button: 'CONTACTO'
}, */

function NavBar({ onLanguageChange }: NavBarProps) {
  const language = useContext(LanguageContext);

  const handleLanguageChange = (event: React.MouseEvent<HTMLLIElement>) => {
    const newLanguage = event.currentTarget.textContent as LanguageType;
    onLanguageChange(newLanguage);
  };

  return (
    <div className="nav-container">
      <nav>
        <ul className="nav-links">
          <li>
            {(language === "en" && languageData.en.navigation.home) ||
              (language === "es" && languageData.es.navigation.home) ||
              (language === "ca" && languageData.ca.navigation.home)}
          </li>
          <li>
            {(language === "en" && languageData.en.navigation.work) ||
              (language === "es" && languageData.es.navigation.work) ||
              (language === "ca" && languageData.ca.navigation.work)}
          </li>
          <li>
            {(language === "en" && languageData.en.navigation.about) ||
              (language === "es" && languageData.es.navigation.about) ||
              (language === "ca" && languageData.ca.navigation.about)}
          </li>
          <li>
            <a target="_blank">CV</a>
          </li>
        </ul>
        <div>
          <ul className="nav-languages">
            <li onClick={handleLanguageChange}>en</li>
            <li onClick={handleLanguageChange}>es</li>
            <li onClick={handleLanguageChange}>ca</li>
          </ul>
          <button type="button">
            {(language === "en" && languageData.en.navigation.button) ||
              (language === "es" && languageData.es.navigation.button) ||
              (language === "ca" && languageData.ca.navigation.button)}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
