import React from 'react';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="why-us-section" id="why-us">
      <div className="container why-us-inner">
        <div className="why-us-content">
          <p className="section-label">THE ENKOP DIFFERENCE</p>
          <h2 className="split-headline">Why journey with us?</h2>
          <div className="features-list">
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
        <div className="why-us-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Safari_in_Kenia_am_Mara_Timbo_Camp%2C_Masai_Mara.JPG"
            loading="lazy"
            alt="Giraffes grazing peacefully in Kenya"
          />
        </div>
      </div>
    </section>
  );
}
