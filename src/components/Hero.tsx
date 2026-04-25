/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Download, Code, Server, Database, GitBranch, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 min-h-[90vh] flex items-center overflow-hidden bg-premium-black">
      {/* Visual background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none -z-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="section-padding w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase">Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl xl:text-8xl font-display font-bold tracking-tight mb-6 leading-[0.95] md:leading-[0.9]"
            >
              I BUILD <br className="hidden md:block" /> 
              <span className="text-white">SCALABLE</span> <br className="hidden md:block" />
              <span className="text-accent">WEB SYSTEMS</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-xl md:text-2xl font-display text-white/80 font-medium">
                Digital Engineering by <span className="text-accent underline decoration-2 underline-offset-4">SABBIR</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/50 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Full Stack Developer specializing in React, Node.js, and MongoDB — building fast, scalable, production-ready applications with clean architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="btn-primary group">
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
              <button className="btn-secondary group">
                <Download size={16} className="group-hover:text-accent transition-colors" />
                <span className="text-[11px] font-mono tracking-widest uppercase">Resume</span>
              </button>
            </motion.div>
          </div>

          {/* Right Side: Visual System Block */}
          <div className="flex-1 w-full relative mt-12 lg:mt-0">
            {/* Desktop Layout (lg and above) */}
            <div className="hidden lg:flex items-center justify-center h-[600px] relative w-full">
              {/* React Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: -50, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-[10%] left-[5%] z-30"
              >
                <div className="premium-card bg-premium-gray w-64 rotate-[-6deg] hover:rotate-0 hover:scale-105 transition-all duration-500 shadow-2xl group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      <Code size={18} />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Frontend Layer</span>
                  </div>
                  <h4 className="text-white font-display font-bold mb-2">React Component</h4>
                  <div className="space-y-1.5">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ x: '-100%' }} whileInView={{ x: '0%' }} transition={{ duration: 1, delay: 1 }} className="h-full w-3/4 bg-accent" />
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ x: '-100%' }} whileInView={{ x: '0%' }} transition={{ duration: 1, delay: 1.2 }} className="h-full w-1/2 bg-accent/40" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* API Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 50, y: -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-[25%] right-[5%] z-20"
              >
                <div className="premium-card bg-premium-charcoal w-56 rotate-[4deg] hover:rotate-0 hover:scale-105 transition-all duration-500 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/5 rounded-lg text-white/60">
                      <Server size={18} />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Backend Logic</span>
                  </div>
                  <h4 className="text-white font-display font-medium mb-3">API • Node/Express</h4>
                  <div className="flex gap-1">
                    {[1,2,3,4].map(i => <div key={i} className="w-full h-8 bg-white/5 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                  </div>
                </div>
              </motion.div>

              {/* Database Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-[20%] left-[15%] z-40"
              >
                <div className="premium-card bg-premium-charcoal w-64 rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-500 shadow-2xl border-accent/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/20 rounded-lg text-accent">
                      <Database size={18} />
                    </div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Persistence Layer</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded text-[10px] font-mono text-white/60 uppercase">
                      <span>Collections</span>
                      <span className="text-accent">12 active</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-2 rounded text-[10px] font-mono text-white/60 uppercase">
                      <span>Latency</span>
                      <span className="text-green-500">18ms</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Workflow Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 40, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute bottom-[10%] right-[10%] z-10"
              >
                <div className="premium-card bg-premium-gray w-52 rotate-[8deg] hover:rotate-0 hover:scale-105 transition-all duration-500 shadow-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <GitBranch size={16} className="text-white/40" />
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">Deployment</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 font-mono text-[10px]">
                    <Terminal size={14} className="text-accent" />
                    <span>git push origin main</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mobile & Tablet Layout (hidden on lg) */}
            <div className="lg:hidden">
               <div className="flex overflow-x-auto gap-4 md:gap-6 pb-12 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
                  {/* React Card Mobile */}
                  <div className="snap-center shrink-0 w-[280px] md:w-[320px]">
                    <div className="premium-card bg-premium-gray h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-accent/10 rounded-lg text-accent">
                          <Code size={18} />
                        </div>
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Frontend Layer</span>
                      </div>
                      <h4 className="text-white font-display font-bold mb-2">React Component</h4>
                      <p className="text-xs text-white/40 mb-4 font-sans">Building modular, high-performance UIs with state management.</p>
                      <div className="space-y-1.5">
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-3/4 bg-accent" />
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full w-1/2 bg-accent/40" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* API Card Mobile */}
                  <div className="snap-center shrink-0 w-[280px] md:w-[320px]">
                    <div className="premium-card bg-premium-charcoal h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/5 rounded-lg text-white/60">
                          <Server size={18} />
                        </div>
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Backend Logic</span>
                      </div>
                      <h4 className="text-white font-display font-medium mb-3">API • Node/Express</h4>
                      <div className="flex gap-1 mb-4">
                        {[1,2,3,4].map(i => <div key={i} className="w-full h-8 bg-white/5 rounded-sm" />)}
                      </div>
                      <p className="text-[10px] text-accent font-mono uppercase tracking-widest">RESTful architecture</p>
                    </div>
                  </div>

                  {/* Database Card Mobile */}
                  <div className="snap-center shrink-0 w-[280px] md:w-[320px]">
                    <div className="premium-card bg-premium-charcoal h-full border-accent/20">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-accent/20 rounded-lg text-accent">
                          <Database size={18} />
                        </div>
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Persistence Layer</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center bg-white/5 p-2 rounded text-[10px] font-mono text-white/60 uppercase">
                          <span>Collections</span>
                          <span className="text-accent">12 active</span>
                        </div>
                        <div className="flex justify-between items-center bg-white/5 p-2 rounded text-[10px] font-mono text-white/60 uppercase">
                          <span>Latency</span>
                          <span className="text-green-500">18ms</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Workflow Card Mobile */}
                  <div className="snap-center shrink-0 w-[280px] md:w-[320px]">
                    <div className="premium-card bg-premium-gray h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <GitBranch size={16} className="text-white/40" />
                        <span className="text-[9px] font-mono text-white/30 uppercase tracking-[0.2em]">Deployment</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80 font-mono text-[10px] mb-4">
                        <Terminal size={14} className="text-accent" />
                        <span>git push origin main</span>
                      </div>
                      <div className="text-[10px] text-white/30 font-mono uppercase">Vercel • GitHub • Actions</div>
                    </div>
                  </div>
               </div>
               
               {/* Scroll indicator for mobile */}
               <div className="flex justify-center gap-1.5 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
