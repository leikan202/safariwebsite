import React, { useState } from 'react';
import kilimanjaroImg from '../../assets/images/stephan-bechert-xQWelDCacZE-unsplash.jpg';

export default function OurStory() {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <>
      <section 
        className="enkop-difference-section" 
        id="our-story" 
        style={{ 
          position: 'relative', 
          backgroundColor: 'var(--color-bg-light)', 
          overflow: 'hidden',
          minHeight: '440px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Right Panoramic Photo with seamless feathered gradient fade */}
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            right: 0, 
            width: '65%', 
            height: '100%', 
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          <img 
            src={kilimanjaroImg} 
            alt="Kilimanjaro savannah landscape" 
            loading="lazy"
            decoding="async"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              objectPosition: 'center right' 
            }} 
          />
          {/* Feathered gradient mask dissolving Ivory into photo */}
          <div 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              background: 'linear-gradient(to right, var(--color-bg-light) 0%, var(--color-bg-light) 25%, rgba(248, 245, 239, 0.75) 45%, rgba(248, 245, 239, 0) 80%)' 
            }} 
          />
        </div>

        {/* Left Narrative Content */}
        <div 
          className="container" 
          style={{ 
            position: 'relative', 
            zIndex: 2, 
            maxWidth: '1240px', 
            margin: '0 auto', 
            padding: '70px 24px', 
            width: '100%' 
          }}
        >
          <div style={{ maxWidth: '520px', textAlign: 'left' }}>
            <p 
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.78rem', 
                fontWeight: 600, 
                letterSpacing: '0.2em', 
                textTransform: 'uppercase', 
                color: 'var(--color-grey)', 
                marginBottom: '14px' 
              }}
            >
              THE ENKOP DIFFERENCE
            </p>
            <h2 
              style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)', 
                color: 'var(--color-primary)', 
                lineHeight: 1.15, 
                fontWeight: 400, 
                marginBottom: '20px' 
              }}
            >
              More than a safari.
            </h2>
            <p 
              style={{ 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.92rem', 
                lineHeight: 1.75, 
                color: '#4A4A4A', 
                marginBottom: '32px' 
              }}
            >
              We believe Africa isn't simply a destination to visit. It is a place to feel, discover and remember. Enkop Safaris creates journeys that bring together wildlife, culture, landscape and exceptional hospitality — thoughtfully designed around you.
            </p>

            <button 
              onClick={() => setShowFullStory(true)}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                backgroundColor: 'var(--color-secondary)', 
                color: '#FFFFFF', 
                padding: '13px 28px', 
                fontFamily: 'var(--font-sans)', 
                fontSize: '0.75rem', 
                fontWeight: 600, 
                letterSpacing: '0.16em', 
                textTransform: 'uppercase', 
                border: 'none', 
                borderRadius: 0, 
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
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
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(31, 58, 50, 0.75)',
            backdropFilter: 'blur(4px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setShowFullStory(false)}
        >
          <div 
            style={{
              backgroundColor: 'var(--color-bg-light)',
              maxWidth: '680px',
              width: '100%',
              padding: '48px 40px',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: 0,
              border: '1px solid var(--color-accent)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowFullStory(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: 'var(--color-secondary)'
              }}
            >
              &times;
            </button>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-grey)', marginBottom: '12px' }}>
              OUR HERITAGE
            </p>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'var(--color-primary)', marginBottom: '24px' }}>
              Good by Nature
            </h3>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: '1.8', color: '#3A3A3A', display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
