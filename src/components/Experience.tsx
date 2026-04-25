/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const EXPERIENCES = [
  {
    role: 'Full Stack Developer',
    company: 'OneSphere Solution',
    period: '2024 – Present',
    description: 'Leading development of scalable applications using React, Node.js, and MongoDB. Focusing on architecture and performance optimization.'
  },
  {
    role: 'WordPress Developer & Agency Owner',
    company: 'OneSphere Solution',
    period: '5+ Years Experience',
    description: 'Delivered hundreds of high-performance websites. Specialized in custom theme development, Elementor optimization, and digital strategy.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-premium-charcoal/30">
      <div className="section-padding">
        <div className="mb-16">
          <h2 className="text-sm font-mono tracking-[0.3em] text-accent uppercase mb-4">Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">Work Experience</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card relative"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-display font-bold mb-1">{exp.role}</h4>
                  <p className="text-accent font-medium">{exp.company}</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full text-white/40">{exp.period}</span>
              </div>
              <p className="text-white/60 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
