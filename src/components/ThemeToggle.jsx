import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none">
      {theme === 'light' ? <FaMoon size={24} /> : <FaSun size={24} />}
    </button>
  );
};

export default ThemeToggle;
