import React, { useState, useEffect } from "react";
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
            {isVisible && (
              <div>
                <span>INSTAGRAM</span>
                <img src={InstagramIcon} alt="instagram icon" width={40} />
              </div>
            )}
            {isVisible && (
              <div>
                <span>FACEBOOK</span>
                <img src={FacebookIcon} alt="facebook icon" width={40} />
              </div>
            )}
            {isVisible && (
              <div>
                <span>WHATSAPP</span>
                <img src={WhatsappIcon} alt="whatsapp icon" width={40} />
              </div>
            )}
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
            {isVisible && (
              <div>
                <span>FACEBOOK</span>
                <img src={FacebookIcon} alt="facebook icon" width={40} />
              </div>
            )}
            {isVisible && (
              <div>
                <span>WHATSAPP</span>
                <img src={WhatsappIcon} alt="whatsapp icon" width={40} />
              </div>
            )}
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

