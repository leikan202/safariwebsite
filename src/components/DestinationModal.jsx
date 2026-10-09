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
      <div className="dest-editorial-modal">
        {/* Editorial Hero Header */}
        <div className="dest-editorial-header">
          <img src={data.image} alt={data.name} className="dest-editorial-img" />
          <div className="dest-editorial-overlay"></div>

          <div className="dest-editorial-meta">
            <span className="dest-editorial-kicker">Destinations &middot; Field Guide</span>
            <span className="dest-editorial-loc">
              <MapPin size={12} />
              {data.location}
            </span>
          </div>

          <button className="dest-editorial-close" onClick={onClose} aria-label="Close details">
            <X size={18} />
          </button>

          <div className="dest-editorial-headline">
            <h2>{data.name}</h2>
          </div>
        </div>

        {/* Editorial Dossier Body */}
        <div className="dest-editorial-body">
          <div className="dest-editorial-intro">
            <p className="dest-editorial-tagline">&ldquo;{data.tagline}&rdquo;</p>
          </div>

          {/* Curated Specifications Hairline Bar */}
          <div className="dest-specs-strip">
            <div className="dest-spec-col">
              <span className="dest-spec-label">Prime Season &amp; Timing</span>
              <p className="dest-spec-val">{data.bestTime}</p>
            </div>
            <div className="dest-spec-divider"></div>
            <div className="dest-spec-col">
              <span className="dest-spec-label">Recommended Wilderness Stays</span>
              <p className="dest-spec-val">{data.stay}</p>
            </div>
          </div>

          {/* Signature Highlights Editorial Grid */}
          <div className="dest-highlights-editorial">
            <div className="dest-highlights-header">
              <span className="dest-highlights-title">Signature Wilderness Encounters</span>
              <span className="dest-highlights-rule"></span>
            </div>

            <div className="dest-highlights-list">
              {data.highlights.map((item, idx) => (
                <div key={idx} className="dest-highlight-entry">
                  <div className="dest-highlight-num">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="dest-highlight-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="dest-editorial-footer">
            <button type="button" className="dest-editorial-cta" onClick={handlePlanClick}>
              <span>Inquire &amp; Plan Itinerary for {data.name}</span>
              <ArrowRight size={16} />
            </button>
            <p className="dest-editorial-footnote">
              Curated directly with licensed Kenyan driver-guides &middot; No third-party markups
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
