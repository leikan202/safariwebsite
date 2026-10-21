import React from 'react';
import LiquidGlassButton from './LiquidGlassButton';
import { useTripBuilder } from '../context/TripBuilderContext';

export default function Intro() {
  const { openDrawer } = useTripBuilder();

  return (
    <section className="intro-section">
      <div className="container intro-inner">
        <p className="section-label">Enkop Safaris</p>
        <h2 className="intro-headline">Expert-led journeys across<br />Kenya's finest wilderness.</h2>
        <p className="intro-body">
          Bespoke expeditions guided by licensed Kenyan naturalists with generational knowledge of the land.
        </p>
        <LiquidGlassButton onClick={() => openDrawer()} style={{ color: 'var(--color-black)' }}>
          Plan your journey &rarr;
        </LiquidGlassButton>
      </div>
    </section>
  );
}
