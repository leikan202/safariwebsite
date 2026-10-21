import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MessageSquare, X } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';

export default function MobileOverlay({ isOpen, onClose }) {
  const { openDrawer } = useTripBuilder();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLinkClick = (hash) => {
    onClose();
    if (location.pathname !== '/') {
      navigate(`/${hash || ''}`);
      setTimeout(() => {
        if (hash && hash !== '#') {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      if (!hash || hash === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
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
        <div className="overlay-header">
          <Link
            to="/"
            className="overlay-logo"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('');
            }}
          >
            <img
              src="/enkop-logo-transparent.png"
              alt="Enkop Safaris"
              className="overlay-logo-img"
            />
          </Link>
          <button className="nav-close" onClick={onClose} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="overlay-nav">
          <a href="/" className="overlay-link" onClick={(e) => { e.preventDefault(); handleLinkClick(''); }}>Home</a>
          <Link to="/itineraries" className="overlay-link" onClick={onClose}>Safaris</Link>
          <a href="/#destinations" className="overlay-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#destinations'); }}>Destinations</a>
          <Link to="/4x4-landcruisers" className="overlay-link" onClick={onClose}>4x4 Fleet</Link>
          <a href="/#our-story" className="overlay-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#our-story'); }}>Our Story</a>
          <a href="/#why-us" className="overlay-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#why-us'); }}>Why Us</a>
          <a href="/#contact" className="overlay-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}>Contact</a>
          <Link to="/faq" className="overlay-link" onClick={onClose}>FAQ</Link>
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
