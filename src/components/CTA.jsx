import React from 'react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function CTA() {
  return (
    <section className="py-24 sm:py-32 bg-veil-black border-t border-veil-gold/20 relative overflow-hidden text-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson-glow opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle ornament */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-veil-gold/40" />
            <span className="w-2 h-2 rounded-full bg-veil-gold shadow-gold" />
            <span className="h-px w-12 bg-veil-gold/40" />
          </div>

          <p className="font-cinzel text-base sm:text-xl text-veil-gold italic tracking-wide mb-6">
            "Questions remain for centuries. The manuscripts still exist. The mysteries await your investigation."
          </p>

          <h2 className="font-cinzel text-3xl sm:text-6xl font-black text-veil-text uppercase tracking-widest mb-8 leading-tight drop-shadow-xl">
            Step Into <span className="text-transparent bg-clip-text bg-gold-gradient">The Veil Protocol</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-veil-muted max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Begin your journey into humanity's forbidden history today. Immediate digital access to all 13 documentary investigations.
          </p>

          {/* Final Large CTA */}
          <CTAButton
            text="Unveil The Protocol Now"
            size="lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
