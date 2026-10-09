import React from 'react';
import { useCurrency } from '../context/CurrencyContext';
import { useTripBuilder } from '../context/TripBuilderContext';
import img1 from '../../assets/images/ahmed-galal-VQqMACyNfwA-unsplash.jpg';
import img2 from '../../assets/images/imani-manyara-BtLnuXPTUns-unsplash.jpg';
import img3 from '../../assets/images/murad-swaleh-7tDidSXbgD8-unsplash.jpg';
import img4 from '../../assets/images/giusi-borrasi-XlqCl5NO0SM-unsplash.jpg';

export default function Services() {
  const { formatPrice } = useCurrency();
  const { openDrawer } = useTripBuilder();

  const servicesData = [
    {
      title: 'Adventure Kenya',
      description: 'Curated packages across Africa\'s most stunning wildlife reserves.',
      usd: 1500,
      kes: 195000,
      image: img1
    },
    {
      title: 'Corporate Travel',
      description: 'Tailored solutions for team building, executive retreats, and conferences.',
      usd: 800,
      kes: 104000,
      image: img2
    },
    {
      title: 'City & Day Trips',
      description: 'Discover urban wonders and wildlife sanctuaries with expert guidance.',
      usd: 150,
      kes: 19500,
      image: img3
    },
    {
      title: 'Transfers & Ticketing',
      description: 'Reliable private logistics and domestic flight bookings for peace of mind.',
      usd: 65,
      kes: 8450,
      image: img4
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
              <div className="img-wrapper">
                <img src={service.image} loading="lazy" decoding="async" alt={service.title} />
              </div>
              <div className="service-info" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3>{service.title}</h3>
                <p style={{ flex: 1 }}>{service.description}</p>
                <div 
                  className="price-display" 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    marginTop: '24px',
                    flexWrap: 'wrap',
                    gap: '20px'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-grey)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Starting from</span>
                    <span style={{ color: 'var(--color-black)', fontSize: '1.1rem', fontFamily: 'var(--font-display)', whiteSpace: 'nowrap' }}>
                      {formatPrice(service.usd, service.kes)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
