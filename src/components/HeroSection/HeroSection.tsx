import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { graphql, useStaticQuery, Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Button } from "../UI/Button";
import heroImgSrc from "../../assets/images/homePage/heroImg.jpeg";
import useWidth from "../../hooks/useWidth";

import {
  SectionWrapper,
  Wrapper,
  MobileWrapper,
  StyledImage,
} from "./heroSection.styles";

const StyledTitle = styled.h1`
  font-size: 86px;
  text-align: center;
  font-family: Cinzel;

  @media (max-width: 576px) {
    font-size: 54px;
  }
`;

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const width = useWidth();
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "homePage/heroImg.jpeg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  const imageData: IGatsbyImageData | undefined =
    data.placeholderImage?.childImageSharp?.gatsbyImageData;

  if (!imageData) {
    return <div>Image not found</div>;
  }

  return width > 768 ? (
    <SectionWrapper>
      <Wrapper>
        <StyledTitle>
          Brows Story <br />
          Anna Naściuk
        </StyledTitle>
        <hr />
        <p>
          <Trans i18nKey="subtitle" />
        </p>

        <Button>
          <Link to="/services">{t("buttonAction")}</Link>
        </Button>
      </Wrapper>
      <StyledImage image={imageData} alt="Opis obrazka" />
    </SectionWrapper>
  ) : (
    <MobileWrapper imgSrc={heroImgSrc}>
      <div>
        <StyledTitle>
          Brows Story <br />
          Anna Naściuk
        </StyledTitle>
        <hr />
        <p>
          <Trans i18nKey="subtitle" />
        </p>
        <Link to="/services">
          <Button>{t("buttonAction")}</Button>
        </Link>
      </div>
    </MobileWrapper>
  );
};

export default HeroSection;
