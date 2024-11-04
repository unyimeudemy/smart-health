import React from 'react';
import styled from 'styled-components';

const PrincipleCard = ({ title, image, description }) => {
  return (
    <Card>
      <CardText>
      <h3>{title}</h3>
      <p>{description}</p>
      </CardText>
      <CardImage src={image} />

    </Card>
  );
};

export default PrincipleCard;

const CardImage = styled.img`
 max-width: 40%;
  border-radius: 8px;
`

const CardText = styled.div`
   h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
    font-family: cursive;
  }
`

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 480px;
  text-align: left;
  display: flex;
  flex-direction: row;
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
  }
`;
