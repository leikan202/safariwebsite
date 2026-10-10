import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Users, Zap, ArrowRight } from 'lucide-react';
import deniceAlexImg from '../../assets/images/denice-alex-rlr0oaz2nZQ-unsplash.jpg';

export default function LandCruiserSection() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="cruiser-fade-section" id="cruiser-experience">
      {/* Left Panoramic Photo with feathered gradient mask fading to ivory */}
      <div className={`cruiser-fade-bg-wrapper reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
        <img
          src={deniceAlexImg}
          alt="Enkop Safaris custom 4x4 Safari Toyota Land Cruiser with open pop-up roof"
          className="cruiser-fade-bg-img"
          loading="lazy"
          decoding="async"
        />
        <div className="cruiser-fade-mask" />
      </div>

      {/* Right Narrative Content */}
      <div className="container cruiser-fade-container">
        <div className={`cruiser-fade-content reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <p className="cruiser-fade-kicker">OUR SAFARI FLEET</p>
          <h2 className="cruiser-fade-title">Custom 4x4 Safari Land Cruisers</h2>
          <p className="cruiser-fade-lead">
            In East Africa's premier wildlife reserves, your vehicle is your mobile observation base. All Enkop Safaris journeys are conducted in purpose-built 4WD Toyota Land Cruisers, customized specifically for Kenya's rugged savannah terrain to ensure unhurried wildlife viewing, telephoto photography freedom, and passenger comfort.
          </p>

          <div className="cruiser-fade-features">
            <div className="cruiser-fade-feature-item">
              <div className="cruiser-fade-feature-icon">
                <Camera size={18} color="var(--color-secondary)" />
              </div>
              <div className="cruiser-fade-feature-text">
                <h4>Pop-Up Roof for 360&deg; Viewing</h4>
                <p>
                  Elevating canvas-shaded roof hatch provides full standing room and unobstructed panoramic sightlines for tracking wildlife and steady camera lens support.
                </p>
              </div>
            </div>

            <div className="cruiser-fade-feature-item">
              <div className="cruiser-fade-feature-icon">
                <Users size={18} color="var(--color-secondary)" />
              </div>
              <div className="cruiser-fade-feature-text">
                <h4>Guaranteed Window Seating (Max 6)</h4>
                <p>
                  Strictly capped at six guests per vehicle—never middle seats. Every traveler enjoys a dedicated window seat, wide sliding glass, and personal legroom.
                </p>
              </div>
            </div>

            <div className="cruiser-fade-feature-item">
              <div className="cruiser-fade-feature-icon">
                <Zap size={18} color="var(--color-secondary)" />
              </div>
              <div className="cruiser-fade-feature-text">
                <h4>Onboard Power &amp; Cold Water</h4>
                <p>
                  Equipped with 220V inverter power sockets and USB ports for charging camera batteries on game drives, plus an insulated cool box with chilled drinking water.
                </p>
              </div>
            </div>
          </div>

          <div className="cruiser-fade-action">
            <Link to="/4x4-landcruisers" className="cruiser-fade-btn">
              <span>View Fleet Details</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
