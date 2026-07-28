'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Quote, MessageSquareQuote } from 'lucide-react';

export default function Testimonials() {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            What Leaders <span className="gradient-text">Say</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Feedback from engineering leaders, product managers, and founders I've collaborated with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-panel p-8 rounded-2xl border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <Quote className="w-8 h-8 text-purple-400/40 mb-4 group-hover:text-purple-400 transition-colors" />
                <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-purple-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-100">{t.name}</h4>
                  <p className="text-xs text-slate-400">
                    {t.title} &bull; <span className="text-indigo-400 font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
