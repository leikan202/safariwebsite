import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, MessageSquare, Clock, MapPin, Check, X as CloseIcon,
  ChevronDown, ChevronUp, Calendar, Car, Bed, Utensils, Info, ShieldCheck, Sparkles
} from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';
import { DESTINATION_DETAILS } from '../data/destinationsData';
import SEO from './SEO';

export default function ItinerariesPage() {
  const { openDrawer } = useTripBuilder();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialDest = searchParams.get('destination') || 'all';

  const [activeFilter, setActiveFilter] = useState(initialDest);
  const [expandedDays, setExpandedDays] = useState({});
  const [activeItinId, setActiveItinId] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const destParam = searchParams.get('destination');
    if (destParam && DESTINATION_DETAILS[destParam]) {
      setActiveFilter(destParam);
    }
  }, [searchParams]);

  // Gather all itineraries
  const allItineraries = [];
  Object.keys(DESTINATION_DETAILS).forEach(key => {
    const d = DESTINATION_DETAILS[key];
    if (d.itineraries) {
      d.itineraries.forEach(itin => {
        allItineraries.push({
          ...itin,
          destKey: key,
          destName: d.name,
          destImage: d.image,
          destLocation: d.location
        });
      });
    }
  });

  const filteredItineraries = activeFilter === 'all'
    ? allItineraries
    : allItineraries.filter(it => it.destKey === activeFilter);

  const handleFilterClick = (key) => {
    setActiveFilter(key);
    if (key === 'all') {
      searchParams.delete('destination');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ destination: key });
    }
  };

  const toggleDay = (itId, dayNum) => {
    const key = `${itId}-day-${dayNum}`;
    setExpandedDays(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePlanSafari = (itinTitle) => {
    openDrawer(itinTitle);
  };

  const handleWhatsApp = (itin) => {
    const text = encodeURIComponent(
      `Hello Enkop Safaris,\n\nI am reviewing your "${itin.title}" (${itin.duration}) on your website and would like to check availability, private 4x4 vehicle rates, and custom dates.\n\nThank you!`
    );
    window.open(`https://wa.me/254718396228?text=${text}`, '_blank');
  };

  return (
    <article className="itineraries-page">
      <SEO
        title="Curated Kenya Safari Circuits & Itineraries"
        description="Explore handcrafted Kenya safari circuits: Maasai Mara Big Cats, Amboseli Elephants under Kilimanjaro, Samburu Special Five & Diani Coast. Fully customizable private 4x4 journeys."
        keywords="Kenya safari itineraries, Maasai Mara 4-day safari, Amboseli safari package, Samburu safari circuit, Kenya 4x4 safari tours"
        canonical="https://safaridirectkenya.com/itineraries"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Curated Itineraries', item: '/itineraries' }
        ]}
      />

      {/* Top Breadcrumb Bar */}
      <div className="itineraries-topbar">
        <div className="container">
          <Link to="/" className="itineraries-back-link">
            <ArrowLeft size={14} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>

      <main className="container itineraries-container">
        {/* Editorial Header */}
        <header className="itineraries-header reveal-up">
          <p className="itineraries-kicker">KENYA SAFARI ITINERARIES &middot; PRIVATE 4X4 EXPEDITIONS</p>
          <h1 className="itineraries-title">Curated Safari Circuits</h1>
          <p className="itineraries-lead">
            Private expeditions in custom 4WD Land Cruisers led by licensed Kenyan naturalists. Fully customizable pacing and dates.
          </p>
        </header>

        {/* Destination Filter Tabs */}
        <div className="itineraries-filter-strip">
          <span className="filter-label">Filter by Region:</span>
          <div className="filter-pills">
            <button
              type="button"
              className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All Circuits ({allItineraries.length})
            </button>
            <button
              type="button"
              className={`filter-pill ${activeFilter === 'mara' ? 'active' : ''}`}
              onClick={() => handleFilterClick('mara')}
            >
              Maasai Mara
            </button>
            <button
              type="button"
              className={`filter-pill ${activeFilter === 'amboseli' ? 'active' : ''}`}
              onClick={() => handleFilterClick('amboseli')}
            >
              Amboseli
            </button>
            <button
              type="button"
              className={`filter-pill ${activeFilter === 'northern-kenya' ? 'active' : ''}`}
              onClick={() => handleFilterClick('northern-kenya')}
            >
              Northern Kenya &amp; Samburu
            </button>
            <button
              type="button"
              className={`filter-pill ${activeFilter === 'diani' ? 'active' : ''}`}
              onClick={() => handleFilterClick('diani')}
            >
              Diani &amp; Coast
            </button>
          </div>
        </div>

        {/* Itinerary Cards List */}
        <div className="itineraries-list">
          {filteredItineraries.map((itin) => {
            const isExpanded = activeItinId === itin.id;

            return (
            <section key={itin.id} className="itin-card-block" id={itin.id}>
              {!isExpanded ? (
                <div className="itin-compact-view">
                  <div className="itin-compact-image" style={{ backgroundImage: `url(${itin.image || itin.destImage})` }}></div>
                  <div className="itin-compact-content">
                    <div className="itin-card-badges">
                      <span className="itin-badge-highlight">{itin.badge}</span>
                      <span className="itin-badge-duration">
                        <Clock size={12} />
                        {itin.duration}
                      </span>
                      <span className="itin-badge-dest">{itin.destName}</span>
                    </div>
                    <h2 className="itin-card-title">{itin.title}</h2>
                    <p className="itin-card-tagline">&ldquo;{itin.tagline}&rdquo;</p>
                    <p className="itin-compact-desc">{itin.tourType} &middot; {itin.comfort} &middot; {itin.vehicle}</p>
                    
                    <div className="itin-compact-footer">
                      <div className="itin-price-box">
                        <span className="itin-price-label">Starting From</span>
                        <span className="itin-price-value">{itin.priceGuide}</span>
                      </div>
                      <button
                        type="button"
                        className="itin-btn-primary"
                        onClick={() => {
                          setActiveItinId(itin.id);
                          setActiveTab('overview');
                          setTimeout(() => {
                            document.getElementById(itin.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }, 100);
                        }}
                      >
                        <span>View Full Itinerary</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Card Header Banner */}
                  <div className="itin-card-header">
                <div className="itin-card-header-left">
                  <div className="itin-card-badges">
                    <span className="itin-badge-highlight">{itin.badge}</span>
                    <span className="itin-badge-duration">
                      <Clock size={12} />
                      {itin.duration}
                    </span>
                    <span className="itin-badge-dest">{itin.destName}</span>
                  </div>
                  <h2 className="itin-card-title">{itin.title}</h2>
                  <p className="itin-card-tagline">&ldquo;{itin.tagline}&rdquo;</p>
                </div>

                <div className="itin-card-header-right">
                  <div className="itin-price-box">
                    <span className="itin-price-label">Private Safari Guide</span>
                    <span className="itin-price-value">{itin.priceGuide}</span>
                    <span className="itin-price-note">All-inclusive 4x4 Land Cruiser &amp; Lodges</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                    <button
                      type="button"
                      className="itin-header-cta-btn"
                      onClick={() => handlePlanSafari(itin.title)}
                    >
                      <span>Book Safari</span>
                      <ArrowRight size={13} />
                    </button>
                    <button
                      type="button"
                      className="itin-btn-wa"
                      style={{ padding: '8px 16px', fontSize: '0.65rem' }}
                      onClick={() => {
                        setActiveItinId(null);
                        setTimeout(() => {
                          document.getElementById(itin.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 100);
                      }}
                    >
                      <CloseIcon size={12} />
                      <span>Close Details</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Tabs Nav */}
              <div className="itin-tabs-nav">
                <button
                  className={`itin-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview & Route
                </button>
                <button
                  className={`itin-tab-btn ${activeTab === 'itinerary' ? 'active' : ''}`}
                  onClick={() => setActiveTab('itinerary')}
                >
                  Day-by-Day Schedule
                </button>
                <button
                  className={`itin-tab-btn ${activeTab === 'policies' ? 'active' : ''}`}
                  onClick={() => setActiveTab('policies')}
                >
                  Rates & Policies
                </button>
              </div>

              <div className="itin-tab-content">
                {activeTab === 'overview' && (
                  <>
              {/* Fast Specs Strip */}
              <div className="itin-specs-strip">
                <div className="itin-spec-item">
                  <span className="spec-label">Travel Style</span>
                  <p className="spec-val">{itin.tourType}</p>
                </div>
                <div className="itin-spec-divider"></div>
                <div className="itin-spec-item">
                  <span className="spec-label">Expedition Vehicle</span>
                  <p className="spec-val">{itin.vehicle}</p>
                </div>
                <div className="itin-spec-divider"></div>
                <div className="itin-spec-item">
                  <span className="spec-label">Wilderness Comfort</span>
                  <p className="spec-val">{itin.comfort}</p>
                </div>
                <div className="itin-spec-divider"></div>
                <div className="itin-spec-item">
                  <span className="spec-label">Routing</span>
                  <p className="spec-val">{itin.startLocation} &rarr; {itin.endLocation}</p>
                </div>
              </div>

              {/* Route Stops Ribbon */}
              <div className="itin-route-ribbon">
                <span className="route-ribbon-label">Circuit Route:</span>
                <div className="route-ribbon-stops">
                  {itin.routeStops.map((stop, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="route-stop-pill">{stop}</span>
                      {sIdx < itin.routeStops.length - 1 && (
                        <span className="route-stop-arrow">&rarr;</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Highlights Box */}
              <div className="itin-highlights-box">
                <span className="itin-highlights-title">Itinerary Highlights</span>
                <ul className="itin-highlights-grid">
                  {itin.highlights.map((hl, hIdx) => (
                    <li key={hIdx}>
                      <Check size={14} className="hl-check-icon" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
                  </>
                )}

                {activeTab === 'itinerary' && (
                  <>
              {/* Interactive Day-by-Day Timeline */}
              <div className="itin-timeline-wrap">
                <div className="itin-timeline-head">
                  <h3 className="timeline-section-title">Day-by-Day Safari Schedule</h3>
                  <span className="timeline-subtitle">Click any day to expand or collapse details</span>
                </div>

                <div className="itin-days-accordion">
                  {itin.days.map((day) => {
                    const dayKey = `${itin.id}-day-${day.dayNumber}`;
                    const isExpanded = expandedDays[dayKey] !== undefined ? expandedDays[dayKey] : day.dayNumber === 1;

                    return (
                      <div
                        key={day.dayNumber}
                        className={`timeline-day-card ${isExpanded ? 'expanded' : 'collapsed'}`}
                      >
                        <div
                          className="timeline-day-header"
                          onClick={() => toggleDay(itin.id, day.dayNumber)}
                        >
                          <div className="timeline-day-badge">
                            Day {day.dayNumber}
                          </div>
                          <div className="timeline-day-title-wrap">
                            <h4 className="timeline-day-title">{day.title}</h4>
                            <span className="timeline-day-transfer">
                              <Car size={13} /> {day.transfer}
                            </span>
                          </div>
                          <div className="timeline-day-toggle">
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </div>
                        </div>

                        {isExpanded && (
                          <div className="timeline-day-body">
                            <p className="timeline-day-narrative">{day.narrative}</p>

                            {/* Wildlife Spotting Pills */}
                            {day.wildlife && day.wildlife.length > 0 && (
                              <div className="timeline-wildlife-row">
                                <span className="wildlife-label">Tracking Focus:</span>
                                <div className="wildlife-pills">
                                  {day.wildlife.map((w, wIdx) => (
                                    <span key={wIdx} className="wildlife-pill">{w}</span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Day Logistics Strip */}
                            <div className="timeline-day-meta-grid">
                              <div className="day-meta-cell">
                                <span className="meta-cell-label"><Calendar size={12} /> Activities:</span>
                                <p>{day.activities}</p>
                              </div>
                              <div className="day-meta-cell">
                                <span className="meta-cell-label"><Bed size={12} /> Accommodation:</span>
                                <p>{day.accommodation}</p>
                              </div>
                              <div className="day-meta-cell">
                                <span className="meta-cell-label"><Utensils size={12} /> Meals &amp; Refreshments:</span>
                                <p>{day.meals}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
                  </>
                )}

                {activeTab === 'policies' && (
                  <>
              {/* Inclusions & Exclusions */}
              {itin.inclusions && itin.exclusions && (
                <div className="itin-policy-grid">
                  <div className="itin-policy-col inclusions-col">
                    <div className="policy-col-header">
                      <Check size={14} className="policy-icon-check" />
                      <h4>Safari Inclusions</h4>
                    </div>
                    <ul className="policy-list">
                      {itin.inclusions.map((inc, iIdx) => (
                        <li key={iIdx}>
                          <Check size={12} />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="itin-policy-col exclusions-col">
                    <div className="policy-col-header">
                      <CloseIcon size={14} className="policy-icon-x" />
                      <h4>Excluded / Optional</h4>
                    </div>
                    <ul className="policy-list">
                      {itin.exclusions.map((exc, eIdx) => (
                        <li key={eIdx}>
                          <span>&times;</span>
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
                  </>
                )}
              </div>

              {/* Action Bar */}
              <div className="itin-card-footer">
                <div className="itin-footer-left">
                  <span className="itin-footer-support">
                    <ShieldCheck size={16} /> Licensed Kenyan Operator &middot; 100% Private 4x4 Safaris
                  </span>
                </div>
                <div className="itin-footer-actions">
                  <button
                    type="button"
                    className="itin-btn-primary"
                    onClick={() => handlePlanSafari(itin.title)}
                  >
                    <span>Plan This Itinerary</span>
                    <ArrowRight size={14} />
                  </button>
                  <button
                    type="button"
                    className="itin-btn-wa"
                    onClick={() => handleWhatsApp(itin)}
                  >
                    <MessageSquare size={14} />
                    <span>Inquire on WhatsApp</span>
                  </button>
                </div>
              </div>
              </>
              )}
            </section>
            );
          })}
        </div>
      </main>
    </article>
  );
}
