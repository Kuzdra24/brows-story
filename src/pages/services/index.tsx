import React from "react";
import { useTranslation } from "react-i18next";
import ServiceCard from "../../components/Services/ServiceCard";
import eyeBrowsSrc from "../../assets/images/services/eyebrows.jpeg";
import mouthSrc from "../../assets/images/services/mouth.jpeg";
import styled from "styled-components";
// import i18n from "../../i18n";
import qm from "../../assets/icons/questionMark.png";
import { ServiceImage } from "../../components/Services/ServiceImage";
import lifting from "../../assets/images/services/lifting.jpeg";
import henna from "../../assets/images/services/henna.jpeg";
import { Gallery } from "../../components/Gallery/Gallery";

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

const StyledTitle = styled.h2<ImgPropTypes>`
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

const IndexPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <ServiceCard
          name={"Brwi permanentne"}
          backgroundImage={eyeBrowsSrc}
          slug="/services/eyebrows"
        />
        <ServiceCard
          name={"Usta permanentne"}
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
            <br />
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
        <ServiceImage imgSource={henna} alt="henna" />
      </SectionWrapper>

      <SectionWrapper style={{flexDirection: "column"}}>
        <StyledTitle style={{textAlign: "center" }}>Zobacz realizacje</StyledTitle>
        <Gallery />
      </SectionWrapper >
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
