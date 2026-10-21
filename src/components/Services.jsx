import React from 'react';
import { useTripBuilder } from '../context/TripBuilderContext';
import img1 from '../../assets/images/ahmed-galal-VQqMACyNfwA-unsplash.jpg';
import img2 from '../../assets/images/imani-manyara-BtLnuXPTUns-unsplash.jpg';
import img3 from '../../assets/images/murad-swaleh-7tDidSXbgD8-unsplash.jpg';
import img4 from '../../assets/images/giusi-borrasi-XlqCl5NO0SM-unsplash.jpg';

export default function Services() {
  const { openDrawer } = useTripBuilder();

  const servicesData = [
    {
      title: 'Adventure Kenya',
      description: 'Curated packages across Africa\'s most stunning wildlife reserves.',
      image: img1
    },
    {
      title: 'Corporate Travel',
      description: 'Tailored solutions for team building, executive retreats, and conferences.',
      image: img2
    },
    {
      title: 'City & Day Trips',
      description: 'Discover urban wonders and wildlife sanctuaries with expert guidance.',
      image: img3
    },
    {
      title: 'Transfers & Ticketing',
      description: 'Reliable private logistics and domestic flight bookings for peace of mind.',
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
              onClick={() => openDrawer(service.title)}
            >
              <div className="img-wrapper">
                <img src={service.image} loading="lazy" decoding="async" alt={service.title} />
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
