import React from "react";
import styled from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Link } from "gatsby";
import miniLogo from "../../assets/icons/miniLogo.png";

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

const Select = styled.select`
  background-color: transparent;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NavbarWrapper>
      <Link to="/">
        <img src={miniLogo} alt="Logo" height="50" />
      </Link>
      <NavItemsWrapper>
        <NavItem to={"/"}>{t("menu.about")}</NavItem>
        <NavItem to={"/"} >{t("menu.services")}</NavItem>
        <NavItem to={"/priceList"}>{t("menu.prices")}</NavItem>
        <LanguageSwitcher />
      </NavItemsWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
