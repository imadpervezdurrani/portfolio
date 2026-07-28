'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen relative selection:bg-sky-500 selection:text-white ${darkMode ? 'dark bg-slate-950' : 'light bg-slate-50'}`}>
      
      {/* Background Mesh Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation Bar */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Hero Banner */}
        <Hero />

        {/* Highlight Stats */}
        <Stats />

        {/* About Section */}
        <About />

        {/* Skills Matrix */}
        <Skills />

        {/* Featured Projects Grid */}
        <Projects />

        {/* Career Experience Timeline */}
        <Experience />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Form */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>

    </div>
  );
}
