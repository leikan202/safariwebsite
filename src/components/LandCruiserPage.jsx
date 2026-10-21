import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Camera, Zap, Shield, MessageSquare } from 'lucide-react';
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

  return (
    <div className="cruiser-custom-page">
      <div className="cruiser-page-wrapper">
        
        {/* Top Header / Breadcrumb Area */}
        <header className="cruiser-editorial-header">
          <p className="cruiser-sub-kicker">EXPEDITION FLEET</p>
          <h1 className="cruiser-main-title">The Savannah Observation Base</h1>
          <p className="cruiser-main-subtitle">
            Custom 4WD Land Cruisers engineered for remote East Africa and unhurried wildlife photography.
          </p>

          {/* 4 Feature Badges Strip */}
          <div className="cruiser-badge-strip">
            <div className="cruiser-badge-item">
              <Users size={14} className="cruiser-badge-icon" />
              <span>Strictly 6 Window Seats</span>
            </div>
            <div className="cruiser-badge-item">
              <Camera size={14} className="cruiser-badge-icon" />
              <span>360&deg; Photo Roof</span>
            </div>
            <div className="cruiser-badge-item">
              <Zap size={14} className="cruiser-badge-icon" />
              <span>220V Inverter</span>
            </div>
            <div className="cruiser-badge-item">
              <Shield size={14} className="cruiser-badge-icon" />
              <span>KPSGA Naturalists</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="cruiser-header-buttons">
            <button
              type="button"
              className="cruiser-btn-dark"
              onClick={() => openDrawer('Custom 4x4 Safari Experience')}
            >
              Plan Private Safari
            </button>
            <button
              type="button"
              className="cruiser-btn-outline"
              onClick={handleWhatsApp}
            >
              <MessageSquare size={14} />
              <span>WhatsApp Inquiries</span>
            </button>
          </div>
        </header>

        {/* Hero Photo Frame with Floating Badge */}
        <div className="cruiser-photo-stage">
          <div className="cruiser-photo-frame">
            <img
              src={deniceAlexImg}
              alt="Enkop Safaris custom 4WD Toyota Land Cruiser with open pop-up roof in the Maasai Mara"
              className="cruiser-stage-img"
              loading="eager"
            />
            <div className="cruiser-photo-caption-badge">
              Custom High-Clearance Expedition Cruiser &middot; Maasai Mara
            </div>
          </div>
        </div>

        {/* SECTION 1: Purpose-Built Specifications */}
        <section className="cruiser-editorial-section">
          <div className="cruiser-section-label-block">
            <p className="cruiser-label-kicker">ENGINEERING</p>
            <h2 className="cruiser-section-headline">Purpose-Built Specifications</h2>
          </div>

          <div className="cruiser-specs-matrix">
            <div className="cruiser-spec-box">
              <span className="spec-code">01 / ROOF ELEVATION</span>
              <h3 className="spec-title">360&deg; Photo Hatch</h3>
              <p className="spec-detail">
                Gas-strut elevated roof with steady rests for telephoto glass.
              </p>
            </div>

            <div className="cruiser-spec-box">
              <span className="spec-code">02 / INTERIOR SANCTUARY</span>
              <h3 className="spec-title">Six Window Seats</h3>
              <p className="spec-detail">
                Guaranteed private window seat for every traveler; zero middle seating.
              </p>
            </div>

            <div className="cruiser-spec-box">
              <span className="spec-code">03 / CONTINUOUS CHARGING</span>
              <h3 className="spec-title">In-Drive Power</h3>
              <p className="spec-detail">
                220V continuous inverter and USB bays for full-day camera charging.
              </p>
            </div>

            <div className="cruiser-spec-box">
              <span className="spec-code">04 / REFRESHMENT</span>
              <h3 className="spec-title">Insulated Cool Box</h3>
              <p className="spec-detail">
                Chilled spring water and bush refreshments throughout game drives.
              </p>
            </div>

            <div className="cruiser-spec-box">
              <span className="spec-code">05 / OFF-ROAD REINFORCEMENT</span>
              <h3 className="spec-title">Heavy-Duty Chassis</h3>
              <p className="spec-detail">
                High ground clearance, heavy-duty suspension, dual spares, and snorkel.
              </p>
            </div>

            <div className="cruiser-spec-box">
              <span className="spec-code">06 / TELEMETRY</span>
              <h3 className="spec-title">VHF Telemetry</h3>
              <p className="spec-detail">
                Dedicated radio link to ranger stations and field spotters.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Why 4x4 Matters in the Bush */}
        <section className="cruiser-editorial-section">
          <div className="cruiser-section-label-block">
            <p className="cruiser-label-kicker">FIELD DISTINCTION</p>
            <h2 className="cruiser-section-headline">Why 4x4 Matters in the Bush</h2>
          </div>

          <div className="cruiser-rows-matrix">
            {/* Row 1 */}
            <div className="cruiser-distinction-row">
              <div className="dist-col-aspect">
                <span className="dist-code">01 / CAPABILITY</span>
                <h3 className="dist-title">Terrain Access</h3>
              </div>
              <div className="dist-col-cruiser">
                <span className="dist-brand-tag">ENKOP 4X4 CRUISER</span>
                <p>True 4WD, snorkel &amp; locking diffs master black-cotton mud.</p>
              </div>
              <div className="dist-col-van">
                <span className="dist-van-tag">STANDARD MINIVAN</span>
                <p>2WD; stuck on main gravel routes.</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="cruiser-distinction-row">
              <div className="dist-col-aspect">
                <span className="dist-code">02 / VANTAGE</span>
                <h3 className="dist-title">Sightlines</h3>
              </div>
              <div className="dist-col-cruiser">
                <span className="dist-brand-tag">ENKOP 4X4 CRUISER</span>
                <p>Elevated chassis &amp; 360&deg; standing hatch clear tall grass.</p>
              </div>
              <div className="dist-col-van">
                <span className="dist-van-tag">STANDARD MINIVAN</span>
                <p>Low sightlines obscured by brush.</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="cruiser-distinction-row">
              <div className="dist-col-aspect">
                <span className="dist-code">03 / EXCLUSIVITY</span>
                <h3 className="dist-title">Comfort &amp; Space</h3>
              </div>
              <div className="dist-col-cruiser">
                <span className="dist-brand-tag">ENKOP 4X4 CRUISER</span>
                <p>Strictly 6 guests; dedicated camera pack room.</p>
              </div>
              <div className="dist-col-van">
                <span className="dist-van-tag">STANDARD MINIVAN</span>
                <p>Crowded 7–9 seats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: The Naturalist Quote */}
        <section className="cruiser-quote-section">
          <p className="cruiser-quote-kicker">THE NATURALIST BEHIND THE WHEEL</p>
          <blockquote className="cruiser-quote-text">
            &ldquo;A bespoke vehicle takes you into the wild; an expert naturalist brings that wilderness to life.&rdquo;
          </blockquote>
          <p className="cruiser-quote-creds">
            GENERATIONAL BUSH TRACKING &middot; PHOTOGRAPHIC ANGLING &middot; KPSGA CERTIFIED
          </p>
        </section>

        {/* SECTION 4: Pre-Footer CTA Card */}
        <section className="cruiser-banner-cta">
          <div className="cruiser-banner-left">
            <p className="cruiser-banner-kicker">UNHURRIED EAST AFRICA</p>
            <h2 className="cruiser-banner-title">
              Experience Kenya in our custom 4x4 Land Cruisers
            </h2>
          </div>
          <div className="cruiser-banner-right">
            <button
              type="button"
              className="cruiser-banner-btn"
              onClick={() => openDrawer('Custom 4x4 Safari Experience')}
            >
              Plan Your Private Safari
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
