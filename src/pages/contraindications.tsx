import React from "react";
import styled from "styled-components";
import { StyledTitle } from "./services/index";
import x from "../assets/icons/x.png";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ul {
    list-style-type: none;
    li {
      line-height: 1.8;
      position: relative;
      &:before {
        content: "";
        border-radius: 50%;
        width: 7px;
        height: 7px;
        display: block;
        background-color: ${({ theme }) => theme.colors.primary};
        margin-right: 0.3em;
        position: absolute;
        left: -20px;
        top: 10px;
      }
    }
  }
`;

export default function contraindications() {
  const contArr = [
    "Ciąża",
    "Okres laktacji (min. 2 miesiące od zakończenia)",
    "Epilepsja",
    "Choroby serca",
    "Nieuregulowana cukrzyca",
    "Bielactwo",
    "Łuszczyca",
    "Aktywna opryszczka",
    "Żółtaczka",
    "HIV",
    "Tendencje do keloidów i bliznowców",
    "Podczas kuracji sterydowej i antybiotykowej (2 tygodnie od odstawienia)",
    "Zmiany zapalne w miejscu pigmentacji",
    "Uczulenie na środki znieczulające",
    "Choroba nowotworowa w fazie aktywnej",
    "Choroby rogówki i siatkówki oka",
    "Choroby psychiczne, zaburzenia",
    "Zaawansowane stadium trądziku (należy najpierw wyleczyć cerę)",
    "Wysokie ciśnienie",
    "Hemofilia",
    "Posiadanie starego makijażu permanentnego (nawet jeśli jest już słabo widoczny) - Prosimy o informacje oraz zdjęcie",
  ];

  const translation = [
    "Schwangerschaft",
    "Stillzeit (mind. 2 Monate nach Abbruch)",
    "Epilepsie",
    "Herzkrankheiten",
    "Ungeregelter Diabetes",
    "Vitiligo",
    "Schuppenflechte",
    "Aktiver Herpes",
    "Gelbsucht",
    "HIV",
    "Neigung zu Keloiden und Narbenbildung",
    "Während der Behandlung mit Steroiden und Antibiotika (2 Wochen nach Absetzen)",
    "Entzündliche Veränderungen an der Pigmentierungsstelle",
    "Sensibilisierung auf Anästhetika",
    "Neoplastische Erkrankung in der aktiven Phase",
    "Erkrankungen der Hornhaut und der Netzhaut",
    "Psychische Erkrankungen, Störungen",
    "Akne im fortgeschrittenen Stadium (der Teint muss zuerst geheilt werden)",
    "Bluthochdruck",
    "Hämophilie",
    "Vorhandensein von altem Permanent-Make-up (auch wenn es bereits schwach sichtbar ist) - bitte Informationen und ein Foto beifügen",
  ];

  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  console.log(currentLanguage);

  return (
    <Wrapper>
      <StyledTitle style={{ textAlign: "center", fontSize: "29px"}} imgSrc={x}>
        {t("contraindications")}
      </StyledTitle>
      <ul>
        {currentLanguage == "pl"
          ? contArr.map((e, i) => <li key={i}>{e}</li>)
          : translation.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
    </Wrapper>
  );
}
