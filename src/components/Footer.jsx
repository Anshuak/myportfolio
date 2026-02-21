import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} py-6`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`border-t ${theme === 'dark' ? 'border-cyan-700/50' : 'border-cyan-300/50'} pt-6 flex flex-col sm:flex-row justify-between items-center`}>
          <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
            &copy; {new Date().getFullYear()} Anshu Kailash. All rights reserved.
          </p>
          <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'} text-xs mt-2 sm:mt-0`}>
            Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
