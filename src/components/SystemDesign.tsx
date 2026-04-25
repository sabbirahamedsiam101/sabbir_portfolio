/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Layout, Server, Database, Wrench, Code, Shield, Cpu, Activity } from 'lucide-react';
import { useState } from 'react';

const SYSTEMS = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    subtitle: 'React Ecosystem',
    icon: <Layout className="w-6 h-6 text-accent" />,
    content: [
      'Component-based architecture for scalability',
      'Reusable UI components',
      'State-driven rendering',
      'Responsive UI using Tailwind CSS'
    ],
    tech: ['React.js', 'JavaScript', 'Tailwind'],
    details: {
      route: 'const Navigation = () => { ... }',
      structure: 'src/components/layout/Navbar.tsx'
    }
  },
  {
    id: 'backend',
    title: 'Backend Architecture',
    subtitle: 'Node + Express',
    icon: <Server className="w-6 h-6 text-accent" />,
    content: [
      'REST API design using Express.js',
      'Modular route structure',
      'Middleware for request handling',
      'Secure data processing'
    ],
    tech: ['Node.js', 'Express.js'],
    details: {
      route: 'router.post("/api/booking", validateBody, handleBooking)',
      structure: 'server/routes/api.ts'
    }
  },
  {
    id: 'database',
    title: 'Database Design',
    subtitle: 'MongoDB / NoSQL',
    icon: <Database className="w-6 h-6 text-accent" />,
    content: [
      'NoSQL schema design using MongoDB',
      'Structured collections for scalability',
      'Efficient data querying',
      'Separation of concerns'
    ],
    tech: ['MongoDB'],
    details: {
      route: 'db.collection("users").createIndex({ email: 1 })',
      structure: 'database/schemas/User.ts'
    }
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    subtitle: 'Efficiency & QC',
    icon: <Wrench className="w-6 h-6 text-accent" />,
    content: [
      'Version control with Git & GitHub',
      'API testing with Postman & HTTPie',
      'Debugging and testing workflows',
      'Clean development practices'
    ],
    tech: ['Git', 'Postman', 'HTTPie'],
    details: {
      route: 'git commit -m "feat: implement auth middleware"',
      structure: 'scripts/deploy.sh'
    }
  }
];

export default function SystemDesign() {
  const [isDetailed, setIsDetailed] = useState(false);

  return (
    <section id="architecture" className="bg-premium-black overflow-hidden relative">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-accent font-mono text-sm tracking-[0.3em] uppercase mb-4">Architecture</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">How I Build Scalable Systems</h3>
            <p className="text-white/60 mt-6 text-lg leading-relaxed">
              A structured approach to designing performant, maintainable full-stack applications. Optimized for reliability and user experience.
            </p>
          </div>

          <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
            <button 
              onClick={() => setIsDetailed(false)}
              className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${!isDetailed ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-white/40 hover:text-white'}`}
            >
              Simple
            </button>
            <button 
              onClick={() => setIsDetailed(true)}
              className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${isDetailed ? 'bg-accent text-white shadow-lg shadow-accent/20' : 'text-white/40 hover:text-white'}`}
            >
              Detailed
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SYSTEMS.map((sys, i) => (
            <motion.div
              key={sys.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="premium-card h-full hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,77,41,0.15)] bg-premium-charcoal">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                    {sys.icon}
                  </div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{sys.subtitle}</div>
                </div>

                <h4 className="text-xl font-display font-bold text-white mb-6">
                  {sys.title}
                </h4>

                <ul className="space-y-4 mb-8">
                  {sys.content.map((point, pi) => (
                    <li key={pi} className="flex gap-3 text-sm text-white/50 leading-snug">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/30 mt-1.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {sys.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-accent/60 uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>

                <AnimatePresence>
                  {isDetailed && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-white/5 space-y-4">
                        <div>
                          <div className="text-[10px] font-mono text-white/30 uppercase mb-2 flex items-center gap-2">
                            <Code size={10} /> Snippet
                          </div>
                          <div className="bg-black/40 rounded-lg p-3 font-mono text-[10px] text-white/40">
                            {sys.details.route}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono text-white/30 uppercase mb-2">Structure</div>
                          <div className="text-[10px] text-accent/40 font-mono tracking-tighter">{sys.details.structure}</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-12 justify-center opacity-40">
          <div className="flex items-center gap-3 text-white/70">
             <Shield size={18} />
             <span className="text-[10px] font-mono tracking-widest uppercase">Security Logic</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
             <Cpu size={18} />
             <span className="text-[10px] font-mono tracking-widest uppercase">High Performance</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
             <Activity size={18} />
             <span className="text-[10px] font-mono tracking-widest uppercase">Active Monitoring</span>
          </div>
        </div>
      </div>
    </section>
  );
}
