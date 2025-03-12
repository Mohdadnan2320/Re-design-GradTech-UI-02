import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HiringNetworks from '../components/HiringNetworks';
import Courses from '../components/Courses';
import WhyGradTech from '../components/WhyGradTech';
import Slider from '../components/Slider';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';

const LandingPage = () => {
  return (
    <div className='bg-[var(--color-background-secondary)] select-none'>
      <Navbar />
      <Hero />
      <HiringNetworks />
      <Courses />
      <WhyGradTech />
      <ImageSlider />
      <Slider />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
