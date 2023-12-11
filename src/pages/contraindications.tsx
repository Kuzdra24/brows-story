import React from "react";
import styled from 'styled-components';
import { StyledTitle } from "./services/index";
import x from "../assets/icons/x.png";

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
  `

  return (
    <Wrapper>
      <StyledTitle style={{textAlign: 'center'}} imgSrc={x}>Przeciwskazania</StyledTitle>
      <ul>
        {contArr.map(e => <li>{e}</li>)}
      </ul>
    </Wrapper>
  );
}
