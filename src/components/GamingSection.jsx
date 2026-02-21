import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaTwitch } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const GamingSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={`text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          My Gaming Life
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            className={`p-8 rounded-lg backdrop-blur-sm border ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'}`}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>Casual Gamer</h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
              I enjoy playing video games to unwind after a long day of coding. Currently, I'm spending a lot of time on Valorant, but I also enjoy exploring other genres and playing with friends.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-gray-400 hover:text-red-500' : 'text-gray-600 hover:text-red-600'} transition-colors`}><FaYoutube size={32}/></a>
              <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-gray-400 hover:text-purple-500' : 'text-gray-600 hover:text-purple-600'} transition-colors`}><FaTwitch size={32}/></a>
            </div>
          </motion.div>
          <motion.div
            className={`p-8 rounded-lg backdrop-blur-sm border ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'}`}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>My Setup</h3>
            <ul className={`list-disc list-inside space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>CPU: AMD Ryzen 9 5900X</li>
              <li>GPU: NVIDIA GeForce RTX 3080</li>
              <li>RAM: 32GB DDR4 3600MHz</li>
              <li>Monitor: 27" 1440p 240Hz</li>
              <li>Keyboard: Custom Mechanical Keyboard</li>
              <li>Mouse: Logitech G Pro X Superlight</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GamingSection;
