import React from 'react';
import { ShieldCheck, HeartHandshake } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';

const TEAM_MEMBERS = [
  {
    name: 'Leika Nkiok',
    role: 'Founder & Head Safari Guide',
    credentials: 'KPSGA Certified · 14+ Yrs Exp',
    bio: 'Born near the Maasai Mara, Leika has led over 800 custom safari expeditions across Kenya. Passionate about wildlife tracking and direct hospitality.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Joseph Ole Kaelo',
    role: 'Senior Big Cat Tracker & Driver-Guide',
    credentials: 'KPSGA Silver Badge · Naturalist',
    bio: 'Specialist in big cat behavior (Lions, Leopards & Cheetahs). Renowned among travelers for his keen eye and deep respect for African wildlife.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Faith Kiprono',
    role: 'Safari Operations & Logistics Manager',
    credentials: 'Tourism Logistics Specialist',
    bio: 'Manages lodge reservations, airport transfers, and private Land Cruiser dispatch to ensure 100% smooth travel itineraries.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  }
];

export default function TeamSection() {
  const { openDrawer } = useTripBuilder();

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header-center">
          <p className="section-label">MEET OUR LOCAL EXPERTS</p>
          <h2 className="section-headline">Licensed Kenyan Driver-Guides</h2>
          <p className="section-sub-desc">
            No middleman agencies. No call centers. You travel directly with KPSGA-certified local experts who call the savannah home.
          </p>
        </div>

        <div className="team-grid">
          {TEAM_MEMBERS.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-img-wrapper">
                <img src={member.image} alt={`${member.name} - ${member.role}`} loading="lazy" />
                <span className="team-badge">
                  <ShieldCheck size={13} style={{ color: 'var(--color-accent)' }} />
                  {member.credentials}
                </span>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="response-promise-card">
          <div className="promise-icon">
            <HeartHandshake size={28} style={{ color: 'var(--color-accent)' }} />
          </div>
          <div className="promise-text">
            <h4>⚡ Instant 15-Minute Response Promise</h4>
            <p>We guarantee a direct response on WhatsApp (+254 718 396 228) from a licensed guide within 15 minutes.</p>
          </div>
          <button type="button" className="promise-btn" onClick={() => openDrawer()}>
            Chat Direct on WhatsApp &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
