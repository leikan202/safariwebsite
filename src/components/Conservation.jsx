import React from 'react';
import { useTripBuilder } from '../context/TripBuilderContext';
import LiquidGlassButton from './LiquidGlassButton';

export default function Conservation() {
  const { openDrawer } = useTripBuilder();

  return (
    <section className="conservation-section">
      <div
        className="conservation-bg"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=2000&q=80')` }}
      ></div>
      <div className="conservation-overlay"></div>
      <div className="container conservation-content">
        <p className="section-label" style={{ color: 'rgba(255,255,255,0.8)' }}>RESPONSIBLE TOURISM</p>
        <h2 className="hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: '#fff' }}>Protecting what we love.</h2>
        <p className="conservation-body">
          We are deeply committed to the conservation of Kenya's wildlife and the empowerment of local communities. A percentage of every safari booked goes directly into anti-poaching initiatives and community education.
        </p>
        <LiquidGlassButton
          className="btn-gold"
          onClick={() => openDrawer()}
        >
          Join Our Efforts &rarr;
        </LiquidGlassButton>
      </div>
    </section>
  );
}
