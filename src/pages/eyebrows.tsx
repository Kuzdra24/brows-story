import React, {useEffect} from "react";
import { useTranslation, Trans } from "react-i18next";

import styled from "styled-components";
import qm from "../assets/icons/questionMark.png";
import clock from "../assets/icons/clock.png";
import eye from "../assets/icons/eye.png";
import { graphql, useStaticQuery, Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { StyledImage, StyledTitle } from "../assets/styles/styles";
import { Button } from "../components/UI/Button";
import useWidth from "../hooks/useWidth";
import downloadLink from "../assets/download/how2Prepare.jpg";
import { EyeBrowsGallery } from "../components/Gallery/EyeBrowsGallery";
import { StyledGalleryTitle } from "./services/index";

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
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("i18nextLng");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

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
            <Trans i18nKey="brows.whatIsItTitle" />
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
          <p>{t("brows.howLongDescription.0")}</p>
          <p>
            {t("brows.howLongDescription.1")}
            <mark>{t("brows.howLongDescription.2")}</mark>
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
          <p>{t("brows.forWhoDescription.0")}</p>
          <p>{t("brows.forWhoDescription.1")}</p>
          <ul>
            <li>{t("brows.forWhoDescription.2")} </li>
            <li>{t("brows.forWhoDescription.3")}</li>
            <li>{t("brows.forWhoDescription.4")}</li>
            <li>{t("brows.forWhoDescription.5")}</li>
          </ul>
        </div>
      </Wrapper>
      <ColWrapper>
        <StyledTitle imgSrc={qm}>{t("brows.howToPrepare")}</StyledTitle>
        <a
          href={downloadLink}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          download
        >
          <Button>{t("download")}</Button>
        </a>
      </ColWrapper>
      <StyledGalleryTitle style={{ margin: "85px 0 30px" }}>
        {t("realizations")}
      </StyledGalleryTitle>
      <EyeBrowsGallery />
      <Link to={"/contraindications"}>
        <Button>{t("contraindications")}</Button>
      </Link>
    </>
  );
};

export default IndexPage;
