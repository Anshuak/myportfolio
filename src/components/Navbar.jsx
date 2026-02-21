import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const sections = ['hero', 'about', 'skills', 'projects', 'coding', 'certifications', 'gaming', 'contact'];

const Navbar = () => {
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
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-bold text-cyan-400">
            Portfolio
          </a>
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
                    className={`capitalize cursor-pointer transition-colors duration-300 ${activeSection === section
                      ? 'text-cyan-400'
                      : 'hover:text-cyan-300'
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
              className="capitalize cursor-pointer transition-colors duration-300 hover:text-cyan-300"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>
          <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer z-[110]">
            {nav ? <FaTimes size={30} className={nav ? 'text-white' : ''} /> : <FaBars size={30} />}
          </div>
        </div>
      </div>

      {nav && (
        <div className="fixed inset-0 w-full h-screen bg-black/95 flex flex-col justify-center items-center md:hidden z-[100] overflow-y-auto py-10">
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
                  className="text-3xl capitalize cursor-pointer hover:text-cyan-300 text-white"
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
                className="text-3xl capitalize cursor-pointer hover:text-cyan-300 text-white"
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="mt-8">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
