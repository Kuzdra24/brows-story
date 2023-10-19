import React from "react";
import styled, { keyframes } from "styled-components";
import useElementVisibility from "../../hooks/useElementVisibility";


interface SubtitleProps {
  children: React.ReactNode;
}

const IconsAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 40px;
  }
`;

const StyledSubtitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.dark};
  text-transform: uppercase;
  margin: 10px;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    position: absolute;
    top: 20px;
    left: 0;
    animation: ${IconsAnimation} 0.4s linear;
  }
`;

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  const isVisible = useElementVisibility("subtitle");
 
  return  <StyledSubtitle id="subtitle">{children}</StyledSubtitle>;
};
