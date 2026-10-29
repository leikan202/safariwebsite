import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';
import { PatternElement } from './BrandElements';
import LegalModal from './LegalModal';

export default function Footer() {
  const { openDrawer } = useTripBuilder();
  const [legalModalType, setLegalModalType] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* PRE-FOOTER CTA BANNER (rendered on inner pages to invite inquiries, omitted on homepage to avoid duplicate CTAs) */}
      {/* PRE-FOOTER CTA BANNER (rendered on inner pages to invite inquiries, omitted on homepage to avoid duplicate CTAs) */}
      {!isHomePage && (
        <section className="cta-banner">
          <div className="cta-banner-watermark">
            <PatternElement color="#D8C3A5" size={70} />
            <PatternElement color="#D8C3A5" size={110} />
            <PatternElement color="#D8C3A5" size={70} />
          </div>

          <div className="container cta-banner-container">
            <div className="cta-banner-text">
              <p className="cta-banner-kicker">LET'S PLAN YOUR JOURNEY</p>
              <h2 className="cta-banner-title">Tell us where you dream of going.</h2>
            </div>

            <div className="cta-banner-btn-wrap">
              <button
                type="button"
                className="cta-banner-btn"
                onClick={() => openDrawer()}
              >
                <span>Start Planning</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* MINIMALIST LUXURY IVORY FOOTER */}
      <footer className="footer-section">
        <div className="container footer-container">
          <div className="footer-inner">
            {/* Left: Ostrich Logo & Name */}
            <div className="footer-brand">
              <img 
                src="/enkop-logo-transparent.webp" 
                alt="Enkop Safaris" 
                className="footer-brand-logo" 
                width="108"
                height="72"
                loading="lazy"
                decoding="async"
              />
              <div className="footer-brand-text">
                <p className="footer-brand-title">ENKOP SAFARIS</p>
                <p className="footer-brand-tagline">GOOD BY NATURE.</p>
              </div>
            </div>

            {/* Center: Navigation Links */}
            <nav className="footer-nav">
              {[
                { label: 'Home', href: '/' },
                { label: 'Safaris', href: '/itineraries' },
                { label: 'Destinations', href: '/#destinations' },
                { label: '4x4 Fleet', href: '/4x4-landcruisers' },
                { label: 'Our Story', href: '/#our-story' },
                { label: 'Why Us', href: '/#why-us' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/#contact' }
              ].map((link, idx) => (
                <Link 
                  key={idx} 
                  to={link.href} 
                  className="footer-nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right: Social Icons */}
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Bottom Copyright & Legal */}
          <div className="footer-bottom">
            <div className="footer-legal">
              <button 
                type="button" 
                onClick={() => setLegalModalType('privacy')} 
                className="footer-legal-btn"
              >
                Privacy Policy
              </button>
              <span className="footer-legal-bullet">•</span>
              <button 
                type="button" 
                onClick={() => setLegalModalType('terms')} 
                className="footer-legal-btn"
              >
                Booking Terms
              </button>
            </div>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Enkop Safaris. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {legalModalType && (
        <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
      )}
    </>
  );
}
