import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import LoadingScreen from './components/LoadingScreen';
import CodingQuotes from "./components/CodingQuotes"; // Import CodingQuotes component
import { ArrowUpIcon } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const currentPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && currentPosition >= section.offsetTop) {
          setCurrentSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Simulate loading time
    setTimeout(() => setIsLoading(false), 2000);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
        <Cursor />
        <Header currentSection={currentSection} />
        <AnimatePresence>
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Hero id="hero" />
                  <div className="container mx-auto px-4 py-8 space-y-32">
                    <About id="about" />
                    <Skills id="skills" />
                    <Projects id="projects" />
                    <CodingQuotes id="codingquotes" />
                    <Contact id="contact" />
                  </div>
                </main>
              }
            />
          </Routes>
        </AnimatePresence>
        
        {/* WhatsApp Icon: Fixed at the bottom-right */}
        <a
          href="https://wa.me/+27746422396" // Replace with your WhatsApp number, including country code
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 p-3 bg-green-600 rounded-full hover:bg-green-700 transition-colors duration-300"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="h-8 w-8 text-white" />
        </a>

        <Footer />
        
        <AnimatePresence>
          {showScrollTop && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="fixed bottom-8 right-8 z-50"
            >
              <button
                onClick={scrollToTop}
                className="rounded-full p-2 bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                <ArrowUpIcon className="h-6 w-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
