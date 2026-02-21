import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const peersData = [
    {
        id: 1,
        name: 'Sriparna Ghosh',
        role: 'Associate',
        company: 'Cognizant (Bayer)',
        linkedin: 'https://www.linkedin.com/in/sriparna-ghosh-894362196/',
        image: 'https://ui-avatars.com/api/?name=Sriparna+Ghosh&background=0891b2&color=fff',
    },
    {
        id: 2,
        name: 'Aditya Kumar',
        role: 'Associate',
        company: 'Cognizant (Bayer)',
        linkedin: 'https://www.linkedin.com/in/adityakumar29/',
        image: 'https://ui-avatars.com/api/?name=Aditya+Kumar&background=random',
    },
    {
        id: 3,
        name: 'Soumitha N',
        role: 'Associate',
        company: 'Cognizant (Bayer)',
        linkedin: 'https://www.linkedin.com/in/soumitha-nagabandi/',
        image: 'https://ui-avatars.com/api/?name=Soumitha+N&background=random',
    },
    {
        id: 4,
        name: 'Aparajita Panda',
        role: 'Associate',
        company: 'Cognizant (Bayer)',
        linkedin: 'https://www.linkedin.com/in/aparajita-panda-5a24ab231/',
        image: 'https://ui-avatars.com/api/?name=Aparajita+Panda&background=random',
    }
];

const TestimonialsSection = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900/20' : 'bg-gray-50/50'}`} id="peers">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className={`text-4xl font-bold text-center mb-4 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    My Peers
                </motion.h2>

                <motion.p
                    className={`text-center max-w-3xl mx-auto mb-16 text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    I had the incredible opportunity to collaborate closely with these talented engineers during my time at Cognizant. Together, we designed and shipped a complex, high-impact enterprise project for Bayer.
                </motion.p>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {peersData.map((peer, index) => (
                            <motion.div
                                key={peer.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className={`flex flex-col items-center text-center p-8 rounded-2xl shadow-lg border transition-all ${theme === 'dark' ? 'bg-gray-800/80 border-gray-700 hover:border-cyan-500' : 'bg-white border-gray-200 hover:border-cyan-500'
                                    }`}
                            >
                                <img
                                    src={peer.image}
                                    alt={peer.name}
                                    className="w-24 h-24 rounded-full border-4 border-cyan-500 shadow-md mb-6 object-cover"
                                />

                                <h4 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                    {peer.name}
                                </h4>

                                <p className={`text-md font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {peer.role}
                                </p>

                                <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>
                                    {peer.company}
                                </p>

                                {peer.linkedin && (
                                    <a
                                        href={peer.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`mt-auto text-3xl transition-colors hover:scale-110 ${theme === 'dark' ? 'text-gray-400 hover:text-[#0077b5]' : 'text-gray-500 hover:text-[#0077b5]'}`}
                                        aria-label={`${peer.name} LinkedIn`}
                                    >
                                        <FaLinkedin />
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
