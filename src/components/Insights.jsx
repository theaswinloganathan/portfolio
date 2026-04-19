import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, ArrowRight, BarChart, Globe, Zap } from 'lucide-react';

const insights = [
  {
    title: "Lean Six Sigma in Modern Academia",
    category: "Process Excellence",
    description: "Applying operational efficiency frameworks to academic administrative processes for enhanced student outcomes.",
    icon: <BarChart className="w-6 h-6" />,
    color: "bg-blue-500"
  },
  {
    title: "Sustainability as a Strategic Pillar",
    category: "Sustainable Development",
    description: "Exploring how organizations can integrate environmental and social responsibility into their core business model.",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-green-500"
  },
  {
    title: "The Future of Innovation Strategy",
    category: "Innovation",
    description: "Navigating regional and global market shifts through agile leadership and design thinking methodologies.",
    icon: <Lightbulb className="w-6 h-6" />,
    color: "bg-accentGold"
  }
];

const Insights = () => {
  return (
    <section id="insights" className="py-24 bg-gray-50 dark:bg-[#0a0f1d] border-t border-accentGold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-16 gap-8 text-center max-w-4xl mx-auto">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
            >
              Insights & <span className="text-accentGold">Thought Leadership</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              Exploring the intersection of academic research and practical industry application.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prof.vimalnath@gmail.com&su=Consultation%20Inquiry" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-dark dark:bg-white text-white dark:text-dark font-bold hover:bg-accentGold dark:hover:bg-accentGold hover:text-white transition-all group shadow-lg">
              Speak to the Expert <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${insight.color} bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center text-accentGold mb-6 group-hover:scale-110 transition-transform`}>
                {insight.icon}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-accentGold mb-2">{insight.category}</p>
              <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accentGold transition-colors">
                {insight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                {insight.description}
              </p>
              <div className="h-0.5 w-0 bg-accentGold group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
