import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const ImageWrapper = styled.div`
  /* margin: 0 30px; */
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 500px;
`;


const StyledImage = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;


interface ServiceImageProps {
  imgSource: string,
  alt: string
}

export const ServiceImage: React.FC<ServiceImageProps> = ({imgSource, alt}) => {

  return (
    <ImageWrapper>
      <StyledImage src={imgSource} alt={alt} />
    </ImageWrapper>
  );
};
