import React, { useState, useContext } from 'react';
import { certificationsData } from '../../data/certifications';
import { ThemeContext } from '../../context/ThemeContext';

const Certifications = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { theme } = useContext(ThemeContext);

    return (
        <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    Certifications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificationsData.map((cert) => (
                        <article
                            key={cert.id}
                            className={`p-6 rounded-lg shadow-lg transition-all duration-300 flex flex-col h-full hover:-translate-y-2 overflow-hidden ${theme === 'dark'
                                ? 'bg-gray-800 hover:shadow-cyan-400/20'
                                : 'bg-white hover:shadow-cyan-600/20 border border-gray-100'
                                }`}
                        >
                            {cert.image && (
                                <div
                                    className={`w-full h-48 mb-6 rounded-md flex items-center justify-center p-2 cursor-pointer relative group ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-100'
                                        }`}
                                    onClick={() => setSelectedImage(cert.image)}
                                >
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="max-w-full max-h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex items-center justify-center">
                                        <span className="text-white bg-black/60 px-3 py-1 rounded-full text-sm font-medium">Click to Zoom</span>
                                    </div>
                                </div>
                            )}
                            <h3 className={`text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'}`}>{cert.title}</h3>
                            <p className={`mb-2 font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{cert.issuer}</p>
                            <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>{cert.date}</p>
                            <p className={`flex-grow mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{cert.description}</p>

                            {cert.link !== '#' && (
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-block mt-auto font-medium transition-colors ${theme === 'dark' ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-500'
                                        }`}
                                >
                                    View Credential &rarr;
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>

            {/* Image Zoom Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center">
                        <button
                            className="absolute -top-10 right-0 sm:-right-10 text-white hover:text-cyan-400 p-2 z-60 transition-colors"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close modal"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Zoomed Certification"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
