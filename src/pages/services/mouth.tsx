import * as React from "react";
import { useTranslation } from "react-i18next";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { StyledImage, StyledTitle, StyledAnimatedTitle } from "./styles";
import { IGatsbyImageData } from "gatsby-plugin-image";
import qm from "../../assets/icons/questionMark.png";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto 80px;
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 15px;
    min-width: 320px;
    p {
      line-height: 1.6;
    }
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  width: 100%;
  max-width: 900px;

  li {
    line-height: 2;
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
`;

const Step = styled.span`
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 20px;
  mark {
    padding: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const IndexPage = () => {
  const { t } = useTranslation();

  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/services/mouthGallery/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const imageData: IGatsbyImageData | undefined =
    data.allFile.edges[1].node.childImageSharp?.gatsbyImageData;

  if (!imageData) {
    return <div>Image not found</div>;
  }

  const secondImageData: IGatsbyImageData | undefined =
    data.allFile.edges[4].node.childImageSharp?.gatsbyImageData;

  if (!secondImageData) {
    return <div>Image not found</div>;
  }

  return (
    <>
      <Wrapper>
        <div>
          <StyledTitle imgSrc={qm}>
            Co to jest <br />
            makijaż pernamentny ust
          </StyledTitle>
          <p>
            Chyba nie ma kobiety, która by nie chciała cieszyć się trwałym i
            idealnym makijażem ust bez konieczności używania szminki.
          </p>
          <p>
            Makijaż pernamentny ust to zaawansowana metoda pigmentacji
            polegająca na wprowadzeniu odpowiednio dobranego pigmentu do
            czerwieni wargowej. Celem tej techniki jest podkreślenie naturalnego
            piękna ust jednocześnie zapewniając długotrwałe efekty.
          </p>
          <p>
            Efekt utrzymuje się ok. 2 lata, natomiast jest to bardzo uzależnione
            od indywidualnych czynników, które wpływają na trwałość zabiegu.
          </p>
        </div>
        <div style={{ alignItems: "center" }}>
          <StyledImage image={imageData} alt="Usta" />
        </div>
      </Wrapper>
      <Wrapper>
        <StyledAnimatedTitle>Zabieg Dedykowany jest dla...</StyledAnimatedTitle>
        <StyledList>
          <li>
            Osób, które mają blade, słabo ukrwione usta, a także tych, których
            usta są wąskie i małe, o nieregularnym konturze wywołanym opryszczką
            lub zmianami potrądzikowymi.
          </li>
          <li>
            Osób, które chcą zaoszczędzić czas, rezygnując z codziennego
            makijażu ust
          </li>
          <li>Osób z bliznami, deformacjami, które pragną je zminimalizować</li>
          <li>
            WSZYSTKICH, którzy pragną naturalnego a jednocześnie trwałego
            makijażu ust, który podkreśla urodę i wzmacnia pewność siebie
          </li>
        </StyledList>
      </Wrapper>
      <Wrapper>
        <div style={{ alignItems: "center" }}>
          <StyledImage image={secondImageData} alt="Usta" />
        </div>
        <div>
          <StyledTitle>Twoja wizyta w salonie</StyledTitle>
          <Step>
            <mark>KROK 1</mark>
          </Step>
          <p>
            Przechodzimy wspólnie przez przeciwwskazania. Zachęcam, żebyś
            zabrała ze sobą ulubioną szminkę, będziemy rozmawiać o Twoich
            preferencjach, oczekiwaniach, które wspólnie spełnimy.
          </p>
          <Step>
            <mark>KROK 2</mark>
          </Step>
          <p>
            Nadanie kształtu <br /> Teraz zobaczysz wizualizację zmiany, rysunek
            wstępny makijażu pernamentnego ust. Na podstawie odmierzonych
            punktów Twojej twarzy, wyznaczam idealny dla Ciebie kształt. Zabieg
            wykonywany dopiero po twojej akceptacji rysunku. Dobieram optymalny
            kolor na podstawie twoich preferencji
          </p>
          <Step>
            <mark>KROK 3</mark>
          </Step>
          <p>
            Wykonuję kontur ust a następnie wypełnienie ich kolorem. Pigmentacja
            ust zajmuje 40-80min zależnie od rozmiaru.
          </p>
        </div>
      </Wrapper>
      <Wrapper>
        <StyledTitle imgSrc={qm}>Jak przygotować sie do zabiegu</StyledTitle>
        <StyledList>
          <li>
            Stosować dobrą pielęgnację ust, aby były miękkie, elastyczne i
            nawilżone.
          </li>
          <li>
            Unikać alkoholu i leków rozrzedzających krew na ok. 48h przed
            zabiegiem, aby zminimalizować ryzyko krwawienia i obrzęków {" "}
          </li>
          <li>Zadbać o dobre nawodnienie</li>
          <li>
            Unikać opalania na słońcu lub w solarium, aby uniknąć podrażnień
            skóry u przemieszczania pigmentu
          </li>
        </StyledList>
      </Wrapper>
    </>
  );
};

export default IndexPage;
