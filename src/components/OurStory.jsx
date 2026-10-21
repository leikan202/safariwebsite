import React, { useState } from 'react';
import kilimanjaroImg from '../../assets/images/stephan-bechert-xQWelDCacZE-unsplash.jpg';

export default function OurStory() {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <>
      <section 
        className="enkop-story-section" 
        id="our-story" 
      >
        {/* Panoramic Photo with seamless feathered gradient fade */}
        <div className="enkop-story-img-wrapper">
          <img 
            src={kilimanjaroImg} 
            alt="Kilimanjaro savannah landscape with zebras" 
            className="enkop-story-img"
            loading="lazy"
            decoding="async"
          />
          <div className="enkop-story-mask" />
        </div>

        {/* Narrative Content */}
        <div className="container enkop-story-container">
          <div className="enkop-story-content">
            <p className="enkop-story-kicker">
              THE ENKOP DIFFERENCE
            </p>
            <h2 className="enkop-story-title">
              More than a safari.
            </h2>
            <p className="enkop-story-lead">
              Africa is more than a destination—it is a feeling to remember. We craft intimate journeys uniting iconic wildlife, rich culture, and heartfelt hospitality.
            </p>

            <button 
              type="button"
              onClick={() => setShowFullStory(true)}
              className="enkop-story-btn"
            >
              <span>Our Story</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* Full Story Modal */}
      {showFullStory && (
        <div 
          className="enkop-story-modal-overlay"
          onClick={() => setShowFullStory(false)}
        >
          <div 
            className="enkop-story-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowFullStory(false)}
              className="enkop-story-modal-close"
              aria-label="Close story"
            >
              &times;
            </button>
            <p className="enkop-story-modal-kicker">
              OUR HERITAGE
            </p>
            <h3 className="enkop-story-modal-title">
              Good by Nature
            </h3>
            <div className="enkop-story-modal-body">
              <p>
                Enkop Safaris was born from a deep love for the land, people and wild places of Africa.
                The name <em>Enkop</em> speaks to home and country — a place of belonging.
              </p>
              <p>
                At the heart of our identity is the ostrich, known in Maa as <em>Esidai</em>, a name that means "good." It became more than a symbol for us; it became a philosophy: <strong>"Good by Nature."</strong>
              </p>
              <p>
                We believe the best journeys are not simply measured by the places you visit, but by what you take home with you: a breathtaking encounter with wildlife, the warmth of a local welcome, a story shared around a campfire, the stillness of the savannah at sunrise, and memories that remain long after the journey ends.
              </p>
              <p>
                From the iconic plains of the Maasai Mara to the majestic landscapes of Amboseli, the rugged beauty of Samburu and beyond, Enkop Safaris creates thoughtfully curated journeys that bring you closer to the Africa we call home.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
