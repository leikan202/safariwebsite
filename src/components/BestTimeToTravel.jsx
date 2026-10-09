import React from 'react';
import { Calendar, CloudRain, Sun, Info } from 'lucide-react';
import imgWildebeest from '../../assets/images/stephan-bechert-xQWelDCacZE-unsplash.jpg';
import imgCalving from '../../assets/images/ana-singh-1vOBJZ6228U-unsplash.jpg';

export default function BestTimeToTravel() {
  return (
    <section className="season-section" id="best-time">
      <div className="container">
        <div className="season-header">
          <span className="section-label">Travel Seasons</span>
          <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>When is the Best Time to Go?</h2>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto 40px', color: 'var(--color-secondary)' }}>
            Kenya offers spectacular year-round wildlife viewing. However, specific natural events like the Great Migration and changing weather patterns play a huge role in shaping your expedition.
          </p>
        </div>

        <div className="season-grid">
          {/* Peak Season */}
          <div className="season-card">
            <div className="season-card-img" style={{ backgroundImage: `url(${imgWildebeest})` }}>
              <div className="season-badge peak">Peak Season</div>
            </div>
            <div className="season-card-content">
              <h3>July &mdash; October</h3>
              <p className="season-highlights"><strong>The Great Migration &amp; Dry Season</strong></p>
              <p>The world-famous Wildebeest Migration arrives in the Maasai Mara. Animals congregate around water sources, making predator sightings incredibly frequent. Due to high demand, early booking is essential.</p>
              <ul className="season-features">
                <li><Sun size={14} /> Clear, sunny days with cool mornings</li>
                <li><Calendar size={14} /> Best for: River crossings &amp; high predator action</li>
              </ul>
            </div>
          </div>

          {/* Green Season */}
          <div className="season-card">
            <div className="season-card-img" style={{ backgroundImage: `url(${imgCalving})` }}>
              <div className="season-badge green">Green Season</div>
            </div>
            <div className="season-card-content">
              <h3>November &mdash; May</h3>
              <p className="season-highlights"><strong>Calving Season &amp; Lush Landscapes</strong></p>
              <p>The "short rains" (Nov-Dec) and "long rains" (Apr-May) transform the savannah into a vibrant green paradise. This is prime birdwatching time and calving season, attracting intense predator activity.</p>
              <ul className="season-features">
                <li><CloudRain size={14} /> Brief afternoon showers, incredible light</li>
                <li><Calendar size={14} /> Best for: Photography, newborns &amp; exclusivity</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="season-footer-note">
          <Info size={16} />
          <span><strong>Insider Tip:</strong> January through March is arguably our best-kept secret for safaris—dry weather, fantastic wildlife, and far fewer crowds than the July peak.</span>
        </div>
      </div>
    </section>
  );
}
