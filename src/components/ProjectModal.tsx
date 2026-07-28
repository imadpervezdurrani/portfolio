'use client';

import React, { useEffect } from 'react';
import { Project } from '../data/portfolio';
import { X, ExternalLink, CheckCircle2, TrendingUp, Tag } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Card Container */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass-panel border border-slate-700/80 bg-slate-900/95 shadow-2xl text-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl glass-pill text-slate-400 hover:text-white hover:border-slate-600 transition-all z-10"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="space-y-6">
          
          {/* Header & Category Tag */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 mb-3">
              <Tag className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
              {project.title}
            </h3>
            <p className="text-base text-sky-400 font-medium mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Project Cover Image */}
          <div className="relative rounded-xl overflow-hidden aspect-video border border-slate-800 shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Metrics Pill (If Available) */}
          {project.metrics && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-sm font-semibold">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <span>Impact: {project.metrics}</span>
            </div>
          )}

          {/* Deep Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
              Overview
            </h4>
            <p className="text-slate-300 text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Accomplishments
              </h4>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium glass-pill text-slate-300 border border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-indigo-600/30"
            >
              <span>Live Preview</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-panel text-slate-200 hover:text-white hover:border-slate-600 font-semibold text-sm transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
