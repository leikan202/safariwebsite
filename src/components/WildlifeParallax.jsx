import React, { useEffect, useRef } from 'react';
import LiquidGlassButton from './LiquidGlassButton';
import { useTripBuilder } from '../context/TripBuilderContext';
import imgParallax from '../../assets/images/sneha-cecil-DEBrMzu-D8I-unsplash.jpg';

export default function WildlifeParallax() {
  const { openDrawer } = useTripBuilder();
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.parentElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const yPos = scrollPercent * 15;
        imgRef.current.style.transform = `translate3d(0, ${yPos}%, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="split-section split-reverse" id="wildlife">
      <div className="split-image parallax-container">
        <img
          ref={imgRef}
          src={imgParallax}
          loading="lazy"
          className="parallax-img"
          alt="Leopard in the wild, Kenya"
        />
      </div>
      <div className="split-content">
        <p className="section-label">THE WILD</p>
        <h2 className="split-headline">Kenya's wildlife,<br />seen properly.</h2>
        <p className="split-body">
          From the leopards of the Mara to Amboseli's elephant herds beneath Kilimanjaro, your guide's knowledge turns every drive into something unforgettable.
        </p>
        <div style={{ marginTop: '32px' }}>
          <LiquidGlassButton onClick={() => openDrawer()} style={{ color: 'var(--color-black)' }}>
            Plan your dates &rarr;
          </LiquidGlassButton>
        </div>
      </div>
    </section>
  );
}
