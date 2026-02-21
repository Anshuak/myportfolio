import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HangingBulb from './components/HangingBulb';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollToTop from './components/ScrollToTop';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'dark' ? 'bg-[#0f0f0f] text-white' : 'bg-white text-black'}`}>
      <ScrollProgressBar />
      <HangingBulb />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
