import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Lock, Star } from 'lucide-react';

export default function TrustLogos() {
  const trustItems = [
    {
      title: 'KWS Partner',
      subtitle: 'Kenya Wildlife Service',
      badge: 'Official Parks Partner',
      color: '#2E7D32',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v4"/>
          <path d="M12 16h.01"/>
        </svg>
      )
    },
    {
      title: 'TRA Licensed',
      subtitle: 'Tourism Regulatory Authority',
      badge: 'Govt. License Verified',
      color: '#1565C0',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#1565C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      )
    },
    {
      title: 'TripAdvisor',
      subtitle: 'Excellence Certificate',
      badge: '5.0★ Verified Rating',
      color: '#34E0A1',
      icon: (
        <svg viewBox="0 0 24 24" width="36" height="36" fill="none">
          <circle cx="7" cy="12" r="3" stroke="#00AA6C" strokeWidth="2"/>
          <circle cx="17" cy="12" r="3" stroke="#00AA6C" strokeWidth="2"/>
          <path d="M7 11h.01M17 11h.01" stroke="#00AA6C" strokeWidth="3" strokeLinecap="round"/>
          <path d="M12 7c-3 0-5 2-5 5h10c0-3-2-5-5-5z" fill="#00AA6C"/>
        </svg>
      )
    },
    {
      title: 'KATO Bonded',
      subtitle: 'Assoc. of Tour Operators',
      badge: '100% Financial Protection',
      color: '#C62828',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#C62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      )
    },
    {
      title: 'SafariBookings',
      subtitle: 'Verified Local Partner',
      badge: 'Top Safari Operator',
      color: '#B5975A',
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#B5975A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      )
    }
  ];

  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-header-center">
          <p className="section-label">ACCREDITATIONS & BOOKING SECURITY</p>
          <h3 className="trust-headline">Trusted & Fully Certified Partners</h3>
          <p className="trust-subtitle">
            Endorsed and licensed by Kenya’s official tourism regulatory authorities and wildlife bodies.
          </p>
        </div>

        <div className="trust-logos-row">
          {trustItems.map((item, index) => (
            <div className="trust-logo-card" key={index}>
              <div className="trust-logo-img-wrapper">
                {item.icon}
              </div>
              <div className="trust-logo-meta">
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
                <span className="trust-badge-pill">
                  <CheckCircle2 size={12} style={{ color: item.color }} />
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
