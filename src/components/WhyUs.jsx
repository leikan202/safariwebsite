import React from 'react';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';
import giraffesImg from '../../assets/images/reggie-b-aUKfubmaU4o-unsplash.jpg';

export default function WhyUs() {
  return (
    <section className="why-us-section" id="why-us">
      <div className="container why-us-inner">
        <div className="why-us-content reveal-slide-left">
          <p className="section-label">THE ENKOP DIFFERENCE</p>
          <h2 className="split-headline">Why journey with us?</h2>
          <div className="features-list reveal-stagger">
            <div className="feature-item">
              <div className="feature-icon">
                <Compass size={22} color="var(--color-secondary)" />
              </div>
              <div className="feature-text">
                <h4>Born of This Land</h4>
                <p>
                  Lifelong Kenyan naturalists with generational knowledge of wildlife corridors and seasonal movements.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Sparkles size={22} color="var(--color-secondary)" />
              </div>
              <div className="feature-text">
                <h4>Thoughtfully Tailored</h4>
                <p>
                  Bespoke pacing, private conservancies, and boutique wilderness camps curated around your personal rhythm.
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <ShieldCheck size={22} color="var(--color-secondary)" />
              </div>
              <div className="feature-text">
                <h4>Good by Nature</h4>
                <p>
                  Direct partnerships with community-owned conservancies ensuring your presence empowers local wildlife and people.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-us-image reveal-slide-right">
          <img
            src={giraffesImg}
            loading="lazy"
            decoding="async"
            alt="Giraffes grazing peacefully on the Kenyan savannah"
          />
        </div>
      </div>
    </section>
  );
}
