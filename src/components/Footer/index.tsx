import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

import {
    YELLOW_500,
} from "../colors";

import {
    InstagramIcon,
    FacebookIcon,
    TwitterIcon
} from "../icons";
import {MantineTheme, useMantineTheme} from "@mantine/core";

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 50px 20px;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 400;

`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: fit-content;
  max-width: 420px;
  border-radius: 4px;
  overflow: hidden;
  gap: 1px;
  @media screen and (max-width: 1100px) {
    width: 40%;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const FooterTitle = styled.div<{ theme: MantineTheme }>`
  display: flex;
  justify-content: center;
  padding: 0 0 10px 0;
  font-size: 2rem;
  text-align: center;
  font-weight: 600;
  color: ${({theme}) => theme.colorScheme === "dark"
          ? theme.colors.yellow[7]
          : theme.colors.blue[7]
  };
`;


const FooterItem = styled(Link)<{ theme: MantineTheme }>`
  display: flex;
  padding: 3px 0;
  color: ${({theme}) => theme.colorScheme === "dark"
          ? theme.colors.yellow[1]
          : theme.colors.dark[7]
  };

  &:hover {
    color: ${YELLOW_500};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  padding: 3px 0;
`;

const SocialMediaIcon = styled.a`
  display: flex;
  width: fit-content;
  padding: 0 5px 0 0;
`;


const Footer = () => {
    const useTheme = useMantineTheme()

    return (
        <FooterContainer theme={useTheme}>
            <Column>
                <FooterTitle theme={useTheme}>Site Haritası</FooterTitle>
                <FooterItem theme={useTheme} to="/">Anasayfa</FooterItem>
                <FooterItem theme={useTheme} to="/about">Hakkımızda</FooterItem>
                <FooterItem theme={useTheme} to="/contact">İletişim</FooterItem>
                <FooterItem theme={useTheme} to="/covid-announcement">
                    COVID-19 Duyuru
                </FooterItem>
            </Column>
            <Column>
                <FooterTitle theme={useTheme}>Bilgilendirme</FooterTitle>
                <FooterItem theme={useTheme} to="/privacy-policy">
                    Gizlilik Politikası
                </FooterItem>
                <FooterItem theme={useTheme} to="/cookie-policy">Çerez Politikası</FooterItem>
                <FooterItem theme={useTheme} to="/terms-of-use">Kullanım Koşulları</FooterItem>
                <FooterItem theme={useTheme} to="/kvkk">Kişisel Veriler</FooterItem>
                <FooterItem theme={useTheme} to="/faq">Sıkça Sorulan Sorular</FooterItem>
            </Column>

            <Column>
                <FooterTitle theme={useTheme}>Sosyal Medya</FooterTitle>
                <SocialIcons>
                    <SocialMediaIcon href="https://facebook.com" target="_blank">
                        <FacebookIcon/>
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://instagram.com" target="_blank">
                        <InstagramIcon/>
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://twitter.com" target="_blank">
                        <TwitterIcon/>
                    </SocialMediaIcon>
                </SocialIcons>
            </Column>
        </FooterContainer>
    )
}

export default Footer

