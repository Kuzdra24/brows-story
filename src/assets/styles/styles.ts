import styled, { keyframes } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

interface ImgPropTypes {
  imgSrc?: string;
}

export const StyledTitle = styled.h1<ImgPropTypes>`
  font-family: Cinzel;
  font-size: 32px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.mediaQueries.m}) {
    text-align: center;
  }
  &:after {
    content: "";
    background-image: url(${({ imgSrc }) => imgSrc});
    background-size: cover;
    background-position: center;
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
  }
`;

export const StyledImage = styled(GatsbyImage)`
  max-width: 450px;
  min-width: 380px;
  width: 100%;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  @media (max-width: ${({ theme }) => theme.mediaQueries.s}) {
    min-width: 280px;
  }
`;
const TitleAnimation = keyframes`
  from{
    width: 0;
  }
  to{
    width: 220px;
  }
`;
export const StyledAnimatedTitle = styled.h2`
  font-family: Cinzel;
  font-size: 32px;
  position: relative;
  max-width: 510px;
  width: 100%;
  text-align: center;
  @media (max-width: 380px) {
    font-size: 28px;
  }
  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 200px;
    height: 45px;
    background-color: ${({ theme }) => theme.colors.secondary};
    z-index: -1;
    top: 0;
    left: 0;
    animation: ${TitleAnimation} 0.6s cubic-bezier(0.23, 0.54, 1, 0.99);
    @media (max-width: 380px) {
      height: 38px;
    }
  }
`;
