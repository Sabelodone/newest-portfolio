import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Scene from './Scene';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-transparent to-gray-900"
    >
      <Scene />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10" />
      <div className="container mx-auto px-4 z-20 text-center" ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Sabelo Sibaya
            </motion.span>
            <motion.span
              className="block mt-2 text-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Front-end Developer
            </motion.span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Crafting digital experiences with code
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <button
              className="bg-purple-600 text-white hover:bg-purple-700 transition-colors py-2 px-6 rounded-lg text-lg"
            >
              <a href="#contact">Get in Touch</a>
            </button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <a href="#about" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
