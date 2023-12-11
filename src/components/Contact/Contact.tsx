import React from "react";
import { Subtitle } from "../UI/Subtitle";
import InstagramIcon from "../../assets/icons/social/ig.png";
import FacebookIcon from "../../assets/icons/social/fb.png";
import WhatsappIcon from "../../assets/icons/social/whatsapp.png";
import { useTranslation } from "react-i18next";
import useWidth from "../../hooks/useWidth";
import useElementVisibility from "../../hooks/useElementVisibility";
import {
  Wrapper,
  ContentWrapper,
  Social,
  MobileSocial,
  Description,
} from "./contact.styles";


export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const width = useWidth();
  const isVisible = useElementVisibility("contact-section");

  return (
    <Wrapper id="contact-section">
      <Subtitle>Kontakt</Subtitle>
      <ContentWrapper>
        {width > 768 ? (
          <Social>
             <a href="https://www.instagram.com/brows_story_anna_nasciuk/" target="_blank">
            {isVisible && (
              <div>
                <span>INSTAGRAM</span>
                <img src={InstagramIcon} alt="instagram icon" width={40} />
              </div>
            )}
            </a>
            <a href="https://www.facebook.com/profile.php?id=100077929204681" target="_blank">
            {isVisible && (
              <div>
                <span>FACEBOOK</span>
                <img src={FacebookIcon} alt="facebook icon" width={40} />
              </div>
            )}
            </a>
            <a href="https://wa.me/+491751244152" target="_blank">
            {isVisible && (
              <div>
                <span>WHATSAPP</span>
                <img src={WhatsappIcon} alt="whatsapp icon" width={40} />
              </div>
            )}
            </a>
          </Social>
        ) : (
          <MobileSocial>
            <a href="https://www.instagram.com/brows_story_anna_nasciuk/" target="_blank">
              {isVisible && (
                <div>
                  <span>INSTAGRAM</span>
                  <img src={InstagramIcon} alt="instagram icon" width={40} />
                </div>
              )}
            </a>
            <a href="https://www.facebook.com/profile.php?id=100077929204681" target="_blank">
              {isVisible && (
                <div>
                  <span>FACEBOOK</span>
                  <img src={FacebookIcon} alt="facebook icon" width={40} />
                </div>
              )}
            </a>
            <a href="https://wa.me/+491751244152" target="_blank">
            {isVisible && (
              <div>
                <span>WHATSAPP</span>
                <img src={WhatsappIcon} alt="whatsapp icon" width={40} />
              </div>
            )}
            </a>
          </MobileSocial>
        )}
        <Description>
          <p>{t("contact.0")}</p>
          <p>{t("contact.1")}</p>
          <p>{t("contact.2")}</p>
        </Description>
      </ContentWrapper>
    </Wrapper>
  );
};

