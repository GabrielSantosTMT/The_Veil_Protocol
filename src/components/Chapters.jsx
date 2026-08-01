import React from 'react';
import { motion } from 'framer-motion';
import {
  Flame,
  BookOpen,
  Skull,
  Shield,
  Eye,
  Globe,
  Compass,
  Users,
  Layers,
  Scroll,
  Book,
  Cross,
  Clock
} from 'lucide-react';
import CTAButton from './CTAButton';

export default function Chapters() {
  const chaptersData = [
    {
      num: "01",
      icon: Flame,
      title: "The Hidden History of Adam & Eve",
      description: "Uncovering pre-Edenic traditions, ancient Gnostic and Jewish codices, and forgotten translations regarding humanity's primordial origin.",
    },
    {
      num: "02",
      icon: BookOpen,
      title: "The Apocalypse of Christ",
      description: "Examining first-century eschatological writings, suppressed prophetic texts, and the early apocalyptic worldview of original disciples.",
    },
    {
      num: "03",
      icon: Skull,
      title: "Cain & The Serpent Seed Mystery",
      description: "Investigating ancient textual variants, Targums, and rabbinic commentaries regarding the lineage of Cain and its cosmic implications.",
    },
    {
      num: "04",
      icon: Shield,
      title: "The Hidden War of Spiritual Realms",
      description: "Deciphering the celestial hierarchy, angelic rebellion codices, and the ancient territorial unseen realm across Mesopotamian lore.",
    },
    {
      num: "05",
      icon: Eye,
      title: "Ancient Demons & Forgotten Priesthoods",
      description: "A deep dive into exorcism rituals, Babylonian incantation bowls, Solomon's testament, and temple priesthood secrets.",
    },
    {
      num: "06",
      icon: Globe,
      title: "The World Before the Flood",
      description: "Comparing antediluvian king lists, Sumerian tablets, geological cataclysm markers, and pre-flood technological anomalies.",
    },
    {
      num: "07",
      icon: Compass,
      title: "Lost Civilizations & Forbidden History",
      description: "Analyzing historical records of Atlantis, Lemuria, Agartha, and Tartaria alongside scriptural references to ancient megalithic builders.",
    },
    {
      num: "08",
      icon: Users,
      title: "The Fallen & The Nephilim Giants",
      description: "Translating the Book of Enoch and Jubilees: the Watchers' transgression, hybrid lineages, and giant skeletal archaeology controversies.",
    },
    {
      num: "09",
      icon: Layers,
      title: "The Tower of Babel & Language Fragmentation",
      description: "Exploring acoustic resonance structures, ziggurat star-gates, and ancient texts recording the sudden division of human speech.",
    },
    {
      num: "10",
      icon: Scroll,
      title: "The Dead Sea Scrolls & Suppressed Knowledge",
      description: "Inside the Qumran caves: missing scrolls, Essene prophecies, and textual variations hidden from public canons for decades.",
    },
    {
      num: "11",
      icon: Book,
      title: "The Apocrypha: Forgotten Books of the Canon",
      description: "Why were books like Jasher, Esdras, and Enoch removed from standard Bibles? Analyzing the council decisions and political motives.",
    },
    {
      num: "12",
      icon: Cross,
      title: "The Exodus: Archaeological Controversies",
      description: "Challenging mainstream dates: Red Sea crossing bathymetry, Mount Sinai in Arabia, and Egyptian inscriptions mentioning Habiru slaves.",
    },
    {
      num: "13",
      icon: Clock,
      title: "Prophetic Timelines & The End of Empires",
      description: "Decryption of Daniel's 70 weeks, Nebuchadnezzar's statue timeline, metallic ages, and the mathematical convergence of ancient prophecies.",
    },
  ];

  return (
    <section id="chapters" className="py-24 sm:py-32 bg-veil-black border-t border-veil-gold/20 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-veil-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-veil-red/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-cinzel text-xs sm:text-sm text-veil-gold tracking-[0.3em] uppercase block mb-3">
            Full Documentary Curriculum
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-extrabold text-veil-text tracking-wider uppercase mb-4">
            The 13 Chapters
          </h2>
          <p className="font-sans text-sm sm:text-base text-veil-muted max-w-2xl mx-auto font-light">
            Each chapter represents a complete, cinematic documentary film equipped with manuscript citations, historical analysis, and visual evidence.
          </p>
          <div className="gold-divider max-w-xs mx-auto mt-6">
            <span className="gold-divider-diamond" />
          </div>
        </motion.div>

        {/* 13 Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chaptersData.map((chap, idx) => {
            const Icon = chap.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-veil-card p-6 sm:p-8 rounded-lg border border-veil-cardBorder hover:border-veil-gold/50 transition-all duration-300 shadow-xl group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-cinzel text-2xl font-black text-transparent bg-clip-text bg-gold-gradient tracking-widest">
                      CHAPTER {chap.num}
                    </span>
                    <div className="w-10 h-10 rounded bg-veil-stone border border-veil-gold/30 flex items-center justify-center text-veil-gold group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Chapter Title */}
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-veil-text uppercase tracking-wide mb-3 group-hover:text-veil-gold transition-colors leading-snug">
                    {chap.title}
                  </h3>

                  {/* Chapter Description */}
                  <p className="font-sans text-xs sm:text-sm text-veil-muted leading-relaxed font-light">
                    {chap.description}
                  </p>
                </div>

                {/* Card Footer Tag */}
                <div className="mt-6 pt-4 border-t border-veil-gold/10 flex items-center justify-between text-[10px] font-cinzel text-veil-gold/60 uppercase tracking-widest">
                  <span>Cinematic Film</span>
                  <span>HD 1080p</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mid-Grid Callout */}
        <div className="mt-16 text-center">
          <p className="font-cinzel text-sm text-veil-gold tracking-widest uppercase mb-6">
            All 13 Chapters Unlocked Instantly Upon Access
          </p>
          <CTAButton text="Access All 13 Chapters Now" size="lg" />
        </div>

      </div>
    </section>
  );
}
