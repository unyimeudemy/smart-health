// components/Header.js
import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Nav>
    <Logo>Smart Health</Logo>
    <NavLinks>
      <HeaderTab href="#">About Us</HeaderTab>
      <HeaderTab href="#">Services</HeaderTab>
      <HeaderTab href="#">Careers</HeaderTab>
      <HeaderTab href="#">Contact</HeaderTab>
    </NavLinks>

    <Button>Join Now</Button>
  </Nav>
);

const HeaderTab = styled.div`
  font-size:20px;
  font-weight: 600;
  cursor: pointer;

  
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #1f3d5c;
  color: white;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const NavLinks = styled.div`
    margin: 0 15px;
    color: white;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    gap: 30px;
    
  
`;

const Button = styled.button`
  background-color: #f5b700;
  border: none;
  border-radius: 5px;
  color: #1f3d5c;
  font-weight: bold;
  cursor: pointer;

  border-radius: 10px;
  width: 150px;
  padding: 5px 15px;
  font-weight: 900;
  font-size: large;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export default Header;
