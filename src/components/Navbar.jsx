import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTripBuilder } from '../context/TripBuilderContext';

export default function Navbar({ onOpenMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const { openDrawer } = useTripBuilder();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" aria-label="Enkop Safaris Home">
          <img 
            src="/enkop-logo-transparent.png" 
            alt="Enkop Safaris" 
            className="nav-logo-img" 
          />
        </Link>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#destinations">Safaris</a>
          <a href="#services">Destinations</a>
          <a href="#our-story">Our Story</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-right">
          <button className="nav-enquire-btn" onClick={() => openDrawer()}>
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
