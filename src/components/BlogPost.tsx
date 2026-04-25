/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { BLOG_POSTS } from '../constants';
import { useEffect, useState } from 'react';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-premium-black pt-20">
        <h2 className="text-4xl font-display font-bold mb-4">Post Not Found</h2>
        <Link to="/" className="btn-primary">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-premium-black min-h-screen">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-premium-black/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest">Back to Insights</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handleShare}
              className="text-white/40 hover:text-accent transition-colors flex items-center gap-2"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest hidden sm:block">
                {copied ? 'Link Copied' : 'Share Link'}
              </span>
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </nav>

      <article className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <header className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-[10px] font-mono uppercase tracking-[0.2em] mb-8">
                {post.category}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white mb-8 leading-[1.1] text-gradient">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-8 text-[11px] font-mono text-white/40 uppercase tracking-widest border-y border-white/5 py-6">
                <span className="flex items-center gap-2"><User size={14} className="text-accent" /> By Sabbir</span>
                <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-accent" /> {post.readTime}</span>
              </div>
            </motion.div>
          </header>

          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 mb-16 shadow-2xl shadow-accent/5"
            >
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </motion.div>

            {/* Content Container */}
            <div className="premium-card p-6 md:p-12 mb-16">
              {/* Executive Summary/Description */}
              <div className="mb-12 pb-12 border-b border-white/5">
                <h3 className="text-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-4">Overview</h3>
                <p className="text-2xl text-white/90 leading-relaxed font-light">
                  {post.description}
                </p>
              </div>

              {/* Main Content Rendered via Markdown with Prose Classes */}
              <div className="prose prose-invert max-w-none 
                prose-headings:font-display prose-headings:text-white
                prose-p:text-white/70 prose-p:leading-[1.8] prose-p:text-lg prose-p:mb-10
                prose-strong:text-white prose-strong:font-bold
                prose-li:text-white/70 prose-li:marker:text-accent prose-li:my-3
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-20 prose-h2:mb-10
                prose-h3:text-xl prose-h3:font-bold prose-h3:mt-12 prose-h3:mb-6
                prose-ul:pl-5 prose-ul:mb-10
                prose-code:bg-white/5 prose-code:text-accent prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
              ">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              {/* Key Highlights Section */}
              <div className="mt-16 pt-16 border-t border-white/5">
                <h4 className="text-[10px] font-mono text-accent uppercase tracking-widest mb-8">Key Engineering Takeaways</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {post.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-sm text-white/80">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Author Footer */}
            <footer className="pt-12 border-t border-white/5">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-premium-charcoal border border-white/10 flex items-center justify-center text-accent font-bold text-3xl shadow-xl overflow-hidden">
                  <img src="/input_file_0.png" alt="Sabbir" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-[10px] font-mono text-accent uppercase tracking-widest mb-1">Written By</div>
                  <h4 className="text-2xl font-display font-bold text-white mb-2">SABBIR</h4>
                  <p className="text-sm text-white/50 max-w-sm">Full Stack Developer specializing in technical growth strategies and high-performance digital architecture.</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>

      {/* Recommended CTA */}
      <section className="section-padding pt-20">
         <div className="max-w-4xl mx-auto">
            <div className="premium-card text-center p-12 md:p-20 bg-linear-to-br from-accent/10 to-transparent border-accent/20">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white uppercase tracking-tight">Got a Technical Challenge?</h2>
                <p className="text-white/50 mb-10 text-lg max-w-xl mx-auto">
                    I help businesses solve complex internal workflows and performance bottlenecks through custom software engineering.
                </p>
                <Link to="/#contact" className="btn-primary">Let's Collaborate</Link>
            </div>
         </div>
      </section>
    </div>
  );
}
