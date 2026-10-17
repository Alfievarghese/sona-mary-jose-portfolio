import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#journey' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-3xl rounded-full transition-all duration-300 flex items-center justify-between gap-4 sm:gap-6 border ${
            scrolled
              ? 'bg-[#FFF9F6]/95 backdrop-blur-2xl py-2 px-4 sm:px-6 border-soft-petal/90 shadow-[0_16px_36px_-10px_rgba(158,74,100,0.18)]'
              : 'bg-white/90 backdrop-blur-xl py-2.5 px-4 sm:px-6 border-soft-petal/70 shadow-[0_10px_30px_-10px_rgba(158,74,100,0.1)]'
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAECE4] border border-soft-petal flex items-center justify-center text-blush-rose font-serif italic text-sm sm:text-base font-bold group-hover:scale-105 transition-transform shadow-xs">
              S
            </span>
            <span className="font-serif text-sm sm:text-base md:text-lg font-semibold tracking-tight text-garden-charcoal group-hover:text-blush-rose transition-colors whitespace-nowrap">
              Sona Mary Jose
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-garden-charcoal/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blush-rose transition-colors relative py-1 group tracking-tight"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blush-rose rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <a
              href="/Sona_Resume (2).pdf"
              download="Sona_Mary_Jose_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 bg-blush-rose hover:bg-[#853E54] active:scale-95 text-white text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-blush-rose/25"
            >
              <span>Resume</span>
              <Download className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-rose-mist border border-soft-petal flex items-center justify-center text-garden-charcoal focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-blush-rose" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-garden-charcoal/40 backdrop-blur-sm flex items-start justify-center pt-24 px-6 animate-fadeIn">
          <div className="w-full max-w-sm rounded-3xl bg-[#FFF9F6] border border-soft-petal p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-soft-petal/60">
              <span className="font-serif italic text-lg font-semibold text-garden-charcoal">Navigation</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-7 h-7 rounded-full bg-rose-mist flex items-center justify-center text-garden-charcoal"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex flex-col space-y-3 font-medium text-base text-garden-charcoal">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-rose-mist hover:text-blush-rose transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
              <a
                href="/Sona_Resume (2).pdf"
                download="Sona_Mary_Jose_Resume.pdf"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-blush-rose text-white text-sm font-medium py-3 rounded-full shadow-md"
              >
                <span>Download Resume (PDF)</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
