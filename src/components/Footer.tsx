import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">PMV Raviteja</h3>
            <p className="text-gray-400">AWS Certified DevOps Engineer</p>
          </div>

          <div className="flex justify-center space-x-8 mb-8 text-sm">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">Experience</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="text-red-500" size={16} fill="currentColor" /> by PMV Raviteja
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 PMV Raviteja. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-200 shadow-lg"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;