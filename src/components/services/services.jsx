import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../Footer';

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 0;
`;

const HeroText = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #132639;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  color: #132639;
`;

const AskContainer = styled.div`
  margin: 2rem 0;
`;

const AskQuestion = styled.div`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #132639;
  border-radius: 5px;
  font-size: 1rem;
  color: #132639;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;
  width: 100%;
`;

const InfoBox = styled.div`
  max-width: 300px;
  color: #132639;
  text-align: left;
`;

const InfoTitle = styled.h3`
  color: #ffbf00;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  line-height: 1.6;
`;

const Services = () => (
  <>
    <Header/>
    <MainContainer>
    <HeroText>The best care. Period.</HeroText>
    <HeroDescription>
    We blend medical expertise with advanced software design to provide a unique,
     tailored care experience. From everyday concerns to complex issues, we deliver
      top-tier clinical insights with a thoughtful, personalized approach to meet your health needs.
    </HeroDescription>

    <AskContainer>
      <AskQuestion>My allergies have been acting up with the change in weather. What do you recommend?</AskQuestion>
      <AskQuestion>My migraines seem to be getting worse. What can I do?</AskQuestion>
      <AskQuestion>I need my prescriptions renewed. Can you help?</AskQuestion>
      <AskQuestion>What are my birth control options?</AskQuestion>
      <AskQuestion>Can you recommend a great therapist?</AskQuestion>
    </AskContainer>

    <InfoContainer>
      <InfoBox>
        <InfoTitle>Everyday Care</InfoTitle>
        <InfoText>
          For common medical issues, we offer a personalized, convenient
          approach to your care.
        </InfoText>
      </InfoBox>
      <InfoBox>
        <InfoTitle>Getting Answers</InfoTitle>
        <InfoText>
          With a team of expert clinicians, we can accurately determine
          what’s going on and treat it effectively.
        </InfoText>
      </InfoBox>
      <InfoBox>
        <InfoTitle>Ongoing Care</InfoTitle>
        <InfoText>
          We’re with you for the long haul. By making it easy to collect and
          manage your health information, we can help you identify trends and
          patterns to better improve your health.
        </InfoText>
      </InfoBox>
    </InfoContainer>
  </MainContainer>
  <Footer/>
  </>
);

export default Services;
