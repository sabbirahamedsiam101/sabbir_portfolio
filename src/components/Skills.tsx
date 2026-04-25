/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Layout, Server, Database, Wrench, Globe } from 'lucide-react';

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    icon: <Layout className="w-5 h-5 text-accent" />,
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: <Server className="w-5 h-5 text-accent" />,
    skills: ['Node.js', 'Express.js']
  },
  {
    title: 'Database',
    icon: <Database className="w-5 h-5 text-accent" />,
    skills: ['MongoDB']
  },
  {
    title: 'Tools',
    icon: <Wrench className="w-5 h-5 text-accent" />,
    skills: ['Git & GitHub', 'Postman', 'HTTPie']
  },
  {
    title: 'Other',
    icon: <Globe className="w-5 h-5 text-accent" />,
    skills: ['WordPress', 'Custom Themes', 'Elementor']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-premium-charcoal/30 relative">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-mono tracking-[0.3em] text-accent uppercase mb-4">Technical Stack</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Skills and Technologies</h3>
          </div>
          <p className="text-white/50 max-w-sm md:text-right">
            I leverage the best tools in the industry to build production-grade web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card"
            >
              <div className="flex items-center gap-3 mb-6">
                {group.icon}
                <h4 className="text-xl font-display font-semibold">{group.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-white/70 hover:bg-accent/10 hover:text-accent hover:border-accent/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
