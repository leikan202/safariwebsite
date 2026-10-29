import React, { useEffect, useRef, useState } from 'react';
import { Sun, CloudRain, Info } from 'lucide-react';
import imgWildebeest from '../../assets/images/ahmed-galal-8fH4JwxbAyw-unsplash.webp';

export default function BestTimeToTravel() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '100px 0px 50px 0px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section 
      ref={sectionRef}
      className="cruiser-fade-section" 
      id="best-time" 
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      {/* Left Panoramic Photo with feathered gradient mask fading to ivory */}
      <div className={`cruiser-fade-bg-wrapper reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
        <img
          src={imgWildebeest}
          alt="Wildebeest migration crossing a river in Kenya during peak season"
          className="cruiser-fade-bg-img"
          loading="lazy"
          decoding="async"
          width="721"
          height="432"
        />
        <div className="cruiser-fade-mask" />
      </div>

      {/* Right Narrative Content */}
      <div className="container cruiser-fade-container">
        <div className={`cruiser-fade-content reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <p className="cruiser-fade-kicker">TRAVEL SEASONS</p>
          <h2 className="cruiser-fade-title">When is the Best Time to Go?</h2>
          <p className="cruiser-fade-lead">
            Kenya offers incredible wildlife year-round. Choose your timing based on migration river crossings, predator action, or emerald green landscapes.
          </p>

          <div className="cruiser-fade-features">
            <div className="cruiser-fade-feature-item">
              <div className="cruiser-fade-feature-icon">
                <Sun size={18} color="var(--color-secondary)" />
              </div>
              <div className="cruiser-fade-feature-text">
                <h3>Peak Season (July &mdash; October)</h3>
                <p>
                  Great Migration river crossings, concentrated wildlife at waterholes, and prime predator action.
                </p>
              </div>
            </div>

            <div className="cruiser-fade-feature-item">
              <div className="cruiser-fade-feature-icon">
                <CloudRain size={18} color="var(--color-secondary)" />
              </div>
              <div className="cruiser-fade-feature-text">
                <h3>Green Season (November &mdash; May)</h3>
                <p>
                  Emerald savannah landscapes, newborn calving season, vibrant birding, and quieter reserves.
                </p>
              </div>
            </div>

            <div className="cruiser-fade-feature-item">
              <div className="cruiser-fade-feature-icon">
                <Info size={18} color="var(--color-secondary)" />
              </div>
              <div className="cruiser-fade-feature-text">
                <h3>Insider Tip: Jan &mdash; March</h3>
                <p>
                  Warm, dry weather with exceptional big cat sightings and far fewer tourist vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
