'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            My professional trajectory, leadership roles, and key engineering contributions over the years.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-600 -translate-x-1/2 opacity-30 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Point Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center shadow-lg z-10 hidden sm:flex">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                  </div>

                  {/* Card Content */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 group">
                      
                      {/* Meta Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>

                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-sky-400 mb-3">
                        {exp.company}
                      </h4>

                      <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements List */}
                      <ul className="space-y-2 mb-5">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-400 glass-pill border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
