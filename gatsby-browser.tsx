import * as React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18";
import GlobalStyles from "./src/assets/styles/globalStyles";
import theme from "./src/assets/styles/theme";
import { ThemeProvider } from "styled-components";
import Layout from "./src/Layout";

export const wrapPageElement = ({ element }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout pageTitle="Brows Story">{element}</Layout>
      </ThemeProvider>
    </I18nextProvider>
  );
};
