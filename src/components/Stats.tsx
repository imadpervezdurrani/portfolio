'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export default function Stats() {
  const { stats } = PORTFOLIO_DATA;

  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 group flex flex-col items-center justify-center text-center"
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold gradient-text tracking-tight group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
