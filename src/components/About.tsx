/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Layers, Zap, Target } from 'lucide-react';
import profile from '../assets/profile.png';
export default function About() {
  return (
    <section id="about" className="bg-premium-black relative overflow-hidden">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-sm font-mono tracking-[0.3em] text-accent uppercase mb-4">The Developer</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white tracking-tight leading-tight">
              Engineering Scalable <br className="hidden md:block" /> Digital Products
            </h3>
            <p className="text-xl text-white/70 leading-relaxed max-w-2xl mb-12 font-sans font-light">
              I build full-stack web applications using React, Node.js, and MongoDB — focusing on performance, scalability, and clean architecture.
            </p>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl mb-16 font-sans">
              From business websites to custom systems, I turn ideas into reliable, production-ready solutions that drive real-world impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Layers size={20} />
                </div>
                <div className="text-sm font-medium text-white/80">Scalable Architecture</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Zap size={20} />
                </div>
                <div className="text-sm font-medium text-white/80">Performance Optimization</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Target size={20} />
                </div>
                <div className="text-sm font-medium text-white/80">Problem Solving</div>
              </div>
            </div>
          </motion.div>

          {/* Graphical Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full max-w-md lg:max-w-none"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/20 blur-[100px] rounded-full -z-10" />

            <div className="relative group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 bg-premium-gray transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  src={profile} 
                  alt="Sabbir Profile" 
                  className="w-full h-full object-cover opacity-90  group-hover:opacity-100 transition-all duration-700" 
                />
              </div>

              {/* Floating Identity Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 premium-card bg-premium-charcoal/90 backdrop-blur-xl border border-white/10 p-5 md:p-8 flex items-center gap-5 shadow-2xl"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-accent flex items-center justify-center text-white font-bold text-2xl md:text-3xl shadow-lg shadow-accent/40">
                  S
                </div>
                <div>
                  <p className="font-display font-bold text-lg md:text-2xl text-white tracking-widest uppercase">SABBIR</p>
                  <p className="text-[10px] md:text-xs font-mono text-accent uppercase tracking-[0.3em]">Full Stack Developer</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
