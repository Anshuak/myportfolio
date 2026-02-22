import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/IMG_4990.jpg';
import { ThemeContext } from '../context/ThemeContext';

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const highlightedSkills = ['Spring Boot', 'React', 'Microservices', 'AWS'];

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={`text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.figure
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.figure>
          <motion.div
            className={`text-lg text-center md:text-left ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-4">
              A passionate Full Stack Developer skilled in Java, Spring Boot, React, and more. I thrive on solving complex problems with efficient and elegant solutions, from robust backends to captivating user interfaces.
            </p>
            <p>
              Always learning and eager to collaborate on creating impactful digital experiences. When I'm not coding, I'm an avid gamer, always looking for the next challenge.
            </p>
          </motion.div>
        </div>
        <div className="mt-16">
          <h3 className={`text-3xl font-bold text-center mb-8 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
            Core Expertise
          </h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {highlightedSkills.map((skill) => (
              <motion.article
                key={skill}
                className={`p-6 rounded-lg backdrop-blur-sm border ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-100/50 border-gray-200'}`}
                variants={cardVariants}
              >
                <h4 className="text-xl font-semibold">{skill}</h4>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
