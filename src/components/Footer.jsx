import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-veil-dark border-t border-veil-gold/20 text-center relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-sm bg-veil-stone border border-veil-gold/40 flex items-center justify-center transform rotate-45 shadow-gold">
            <span className="w-1.5 h-1.5 bg-veil-gold" />
          </div>
          <span className="font-cinzel text-lg font-bold tracking-widest text-veil-text">
            THE VEIL PROTOCOL
          </span>
        </div>

        {/* Small Ornament */}
        <div className="flex items-center gap-4 w-48 opacity-40">
          <div className="h-px flex-1 bg-veil-gold" />
          <div className="w-1.5 h-1.5 rotate-45 bg-veil-gold" />
          <div className="h-px flex-1 bg-veil-gold" />
        </div>

        {/* Links / Copyright */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-sans text-veil-muted">
          <span>&copy; {new Date().getFullYear()} The Veil Protocol. All rights reserved.</span>
          <span>•</span>
          <span>Educational & Historical Documentary Series</span>
          <span>•</span>
          <a
            href="https://santuzmedia.gumroad.com/l/TheVeilProtocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-veil-gold hover:underline"
          >
            Gumroad Checkout
          </a>
        </div>

        <p className="text-[10px] font-sans text-veil-muted/60 max-w-md">
          Designed for historical inquiry, documentary film enthusiasts, and independent researchers.
        </p>

      </div>
    </footer>
  );
}
