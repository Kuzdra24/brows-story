import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";

const ImageWrapper = styled.div`
  flex: 1;
  margin: 20;
  display: flex;
  justify-content: center;
`;


const StyledImage = styled(GatsbyImage)`
  width: 350px;
  height: 350px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  @media (max-width: 576px) {
    width: 300px;
    height: 300px;
  }
`;

interface ImageQueryData {
  placeholderImage: {
    childImageSharp: {
      gatsbyImageData: any;
    };
  };
}

export const AboutImage: React.FC = () => {
  const data = useStaticQuery<ImageQueryData>(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "homePage/aboutImage.jpg" }) {
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
  return (
    <ImageWrapper>
      <StyledImage image={imageData} alt="Hero Image" />
    </ImageWrapper>
  );
};
