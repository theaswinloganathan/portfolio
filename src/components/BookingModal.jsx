import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle2 } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', purpose: '', date: '', time: '' });

  const timeSlots = ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3); // success step
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white dark:bg-dark rounded-2xl w-full max-w-lg relative overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="bg-accentGold p-6 text-white">
            <h3 className="text-2xl font-serif font-bold">Book a Session</h3>
            <p className="text-white/80 mt-1">Schedule a consultation or mentorship session.</p>
          </div>

          <div className="p-8">
            {step === 1 && (
              <form onSubmit={() => setStep(2)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0f1d] text-gray-900 dark:text-white focus:ring-2 focus:ring-accentGold focus:border-transparent transition-all outline-none" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0f1d] text-gray-900 dark:text-white focus:ring-2 focus:ring-accentGold focus:border-transparent transition-all outline-none" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Purpose of Session</label>
                  <select required className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0f1d] text-gray-900 dark:text-white focus:ring-2 focus:ring-accentGold focus:border-transparent transition-all outline-none" value={formData.purpose} onChange={e => setFormData({...formData, purpose: e.target.value})}>
                    <option value="">Select a topic</option>
                    <option value="Mentorship">Mentorship</option>
                    <option value="Consulting">Consulting Enquiry</option>
                    <option value="Speaking">Speaking Invitation</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl bg-dark dark:bg-white text-white dark:text-dark font-bold hover:bg-accentGold dark:hover:bg-accentGold hover:text-white transition-colors mt-4">
                  Next Step <span className="ml-2">→</span>
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center"><Calendar className="w-4 h-4 mr-2" /> Select Date</label>
                  <input required type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#0a0f1d] text-gray-900 dark:text-white focus:ring-2 focus:ring-accentGold outline-none" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center"><Clock className="w-4 h-4 mr-2" /> Select Time Slot</label>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setFormData({...formData, time})}
                        className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                          formData.time === time 
                            ? 'border-accentGold bg-accentGold/10 text-accentGold' 
                            : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-accentGold'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button type="button" onClick={() => setStep(1)} className="w-1/3 py-4 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    Back
                  </button>
                  <button type="submit" disabled={!formData.date || !formData.time} className="w-2/3 py-4 rounded-xl bg-accentGold text-white font-bold hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg">
                    Confirm Booking
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-8">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </motion.div>
                <h4 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">Request Received</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Thank you, {formData.name}. Your consultation request for {formData.date} at {formData.time} has been received. Our team will review the details and contact you shortly with a confirmation.
                </p>
                <button onClick={onClose} className="w-full py-4 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Close Window
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
