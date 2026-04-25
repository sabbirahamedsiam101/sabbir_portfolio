/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import Insights from './components/Insights';
import BlogPost from './components/BlogPost';
import SystemDesign from './components/SystemDesign';
import SmoothScroll from './components/SmoothScroll';
import ScrollOverlay from './components/ScrollOverlay';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <SystemDesign />
      <Experience />
      <Insights />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="min-h-screen bg-premium-black text-white font-sans selection:bg-accent/30">
          <ScrollOverlay />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
        </div>
      </SmoothScroll>
    </Router>
  );
}

