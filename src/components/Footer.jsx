import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">Dr. Vimalnath</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Assistant Professor | Consultant | Mentor</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/vimalnath-venkatasubramanian?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#0a0f1d] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-accentGold hover:text-white dark:hover:bg-accentGold transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#0a0f1d] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-accentGold hover:text-white dark:hover:bg-accentGold transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:contact@vimalnath.com" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#0a0f1d] flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-accentGold hover:text-white dark:hover:bg-accentGold transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center md:flex md:justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Dr. Vimalnath Venkatasubramanian. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6 justify-center text-sm font-medium text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-accentGold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accentGold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
