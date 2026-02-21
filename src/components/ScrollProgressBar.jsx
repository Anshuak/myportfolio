import React, { useContext } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const ScrollProgressBar = () => {
    const { theme } = useContext(ThemeContext);
    const { scrollYProgress } = useScroll();

    // Apply a smooth spring animation to the scrolling progress
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className={`fixed top-0 left-0 right-0 h-1 origin-left z-[1000] ${theme === 'dark'
                    ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee,0_0_20px_#22d3ee]'
                    : 'bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.5)]'
                }`}
            style={{ scaleX }}
        />
    );
};

export default ScrollProgressBar;
