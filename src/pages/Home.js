import React from 'react';
import Hero from '../components/Hero';
import Navbar from "../components/Navbar"
import SeoMarquee from '../components/SeoMarquee';
import About from '../components/About';
import Brandgrowvideo from "../components/Brandgrowvideo"
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>

      <Hero />
      <About />
      <SeoMarquee />
      <Brandgrowvideo/>
      <ServicesSection/>
      <Footer/>
    </>

  );
};

export default Home;
