'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { User, ShieldCheck, Zap, Sparkles, HeartHandshake, MapPin, Code2, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { personal } = PORTFOLIO_DATA;

  const highlights = [
    {
      icon: <Zap className="w-6 h-6 text-sky-400" />,
      title: "Performance First",
      description: "Optimizing bundle sizes, query speeds, and rendering loops for sub-second interactions."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-400" />,
      title: "Clean Architecture",
      description: "Writing maintainable, strongly typed TypeScript code with decoupled component layers."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-purple-400" />,
      title: "Human-Centered UX",
      description: "Crafting intuitive visual hierarchies and fluid micro-animations that delight users."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-400" />,
      title: "Modern Tech Stack",
      description: "Leveraging Next.js App Router, Server Actions, React, and cloud serverless architectures."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Styled Avatar & Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              {/* Outer Decorative Neon Glow Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-85 transition duration-700 animate-pulse-slow" />
              
              {/* Main Styled Photo Card */}
              <div className="relative rounded-[2rem] overflow-hidden glass-panel border border-slate-700/80 bg-slate-950/90 shadow-2xl p-3">
                
                {/* Photo Wrapper with Gradient Overlay */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark Blending Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                  {/* Floating Top Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full glass-panel border border-sky-400/40 text-sky-300 text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                    <Code2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Full-Stack Engineer</span>
                  </div>

                  {/* Floating Bottom Location Pill */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl glass-panel border border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
                    <div>
                      <h4 className="text-base font-bold text-slate-100">{personal.name}</h4>
                      <p className="text-xs text-sky-400 font-medium flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{personal.location}</span>
                      </p>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-sm" title="Online" />
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Driven by Curiosity, Grounded in <span className="gradient-text">Engineering Excellence</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {personal.about}
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Whether building enterprise analytics platforms or generative AI tools, I focus on crafting software that scales effortlessly while delivering an exceptional user experience.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-4 rounded-xl border border-slate-800 hover:border-indigo-500/40 transition-colors flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-slate-900 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
