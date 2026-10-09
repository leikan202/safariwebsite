import React from 'react';
import { useTripBuilder } from '../context/TripBuilderContext';
import LiquidGlassButton from './LiquidGlassButton';
import imgConservation from '../../assets/images/ahmed-galal-GMO1Jq3Ajfo-unsplash.jpg';

export default function Conservation() {
  const { openDrawer } = useTripBuilder();

  return (
    <section className="conservation-section">
      <div
        className="conservation-bg"
        style={{ backgroundImage: `url(${imgConservation})` }}
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
