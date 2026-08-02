import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Eye, ShieldAlert } from 'lucide-react';

export default function Questions() {
  const questionsList = [
    {
      icon: HelpCircle,
      title: "What Information Was Preserved?",
      description: "Which accounts survived thousands of years, imperial burnings of libraries, and institutional editing, while others vanished into oblivion?",
    },
    {
      icon: Eye,
      title: "Which Interpretations Were Forgotten?",
      description: "Why did early commentators read biblical events with radically different cosmology, angelic hierarchies, and pre-diluvian timelines than modern institutions?",
    },
    {
      icon: ShieldAlert,
      title: "What Mysteries Remain Entombed?",
      description: "What do modern satellite imagery, sub-surface radar, and recently translated cuneiform tablets tell us about humanity's lost epoch?",
    },
  ];

  return (
    <section id="questions" className="py-24 bg-veil-dark border-t border-veil-gold/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-cinzel text-xs text-veil-gold tracking-[0.3em] uppercase block mb-3">
            Critical Inquiry
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-veil-text uppercase tracking-wider mb-4">
            What Do Ancient Texts Truly Reveal?
          </h2>
          <p className="font-sans text-sm sm:text-base text-veil-muted max-w-2xl mx-auto font-light">
            An invitation to examine primary evidence, historical codices, and archaeological records beyond institutional dogma.
          </p>
        </motion.div>

        {/* 3 Rhetorical Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {questionsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-veil-black p-8 rounded-lg border border-veil-gold/20 hover:border-veil-gold/60 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm bg-veil-stone border border-veil-gold/30 flex items-center justify-center text-veil-gold mb-6 group-hover:scale-110 transition-transform shadow-gold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-veil-text uppercase tracking-wide mb-4 group-hover:text-veil-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-veil-muted leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-veil-gold/10 flex items-center justify-between text-xs font-cinzel text-veil-gold/70">
                  <span>Investigation {idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-veil-gold/50" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Takeaway Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-veil-stone via-veil-dark to-veil-stone p-8 sm:p-10 rounded-lg border border-veil-gold/30 shadow-2xl text-center"
        >
          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-veil-gold uppercase tracking-wider mb-4">
            No Dogmatic Conclusions. Pure Historical Exploration.
          </h3>
          <p className="font-sans text-sm sm:text-base text-veil-muted leading-relaxed max-w-3xl mx-auto font-light">
            The Veil Protocol does not force pre-packaged answers or religious indoctrination. Instead, it presents the raw manuscripts, historical contexts, archaeological data, and comparative ancient lore—empowering you to connect the dots and draw your own evidence-based conclusions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
