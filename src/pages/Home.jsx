import React from 'react';
import Hero from '../components/Hero';
import Navbar from "../components/Navbar"
import SeoMarquee from '../components/SeoMarquee';
import About from '../components/About';
import Brandgrowvideo from "../components/Brandgrowvideo"
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import TestimonialsSection from '../components/testimonials-section';
import Faqsec from "../components/faq-section"
import Blogs from "../components/articles-section"

const Home = () => {
  return (
    <>

      <Hero />
      <About />
      <SeoMarquee />
      <Brandgrowvideo/>
      <ServicesSection/>
      <TestimonialsSection/>
      <Blogs/>
      <Faqsec/>

    </>

  );
};

export default Home;
