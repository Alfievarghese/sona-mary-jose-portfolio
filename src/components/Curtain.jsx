import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Curtain({ isOpen, onClose }) {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        onClose();
      }, 700);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 2300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden flex items-center justify-center bg-[#FFF9F6] pointer-events-${
        isOpen ? 'auto' : 'none'
      } transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 delay-1000'}`}
    >
      
      {/* Left Botanical Floral & Meadow Grass Panel */}
      <motion.div
        initial={{ x: 0, rotate: 0 }}
        animate={{ x: isOpen ? 0 : '-115%', rotate: isOpen ? 0 : -3 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 bottom-0 left-0 w-[50vw] max-w-2xl h-full flex items-end justify-start pointer-events-none z-20"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
        }}
      >
        <img
          src="/assets/curtain_left.png"
          alt="Botanical meadow flowers"
          className="h-full w-auto object-contain object-left-bottom drop-shadow-xl select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF5F8]/70 via-[#FFF9F6]/30 to-transparent -z-10" />
      </motion.div>

      {/* Right Botanical Floral & Meadow Grass Panel */}
      <motion.div
        initial={{ x: 0, rotate: 0 }}
        animate={{ x: isOpen ? 0 : '115%', rotate: isOpen ? 0 : 3 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 bottom-0 right-0 w-[50vw] max-w-2xl h-full flex items-end justify-end pointer-events-none z-20"
        style={{
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
        }}
      >
        <img
          src="/assets/curtain_right.png"
          alt="Botanical wild grass and peonies"
          className="h-full w-auto object-contain object-right-bottom drop-shadow-xl select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#FFF5F8]/70 via-[#FFF9F6]/30 to-transparent -z-10" />
      </motion.div>

      {/* Bottom Meadow Wildflower Border with Smooth Gradual Fade (NO SUDDEN CUT) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpen ? 0 : '120%' }}
        transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 w-full max-h-[50vh] flex items-end justify-center pointer-events-none z-30 overflow-visible"
        style={{
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 95%)'
        }}
      >
        <img
          src="/assets/meadow_bottom.png"
          alt="Blooming meadow"
          className="w-full h-auto max-h-[46vh] object-cover object-bottom select-none opacity-90"
        />
      </motion.div>

      {/* Floating Petals Scatter */}
      <motion.div
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: isOpen ? 1 : 1.3, opacity: isOpen ? 0.8 : 0 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 pointer-events-none z-40 flex items-center justify-center"
      >
        <img
          src="/assets/petals_cluster.png"
          alt="Drifting flower petals"
          className="w-3/4 max-w-2xl object-contain select-none"
        />
      </motion.div>

      {/* Center Welcome Emblem */}
      <motion.div
        initial={{ scale: 1, opacity: 1, y: 0 }}
        animate={{ scale: isOpen ? 1 : 0.92, opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-50 text-center px-6 max-w-xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-soft-petal shadow-sm mb-4">
          <span className="w-2 h-2 rounded-full bg-meadow-green animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-meadow-green font-medium">Digital Conservatory</span>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl text-garden-charcoal font-semibold italic tracking-tight mb-3">
          Sona Mary Jose
        </h1>
        <p className="font-script text-2xl md:text-3xl text-blush-rose mb-5">
          Where silicon hardware blossoms with human grace...
        </p>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-blush-accent to-transparent mx-auto" />
      </motion.div>

    </div>
  );
}
