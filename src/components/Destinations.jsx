import React, { useState } from 'react';
import { useTripBuilder } from '../context/TripBuilderContext';
const DestinationModal = React.lazy(() => import('./DestinationModal'));

import imgMara from '../../assets/images/leonard-von-bibra-L4-BDd01wmM-unsplash.jpg';
import imgAmboseli from '../../assets/images/neil-and-zulma-scott-hjv3VO-jpnc-unsplash.jpg';
import imgNorthernKenya from '../../assets/images/polina-koroleva-36DSACYDey0-unsplash.jpg';
import imgDiani from '../../assets/images/ezekiel-kilimo-m_06_L3cKY0-unsplash.jpg';

export default function Destinations() {
  const { openDrawer } = useTripBuilder();
  const [activeModal, setActiveModal] = useState(null);

  const destinations = [
    {
      id: 'mara',
      name: 'Maasai Mara',
      image: imgMara
    },
    {
      id: 'amboseli',
      name: 'Amboseli',
      image: imgAmboseli
    },
    {
      id: 'northern-kenya',
      name: 'Northern Kenya',
      image: imgNorthernKenya
    },
    {
      id: 'diani',
      name: 'Diani Beach',
      image: imgDiani
    }
  ];

  return (
    <section className="destinations-section" id="destinations">
      <div className="dest-grid reveal-stagger">
        {destinations.map((dest) => (
          <div
            className="dest-card"
            key={dest.id}
            onClick={() => setActiveModal(dest.id)}
          >
            <img src={dest.image} loading="lazy" decoding="async" alt={dest.name} />
            <div className="dest-label">
              <span className="dest-name">{dest.name}</span>
              <span className="dest-action">Explore &rarr;</span>
            </div>
          </div>
        ))}
      </div>

      <React.Suspense fallback={null}>
        <DestinationModal destId={activeModal} onClose={() => setActiveModal(null)} />
      </React.Suspense>
    </section>
  );
}
