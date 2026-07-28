'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');

    // Simulate server submission action
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 }
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Let's Build Something <span className="gradient-text">Great</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Have a project in mind, a question, or an open role? Reach out directly and let me know how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">Direct Email</h4>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base font-semibold text-slate-200 hover:text-sky-400 transition-colors"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">Location</h4>
                <p className="text-base font-semibold text-slate-200">{personal.location}</p>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">Response Time</h4>
                <p className="text-base font-semibold text-slate-200">Within 24 Hours</p>
              </div>
            </div>

            {/* Quick Note */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30 text-xs text-indigo-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-indigo-300">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Open for Consulting & Full-time Roles</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Currently accepting select freelance inquiries, architectural design consultations, and full-stack engineering opportunities.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 rounded-2xl border border-slate-800 space-y-6"
            >
              
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-sm flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/50 text-rose-300 text-sm flex items-center gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-bold text-base hover:opacity-95 shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
