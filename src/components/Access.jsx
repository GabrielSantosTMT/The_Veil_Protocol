import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Film, Tv, RefreshCw, Lock } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Access() {
  const includesList = [
    { text: "Full Collection Access to all 13 Documentaries", icon: Film },
    { text: "13 Cinematic High-Definition Video Investigations", icon: Tv },
    { text: "Lifetime Updates & New Additional Content", icon: RefreshCw },
    { text: "Stream On-Demand on Desktop, Tablet or Mobile", icon: Tv },
    { text: "Exclusive Primary Manuscript Sources & Reference Lists", icon: Shield },
    { text: "One-time Payment — Lifetime Access, Zero Subscriptions", icon: Lock },
  ];

  return (
    <section id="access" className="py-24 sm:py-32 bg-veil-black border-t border-veil-gold/20 relative">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-glow opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-cinzel text-xs text-veil-gold tracking-[0.3em] uppercase block mb-3">
            Premium Access
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-veil-text uppercase tracking-wider mb-4">
            Everything Included in The Veil Protocol
          </h2>
          <p className="font-sans text-sm sm:text-base text-veil-muted max-w-xl mx-auto font-light">
            Instant digital access to the complete 13-part documentary collection. No hidden fees. No recurring charges.
          </p>
        </motion.div>

        {/* Feature Box Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-veil-stone via-veil-dark to-veil-stone rounded-2xl border border-veil-gold/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Top Banner Tag */}
          <div className="flex justify-center mb-8">
            <span className="px-5 py-1.5 rounded-full bg-gold-gradient text-veil-black font-cinzel text-xs font-black tracking-widest uppercase shadow-gold">
              COMPLETE 13-PART COLLECTION
            </span>
          </div>

          {/* Included Features List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {includesList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-lg bg-veil-black/80 border border-veil-gold/20"
                >
                  <div className="w-8 h-8 rounded bg-veil-stone border border-veil-gold/40 flex items-center justify-center text-veil-gold flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="font-sans text-sm sm:text-base text-veil-text font-medium leading-normal">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Price & CTA Section */}
          <div className="pt-8 border-t border-veil-gold/20 flex flex-col items-center text-center">
            <div className="mb-6">
              <span className="font-cinzel text-xs text-veil-gold tracking-widest uppercase block mb-1">
                One-Time Lifetime Investment
              </span>
              <div className="flex items-baseline justify-center gap-2">
                <span className="font-cinzel text-4xl sm:text-5xl font-black text-veil-text">
                  INSTANT ACCESS
                </span>
              </div>
              <span className="text-xs font-sans text-veil-muted tracking-wide block mt-2">
                Pay once. Watch anywhere. Yours forever.
              </span>
            </div>

            {/* Featured Large CTA Button */}
            <CTAButton
              text="Unveil The Protocol Now"
              size="lg"
              className="w-full sm:w-auto"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
