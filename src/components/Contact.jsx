import React from 'react';
import { useTripBuilder } from '../context/TripBuilderContext';
import LiquidGlassButton from './LiquidGlassButton';
import { Phone, Mail } from 'lucide-react';

export default function Contact() {
  const { openDrawer } = useTripBuilder();

  return (
    <section className="contact-section" id="contact">
      <div
        className="contact-bg"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1713639160585-fa2ea361e01e?auto=format&fit=crop&w=2000&q=80')` }}
      ></div>
      <div className="contact-overlay"></div>
      <div className="container contact-content">
        <p className="section-label contact-label">START HERE</p>
        <h2 className="contact-headline">Ready to plan<br />your journey?</h2>
        <p className="contact-body">Tell us your dates, interests and group size. We'll respond within four hours.</p>
        <div className="contact-actions">
          <LiquidGlassButton
            className="btn-whatsapp"
            onClick={() => openDrawer()}
          >
            Build Your Trip &rarr;
          </LiquidGlassButton>
          
          <div className="contact-direct-info" style={{ marginTop: '16px', display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:leikankiok@gmail.com" className="email-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={16} /> leikankiok@gmail.com
            </a>
            <a href="https://wa.me/254718396228" target="_blank" rel="noopener noreferrer" className="email-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} /> +254 718 396 228
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
