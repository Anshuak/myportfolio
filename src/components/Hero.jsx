import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profileImage from '../assets/images/IMG_4990.jpg';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const [text] = useTypewriter({
    words: ['Software Engineer', 'AI Enthusiast', 'Gamer'],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className={`absolute inset-0 -z-10 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-black to-purple-900/50' : 'bg-gradient-to-br from-gray-100 via-white to-purple-100/50'}`}></div>
      {/* Particle/glow animation placeholder */}
      <div className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/images/background.jpg')] bg-cover bg-center opacity-5 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="z-10 text-center md:text-left"
          >
            <motion.h1
              className={`text-5xl md:text-8xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Anshu Kailash
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl text-cyan-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span>{text}</span>
              <Cursor cursorColor='#F7AB0A' />
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 items-center">
              <Link to="projects" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto text-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(56, 189, 248)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-cyan-500 text-black font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-cyan-400"
                >
                  View Projects
                </motion.button>
              </Link>
              <a href="/resume.pdf" download className="w-full sm:w-auto text-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255, 255, 255)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full sm:w-auto border-2 border-white-500 font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-white-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                >
                  Download Resume
                </motion.button>
              </a>
              <Link to="contact" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto text-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(168, 85, 247)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full sm:w-auto border-2 border-purple-500 font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:bg-purple-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="hidden md:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={profileImage} alt="Anshu Kailash" className="rounded-full object-cover w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
