import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, Download, ArrowUpRight, Sparkles, MapPin, Globe, Clock, X, CheckCircle2, Linkedin } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Embedded AI & IoT');
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [showModal, setShowModal] = useState(false);
  const [submittedSender, setSubmittedSender] = useState({ name: '', topic: '' });

  const topics = [
    'Embedded AI & IoT',
    'UI/UX & Design Systems',
    'Custom PCB & Firmware',
    'Hackathon Collaboration',
    'General Inquiry'
  ];

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sonamary246@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setStatus({ state: 'loading', message: 'Sending your query...' });

    const form = e.target;
    const formData = new FormData(form);
    formData.set('subject', selectedTopic);
    const senderName = formData.get('name') || '';

    try {
      const res = await fetch('https://formspree.io/f/xdeabvwy', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmittedSender({
          name: senderName,
          topic: selectedTopic,
        });
        setStatus({ state: 'idle', message: '' });
        setShowModal(true);
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Form submission failed');
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Could not send automatically. Please write directly to sonamary246@gmail.com.',
      });
    }
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-7xl mx-auto relative overflow-hidden scroll-mt-24 md:scroll-mt-28">
      
      {/* Ambient Botanical Glow Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FDF2F5] rounded-full blur-3xl opacity-75 -z-10 pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-[#FAECE4] rounded-full blur-3xl opacity-70 -z-10 pointer-events-none" />

      {/* Main Double-Bezel Unified Conservatory Card */}
      <div className="double-bezel max-w-6xl mx-auto">
        <div className="double-bezel-inner p-6 sm:p-10 md:p-12 lg:p-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
            
            {/* Left Column: Editorial Overview & Direct Atelier Card (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="space-y-3">
                <span className="font-script text-2xl text-blush-rose flex items-center gap-2">
                  <span>Botanical Inquiries</span>
                  <span className="w-8 h-[1px] bg-blush-accent" />
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] text-garden-charcoal font-semibold tracking-tight leading-[1.18]">
                  Let's cultivate your next breakthrough.
                </h2>
                <p className="text-sm text-garden-charcoal/75 leading-relaxed font-light pt-1">
                  Available for 2026 full-time engineering opportunities, custom IoT firmware prototypes, and refined UI/UX design architecture.
                </p>
              </div>

              {/* Unified Atelier Direct Contact Card */}
              <div className="p-6 rounded-3xl bg-[#FFF9F6]/90 border border-soft-petal space-y-5 shadow-xs">
                {/* Sona Profile Row */}
                <div className="flex items-center gap-4 pb-4 border-b border-soft-petal/60">
                  <img
                    src="/sona-photo.png"
                    alt="Sona Mary Jose"
                    className="w-14 h-14 rounded-full object-cover border border-soft-petal shadow-xs flex-shrink-0"
                  />
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-meadow-green font-semibold">
                        Open to 2026 Roles
                      </span>
                    </div>
                    <h4 className="font-serif text-lg font-semibold text-garden-charcoal truncate">Sona Mary Jose</h4>
                    <p className="text-xs text-garden-charcoal/60 font-light truncate">Embedded AI • IoT • UI/UX</p>
                  </div>
                </div>

                {/* 1-Click Copy Email Row */}
                <div className="space-y-1.5">
                  <span className="block text-[11px] font-mono uppercase text-garden-charcoal/60 font-semibold tracking-wider">
                    Direct Communication
                  </span>
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-soft-petal group">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-rose-mist flex items-center justify-center text-blush-rose flex-shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <a
                        href="mailto:sonamary246@gmail.com"
                        className="text-xs sm:text-sm font-medium text-garden-charcoal group-hover:text-blush-rose transition-colors truncate"
                      >
                        sonamary246@gmail.com
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="flex-shrink-0 px-3 py-1 rounded-full bg-rose-mist hover:bg-soft-petal/60 text-xs font-mono text-garden-charcoal border border-soft-petal transition-all flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-meadow-green" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
                {/* LinkedIn Professional Connection Row */}
                <div className="space-y-1.5">
                  <span className="block text-[11px] font-mono uppercase text-garden-charcoal/60 font-semibold tracking-wider">
                    Professional Network
                  </span>
                  <a
                    href="https://www.linkedin.com/in/sona-mary-277954290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-2xl bg-white hover:bg-rose-mist/60 border border-soft-petal transition-all duration-300 group shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Linkedin className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm font-medium text-garden-charcoal group-hover:text-blush-rose transition-colors truncate block">
                          Sona Mary Jose
                        </span>
                        <span className="text-[10px] font-mono text-garden-charcoal/50 block truncate">
                          linkedin.com/in/sona-mary
                        </span>
                      </div>
                    </div>
                    <span className="flex-shrink-0 px-3 py-1 rounded-full bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-xs font-mono text-[#0A66C2] border border-[#0A66C2]/20 transition-all flex items-center gap-1 shadow-2xs group-hover:translate-x-0.5">
                      <span>Connect</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </a>
                </div>

                {/* Context Meta Badges */}
                <div className="grid grid-cols-2 gap-3 text-xs font-mono text-garden-charcoal/70 pt-1">
                  <div className="p-2.5 rounded-xl bg-petal-cream/70 border border-soft-petal/80 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-blush-rose flex-shrink-0" />
                    <span className="truncate">Kerala, India</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-petal-cream/70 border border-soft-petal/80 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blush-rose flex-shrink-0" />
                    <span className="truncate">Reply &lt; 24h</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#FFF9F6]/90 border border-soft-petal rounded-3xl p-6 sm:p-8 md:p-9 shadow-xs flex flex-col justify-between">
              
              <form onSubmit={handleSubmit} method="POST" action="javascript:void(0)" className="space-y-6">
                
                {/* Topic Selector Chips */}
                <div className="space-y-2.5">
                  <label className="block text-xs font-mono uppercase text-garden-charcoal/70 tracking-wider font-semibold">
                    Select Domain / Inquiry Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => {
                      const isActive = selectedTopic === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTopic(t)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                            isActive
                              ? 'bg-garden-charcoal text-white shadow-sm scale-[1.02]'
                              : 'bg-white hover:bg-rose-mist border border-soft-petal text-garden-charcoal/80'
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-garden-charcoal/70 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Maya Lin"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-soft-petal text-garden-charcoal placeholder-garden-charcoal/35 text-sm focus:outline-none focus:ring-2 focus:ring-blush-rose/30 focus:border-blush-rose transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-garden-charcoal/70 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="maya@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-soft-petal text-garden-charcoal placeholder-garden-charcoal/35 text-sm focus:outline-none focus:ring-2 focus:ring-blush-rose/30 focus:border-blush-rose transition-all shadow-sm"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono uppercase text-garden-charcoal/70 font-semibold">
                    Your Message / Project Scope *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your project, team opportunity, timeline, or engineering challenge..."
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-soft-petal text-garden-charcoal placeholder-garden-charcoal/35 text-sm focus:outline-none focus:ring-2 focus:ring-blush-rose/30 focus:border-blush-rose transition-all resize-none shadow-sm"
                  />
                </div>

                {/* Actions Bar */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={status.state === 'loading'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-garden-charcoal hover:bg-blush-rose active:scale-95 text-white font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md group disabled:opacity-50 cursor-pointer"
                  >
                    <span>{status.state === 'loading' ? 'Sending...' : 'Send Query'}</span>
                    <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </button>

                  <div className="flex items-center gap-2 text-xs font-mono text-garden-charcoal/50">
                    <Sparkles className="w-3.5 h-3.5 text-blush-rose" />
                    <span>Direct transmission to inbox</span>
                  </div>
                </div>

                {/* Error Banner if any */}
                {status.state === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl text-xs font-mono bg-rose-100 text-rose-700 border border-rose-300"
                  >
                    {status.message}
                  </motion.div>
                )}

              </form>

            </div>

          </div>

        </div>
      </div>
      {/* Elegant Botanical Pop-up Modal for Sent Query (Zero Redirection) */}
      <AnimatePresence>
        {showModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-garden-charcoal/45 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="double-bezel max-w-lg w-full relative overflow-hidden"
            >
              <div className="double-bezel-inner p-8 sm:p-10 text-center relative">
                
                {/* Decorative botanical glow */}
                <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#FDF2F5] rounded-full blur-2xl opacity-80 pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#FAECE4] rounded-full blur-2xl opacity-80 pointer-events-none" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-rose-mist hover:bg-soft-petal/60 border border-soft-petal flex items-center justify-center text-garden-charcoal hover:text-blush-rose transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Botanical Badge */}
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#FAECE4] border border-soft-petal flex items-center justify-center text-blush-rose shadow-inner relative">
                  <CheckCircle2 className="w-8 h-8 text-meadow-green" />
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-soft-petal flex items-center justify-center text-blush-rose shadow-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Heading */}
                <span className="font-script text-2xl text-blush-rose block mb-1">
                  Query Delivered
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-garden-charcoal tracking-tight">
                  Thank You{submittedSender.name ? `, ${submittedSender.name}` : ''}!
                </h3>

                {/* Message */}
                <p className="text-sm sm:text-base text-garden-charcoal/75 font-light leading-relaxed mt-3 max-w-sm mx-auto">
                  Your inquiry regarding <strong className="font-medium text-garden-charcoal">{submittedSender.topic || 'Engineering Collaboration'}</strong> has been securely routed directly to Sona Mary Jose.
                </p>

                {/* Delivery Guarantee Pill */}
                <div className="my-5 p-3.5 rounded-2xl bg-petal-cream/80 border border-soft-petal flex items-center justify-center gap-2.5 text-xs font-mono text-garden-charcoal/80">
                  <Clock className="w-3.5 h-3.5 text-blush-rose flex-shrink-0" />
                  <span>Guaranteed response within 24 hours</span>
                </div>

                {/* Dismiss Button */}
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-garden-charcoal hover:bg-blush-rose active:scale-95 text-white font-medium text-sm py-3.5 px-6 rounded-full transition-all duration-300 shadow-md cursor-pointer"
                >
                  <span>Return to Portfolio</span>
                </button>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
