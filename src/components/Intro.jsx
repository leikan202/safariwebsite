import React from 'react';
import LiquidGlassButton from './LiquidGlassButton';
import { useTripBuilder } from '../context/TripBuilderContext';

export default function Intro() {
  const { openDrawer } = useTripBuilder();

  return (
    <section className="intro-section">
      <div className="container intro-inner">
        <p className="section-label">SAFARI DIRECT KENYA</p>
        <h2 className="intro-headline">Expert-led journeys across<br />Kenya's finest wilderness.</h2>
        <p className="intro-body">
          Every journey is designed around you, guided by licensed Kenyan driver-guides who have spent years reading the land. Unforgettable experiences tailored to your every need.
        </p>
        <LiquidGlassButton onClick={() => openDrawer()} style={{ color: 'var(--color-black)' }}>
          Plan your journey &rarr;
        </LiquidGlassButton>
      </div>
    </section>
  );
}
