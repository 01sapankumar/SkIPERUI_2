import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 mt-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="36" height="36" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="30.882" cy="30.803" rx="30.3097" ry="30.2769" fill="url(#paint0_radial_36_64)" />
                <defs>
                  <radialGradient id="paint0_radial_36_64" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(0.572266 0.526062) rotate(44.969) scale(85.6825 85.6824)">
                    <stop offset="0.352001" stopColor="#090909" />
                    <stop offset="0.591494" stopColor="#2770EA" />
                    <stop offset="0.793825" stopColor="#FF7E97" />
                    <stop offset="0.972489" stopColor="#FF9203" />
                  </radialGradient>
                </defs>
              </svg>
              <span className="text-xl font-semibold text-black dark:text-white">skiper/ui</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Beautifully crafted components for modern apps. Build faster with Skiper UI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-all duration-300">Components</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-all duration-300">Templates</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-all duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-all duration-300">Releases</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-all duration-300">Docs</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-all duration-300">Support</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-all duration-300">Newsletter</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-all duration-300">Changelog</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-4">Follow Me</h4>
            <div className="flex space-x-4 text-gray-600 dark:text-gray-400 text-xl">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#1DA1F2] transition duration-300"><FaTwitter /></a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition duration-300"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/sapankumar55/" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#0A66C2] transition duration-300"><FaLinkedin /></a>
              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#5865F2] transition duration-300"><FaDiscord /></a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Skiper UI. Built by <a href="https://www.linkedin.com/in/yourusername"
            className="hover:text-black dark:hover:text-white transition duration-300 font-medium" target="_blank" rel="noopener noreferrer">
            Sapan Kumar
          </a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
