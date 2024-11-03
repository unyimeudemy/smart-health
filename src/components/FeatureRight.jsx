// components/FeatureSection.js
import React from 'react';
import styled from 'styled-components';
import virtualMeet from '../images/virtualMeet.PNG'

const FeatureRight = ({ title, description, buttonText, image }) => (
  <FeatureContainer>
    <FeatureText>
      <h2>{title}</h2>
      <p>{description}</p>
      {buttonText && <Button>{buttonText}</Button>}
    </FeatureText>
    <Image src={virtualMeet} alt={title} />

  </FeatureContainer>
);

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 350px;
  height: 350px;
  margin-left: 30px;
  border-radius: 10px;

`;

const FeatureText = styled.div`
  width: 50%;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #1f3d5c
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f5b700;
  border: none;
  border-radius: 5px;
  color: #1f3d5c;
  font-weight: bold;
  cursor: pointer;
  width: 200px;
  height: 50px;
  font-size: 17px;
`;

export default FeatureRight;
