import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-veil-black/90 backdrop-blur-md border-b border-veil-gold/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-veil-black/90 via-veil-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-sm bg-veil-stone border border-veil-gold/40 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500 shadow-gold">
            <span className="w-2.5 h-2.5 bg-veil-gold transform rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-lg sm:text-xl font-bold tracking-widest text-veil-text group-hover:text-veil-gold transition-colors">
              THE VEIL PROTOCOL
            </span>
            <span className="text-[9px] font-sans tracking-widest text-veil-gold/70 uppercase -mt-1">
              Cinematic Investigation
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-cinzel tracking-widest text-veil-muted uppercase">
          <a href="#intro" className="hover:text-veil-gold transition-colors">
            Mystery
          </a>
          <a href="#questions" className="hover:text-veil-gold transition-colors">
            Revelations
          </a>
          <a href="#chapters" className="hover:text-veil-gold transition-colors">
            The 13 Chapters
          </a>
          <a href="#discoveries" className="hover:text-veil-gold transition-colors">
            Discoveries
          </a>
          <a href="#access" className="hover:text-veil-gold transition-colors">
            Access
          </a>
        </nav>

        {/* Compact CTA */}
        <div className="flex items-center gap-4">
          <CTAButton
            text="Get Access"
            size="sm"
            showBadge={false}
            className="hidden sm:inline-flex"
          />
        </div>
      </div>
    </header>
  );
}
