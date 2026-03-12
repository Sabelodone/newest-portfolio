import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Sparkles, Zap, Award, Github, Linkedin, Mail } from 'lucide-react';
import Scene from './Scene';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mouseEntered, setMouseEntered] = useState(false);

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = [
    'Full Stack Developer',
    'Front-end Specialist',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <Code className="h-5 w-5" />, value: '5+', label: 'Projects' },
    { icon: <Award className="h-5 w-5" />, value: '2', label: 'Certifications' },
    { icon: <Zap className="h-5 w-5" />, value: '1000+', label: 'Hours of Code' },
  ];

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setMouseEntered(true)}
      onMouseLeave={() => setMouseEntered(false)}
    >
      {/* Background Scene with Parallax Effect */}
      <div className="absolute inset-0 transform scale-110">
        <Scene />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-gray-900 z-10" />
      
      {/* Interactive Light Effect following cursor */}
      {mouseEntered && (
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl pointer-events-none z-10"
          animate={{
            x: cursorPosition.x - 250,
            y: cursorPosition.y - 250,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        />
      )}

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          className="absolute top-20 left-[10%] w-32 h-32 border-2 border-purple-500/20 rounded-full"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-40 h-40 border-2 border-pink-500/20 rounded-lg"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-20 text-center" ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative"
        >
          {/* Greeting Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Welcome to my portfolio</span>
          </motion.div>

          {/* Name with Glitch Effect */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 relative">
            <motion.span
              className="block relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="relative inline-block">
                Sabelo Sibaya
                <motion.span
                  className="absolute -inset-1 bg-purple-500/20 blur-xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </span>
            </motion.span>
            
            {/* Animated Role Text */}
            <motion.div
              className="h-16 md:h-20 mt-2 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-3xl md:text-5xl font-bold absolute inset-x-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundSize: '200% auto',
                  }}
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </h1>

          {/* Description with Typewriter Effect */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              Crafting digital experiences with clean, elegant, and efficient code.
              <br />
              <span className="text-purple-400">#DoHardThings</span>
            </motion.span>
          </motion.p>

          {/* Stats Grid */}
          <motion.div
            className="flex justify-center gap-6 md:gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <div className="text-purple-400 flex justify-center mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 rounded-lg overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
              <span className="relative text-white font-semibold flex items-center gap-2">
                Get in Touch
                <Mail className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-3 rounded-lg overflow-hidden border-2 border-purple-500/50 hover:border-purple-500 transition-colors"
            >
              <span className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white font-semibold flex items-center gap-2">
                View Projects
                <Code className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {[
              { icon: <Github className="h-5 w-5" />, href: 'https://github.com/Sabelodone', label: 'GitHub' },
              { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/sabelo-sibaya', label: 'LinkedIn' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/50 transition-all"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      >
        <a href="#about" className="group relative block">
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all" />
          <div className="relative w-10 h-16 border-2 border-purple-500/50 group-hover:border-purple-500 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-purple-400 rounded-full mt-2"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            />
          </div>
          <span className="sr-only">Scroll down</span>
        </a>
      </motion.div>

      {/* Floating Particles System */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [null, Math.random() * 200 - 100],
              x: [null, Math.random() * 200 - 100],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent z-10" />
    </section>
  );
};

export default Hero;