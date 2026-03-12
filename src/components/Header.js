import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Menu, X, User, Code, Briefcase, Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: 'about', label: 'About', icon: <User className="h-5 w-5" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="h-5 w-5" /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase className="h-5 w-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-5 w-5" /> }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/Sabelodone", label: "GitHub", color: "hover:text-gray-300" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/sabelo-sibaya", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com/SabeloSibaya", label: "Twitter", color: "hover:text-blue-300" },
    { icon: <FaWhatsapp className="h-5 w-5" />, href: "https://wa.me/+27746422396", label: "WhatsApp", color: "hover:text-green-400" }
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl py-3' 
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo/Name with hover effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="/IMG_6067.JPG"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-purple-500 relative z-10"
                  alt="Sabelo Sibaya"
                />
              </div>
              <motion.h1
                className="text-xl md:text-2xl font-extrabold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Sabelo Sibaya
              </motion.h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-1 bg-gray-800/50 backdrop-blur-sm rounded-full px-2 py-1.5 border border-gray-700/50">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    currentSection === item.id
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentSection === item.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:border-purple-500/50`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * (index + 4) }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center"
            onClick={() => setIsMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-white" />
          </motion.button>
        </div>

        {/* Progress Bar - Optional */}
        {isScrolled && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        )}
      </motion.header>

      {/* Mobile Side Drawer - Modern Design */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl z-50 md:hidden overflow-hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              ref={menuRef}
            >
              {/* Decorative Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>

              {/* Drawer Header */}
              <div className="relative p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500 rounded-full blur-md"></div>
                      <img
                        src="/IMG_6067.JPG"
                        className="w-14 h-14 rounded-full border-2 border-purple-500 relative z-10"
                        alt="Sabelo Sibaya"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Sabelo Sibaya</h2>
                      <p className="text-xs text-gray-400">Full Stack Developer</p>
                    </div>
                  </motion.div>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </motion.button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="relative p-6">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        currentSection === item.id
                          ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg'
                          : 'text-gray-300 hover:bg-gray-800/80 hover:text-white'
                      }`}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 5 }}
                    >
                      <span className={currentSection === item.id ? 'text-white' : 'text-gray-400'}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.label}</span>
                      {currentSection === item.id && (
                        <motion.div
                          className="ml-auto"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </motion.div>
                      )}
                    </motion.a>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-700"></div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-4">Get in touch</p>
                  
                  <motion.a
                    href="tel:+27746422396"
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800/80 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Phone className="h-5 w-5 text-green-400" />
                    <span>+27 74 642 2396</span>
                  </motion.a>
                  
                  <motion.a
                    href="mailto:sabelo@example.com"
                    className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800/80 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Mail className="h-5 w-5 text-purple-400" />
                    <span>sabelo@example.com</span>
                  </motion.a>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex justify-around px-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full bg-gray-800/80 text-gray-300 ${social.color} transition-all duration-300 hover:scale-110`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Drawer Footer */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-center text-xs text-gray-500 border-t border-gray-700 bg-gray-900/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                © {new Date().getFullYear()} Sabelo Sibaya. All rights reserved.
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default Header;