import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import iphone from './images/iphoneAppS.PNG'
import seniorCare from './images/seniorCare.PNG'
import styled from 'styled-components';
import FeatureRight from './components/FeatureRight';
import Header from './components/header';

const Home = () => (
  <>
    <Header />
    <HeroSection />
    <FeatureWrapper>
    <FeatureSection
      title="Check Our Health Apps"
      description="
      Explore our innovative health apps designed to keep you in tune with your 
      well-being. B-Check monitors vital signs through your Apple Watch, keeping 
      track of your body’s health in real-time. M-Check analyzes phone usage patterns 
      to help monitor and support your mental health. With our apps, staying connected
       to your health has never been easier.
     "
      buttonText="Read more"
      image={iphone}
    />
    <FeatureRight
      title="Access Medical Expertise Anytime, Anywhere"
      description="
        Get world-class healthcare on your schedule. Our medical team is 
        available 24/7 to provide expert guidance, diagnoses, and personalized
         care—all from the comfort of your home.
       "
       buttonText="Set a meet"
      image="/path-to-image2.jpg"
    />
        <FeatureSection
      title="Hire a service"
      description="
        Find reliable professionals to support your home and family. Whether you need 
        a caring nanny, dedicated senior care, a skilled cook, or other services, we 
        connect you with trusted experts ready to help. Enjoy peace of mind with quality
         care tailored to your needs.
       "
      buttonText="Get the App"
      image={seniorCare}
    />
    </FeatureWrapper>

    <PricingSection />
    <Footer />
  </>
);

const FeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`



export default Home;
