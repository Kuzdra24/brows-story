import React from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../../components/Services/ServiceCard";
import eyeBrowsSrc from "../../assets/images/services/eyebrows.jpeg";
import mouthSrc from "../../assets/images/services/mouth.jpeg";
import styled, { keyframes } from "styled-components";
import qm from "../../assets/icons/questionMark.png";
import { ServiceImage } from "../../components/Services/ServiceImage";
import lifting from "../../assets/images/services/lifting.jpeg";
import henna from "../../assets/images/services/henna.jpeg";
import laminacja from "../../assets/images/services/laminacja.jpg";
import { Gallery } from "../../components/Gallery/Gallery";
import useElementVisibility from "../../hooks/useElementVisibility";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-around;
  margin-bottom: 100px;
  flex-wrap: wrap;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    height: 45vh;
    background-color: ${({ theme }) => theme.colors.primary}20;
    z-index: -1;
  }
`;

const SectionWrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

interface ImgPropTypes {
  imgSrc?: string;
}

const Description = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 40px;
  p {
    line-height: 1.65;
    mark {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const StyledTitle = styled.h2<ImgPropTypes>`
  font-family: Cinzel;
  font-size: 32px;
  position: relative;
  max-width: 480px;
  width: 100%;
  &:after {
    content: "";
    background-image: url(${({ imgSrc }) => imgSrc && imgSrc});
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 60px;
    position: absolute;
    z-index: -1;
    top: -20px;
    right: -20px;
  }
`;

const TitleAnimation = keyframes`
  from{
    width: 0;
  }
  to{
    width: 200px;
  }
`;

export const StyledGalleryTitle = styled.h2<ImgPropTypes>`
  font-family: Cinzel;
  font-size: 32px;
  position: relative;
  max-width: 480px;
  width: 100%;
  text-align: center;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 200px;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.secondary};
    z-index: -1;
    top: 0;
    right: 64px;
    animation: ${TitleAnimation} 0.6s cubic-bezier(0.23, 0.54, 1, 0.99);
  }
`;

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  const isVisable = useElementVisibility("gallery-title");
  return (
    <>
      <Wrapper>
        <ServiceCard
          name={t("services.brows")}
          backgroundImage={eyeBrowsSrc}
          slug="/services/eyebrows"
        />
        <ServiceCard
          name={t("services.lips")}
          backgroundImage={mouthSrc}
          slug="/services/mouth"
        />
      </Wrapper>
      <SectionWrapper>
        <Description>
          <StyledTitle imgSrc={qm}>{t("services.lifting.title")}</StyledTitle>
          <p>
            {t("services.lifting.description.0")}
            <mark> {t("services.lifting.description.1")} </mark>
            
            {t("services.lifting.description.2")}
          </p>
        </Description>
        <ServiceImage imgSource={lifting} alt="lifting" />
      </SectionWrapper>
      <SectionWrapper>
        <ServiceImage imgSource={henna} alt="henna" />
        <Description>
          <StyledTitle imgSrc={qm}>
            {t("services.henna.title.0")}
            <br />
            {t("services.henna.title.1")}
          </StyledTitle>
          <p>
            {t("services.henna.description.0")}
            <br />
            <mark>{t("services.henna.description.1")}</mark>{" "}
            {t("services.henna.description.2")}
          </p>
        </Description>
      </SectionWrapper>
      <SectionWrapper>
        <Description>
          <StyledTitle imgSrc={qm}>{t("services.laminacja.title")}</StyledTitle>
          <p>
            {t("services.laminacja.description.0")}
            <br />
            <mark>{t("services.laminacja.description.1")}</mark>
            {t("services.laminacja.description.2")}
          </p>
        </Description>
        <ServiceImage imgSource={laminacja} alt="henna" />
      </SectionWrapper>

      <SectionWrapper id="gallery-title" style={{ flexDirection: "column" }}>
        {isVisable && (
          <StyledGalleryTitle>{t("realizations")}</StyledGalleryTitle>
        )}
        <Gallery />
      </SectionWrapper>
    </>
  );
};

export function Head() {
  return (
    <>
      {/* <html lang={i18n.language} /> */}
      <title>Brows story</title>
    </>
  );
}

export default IndexPage;
