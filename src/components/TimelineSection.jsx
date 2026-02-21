import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const timelineData = [
    {
        id: 1,
        type: 'experience',
        title: 'Associate',
        organization: 'Cognizant',
        date: 'Apr 2025 - Present',
        description: 'Full-time · Kolkata, West Bengal, India · Hybrid. Skills: Express.js, Java, JavaScript, MongoDB, MySQL, Node.js, React.js, SQL, Spring Boot, Spring Security.',
        icon: <FaBriefcase />,
    },
    {
        id: 2,
        type: 'experience',
        title: 'Programmer Analyst',
        organization: 'Cognizant',
        date: 'Sep 2023 - Apr 2025',
        description: 'Full-time · Kolkata, West Bengal, India · Hybrid. Skills: SQL, Java, Problem Solving, Node.js, React.js, Express.js, JavaScript, MySQL, MongoDB, Spring Boot, AngularJS, Spring Security.',
        icon: <FaBriefcase />,
    },
    {
        id: 3,
        type: 'experience',
        title: 'Programmer Analyst Trainee',
        organization: 'Cognizant',
        date: 'Sep 2022 - Sep 2023',
        description: 'Full-time · Bengaluru, Karnataka, India. Skills: Java, Node.js, React.js, Express.js, JavaScript, Spring Framework, MySQL, MongoDB, Spring Boot, AngularJS, Spring Security.',
        icon: <FaBriefcase />,
    },
    {
        id: 4,
        type: 'experience',
        title: 'Project Intern',
        organization: 'Cognizant',
        date: 'Mar 2022 - Aug 2022',
        description: 'Internship · Kolkata, West Bengal, India. Skills: Java, Problem Solving, Spring MVC, Spring Framework, Spring Boot, AngularJS, Spring Security.',
        icon: <FaBriefcase />,
    },
    {
        id: 5,
        type: 'education',
        title: 'Bachelor of Technology - BTech, Computer Science and Engineering',
        organization: 'University of Engineering & Management (UEM)',
        date: 'Jul 2018 - Jul 2022',
        description: 'Grade: 9.0 CGPA',
        icon: <FaGraduationCap />,
    }
];

const TimelineSection = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`py-20 relative ${theme === 'dark' ? 'bg-gray-900/40' : 'bg-gray-50'}`} id="timeline">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    Experience & Education
                </motion.h2>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className={`absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 md:-ml-[0.5px] rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}></div>

                    <div className="space-y-12">
                        {timelineData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={item.id}
                                    className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {/* Timeline Dot/Icon */}
                                    <div className={`absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 border-4 ${theme === 'dark' ? 'bg-gray-800 border-gray-900 text-cyan-400' : 'bg-white border-gray-50 text-cyan-600'} shadow-lg`}>
                                        {item.icon}
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                                        <div className={`p-6 rounded-xl shadow-lg border transition-transform duration-300 hover:-translate-y-1 ${theme === 'dark' ? 'bg-gray-800/80 border-gray-700 hover:border-cyan-500/50' : 'bg-white border-gray-200 hover:border-cyan-500/50'}`}>
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                                                    {item.title}
                                                </h3>
                                                <span className={`text-sm font-semibold mt-1 sm:mt-0 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>
                                                    {item.date}
                                                </span>
                                            </div>
                                            <h4 className={`text-md font-medium mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {item.organization}
                                            </h4>
                                            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
