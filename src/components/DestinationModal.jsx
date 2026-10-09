import React from 'react';
import { X, Calendar, Compass, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';

import imgMara from '../../assets/images/leonard-von-bibra-L4-BDd01wmM-unsplash.jpg';
import imgAmboseli from '../../assets/images/neil-and-zulma-scott-hjv3VO-jpnc-unsplash.jpg';
import imgNorthernKenya from '../../assets/images/polina-koroleva-36DSACYDey0-unsplash.jpg';
import imgDiani from '../../assets/images/ezekiel-kilimo-m_06_L3cKY0-unsplash.jpg';

const DESTINATION_DETAILS = {
  mara: {
    name: 'Maasai Mara National Reserve',
    location: 'Narok County, Kenya',
    tagline: 'The world-famous kingdom of the Great Wildebeest Migration & apex predators.',
    image: imgMara,
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
    image: imgAmboseli,
    bestTime: 'June to October & January to February',
    stay: 'Amboseli Serena, Ol Tukai Lodge & Tented Bush Camps',
    highlights: [
      { title: 'Mt. Kilimanjaro Backdrop', desc: 'Unmatched vistas of Africa’s highest snow-capped peak.' },
      { title: 'Giant Tusked Elephants', desc: 'Get up close with Africa’s most famous elephant families.' },
      { title: 'Observation Hill', desc: '360-degree panoramic lookout over the marshlands & plains.' },
      { title: 'Swamp Bird Sanctuary', desc: 'Over 400 bird species thriving in permanent freshwater springs.' }
    ]
  },
  'northern-kenya': {
    name: 'Northern Kenya & Samburu',
    location: 'Samburu & Laikipia, Northern Kenya',
    tagline: 'Rugged wild frontier, Samburu Special Five & vast private wilderness conservancies.',
    image: imgNorthernKenya,
    bestTime: 'Year-Round (Peak dry months June–Oct & Dec–March)',
    stay: 'Saruni Samburu, Sasaab, Segera Retreat & Luxury Tented Camps',
    highlights: [
      { title: 'The Samburu Special Five', desc: 'Gerenuk, Grevy’s zebra, reticulated giraffe, Somali ostrich & beisa oryx.' },
      { title: 'Rugged Sacred Landscapes', desc: 'Dramatic granite koppies, Ewaso Ng’iro River & Mt. Ololokwe views.' },
      { title: 'Samburu Cultural Heritage', desc: 'Intimate traditions, song and lore of the semi-nomadic Samburu people.' },
      { title: 'Exclusive Conservancies', desc: 'Unmatched wilderness solitude, night game drives & walking safaris.' }
    ]
  },
  laikipia: {
    name: 'Northern Kenya & Samburu',
    location: 'Samburu & Laikipia, Northern Kenya',
    tagline: 'Rugged wild frontier, Samburu Special Five & vast private wilderness conservancies.',
    image: imgNorthernKenya,
    bestTime: 'Year-Round (Peak dry months June–Oct & Dec–March)',
    stay: 'Saruni Samburu, Sasaab, Segera Retreat & Luxury Tented Camps',
    highlights: [
      { title: 'The Samburu Special Five', desc: 'Gerenuk, Grevy’s zebra, reticulated giraffe, Somali ostrich & beisa oryx.' },
      { title: 'Rugged Sacred Landscapes', desc: 'Dramatic granite koppies, Ewaso Ng’iro River & Mt. Ololokwe views.' },
      { title: 'Samburu Cultural Heritage', desc: 'Intimate traditions, song and lore of the semi-nomadic Samburu people.' },
      { title: 'Exclusive Conservancies', desc: 'Unmatched wilderness solitude, night game drives & walking safaris.' }
    ]
  },
  diani: {
    name: 'Diani Beach & Coastal Reefs',
    location: 'Kwale County, Kenya',
    tagline: 'Award-winning powder-white sand beaches bordering the warm Indian Ocean.',
    image: imgDiani,
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
