import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Discoveries() {
  const discoveryItems = [
    "Forgotten Biblical Traditions & Early Textual Variants",
    "Lost Codices, Dead Sea Manuscripts & Apocryphal Writings",
    "Archaeological Anomalies & Megalithic Site Connections",
    "Lost Ancient Civilizations & Pre-Diluvian Timelines",
    "Prophetic Cycles, Empire Transitions & Eschatological Code",
    "The Synthesis Between Myth, Verified History & Ancient Scripture",
    "13 High-Definition Cinematic Documentary Investigations",
    "Direct Access to Translation Sources & Manuscript References"
  ];

  return (
    <section id="discoveries" className="py-24 bg-veil-dark border-t border-veil-gold/20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-veil-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-cinzel text-xs text-veil-gold tracking-[0.3em] uppercase block mb-3">
            Core Curriculum Highlights
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-veil-text uppercase tracking-wider mb-4">
            What You Will Discover
          </h2>
          <p className="font-sans text-sm sm:text-base text-veil-muted max-w-2xl mx-auto font-light">
            A comprehensive breakdown of the insights, translations, and archaeological evidence presented throughout the collection.
          </p>
        </motion.div>

        {/* Discoveries Checklist Grid */}
        <div className="bg-veil-black p-8 sm:p-12 rounded-xl border border-veil-gold/30 shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-veil-gold pointer-events-none">
            <Sparkles className="w-48 h-48" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {discoveryItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-lg bg-veil-dark/60 border border-veil-gold/10 hover:border-veil-gold/30 transition-colors"
              >
                <div className="mt-1 flex-shrink-0 text-veil-gold">
                  <CheckCircle2 className="w-5 h-5 shadow-gold" />
                </div>
                <span className="font-sans text-sm sm:text-base text-veil-text font-medium leading-relaxed">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Guarantee / Value Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-veil-stone border border-veil-gold/30 text-veil-gold text-xs font-cinzel tracking-wider uppercase mb-6">
            <ShieldCheck className="w-4 h-4" />
            Instant Digital Access • No Recurring Subscriptions
          </div>

          <CTAButton text="Claim Premium Access Now" size="lg" />
        </motion.div>

      </div>
    </section>
  );
}
