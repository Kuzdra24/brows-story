import * as React from "react";
import { useTranslation } from "react-i18next";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import {
  StyledImage,
  StyledTitle,
  StyledAnimatedTitle,
} from "../../assets/styles/styles";
import { IGatsbyImageData } from "gatsby-plugin-image";
import qm from "../../assets/icons/questionMark.png";
import { CarouselGallery } from "../../components/Gallery/CarouselGallery";
import { StyledGalleryTitle } from "./index";
import { Button } from "../../components/UI/Button";

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
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativePath: { regex: "/services/lipsPage/" } }) {
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

  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <div>
          <StyledTitle imgSrc={qm}>
            {t("lips.whatIsItTitle.0")} <br />
            {t("lips.whatIsItTitle.1")}
          </StyledTitle>
          <p>{t("lips.whatIsItDescription.0")}</p>
          <p>{t("lips.whatIsItDescription.1")}</p>
          <p>{t("lips.whatIsItDescription.2")}</p>
        </div>
        <div style={{ alignItems: "center" }}>
          <StyledImage image={imageData} alt="Usta" />
        </div>
      </Wrapper>
      <Wrapper>
        <StyledAnimatedTitle>{t("lips.forWhoTitle")}</StyledAnimatedTitle>
        <StyledList>
          <li>{t("lips.forWhoDescription.0")}</li>
          <li>{t("lips.forWhoDescription.1")}</li>
          <li>{t("lips.forWhoDescription.2")}</li>
          <li>{t("lips.forWhoDescription.3")}</li>
        </StyledList>
      </Wrapper>
      <Wrapper>
        <div style={{ alignItems: "center" }}>
          <StyledImage image={secondImageData} alt="Usta" />
        </div>
        <div>
          <StyledTitle>{t("lips.yourVisitTitle")}</StyledTitle>
          <Step>
            <mark>{t("lips.step")} 1</mark>
          </Step>
          <p>{t("lips.yourVisitDescription.0")}</p>
          <Step>
            <mark>{t("lips.step")} 2</mark>
          </Step>
          <p>
            {t("lips.yourVisitDescription.1")} <br />{" "}
            {t("lips.yourVisitDescription.2")}
          </p>
          <Step>
            <mark>{t("lips.step")} 3</mark>
          </Step>
          <p>{t("lips.yourVisitDescription.3")}</p>
        </div>
      </Wrapper>
      <Wrapper>
        <StyledTitle imgSrc={qm}>{t("lips.howToPrepareTitle")}</StyledTitle>
        <StyledList>
          <li>{t("lips.howToPrepareDescription.0")}</li>
          <li>{t("lips.howToPrepareDescription.1")}</li>
          <li>{t("lips.howToPrepareDescription.2")}</li>
          <li>{t("lips.howToPrepareDescription.3")}</li>
        </StyledList>
      </Wrapper>
      <StyledGalleryTitle>{t("realizations")}</StyledGalleryTitle>
      <CarouselGallery />
      <Link to={"/contraindications"}>
        <Button>{t("contraindications")}</Button>
      </Link>
    </>
  );
};

export default IndexPage;
