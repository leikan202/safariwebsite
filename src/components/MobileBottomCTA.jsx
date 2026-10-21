import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTripBuilder } from '../context/TripBuilderContext';

export default function MobileBottomCTA() {
  const { openDrawer } = useTripBuilder();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // On inner pages (like /itineraries, /4x4-landcruisers), show immediately.
    // On homepage, reveal after 140px scroll so hero is unobstructed.
    if (location.pathname !== '/') {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 140);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      "Hello Enkop Safaris, I'm visiting your website on mobile and would like to inquire about private safari itineraries and pricing."
    );
    window.open(`https://wa.me/254718396228?text=${text}`, '_blank');
  };

  return (
    <aside className={`mobile-bottom-cta ${scrolled ? 'visible' : ''}`} aria-label="Quick contact actions">
      <div className="mobile-bottom-cta-inner">
        <a 
          href="https://wa.me/254718396228" 
          onClick={handleWhatsApp}
          className="mobile-cta-wa"
          aria-label="Chat on WhatsApp"
        >
          <Phone size={16} />
          <span>WhatsApp</span>
        </a>
        <button 
          type="button" 
          onClick={() => openDrawer()}
          className="mobile-cta-plan"
          aria-label="Open Plan Safari Drawer"
        >
          <MessageSquare size={16} />
          <span>Plan Safari</span>
        </button>
      </div>
    </aside>
  );
}
