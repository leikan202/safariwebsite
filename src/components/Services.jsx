import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { useTripBuilder } from '../context/TripBuilderContext';

export default function Services() {
  const { formatPrice } = useCurrency();
  const { openDrawer } = useTripBuilder();

  const servicesData = [
    {
      title: 'Adventure Kenya',
      description: 'Curated packages across Africa\'s most stunning wildlife reserves.',
      usd: 1500,
      kes: 195000,
      image: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Corporate Travel',
      description: 'Tailored solutions for team building, executive retreats, and conferences.',
      usd: 800,
      kes: 104000,
      image: 'https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'City & Day Trips',
      description: 'Discover urban wonders and wildlife sanctuaries with expert guidance.',
      usd: 150,
      kes: 19500,
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Buffalo_Nairobi_Skyline_Savannah_Kenya_May19_R1600769.jpg'
    },
    {
      title: 'Transfers & Ticketing',
      description: 'Reliable private logistics and domestic flight bookings for peace of mind.',
      usd: 65,
      kes: 8450,
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Toyota_Land_Cruiser_%28J70%29_safari_vehicle%2C_Voi%2C_2025_%2802%29.jpg'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header-center">
          <p className="section-label">BEYOND THE BUSH</p>
          <h2 className="section-headline">Our Expertise</h2>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              className="service-card"
              key={index}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              onClick={() => openDrawer(service.title)}
            >
              <img src={service.image} loading="lazy" alt={service.title} />
              <div className="service-info" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3>{service.title}</h3>
                <p style={{ flex: 1 }}>{service.description}</p>
                <div 
                  className="price-display" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginTop: '24px',
                    paddingTop: '20px',
                    borderTop: '1px solid #EAEAEA',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-grey)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Starting from</span>
                    <span style={{ color: 'var(--color-black)', fontSize: '1.2rem', whiteSpace: 'nowrap' }}>
                      {formatPrice(service.usd, service.kes)}
                    </span>
                  </div>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    fontWeight: 700, 
                    color: 'var(--color-accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap'
                  }}>
                    Plan Now <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
