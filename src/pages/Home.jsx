import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import GamingSection from '../components/GamingSection';
import Contact from '../components/Contact';
import CodingProfiles from '../components/CodingProfiles';

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="coding">
        <CodingProfiles />
      </div>
      <div id="gaming">
        <GamingSection />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
