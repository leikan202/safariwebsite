import React, { useEffect, useRef } from 'react';
import imgFullBleed from '../../assets/images/sutirta-budiman-89IBtfoz3Vw-unsplash.webp';

export default function FullBleed() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.parentElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const yPos = scrollPercent * 15;
        imgRef.current.style.transform = `translate3d(0, ${yPos}%, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="full-bleed-section">
      <div className="parallax-container" style={{ width: '100%', height: '100%' }}>
        <img
          ref={imgRef}
          src={imgFullBleed}
          loading="lazy"
          alt="The Great Migration, Maasai Mara"
          className="full-bleed-img parallax-img"
        />
      </div>
      <div className="full-bleed-caption">The Great Migration &middot; Maasai Mara</div>
    </section>
  );
}
