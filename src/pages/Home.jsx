import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import GamingSection from '../components/GamingSection';
import Contact from '../components/Contact';
import CodingProfiles from '../components/CodingProfiles';
import Certifications from '../components/Certifications/Certifications';
import TerminalSection from '../components/TerminalSection';
import TimelineSection from '../components/TimelineSection';
import TestimonialsSection from '../components/TestimonialsSection';

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
      <div id="timeline">
        <TimelineSection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="peers">
        <TestimonialsSection />
      </div>
      <div id="coding">
        <CodingProfiles />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="gaming">
        <GamingSection />
      </div>
      <div id="terminal">
        <TerminalSection />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
