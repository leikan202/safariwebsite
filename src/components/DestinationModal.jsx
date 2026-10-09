import React, { useState } from 'react';
import { X, MapPin, ArrowRight, Plane, Clock, ShieldCheck, Compass, Sparkles } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';

import imgMara from '../../assets/images/leonard-von-bibra-L4-BDd01wmM-unsplash.jpg';
import imgAmboseli from '../../assets/images/neil-and-zulma-scott-hjv3VO-jpnc-unsplash.jpg';
import imgNorthernKenya from '../../assets/images/polina-koroleva-36DSACYDey0-unsplash.jpg';
import imgDiani from '../../assets/images/ezekiel-kilimo-m_06_L3cKY0-unsplash.jpg';

const DESTINATION_DETAILS = {
  mara: {
    name: 'Maasai Mara National Reserve',
    location: 'Narok County, Kenya · Elevation 1,500m',
    tagline: 'The ancestral theater of the Great Migration and Africa’s densest predator territories.',
    image: imgMara,
    bestTime: 'July to October (River Crossings) & January–March (Lions & Calving)',
    stay: 'Angama Mara, Mara Plains, Governors’ IL Moran & Mara North Tented Bush Camps',
    overview: 'Spanning over 1,500 square kilometers, the Maasai Mara ecosystem is an untamed sanctuary of rolling savannah, acacia woodlands, and the life-giving Mara River. Beyond the core national reserve lie exclusive community-owned conservancies (Mara North, Olare Motorogi, and Naboisho) where strict vehicle limits and off-road tracking guarantee authentic wilderness solitude.',
    highlights: [
      { title: 'The Great Migration Crossings', desc: 'Over 1.5 million wildebeest and zebras navigating crocodile-filled Mara River currents.' },
      { title: 'Big Cat Coalitions', desc: 'Renowned Marsh and Topi lion prides, solitary leopards along riverine loops, and cheetah coalitions on the plains.' },
      { title: 'Indigenous Maasai Naturalists', desc: 'Interpretive tracking and cultural immersion guided by lifelong indigenous community guardians.' },
      { title: 'Dawn Hot Air Ballooning', desc: 'Silent morning flights across the Mara triangle followed by an open-savannah bush champagne breakfast.' }
    ],
    itineraries: [
      {
        title: '4-Day Mara Classic & Migration Trail',
        pace: 'Fly-In Safari · 4 Days / 3 Nights',
        route: 'Nairobi Wilson (WIL) → Mara Musiara Airstrip → Private Mara Conservancy → Nairobi',
        summary: 'Direct 45-minute scheduled bush flight into the heart of the Mara. Concentrated dawn and twilight predator stakeouts with private open-sided 4x4 safari cruiser and dedicated guide.'
      },
      {
        title: '7-Day Grand Savannah: Amboseli & Maasai Mara',
        pace: 'Classic Circuit · 7 Days / 6 Nights',
        route: 'Nairobi → Amboseli (Kilimanjaro herds) → Great Rift Valley → Maasai Mara',
        summary: 'A definitive Kenyan wildlife pairing: 3 nights beneath Kilimanjaro’s giant tuskers followed by 3 nights tracking big cats in the private Mara North conservancies.'
      }
    ],
    logistics: {
      flightTime: '45 mins scheduled flight from Nairobi Wilson Airport (WIL)',
      roadTransfer: '5 to 6 hours scenic private drive via the Great Rift Valley Escarpment',
      conservancies: 'Private conservancies allow off-road tracking, night game drives, and guided bush walks not permitted inside the public reserve.',
      packingTip: 'Neutral earth tones (khaki, olive, tan). Pack a warm fleece for 06:00 AM open-cruiser departures; daytime temperatures rise to 28°C.'
    }
  },
  amboseli: {
    name: 'Amboseli National Park',
    location: 'Kajiado County, Kenya · Mt. Kilimanjaro Foothills',
    tagline: 'Iconic snow-capped Kilimanjaro silhouettes framed by free-roaming giant elephant dynasties.',
    image: imgAmboseli,
    bestTime: 'June to October & January to February (Clear mountain vistas and dry pan crossings)',
    stay: 'Tortilis Camp, Ol Tukai Lodge, Amboseli Serena & Satao Elerai Conservancy',
    overview: 'Nestled directly in the northern shadow of Mount Kilimanjaro (Africa’s highest peak at 5,895m), Amboseli is celebrated worldwide for its ancient elephant populations, studied continuously for over 50 years. Underground meltwater springs from Kilimanjaro feed permanent green marshes (Enkongo Narok and Olokenya), drawing hippos, buffalo, pelicans, and waterbirds in striking contrast to the surrounding arid plains.',
    highlights: [
      { title: 'Kilimanjaro Sunrise Backdrops', desc: 'Crystal-clear early morning photography with Africa’s highest snow-capped peak dominating the horizon.' },
      { title: 'Ancient Big Tuskers', desc: 'Habituated multi-generational elephant herds featuring some of the continent’s last remaining super-tuskers.' },
      { title: 'Observation Hill Vantage', desc: 'Panoramic volcanic ridge lookout offering 360-degree vistas across active wetlands and dust-devil plains.' },
      { title: 'Wetland Bird Sanctuary', desc: 'Over 400 species including Goliath herons, African fish eagles, kingfishers, and migratory marsh fowl.' }
    ],
    itineraries: [
      {
        title: '3-Day Kilimanjaro Foothills & Giants',
        pace: 'Fly-In or 4x4 Road · 3 Days / 2 Nights',
        route: 'Nairobi → Amboseli Airstrip / Private Road → Ol Tukai / Tortilis → Nairobi',
        summary: 'Dedicated wetland game drives, sunset observation point sundowners, and intimate encounters with legendary elephant researchers and community scouts.'
      },
      {
        title: '6-Day Southern Wilderness: Amboseli & Tsavo West',
        pace: 'Expedition · 6 Days / 5 Nights',
        route: 'Nairobi → Amboseli → Chyulu Hills → Tsavo West (Mzima Springs & Shetani Lava Flow)',
        summary: 'Explore Kenya’s volcanic southern wilderness: giant tuskers, rhino sanctuaries, natural crystal-clear underwater hippo viewing pools, and dramatic black lava landscapes.'
      }
    ],
    logistics: {
      flightTime: '35 mins scheduled flight from Wilson Airport (WIL) to Amboseli Airstrip',
      roadTransfer: '3.5 to 4 hours scenic private drive south via Namanga / Emali highway',
      conservancies: 'Bordering Kitirua and Selenkay conservancies provide private wilderness walking safaris with local Maasai warriors.',
      packingTip: 'Dust protection for cameras (fine volcanic ash pans). 70-200mm lens is ideal for elephants framed against Kilimanjaro.'
    }
  },
  'northern-kenya': {
    name: 'Northern Kenya & Samburu',
    location: 'Samburu & Laikipia Plateau · Northern Frontier',
    tagline: 'A rugged, ancient wilderness frontier home to sacred mountains and endemic northern wildlife.',
    image: imgNorthernKenya,
    bestTime: 'Year-Round (Optimal dry game viewing June–October & December–March)',
    stay: 'Saruni Samburu, Sasaab, Segera Retreat, Lewa Wilderness & Ol Pejeta Bush Camp',
    overview: 'North of Mount Kenya lies one of Africa’s greatest conservation success stories. From the red-earth savannahs of Samburu and Buffalo Springs bisected by the Ewaso Ng’iro River, to the vast private conservancies of Laikipia and Lewa, this frontier offers unmatched wilderness privacy, black rhino sanctuaries, and rare desert-adapted species found nowhere else in southern East Africa.',
    highlights: [
      { title: 'The Samburu Special Five', desc: 'Gerenuk (giraffe gazelle), Grevy’s zebra, reticulated giraffe, beisa oryx, and the blue-shanked Somali ostrich.' },
      { title: 'Lewa & Ol Pejeta Rhino Solitude', desc: 'Home to the planet’s largest populations of endangered black rhinos and the world’s last remaining Northern White Rhinos.' },
      { title: 'Dramatic Sacred Landscapes', desc: 'Striking granite inselbergs, red-clay gorges, Mt. Ololokwe sacred monolith, and riverbank doum palms.' },
      { title: 'Walking & Camel Expeditions', desc: 'Tracking wildlife on foot with Samburu and Pokot trackers; open-night skies beneath the equator.' }
    ],
    itineraries: [
      {
        title: '5-Day Northern Frontier & Samburu Special Five',
        pace: 'Fly-In Safari · 5 Days / 4 Nights',
        route: 'Nairobi Wilson → Samburu Kalama Airstrip → Saruni / Sasaab → Nairobi',
        summary: 'Immersive exploration of the northern savannah: rock-climbing kopje sundowners, Ewaso Ng’iro river game tracking, and indigenous Samburu cultural lore.'
      },
      {
        title: '8-Day Conservation Trail: Laikipia, Lewa & Maasai Mara',
        pace: 'Sky Safari · 8 Days / 7 Nights',
        route: 'Nairobi → Lewa Wildlife Conservancy → Laikipia Plateau → Maasai Mara',
        summary: 'The ultimate luxury conservation journey: endangered rhino tracking, horseback safaris on private ranches, ending with the big cats of the Mara.'
      }
    ],
    logistics: {
      flightTime: '55 mins scheduled bush flight from Nairobi Wilson (WIL) to Samburu/Lewa airstrips',
      roadTransfer: '5 to 6 hours scenic drive passing Mt. Kenya and crossing the equator',
      conservancies: 'Community-led conservancies fund schools and healthcare while providing guests with completely crowd-free private wilderness.',
      packingTip: 'Light breathable linen during warm daytime hours; polariser filter for vibrant red-earth landscape contrast.'
    }
  },
  laikipia: {
    name: 'Northern Kenya & Samburu',
    location: 'Samburu & Laikipia Plateau · Northern Frontier',
    tagline: 'A rugged, ancient wilderness frontier home to sacred mountains and endemic northern wildlife.',
    image: imgNorthernKenya,
    bestTime: 'Year-Round (Optimal dry game viewing June–October & December–March)',
    stay: 'Saruni Samburu, Sasaab, Segera Retreat, Lewa Wilderness & Ol Pejeta Bush Camp',
    overview: 'North of Mount Kenya lies one of Africa’s greatest conservation success stories. From the red-earth savannahs of Samburu and Buffalo Springs bisected by the Ewaso Ng’iro River, to the vast private conservancies of Laikipia and Lewa, this frontier offers unmatched wilderness privacy, black rhino sanctuaries, and rare desert-adapted species found nowhere else in southern East Africa.',
    highlights: [
      { title: 'The Samburu Special Five', desc: 'Gerenuk (giraffe gazelle), Grevy’s zebra, reticulated giraffe, beisa oryx, and the blue-shanked Somali ostrich.' },
      { title: 'Lewa & Ol Pejeta Rhino Solitude', desc: 'Home to the planet’s largest populations of endangered black rhinos and the world’s last remaining Northern White Rhinos.' },
      { title: 'Dramatic Sacred Landscapes', desc: 'Striking granite inselbergs, red-clay gorges, Mt. Ololokwe sacred monolith, and riverbank doum palms.' },
      { title: 'Walking & Camel Expeditions', desc: 'Tracking wildlife on foot with Samburu and Pokot trackers; open-night skies beneath the equator.' }
    ],
    itineraries: [
      {
        title: '5-Day Northern Frontier & Samburu Special Five',
        pace: 'Fly-In Safari · 5 Days / 4 Nights',
        route: 'Nairobi Wilson → Samburu Kalama Airstrip → Saruni / Sasaab → Nairobi',
        summary: 'Immersive exploration of the northern savannah: rock-climbing kopje sundowners, Ewaso Ng’iro river game tracking, and indigenous Samburu cultural lore.'
      },
      {
        title: '8-Day Conservation Trail: Laikipia, Lewa & Maasai Mara',
        pace: 'Sky Safari · 8 Days / 7 Nights',
        route: 'Nairobi → Lewa Wildlife Conservancy → Laikipia Plateau → Maasai Mara',
        summary: 'The ultimate luxury conservation journey: endangered rhino tracking, horseback safaris on private ranches, ending with the big cats of the Mara.'
      }
    ],
    logistics: {
      flightTime: '55 mins scheduled bush flight from Nairobi Wilson (WIL) to Samburu/Lewa airstrips',
      roadTransfer: '5 to 6 hours scenic drive passing Mt. Kenya and crossing the equator',
      conservancies: 'Community-led conservancies fund schools and healthcare while providing guests with completely crowd-free private wilderness.',
      packingTip: 'Light breathable linen during warm daytime hours; polariser filter for vibrant red-earth landscape contrast.'
    }
  },
  diani: {
    name: 'Diani Beach & Coastal Reefs',
    location: 'Kwale County, Kenya · Indian Ocean Swahili Coast',
    tagline: 'Pristine powder-white sands, coral lagoon diving, and the timeless rhythm of the Swahili Coast.',
    image: imgDiani,
    bestTime: 'October to April (Warm turquoise sea waters, calm winds & optimal visibility)',
    stay: 'Alfajiri Villas, The Sands at Nomad, AfroChic Diani & WaterLovers Beach Resort',
    overview: 'Voted Africa’s leading beach destination for consecutive years, Diani Beach is the quintessential grand finale to an East African bush safari. Located 30 kilometers south of Mombasa, Diani’s dazzling white coral sand is protected by an offshore coral barrier reef, creating calm, crystal-clear turquoise lagoons ideal for swimming, kite surfing, and private dhow excursions.',
    highlights: [
      { title: 'Powder-White Sand & Warm Ocean', desc: 'Uninterrupted 17-kilometer stretch of soft coral beach kissed by the balmy waters of the Indian Ocean.' },
      { title: 'Kisite-Mpunguti Marine Safari', desc: 'Traditional wooden dhow cruise to marine parks for wild dolphin encounters and snorkeling alongside sea turtles.' },
      { title: 'Sunset Dhow & Seafood Swahili Dining', desc: 'Sailing along the coast with tamarind sundowners followed by freshly grilled Indian Ocean lobster.' },
      { title: 'Shimba Hills Coastal Rainforest', desc: 'Day excursion into coastal rainforest to track rare sable antelopes, forest elephants, and visit Sheldrick Falls.' }
    ],
    itineraries: [
      {
        title: '4-Day Post-Safari Coastal Reset',
        pace: 'Beach Escape · 4 Days / 3 Nights',
        route: 'Maasai Mara / Nairobi → Direct Flight to Ukunda Airstrip (UKA) → Diani Beach',
        summary: 'Seamless transfer directly from the bush airstrip to the beach. Unhurried beachfront barefoot luxury, private plunge pool relaxation, and coral reef excursions.'
      },
      {
        title: '10-Day Bush to Beach Signature Journey',
        pace: 'Classic Odyssey · 10 Days / 9 Nights',
        route: 'Nairobi → Amboseli (2N) → Maasai Mara (4N) → Diani Beach (3N)',
        summary: 'Enkop Safaris’ premier signature journey: Kilimanjaro giants, world-class big cat game drives, and effortless flight straight to Diani’s powder sands.'
      }
    ],
    logistics: {
      flightTime: '1 hour 10 mins direct flight from Maasai Mara or Nairobi Wilson to Ukunda Airstrip (UKA)',
      roadTransfer: 'Airstrip is just 10–15 minutes from premier Diani beachfront boutique villas',
      marineLife: 'Humpback whale migration passes through July–October; whale sharks spotted Nov–February.',
      packingTip: 'Casual resort wear, reef-safe mineral sunscreen, swimwear, and a light linen shirt for evening coastal breezes.'
    }
  }
};

export default function DestinationModal({ destId, onClose }) {
  const { openDrawer } = useTripBuilder();
  const [activeTab, setActiveTab] = useState('field-guide');

  if (!destId) return null;
  const data = DESTINATION_DETAILS[destId] || DESTINATION_DETAILS.mara;

  const handlePlanClick = (itineraryTitle) => {
    onClose();
    openDrawer(itineraryTitle || data.name);
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
          {/* Editorial Tab Switcher */}
          <div className="dest-editorial-tabs">
            <button
              type="button"
              className={`dest-tab-btn ${activeTab === 'field-guide' ? 'active' : ''}`}
              onClick={() => setActiveTab('field-guide')}
            >
              Field Guide &amp; Wildlife
            </button>
            <button
              type="button"
              className={`dest-tab-btn ${activeTab === 'itineraries' ? 'active' : ''}`}
              onClick={() => setActiveTab('itineraries')}
            >
              Sample Itineraries ({data.itineraries.length})
            </button>
            <button
              type="button"
              className={`dest-tab-btn ${activeTab === 'logistics' ? 'active' : ''}`}
              onClick={() => setActiveTab('logistics')}
            >
              Logistics &amp; Guide Notes
            </button>
          </div>

          {/* ====================================================
              TAB 1: FIELD GUIDE & WILDLIFE
              ==================================================== */}
          {activeTab === 'field-guide' && (
            <div className="dest-tab-content">
              <div className="dest-editorial-intro">
                <p className="dest-editorial-tagline">&ldquo;{data.tagline}&rdquo;</p>
                <p className="dest-editorial-narrative">{data.overview}</p>
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
            </div>
          )}

          {/* ====================================================
              TAB 2: SAMPLE ITINERARIES
              ==================================================== */}
          {activeTab === 'itineraries' && (
            <div className="dest-tab-content">
              <p className="dest-tab-subhead">
                Every journey is privately curated around your personal timing, pace, and preferred wilderness camps. Below are sample route blueprints designed by our licensed driver-guides:
              </p>

              <div className="dest-itineraries-list">
                {data.itineraries.map((itin, idx) => (
                  <div key={idx} className="dest-itinerary-card">
                    <div className="dest-itinerary-top">
                      <span className="dest-itinerary-pace">{itin.pace}</span>
                      <h4 className="dest-itinerary-title">{itin.title}</h4>
                    </div>
                    <p className="dest-itinerary-route">
                      <Compass size={14} style={{ color: 'var(--color-secondary)', flexShrink: 0 }} />
                      <span>{itin.route}</span>
                    </p>
                    <p className="dest-itinerary-summary">{itin.summary}</p>
                    <button
                      type="button"
                      className="dest-itinerary-btn"
                      onClick={() => handlePlanClick(`${data.name} — ${itin.title}`)}
                    >
                      <span>Inquire About This Route</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ====================================================
              TAB 3: LOGISTICS & GUIDE NOTES
              ==================================================== */}
          {activeTab === 'logistics' && (
            <div className="dest-tab-content">
              <div className="dest-logistics-grid">
                <div className="dest-logistics-item">
                  <div className="dest-logistics-icon-col">
                    <Plane size={18} style={{ color: 'var(--color-secondary)' }} />
                  </div>
                  <div>
                    <span className="dest-logistics-label">Bush Flight Access</span>
                    <p className="dest-logistics-val">{data.logistics.flightTime}</p>
                  </div>
                </div>

                <div className="dest-logistics-item">
                  <div className="dest-logistics-icon-col">
                    <Clock size={18} style={{ color: 'var(--color-secondary)' }} />
                  </div>
                  <div>
                    <span className="dest-logistics-label">4x4 Road Transfer</span>
                    <p className="dest-logistics-val">{data.logistics.roadTransfer}</p>
                  </div>
                </div>

                <div className="dest-logistics-item">
                  <div className="dest-logistics-icon-col">
                    <ShieldCheck size={18} style={{ color: 'var(--color-secondary)' }} />
                  </div>
                  <div>
                    <span className="dest-logistics-label">Private Conservancies vs National Reserve</span>
                    <p className="dest-logistics-val">{data.logistics.conservancies}</p>
                  </div>
                </div>

                <div className="dest-logistics-item">
                  <div className="dest-logistics-icon-col">
                    <Sparkles size={18} style={{ color: 'var(--color-secondary)' }} />
                  </div>
                  <div>
                    <span className="dest-logistics-label">Field Naturalist Gear &amp; Packing Advice</span>
                    <p className="dest-logistics-val">{data.logistics.packingTip}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="dest-editorial-footer">
            <button type="button" className="dest-editorial-cta" onClick={() => handlePlanClick(data.name)}>
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
