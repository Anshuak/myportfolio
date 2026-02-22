import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaCheckCircle, FaTimes } from 'react-icons/fa';
import MagneticButton from './MagneticButton';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send to an API endpoint)
    console.log(formData);

    // Show toast and reset form
    setShowToast(true);
    setFormData({ name: '', email: '', message: '' });

    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={`text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className={`w-full border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-gray-100/50 border-gray-300 text-black'}`}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className={`w-full border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-gray-100/50 border-gray-300 text-black'}`}
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows="5"
                required
                className={`w-full border rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700 text-white' : 'bg-gray-100/50 border-gray-300 text-black'}`}
              ></textarea>
            </div>
            <div className="text-center">
              <MagneticButton
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgb(56, 189, 248)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 text-black font-bold py-3 px-12 rounded-full transition-colors duration-300 hover:bg-cyan-400"
              >
                Send Message
              </MagneticButton>
            </div>
          </motion.form>
          <div className="flex justify-center space-x-6 mt-12">
            <a href="https://github.com/Anshuak" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}><FaGithub size={32} /></a>
            <a href="https://www.linkedin.com/in/anshukailash/" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}><FaLinkedin size={32} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-gray-400 hover:text-red-500' : 'text-gray-600 hover:text-red-600'} transition-colors`}><FaYoutube size={32} /></a>
          </div>
          <div className="text-center mt-8">
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Or email me directly at: <a href="mailto:anshukailash.9924@gmail.com" className="text-cyan-500 hover:underline">anshukailash.9924@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Toast Notification positioned at bottom right */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 50, y: 50, transition: { duration: 0.2 } }}
            className={`fixed bottom-8 right-8 z-[100] flex items-center space-x-3 px-6 py-4 rounded-lg shadow-2xl border ${theme === 'dark'
              ? 'bg-gray-800 border-gray-700 text-white shadow-cyan-500/10'
              : 'bg-white border-gray-200 text-black shadow-cyan-500/20'
              }`}
          >
            <FaCheckCircle className="text-cyan-500 text-2xl" />
            <div>
              <p className="font-semibold text-sm">Message Sent Successfully! 🚀</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                I'll get back to you soon.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className={`ml-4 ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-black'} transition-colors`}
            >
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
