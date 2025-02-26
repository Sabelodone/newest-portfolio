import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
      icon: <GithubIcon className="h-6 w-6 text-white" />,
      href: 'https://github.com/Sabelodone',
      label: 'GitHub',
    },
    {
      icon: <LinkedinIcon className="h-6 w-6 text-white" />,
      href: 'https://www.linkedin.com/in/sabelo-sibaya-386076b3',
      label: 'LinkedIn',
    },
    {
      icon: <TwitterIcon className="h-6 w-6 text-white" />,
      href: 'https://x.com/sabelod1_?s=11',
      label: 'Twitter',
    },
    {
      icon: <FaWhatsapp className="h-6 w-6 text-white" />,
      href: 'https://wa.me/+27746422396',
      label: 'WhatsApp',
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold text-white tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Sabelo Sibaya
            </h2>
            <p className="text-gray-400 mt-2">Front-end Developer & UI/UX Enthusiast</p>
          </motion.div>

          {/* Social Links with Exaggerated 3D Bubble Effect */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-full transition-all duration-300 hover:bg-gray-700 relative group"
                whileHover={{ scale: 1.5, zIndex: 1 }} // Increased scale for exaggeration
                whileTap={{ scale: 0.9 }}
              >
                {/* Icon */}
                {link.icon}

                {/* Exaggerated 3D Bubble Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    transform: 'translateZ(50px)', // Increased depth for exaggeration
                    boxShadow: '0 0 40px rgba(255, 255, 255, 0.5)', // Stronger glow
                  }}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 2.5 }} // Larger bubble for exaggeration
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }} // Bouncier animation
                />
              </motion.a>
            ))}
          </motion.nav>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="my-8 border-t border-gray-800"
        />

        {/* Footer Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400"
        >
          <p>© {new Date().getFullYear()} Sabelo. All rights reserved.</p>
          <p className="mt-1">
            Built with ❤️ by{' '}
            <a
              href="https://github.com/Sabelodone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-pink-500 transition-colors"
            >
              Sabelo Sibaya
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;