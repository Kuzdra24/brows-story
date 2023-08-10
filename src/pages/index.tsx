import * as React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18";
import Navbar from "../components/Navbar/Navbar";

const IndexPage = () => {
  const { t } = useTranslation(); 
  return (
    <>
      <Navbar/>
      <h1>{t('hello')}</h1>
    </>
  );
};

export function Head() {
  
  return (
    <>
      <html lang={i18n.language} />
      <title>Brows story</title>
    </>
  );
}

export default IndexPage;
