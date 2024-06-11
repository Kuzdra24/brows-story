import React, {useEffect} from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import { AboutSecction } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";

const IndexPage = () => {
  useEffect(() => {
    const alreadySet = window.localStorage.getItem("i18nextLng");
    if (!alreadySet) {
      window.localStorage.setItem("i18nextLng", "de");
    }
  }, [])
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
