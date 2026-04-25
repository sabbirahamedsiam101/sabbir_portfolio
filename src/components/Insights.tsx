/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

export default function Insights() {
  return (
    <section id="insights" className="bg-premium-charcoal/30 relative">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-sm font-mono tracking-[0.3em] text-accent uppercase mb-4">Engineering Notes</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Insights & Thoughts</h3>
          </div>
          <p className="text-white/50 max-w-sm md:text-right">
            Deep dives into technical challenges, architecture decisions, and performance optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card group flex flex-col h-full"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-4 text-[10px] font-mono text-white/30 uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>

              <h4 className="text-xl font-display font-bold mb-4 group-hover:text-accent transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-sm text-white/50 mb-8 line-clamp-2">
                {post.excerpt}
              </p>

              <Link 
                to={`/blog/${post.id}`}
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-accent group/btn"
              >
                Read Article 
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
