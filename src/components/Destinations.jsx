import React, { useState } from 'react';
import { useTripBuilder } from '../context/TripBuilderContext';
import DestinationModal from './DestinationModal';

export default function Destinations() {
  const { openDrawer } = useTripBuilder();
  const [activeModal, setActiveModal] = useState(null);

  const destinations = [
    {
      id: 'mara',
      name: 'Maasai Mara',
      image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'amboseli',
      name: 'Amboseli',
      image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'laikipia',
      name: 'Laikipia',
      image: 'https://images.unsplash.com/photo-1598894000396-bc30e0996899?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'diani',
      name: 'Diani Beach',
      image: 'https://images.unsplash.com/photo-1667935837291-1dc178866251?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section className="destinations-section" id="destinations">
      <div className="dest-grid">
        {destinations.map((dest) => (
          <div
            className="dest-card"
            key={dest.id}
            onClick={() => setActiveModal(dest.id)}
          >
            <img src={dest.image} loading="lazy" alt={dest.name} />
            <div className="dest-label">
              <span className="dest-name">{dest.name}</span>
              <span className="dest-action">Explore &rarr;</span>
            </div>
          </div>
        ))}
      </div>

      <DestinationModal destId={activeModal} onClose={() => setActiveModal(null)} />
    </section>
  );
}
