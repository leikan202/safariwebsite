import React from 'react';
import { ArrowDown } from 'lucide-react';
import heroImage from '../../assets/images/melissa-van-niekerk-IOJx2UIKBeA-unsplash.webp';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <img
        className="hero-video"
        src={heroImage}
        alt="Kenyan Safari Sunrise"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">Kenya &middot; East Africa</p>
        <h1 className="hero-title">Bespoke<br />Kenyan Safaris</h1>
      </div>

      <a href="#destinations" className="hero-scroll-cta" aria-label="Explore destinations">
        <span>Explore</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
