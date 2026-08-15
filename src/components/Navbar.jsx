import React, { useState, useEffect } from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { useTripBuilder } from '../context/TripBuilderContext';

export default function Navbar({ onOpenMobileMenu }) {
  const [scrolled, setScrolled] = useState(false);
  const { currency, toggleCurrency } = useCurrency();
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
        <a href="#" className="nav-logo">
          SAFARI DIRECT <span>KENYA</span>
        </a>

        <div className="nav-right">
          {/* Currency Toggle */}
          <div className={`currency-toggle ${currency === 'KES' ? 'is-kes' : ''}`}>
            <div className="currency-slider"></div>
            <button
              className={`currency-btn ${currency === 'USD' ? 'active' : ''}`}
              onClick={() => toggleCurrency('USD')}
            >
              USD
            </button>
            <button
              className={`currency-btn ${currency === 'KES' ? 'active' : ''}`}
              onClick={() => toggleCurrency('KES')}
            >
              KES
            </button>
          </div>

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
