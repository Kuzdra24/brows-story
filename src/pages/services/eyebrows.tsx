import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import qm from "../../assets/icons/questionMark.png";
import clock from "../../assets/icons/clock.png";
import eye from "../../assets/icons/eye.png";
import { graphql, useStaticQuery, Link } from "gatsby";
import {  IGatsbyImageData } from "gatsby-plugin-image";
import {StyledImage, StyledTitle} from './styles'
import { Button } from "../../components/UI/Button";
import useWidth from "../../hooks/useWidth";
import downloadLink from "../../assets/download/how2Prepare.jpg";
import { EyeBrowsGallery } from "../../components/Gallery/EyeBrowsGallery";
import { StyledGalleryTitle } from "./index";


const Wrapper = styled.section`
  display: flex;
  /* padding: 30px; */
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  flex-wrap: wrap;
  margin: 0 auto 80px;
  /* height: 80vh; */
  &:before {
    content: "";
    background-color: ${({ theme }) => theme.colors.secondary}60;
    width: 150%;
    height: 150%;
    position: absolute;
    top: -90%;
    left: -69%;
    z-index: -1;
    transform: rotate(-40deg);
    @media (max-width: 1250px) {
      display: none;
    }
  }
  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 320px;
    ul {
      list-style-type: none;
      li {
        line-height: 1.7;
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
  }
  p {
    line-height: 1.5;
    @media (max-width: ${({ theme }) => theme.mediaQueries.s}) {
      text-align: center;
    }
    mark {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;


const ColWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IndexPage = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/services/eyebrowsPage/" } }) {
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
    data.allFile.edges[0].node.childImageSharp?.gatsbyImageData;

  if (!imageData) {
    return <div>Image not found</div>;
  }

  const secondImageData: IGatsbyImageData | undefined =
    data.allFile.edges[1].node.childImageSharp?.gatsbyImageData;

  if (!secondImageData) {
    return <div>Image not found</div>;
  }

  const width = useWidth();

  return (
    <>
      <Wrapper>
        <div>
          <StyledTitle imgSrc={qm}>
            Co to jest
            <br /> Makijaż permanentny brwi
          </StyledTitle>
          <p>{t("brows.whatIsItDescription.0")} </p>
          <p>{t("brows.whatIsItDescription.1")} </p>
          <p>{t("brows.whatIsItDescription.2")} </p>
        </div>
        <div style={{ alignItems: "center" }}>
          <StyledImage image={imageData} alt="Opis obrazka" />
        </div>
      </Wrapper>
      <Wrapper>
        <div>
          <StyledTitle imgSrc={clock} style={{ alignSelf: "center" }}>
            {t("brows.howLongTitle")}
          </StyledTitle>
          <p>
            Pytanie o to, jak długo utrzymuje się makijaż permamentny, jest
            jednym z tych, które zadaje sobie kobieta planują ca zabieg.
            Odpowiedź niestety nie jest jednoznaczna, bo efekt zależy od wielu
            czynników. Należy uwzględnić m.in. stan zdrowia, przebyte choroby,
            przyjmowane leki, wiek, rodzaj cery i typ skóry oraz codzienną
            pielęgnację.
          </p>
          <p>
            Ze względu na różne aspekty, efekt makijażu permamentnego brwi może
            utzrymywać się przez rok, a w niektorych nawet 2-4 lata. <br />
            <mark>W większości przypadków są to około 2 lata.</mark>
          </p>
        </div>
      </Wrapper>
      <Wrapper>
        <StyledImage
          image={secondImageData}
          alt="Opis obrazka"
          style={width > 750 ? { marginRight: "40px" } : {}}
        />
        <div>
          <StyledTitle imgSrc={eye}>{t("brows.forWhoTitle")}</StyledTitle>
          <p>
            Makijaż permamentny brwi polecany jest przede wszystkim paniom,
            które cenią swój czas i wygodę. Jeśli nie przepadasz za wykonywaniem
            żmudnego makijażu brwi lub poprostu nie masz na to czasu makijaż
            permamentny okaże się doskonałym wyborem.
          </p>
          <p>
            Oto niektóre przypadki, dla których to rozwiązanie będzie
            szczególnie korzystne:
          </p>
          <ul>
            <li>Osoby o rzadkich, lub nierównomiernie rosnących brwiach </li>
            <li>
              Osoby borykające się z utratą włosków w wyniku chorób, terapii{" "}
            </li>
            <li>
              Osoby o jasnych brwiach, chcące uzyskać bardziej wyrazisty wygląd{" "}
            </li>
            <li>
              Osoby aktywne fizycznie, które chcą uniknąć rozmywania się
              makijażu podczas ćwiczeń
            </li>
          </ul>
        </div>
      </Wrapper>
      <ColWrapper>
        <StyledTitle imgSrc={qm}>
          Zobacz jak przygotować się do zabiegu
        </StyledTitle>
        <a
          href={downloadLink}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          download
        >
          <Button>POBIERZ</Button>{" "}
        </a>
      </ColWrapper>
      <StyledGalleryTitle style={{margin: '85px 0 30px'}}>Zobacz realizacje</StyledGalleryTitle>
      <EyeBrowsGallery/>
      <Link to={'/contraindications'}>
        <Button>ZOBACZ PRZECIWSKAZANIA</Button>
      </Link>
    </>
  );
};

export default IndexPage;
