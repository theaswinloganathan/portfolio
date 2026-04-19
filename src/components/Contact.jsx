import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const { firstName, lastName, email, message } = data;

    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );

    // Using the exact Gmail Web Compose URL provided
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=prof.vimalnath@gmail.com&su=Website%20Contact&body=${body}`;

    // Redirect the user to the Gmail compose page
    window.open(gmailLink, '_blank');

    // Reset status to idle or show a small confirmation on the page
    setStatus('success');
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Get in <span className="text-accentGold">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            I am available for strategic consulting, corporate training, and keynote speaking. Let's start a conversation about your goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-[#0a0f1d] p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">Let's Work Together</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accentGold/10 flex items-center justify-center shrink-0 mr-4">
                    <Mail className="w-5 h-5 text-accentGold" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Email</h4>
                    <a href="mailto:contact@vimalnath.com" className="text-lg font-medium text-gray-900 dark:text-white hover:text-accentBlue transition-colors">
                      contact@vimalnath.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-accentGold/10 flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-5 h-5 text-accentGold" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-1">Office</h4>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">
                      Department of Business<br />Tech University Campus
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-800">
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Connect on LinkedIn</h4>
                <a href="https://www.linkedin.com/in/vimalnath-venkatasubramanian?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0077b5] text-white font-bold hover:bg-[#005e93] shadow-lg shadow-[#0077b5]/30 transition-all transform hover:-translate-y-1">
                  <Linkedin className="w-5 h-5 mr-3" /> Connect Remotely
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-dark to-[#0a0f1d] p-8 rounded-3xl shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accentGold rounded-full blur-3xl opacity-20 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif font-bold text-white mb-4 relative z-10">Direct Consultation</h3>
              <p className="text-gray-300 mb-6 relative z-10">Need immediate strategic advice? Connect via a direct phone call for instant assistance.</p>
              <a
                href="tel:+919500034681"
                className="inline-block w-full sm:w-auto px-10 py-4 rounded-2xl bg-accentGold text-white font-bold hover:bg-yellow-600 transition-all shadow-lg relative z-10 hover:-translate-y-1 text-center"
              >
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-dark"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-[#0a0f1d] p-10 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">Email Client Opened!</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-sm">
                  We've prepared your email in your default client. Please click "Send" in your email app to complete the process.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-accentGold font-bold hover:text-yellow-600 transition-colors flex items-center gap-2"
                >
                  Send another message <Send className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0f1d] text-gray-900 dark:text-white focus:ring-2 focus:ring-accentGold focus:border-transparent transition-all outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0f1d] text-gray-900 dark:text-white focus:ring-2 focus:ring-accentGold focus:border-transparent transition-all outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0f1d] text-gray-900 dark:text-white focus:ring-2 focus:ring-accentGold focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0f1d] text-gray-900 dark:text-white focus:ring-2 focus:ring-accentGold focus:border-transparent transition-all outline-none resize-none"
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>
                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again later.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-5 rounded-2xl bg-dark dark:bg-white text-white dark:text-dark font-bold text-lg hover:bg-accentGold dark:hover:bg-accentGold hover:text-white transition-all shadow-lg flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  {status !== 'loading' && <Send className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* BookingModal removed since Call Now is the primary action */}
    </section>
  );
};

export default Contact;
