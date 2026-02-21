import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const sections = ['hero', 'about', 'skills', 'projects', 'coding', 'certifications', 'gaming', 'terminal', 'contact'];

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? (theme === 'dark' ? 'bg-black/80 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200') : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className={`text-2xl font-bold cursor-pointer transition-colors ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
          >
            Portfolio
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {sections.map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className={`capitalize cursor-pointer transition-colors duration-300 font-medium ${activeSection === section
                      ? (theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600')
                      : (theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black')
                      }`}
                  >
                    {section}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="/resume.pdf"
              download
              className={`capitalize cursor-pointer transition-colors duration-300 font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`}
            >
              Resume
            </a>
          </div>
          <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer z-[110]">
            {nav ? <FaTimes size={30} className={theme === 'dark' ? 'text-white' : 'text-black'} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      {nav && (
        <div className={`fixed inset-0 w-full h-screen ${theme === 'dark' ? 'bg-black/95' : 'bg-gray-50/95'} flex flex-col justify-center items-center md:hidden z-[100] overflow-y-auto py-10`}>
          <ul className="space-y-6 md:space-y-8 flex flex-col items-center justify-center">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  onClick={() => setNav(false)}
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  className={`text-3xl capitalize cursor-pointer hover:text-cyan-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                >
                  {section}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                onClick={() => setNav(false)}
                className={`text-3xl capitalize cursor-pointer hover:text-cyan-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-black'}`}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
