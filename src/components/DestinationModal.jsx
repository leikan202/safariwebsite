import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X, MapPin, ArrowRight, Plane, Clock, ShieldCheck, Compass, Sparkles,
  Check, Calendar, Car, Bed, Utensils, MessageSquare, Info
} from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';
import { DESTINATION_DETAILS, getDestination } from '../data/destinationsData';

export default function DestinationModal({ destId, onClose }) {
  const { openDrawer } = useTripBuilder();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('field-guide'); // 'field-guide' | 'logistics'

  useEffect(() => {
    if (destId) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, [destId]);

  if (!destId) return null;
  const data = getDestination(destId);

  const handleViewItineraries = () => {
    onClose();
    navigate(`/itineraries?destination=${destId}`);
  };

  const handlePlanClick = () => {
    onClose();
    openDrawer(data.name);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Enkop Safaris,\n\nI am reviewing ${data.name} on your website and would like to consult with a licensed Kenyan driver-guide regarding custom itineraries, availability, and rates.\n\nThank you!`
    );
    window.open(`https://wa.me/254718396228?text=${text}`, '_blank');
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

        {/* Editorial Body */}
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
              className={`dest-tab-btn ${activeTab === 'logistics' ? 'active' : ''}`}
              onClick={() => setActiveTab('logistics')}
            >
              Logistics &amp; Travel Notes
            </button>
          </div>

          {/* TAB 1: FIELD GUIDE & WILDLIFE */}
          {activeTab === 'field-guide' && (
            <div className="dest-tab-content">
              <div className="dest-editorial-intro">
                <p className="dest-editorial-tagline">&ldquo;{data.tagline}&rdquo;</p>
                <p className="dest-editorial-narrative">{data.overview}</p>
              </div>

              {/* Specifications Hairline Bar */}
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

              {/* Signature Highlights Grid */}
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

          {/* TAB 2: LOGISTICS & FIELD NOTES */}
          {activeTab === 'logistics' && (
            <div className="dest-tab-content">
              <div className="dest-logistics-box">
                <div className="dest-logistics-grid">
                  <div className="dest-logistics-item">
                    <span className="dest-logistics-label">
                      <Plane size={14} /> Flight Access
                    </span>
                    <p>{data.logistics?.flightTime || 'Scheduled bush flights from Nairobi Wilson Airport (WIL) directly into local dirt airstrips.'}</p>
                  </div>

                  <div className="dest-logistics-item">
                    <span className="dest-logistics-label">
                      <Car size={14} /> 4x4 Road Journey
                    </span>
                    <p>{data.logistics?.roadTransfer || 'Scenic overland safari transfer in our customized 4WD Toyota Land Cruiser with pop-up roof.'}</p>
                  </div>

                  <div className="dest-logistics-item">
                    <span className="dest-logistics-label">
                      <Compass size={14} /> Wildlife Seasonality
                    </span>
                    <p>{data.logistics?.marineLife || data.bestTime}</p>
                  </div>

                  <div className="dest-logistics-item">
                    <span className="dest-logistics-label">
                      <ShieldCheck size={14} /> Packing &amp; Bush Advice
                    </span>
                    <p>{data.logistics?.packingTip || 'Neutral safari clothing (khaki/green), UV sun hat, high SPF sunscreen, binoculars, and telephoto lens.'}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PROMINENT ITINERARY ACTION CALLOUT (Takes user to dedicated Itineraries Page) */}
          <div className="dest-modal-itin-callout">
            <div className="dest-modal-itin-callout-text">
              <span className="dest-modal-itin-badge">
                <Sparkles size={12} />
                <span>{data.itineraries?.length || 1} Curated Safari Circuits</span>
              </span>
              <h3 className="dest-modal-itin-headline">
                View Safari Itineraries for {data.name}
              </h3>
              <p className="dest-modal-itin-sub">
                Explore complete day-by-day schedules, wildlife tracking routes, luxury tented camps, and transparent rates on our dedicated itineraries page.
              </p>
            </div>

            <div className="dest-modal-itin-callout-actions">
              <button
                type="button"
                className="dest-modal-view-itin-btn"
                onClick={handleViewItineraries}
              >
                <span>View Itineraries</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Footer Quick Actions */}
          <div className="dest-editorial-cta-bar">
            <button
              type="button"
              className="dest-editorial-primary-btn"
              onClick={handlePlanClick}
            >
              <span>Plan Custom Journey</span>
              <ArrowRight size={14} />
            </button>
            <button
              type="button"
              className="dest-editorial-wa-btn"
              onClick={handleWhatsAppInquiry}
            >
              <MessageSquare size={14} />
              <span>Inquire on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
