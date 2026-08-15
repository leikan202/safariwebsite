import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';

const CASE_STUDIES = [
  {
    title: '7-Day Wildebeest River Crossing Expedition',
    client: 'The Miller Family (4 Travelers)',
    budget: '$2,850 / person',
    route: 'Nairobi → Amboseli → Maasai Mara',
    highlights: ['Saw Wildebeest Mara River Crossing', 'Lions on Big Rock Kopjes', 'Amboseli Elephant Herds at Mt. Kili Sunset'],
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: '5-Day Honeymoon Bush & Coastal Paradise',
    client: 'Hans & Greta Weber (Couple)',
    budget: '$3,200 / person',
    route: 'Nairobi → Laikipia Rhino Sanctuary → Diani Beach',
    highlights: ['Private Fly-Camping under stars', 'Last Northern White Rhinos', 'White Sand Beach Dhow Sunset Cruise'],
    image: 'https://images.unsplash.com/photo-1667935837291-1dc178866251?auto=format&fit=crop&w=800&q=80'
  }
];

export default function CaseStudies() {
  const { openDrawer } = useTripBuilder();

  return (
    <section className="case-studies-section" id="case-studies">
      <div className="container">
        <div className="section-header-center">
          <p className="section-label">REAL SAFARI STORIES</p>
          <h2 className="section-headline">Featured Itinerary Case Studies</h2>
          <p className="section-sub-desc">
            Explore actual itineraries crafted for travelers based on custom budgets, dates, and wildlife desires.
          </p>
        </div>

        <div className="case-grid">
          {CASE_STUDIES.map((item, idx) => (
            <div className="case-card" key={idx}>
              <div className="case-img-col">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="case-budget-tag">{item.budget}</span>
              </div>
              <div className="case-info-col">
                <span className="case-client">{item.client}</span>
                <h3>{item.title}</h3>
                <p className="case-route">
                  <MapPin size={14} style={{ color: 'var(--color-accent)' }} /> {item.route}
                </p>
                <ul className="case-highlights">
                  {item.highlights.map((h, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} /> {h}
                    </li>
                  ))}
                </ul>
                <button type="button" className="case-cta-btn" onClick={() => openDrawer(item.title)}>
                  Customize a Similar Itinerary &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
