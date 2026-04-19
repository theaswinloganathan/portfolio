import React from 'react';
import { motion } from 'framer-motion';
import { Play, Trophy } from 'lucide-react';

const mediaItems = [
  {
    id: 1,
    title: "Leadership in Action",
    category: "Sports Strategy",
    icon: <Trophy className="w-6 h-6 text-white" />,
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800",
    description: "Applying sports leadership and strategic teamwork to solve corporate challenges."
  },
  {
    id: 2,
    title: "Visual Communication",
    category: "Creative Arts",
    icon: <Play className="w-6 h-6 text-white" />,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    description: "Using storytelling and visual media to explore organizational dynamics and human behavior."
  },
  {
    id: 3,
    title: "Strategic Excellence",
    category: "Professional Discipline",
    icon: <Trophy className="w-6 h-6 text-white" />,
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800",
    description: "Demonstrating focus, discipline, and high-level strategy through competitive excellence."
  }
];

const Media = () => {
  return (
    <section id="media" className="py-24 bg-gray-50 dark:bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Personal Brand & Passions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Leadership and creativity extend beyond the boardroom.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-80 group-hover:opacity-100 transition-opacity">
                <div className="mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="w-12 h-12 rounded-full bg-accentGold flex items-center justify-center mb-4 shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white mb-1">
                    {item.title}
                  </h3>
                  <span className="text-accentGold text-sm font-bold uppercase tracking-wider block mb-2">
                    {item.category}
                  </span>
                  <p className="text-gray-300 text-sm line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
