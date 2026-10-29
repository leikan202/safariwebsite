import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
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
    <div className={`nav-overlay ${isOpen ? 'active' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      <div className="nav-overlay-inner">
        {/* Header: Logo and Close Button */}
        <div className="overlay-header">
          <Link
            to="/"
            className="overlay-logo"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('');
            }}
            aria-label="Enkop Safaris Home"
          >
            <img
              src="/enkop-logo-transparent.png"
              alt="Enkop Safaris"
              className="overlay-logo-img"
              width="100"
              height="66"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <button className="nav-close" onClick={onClose} aria-label="Close menu">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Navigation Content: Links & CTA Button */}
        <div className="overlay-main-content">
          <nav className="overlay-nav">
            <a href="/" className="overlay-link" onClick={(e) => { e.preventDefault(); handleLinkClick(''); }}>Home</a>
            <a href="/#destinations" className="overlay-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#destinations'); }}>Destinations</a>
            <Link to="/itineraries" className="overlay-link" onClick={onClose}>Safaris</Link>
            <Link to="/4x4-landcruisers" className="overlay-link" onClick={onClose}>Experiences</Link>
            <a href="/#our-story" className="overlay-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#our-story'); }}>About Us</a>
            <a href="/#contact" className="overlay-link" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}>Contact</a>
          </nav>

          <div className="overlay-divider"></div>

          <button className="overlay-plan-btn" onClick={handlePlanClick}>
            <span>Plan Your Trip</span>
            <span className="overlay-arrow" aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* Bottom Artwork: Ostrich Illustration & Geometric Border Trim */}
        <div className="overlay-bottom-artwork">
          <div className="overlay-ostrich-wrap" aria-hidden="true">
            <img
              src="/enkop-logo-transparent.png"
              alt=""
              className="overlay-ostrich-img"
              width="120"
              height="80"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="overlay-geometric-band" aria-hidden="true">
            <svg
              className="overlay-motif-svg"
              viewBox="0 0 480 32"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="africanPattern" width="48" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 0 16 L 24 2 L 48 16 L 24 30 Z" fill="none" stroke="rgba(214, 192, 155, 0.22)" strokeWidth="1" />
                  <path d="M 12 16 L 24 8 L 36 16 L 24 24 Z" fill="none" stroke="rgba(214, 192, 155, 0.16)" strokeWidth="0.8" />
                  <circle cx="24" cy="16" r="1.5" fill="rgba(214, 192, 155, 0.35)" />
                  <line x1="0" y1="2" x2="48" y2="2" stroke="rgba(214, 192, 155, 0.18)" strokeWidth="0.8" />
                  <line x1="0" y1="30" x2="48" y2="30" stroke="rgba(214, 192, 155, 0.18)" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="32" fill="url(#africanPattern)" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}
