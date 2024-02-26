import * as React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import dolarIcon from "../assets/icons/icons8-dolar-64.png";

interface ImgPropTypes {
  imgSrc?: string;
}

const StyledTitle = styled.h1<ImgPropTypes>`
  font-family: Cinzel;
  font-size: 36px;
  position: relative;
  max-width: 210px;
  width: 100%;
  text-align: center;
  &:after {
    content: "";
    background-image: url(${({ imgSrc }) => imgSrc && imgSrc});
    background-size: cover;
    background-position: center;
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: -1;
    top: -10px;
    right: -10px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 20px; */
  section {
    width: 100%;
    margin: 20px;
    ul {
      padding: 0 15px;
      li {
        margin: 20px auto;
        list-style: none;
        margin: 0;
      }
    }
  }
`;
const MenuItem = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  strong {
    margin-left: 5px;
  }
`;
const StyledSubtitle = styled.h2`
  font-family: cinzel;
  font-size: 32px;
`;
export default function PriceList() {
  const { t } = useTranslation();

  const pricesBrows = [
    { product: t("pricelist.browsServices.0"), price: "240€" },
    { product: t("pricelist.browsServices.1"), price: "35€" },
    { product: t("pricelist.browsServices.2"), price: "80€" },
  ];

  const pricesMouth = [
    { product: t("pricelist.mouthServices.0"), price: "200€" },
    { product: t("pricelist.browsServices.1"), price: "50€" },
  ];

  const pricesRest = [
    { product: t("pricelist.rest.0"), price: "35€" },
    { product: t("pricelist.rest.1"), price: "40€" },
    { product: t("pricelist.rest.2"), price: "40€" },
    { product: t("pricelist.rest.3"), price: "15 €" },
  ];

  return (
    <Wrapper>
      <StyledTitle imgSrc={dolarIcon}>Cennik</StyledTitle>
      <section>
        <StyledSubtitle>{t("pricelist.brows")}</StyledSubtitle>
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
        <StyledSubtitle>{t("pricelist.mouth")}</StyledSubtitle>
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
        <hr />
        <MenuItem style={{margin: "20px 0 40px"}}>
          <span>
            Odswieżenie makijażu pernamentnego wykonanego w <br />
            Brows Story Anna Nasciuk do 1 roku
          </span>
          <strong> -50%</strong>
        </MenuItem>
        <StyledSubtitle>Stylizacja brwi</StyledSubtitle>
        <ul>
        {pricesRest.map((e) => (
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
