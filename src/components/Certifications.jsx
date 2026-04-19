import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ShieldCheck, Calendar, User, X } from 'lucide-react';

const certs = [
  {
    id: 1,
    title: "Excel and Copilot Fundamentals",
    org: "Microsoft",
    year: "2026",
    month: "March",
    idCode: "MS-EXCEL-2026",
    icon: <Award className="w-8 h-8 text-white" />,
    gradient: "from-[#1e1e2e] to-[#2d2d44]",
    glow: "bg-blue-500/20",
    image: "/images/microsoft-cert.png"
  },
  {
    id: 2,
    title: "National Eligibility Test (NET)",
    org: "UGC",
    year: "2012",
    month: "June",
    idCode: "UGC-NET-0612",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    gradient: "from-[#0f172a] to-[#1e293b]",
    glow: "bg-accentGold/20",
  },
  {
    id: 3,
    title: "English Versant",
    org: "Pearson",
    year: "2015",
    month: "May",
    idCode: "PE-VERS-2015",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    gradient: "from-[#064e3b] to-[#065f46]",
    glow: "bg-green-500/20",
  },
  {
    id: 4,
    title: "Digital Marketing foundations",
    org: "Google",
    year: "2016",
    month: "May",
    idCode: "GG-DM-2016",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    gradient: "from-[#1e3a8a] to-[#1e40af]",
    glow: "bg-blue-600/20",
  }
];

const FlipCard = ({ cert }) => {
  const [showModal, setShowModal] = useState(false);
  const hasImage = !!cert.image;

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5, scale: 1.02 }}
        className={`relative h-[420px] w-full rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl bg-white dark:bg-[#0a0f1d] flex flex-col items-center justify-center p-8 text-center border border-gray-100 dark:border-gray-800 transition-all ${hasImage ? 'cursor-pointer' : 'cursor-default'} group`}
        onClick={() => hasImage && setShowModal(true)}
      >
        {/* Glowing Icon Container */}
        <div className="relative mb-8">
          <div className={`absolute inset-0 rounded-full blur-2xl ${cert.glow} scale-150 opacity-10 group-hover:opacity-30 transition-opacity`} />
          <div className="relative w-20 h-20 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-dark/50 backdrop-blur-md flex items-center justify-center shadow-xl">
            {React.cloneElement(cert.icon, { className: "w-8 h-8 text-accentGold" })}
          </div>
        </div>

        <div className="mb-4">
          <span className="px-4 py-1.5 rounded-full border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            {cert.org}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 leading-tight max-w-[250px] font-serif">
          {cert.title}
        </h3>

        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 font-medium">
            <Calendar className="w-3.5 h-3.5 mr-2 opacity-50" />
            {cert.month} {cert.year}
          </div>
          <div className="flex items-center justify-center text-xs text-gray-500 dark:text-gray-400 font-medium">
            <User className="w-3.5 h-3.5 mr-2 opacity-50" />
            {cert.idCode}
          </div>
        </div>

        {hasImage ? (
          <div className="flex items-center text-xs font-bold text-accentGold tracking-widest uppercase mt-auto group-hover:scale-105 transition-transform animate-pulse">
            <Award className="w-3.5 h-3.5 mr-2" />
            Click to View Certificate
          </div>
        ) : (
        <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 uppercase tracking-tighter text-[10px] font-bold">
            Verified Credential
          </div>
        )}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setShowModal(false)}
          >
            <motion.button 
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
              onClick={() => setShowModal(false)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={cert.image} 
              alt={cert.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                console.error("Image failed to load:", cert.image);
                e.target.src = "https://via.placeholder.com/1200x800?text=Certificate+Image+Not+Found";
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-[#0a0f1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Credentials & Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Validated skills and recognized credentials from global institutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certs.map((cert) => (
            <FlipCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
