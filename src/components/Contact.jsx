import React, { useState } from 'react';
import { Mail, Copy, Check, Download, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sonamary246@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Dispatching your note...' });

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xdeabvwy', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus({
          state: 'success',
          message: 'Thank you! Your note has been delivered directly to Sona Mary Jose.',
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Could not send. Please write directly to sonamary246@gmail.com.',
      });
    }
  };

  return (
    <section id="contact" className="py-28 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Ambient Blur */}
      <div className="absolute -top-10 right-0 w-96 h-96 bg-[#FDF2F5] rounded-full blur-3xl opacity-70 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FAECE4] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="font-script text-3xl text-blush-rose">Connect & Collaborate</span>
        <h2 className="font-serif text-3xl sm:text-5xl text-garden-charcoal font-semibold tracking-tight mt-1">
          Let's Cultivate Something Extraordinary
        </h2>
        <p className="text-sm sm:text-base text-garden-charcoal/70 mt-3 font-light leading-relaxed">
          Whether discussing Embedded AI architectures, IoT sensor deployments, or ergonomic UI/UX design, please drop a note below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Info Card (5 cols) */}
        <div className="lg:col-span-5 double-bezel">
          <div className="double-bezel-inner p-6 sm:p-8 space-y-6">
            
            <div>
              <span className="font-mono text-xs uppercase text-blush-rose tracking-wider font-semibold">Direct Channels</span>
              <h3 className="font-serif text-2xl font-semibold text-garden-charcoal mt-1">Sona Mary Jose</h3>
              <p className="text-xs text-garden-charcoal/70 font-light mt-1">
                B.Tech in Electronics & Communication Engineering • St. Joseph's College of Engineering & Technology, Palai.
              </p>
            </div>

            {/* Email Pill */}
            <div className="p-4 rounded-2xl bg-rose-mist border border-soft-petal flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blush-rose font-serif text-lg font-bold shadow-sm">
                  <Mail className="w-5 h-5 text-blush-rose" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-garden-charcoal/50">Primary Email</div>
                  <a href="mailto:sonamary246@gmail.com" className="text-sm sm:text-base font-medium text-garden-charcoal group-hover:text-blush-rose transition-colors">
                    sonamary246@gmail.com
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy email address"
                className="px-3 py-1.5 rounded-full bg-white hover:bg-petal-cream text-xs font-mono text-garden-charcoal border border-soft-petal transition-all flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-meadow-green" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location & Availability */}
            <div className="space-y-3 pt-2 text-xs font-mono">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-petal-cream border border-soft-petal">
                <span className="w-2.5 h-2.5 rounded-full bg-meadow-green animate-pulse" />
                <span className="text-garden-charcoal/80">Available for Roles (2026)</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-petal-cream border border-soft-petal">
                <span className="text-blush-rose">📍</span>
                <span className="text-garden-charcoal/80">Edathua, Alappuzha, Kerala, India</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-petal-cream border border-soft-petal">
                <span className="text-blush-rose">🌐</span>
                <span className="text-garden-charcoal/80">English, Malayalam, Hindi</span>
              </div>
            </div>

            {/* Resume Download Button */}
            <div className="pt-2">
              <a
                href="/Sona_Resume (2).pdf"
                download="Sona_Mary_Jose_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-blush-rose hover:bg-[#853E54] active:scale-95 text-white font-medium text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-md"
              >
                <span>Download Official Resume (PDF)</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

        {/* Right Column: Interactive Formspree Contact Form (7 cols) */}
        <div className="lg:col-span-7 double-bezel">
          <div className="double-bezel-inner p-6 sm:p-8">
            
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-blush-rose tracking-wider font-semibold">Send a Note</span>
                <h3 className="font-serif text-2xl font-semibold text-garden-charcoal">Get in Touch</h3>
              </div>
              <span className="font-script text-xl text-dusty-sage">Direct Formspree Dispatch</span>
            </div>

            {/* Formspree Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-garden-charcoal/70 mb-1.5 font-medium">Your Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="e.g. Maya Lin"
                    className="w-full px-4 py-3 rounded-xl bg-rose-mist/60 border border-soft-petal text-garden-charcoal placeholder-garden-charcoal/40 text-sm focus:outline-none focus:ring-2 focus:ring-blush-rose/40 focus:bg-white transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-garden-charcoal/70 mb-1.5 font-medium">Email Address *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="name@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-rose-mist/60 border border-soft-petal text-garden-charcoal placeholder-garden-charcoal/40 text-sm focus:outline-none focus:ring-2 focus:ring-blush-rose/40 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Subject / Inquiry Type */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase text-garden-charcoal/70 mb-1.5 font-medium">Topic / Domain</label>
                <select
                  id="contact-subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-xl bg-rose-mist/60 border border-soft-petal text-garden-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-blush-rose/40 focus:bg-white transition-all"
                >
                  <option value="Embedded AI & IoT">Embedded AI &amp; IoT Systems</option>
                  <option value="UI/UX & Design Systems">UI/UX &amp; Design Architecture</option>
                  <option value="Hardware / PCB Prototyping">Hardware / PCB Prototyping</option>
                  <option value="Hackathons & Collaboration">Hackathons &amp; Collaboration</option>
                  <option value="General Conversation">General Conversation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-garden-charcoal/70 mb-1.5 font-medium">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your ideas, opportunities, or notes here..."
                  className="w-full px-4 py-3 rounded-xl bg-rose-mist/60 border border-soft-petal text-garden-charcoal placeholder-garden-charcoal/40 text-sm focus:outline-none focus:ring-2 focus:ring-blush-rose/40 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button & Feedback Area */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-garden-charcoal hover:bg-blush-rose active:scale-95 text-white font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-300 shadow-md disabled:opacity-50"
                >
                  <span>{status.state === 'loading' ? 'Dispatching...' : 'Send Botanical Note'}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <span className="text-xs font-mono text-garden-charcoal/50">Formspree: Verified</span>
              </div>

              {/* Status Alert Message Container */}
              {status.state === 'success' && (
                <div className="p-4 rounded-xl text-xs font-mono bg-meadow-green/10 text-meadow-green border border-meadow-green/30 block">
                  {status.message}
                </div>
              )}
              {status.state === 'error' && (
                <div className="p-4 rounded-xl text-xs font-mono bg-rose-100 text-rose-700 border border-rose-300 block">
                  {status.message}
                </div>
              )}

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
