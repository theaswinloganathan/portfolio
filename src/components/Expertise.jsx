import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lightbulb, BarChart3, Target, Leaf, X, ChevronRight } from 'lucide-react';

const AreasofSpecialization = [
  {
    id: 1,
    title: "Process Excellence",
    description: "I help businesses identify inefficiencies and streamline operations to increase quality and reduce costs.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800",
    details: [
      "Optimize workflows using Lean Six Sigma to eliminate bottlenecks and inefficiencies.",
      "Enhance organizational speed and output quality through rigorous process improvement.",
      "Maximize resource efficiency by significantly reducing time, cost, and operational effort."
    ]
  },
  {
    id: 2,
    title: "Innovation Strategy",
    description: "Using Design Thinking to create products and services that solve real customer problems and drive growth.",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400 border-amber-100 dark:border-amber-800",
    details: [
      "Accelerate the innovation cycle using human-centered Design Thinking methodologies.",
      "Develop user-centric solutions through empathy-driven research and rapid prototyping.",
      "Gain a decisive competitive edge with products that resonate deeply with target audiences."
    ]
  },
  {
    id: 3,
    title: "Business Growth",
    description: "Developing clear, actionable strategic roadmaps that help organizations secure market advantage.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border-blue-100 dark:border-blue-800",
    details: [
      "Conduct in-depth market analysis to build robust, data-driven growth strategies.",
      "Create actionable strategic roadmaps that drive sustainable revenue and expansion.",
      "Empower teams to execute practical plans that secure long-term market advantage."
    ]
  },
  {
    id: 4,
    title: "Consumer Insights",
    description: "Turning complex market data into clear insights that help you make better business decisions.",
    icon: <Target className="w-8 h-8" />,
    color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400 border-indigo-100 dark:border-indigo-800",
    details: [
      "Design comprehensive research studies to identify and validate true consumer needs.",
      "Translate raw market data into high-level, actionable strategic recommendations.",
      "Guide marketing and product development with precise, evidence-based consumer insights."
    ]
  },
  {
    id: 5,
    title: "Sustainable Impact",
    description: "Aligning your business goals with global sustainability standards to drive positive social change.",
    icon: <Leaf className="w-8 h-8" />,
    color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400 border-green-100 dark:border-green-800",
    details: [
      "Integrate UN Sustainable Development Goals (SDGs) seamlessly into core business operations.",
      "Strengthen brand reputation and trust through demonstrated social and environmental responsibility.",
      "Balance healthy profitability with meaningful, long-term contributions to global sustainability."
    ]
  }
];

const Expertise = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="expertise" className="py-24 bg-gray-50 dark:bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Areas of Specialization
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Combining academic rigor with practical industry experience to deliver transformative results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AreasofSpecialization.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedItem(item)}
              className="group bg-white dark:bg-[#0a0f1d] p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-gray-100 dark:border-gray-800"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-serif group-hover:text-accentGold transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-6 flex items-center text-accentBlue group-hover:text-accentGold text-sm font-bold transition-colors">
                Explore Expertise <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-[#0a0f1d] rounded-3xl p-8 max-w-lg w-full relative shadow-2xl border border-gray-100 dark:border-gray-800"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-all active:scale-90"
              >
                <X className="w-6 h-6" />
              </button>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border-2 shadow-xl ${selectedItem.color}`}>
                {selectedItem.icon}
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                {selectedItem.title}
              </h3>
              <ul className="space-y-4 mb-8">
                {selectedItem.details.map((point, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accentBlue shrink-0" />
                    <span className="text-lg leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedItem(null)}
                className="w-full py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl font-medium transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Expertise;
