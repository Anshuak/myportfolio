import React from 'react';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        <title>Anshu Kailash | Software Engineer Portfolio</title>
        <meta name="description" content="Software Engineer specializing in React, AI, and full-stack web development. View my portfolio, projects, and skills." />
        <link rel="canonical" href="https://anshukailash.in/" />
      </Helmet>
      <main className="overflow-x-hidden">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="timeline">
          <TimelineSection />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="peers">
          <TestimonialsSection />
        </section>
        <section id="coding">
          <CodingProfiles />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="gaming">
          <GamingSection />
        </section>
        <section id="terminal">
          <TerminalSection />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;
