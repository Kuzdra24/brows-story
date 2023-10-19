import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

interface ImgPropTypes {
  imgSrc?: string;
}

const StyledTitle = styled.h2<ImgPropTypes>`
  font-family: Cinzel;
  font-size: 32px;
  position: relative;
  max-width: 480px;
  width: 100%;
  &:after {
    content: "";
    background-image: url(${({ imgSrc }) => imgSrc && imgSrc});
    background-size: cover;
    background-position: center;
    width: 50px;
    height: 60px;
    position: absolute;
    z-index: -1;
    top: -20px;
    right: -20px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
 
`;
const MenuItem = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  strong {
    margin-left: 5px;
  }
`;

export default function PriceList() {
  const { t } = useTranslation();

  const pricesBrows = [
    { product: t("pricelist.browsServices.0"), price: "300€" },
    { product: t("pricelist.browsServices.1"), price: "35€" },
    { product: t("pricelist.browsServices.2"), price: "80€" },
  ];

  const pricesMouth = [
    { product: t("pricelist.mouthServices.0"), price: "300€" },
    { product: t("pricelist.browsServices.1"), price: "35€" },
  ];

  return (
    <Wrapper>
      <StyledTitle>Cennik</StyledTitle>
      <section>
        <h2>{t("pricelist.brows")}</h2>
        <ul>
          {pricesBrows.map((e) => (
            <li>
              <MenuItem>
                <span>{e.product}</span>
                <strong>{e.price}</strong>
              </MenuItem>
            </li>
          ))}
        </ul>
        <h2>{t("pricelist.mouth")}</h2>
        <ul>
          {pricesMouth.map((e) => (
            <li>
              <MenuItem>
                <span>{e.product}</span>
                <strong>{e.price}</strong>
              </MenuItem>
            </li>
          ))}
        </ul>
      </section>
    </Wrapper>
  );
}
