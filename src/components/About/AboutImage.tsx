import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled, {keyframes} from "styled-components";

const ImageWrapper = styled.div`
    flex: 1;
    margin: 20;
    display: flex;
    justify-content: center;
`

const profileAnimation = keyframes`
    0%{
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    50%{
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }

    100%{
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
`

const StyledImage = styled(GatsbyImage)`
  width: 350px;
  height: 350px;
  border: 6px solid ${({theme}) => theme.colors.primary}80;
  animation: ${profileAnimation} 8s ease-in-out infinite;
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
      placeholderImage: file(relativePath: { eq: "homePage/aboutImage.jpeg" }) {
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
