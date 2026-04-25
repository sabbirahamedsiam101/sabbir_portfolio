/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, User, CheckCircle2, AlertCircle, Zap } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useEffect } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-premium-black pt-20">
        <h2 className="text-4xl font-display font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="btn-primary">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-premium-black min-h-screen pb-20">
      {/* Header / Nav Overlay */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-premium-black/80 backdrop-blur-md border-b border-white/5 py-4 px-6 mb-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Portfolio</span>
          </button>
          <div className="flex gap-4">
             {project.github && <a href={project.github} className="btn-secondary py-2 px-4 text-xs"><Github size={14} /> Code</a>}
             {project.live && <a href={project.live} className="btn-primary py-2 px-4 text-xs"><ExternalLink size={14} /> Live Demo</a>}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded text-accent text-xs font-mono uppercase tracking-widest">
                {project.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-white/40">
                <span className="flex items-center gap-1"><Calendar size={14} /> {project.year}</span>
                <span className="flex items-center gap-1"><User size={14} /> {project.client}</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 max-w-4xl">
              {project.title}
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video w-full rounded-3xl overflow-hidden border border-white/5 mb-20"
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Left: Technical Specs */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-6 border-l-2 border-accent pl-4">Project Overview</h3>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                  {project.caseStudy.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
                <div>
                  <h4 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                    <AlertCircle className="text-accent" size={20} /> The Problem
                  </h4>
                  <p className="text-white/50 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="text-accent" size={20} /> The Solution
                  </h4>
                  <p className="text-white/50 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {project.caseStudy.architecture && (
                <div className="pt-12 border-t border-white/5">
                  <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-6">Technical Architecture</h3>
                  <div className="premium-card p-8 bg-white/[0.02]">
                    <p className="text-white/70 font-mono text-sm leading-loose">
                      {project.caseStudy.architecture}
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-12 border-t border-white/5">
                <h3 className="text-accent font-mono text-xs uppercase tracking-widest mb-8">Challenges & Fixes</h3>
                <div className="space-y-8">
                  {project.caseStudy.challenges.map((c, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-mono text-white/30">{i + 1}</div>
                        <div className="w-px h-full bg-white/5" />
                      </div>
                      <div className="pb-8">
                        <h5 className="font-display font-bold mb-2 text-white/90">Challenge</h5>
                        <p className="text-sm text-white/40 mb-4">{c.issue}</p>
                        <h5 className="font-display font-bold mb-2 text-accent">Engineering Solution</h5>
                        <p className="text-sm text-white/70">{c.fix}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar Info */}
            <div className="space-y-12">
              <div className="premium-card sticky top-28">
                <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-8">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-12">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded text-xs font-mono text-white/50">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-sm font-mono text-accent uppercase tracking-widest mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  {project.caseStudy.performance.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                      <Zap size={14} className="text-accent" />
                      {p}
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-white/5">
                  <h3 className="text-sm font-mono text-white uppercase tracking-widest mb-6">Key Engineering Features</h3>
                  <ul className="space-y-3">
                    {project.features.map(f => (
                      <li key={f} className="text-xs text-white/40 flex items-start gap-2">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding pt-40">
        <div className="premium-card text-center p-20 bg-linear-to-br from-accent/10 to-transparent">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase">Inspired by this project?</h2>
          <p className="text-white/50 mb-12 max-w-xl mx-auto">
            Let's discuss how I can bring similar engineering excellence to your next high-performance web application.
          </p>
          <Link to="/#contact" className="btn-primary inline-flex">Hire Me Now</Link>
        </div>
      </section>
    </div>
  );
}
