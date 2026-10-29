import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Users, Zap, ArrowRight } from 'lucide-react';
import deniceAlexImg from '../../assets/images/denice-alex-rlr0oaz2nZQ-unsplash.webp';

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
      { threshold: 0.05, rootMargin: '100px 0px 50px 0px' }
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
          width="721"
          height="480"
        />
        <div className="cruiser-fade-mask" />
      </div>

      {/* Right Narrative Content */}
      <div className="container cruiser-fade-container">
        <div className={`cruiser-fade-content reveal-up ${isVisible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <p className="cruiser-fade-kicker">OUR SAFARI FLEET</p>
          <h2 className="cruiser-fade-title">Custom 4x4 Safari Land Cruisers</h2>
          <p className="cruiser-fade-lead">
            Custom-engineered for Kenya's savannah. Every Enkop safari is conducted exclusively in private 4WD Toyota Land Cruisers designed for unhurried wildlife viewing and photography.
          </p>

          <div className="cruiser-fade-features">
            <div className="cruiser-fade-feature-item">
              <div className="cruiser-fade-feature-icon">
                <Camera size={18} color="var(--color-secondary)" />
              </div>
              <div className="cruiser-fade-feature-text">
                <h3>360&deg; Pop-Up Photo Roof</h3>
                <p>
                  Full standing height with steady rests for telephoto lenses and panoramic viewing.
                </p>
              </div>
            </div>

            <div className="cruiser-fade-feature-item">
              <div className="cruiser-fade-feature-icon">
                <Users size={18} color="var(--color-secondary)" />
              </div>
              <div className="cruiser-fade-feature-text">
                <h3>Guaranteed Window Seats (Max 6)</h3>
                <p>
                  Never middle seats. Dedicated sliding windows and generous legroom for every guest.
                </p>
              </div>
            </div>

            <div className="cruiser-fade-feature-item">
              <div className="cruiser-fade-feature-icon">
                <Zap size={18} color="var(--color-secondary)" />
              </div>
              <div className="cruiser-fade-feature-text">
                <h3>220V Inverter &amp; Cool Box</h3>
                <p>
                  Charge camera batteries and phones on game drives, with chilled spring water always ready.
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
