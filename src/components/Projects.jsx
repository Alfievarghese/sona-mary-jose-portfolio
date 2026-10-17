import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Palette, Award, ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-28 md:scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="font-script text-2xl text-blush-rose">Curated Portfolio</span>
          <h2 className="font-serif text-3xl sm:text-5xl text-garden-charcoal font-semibold tracking-tight mt-1">
            Inventions, Hardware & Design
          </h2>
        </div>
        <p className="text-sm text-garden-charcoal/60 max-w-md mt-4 md:mt-0 font-light">
          A documented track record across embedded microcontrollers, acoustic sensor architectures, and production-grade interface systems.
        </p>
      </div>

      {/* Gapless Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Project 1: Smart Gas Stove (8 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-8 double-bezel group"
        >
          <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
            <div className="overflow-hidden rounded-2xl relative aspect-video">
              <img
                src="/assets/smart_gas_stove.jpg"
                alt="Smart Gas Stove IoT Project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-soft-petal font-mono text-xs font-semibold text-garden-charcoal flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-blush-rose" />
                <span>IoT • ESP32 WROOM</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-blush-rose uppercase tracking-wider mb-2">
                <span>Hardware Invention</span>
                <span>•</span>
                <span>2026</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-garden-charcoal mb-3">
                Smart Gas Stove: Acoustic Whistle Counting & Automated Shutoff
              </h3>
              <p className="text-sm sm:text-base text-garden-charcoal/75 leading-relaxed font-light mb-4">
                Engineered a safety and convenience retrofit for traditional gas stoves using an ESP32 microcontroller. Built an acoustic whistle-detection sensor system with automated solenoid shutoff, integrated MQ-4 gas leakage sensors, and dual buzzer + instant mobile alert telemetry.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">ESP32</span>
                <span className="px-3 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">Sensor Interfacing</span>
                <span className="px-3 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">PCB Design</span>
                <span className="px-3 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">Safety Automation</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2: JARVIS Offline Desktop Assistant (4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-4 double-bezel group"
        >
          <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
            <div className="overflow-hidden rounded-2xl relative aspect-[4/3]">
              <img
                src="/assets/jarvis_ai.jpg"
                alt="JARVIS AI Assistant"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-garden-charcoal/90 backdrop-blur-md text-white font-mono text-xs font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-blush-accent" />
                <span>TechAshy Hackathon 2026</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-blush-rose uppercase tracking-wider mb-2">
                <span>Offline Edge AI</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-garden-charcoal mb-2">
                JARVIS — Offline AI Assistant
              </h3>
              <p className="text-xs sm:text-sm text-garden-charcoal/75 leading-relaxed font-light mb-4">
                Engineered for TechAshy Hackathon 2026. Integrated Faster-Whisper for real-time speech recognition and LLaVA for desktop screen vision, completely offline within a glassmorphism Tkinter HUD.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">Faster-Whisper</span>
                <span className="px-2.5 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">LLaVA</span>
                <span className="px-2.5 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">Python</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 3: Infotact UI/UX Design System (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 double-bezel group"
        >
          <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
            <div className="overflow-hidden rounded-2xl relative aspect-[4/3]">
              <img
                src="/assets/uiux_case_study.jpg"
                alt="Infotact Solutions UI/UX"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-soft-petal font-mono text-xs font-semibold text-garden-charcoal flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-blush-rose" />
                <span>Infotact Solutions</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-blush-rose uppercase tracking-wider mb-2">
                <span>Design System & Research</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-garden-charcoal mb-2">
                Infotact UI/UX Design Associate L1
              </h3>
              <p className="text-xs sm:text-sm text-garden-charcoal/75 leading-relaxed font-light mb-4">
                Collaborated with web development and product teams to architect intuitive user flows, comprehensive Figma component libraries, wireframes, and conducted user research testing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">Figma</span>
                <span className="px-2.5 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">User Research</span>
                <span className="px-2.5 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">Design Systems</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 4: Embedded AIoT & Sensor Physics (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 double-bezel group"
        >
          <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
            <div className="overflow-hidden rounded-2xl relative aspect-video">
              <img
                src="/assets/embedded_hardware.jpg"
                alt="Embedded AIoT Sensor Hardware"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-meadow-green text-white font-mono text-xs font-semibold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>IICT GmbH & IISER Bhopal</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-blush-rose uppercase tracking-wider mb-2">
                <span>Sensor Physics & Firmware</span>
              </div>
              <h3 className="font-serif text-2xl font-semibold text-garden-charcoal mb-2">
                Embedded AIoT Academy & Sensor Fabrication
              </h3>
              <p className="text-sm text-garden-charcoal/75 leading-relaxed font-light mb-4">
                Completed intensive project readiness at IICT GmbH Training Academy, Germany, developing hybrid hardware-software embedded AI pipelines. Certified NPTEL Elite in Sensor Technologies: Physics, Fabrication, and Circuits by IISER Bhopal (score 69%).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">Sensor Physics</span>
                <span className="px-3 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">NPTEL Elite (69%)</span>
                <span className="px-3 py-1 rounded-full bg-rose-mist text-garden-charcoal font-mono text-xs">AIoT Deployment</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
