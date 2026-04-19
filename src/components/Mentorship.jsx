import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Mentorship = () => {
  const [activeTab, setActiveTab] = useState('teaching');

  const stats = [
    { label: "Students Mentored", value: "2000+", suffix: "" },
    { label: "Workshops Led", value: "150", suffix: "+" },
    { label: "Institutions", value: "10", suffix: "+" },
    { label: "Success Rate", value: "95", suffix: "%" },
  ];

  const timelineData = {
    teaching: [
      { year: "2020 - Present", title: "Developing Future Leaders at Saveetha Engineering College", org: "Top Tier University", desc: "Teaching Business Strategy and Design Thinking. Focused on preparing students for real-world leadership through practical, case-based learning." },
      { year: "2015 - 2020", title: "Specialized Skill Building", org: "Various Institutions", desc: "Delivered intensive modules on Lean Six Sigma and Market Research, equipping students with high-value technical skills." }
    ],
    training: [
      { year: "2018 - Present", title: "Corporate Performance Coaching", org: "Global Enterprises", desc: "Leading high-impact workshops for Fortune 500 companies. Focused on increasing operational efficiency and strategic marketing success." },
      { year: "2016 - 2018", title: "Agile Implementation", org: "Tech Startups", desc: "Coached product teams to adopt agile workflows, resulting in faster product cycles and improved team collaboration." }
    ],
    leadership: [
      { year: "2021 - Present", title: "Strategic Mentorship Director", org: "Academic Institute", desc: "Leading programs that connect hundreds of students with industry experts to bridge the gap between education and employment." },
      { year: "2019 - 2021", title: "Governance & Strategy", org: "Educational NGO", desc: "Advised on long-term strategic plans to expand educational access and improve organizational performance." }
    ]
  };

  return (
    <section id="mentorship" className="py-24 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Teaching & Mentorship
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Empowering the next generation of leaders through structured guidance and experiential learning.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 px-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold font-serif text-accentGold mb-2">
                {stat.value}{stat.suffix}
              </h3>
              <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['teaching', 'training', 'leadership'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${activeTab === tab
                    ? 'bg-dark text-white dark:bg-white dark:text-dark shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-700 before:to-transparent">
            {timelineData[activeTab].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-dark bg-accentGold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10" />

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-gray-50 dark:bg-[#0a0f1d] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col mb-2">
                    <span className="text-accentGold font-bold text-sm tracking-widest uppercase">{item.year}</span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{item.title}</h4>
                    <span className="text-gray-500 text-sm font-medium">{item.org}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Mentorship;
