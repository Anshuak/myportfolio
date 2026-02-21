import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { ThemeContext } from '../context/ThemeContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJs,
  faCss3Alt,
  faJava,
  faNodeJs,
  faAws,
  faDocker,
  faJenkins,
  faHackerrank,
} from '@fortawesome/free-brands-svg-icons';
import { faBolt, faCubes, faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

const icons = {
  React: faReact,
  JavaScript: faJs,
  'Tailwind CSS': faCss3Alt,
  'Framer Motion': faBolt,
  'Spring Boot': faJava,
  Java: faJava,
  Microservices: faCubes,
  'Node.js': faNodeJs,
  AWS: faAws,
  Docker: faDocker,
  Kubernetes: faCubes, // Placeholder, no specific icon in free version
  Jenkins: faJenkins,
  MySQL: faDatabase,
  MongoDB: faDatabase,
  PostgreSQL: faDatabase,
};

const SkillBar = ({ name, level }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          <FontAwesomeIcon icon={icons[name]} className="w-6 h-6 mr-2" />
          <span className={`font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{name}</span>
        </div>
        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>{level}%</span>
      </div>
      <div className={`w-full rounded-full h-2.5 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}>
        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        ></motion.div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              className={`p-6 rounded-lg backdrop-blur-sm border ${
                theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'
              }`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className={`text-2xl font-bold mb-6 capitalize ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}
              >
                {category}
              </h3>
              <div>
                {skillList.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={`text-xl font-medium mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Solved over 400+ questions across HackerRank and LeetCode
          </p>
          <div className="flex justify-center gap-8">
            <a href="https://leetcode.com/u/Anshuak/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
              <FontAwesomeIcon icon={faCode} className="text-3xl text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-200 group-hover:text-white' : 'text-gray-800 group-hover:text-black'}`}>LeetCode</span>
            </a>
            <a href="https://www.hackerrank.com/profile/anshukailash_ak" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3">
              <FontAwesomeIcon icon={faHackerrank} className="text-3xl text-green-500 group-hover:scale-110 transition-transform" />
              <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-200 group-hover:text-white' : 'text-gray-800 group-hover:text-black'}`}>HackerRank</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;