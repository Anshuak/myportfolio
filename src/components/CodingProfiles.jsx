import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';

// LeetCode Icon Component (SVG)
const LeetCodeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.902l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.515.496-1.367-.039-1.902-.535-.535-1.386-.552-1.9-.038zM20.813 13.015h-10.15c-.7 0-1.27.601-1.27 1.343s.57 1.344 1.27 1.344h10.15c.701 0 1.27-.602 1.27-1.344s-.569-1.343-1.27-1.343z" />
  </svg>
);

const codingProfiles = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Anshuak/',
    Icon: LeetCodeIcon,
    color: 'text-yellow-500',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/anshukailash_ak',
    Icon: (props) => <FontAwesomeIcon icon={faHackerrank} {...props} />,
    color: 'text-green-500',
  },
];

const CodingProfiles = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="coding" className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={`text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Coding Profiles
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {codingProfiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-4 p-6 rounded-lg shadow-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-800/50 hover:bg-gray-700/50'
                  : 'bg-gray-100/50 hover:bg-gray-200/50'
              }`}
              whileHover={{ scale: 1.05, boxShadow: `0px 0px 12px ${theme === 'dark' ? 'rgba(56, 189, 248, 0.5)' : 'rgba(14, 165, 233, 0.5)'}` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <profile.Icon className={`w-12 h-12 ${profile.color}`} />
              <div className="text-lg font-semibold">{profile.name}</div>
              <FaExternalLinkAlt className="ml-2" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
