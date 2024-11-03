import React from 'react';
import styled from 'styled-components';

const DoctorCard = ({ name, description }) => {
  return (
    <Card>
      <h3>{name}</h3>
      <p>{description}</p>
    </Card>
  );
};

export default DoctorCard;

const Card = styled.div`
  background: #fff;
  padding: 1rem;
  margin: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: left;
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 1rem;
  }
`;
