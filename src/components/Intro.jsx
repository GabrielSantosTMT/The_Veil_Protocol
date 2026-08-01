import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Compass, Scroll } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Intro() {
  return (
    <section id="intro" className="relative py-24 sm:py-32 bg-veil-black border-t border-veil-gold/20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson-glow opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-cinzel text-xs sm:text-sm text-veil-gold tracking-[0.3em] uppercase block mb-3">
            The Historical Inquiry
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-veil-text tracking-wider uppercase mb-6 leading-tight">
            Behind the Veil of Civilizations
          </h2>
          <div className="gold-divider max-w-xs mx-auto">
            <span className="gold-divider-diamond" />
          </div>
        </motion.div>

        {/* Narrative Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 font-sans text-base sm:text-lg text-veil-muted leading-relaxed max-w-3xl mx-auto text-justify sm:text-center font-light"
        >
          <p className="text-xl sm:text-2xl text-veil-text font-cinzel italic text-center font-normal leading-normal">
            "What if the history of humanity is far deeper, stranger, and more complex than what you were taught?"
          </p>
          
          <p>
            For millennia, sacred texts, royal chronicles, and ancient tablets recorded events that modern consensus history often glosses over or dismisses entirely. From suppressed canonical writings and forgotten priesthoods to anomalous megalithic structures scattered across continents, an extraordinary paper trail remains buried in archives and museum vaults.
          </p>

          <p>
            The mainstream narrative presents a linear, sanitized version of human emergence. Yet across every ancient culture—from the fertile crescent to lost oceanic empires—we find persistent accounts of pre-diluvian civilizations, celestial conflicts, fallen watchers, and sophisticated knowledge that vanished overnight.
          </p>

          <p className="text-veil-text font-medium">
            <strong className="text-veil-gold font-cinzel font-semibold">The Veil Protocol</strong> is not a sermon, nor is it a speculative conspiracy theory. It is a high-definition, 13-part documentary investigation examining ancient manuscripts, archaeological debates, and suppressed texts through a rigorous, journalistic, and cinematic lens.
          </p>
        </motion.div>

        {/* 3 Pillar Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-lg bg-veil-dark/80 border border-veil-gold/20 shadow-xl hover:border-veil-gold/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-md bg-veil-stone border border-veil-gold/30 flex items-center justify-center text-veil-gold mb-4 group-hover:scale-110 transition-transform">
              <Scroll className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-veil-text uppercase tracking-wider mb-2">
              Suppressed Codices
            </h3>
            <p className="text-xs sm:text-sm text-veil-muted font-sans leading-relaxed">
              Deciphering forgotten apocryphal manuscripts, the Dead Sea Scrolls, and texts omitted from traditional religious canons.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-lg bg-veil-dark/80 border border-veil-gold/20 shadow-xl hover:border-veil-gold/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-md bg-veil-stone border border-veil-gold/30 flex items-center justify-center text-veil-gold mb-4 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-veil-text uppercase tracking-wider mb-2">
              Anomalous Archaeology
            </h3>
            <p className="text-xs sm:text-sm text-veil-muted font-sans leading-relaxed">
              Investigating pre-diluvian megaliths, cataclysmic markers, and lost urban networks matching ancient scriptural lore.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-lg bg-veil-dark/80 border border-veil-gold/20 shadow-xl hover:border-veil-gold/50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-md bg-veil-stone border border-veil-gold/30 flex items-center justify-center text-veil-gold mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-cinzel text-lg font-bold text-veil-text uppercase tracking-wider mb-2">
              Biblical Context
            </h3>
            <p className="text-xs sm:text-sm text-veil-muted font-sans leading-relaxed">
              Revisiting ancient Hebrew, Greek, and Ge'ez sources in their original linguistic and historical environment.
            </p>
          </motion.div>
        </div>

        {/* Section Action */}
        <div className="mt-16 text-center">
          <CTAButton text="Explore The 13 Investigations" size="md" />
        </div>

      </div>
    </section>
  );
}
