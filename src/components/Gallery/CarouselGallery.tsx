import React, { useState } from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { useSnapCarousel } from "react-snap-carousel";

const GalleryWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 300px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface ImageNode {
  node: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const ImageWrapper = styled.div`
  height: 250px;
  margin: 6px;
  overflow: hidden;
`;

const GalleryButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  font-size: 40px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: monospace;
  font-weight: bold;
  cursor: pointer;
  z-index: 9;
`;

const StyledImage = styled(GatsbyImage)`
  object-fit: cover;
  width: 240px;
  height: 100%;
  transition: transform 0.4s;
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    transform: scale(1.07);
  }
  @media (max-width: 726px) {
    width: 230px;
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

export const CarouselGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/(lipsGallery)/" } }) {
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

  const { scrollRef, prev, next } = useSnapCarousel();

  const imageList: ImageNode[] = data.allFile.edges;
  return (
    <>
      <GalleryWrapper>
        <GalleryButton onClick={(): void => prev()} style={{ left: "0" }}>
          {"<"}
        </GalleryButton>
        <ul
          ref={scrollRef}
          style={{
            display: "flex",
            overflow: "auto",
            scrollSnapType: "x mandatory",
            overflowX: "hidden",
           
          }}
        >
          {imageList.map((image, index) => {
            const imageData = getImage(image.node.childImageSharp);
            return (
              <li style={{ listStyle: "none" }}>
                {imageData && (
                  <ImageWrapper
                    onClick={() => {
                      setIsOpen(true);
                      setCurrentImage(imageData);
                    }}
                    key={index}
                  >
                    <StyledImage image={imageData} alt={`Image ${index}`} />
                  </ImageWrapper>
                )}
              </li>
            );
          })}
        </ul>
        <GalleryButton onClick={(): void => next()} style={{ right: "0" }}>
          {">"}
        </GalleryButton>
      </GalleryWrapper>

      {isOpen && (
        <Image
          onClick={() => {
            setIsOpen(false);
          }}
        >
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
