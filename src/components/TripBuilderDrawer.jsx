import React from 'react';
import { X, Send, Bus, Briefcase, Compass } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';
import { useCurrency } from '../context/CurrencyContext';
import LiquidGlassButton from './LiquidGlassButton';
import DateRangeWheelPicker from './DateRangeWheelPicker';
import WheelDatePicker from './WheelDatePicker';

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

  const { currency } = useCurrency();

  if (!isOpen) return null;

  const isTransfer = quizData.interest === 'Transfers & Ticketing';
  const isCorporate = quizData.interest === 'Corporate Travel';
  const totalSteps = (isTransfer || isCorporate) ? 3 : 5;

  const handleInterestSelect = (value) => {
    updateQuizData({ interest: value });
    setActiveStep(2);
  };

  const handleGroupSelect = (value) => {
    updateQuizData({ groupSize: value });
  };

  const handleAccSelect = (value) => {
    updateQuizData({ accommodation: value });
  };

  const handleDateRangeChange = ({ startDate, endDate, durationDays }) => {
    updateQuizData({ startDate, endDate, durationDays });
  };

  return (
    <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeDrawer(); }}>
      <div className="quiz-drawer">
        <div className="drawer-header">
          <div>
            <h3>{isTransfer ? 'Transfer & Ticketing' : isCorporate ? 'Corporate Solutions' : 'Plan Your Journey'}</h3>
            <p>Step {activeStep} of {totalSteps}</p>
          </div>
          <button className="drawer-close" onClick={closeDrawer}>
            <X size={28} />
          </button>
        </div>

        <div className="quiz-container">
          {/* STEP 1: Main Category Selection */}
          <div className={`quiz-step ${activeStep === 1 ? 'active' : ''}`}>
            <p className="quiz-question">What type of trip are you looking for?</p>
            <div className="grid-options">
              {['Adventure Kenya', 'Maasai Mara', 'Amboseli', 'Northern Kenya', 'Diani Beach', 'Corporate Travel', 'City & Day Trips', 'Transfers & Ticketing'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`quiz-option ${quizData.interest === item ? 'selected' : ''}`}
                  onClick={() => handleInterestSelect(item)}
                >
                  <span>{item}</span>
                  <span>&rarr;</span>
                </button>
              ))}
            </div>
          </div>

          {/* =========================================
              PATHWAY A: TRANSFERS & TICKETING (3 Steps)
             ========================================= */}
          {isTransfer && (
            <>
              {/* STEP 2: Transfer Type, Route & Vehicle */}
              <div className={`quiz-step ${activeStep === 2 ? 'active' : ''}`}>
                <p className="quiz-question">Specify Transfer or Ticket Details</p>
                
                <p className="quiz-section-label">Service Type</p>
                <div className="flex-options" style={{ marginBottom: '20px' }}>
                  {['Airport Transfer', 'Inter-City Transfer', 'Domestic Flight Ticket', 'SGR Train Ticket'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`quiz-option small ${quizData.transferType === type ? 'selected' : ''}`}
                      onClick={() => updateQuizData({ transferType: type })}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <p className="quiz-section-label">Pickup & Destination Route</p>
                <input
                  type="text"
                  className="quiz-input"
                  style={{ marginBottom: '20px' }}
                  placeholder="e.g. Nairobi JKIA Airport to Maasai Mara / Serena Lodge"
                  value={quizData.transferRoute}
                  onChange={(e) => updateQuizData({ transferRoute: e.target.value })}
                />

                <p className="quiz-section-label">Vehicle / Travel Class</p>
                <div className="grid-options" style={{ marginBottom: '20px' }}>
                  {['4x4 Safari Land Cruiser', 'VIP Alphard / Luxury Van', 'Executive Coach Bus', 'Domestic Flight Seat'].map((veh) => (
                    <button
                      key={veh}
                      type="button"
                      className={`quiz-option ${quizData.transferVehicle === veh ? 'selected' : ''}`}
                      onClick={() => updateQuizData({ transferVehicle: veh })}
                    >
                      <span>{veh}</span>
                    </button>
                  ))}
                </div>

                <div className="quiz-actions-row">
                  <button type="button" className="quiz-back-btn" onClick={() => setActiveStep(1)}>
                    &larr; Back
                  </button>
                  <LiquidGlassButton onClick={() => setActiveStep(3)} style={{ flex: 1 }}>
                    Continue &rarr;
                  </LiquidGlassButton>
                </div>
              </div>

              {/* STEP 3: Transfer Date, Passengers & Submit */}
              <div className={`quiz-step ${activeStep === 3 ? 'active' : ''}`}>
                <p className="quiz-question">Date & Passenger Count</p>

                <p className="quiz-section-label">Date of Service</p>
                <WheelDatePicker
                  value={quizData.startDate}
                  onChange={(val) => updateQuizData({ startDate: val })}
                />

                <p className="quiz-section-label">Number of Passengers</p>
                <div className="flex-options" style={{ marginBottom: '20px' }}>
                  {['1-2 Passengers', '3-4 Passengers', '5-7 Passengers', '8+ Group'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`quiz-option small ${quizData.groupSize === size ? 'selected' : ''}`}
                      onClick={() => updateQuizData({ groupSize: size })}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <p className="quiz-section-label">Flight / Train Details or Special Notes</p>
                <textarea
                  className="quiz-textarea"
                  rows={3}
                  placeholder="e.g. Flight # KQ 102 arriving 06:30 AM, 3 large suitcases..."
                  value={quizData.notes}
                  onChange={(e) => updateQuizData({ notes: e.target.value })}
                ></textarea>

                <div className="quiz-actions-row">
                  <button type="button" className="quiz-back-btn" onClick={() => setActiveStep(2)}>
                    &larr; Back
                  </button>
                  <button type="button" className="quiz-submit" style={{ flex: 1, marginTop: 0 }} onClick={submitToWhatsapp}>
                    <Send size={18} />
                    Request Transfer Quote
                  </button>
                </div>
              </div>
            </>
          )}

          {/* =========================================
              PATHWAY B: CORPORATE TRAVEL (3 Steps)
             ========================================= */}
          {isCorporate && (
            <>
              {/* STEP 2: Event Type & Delegates */}
              <div className={`quiz-step ${activeStep === 2 ? 'active' : ''}`}>
                <p className="quiz-question">Corporate Event Details</p>

                <p className="quiz-section-label">Type of Corporate Event</p>
                <div className="grid-options" style={{ marginBottom: '20px' }}>
                  {['Executive Retreat', 'Team Building Safari', 'Conference & MICE', 'Corporate Day Out'].map((corp) => (
                    <button
                      key={corp}
                      type="button"
                      className={`quiz-option ${quizData.corporateType === corp ? 'selected' : ''}`}
                      onClick={() => updateQuizData({ corporateType: corp })}
                    >
                      <span>{corp}</span>
                    </button>
                  ))}
                </div>

                <p className="quiz-section-label">Number of Delegates / Attendees</p>
                <div className="flex-options" style={{ marginBottom: '20px' }}>
                  {['5-15 Delegates', '16-30 Delegates', '31-50 Delegates', '50+ Large Group'].map((count) => (
                    <button
                      key={count}
                      type="button"
                      className={`quiz-option small ${quizData.delegatesCount === count ? 'selected' : ''}`}
                      onClick={() => updateQuizData({ delegatesCount: count })}
                    >
                      {count}
                    </button>
                  ))}
                </div>

                <div className="quiz-actions-row">
                  <button type="button" className="quiz-back-btn" onClick={() => setActiveStep(1)}>
                    &larr; Back
                  </button>
                  <LiquidGlassButton onClick={() => setActiveStep(3)} style={{ flex: 1 }}>
                    Continue &rarr;
                  </LiquidGlassButton>
                </div>
              </div>

              {/* STEP 3: Corporate Dates, Budget & Submit */}
              <div className={`quiz-step ${activeStep === 3 ? 'active' : ''}`}>
                <p className="quiz-question">Target Date & Event Requirements</p>

                <p className="quiz-section-label">Target Travel Date</p>
                <WheelDatePicker
                  value={quizData.startDate}
                  onChange={(val) => updateQuizData({ startDate: val })}
                />

                <p className="quiz-section-label">Target Corporate Budget</p>
                <div className="budget-input-wrapper">
                  <span className="budget-currency-symbol">{currency === 'KES' ? 'KES' : '$'}</span>
                  <input
                    type="text"
                    className="quiz-input budget-field"
                    placeholder={currency === 'KES' ? '1,500,000' : '10,000'}
                    value={quizData.budgetAmount}
                    onChange={(e) => updateQuizData({ budgetAmount: e.target.value })}
                  />
                  <span className="budget-per-person">total</span>
                </div>

                <p className="quiz-section-label">AV Setup, Catering & Specific Logistics</p>
                <textarea
                  className="quiz-textarea"
                  rows={3}
                  placeholder="e.g. Projectors required, private flight charter, full-board accomodation..."
                  value={quizData.notes}
                  onChange={(e) => updateQuizData({ notes: e.target.value })}
                ></textarea>

                <div className="quiz-actions-row">
                  <button type="button" className="quiz-back-btn" onClick={() => setActiveStep(2)}>
                    &larr; Back
                  </button>
                  <button type="button" className="quiz-submit" style={{ flex: 1, marginTop: 0 }} onClick={submitToWhatsapp}>
                    <Send size={18} />
                    Request Corporate Proposal
                  </button>
                </div>
              </div>
            </>
          )}

          {/* =========================================
              PATHWAY C: SAFARI & DESTINATIONS (5 Steps)
             ========================================= */}
          {!isTransfer && !isCorporate && (
            <>
              {/* STEP 2: Arrival Date & Stay Duration Wheel */}
              <div className={`quiz-step ${activeStep === 2 ? 'active' : ''}`}>
                <p className="quiz-question">When & how long are you staying?</p>
                
                <DateRangeWheelPicker onChange={handleDateRangeChange} />

                <div className="quiz-actions-row">
                  <button type="button" className="quiz-back-btn" onClick={() => setActiveStep(1)}>
                    &larr; Back
                  </button>
                  <LiquidGlassButton onClick={() => setActiveStep(3)} style={{ flex: 1 }}>
                    Continue &rarr;
                  </LiquidGlassButton>
                </div>
              </div>

              {/* STEP 3: Group Size */}
              <div className={`quiz-step ${activeStep === 3 ? 'active' : ''}`}>
                <p className="quiz-question">Who is traveling with you?</p>
                <div className="flex-options">
                  {['Solo', 'Couple', 'Family (3-4)', 'Group (5+)'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`quiz-option small ${quizData.groupSize === size ? 'selected' : ''}`}
                      onClick={() => handleGroupSelect(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                
                <div className="quiz-actions-row">
                  <button type="button" className="quiz-back-btn" onClick={() => setActiveStep(2)}>
                    &larr; Back
                  </button>
                  <LiquidGlassButton onClick={() => setActiveStep(4)} style={{ flex: 1 }}>
                    Continue &rarr;
                  </LiquidGlassButton>
                </div>
              </div>

              {/* STEP 4: Target Budget Input & Accommodation Style */}
              <div className={`quiz-step ${activeStep === 4 ? 'active' : ''}`}>
                <p className="quiz-question">What is your target budget?</p>
                <p className="quiz-subtext">Enter your budget per person and we will craft a 100% custom safari itinerary for you.</p>

                <div className="budget-input-group">
                  <div className="budget-input-wrapper">
                    <span className="budget-currency-symbol">{currency === 'KES' ? 'KES' : '$'}</span>
                    <input
                      type="text"
                      className="quiz-input budget-field"
                      placeholder={currency === 'KES' ? '300,000' : '2,500'}
                      value={quizData.budgetAmount}
                      onChange={(e) => updateQuizData({ budgetAmount: e.target.value })}
                    />
                    <span className="budget-per-person">/ person</span>
                  </div>

                  <div className="budget-preset-chips">
                    {(currency === 'KES' 
                      ? ['KES 200,000', 'KES 350,000', 'KES 500,000', 'KES 750,000+'] 
                      : ['$1,500', '$2,500', '$3,500', '$5,000', '$7,500+']
                    ).map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        className={`preset-chip ${quizData.budgetAmount === preset ? 'selected' : ''}`}
                        onClick={() => updateQuizData({ budgetAmount: preset })}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="quiz-section-label">Preferred Accommodation Style</p>
                <div className="grid-options">
                  {['Budget / Camping', 'Mid-Range Lodges', 'Luxury Tented Camps'].map((acc) => (
                    <button
                      key={acc}
                      type="button"
                      className={`quiz-option ${quizData.accommodation === acc ? 'selected' : ''}`}
                      onClick={() => handleAccSelect(acc)}
                    >
                      <span>{acc}</span>
                    </button>
                  ))}
                </div>

                <div className="quiz-actions-row">
                  <button type="button" className="quiz-back-btn" onClick={() => setActiveStep(3)}>
                    &larr; Back
                  </button>
                  <LiquidGlassButton onClick={() => setActiveStep(5)} style={{ flex: 1 }}>
                    Continue &rarr;
                  </LiquidGlassButton>
                </div>
              </div>

              {/* STEP 5: Special Requests & Submit */}
              <div className={`quiz-step ${activeStep === 5 ? 'active' : ''}`}>
                <p className="quiz-question">Any special requests or preferences?</p>
                <textarea
                  className="quiz-textarea"
                  rows={4}
                  placeholder="e.g. Photography focus, specific dietary requirements, hot air balloon preference..."
                  value={quizData.notes}
                  onChange={(e) => updateQuizData({ notes: e.target.value })}
                ></textarea>
                
                <div className="quiz-actions-row">
                  <button type="button" className="quiz-back-btn" onClick={() => setActiveStep(4)}>
                    &larr; Back
                  </button>
                  <button type="button" className="quiz-submit" style={{ flex: 1, marginTop: 0 }} onClick={submitToWhatsapp}>
                    <Send size={18} />
                    Send Safari Inquiry on WhatsApp
                  </button>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
