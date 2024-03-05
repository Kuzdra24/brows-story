import * as React from "react";
import { useTranslation } from "react-i18next";
import HeroSection from "../components/HeroSection/HeroSection";
import { AboutSecction } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";

const IndexPage = () => {
  const alreadySet = window.localStorage.getItem("i18nextLng");
  if (!alreadySet) {
    window.localStorage.setItem("i18nextLng", "pl");
  }
  return (
    <>
      <HeroSection />
      <AboutSecction />
      <Contact />
    </>
  );
};

export function Head() {
  return (
    <>
      <title>Brows story</title>
    </>
  );
}

export default IndexPage;
