/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Calendar, User, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const CATEGORIES = ['All', 'Full Stack', 'Frontend', 'WordPress'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = PROJECTS.filter(p => 
    activeCategory === 'All' ? true : p.category === activeCategory
  );

  return (
    <section id="projects" className="bg-premium-black overflow-hidden px-4 md:px-0">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <div>
            <h2 className="text-sm font-mono tracking-[0.3em] text-accent uppercase mb-4">Engineering Focus</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured Projects</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-accent text-white shadow-lg shadow-accent/20' 
                    : 'bg-white/5 text-white/50 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="premium-card group flex flex-col h-full"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-6 border border-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-accent uppercase px-2 py-1 bg-accent/10 border border-accent/20 rounded">
                    {project.category}
                  </span>
                  <div className="flex gap-4 text-white/40">
                    {project.github && <a href={project.github} className="hover:text-accent transition-colors"><Github size={18} /></a>}
                    {project.live && <a href={project.live} className="hover:text-accent transition-colors"><ExternalLink size={18} /></a>}
                  </div>
                </div>

                <h4 className="text-2xl font-display font-bold mb-3">{project.title}</h4>
                <p className="text-white/50 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] font-mono py-1 px-2 bg-white/5 border border-white/10 rounded uppercase">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-[10px] font-mono py-1 px-2 text-white/30">+{project.tech.length - 3}</span>}
                </div>

                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:text-accent transition-all"
                >
                  View Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

