import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative pt-32 md:pt-44 pb-20 md:pb-28 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Ambient Botanical Backdrops */}
      <div className="absolute -top-12 -left-12 w-96 h-96 bg-[#FDF2F5] rounded-full blur-3xl opacity-70 -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#FAECE4] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Narrative Column (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-7 space-y-6"
        >
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAECE4] border border-soft-petal text-blush-rose">
            <span className="w-2 h-2 rounded-full bg-meadow-green animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">Embedded AI • IoT Firmware • UI/UX Design</span>
          </div>

          {/* 2-Line Iron Rule Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-garden-charcoal font-semibold leading-[1.12] tracking-tight max-w-3xl">
            Engineering with Silicon, Designed with{' '}
            <span className="italic text-blush-rose font-normal inline-flex items-center gap-2">
              Botanical Grace
              <span
                className="inline-block w-8 h-8 rounded-full bg-contain bg-center bg-no-repeat align-middle"
                style={{ backgroundImage: "url('/assets/petals_cluster.png')" }}
              />
            </span>
          </h1>

          {/* Subtitle & Context */}
          <p className="text-base sm:text-lg text-garden-charcoal/75 leading-relaxed max-w-2xl font-light">
            Hi, I'm <strong className="text-garden-charcoal font-semibold">Sona Mary Jose</strong>. Electronics and Communication engineer fusing low-level ESP32 firmware, sensor physics, and offline AI intelligence with serene, museum-tier UI/UX interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Button-in-Button Primary */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-3.5 bg-garden-charcoal hover:bg-[#342830] active:scale-95 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full transition-all duration-300 shadow-md"
            >
              <span>Explore Inventions</span>
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-xs group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Ghost Secondary */}
            <a
              href="/Sona_Resume (2).pdf"
              download="Sona_Mary_Jose_Resume.pdf"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FFF5F8] border border-soft-petal text-blush-rose font-medium text-sm sm:text-base px-6 py-3.5 rounded-full transition-all duration-300"
            >
              <span>Download Resume (PDF)</span>
              <Download className="w-4 h-4 opacity-75" />
            </a>
          </div>

          {/* Verified Accreditations */}
          <div className="pt-6 border-t border-soft-petal/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-meadow-green" />
              <span className="text-garden-charcoal/80">IISER Bhopal NPTEL Elite</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-meadow-green" />
              <span className="text-garden-charcoal/80">IICT GmbH Germany Fellow</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-meadow-green" />
              <span className="text-garden-charcoal/80">Infotact UI/UX Associate</span>
            </div>
          </div>

        </motion.div>

        {/* Right Column: Double-Bezel Framed Portrait of Sona (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="double-bezel max-w-sm sm:max-w-md w-full relative">
            
            {/* Inner Core Container */}
            <div className="double-bezel-inner overflow-hidden relative group">
              
              {/* Real Photo of Sona */}
              <img
                src="/sona-photo.png"
                alt="Sona Mary Jose"
                className="w-full h-auto object-cover max-h-[500px] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Botanical Soft Vignette & Status Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-garden-charcoal/85 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-200">Active Engineer & Designer</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold italic text-white/95">Sona Mary Jose</h2>
                <p className="text-xs text-white/80 font-light">St. Joseph's College of Engineering & Technology, Palai</p>
              </div>

              {/* Botanical Floral Accent Corner */}
              <div className="absolute top-3 right-3 w-16 h-16 pointer-events-none opacity-85">
                <img src="/assets/curtain_left.png" alt="Floral motif" className="w-full h-full object-contain -scale-x-100" />
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </header>
  );
}
