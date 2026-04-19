import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, FlaskConical } from 'lucide-react';

const researchItems = [
  {
    id: 1,
    title: "Professional Consultancy",
    description: "Developing robust strategies to help organizations navigate uncertainty and achieve sustainable growth through practical insights.",
    image: "/images/consultancy.png",
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Knowledge Sharing",
    description: "Empowering communities by disseminating high-value business insights and academic research to drive collective progress.",
    image: "/images/knowledge-sharing.png",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Research Collaboration",
    description: "Partnering with global academic institutions and industry leaders to pioneer innovation that delivers measurable real-world impact.",
    image: "/images/research-collaboration.png",
    icon: <FlaskConical className="w-6 h-6" />
  }
];

const Research = () => {
  return (
    <section id="research" className="py-24 bg-white dark:bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Research & <span className="text-accentGold">Collaboration</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Driving insights, innovation, and meaningful impact through strategic partnership and academic rigor.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {researchItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group text-center flex flex-col items-center p-8 rounded-3xl bg-white dark:bg-[#0a0f1d] border border-transparent hover:border-gray-100 dark:hover:border-gray-800 hover:shadow-2xl transition-all duration-500"
            >
              {/* Circular Image Style */}
              <div className="relative mb-8 w-full max-w-[240px] aspect-square rounded-full overflow-hidden border-8 border-gray-50 dark:border-gray-800 shadow-xl transform group-hover:scale-105 transition-all duration-500 mx-auto">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-accentBlue/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Icon Badge */}
              <div className="w-12 h-12 rounded-full bg-accentGold/10 flex items-center justify-center text-accentGold mb-6 -mt-14 relative z-10 shadow-xl border-4 border-white dark:border-dark">
                {item.icon}
              </div>

              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accentGold transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                {item.description}
              </p>
              
              <div className="mt-8 w-12 h-0.5 bg-gray-200 dark:bg-gray-800 group-hover:w-24 group-hover:bg-accentGold transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
