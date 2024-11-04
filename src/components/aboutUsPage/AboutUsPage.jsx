import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import DoctorCard from './DoctorCard';
import Footer from '../Footer';
import PrincipleCard from './PrincipleCard';
import officedesk from '../../images/officedesk.PNG'
import maleDoctor from '../../images/maledoctor.PNG'
import femaleDoctor from '../../images/femaledoctor.PNG'
import cheapservice from '../../images/cheapservice.PNG'
import standardhealth from '../../images/standardhealth.PNG'


const AboutUsPage = () => {
  return (
    <PageContainer>
      <Header />
      
      <MainSection>
        <Content>
          <h1>A track record of innovation.</h1>
          <div className=""></div>
          <p>Smart Health is powered by innovators across healthcare, technology, and human-centered design,
          with a team dedicated to making healthcare more accessible and affordable for all.</p>
          <p>
           Partnering with leading medical professionals, we’re on a journey to redefine what quality care can 
           look like. We became doctors to help others, and Smart Health is here to help us make that 
           impact even greater.
          </p>
        </Content>
        <MainImage src={officedesk} />
      </MainSection>

      

      <Section>
        <h2>Meet the doctors behind Smart Health.</h2>
        <DoctorCards>
          <DoctorCard 
            name="Natalie Atabong, MD" 
            image={femaleDoctor}
            description="Dr. Atabong received her doctorate degree from Stanford University and is a specialist in integrative medicine."
          />
          <DoctorCard 
            name="Andrew Cunningham, MD" 
            image={maleDoctor}
            description="Dr. Cunningham specializes in internal medicine and has over 20 years of experience in healthcare."
          />
        </DoctorCards>
      </Section>

      <Section>
        <h2>Our North Star.</h2>
        <PrincipleCards>
          <PrincipleCard 
            title="Standard Health Service Focus" 
            image={standardhealth}
            description="Our North Star is to set the standard for quality in telemedicine, ensuring every patient receives expert, compassionate care with every visit."
          />
          <PrincipleCard 
            title="Reliable Health Service at Reasonable Cost Focus" 
            image={cheapservice}
            description="Our North Star is reliable, affordable healthcare for all. We’re committed to providing dependable care that fits your life and budget."
          />
        </PrincipleCards>
      </Section>
      <Footer />
    </PageContainer>
  );
};

export default AboutUsPage;

const PageContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const MainSection = styled.section`
  display: flex;
  padding: 2rem;
  background-color: #f8f9fa;
  align-items: center;
`;

const Content = styled.div`
  max-width: 50%;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const MainImage = styled.img`
  max-width: 50%;
  border-radius: 8px;
`;

const Section = styled.section`
  padding: 2rem;
  text-align: center;
`;

const DoctorCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const PrincipleCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ViewCareersButton = styled.button`
  background-color: #ffd700;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #ffcc00;
  }
`;
