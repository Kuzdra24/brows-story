import React from 'react';
import styled from 'styled-components';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import {Link} from 'gatsby';
 

const NavbarWrapper = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  cursor: pointer;
`;

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NavbarWrapper>
      <div>
        <NavItem to={'brows'}>{t('home')}</NavItem>
        <NavItem to={'jf'}>{t('about')}</NavItem>
        <NavItem to={'jf'}>{t('services')}</NavItem>
      </div>
      <LanguageSwitcher />
    </NavbarWrapper>
  );
};

export default Navbar;
