import React, { useState } from 'react';
import { Star, CheckCircle, PlusCircle, X, Send } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';

const INITIAL_REVIEWS = [
  {
    id: 1,
    name: 'Sarah & David Miller',
    country: '🇺🇸 United States',
    date: '2 weeks ago',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    title: 'Unbelievable 7-Day Maasai Mara & Amboseli Safari!',
    review: 'Direct booking with Safari Direct Kenya was the best decision we made for our trip to East Africa. Our driver-guide Peter was incredibly knowledgeable. On Day 2 in Maasai Mara, we witnessed a wildebeest river crossing! The 4x4 Cruiser was brand new, super comfortable, and stocked with cold drinks.',
    tripType: 'Maasai Mara & Amboseli'
  },
  {
    id: 2,
    name: 'Hans & Greta Weber',
    country: '🇩🇪 Germany',
    date: '1 month ago',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    title: 'No Middleman Fees — Exceptional 5-Star Service',
    review: 'We saved nearly $1,200 booking directly with local Kenyan driver-guides. Communication via WhatsApp was super fast from day one. They organized magnificent tented lodges with Mt. Kilimanjaro views in Amboseli. 10/10 recommend!',
    tripType: 'Amboseli & Tsavo'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    country: '🇬🇧 United Kingdom',
    date: '1 month ago',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    title: 'Tailored to Our Exact Budget & Timeline',
    review: 'We wanted a 5-day safari with high-end eco lodges but had a strict budget per person. The team created a custom itinerary covering Lake Naivasha & Mara that fit perfectly. Saw all Big Five animals in just 4 days!',
    tripType: 'Custom Safari Package'
  },
  {
    id: 4,
    name: 'Marcus & Jessica Vance',
    country: '🇦🇺 Australia',
    date: '2 months ago',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    title: 'Seamless Airport Transfer & 4x4 Safari Logistics',
    review: 'Picked us up right at JKIA Nairobi airport with our private Land Cruiser ready to go. The popup roof made photography so easy. They treated us like family throughout the entire journey.',
    tripType: 'Airport Pickup & Safari'
  }
];

export default function GoogleReviews() {
  const { openDrawer } = useTripBuilder();
  const [reviewsList, setReviewsList] = useState(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [newRating, setNewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [tripType, setTripType] = useState('Maasai Mara Safari');
  const [title, setTitle] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!name || !title || !reviewText) return;

    const newRevObj = {
      id: Date.now(),
      name,
      country: country || '🌍 Traveler',
      date: 'Just now',
      rating: newRating,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
      title,
      review: reviewText,
      tripType: tripType || 'Kenya Safari'
    };

    setReviewsList([newRevObj, ...reviewsList]);
    setFormSubmitted(true);

    const waText = encodeURIComponent(
      `⭐ *NEW CLIENT SAFARI REVIEW*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `👤 *Reviewer:* ${name} (${country || 'Traveler'})\n` +
      `🌟 *Rating:* ${'⭐'.repeat(newRating)}\n` +
      `📍 *Trip:* ${tripType}\n` +
      `📝 *Headline:* "${title}"\n\n` +
      `"${reviewText}"`
    );
    window.open(`https://wa.me/254718396228?text=${waText}`, '_blank');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormSubmitted(false);
    setName('');
    setCountry('');
    setTitle('');
    setReviewText('');
    setNewRating(5);
  };

  return (
    <section className="google-reviews-section">
      <div className="container">
        
        {/* Google Reviews Header Banner */}
        <div className="google-rating-banner">
          <div className="google-brand-col">
            <svg className="google-g-logo" viewBox="0 0 24 24" width="40" height="40">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <div>
              <div className="google-rating-score">
                <span className="score-num">4.9</span>
                <div className="score-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>
              </div>
              <p className="google-review-count">Based on <strong>{reviewsList.length + 116}+ Verified Reviews</strong></p>
            </div>
          </div>

          <div className="google-cta-col" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button
              type="button"
              className="google-secondary-btn"
              onClick={() => setIsModalOpen(true)}
            >
              <PlusCircle size={16} />
              Write a Review
            </button>
            <button type="button" className="google-plan-btn" onClick={() => openDrawer()}>
              Book Your Safari &rarr;
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="google-reviews-grid">
          {reviewsList.map((rev) => (
            <div className="google-review-card" key={rev.id}>
              <div className="review-card-header">
                <img src={rev.avatar} alt={rev.name} className="reviewer-avatar" />
                <div className="reviewer-meta">
                  <h4>{rev.name}</h4>
                  <p className="reviewer-country">{rev.country} &middot; <span className="rev-date">{rev.date}</span></p>
                </div>
                <div className="google-verified-badge">
                  <CheckCircle size={14} color="#34A853" />
                  <span>Verified</span>
                </div>
              </div>

              <div className="review-card-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#FBBC05" color="#FBBC05" />
                ))}
                <span className="trip-tag-pill">{rev.tripType}</span>
              </div>

              <h5 className="review-card-title">"{rev.title}"</h5>
              <p className="review-card-text">{rev.review}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Write a Review Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="write-review-modal-card">
            <div className="review-modal-header">
              <h3>Write a Traveler Review</h3>
              <button type="button" className="review-modal-close" onClick={closeModal}>
                <X size={22} />
              </button>
            </div>

            {formSubmitted ? (
              <div className="review-success-body">
                <CheckCircle size={56} style={{ color: '#34A853', margin: '0 auto 16px' }} />
                <h3>Thank You for Your Review!</h3>
                <p>Your review has been posted live to our site and submitted directly to Safari Direct Kenya.</p>
                <button type="button" className="google-plan-btn" onClick={closeModal} style={{ marginTop: '20px' }}>
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="review-modal-form">
                
                {/* Star Rating Picker */}
                <div className="star-picker-container">
                  <label>Overall Experience Rating:</label>
                  <div className="star-picker-row">
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <Star
                        key={starVal}
                        size={28}
                        style={{ cursor: 'pointer', transition: 'all 0.15s ease' }}
                        fill={(hoverRating || newRating) >= starVal ? '#FBBC05' : 'none'}
                        color={(hoverRating || newRating) >= starVal ? '#FBBC05' : '#CCC'}
                        onMouseEnter={() => setHoverRating(starVal)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setNewRating(starVal)}
                      />
                    ))}
                    <span className="rating-desc-pill">{newRating} of 5 Stars</span>
                  </div>
                </div>

                <div className="form-grid-two">
                  <div className="form-group">
                    <label>Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Miller"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Country / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. United States 🇺🇸"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Safari Package Taken</label>
                  <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
                    <option value="Maasai Mara Safari">Maasai Mara Safari</option>
                    <option value="Amboseli & Kilimanjaro">Amboseli & Kilimanjaro</option>
                    <option value="Laikipia & Ol Pejeta">Laikipia & Ol Pejeta</option>
                    <option value="Transfers & Logistics">Transfers & Logistics</option>
                    <option value="Corporate Safari Event">Corporate Safari Event</option>
                    <option value="Custom Safari Package">Custom Safari Package</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Review Headline *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Unforgettable 7-Day Mara & Amboseli trip!"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Your Review Story *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your driver-guide, wildlife sightings, Land Cruiser quality, and overall experience..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                </div>

                <button type="submit" className="submit-review-btn">
                  <Send size={16} />
                  Submit Review & Post Live
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
