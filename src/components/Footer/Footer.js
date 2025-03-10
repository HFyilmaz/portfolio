import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:hasanfiratyilmaz@hotmail.com">
            hasanfiratyilmaz@hotmail.com
          </LinkItem>
        </LinkColumn>

      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Working hard, living hard!</Slogan>
        </CompanyContainer>
        
        <SocialContainer>
          <SocialIcons href='https://www.github.com/HFyilmaz'>
            <AiFillGithub size="3rem" />
          </SocialIcons>

          <SocialIcons href='https://www.linkedin.com/in/hasanfiratyilmaz'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>

          <SocialIcons href='https://www.instagram.com/hasanfiratyilmaz'>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;