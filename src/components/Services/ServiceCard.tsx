import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { useTranslation } from "react-i18next";

interface CardWrapperProps {
  backgroundImage: string;
}

const CardWrapper = styled.div<CardWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  width: 100%;
  max-width: 380px;
  height: 500px;
  background-color: #cccccc;
  background-size: cover;
  background-position: center;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(238, 238, 238, 0.15);
  }
`;

const ServiceName = styled.div`
  margin-top: auto;
  background-color: #ffffff55;
  width: 100%;
  height: 120px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  span {
    font-family: cinzel;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

interface ServiceCardProps {
  name: string;
  backgroundImage: string;
  slug: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  backgroundImage,
  slug,
}) => {
  const { t } = useTranslation();
  return (
    <CardWrapper backgroundImage={backgroundImage}>
      <ServiceName>
        <span>{name}</span>
        <a href={slug} style={{zIndex: '99'}}>
          <Button style={{ width: "300px" }}>{t("more")}</Button>
        </a>
      </ServiceName>
    </CardWrapper>
  );
};

export default ServiceCard;
