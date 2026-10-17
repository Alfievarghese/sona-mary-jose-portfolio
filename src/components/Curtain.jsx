import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Curtain({ isOpen, onClose }) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Proper introductory hold so visitors can take in the botanical emblem and message
      const timer = setTimeout(() => {
        onCloseRef.current?.();
      }, 1300);
      return () => clearTimeout(timer);
    } else {
      // Gracefully unmount after all sliding and fading animations complete
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{
        duration: 1.1,
        delay: isOpen ? 0 : 1.4,
        ease: 'easeInOut'
      }}
      onClick={() => {
        if (isOpen) onCloseRef.current?.();
      }}
      className={`fixed inset-0 z-[100] overflow-hidden flex items-center justify-center bg-[#FFF9F6] ${
        isOpen ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'
      }`}
    >
      
      {/* Left Botanical Floral & Meadow Grass Panel */}
      <motion.div
        initial={{ x: 0, rotate: 0 }}
        animate={{ x: isOpen ? 0 : '-115%', rotate: isOpen ? 0 : -2.5 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 bottom-0 left-0 w-[50vw] max-w-2xl h-full flex items-end justify-start pointer-events-none z-20 will-change-transform"
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
        animate={{ x: isOpen ? 0 : '115%', rotate: isOpen ? 0 : 2.5 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 bottom-0 right-0 w-[50vw] max-w-2xl h-full flex items-end justify-end pointer-events-none z-20 will-change-transform"
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

      {/* Bottom Meadow Wildflower Border with Smooth Gradual Fade */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpen ? 0 : '120%' }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 w-full max-h-[50vh] flex items-end justify-center pointer-events-none z-30 overflow-visible will-change-transform"
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

      {/* Floating Petals Scatter with Feathered Blend */}
      <motion.div
        initial={{ scale: 1, opacity: 0.85 }}
        animate={{ scale: isOpen ? 1 : 1.25, opacity: isOpen ? 0.85 : 0 }}
        transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 pointer-events-none z-40 flex items-center justify-center p-6 will-change-transform"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0) 95%)',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0) 95%)'
        }}
      >
        <img
          src="/assets/petals_cluster.png"
          alt="Drifting flower petals"
          className="w-4/5 max-w-xl max-h-[70vh] object-contain select-none"
        />
      </motion.div>

      {/* Center Welcome Emblem */}
      <motion.div
        initial={{ scale: 1, opacity: 1, y: 0 }}
        animate={{ scale: isOpen ? 1 : 0.94, opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-50 text-center px-6 max-w-xl pointer-events-none"
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

    </motion.div>
  );
}
