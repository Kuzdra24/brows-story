import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import deTranslation from "./locales/de.json";
import plTranslation from "./locales/pl.json";

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: deTranslation,
    },
    pl: {
      translation: plTranslation,
    },
  },
  lng: "pl",
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
