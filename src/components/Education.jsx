import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Award, School } from 'lucide-react';

const educationData = [
  {
    id: 5,
    degree: "School Education",
    field: "Higher Secondary",
    institution: "Holy Cross Group of Schools",
    duration: "Completed 2004",
    icon: <School className="w-6 h-6 text-gray-900 dark:text-white" />
  },
  {
    id: 2,
    degree: "Bachelor of Engineering",
    field: "Mechanical Engineering",
    institution: "Anna University Chennai",
    duration: "2004 – 2008",
    achievements: [
      "Grade: First Class"
    ],
    icon: <GraduationCap className="w-6 h-6 text-gray-900 dark:text-white" />
  },
  {
    id: 3,
    degree: "Academic Studies",
    field: "Management & Interpersonal Skills",
    institution: "Anna University Chennai",
    duration: "2009 – 2011",
    achievements: [
      "Focus on management and interpersonal skills development"
    ],
    icon: <Book className="w-6 h-6 text-gray-900 dark:text-white" />
  },
  {
    id: 1,
    degree: "Doctor of Philosophy (PhD)",
    field: "Business Management",
    institution: "Bharathiar University",
    duration: "2014 – 2019",
    achievements: [
      "Grade: Highly Recommended",
      "Awarded Best Thesis (Low Plagiarism – 2%)",
      "Research: Customer Experience and Customer Advocacy in Telecom Services"
    ],
    icon: <Award className="w-6 h-6 text-gray-900 dark:text-white" />
  },
  {
    id: 4,
    degree: "Value Education Certification",
    field: "Universal Human Values (UHV)",
    institution: "AICTE",
    duration: "2023 – 2024",
    achievements: [
      "Focus on ethics and holistic development"
    ],
    icon: <Award className="w-6 h-6 text-white" />,
    isLast: true
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-[#0a0f1d] border-t border-accentGold/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Education & Academic <span className="text-accentGold">Qualifications</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            A strong academic foundation supporting professional expertise and strategic leadership.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => {
            const isPhD = edu.degree.includes("PhD");
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl border transition-all duration-300 group bg-white dark:bg-dark border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md ${
                  edu.isLast ? 'md:col-span-2 md:max-w-md md:mx-auto w-full' : ''
                } ${isPhD ? 'ring-2 ring-accentGold/20 scale-[1.02] shadow-accentGold/5' : ''}`}
              >
                {isPhD && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-accentGold rounded-r-full" />
                )}
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                    isPhD ? 'bg-accentGold shadow-lg shadow-accentGold/30 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}>
                    {isPhD ? React.cloneElement(edu.icon, { className: "w-6 h-6 text-white" }) : edu.icon}
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col justify-between gap-2 mb-4">
                      <div>
                        <h3 className={`text-xl font-bold font-serif ${isPhD ? 'text-gray-900 dark:text-white underline decoration-accentGold/30 underline-offset-4' : 'text-gray-900 dark:text-white'}`}>
                          {edu.degree}
                        </h3>
                        <p className="text-sm font-medium text-accentBlue">
                          {edu.field} • {edu.institution}
                        </p>
                      </div>
                      <div>
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                          isPhD ? 'bg-accentGold/20 text-accentGold border border-accentGold/30' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                        }`}>
                          {edu.duration}
                        </span>
                      </div>
                    </div>

                    {edu.achievements && (
                      <ul className="space-y-2">
                        {edu.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <span className={`mr-2 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isPhD ? 'bg-accentGold' : 'bg-accentBlue'}`} />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
