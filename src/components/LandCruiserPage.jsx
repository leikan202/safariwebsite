import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageSquare, Check, Shield, Camera, Users, Zap, Compass, Radio } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';
import deniceAlexImg from '../../assets/images/denice-alex-rlr0oaz2nZQ-unsplash.jpg';

export default function LandCruiserPage() {
  const { openDrawer } = useTripBuilder();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Enkop Safaris,\n\nI was reviewing your custom 4x4 Safari Land Cruiser fleet on your website and would like to inquire about booking a private safari journey.\n\nThank you!`
    );
    window.open(`https://wa.me/254718396228?text=${text}`, '_blank');
  };

  const fleetFeatures = [
    {
      icon: Camera,
      title: '360° Pop-Up Game Viewing Roof',
      desc: 'Heavy-duty canvas roof hatch elevates on smooth gas struts, allowing passengers to stand upright with unobstructed 360-degree panoramic sightlines. Provides steady camera rests and clear viewing across tall savannah grass.'
    },
    {
      icon: Users,
      title: 'Guaranteed Window Seating (Max 6 Guests)',
      desc: 'Configured strictly for a maximum of 6 travelers per vehicle—never middle seats. Every guest has an open window, wide sliding glass panels, and dedicated space for daypacks and telephoto lenses.'
    },
    {
      icon: Zap,
      title: '220V Inverter & USB Device Charging',
      desc: 'Dual auxiliary battery systems and onboard 220V power points allow you to recharge DSLR/mirrorless camera batteries, phones, and devices during full-day game drives without returning to camp.'
    },
    {
      icon: Compass,
      title: 'Insulated Bush Cool Box',
      desc: 'An onboard insulated cooler keeps bottled mineral water and refreshments chilled throughout dusty morning and afternoon game drives in warm savannah climates.'
    },
    {
      icon: Shield,
      title: 'Heavy-Duty 4WD Off-Road Build',
      desc: 'Fitted with heavy-duty coil suspension, high ground clearance, snorkel air intakes, and dual spare tires built to navigate rough murram tracks, rocky escarpments, and wet-season mud.'
    },
    {
      icon: Radio,
      title: 'Two-Way Long-Range VHF Radio',
      desc: 'High-frequency two-way VHF communication radios connect our driver-guides with other guides and Kenya Wildlife Service (KWS) rangers for real-time wildlife tracking and wilderness safety.'
    }
  ];

  const comparisonPoints = [
    {
      aspect: 'Traction & Mud Capability',
      cruiser: 'True 4WD with locking differentials; powers through deep ruts, black-cotton soil, and seasonal rains without getting stuck.',
      van: 'Limited 2WD/AWD traction; frequently bogged down in wet season mud and riverbeds.'
    },
    {
      aspect: 'Viewing Vantage & Photography',
      cruiser: 'Elevated seating and higher roof hatch give superior sightlines over tall grass and predator stalking action.',
      van: 'Lower seating position makes spotting low-lying wildlife in tall grass difficult.'
    },
    {
      aspect: 'Ride Comfort on Rough Roads',
      cruiser: 'Heavy-duty off-road suspension absorbs harsh corrugations and potholes on rough park roads.',
      van: 'Stiffer commercial van suspension results in a bumpy, fatiguing ride on unpaved murram roads.'
    },
    {
      aspect: 'Guest Capacity & Space',
      cruiser: 'Strictly capped at 6 window seats per vehicle. Ample legroom and dedicated gear storage.',
      van: 'Often loaded with 7–9 passengers, forcing middle seating with restricted views.'
    }
  ];

  return (
    <article className="cruiser-fleet-page">
      {/* Top Navigation */}
      <div className="cruiser-page-topbar">
        <div className="container">
          <Link to="/" className="cruiser-back-fleet-link">
            <ArrowLeft size={14} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>

      <main className="container cruiser-fleet-container">
        {/* Header Block */}
        <header className="cruiser-fleet-header">
          <p className="cruiser-fleet-kicker">ENKOP SAFARIS &middot; EXPEDITION FLEET</p>
          <h1 className="cruiser-fleet-title">Custom 4x4 Safari Land Cruisers</h1>
          <p className="cruiser-fleet-lead">
            Purpose-built for Kenya's national parks, savannah reserves, and rough wilderness tracks. Every private safari with Enkop is conducted exclusively in our custom 4WD Toyota Land Cruisers.
          </p>
        </header>

        {/* Hero Photo Frame with User's Photo */}
        <figure className="cruiser-fleet-figure">
          <div className="cruiser-fleet-image-frame">
            <img
              src={deniceAlexImg}
              alt="Enkop Safaris custom 4x4 Toyota Land Cruiser with 360-degree pop-up roof on safari in Kenya"
              className="cruiser-fleet-hero-img"
              loading="eager"
            />
          </div>
          <figcaption className="cruiser-fleet-caption">
            <span>Enkop Safaris Expedition Fleet</span> &middot; Custom 4WD Toyota Land Cruiser with 360&deg; Pop-Up Photography Roof on game drive in Kenya
          </figcaption>
        </figure>

        {/* Vehicle Overview Section */}
        <section className="cruiser-overview-section">
          <div className="cruiser-overview-box">
            <p className="cruiser-overview-text">
              In East Africa’s premier wildlife sanctuaries—from the plains of the Maasai Mara to the rugged terrain of Samburu and Amboseli—game viewing takes place almost entirely from your vehicle. Rough corrugated tracks, muddy river crossings, and unpredictable weather demand a dependable, rugged, and specially modified vehicle.
            </p>
            <p className="cruiser-overview-text">
              Our fleet of customized Toyota Land Cruisers is engineered specifically to meet these demanding bush conditions, delivering quiet reliability, unrestricted sightlines, and unmatched passenger comfort.
            </p>
          </div>
        </section>

        {/* 6 Key Specifications & Features Grid */}
        <section className="cruiser-specs-section">
          <div className="cruiser-section-heading">
            <p className="section-label">FLEET SPECIFICATIONS</p>
            <h2 className="split-headline">Built for the African Wilderness</h2>
          </div>

          <div className="cruiser-specs-grid">
            {fleetFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div key={idx} className="cruiser-spec-card">
                  <div className="cruiser-spec-icon-wrap">
                    <IconComp size={22} color="var(--color-secondary)" />
                  </div>
                  <h3 className="cruiser-spec-title">{feat.title}</h3>
                  <p className="cruiser-spec-desc">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4x4 Land Cruiser vs Safari Minivan Comparison */}
        <section className="cruiser-comparison-section">
          <div className="cruiser-section-heading">
            <p className="section-label">VEHICLE COMPARISON</p>
            <h2 className="split-headline">4x4 Land Cruiser vs. Safari Minivan</h2>
            <p className="cruiser-comparison-sub">
              Many budget operators use standard minivans (tour vans) to reduce costs. Here is why Enkop Safaris operates exclusively with custom 4x4 Land Cruisers:
            </p>
          </div>

          <div className="cruiser-comparison-table-wrap">
            <div className="cruiser-comparison-header-row">
              <div className="comp-col-aspect">Feature / Capability</div>
              <div className="comp-col-cruiser">Enkop 4x4 Safari Land Cruiser</div>
              <div className="comp-col-van">Standard Safari Minivan</div>
            </div>

            {comparisonPoints.map((row, idx) => (
              <div key={idx} className="cruiser-comparison-row">
                <div className="comp-col-aspect font-semibold">{row.aspect}</div>
                <div className="comp-col-cruiser">
                  <span className="comp-status-badge comp-badge-positive">
                    <Check size={13} />
                    <span>Included</span>
                  </span>
                  <p>{row.cruiser}</p>
                </div>
                <div className="comp-col-van">
                  <span className="comp-status-badge comp-badge-caution">
                    <span>Minivan Limitation</span>
                  </span>
                  <p>{row.van}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Professional Guide Behind the Wheel */}
        <section className="cruiser-guide-section">
          <div className="cruiser-guide-card">
            <p className="section-label">EXPERT NATURALISTS</p>
            <h3 className="cruiser-guide-title">The Guide Behind the Wheel</h3>
            <p className="cruiser-guide-body">
              A high-performance vehicle is only as good as the guide behind the wheel. All Enkop Safaris game drives are led by licensed Kenyan driver-guides certified by the <strong>Kenya Professional Safari Guides Association (KPSGA)</strong>.
            </p>
            <p className="cruiser-guide-body">
              With decades of combined experience in bush tracking, wildlife behavior, birding, and off-road driving, our naturalists know how to angle the vehicle for the ideal photographic light, anticipate animal movements, and ensure a safe, deeply informative safari experience.
            </p>
          </div>
        </section>

        {/* Professional Call-to-Action */}
        <footer className="cruiser-fleet-cta-box">
          <p className="cta-kicker">START PLANNING</p>
          <h2 className="cta-headline">Experience Kenya in our custom 4x4 Land Cruisers</h2>
          <p className="cta-lead">
            Every itinerary is tailored to your dates, group size, and wildlife preferences.
          </p>
          <div className="cta-actions">
            <button
              type="button"
              className="cruiser-cta-primary-btn"
              onClick={() => openDrawer('Custom 4x4 Safari Experience')}
            >
              <span>Plan Your Private Safari</span>
              <ArrowRight size={14} />
            </button>
            <button
              type="button"
              className="cruiser-cta-secondary-btn"
              onClick={handleWhatsApp}
            >
              <MessageSquare size={14} />
              <span>Consult on WhatsApp</span>
            </button>
          </div>
        </footer>
      </main>
    </article>
  );
}
