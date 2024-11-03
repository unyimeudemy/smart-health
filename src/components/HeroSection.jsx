// components/HeroSection.js
import React from 'react';
import styled from 'styled-components';
import family from "../images/family4.PNG"

const HeroSection = () => (
  <HeroContainer>
    <HeroText>
      <h1>Compassionate care from our experienced experts.</h1>
      <p>Your health matters to us. Reach Smart Health anytime, anywhere.</p>
      <Button>Get Started</Button>
    </HeroText>
  </HeroContainer>
);

const HeroContainer = styled.div`
  background-image: url(${family});
  background-size: cover;
  background-position: center;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
`;

const HeroText = styled.div`
  text-align: center;
  max-width: 600px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  background-color: #f5b700;
  border: none;
  border-radius: 5px;
  color: #1f3d5c;
  font-weight: bold;
  cursor: pointer;
  width: 230px;
  font-weight: 900;
  font-size: large;
  gap: 5px;
`;

export default HeroSection;
