import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTripBuilder } from '../context/TripBuilderContext';

export default function Navbar({ onOpenMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const { openDrawer } = useTripBuilder();
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNavClick = (e, hash) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/${hash || ''}`);
      setTimeout(() => {
        if (hash && hash !== '#') {
          const id = hash.replace('#', '');
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
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
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link
          to="/"
          className="nav-logo"
          aria-label="Enkop Safaris Home"
          onClick={(e) => handleNavClick(e, '')}
        >
          <img 
            src="/enkop-logo-transparent.png" 
            alt="Enkop Safaris" 
            className="nav-logo-img" 
          />
        </Link>

        <nav className="nav-links">
          <a href="/" onClick={(e) => handleNavClick(e, '')}>Home</a>
          <Link to="/itineraries">Safaris</Link>
          <a href="/#destinations" onClick={(e) => handleNavClick(e, '#destinations')}>Destinations</a>
          <Link to="/4x4-landcruisers">4x4 Fleet</Link>
          <a href="/#our-story" onClick={(e) => handleNavClick(e, '#our-story')}>Our Story</a>
          <a href="/#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
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
