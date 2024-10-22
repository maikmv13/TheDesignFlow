import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">The Design Flow</h3>
            <p className="text-gray-400">Empowering designers with curated tools and insights</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400"><Twitter /></a>
            <a href="#" className="hover:text-indigo-400"><Instagram /></a>
            <a href="#" className="hover:text-indigo-400"><Linkedin /></a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} The Design Flow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;