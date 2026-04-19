import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraph1 = "Dr. Vimalnath Venkatasubramanian is an academician, researcher, and strategic consultant specializing in business management, leadership development, and innovation. With a strong foundation in Management Studies, he combines academic excellence with practical industry insights to support data-driven decision-making and sustainable organizational growth.";

  const paragraph2 = "His expertise in Lean Six Sigma and Design Thinking enables the transformation of complex ideas into effective strategies and measurable outcomes. Through research, consultancy, and mentorship, he is committed to developing future-ready leaders and contributing to academic advancement, industry collaboration, and innovation-driven education.";

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-row lg:grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center"
        >
          <div className="w-3/5 sm:w-1/2 lg:w-full space-y-3 sm:space-y-6">
            <h2 className="text-xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
              Turning Strategic Ideas into <span className="text-accentGold">Measurable Results</span>
            </h2>

            <div className="relative">
              {/* Mobile View: Truncated or Full Based on State */}
              <div className="lg:hidden">
                <p className="text-[10px] sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {isExpanded ? paragraph1 : `${paragraph1.slice(0, 80)}...`}
                </p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-[10px] sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-2"
                    >
                      {paragraph2}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-1 mt-2 text-[10px] sm:text-sm font-bold text-accentGold hover:text-yellow-600 transition-colors"
                >
                  {isExpanded ? (
                    <>Show Less <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" /></>
                  ) : (
                    <>Read More <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" /></>
                  )}
                </button>
              </div>

              {/* Desktop View: Always Full */}
              <div className="hidden lg:block space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {paragraph1}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {paragraph2}
                </p>
              </div>
            </div>

            <div className="flex flex-row sm:grid sm:grid-cols-2 gap-2 sm:gap-8 pt-2 sm:pt-8 items-center border-t border-gray-100 dark:border-gray-800 mt-4">
              <div className="p-2 sm:p-6 rounded-xl sm:rounded-3xl bg-gray-50 dark:bg-[#0a0f1d] border border-gray-100 dark:border-gray-800 shadow-sm grow text-center sm:text-left">
                <h4 className="text-xs sm:text-3xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-2">10+</h4>
                <p className="text-[8px] sm:text-sm text-gray-500 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="p-2 sm:p-6 rounded-xl sm:rounded-3xl bg-gray-50 dark:bg-[#0a0f1d] border border-gray-100 dark:border-gray-800 shadow-sm grow text-center sm:text-left">
                <h4 className="text-xs sm:text-3xl font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-2">50+</h4>
                <p className="text-[8px] sm:text-sm text-gray-500 uppercase tracking-wider">Projects</p>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <a
                href="/cv/Dr_Vimalnath_Profile.pdf"
                download="Dr_Vimalnath_Profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-2 text-accentGold font-bold hover:text-yellow-600 transition-colors group"
              >
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-accentGold/10 flex items-center justify-center group-hover:bg-accentGold transition-all">
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 text-accentGold group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-[9px] sm:text-base">Download Profile</span>
              </a>
            </div>
          </div>

          <div className="w-2/5 sm:w-1/2 lg:w-full relative px-2">
            <div className="aspect-[3/4] rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl relative border-2 sm:border-8 border-white dark:border-gray-800 transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/images/profile.png"
                alt="Dr. Vimalnath"
                className="object-cover object-[center_10%] w-full h-full relative z-10"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-64 sm:h-64 bg-accentGold rounded-full blur-2xl sm:blur-3xl opacity-20 -z-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
