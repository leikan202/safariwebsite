import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';

export default function MobileBottomCTA() {
  const { openDrawer } = useTripBuilder();

  return (
    <div className="mobile-bottom-cta">
      <button onClick={() => openDrawer()}>
        <MessageSquare size={18} />
        Plan Your Safari
      </button>
    </div>
  );
}
