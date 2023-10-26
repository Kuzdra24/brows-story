import React from "react";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
// import Footer from './Footer';

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
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Wrapper>{children}</Wrapper>
      {/* <Footer /> */}
    </>
  );
};
export function Head() {
  return (
    <>
      {/* <html lang={i18n.language} /> */}
      <title>Brows story</title>
    </>
  );
}

export default Layout;
