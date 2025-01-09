import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <motion.div
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        Sabelo Sibaya
      </motion.div>
    </div>
  );
}
