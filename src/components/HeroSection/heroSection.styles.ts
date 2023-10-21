import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  background: url(heroImgSrc) no-repeat right top;
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

export const Wrapper = styled.div`
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

export const MobileWrapper = styled.div<{ imgSrc: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: 1;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: cover;
  margin: 10px;
  padding: 30px 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
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
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ffffff5e;
    backdrop-filter: blur(3px);
  }
`;

export const StyledImage = styled(GatsbyImage)`
  max-width: 400px;
  width: 100%;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  margin: 30px;
`;

export const StyledTitle = styled.h1`
  font-size: 86px;
  text-align: center;
  font-family: Cinzel;

  @media (max-width: 576px) {
    font-size: 54px;
  }
`;
