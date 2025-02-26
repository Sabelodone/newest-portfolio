import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = ['about', 'skills', 'projects', 'contact'];

  return (
    <motion.header
      className={`relative sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-2xl' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-3xl font-extrabold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Sabelo Sibaya
        </motion.h1>

        <nav className="hidden md:flex items-center space-x-6 mx-auto">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className={`text-lg text-white font-semibold hover:text-purple-300 ${currentSection === item ? 'underline' : ''}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com" aria-label="Github">
            <Github className="h-6 w-6 text-white hover:text-purple-300" />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-white hover:text-purple-300" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-white hover:text-purple-300" />
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-full text-white hover:bg-gray-700 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6 rotate-45" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed top-0 right-0 w-3/4 max-w-[300px] h-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              ref={menuRef}
            >
              <div className="flex justify-between items-center p-6 border-b border-purple-600">
                <Link to="/" className="flex items-center space-x-2" aria-label="Home">
                  <img
                    src="/IMG_6067.JPG"
                    className="w-12 h-12 rounded-full"
                    alt="Sabelo Sibaya"
                  />
                  <span className="text-2xl font-bold text-purple-100">Sabelo Sibaya</span>
                </Link>
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                  <X size={24} color="purple" />
                </button>
              </div>

              <div className="flex flex-col space-y-6 px-6 mt-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-lg font-semibold text-white hover:text-purple-300 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label={`Go to ${item}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
                <a
                  href="https://wa.me/+27746422396"
                  className="text-lg font-semibold text-white hover:text-green-300 transition-all flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-6 w-6 text-green-500" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
