// components/Footer.js
import React from 'react';
import styled from 'styled-components';
import mainlogix from '../images/mainlogix.png';

const Footer = () => (
  <FooterContainer>
    <LogoWrapper>
      <Logo>Smart Health |</Logo>
      <Mainlogix src={mainlogix} />
    </LogoWrapper>
  
    <FooterLinks>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Contact</a>
    </FooterLinks>
    <p>© 2024 Smart Health, Inc.</p>
  </FooterContainer>
);


const LogoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`
const FooterContainer = styled.footer`
  padding: 30px;
  background-color: #1f3d5c;
  color: white;
  text-align: center;
`;

const Logo = styled.h2`
  margin-bottom: 10px;
  font-size: 32px;
`;

const FooterLinks = styled.div`
  margin-bottom: 15px;

  a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
  }
`;

const Mainlogix = styled.img`
    width: 65px;
    height: 45px;
`

export default Footer;
