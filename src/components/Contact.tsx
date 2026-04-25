/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, Github, Facebook, Send, MessageCircle } from 'lucide-react';

const CONTACT_INFO = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'sabbirahamedsiam101@gmail.com',
    href: 'mailto:sabbirahamedsiam101@gmail.com'
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: 'Phone',
    value: '+8801829152455',
    href: 'tel:+8801829152455'
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: 'WhatsApp',
    value: '+8801829152455',
    href: 'https://wa.me/8801829152455'
  },
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    value: 'github.com/sabbirahamedsiam101',
    href: 'https://github.com/sabbirahamedsiam101'
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    label: 'Facebook',
    value: 'facebook.com/sabbirahamed.siam',
    href: 'https://facebook.com/sabbirahamed.siam.710'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="bg-premium-charcoal/30 relative">
      <div className="section-padding">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1">
            <h2 className="text-sm font-mono tracking-[0.3em] text-accent uppercase mb-4">Connection</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8">Let's Build Something Great</h3>
            <p className="text-lg text-white/50 mb-12 max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              {CONTACT_INFO.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-white/30 uppercase tracking-tighter">{item.label}</p>
                    <p className="text-white/80 group-hover:text-accent font-medium transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="premium-card p-8 md:p-12"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/40 uppercase">Your Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-hidden transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-white/40 uppercase">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-hidden transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-accent outline-hidden transition-all resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-display font-bold">
            SABBIR<span className="text-accent">.</span>
          </div>
          <p className="text-sm text-white/30 font-mono">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED. DESIGNED FOR HIGH COMPRESSION SUCCESS.
          </p>
          <div className="flex gap-6 text-white/40 text-xs font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
