import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import DoctorCard from './DoctorCard';
import Footer from '../Footer';
import PrincipleCard from './PrincipleCard';

const AboutUsPage = () => {
  return (
    <PageContainer>
      <Header />
      
      <MainSection>
        <Content>
          <h1>A track record of innovation.</h1>
          <p>
            Our team is led by best-in-class innovators in healthcare, technology, 
            and human-centered design.
          </p>
          <p>
            Working with leading medical experts, we’re just beginning our journey 
            to improve the quality and affordability of health care for all.
          </p>
          <p>
            We became doctors to help people. Then we built Galileo to help us do it better.
          </p>
        </Content>
        <MainImage src="/path-to-main-image.jpg" alt="Innovation" />
      </MainSection>

      <Section>
        <h2>Our Story</h2>
        <p>
          Galileo was founded by Thomas Lee, MD, a Harvard-trained internist and pioneering 
          innovator in healthcare. As head of One Medical for 14 years, Thomas helped to make 
          in-person primary care work and expand across the nation.
        </p>
        {/* Additional paragraphs go here */}
      </Section>

      <Section>
        <h2>Meet the doctors behind Galileo.</h2>
        <DoctorCards>
          <DoctorCard 
            name="Natalie Atabong, MD" 
            description="Dr. Atabong received her doctorate degree from Stanford University and is a specialist in integrative medicine."
          />
          <DoctorCard 
            name="Andrew Cunningham, MD" 
            description="Dr. Cunningham specializes in internal medicine and has over 20 years of experience in healthcare."
          />
          {/* Add more DoctorCard components here */}
        </DoctorCards>
      </Section>

      <Section>
        <h2>We’re guided by 5 key principles.</h2>
        <PrincipleCards>
          <PrincipleCard 
            title="The power of a team" 
            description="By working together, our clinicians deliver more comprehensive and insightful advice for patients."
          />
          <PrincipleCard 
            title="A 360 Perspective" 
            description="We view you and your health from a holistic perspective, considering all aspects of your life."
          />
          {/* Add more PrincipleCard components here */}
        </PrincipleCards>
      </Section>

      <Section>
        <h2>Join our team.</h2>
        <ViewCareersButton>View Careers</ViewCareersButton>
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
