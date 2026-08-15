import React, { useState } from 'react';
import { MessageSquare, Phone, Mail } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';
import LegalModal from './LegalModal';

export default function Footer() {
  const { openDrawer } = useTripBuilder();
  const [legalModalType, setLegalModalType] = useState(null);

  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <p className="footer-logo">SAFARI DIRECT KENYA</p>
            <p className="footer-tagline">Licensed driver-guides. Direct bookings.</p>
            <div style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--color-grey)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <a href="mailto:leikankiok@gmail.com" style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={14} /> leikankiok@gmail.com
              </a>
              <a href="https://wa.me/254718396228" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={14} /> +254 718 396 228
              </a>
            </div>
          </div>
          <nav className="footer-nav">
            <a href="#services">Services</a>
            <a href="#destinations">Destinations</a>
            <a href="#why-us">Why Us</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer-cta">
            <button className="footer-wa-btn" onClick={() => openDrawer()}>
              <MessageSquare size={16} />
              WhatsApp Us
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">&copy; {new Date().getFullYear()} Safari Direct Kenya. All rights reserved.</p>
          <div className="footer-legal">
            <button type="button" className="legal-link-btn" onClick={() => setLegalModalType('privacy')}>Privacy Policy</button>
            <span>&middot;</span>
            <button type="button" className="legal-link-btn" onClick={() => setLegalModalType('terms')}>Booking Terms</button>
          </div>
        </div>
      </footer>

      {legalModalType && (
        <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
      )}
    </>
  );
}
