import React, { useState } from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';
import { PatternElement } from './BrandElements';
import LegalModal from './LegalModal';

export default function Footer() {
  const { openDrawer } = useTripBuilder();
  const [legalModalType, setLegalModalType] = useState(null);

  return (
    <>
      {/* PRE-FOOTER CTA BANNER: LET'S PLAN YOUR JOURNEY */}
      <section 
        className="cta-banner"
        style={{
          backgroundColor: '#1F3A32',
          position: 'relative',
          overflow: 'hidden',
          padding: '70px 0',
          color: '#FFFFFF'
        }}
      >
        {/* Clearly Visible Geometric Pattern Watermark in Background on the Right */}
        <div 
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            opacity: 0.45,
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <PatternElement color="#D8C3A5" size={70} />
          <PatternElement color="#D8C3A5" size={110} />
          <PatternElement color="#D8C3A5" size={70} />
        </div>

        <div 
          className="container" 
          style={{ 
            maxWidth: '1240px', 
            margin: '0 auto', 
            padding: '0 24px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 2,
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div>
            <p 
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.75rem', 
                fontWeight: 600, 
                letterSpacing: '0.22em', 
                textTransform: 'uppercase', 
                color: 'var(--color-accent)', 
                margin: '0 0 10px 0' 
              }}
            >
              LET'S PLAN YOUR JOURNEY
            </p>
            <h2 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', 
                fontWeight: 400, 
                color: '#FFFFFF', 
                margin: 0,
                lineHeight: 1.15
              }}
            >
              Tell us where you dream of going.
            </h2>
          </div>

          <div>
            <button
              onClick={() => openDrawer()}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--color-accent)',
                color: 'var(--color-accent)',
                padding: '14px 32px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
            >
              <span>Start Planning</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* MINIMALIST LUXURY IVORY FOOTER */}
      <footer 
        style={{ 
          backgroundColor: 'var(--color-bg-light)', 
          borderTop: '1px solid rgba(107, 74, 53, 0.15)',
          padding: '48px 0 32px',
          color: 'var(--color-primary)'
        }}
      >
        <div 
          className="container" 
          style={{ 
            maxWidth: '1240px', 
            margin: '0 auto', 
            padding: '0 24px' 
          }}
        >
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '32px',
              paddingBottom: '36px'
            }}
          >
            {/* Left: Ostrich Logo & Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img 
                src="/enkop-logo-transparent.png" 
                alt="Enkop Safaris" 
                style={{ height: '76px', width: 'auto', objectFit: 'contain' }} 
              />
              <div>
                <p 
                  style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '1.15rem', 
                    fontWeight: 600, 
                    letterSpacing: '0.1em', 
                    textTransform: 'uppercase', 
                    color: 'var(--color-secondary)', 
                    margin: 0,
                    lineHeight: 1.1
                  }}
                >
                  ENKOP SAFARIS
                </p>
                <p 
                  style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.68rem', 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase', 
                    color: 'var(--color-grey)', 
                    margin: '3px 0 0 0' 
                  }}
                >
                  GOOD BY NATURE.
                </p>
              </div>
            </div>

            {/* Center: Horizontal Navigation Links */}
            <nav 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '28px', 
                flexWrap: 'wrap' 
              }}
            >
              {[
                { label: 'Home', href: '#' },
                { label: 'Destinations', href: '#destinations' },
                { label: 'Safaris', href: '#services' },
                { label: 'Experiences', href: '#experience' },
                { label: 'About Us', href: '#our-story' },
                { label: 'Contact', href: '#contact' }
              ].map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.75rem', 
                    fontWeight: 500, 
                    color: 'var(--color-primary)', 
                    textDecoration: 'none', 
                    letterSpacing: '0.06em' 
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--color-primary)' }}>
              <a href="#" style={{ color: 'inherit' }} aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" style={{ color: 'inherit' }} aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" style={{ color: 'inherit' }} aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Bottom Copyright & Legal */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              paddingTop: '20px', 
              borderTop: '1px solid rgba(107, 74, 53, 0.1)', 
              fontSize: '0.72rem', 
              color: 'var(--color-grey)', 
              fontFamily: 'var(--font-sans)',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                type="button" 
                onClick={() => setLegalModalType('privacy')} 
                style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit' }}
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button 
                type="button" 
                onClick={() => setLegalModalType('terms')} 
                style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit' }}
              >
                Booking Terms
              </button>
            </div>
            <p style={{ margin: 0 }}>
              &copy; 2025 Enkop Safaris. All rights reserved.
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
