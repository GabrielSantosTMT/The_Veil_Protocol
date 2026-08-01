import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Questions from './components/Questions';
import Chapters from './components/Chapters';
import Discoveries from './components/Discoveries';
import Access from './components/Access';
import Disclaimer from './components/Disclaimer';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-veil-black text-veil-text selection:bg-veil-gold selection:text-veil-black relative">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Questions />
        <Chapters />
        <Discoveries />
        <Access />
        <Disclaimer />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
