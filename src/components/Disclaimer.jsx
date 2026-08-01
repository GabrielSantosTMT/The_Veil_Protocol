import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

export default function Disclaimer() {
  return (
    <section className="py-16 bg-veil-stone/60 border-t border-veil-gold/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-10 rounded-xl bg-veil-dark border border-veil-gold/40 shadow-2xl relative"
        >
          <div className="flex items-center gap-3 mb-4 text-veil-gold font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase">
            <ShieldAlert className="w-5 h-5 text-veil-gold" />
            <span>Important Research Notice & Disclaimer</span>
          </div>

          <h3 className="font-cinzel text-xl font-bold text-veil-text uppercase tracking-wide mb-4">
            Educational & Investigative Purpose
          </h3>

          <div className="space-y-4 font-sans text-xs sm:text-sm text-veil-muted leading-relaxed font-light text-justify">
            <p>
              <strong className="text-veil-text font-medium">The Veil Protocol</strong> is an educational and documentary exploration focused on ancient history, biblical literature, archaeological discoveries, apocryphal manuscripts, and comparative religious traditions.
            </p>
            <p>
              The content presented throughout these 13 chapters incorporates historical codices, translation studies, and academic debates among historians, archaeologists, and theologians. The objective is not to impose dogmatic doctrines or replace personal faith, but rather to stimulate intellectual curiosity, rigorous critical thinking, and independent historical investigation.
            </p>
            <p className="text-veil-muted/80 italic">
              All references to ancient texts, dead sea scrolls, and historical chronicles are provided for research and educational purposes. Viewers are encouraged to examine primary sources independently.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
