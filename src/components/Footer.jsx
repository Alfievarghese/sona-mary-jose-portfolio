import React from 'react';

export default function Footer({ onReplayCurtain }) {
  return (
    <footer className="py-12 px-6 border-t border-soft-petal/60 bg-[#FFF5F8]/40">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-garden-charcoal/60">
        <div className="flex items-center gap-2">
          <span className="font-serif italic text-base text-garden-charcoal font-semibold">Sona Mary Jose</span>
          <span>•</span>
          <span>Kerala, India</span>
        </div>
        <div>
          <span>Crafted with botanical care &amp; precision engineering © 2026</span>
        </div>
      </div>

      {/* Replay Curtain Floating Button (Botanical Flower Trigger) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={onReplayCurtain}
          title="Replay Botanical Curtain Animation"
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-soft-petal shadow-lg hover:shadow-blush-rose/20 text-xs font-medium text-garden-charcoal transition-all active:scale-95"
        >
          <span className="w-3 h-3 rounded-full bg-blush-accent group-hover:scale-125 transition-transform" />
          <span className="font-script text-base text-blush-rose">Replay Botanical Garden</span>
        </button>
      </div>
    </footer>
  );
}
