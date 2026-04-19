import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
              Bridging <span className="text-accentGold">Strategy</span> and <span className="text-accentBlue">Practical Execution</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I help businesses and individuals translate complex ideas into clear, actionable strategies. My work combines academic excellence with real-world industry experience to ensure every project delivers a measurable return.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              With a background in Lean Six Sigma and Design Thinking, I focus on optimizing performance and driving innovation that actually works in today's competitive landscape.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 items-center">
              <div className="p-6 rounded-3xl bg-gray-50 dark:bg-[#0a0f1d] border border-gray-100 dark:border-gray-800 shadow-sm">
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="p-6 rounded-3xl bg-gray-50 dark:bg-[#0a0f1d] border border-gray-100 dark:border-gray-800 shadow-sm">
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Projects Delivered</p>
              </div>
            </div>

            <div className="pt-8">
              <a 
                href="/cv/Dr_Vimalnath_Profile.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accentGold font-bold hover:text-yellow-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-accentGold/10 flex items-center justify-center group-hover:bg-accentGold transition-all">
                  <svg className="w-5 h-5 text-accentGold group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                Download Academic Profile (PDF)
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white dark:border-gray-800 transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/images/profile.png" 
                alt="Dr. Vimalnath" 
                className="object-cover object-[center_10%] w-full h-full relative z-10" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accentGold rounded-full blur-3xl opacity-20 -z-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
