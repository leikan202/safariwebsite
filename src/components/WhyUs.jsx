import React from 'react';
import { ShieldCheck, Award, Compass } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="why-us-section" id="why-us">
      <div className="container why-us-inner">
        <div className="why-us-content">
          <p className="section-label">THE PREMIUM EXPERIENCE</p>
          <h2 className="split-headline">Why travel with us?</h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <ShieldCheck size={24} color="var(--color-accent)" />
              </div>
              <div className="feature-text">
                <h4>Direct Booking</h4>
                <p>No middlemen or agency markups. You deal directly with local ground handlers.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Award size={24} color="var(--color-accent)" />
              </div>
              <div className="feature-text">
                <h4>Licensed Local Guides</h4>
                <p>Our guides are KPSGA certified experts born and raised in Kenya.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Compass size={24} color="var(--color-accent)" />
              </div>
              <div className="feature-text">
                <h4>Bespoke Itineraries</h4>
                <p>Every journey is crafted from scratch based on your specific interests and style.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-us-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Safari_in_Kenia_am_Mara_Timbo_Camp%2C_Masai_Mara.JPG"
            loading="lazy"
            alt="Luxury Safari Tent"
          />
        </div>
      </div>
    </section>
  );
}
