import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import poland from "../../assets/icons/poland.png";
import germany from "../../assets/icons/germany.png";

const LanguageSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

const LanguageButton = styled.button<{ active: boolean }>`
  background-color: transparent;
  padding: 0;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
`;

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const languages = ["pl", "de"];

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <LanguageSwitcherWrapper>
      {languages.map((language) => (
        <LanguageButton
          key={language}
          active={language === i18n.language}
          onClick={() => handleLanguageChange(language)}
        >
          {language === "pl" ? (
            <img src={poland} alt="poland flag" width={35} />
          ) : (
            <img src={germany} alt="germany flag" width={35} />
          )}
        </LanguageButton>
      ))}
    </LanguageSwitcherWrapper>
  );
};

export default LanguageSwitcher;
