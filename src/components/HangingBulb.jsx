import React, { useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

const HangingBulb = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const controls = useAnimation();

    const handleClick = async () => {
        // Toggle the theme
        toggleTheme();

        // Play a smooth swinging animation to simulate it being gently pulled
        await controls.start({
            rotate: [0, -20, 15, -10, 5, 0],
            transition: { duration: 2, ease: "easeInOut" }
        });
    };

    return (
        <div className="fixed top-0 right-10 md:right-32 z-[110] pointer-events-none">
            {/* 
        This is the actual hanging structure. We make the transform origin exactly 
        at the top so it swings like a pendulum.
      */}
            <motion.div
                className="flex flex-col items-center pointer-events-auto cursor-pointer group transform-origin-top"
                style={{ transformOrigin: 'top center' }}
                animate={controls}
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* The wire attached to the ceiling */}
                <div className="w-1 bg-gray-500 group-hover:bg-gray-400 transition-colors duration-300" style={{ height: '70px' }} />

                {/* Bulb socket */}
                <div className="w-5 h-4 bg-zinc-700 rounded-none border-b border-zinc-900 shadow-sm" />

                {/* The Bulb itself */}
                <div
                    className={`relative transition-all duration-500 flex items-center justify-center -mt-1
             ${theme === 'dark' ? 'text-gray-500 opacity-60' : 'text-yellow-400 opacity-100'}`}
                    style={{
                        filter: theme === 'dark' ? 'none' : 'drop-shadow(0px 10px 30px rgba(250, 204, 21, 1))'
                    }}
                >
                    {/* We rotate 180 so the glass of the bulb points downwards to the floor */}
                    <div className="rotate-180 transform">
                        {theme === 'dark' ? <FaRegLightbulb size={45} /> : <FaLightbulb size={45} />}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HangingBulb;
