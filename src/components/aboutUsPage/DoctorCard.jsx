import React from 'react';
import styled from 'styled-components';

const DoctorCard = ({ name, image, description }) => {
  return (
    <Card>
      <CardImage src={image} />
      <CardText>
      <h3>{name}</h3>
      <p>{description}</p>
      </CardText>
    </Card>
  );
};

export default DoctorCard;

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
  width: 450px;
  text-align: left;
  display: flex;
  flex-direction: row;
  gap: 10px;
 
`;
