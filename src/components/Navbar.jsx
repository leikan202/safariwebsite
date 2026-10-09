import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTripBuilder } from '../context/TripBuilderContext';

export default function Navbar({ onOpenMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const { openDrawer } = useTripBuilder();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
          <img 
            src="/enkop-logo-transparent.png" 
            alt="Enkop Safaris" 
            className="nav-logo-img" 
            style={{ height: '84px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        <nav className="nav-links" style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'none', fontSize: '0.82rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'inherit' }}>Home</a>
          <a href="#destinations" style={{ textDecoration: 'none', fontSize: '0.82rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'inherit' }}>Destinations</a>
          <a href="#services" style={{ textDecoration: 'none', fontSize: '0.82rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'inherit' }}>Safaris</a>
          <a href="#our-story" style={{ textDecoration: 'none', fontSize: '0.82rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'inherit' }}>Our Story</a>
          <a href="#contact" style={{ textDecoration: 'none', fontSize: '0.82rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'inherit' }}>Contact</a>
        </nav>

        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button className="nav-enquire-btn" onClick={() => openDrawer()} style={{ borderRadius: '9999px', padding: '10px 24px', letterSpacing: '0.15em', fontSize: '0.75rem' }}>
            Plan Safari
          </button>

          <button className="hamburger" onClick={onOpenMobileMenu} aria-label="Open menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
