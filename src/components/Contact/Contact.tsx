import React from "react";
import styled, {keyframes} from "styled-components";
import { Subtitle } from "../UI/Subtitle";
import InstagramIcon from "../../assets/icons/social/ig.png";
import FacebookIcon from "../../assets/icons/social/fb.png";
import WhatsappIcon from "../../assets/icons/social/whatsapp.png";

const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 80px;
`;

const ContentWrapper = styled.div`
  display: flex;
  margin: 50px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Description = styled.div`
  width: 400px;
  /* margin: 0 80px; */
  padding: 0 50px;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
`;

const IconsAnimation = keyframes`
    from{
        opacity: 0;
        left: -50px;
    }
    to{
        opacity: 1;
        left: 0;
    }
`

const Social = styled.div`
  width: 400px;
  position: relative;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 50px;
    margin: 10px 0;
    animation: ${IconsAnimation} 1s ease-in-out forwards;
    img {
      margin-left: 10px;
    }
  }
  &:after {
    content: "";
    display: block;
    height: 120%;
    width: 120px;
    background-color: ${({ theme }) => theme.colors.secondary}90;
    z-index: -1;
    position: absolute;
    right: 0;
    top: -10%;
  }
`;

export const Contact: React.FC = () => {
  return (
    <Wrapper>
      <Subtitle>Kontakt</Subtitle>
      <ContentWrapper>
        <Social>
          <div>
            <span>INSTAGRAM</span>
            <img src={InstagramIcon} alt="instagram icon" width={40} />
          </div>
          <div>
            <span>FACEBOOK</span>
            <img src={FacebookIcon} alt="facebook icon" width={40} />
          </div>
          <div>
            <span>WHATSAPP</span>
            <img src={WhatsappIcon} alt="whatsapp icon" width={40} />
          </div>
        </Social>
        <Description>
          <p>
            Rezerwacje w naszym salonie dokonujesz przez media społecznościowe.
          </p>
          <p>
            Wybierz ulubiony komunikator i skontaktuj się z nami, by umówić
            wizytę.
          </p>
          <p>
            Wspólnie ustalimy dogodny termin oraz odpowiemy na wszystkie
            pytania.
          </p>
        </Description>
      </ContentWrapper>
    </Wrapper>
  );
};
