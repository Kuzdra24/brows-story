import React from "react";
import Navbar from "./components/Navbar/Navbar";
import styled from "styled-components";
// import Footer from './Footer';

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export default Layout;
