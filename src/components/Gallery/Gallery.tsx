import React, { useState } from "react";
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
  @media (max-width: 726px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
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
  overflow: hidden;
`;

const StyledImage = styled(GatsbyImage)`
  object-fit: cover;
  width: 200px;
  height: 100%;
  transition: transform 0.4s;
  cursor: pointer;
  &:hover {
    transform: scale(1.07);
  }
  @media (max-width: 726px) {
    width: 250px;
  }
`;
const Image = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #30303950;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
`;

export const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/(servicesGallery)/" } }) {
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

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<any>();

  const imageList: ImageNode[] = data.allFile.edges;
  return (
    <>
      <GalleryWrapper>
        {imageList.map((image, index) => {
          const imageData = getImage(image.node.childImageSharp);
          return (
            <>
              {imageData && (
                <ImageWrapper
                  onClick={() => {
                    setIsOpen(true);
                    setCurrentImage(imageData);
                  }}
                  key={index}
                  idx={index + 1}
                >
                  <StyledImage image={imageData} alt={`Image ${index}`} />
                </ImageWrapper>
              )}
            </>
          );
        })}
      </GalleryWrapper>

      {isOpen && (
        <Image onClick={() => {setIsOpen(false)}}>
          {currentImage && (
            <GatsbyImage
              style={{ width: "350px" }}
              image={currentImage}
              alt="imf"
            />
          )}
        </Image>
      )}
    </>
  );
};
