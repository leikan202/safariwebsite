import React from 'react';
import { MessageSquare, X } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';

export default function MobileOverlay({ isOpen, onClose }) {
  const { openDrawer } = useTripBuilder();

  if (!isOpen) return null;

  const handleLinkClick = (hash) => {
    onClose();
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePlanClick = () => {
    onClose();
    openDrawer();
  };

  return (
    <div className={`nav-overlay ${isOpen ? 'active' : ''}`}>
      <div className="nav-overlay-inner">
        <button className="nav-close" onClick={onClose} aria-label="Close menu">
          <X size={32} />
        </button>

        <nav className="overlay-nav">
          <a href="#destinations" className="overlay-link" onClick={() => handleLinkClick('#destinations')}>Safaris</a>
          <a href="#services" className="overlay-link" onClick={() => handleLinkClick('#services')}>Destinations</a>
          <a href="#why-us" className="overlay-link" onClick={() => handleLinkClick('#why-us')}>Why Us</a>
          <a href="#social" className="overlay-link" onClick={() => handleLinkClick('#social')}>On Safari Now</a>
          <a href="#faq" className="overlay-link" onClick={() => handleLinkClick('#faq')}>FAQ</a>
        </nav>

        <div className="overlay-footer">
          <p className="overlay-contact-label">GET IN TOUCH</p>
          <p className="overlay-phone">+254 718 396 228</p>
          <button className="overlay-wa-btn" onClick={handlePlanClick}>
            <MessageSquare size={18} />
            Plan Safari on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
