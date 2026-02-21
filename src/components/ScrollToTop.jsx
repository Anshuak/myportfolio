import React, { useState, useEffect, useContext } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed bottom-8 right-8 z-[99]"
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                >
                    <button
                        onClick={scrollToTop}
                        className={`p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${theme === 'dark'
                                ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-cyan-500/30'
                                : 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-600/30'
                            }`}
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp className="text-xl" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
