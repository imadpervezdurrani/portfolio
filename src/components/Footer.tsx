'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterXIcon } from '@/components/Icons';

export default function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-slate-100 tracking-tight text-lg">
              {personal.name}
            </span>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-pill text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-pill text-slate-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-pill text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="Twitter"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md hover:scale-105 transition-transform"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with Next.js, React, Tailwind CSS & <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline" />
          </p>
        </div>

      </div>
    </footer>
  );
}
