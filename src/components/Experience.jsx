import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: "Assistant Professor",
    company: "Saveetha Engineering College",
    type: "Full-time",
    duration: "Jun 2024 – Present",
    location: "Chennai, Tamil Nadu, India",
    impact: [
      "Strategic Instruction: Designing and delivering MBA curriculum in core business disciplines with a focus on industry 4.0 applications.",
      "Executive Mentorship: Providing high-level guidance to future business leaders, resulting in enhanced industry readiness.",
      "Academic Leadership: Contributing to department-level strategy to align educational outcomes with global business demands."
    ],
    isCurrent: true
  },
  {
    role: "Assistant Professor",
    company: "SRM University",
    type: "Full-time",
    duration: "Sep 2021 – Jun 2024",
    location: "Vadapalani, Tamil Nadu, India",
    impact: [
      "Curriculum Innovation: Optimized management studies programs with a 20% increase in student engagement through case-based learning.",
      "Soft Skills Development: Spearheaded professional development workshops that significantly improved placement outcomes.",
      "Research Contribution: Actively engaged in organizational behavior research to inform teaching methodologies and student mentorship."
    ]
  },
  {
    role: "Guest Faculty",
    company: "Xavier Institute of Management and Entrepreneurship",
    type: "Part-time",
    duration: "Feb 2020 – Aug 2021",
    location: "Chennai, Tamil Nadu, India",
    impact: [
      "Bridge Learning: Effectively bridged advanced management theory with practical industry insights for postgraduate students.",
      "Specialized Lectures: Delivered high-impact sessions on strategic management and organizational complexity.",
      "Mentoring: Guided students in navigating career transitions from academia to high-demand industry roles."
    ]
  },
  {
    role: "Head of Department",
    company: "Shree Guru Kripa Institute of Management",
    type: "Full-time",
    duration: "Jun 2016 – Aug 2021",
    location: "Tamil Nadu, India",
    impact: [
      "Academic Strategy: Directed the Business Administration department, achieving a record-high student success rate through pedagogical innovation.",
      "Operational Excellence: Streamlined department operations and academic planning, reducing administrative overhead while improving quality.",
      "Community Engagement: Organized large-scale seminars and FDPs involving top-tier industry experts and academic leaders."
    ]
  },
  {
    role: "Assistant Head",
    company: "Sree Sastha Institute of Engineering and Technology",
    type: "Full-time",
    duration: "Jun 2014 – May 2016",
    location: "Tamil Nadu, India",
    impact: [
      "Innovation Ecosystem: Established the Entrepreneurship Development Cell (EDC), fostering a culture of innovation among 500+ students.",
      "Faculty Empowerment: Organized seminal Faculty Development Programs (FDPs) to upskill 50+ staff members in modern management techniques.",
      "Event Leadership: Led the execution of national-level management seminars and workshops with high participant satisfaction."
    ]
  },
  {
    role: "Head of Department – DoMS",
    company: "Kingston Engineering College",
    type: "Full-time",
    duration: "Jun 2012 – Apr 2014",
    location: "Vellore, Tamil Nadu, India",
    impact: [
      "Foundational Leadership: Built the Department of Management Studies (DoMS) from the ground up, ensuring robust academic and administrative systems.",
      "Entrepreneurship Drive: Successfully launched regional entrepreneurship initiatives to prepare students for the startup economy.",
      "Talent Cultivation: Implemented rigorous professional development tracks that resulted in top-tier student placements."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Professional <span className="text-accentGold">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            A career dedicated to academic leadership, student mentorship, and strategic management education.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical Line - Centered on all devices */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Content Card - 50% width on all devices */}
                <div className="w-1/2 px-2 sm:px-8 md:px-12">
                  <div className={`p-4 sm:p-8 rounded-2xl md:rounded-3xl bg-gray-50 dark:bg-[#0a0f1d] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-300 group ${exp.isCurrent ? 'ring-2 ring-accentGold ring-offset-2 dark:ring-offset-dark' : ''}`}>
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-accentGold/10 text-accentGold">
                        {exp.type}
                      </span>
                      <div className="flex items-center text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.duration}
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-xl md:text-2xl font-serif font-bold text-gray-900 dark:text-white mb-1 group-hover:text-accentGold transition-colors leading-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-xs sm:text-lg font-medium text-accentBlue dark:text-blue-400 mb-2">
                      <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {exp.company}
                    </div>

                    <div className="flex items-center text-[10px] sm:text-sm text-gray-500 dark:text-gray-400 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                      <MapPin className="w-3 h-3 mr-1" />
                      {exp.location}
                    </div>

                    <ul className="space-y-2 hidden sm:block">
                      {exp.impact.map((point, i) => (
                        <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 text-[10px] sm:text-sm leading-relaxed">
                          <ChevronRight className="w-3 h-3 mr-1 text-accentGold shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot - Centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 sm:border-4 border-white dark:border-dark bg-accentGold z-10" />

                {/* Empty spacer for the other side */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
