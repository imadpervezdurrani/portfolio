'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Mail, ArrowRight, Download, Sparkles, Terminal, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { personal } = PORTFOLIO_DATA;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-sky-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            {/* Status Pulse Badge */}
            <div className="flex items-center gap-3.5">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-300" />
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="relative w-14 h-14 rounded-full object-cover object-top border-2 border-slate-900 shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 text-xs sm:text-sm font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>{personal.status}</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
              Hi, I'm <span className="gradient-text">{personal.name}</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
              {personal.title}
            </h2>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {personal.bio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={triggerConfetti}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white font-semibold text-base shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-slate-700 hover:bg-slate-800/80 font-medium text-base transition-all"
              >
                <span>Get In Touch</span>
              </a>

              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl glass-pill text-slate-300 hover:text-white hover:border-sky-500/40 text-sm transition-all"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-pill text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-pill text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personal.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass-pill text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                  aria-label="Twitter Profile"
                >
                  <TwitterXIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg glass-pill text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Editor / Developer Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer Glowing Border Card */}
              <div className="w-full rounded-2xl glass-panel p-1 border border-slate-800 shadow-2xl shadow-indigo-950/40 hover:border-indigo-500/40 transition-colors">
                
                {/* Simulated IDE Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 rounded-t-xl border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>developer.config.ts</span>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50">TypeScript</span>
                </div>

                {/* Simulated IDE Body */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-2 bg-slate-950/60 rounded-b-xl overflow-x-auto">
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-sky-400">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">name</span>: <span className="text-emerald-300">"{personal.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">role</span>: <span className="text-emerald-300">"Full-Stack Architect"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-indigo-300">stack</span>: [
                  </div>
                  <div className="pl-8 text-amber-300">
                    "Next.js 15", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "AWS"
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-indigo-300">passions</span>: [
                  </div>
                  <div className="pl-8 text-amber-300">
                    "Clean Architecture", "Sleek UI/UX", "High Scalability"
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-indigo-300">hireable</span>: <span className="text-sky-400">true</span>,
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-2 text-slate-500 italic">
                    // Ready to turn innovative ideas into reality.
                  </div>
                </div>
              </div>

              {/* Floating Highlight Cards */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 rounded-xl glass-panel border border-sky-500/30 shadow-xl bg-slate-900/90 animate-float">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">Sub-second UX</div>
                  <div className="text-[11px] text-slate-400">100 Lighthouse Speed</div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-6 -right-6 items-center gap-3 p-3.5 rounded-xl glass-panel border border-indigo-500/30 shadow-xl bg-slate-900/90 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">Modern Stack</div>
                  <div className="text-[11px] text-slate-400">Next.js App Router</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
