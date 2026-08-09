import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Github, Linkedin, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ fullName: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to Work</span>
          </div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Amazing Together
          </h3>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            I'm actively looking for Full Stack Developer, MERN Stack Developer, and Backend Developer opportunities. Feel free to reach out for internships, collaborations, freelance work, or full-time roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between glass-card p-8 rounded-3xl border border-white/10"
          >
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Contact Information</h4>
              <p className="text-xs text-slate-400 mb-8">
                Have a project or opportunity? Reach out directly via email, phone, or connect through social links.
              </p>

              <div className="space-y-6 text-sm text-slate-200">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Direct Email</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="font-semibold hover:text-cyan-400 transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Phone Number</span>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="font-semibold hover:text-cyan-400 transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Location</span>
                    <span className="font-semibold text-slate-200">{CONTACT_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expected Response Time & Social Links */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-6 w-full">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>{CONTACT_INFO.responseTime}</span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 block mb-3">Connect on Social Platforms:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={CONTACT_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10"
          >
            <h4 className="text-xl font-bold text-white mb-2">Send a Message</h4>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="rahul@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. MERN Developer Role / Project Discussion"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello Vicky, I came across your portfolio and would like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-cyan-600 hover:bg-cyan-500 shadow-lg shadow-cyan-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <span className="font-mono text-xs">Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2 font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you within 24 hours.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
