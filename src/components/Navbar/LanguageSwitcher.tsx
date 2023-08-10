import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const LanguageSwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageButton = styled.button<{ active: boolean }>`
  background-color: ${({active}) => (active ? "blue" : "gray")};
  color: white;
  padding: 5px 10px;
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
          active={language === i18n.language }
          onClick={() => handleLanguageChange(language)}
        >
          {language}
        </LanguageButton>
      ))}
    </LanguageSwitcherWrapper>
  );
};

export default LanguageSwitcher;
