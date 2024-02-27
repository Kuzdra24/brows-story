import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby";
import miniLogo from "../../assets/icons/miniLogo.png";
import useWidth from "../../hooks/useWidth";
import BurgerBtn from "./BurgerBtn";

const NavbarWrapper = styled.nav`
  color: ${({ theme }) => theme.colors.dark};
  background: linear-gradient(#ede9ddbd, transparent);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const NavItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
`;
const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const HamburgerMenu = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  z-index: 999;
  animation: ${slideIn} 0.4s ease-in-out forwards;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.dark};
    margin: 10px 0;
  }
`;

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const width = useWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return width > 576 ? (
    <NavbarWrapper>
      <Link to="/">
        <img src={miniLogo} alt="Logo" height="70" />
      </Link>

      <NavItemsWrapper>
        <NavItem to={"/#about"}>{t("menu.about")}</NavItem>
        <NavItem to={"/services"}>{t("menu.services")}</NavItem>
        <NavItem to={"/priceList"}>{t("menu.prices")}</NavItem>
        <LanguageSwitcher />
      </NavItemsWrapper>
    </NavbarWrapper>
  ) : (
    <>
      <NavbarWrapper>
        <Link to="/">
          <img src={miniLogo} alt="Logo" height="70" />
        </Link>
        <BurgerBtn open={isMenuOpen} setOpen={toggleMenu} />
      </NavbarWrapper>
      {isMenuOpen && (
        <HamburgerMenu>
          <Link to="/" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={miniLogo} alt="Logo" height="70" />
          </Link>
          <NavItem to={"/#about"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {t("menu.about")}
          </NavItem>
          <NavItem to={"/services"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {t("menu.services")}
          </NavItem>
          <NavItem to={"/priceList"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {t("menu.prices")}
          </NavItem>
          <LanguageSwitcher />
        </HamburgerMenu>
      )}
    </>
  );
};

export default Navbar;
