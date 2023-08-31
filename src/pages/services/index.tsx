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
import { Trans } from "react-i18next";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-around;
  margin-bottom: 100px;
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
`;

interface ImgPropTypes {
  imgSrc: string;
}

const Description = styled.div<ImgPropTypes>`
  max-width: 600px;
  width: 100%;
  margin: 0 40px;
  h2 {
    font-family: Cinzel;
    font-size: 32px;
    position: relative;
    width: 480px;
    &:after {
      content: "";
      background-image: url(${({ imgSrc }) => imgSrc});
      background-size: cover;
      background-position: center;
      width: 50px;
      height: 60px;
      position: absolute;
      z-index: -1;
      top: -20px;
      right: -20px;
    }
  }
  p {
    line-height: 1.65;
    mark {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
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
        <Description imgSrc={qm}>
          <h2>Co to jest lifting rzęs</h2>
          <p>
            Lifting rzęs to zabieg podniesienia i podkręcenia rzęs, który daje{" "}
            <mark> naturalny trwały efekt. </mark>
            <br />
            Naturalny wygląd rzęs nie zawsze zadowala kobiety, którym zależy na
            intensywnym, wyrazistym spojrzeniu. Rzęsy często są rzadkie, jasne i
            rosną w lini prostej zamiast być gęste i zalotnie podkręcone. Dla
            kobiet, którym zależy na naturalnym, ale widocznym efekcie poleca
            się zabieg liftingu / laminaccji rzęs.
          </p>
        </Description>
        <ServiceImage imgSource={lifting} alt="lifting" />
      </SectionWrapper>
      <SectionWrapper>
        <ServiceImage imgSource={henna} alt="henna" />
        <Description imgSrc={qm}>
          <h2>
            Co to jest henna pudrowa <br />i dla kogo
          </h2>
          <p>
            Brow henna, czyli inaczej henna pudrowa, to innowacyjna i naturalna
            metoda barwienia włosków oraz skóry na pożądany kolor. Jest to
            naturalny preparat oparty na składnikach roślinnych, który oprócz
            efektu barwienia skóry i włosków jednocześnie je odżywia i
            nabłyszcza.
            <br />
            <mark>Zabieg przeznaczony jest</mark> dla osób, które chciałyby
            podkreślić naturalny kształt swoich brwi, wypełnić ubytki, odżywić
            swoje włoski lub ożywic kolor makijażu permanentnego.
          </p>
        </Description>
      </SectionWrapper>
      <SectionWrapper>
        <Description imgSrc={qm}>
          <h2>Na czym polega zabieg laminacji brwi</h2>
          <p>
            Nie każda z nas zostałą obdarowana gęstymi, krzaczastymi brwiami.
            Włoski rosną nie tak jak byśmy chciały, niekiedy pojawiają się
            ubytki i nie jesteśmy w stanie ich ładnie wystylizować.<br/>
            <mark>Laminowanie brwi to zabieg </mark>który pozwala nam unieść
            naturalne włoski, aby uzyskać pełne, gęste brwi. Polega na
            wyprostowaniu i uniesieniu włosków za pomocą specjalnego preparatu,
            który zapewnia włoskom większą elastyczność i umożliwia nadanie im
            pożądanego kształtu, a tym samym zakryje wszelkie luki i odstające
            włoski.
          </p>
        </Description>
        <ServiceImage imgSource={henna} alt="henna" />
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
