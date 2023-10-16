import React, { HTMLProps } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Button } from "../UI/Button";
import heroImgSrc from "../../assets/images/homePage/heroImg.jpeg";
import useWidth from "../../hooks/useWidth";

const StyledTitle = styled.h1`
  font-size: 86px;
  text-align: center;
  font-family: Cinzel;

  @media (max-width: 576px) {
    font-size: 80px;
  }
`;

const SectionWrapper = styled.section`
  display: flex;
  /* padding: 30px; */
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  /* height: 80vh; */
  &:before {
    content: "";
    background-color: ${({ theme }) => theme.colors.secondary}60;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -90%;
    left: -69%;
    z-index: -1;
    transform: rotate(45deg);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  hr {
    margin: -20px 0 20px;
    width: 50%;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.dark};
  }
  p {
    /* max-width: 330px; */
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-align: center;
    line-height: 2;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  hr {
    margin: -20px 0 20px;
    width: 50%;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.dark};
  }
  p {
    /* max-width: 330px; */
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-align: center;
    line-height: 2;
  }
`;

const StyledImage = styled(GatsbyImage)`
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 30px;
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
        <Button>{t("buttonAction")}</Button>
      </Wrapper>
      <StyledImage image={imageData} alt="Opis obrazka" />
    </SectionWrapper>
  ) : (
    <MobileWrapper>
      <StyledTitle>
        Brows Story <br />
        Anna Naściuk
      </StyledTitle>
      <hr />
      <p>
        <Trans i18nKey="subtitle" />
      </p>
      <Button>{t("buttonAction")}</Button>
    </MobileWrapper>
  );
};

export default HeroSection;
