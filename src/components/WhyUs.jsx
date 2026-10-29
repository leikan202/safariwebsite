import React from 'react';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';
import giraffesImg from '../../assets/images/reggie-b-aUKfubmaU4o-unsplash.webp';

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
                <h3>Born of This Land</h3>
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
                <h3>Thoughtfully Tailored</h3>
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
                <h3>Good by Nature</h3>
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
            width="600"
            height="400"
            alt="Giraffes grazing peacefully on the Kenyan savannah"
          />
        </div>
      </div>
    </section>
  );
}
