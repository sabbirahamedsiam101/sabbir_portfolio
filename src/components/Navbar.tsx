/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Architecture', href: '/#architecture' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Insights', href: '/#insights' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    if (location.pathname !== '/' && href.startsWith('/#')) {
      // Logic handled by normal anchor if we are on landing, 
      // but if we are on subpage, the browser will navigate to / then hash.
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-premium-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          to="/"
          className="text-2xl font-display font-bold tracking-tighter"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            SABBIR<span className="text-accent">.</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-accent transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="/#contact"
            onClick={() => handleLinkClick('/#contact')}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn-primary py-2 px-6"
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-premium-charcoal border-b border-white/5 p-6 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-lg font-medium text-white/70 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => handleLinkClick('/#contact')}
            className="btn-primary text-center justify-center"
          >
            Get in Touch
          </a>
        </motion.div>
      )}
    </nav>
  );
}
