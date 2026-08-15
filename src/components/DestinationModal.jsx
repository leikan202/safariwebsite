import React from 'react';
import { X, Calendar, Compass, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';

const DESTINATION_DETAILS = {
  mara: {
    name: 'Maasai Mara National Reserve',
    location: 'Narok County, Kenya',
    tagline: 'The world-famous kingdom of the Great Wildebeest Migration & apex predators.',
    image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80',
    bestTime: 'July to October (Migration Crossings) & Jan–Feb',
    stay: 'Exclusive Conservancies, Luxury Tented Camps & Safari Lodges',
    highlights: [
      { title: 'Great River Crossings', desc: 'Witness thousands of wildebeest brave Mara River crocodiles.' },
      { title: 'Big Five & Cheetahs', desc: 'High predator density with famous lion prides and leopards.' },
      { title: 'Maasai Culture', desc: 'Authentic cultural encounters with indigenous Maasai warriors.' },
      { title: 'Hot Air Balloon Safari', desc: 'Glide over the Mara plains at dawn with champagne breakfast.' }
    ]
  },
  amboseli: {
    name: 'Amboseli National Park',
    location: 'Kajiado County, Kenya',
    tagline: 'Iconic panoramic views of snow-capped Mt. Kilimanjaro with giant elephant herds.',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80',
    bestTime: 'June to October & January to February',
    stay: 'Amboseli Serena, Ol Tukai Lodge & Tented Bush Camps',
    highlights: [
      { title: 'Mt. Kilimanjaro Backdrop', desc: 'Unmatched vistas of Africa’s highest snow-capped peak.' },
      { title: 'Giant Tusked Elephants', desc: 'Get up close with Africa’s most famous elephant families.' },
      { title: 'Observation Hill', desc: '360-degree panoramic lookout over the marshlands & plains.' },
      { title: 'Swamp Bird Sanctuary', desc: 'Over 400 bird species thriving in permanent freshwater springs.' }
    ]
  },
  laikipia: {
    name: 'Laikipia & Ol Pejeta Sanctuary',
    location: 'Laikipia County, Kenya',
    tagline: 'East Africa’s premier rhino sanctuary & high-end private conservancy area.',
    image: 'https://images.unsplash.com/photo-1598894000396-bc30e0996899?auto=format&fit=crop&w=1200&q=80',
    bestTime: 'Year-Round (Peak dry months June–Oct & Dec–March)',
    stay: 'Segera Retreat, Sweetwaters Tented Camp & Sanctuary Camps',
    highlights: [
      { title: 'Last Northern White Rhinos', desc: 'Home to the world’s last two surviving Northern White Rhinos.' },
      { title: 'Chimpanzee Sanctuary', desc: 'Kenya’s only sanctuary for rescued chimpanzees.' },
      { title: 'Night Game Drives', desc: 'Exclusive nocturnal drives & walking bush safaris.' },
      { title: 'Private Conservancies', desc: 'Crowd-free luxury wildlife encounters with private guides.' }
    ]
  },
  diani: {
    name: 'Diani Beach & Coastal Reefs',
    location: 'Kwale County, Kenya',
    tagline: 'Award-winning powder-white sand beaches bordering the warm Indian Ocean.',
    image: 'https://images.unsplash.com/photo-1667935837291-1dc178866251?auto=format&fit=crop&w=1200&q=80',
    bestTime: 'October to March (Warm clear sea waters & sun)',
    stay: 'Swahili Beach Resort, AfroChic Diani & Luxury Ocean Villas',
    highlights: [
      { title: 'Powder-White Sands', desc: 'Ranked Africa’s top beach with turquoise coral reef waters.' },
      { title: 'Ocean Safari & Snorkeling', desc: 'Dolphin watching excursions & coral reef scuba diving.' },
      { title: 'Kite Surfing & Dhow Cruises', desc: 'Sunset dhow sailing and world-class watersports.' },
      { title: 'Chale Island Excursions', desc: 'Private mangrove tours and secluded island dining.' }
    ]
  }
};

export default function DestinationModal({ destId, onClose }) {
  const { openDrawer } = useTripBuilder();

  if (!destId) return null;
  const data = DESTINATION_DETAILS[destId] || DESTINATION_DETAILS.mara;

  const handlePlanClick = () => {
    onClose();
    openDrawer(data.name);
  };

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="dest-luxury-card">
        {/* Hero Image Container */}
        <div className="dest-hero-header">
          <img src={data.image} alt={data.name} className="dest-hero-img" />
          <div className="dest-hero-vignette"></div>

          <div className="dest-hero-badge">
            <MapPin size={13} style={{ color: 'var(--color-accent)' }} />
            <span>{data.location}</span>
          </div>

          <button className="dest-glass-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>

          <div className="dest-hero-title-box">
            <span className="dest-type-tag">DESTINATION OVERVIEW</span>
            <h2>{data.name}</h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="dest-luxury-body">
          <p className="dest-luxury-tagline">{data.tagline}</p>

          {/* Quick Info Grid */}
          <div className="dest-quick-grid">
            <div className="quick-info-card">
              <Calendar size={18} className="info-card-icon" />
              <div>
                <span className="info-card-label">Best Season</span>
                <span className="info-card-val">{data.bestTime}</span>
              </div>
            </div>
            <div className="quick-info-card">
              <Compass size={18} className="info-card-icon" />
              <div>
                <span className="info-card-label">Accommodation Style</span>
                <span className="info-card-val">{data.stay}</span>
              </div>
            </div>
          </div>

          {/* Key Experience Feature Cards Grid */}
          <div className="dest-experience-section">
            <p className="experience-section-title">
              <Sparkles size={16} style={{ color: 'var(--color-accent)' }} />
              Signature Experiences & Highlights
            </p>

            <div className="experience-cards-grid">
              {data.highlights.map((item, idx) => (
                <div key={idx} className="experience-feature-card">
                  <div className="feature-card-header">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <h4>{item.title}</h4>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="dest-luxury-footer">
            <button type="button" className="dest-luxury-cta-btn" onClick={handlePlanClick}>
              <span>Plan Safari to {data.name}</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
