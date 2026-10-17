import React, { useState } from 'react';
import Curtain from './components/Curtain.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Timeline from './components/Timeline.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [curtainOpen, setCurtainOpen] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#FFF9F6] text-[#241B21] font-sans antialiased selection:bg-[#EAA2B7]/30 selection:text-[#9E4A64] overflow-x-hidden">
      
      {/* Signature Botanical Curtain */}
      <Curtain isOpen={curtainOpen} onClose={() => setCurtainOpen(false)} />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Projects Showcase (Gapless Bento Grid) */}
      <Projects />

      {/* Technical Arsenal Garden */}
      <Skills />

      {/* Academic & Professional Journey */}
      <Timeline />

      {/* Dedicated Botanical Contact Section */}
      <Contact />

      {/* Footer with Replay Trigger */}
      <Footer onReplayCurtain={() => setCurtainOpen(true)} />

    </div>
  );
}
