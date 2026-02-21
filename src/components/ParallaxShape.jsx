import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxShape = ({ children, className, yOffset = [-100, 100] }) => {
    const ref = useRef(null);

    // Track scroll position when this element is in the viewport
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Map scroll progress (0% to 100%) to a smooth Y translation range
    const y = useTransform(scrollYProgress, [0, 1], yOffset);

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className={`absolute pointer-events-none z-0 opacity-20 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default ParallaxShape;
