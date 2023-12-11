import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import i18n from 'i18next';
import styled from "styled-components";

const Wrapper = styled.main`
  /* width: 100vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Helmet>
        <html lang={i18n.language} />
        <title>{pageTitle ? `Brows story | ${pageTitle}` : 'Brows Story' }</title>
      </Helmet>
      <Navbar />
      <Wrapper>{children}</Wrapper>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
