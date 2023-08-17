import * as React from "react";
import { useTranslation } from "react-i18next";

const PriceList = () => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("priceList")}</h1>
    </>
  );
};

export default PriceList;
