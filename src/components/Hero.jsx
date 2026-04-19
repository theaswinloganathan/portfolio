import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Award, Users, BookOpen } from 'lucide-react';

const taglines = ["PhD", "Executive Mentor", "Innovation Strategy Advisor", "Process Excellence Specialist"];

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 overflow-hidden bg-white dark:bg-[#0a0f1d]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50/50 to-white dark:from-dark/50 dark:to-[#0a0f1d]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accentGold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-accentBlue/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accentGold/30 bg-accentGold/5 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] text-accentGold"
          >
            <Award className="w-4 h-4" /> Academic Excellence • Strategic Innovation
          </motion.div>

          <div className="max-w-4xl space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-serif font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Dr. Vimalnath <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentGold via-yellow-500 to-accentGold animate-gradient-x">
                Venkatasubramanian
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200"
            >
              Empowering Future Business Leaders
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-2 md:gap-4"
            >
              {['B.E.', 'MBA.', 'PhD', 'UGC-NET'].map((degree) => (
                <span key={degree} className="px-3 py-1 bg-accentGold/10 text-accentGold border border-accentGold/20 rounded-lg text-sm font-bold tracking-widest">
                  {degree}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-1"
            >
              <p className="text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                Assistant Professor | Department of Management Studies
              </p>
              <p className="text-accentBlue dark:text-blue-400 font-bold tracking-wider uppercase text-xs">
                Saveetha Engineering College
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="h-10 flex justify-center items-center"
            >
              <motion.p
                key={currentTagline}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                className="text-lg md:text-xl font-light text-gray-500 dark:text-gray-400 tracking-wide"
              >
                {taglines[currentTagline]}
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prof.vimalnath@gmail.com&su=Consultation%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 w-full sm:w-auto overflow-hidden rounded-2xl bg-dark dark:bg-white text-white dark:text-dark font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              <div className="absolute inset-0 bg-accentGold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 opacity-20" />
              <div className="relative flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" /> Request Consultation
              </div>
            </a>
            <a
              href="tel:+919500034681"
              className="group px-10 py-5 w-full sm:w-auto rounded-2xl border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold text-lg hover:border-accentGold transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-accentGold group-hover:animate-bounce" /> Call Now
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-gray-100 dark:border-gray-800/50 w-full max-w-5xl"
          >
            {[
              { label: "Years Experience", value: "10+", icon: <Award className="w-4 h-4" /> },
              { label: "Research Impact", value: "High", icon: <BookOpen className="w-4 h-4" /> },
              { label: "Mentees Guided", value: "500+", icon: <Users className="w-4 h-4" /> },
              { label: "Projects Delivered", value: "50+", icon: <Award className="w-4 h-4" /> }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex items-center gap-2 text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 dark:text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Institutional Support Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 mt-auto py-12 bg-gray-50/50 dark:bg-dark/20 backdrop-blur-sm border-t border-gray-100 dark:border-gray-800/30"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-600 mb-8">
            Trusted by Leading Academic Institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
            {["SRM UNIVERSITY", "SAVEETHA ENGINEERING", "XIME CHENNAI", "DG VAISHNAV COLLEGE"].map((name) => (
              <span key={name} className="text-sm md:text-lg font-serif font-black tracking-tighter text-gray-500 dark:text-gray-400 hover:text-accentGold transition-colors cursor-default">
                {name}
              </span >
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

