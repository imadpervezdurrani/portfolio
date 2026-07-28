'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Layers, Server, Cloud, Palette, Cpu, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState(0);

  const getTabIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'frontend':
        return <Layers className="w-4 h-4" />;
      case 'backend & databases':
        return <Server className="w-4 h-4" />;
      case 'devops & cloud':
        return <Cloud className="w-4 h-4" />;
      case 'design & process':
        return <Palette className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my core technology stack, frameworks, and architectural practices.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {getTabIcon(cat.name)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories[activeTab].skills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span className="text-base font-bold text-slate-200 group-hover:text-sky-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
                {skill.experience && (
                  <span className="text-xs px-2.5 py-1 rounded-md glass-pill text-indigo-300 font-mono border border-indigo-800/40">
                    {skill.experience}
                  </span>
                )}
              </div>

              {/* Progress Bar Container */}
              <div className="w-full bg-slate-950/80 h-2.5 rounded-full overflow-hidden p-0.5 border border-slate-800/60">
                <div
                  className="h-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="flex items-center justify-end mt-2">
                <span className="text-xs font-mono text-slate-400 font-semibold">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
