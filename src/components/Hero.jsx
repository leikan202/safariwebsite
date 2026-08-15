import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <img
        className="hero-video"
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2560&q=80"
        alt="Kenyan Safari Sunrise"
      />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">Kenya &middot; East Africa</p>
        <h1 className="hero-title">Bespoke<br />Kenyan Safaris</h1>
        <a href="#destinations" className="hero-scroll-cta">
          <span>Explore</span>
          <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}
