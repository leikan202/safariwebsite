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
                  Kenya is not simply our workplace — it is our home. Guided by lifelong Kenyan naturalists with generational knowledge of wildlife corridors and seasonal movements, you experience the bush through the eyes of those who belong to it.
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
                  True luxury is stillness, exclusivity, and unhurried time. We curate every journey around your personal rhythm — handpicking private conservancies, boutique wilderness camps, and dawn moments that can never be replicated.
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
                  At our core is the ostrich — in Maa, <em>Esidai</em>, meaning 'good'. We partner with community-owned conservancies and local preservation initiatives, ensuring your presence leaves a lasting, positive footprint on the wild and its people.
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
