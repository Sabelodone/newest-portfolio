import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-wide">Sabelo Sibaya</h2>
            <p className="text-gray-400 mt-2">Front end Developer & UI/UX Enthusiast</p>
          </div>

          {/* Social Links */}
          <nav className="flex space-x-6">
            <a
              href="https://github.com/Sabelodone"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-700"
            >
              <GithubIcon className="h-6 w-6 text-white hover:text-gray-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabelo-sibaya-386076b3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-700"
            >
              <LinkedinIcon className="h-6 w-6 text-white hover:text-gray-400" />
            </a>
            <a
              href="https://x.com/sabelod1_?s=11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-700"
            >
              <TwitterIcon className="h-6 w-6 text-white hover:text-gray-400" />
            </a>
            {/* WhatsApp Icon Link */}
            <a
              href="https://wa.me/+27746422396" // Replace with your WhatsApp number, including country code
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-700"
            >
              <FaWhatsapp className="h-6 w-6 text-white hover:text-gray-400" />
            </a>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Footer Bottom Text */}
        <div className="text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Sabelo. All rights reserved.</p>
          <p className="mt-1">Built with ❤️ by Sabelo Sibaya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
