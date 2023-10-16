import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 400px;
  margin-bottom: 100px;
`;

interface ImageNode {
  node: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const gridAreaByIndex = (idx: number) => {
  switch (idx) {
    case 1:
      return "1 / 1 / 6 / 2";
    case 2:
      return "1 / 3 / 4 / 4";
    case 3:
      return "3 / 2 / 6 / 3";
    case 4:
      return "1 / 2 / 3 / 3";
    case 5:
      return "4 / 3 / 6 / 4";
    case 6:
      return "1 / 4 / 6 / 5";
    
  }
};

const ImageWrapper = styled.div<{ idx: number }>`
  grid-area: ${(props) => gridAreaByIndex(props.idx)};
  margin: 6px;
`;

const StyledImage = styled(GatsbyImage)`
  object-fit: cover;
  width: 200px;
  height: 100%;
`;

export const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/(services)/" } }) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  `);

  const imageList: ImageNode[] = data.allFile.edges;

  return (
    <div>
      <h2>Gallery</h2>
      <GalleryWrapper>
        {imageList.map((image, index) => {
          const imageData = getImage(image.node.childImageSharp);
          return (
            <ImageWrapper key={index} idx={index+1}>
              {imageData && (
                <StyledImage image={imageData} alt={`Image ${index}`} />
              )}
            </ImageWrapper>
          );
        })}
      </GalleryWrapper>
    </div>
  );
};
