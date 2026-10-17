import React from 'react';
import { Download, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-full bg-white/80 backdrop-blur-xl border border-soft-petal/70 shadow-[0_12px_32px_-8px_rgba(158,74,100,0.12)] px-6 py-3 flex items-center justify-between transition-all duration-300">
      <a href="#" className="flex items-center gap-2 group">
        <span className="w-8 h-8 rounded-full bg-[#FAECE4] border border-soft-petal flex items-center justify-center text-blush-rose font-serif italic text-lg font-bold group-hover:scale-105 transition-transform">
          S
        </span>
        <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-garden-charcoal group-hover:text-blush-rose transition-colors">
          Sona Mary Jose
        </span>
      </a>

      {/* Center Nav Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-garden-charcoal/80">
        <a href="#projects" className="hover:text-blush-rose transition-colors">Selected Works</a>
        <a href="#skills" className="hover:text-blush-rose transition-colors">Technical Arsenal</a>
        <a href="#journey" className="hover:text-blush-rose transition-colors">Experience</a>
        <a href="#contact" className="hover:text-blush-rose transition-colors">Contact</a>
      </div>

      {/* Action Pill Button */}
      <div className="flex items-center gap-3">
        <a
          href="/Sona_Resume (2).pdf"
          download="Sona_Mary_Jose_Resume.pdf"
          className="inline-flex items-center gap-2 bg-blush-rose hover:bg-[#853E54] active:scale-95 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-blush-rose/25"
        >
          <span>Resume</span>
          <Download className="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>
  );
}
