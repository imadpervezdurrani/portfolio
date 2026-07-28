'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolio';
import ProjectModal from './ProjectModal';
import { ExternalLink, FolderGit2, Star, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Full Stack', 'Frontend', 'AI / Cloud', 'Mobile & UI'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            A showcase of recent web applications, AI tools, and full-stack solutions built with high performance in mind.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl overflow-hidden border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Hover Overlay */}
                <div className="relative aspect-video overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 rounded-full bg-slate-900/90 text-white hover:bg-sky-500 transition-colors shadow-lg"
                      aria-label="View Project Case Study"
                      title="View Details"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-900/90 text-white hover:bg-indigo-500 transition-colors shadow-lg"
                      aria-label="Live Demo Link"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-indigo-600/90 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-1 shadow-md">
                      <Star className="w-3 h-3 fill-current text-amber-300" />
                      <span>Featured</span>
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md glass-panel text-slate-200 text-xs font-mono border border-slate-700/80">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-sky-400 font-medium mt-1 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-900/80 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-500 bg-slate-900/50">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/60 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                >
                  <span>Read Case Study</span>
                  <span>→</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-sky-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Case Study Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
