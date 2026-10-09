import React, { useState } from 'react';
import { X, Send, MapPin, Compass, Check, Calendar, Users, MessageSquare, ChevronDown } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';
import SafariCalendarPicker from './SafariCalendarPicker';

const COUNTRY_OPTIONS = [
  { id: 'Kenya', label: 'Kenya', desc: 'Maasai Mara, Amboseli, Samburu & Coast' },
  { id: 'Tanzania', label: 'Tanzania', desc: 'Serengeti, Ngorongoro, Tarangire & Zanzibar' },
  { id: 'Kenya & Tanzania Combined', label: 'Kenya & Tanzania (Combined)', desc: 'The Ultimate East Africa Wildlife Odyssey' },
  { id: 'Uganda', label: 'Uganda', desc: 'Bwindi Impenetrable Gorillas & Queen Elizabeth NP' },
  { id: 'Rwanda', label: 'Rwanda', desc: 'Volcanoes National Park & Nyungwe Forest' }
];

const POPULAR_PLACES = [
  'Maasai Mara',
  'Amboseli (Mt. Kilimanjaro)',
  'Lake Naivasha',
  'Lake Nakuru',
  'Serengeti National Park',
  'Ngorongoro Crater',
  'Samburu & Northern Kenya',
  'Tsavo East & West',
  'Diani Beach (Coast)',
  'Zanzibar Island',
  'Tarangire National Park',
  'Open to Guide Recommendations'
];

const ITINERARY_STYLES = [
  'Classic Wildlife & Big Five',
  'Great Migration Focus',
  'Honeymoon & Romantic Escape',
  'Family Friendly Safari',
  'Bush to Beach (Safari + Coast)',
  'Photography & Conservation'
];

const GROUP_OPTIONS = [
  'Solo Traveler',
  'Couple (2)',
  'Family (3-4)',
  'Private Group (5+)'
];

const ACCOMMODATION_STYLES = [
  'Luxury Tented Camps',
  'Boutique Safari Lodges',
  'Intimate Mobile Bush Camps',
  'Flexible / Best Mix'
];

export default function TripBuilderDrawer() {
  const {
    isOpen,
    activeStep,
    setActiveStep,
    quizData,
    closeDrawer,
    updateQuizData,
    submitToWhatsapp
  } = useTripBuilder();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!isOpen) return null;

  const totalSteps = 4;

  const handleCountrySelect = (country) => {
    updateQuizData({ country, interest: country });
  };

  const selectedCountryObj = COUNTRY_OPTIONS.find(c => c.id === quizData.country) || COUNTRY_OPTIONS[0];

  const togglePlace = (place) => {
    const current = Array.isArray(quizData.selectedPlaces) ? quizData.selectedPlaces : [];
    if (place === 'Open to Guide Recommendations') {
      updateQuizData({ selectedPlaces: ['Open to Guide Recommendations'] });
      return;
    }
    const filtered = current.filter(p => p !== 'Open to Guide Recommendations');
    if (filtered.includes(place)) {
      updateQuizData({ selectedPlaces: filtered.filter(p => p !== place) });
    } else {
      updateQuizData({ selectedPlaces: [...filtered, place] });
    }
  };

  const handleCalendarChange = ({ startDate, endDate, durationDays, isFlexible }) => {
    updateQuizData({ startDate, endDate, durationDays, isFlexible });
  };

  return (
    <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeDrawer(); }}>
      <div className="quiz-drawer" style={{ maxWidth: '640px' }}>
        {/* Drawer Header */}
        <div className="drawer-header" style={{ padding: '24px 28px', borderBottom: '1px solid rgba(216, 195, 165, 0.3)' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', color: 'var(--color-primary)', fontWeight: 600, margin: 0 }}>
              Plan Your Safari
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.78rem', color: 'var(--color-grey)', letterSpacing: '0.12em', textTransform: 'uppercase', margin: '4px 0 0' }}>
              Step {activeStep} of {totalSteps}
            </p>
          </div>
          <button className="drawer-close" onClick={closeDrawer} aria-label="Close drawer">
            <X size={26} />
          </button>
        </div>

        <div className="quiz-container" style={{ padding: '28px 28px 40px' }}>
          
          {/* ====================================================
              STEP 1: WHERE WOULD YOU LIKE TO TRAVEL?
              ==================================================== */}
          {activeStep === 1 && (
            <div className="quiz-step active">
              <p className="quiz-question" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
                Where would you like to journey?
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#555', marginBottom: '24px' }}>
                Choose your destination country or region from the options below:
              </p>

              <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-grey)', marginBottom: '10px' }}>
                Destination Region
              </label>

              {/* Luxury Decorated Dropdown */}
              <div style={{ position: 'relative', marginBottom: '22px' }}>
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{
                    padding: '18px 20px',
                    borderRadius: '18px',
                    border: dropdownOpen ? '2px solid var(--color-primary)' : '1.5px solid rgba(216, 195, 165, 0.65)',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    boxShadow: dropdownOpen ? '0 8px 30px rgba(31, 58, 50, 0.12)' : '0 4px 18px rgba(31, 58, 50, 0.04)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(31, 58, 50, 0.08)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Compass size={22} />
                    </div>
                    <div>
                      <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.2 }}>
                        {selectedCountryObj.label}
                      </span>
                      <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--color-grey)', marginTop: '2px', display: 'block' }}>
                        {selectedCountryObj.desc}
                      </span>
                    </div>
                  </div>

                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(216, 195, 165, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </div>

                {/* Dropdown Menu Options */}
                {dropdownOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      left: 0,
                      right: 0,
                      backgroundColor: '#ffffff',
                      borderRadius: '18px',
                      border: '1.5px solid rgba(216, 195, 165, 0.55)',
                      boxShadow: '0 16px 48px rgba(31, 58, 50, 0.16)',
                      zIndex: 50,
                      overflow: 'hidden'
                    }}
                  >
                    {COUNTRY_OPTIONS.map((c) => {
                      const isSelected = (quizData.country || 'Kenya') === c.id;
                      return (
                        <div
                          key={c.id}
                          onClick={() => {
                            handleCountrySelect(c.id);
                            setDropdownOpen(false);
                          }}
                          style={{
                            padding: '16px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            backgroundColor: isSelected ? 'rgba(31, 58, 50, 0.05)' : '#ffffff',
                            borderBottom: '1px solid rgba(216, 195, 165, 0.2)',
                            transition: 'background-color 0.15s ease'
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) e.currentTarget.style.backgroundColor = 'rgba(216, 195, 165, 0.14)';
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) e.currentTarget.style.backgroundColor = '#ffffff';
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <div style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '10px',
                              backgroundColor: isSelected ? 'var(--color-primary)' : 'rgba(216, 195, 165, 0.25)',
                              color: isSelected ? '#ffffff' : 'var(--color-primary)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}>
                              <MapPin size={16} />
                            </div>
                            <div>
                              <strong style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.96rem', color: 'var(--color-primary)' }}>
                                {c.label}
                              </strong>
                              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-grey)' }}>
                                {c.desc}
                              </span>
                            </div>
                          </div>
                          {isSelected && (
                            <div style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center' }}>
                              <Check size={18} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Decorative Brand Reassurance Card */}
              <div style={{
                padding: '16px 20px',
                borderRadius: '14px',
                backgroundColor: 'rgba(216, 195, 165, 0.18)',
                border: '1px solid rgba(216, 195, 165, 0.4)',
                marginBottom: '28px'
              }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.84rem', color: 'var(--color-primary)', margin: 0, lineHeight: 1.55 }}>
                  🌿 <strong>Good by Nature:</strong> Every itinerary is privately curated by licensed Kenyan driver-guides with private 4x4 vehicles, boutique wilderness stays, and flexible pace.
                </p>
              </div>

              <div className="quiz-actions-row">
                <button
                  type="button"
                  className="quiz-submit"
                  style={{ width: '100%', marginTop: 0 }}
                  onClick={() => setActiveStep(2)}
                >
                  Continue to Destinations &rarr;
                </button>
              </div>
            </div>
          )}

          {/* ====================================================
              STEP 2: PLACES OF INTEREST & ITINERARY STYLE
              ==================================================== */}
          {activeStep === 2 && (
            <div className="quiz-step active">
              <p className="quiz-question" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
                Destinations in mind
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#555', marginBottom: '18px' }}>
                Select any specific parks, lakes, or reserves you would love to experience:
              </p>

              {/* Places Multi-Select Chips */}
              <div className="places-chip-grid">
                {POPULAR_PLACES.map((place) => {
                  const isSelected = Array.isArray(quizData.selectedPlaces) && quizData.selectedPlaces.includes(place);
                  return (
                    <button
                      key={place}
                      type="button"
                      className={`place-chip ${isSelected ? 'selected' : ''}`}
                      onClick={() => togglePlace(place)}
                    >
                      {isSelected && <Check size={14} />}
                      <span>{place}</span>
                    </button>
                  );
                })}
              </div>

              {/* Itinerary Style */}
              <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-grey)', marginBottom: '10px' }}>
                Preferred Itinerary Feel
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {ITINERARY_STYLES.map((style) => {
                  const isSelected = quizData.itineraryType === style;
                  return (
                    <button
                      key={style}
                      type="button"
                      onClick={() => updateQuizData({ itineraryType: style })}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '100px',
                        border: isSelected ? '1.5px solid var(--color-primary)' : '1px solid rgba(107, 74, 53, 0.2)',
                        backgroundColor: isSelected ? 'var(--color-primary)' : '#ffffff',
                        color: isSelected ? '#ffffff' : 'var(--color-primary)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {style}
                    </button>
                  );
                })}
              </div>

              <div className="quiz-actions-row">
                <button type="button" className="quiz-back-btn" onClick={() => setActiveStep(1)}>
                  &larr; Back
                </button>
                <button
                  type="button"
                  className="quiz-submit"
                  style={{ flex: 1, marginTop: 0 }}
                  onClick={() => setActiveStep(3)}
                >
                  Choose Dates &rarr;
                </button>
              </div>
            </div>
          )}

          {/* ====================================================
              STEP 3: BESPOKE SAFARI THEME CALENDAR PICKER
              ==================================================== */}
          {activeStep === 3 && (
            <div className="quiz-step active">
              <p className="quiz-question" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
                When would you like to visit?
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#555', marginBottom: '16px' }}>
                Pick your travel dates below, or select flexible dates to explore seasonal migration timings.
              </p>

              {/* Bespoke Safari Theme Calendar */}
              <SafariCalendarPicker
                startDate={quizData.startDate}
                endDate={quizData.endDate}
                durationDays={quizData.durationDays || 7}
                isFlexible={quizData.isFlexible}
                onChange={handleCalendarChange}
              />

              <div className="quiz-actions-row">
                <button type="button" className="quiz-back-btn" onClick={() => setActiveStep(2)}>
                  &larr; Back
                </button>
                <button
                  type="button"
                  className="quiz-submit"
                  style={{ flex: 1, marginTop: 0 }}
                  onClick={() => setActiveStep(4)}
                >
                  Trip Details &rarr;
                </button>
              </div>
            </div>
          )}

          {/* ====================================================
              STEP 4: CUSTOM REQUEST & SEND MESSAGE (END PAGE)
              ==================================================== */}
          {activeStep === 4 && (
            <div className="quiz-step active">
              <p className="quiz-question" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
                Your custom requests
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: '#555', marginBottom: '20px' }}>
                Tell us anything you’d like to personalize your journey with Enkop Safaris:
              </p>

              {/* Party / Group Size */}
              <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-grey)', marginBottom: '8px' }}>
                Traveling Party
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '18px' }}>
                {GROUP_OPTIONS.map((g) => {
                  const isSelected = quizData.groupSize === g;
                  return (
                    <button
                      key={g}
                      type="button"
                      onClick={() => updateQuizData({ groupSize: g })}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '12px',
                        border: isSelected ? '1.5px solid var(--color-primary)' : '1px solid rgba(107, 74, 53, 0.2)',
                        backgroundColor: isSelected ? 'var(--color-primary)' : '#ffffff',
                        color: isSelected ? '#ffffff' : 'var(--color-primary)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textAlign: 'center'
                      }}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>

              {/* Preferred Accommodation */}
              <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-grey)', marginBottom: '8px' }}>
                Preferred Accommodation Style
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '20px' }}>
                {ACCOMMODATION_STYLES.map((acc) => {
                  const isSelected = quizData.accommodation === acc;
                  return (
                    <button
                      key={acc}
                      type="button"
                      onClick={() => updateQuizData({ accommodation: acc })}
                      style={{
                        padding: '10px 12px',
                        borderRadius: '12px',
                        border: isSelected ? '1.5px solid var(--color-primary)' : '1px solid rgba(107, 74, 53, 0.2)',
                        backgroundColor: isSelected ? 'rgba(31, 58, 50, 0.05)' : '#ffffff',
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.8rem',
                        fontWeight: isSelected ? 600 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textAlign: 'left'
                      }}
                    >
                      {acc}
                    </button>
                  );
                })}
              </div>

              {/* Custom Request Textarea */}
              <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-grey)', marginBottom: '8px' }}>
                Tell us anything you have in mind
              </label>
              <textarea
                className="quiz-textarea"
                rows={4}
                placeholder="e.g. Celebrating an anniversary, keen on photography and big cats, preferred safari pace, or specific lodges you've heard about..."
                value={quizData.notes || ''}
                onChange={(e) => updateQuizData({ notes: e.target.value })}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '14px',
                  border: '1.5px solid rgba(107, 74, 53, 0.25)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  color: 'var(--color-primary)',
                  resize: 'vertical',
                  marginBottom: '16px',
                  backgroundColor: '#ffffff'
                }}
              />

              {/* Inquiry Summary Preview Badge */}
              <div style={{
                padding: '14px 18px',
                backgroundColor: 'rgba(216, 195, 165, 0.2)',
                borderRadius: '14px',
                border: '1px solid rgba(216, 195, 165, 0.45)',
                marginBottom: '24px'
              }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-secondary)', marginBottom: '4px' }}>
                  Trip Summary
                </span>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--color-primary)', margin: 0, lineHeight: 1.5 }}>
                  <strong>{quizData.country || 'Kenya'}</strong> &middot;{' '}
                  {Array.isArray(quizData.selectedPlaces) && quizData.selectedPlaces.length > 0 ? quizData.selectedPlaces.join(', ') : 'Custom Route'} &middot;{' '}
                  {quizData.startDate && quizData.endDate ? `${quizData.startDate} to ${quizData.endDate}` : 'Flexible Dates'}
                </p>
              </div>

              {/* Actions: Back & Send Message */}
              <div className="quiz-actions-row">
                <button type="button" className="quiz-back-btn" onClick={() => setActiveStep(3)}>
                  &larr; Back
                </button>
                <button
                  type="button"
                  className="quiz-submit"
                  style={{
                    flex: 1,
                    marginTop: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    backgroundColor: 'var(--color-secondary)'
                  }}
                  onClick={submitToWhatsapp}
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
