import React from 'react';
import styled from 'styled-components';

const PricingSection = () => (
  <PricingContainer>
    <h2>World-class care at your fingertips. Access Galileo whenever you need it.</h2>
    <PricingCards>
      <Card>
        <Price>$39</Price>
        <p>Basic Plan</p>
      </Card>
      <Card>
        <Price>$299</Price>
        <p>Pro Plan</p>
      </Card>
      <Card>
        <Price>$45</Price>
        <p>Family Plan</p>
      </Card>
    </PricingCards>
  </PricingContainer>
);

const PricingContainer = styled.div`
  padding: 50px;
  text-align: center;
  background-color: #f9f9f9;
`;

const PricingCards = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 0 15px;
  width: 150px;
  text-align: center;
  border-radius: 10px;
`;

const Price = styled.h3`
  font-size: 2rem;
  color: #f5b700;
`;

export default PricingSection;
