import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    title: "Universal Human Values Session",
    subtitle: "DG Vaishnav College, Chennai",
    content: "Grateful to the Commerce Department, DG Vaishnav College, for the opportunity to address young minds on the importance of human values. In today’s technology-driven world, it is important to balance knowledge with humanity. Universal Human Values (UHV), an initiative by AICTE, focuses on harmony from individual to family, society, and nature. It was a privilege to share insights that encourage self-awareness, compassion, and responsible leadership.",
    image: "/images/vaishnav-session.jpg",
    objectPosition: "center 20%"
  },
  {
    id: 2,
    title: "UHV Introductory Session",
    subtitle: "SRM Institute of Science and Technology",
    content: "Had the opportunity to share insights on Universal Human Values (UHV) with learners at SRMIST, Chennai. The session focused on understanding truth, self-development, and living with values such as love, empathy, and responsibility. 'Clever people try to change the world, wise people try to change themselves.'",
    image: "/images/srm-session.jpg",
    objectPosition: "center 20%"
  },
  {
    id: 3,
    title: "Entrepreneurship & Innovation Mentorship",
    subtitle: "The Pupil International School",
    content: "Honored to serve as a Judge for the Shark Tank event – Chennai B Quest, where young innovators presented creative business ideas. It was inspiring to witness students confidently share their ideas and propose innovative solutions. Such platforms nurture essential skills like critical thinking, teamwork, and leadership.",
    image: "/images/shark-mentorship.jpg",
    objectPosition: "center 30%"
  },
  {
    id: 4,
    title: "Design Thinking Faculty Development Program",
    subtitle: "Intellect Design Arena & SRMIST",
    content: "Grateful for the opportunity to participate in the FDP on Design Thinking. The program provided valuable insights into creative problem-solving and learner-centered teaching approaches. Proud to apply design thinking principles to enhance teaching effectiveness and create meaningful learning experiences.",
    image: "/images/dt-fdp.jpg",
    objectPosition: "center 35%"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-dark border-t-2 border-accentGold/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Testimonials & <span className="text-accentGold">Impact</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Real experiences from academic sessions, workshops, and knowledge sharing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 dark:bg-[#0a0f1d] rounded-[32px] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                {/* Image Section */}
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ objectPosition: item.objectPosition }}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-8 flex items-center text-white">
                    <MapPin className="w-4 h-4 mr-2 text-accentGold" />
                    <span className="text-sm font-medium tracking-wide shadow-sm">{item.subtitle}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 sm:p-10 flex flex-col flex-grow">
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-accentGold/20 mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4 line-height-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                      "{item.content}"
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-accentGold">Academic Impact</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <div key={star} className="w-1.5 h-1.5 rounded-full bg-accentGold" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
