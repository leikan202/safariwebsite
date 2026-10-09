import React from 'react';
import { MapPin, Phone, Clock, Navigation, Mail, ArrowRight } from 'lucide-react';

export default function MapSection() {
  return (
    <section className="map-section-v2" id="location">
      <div className="container">
        <div className="section-header-center">
          <p className="section-label">FIND US</p>
          <h2 className="section-headline">Nairobi Safari Hub</h2>
        </div>

        <div className="map-v2-wrapper">
          <iframe
            title="Enkop Safaris Location — Hillpark Suites, Langata"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.7456!3d-1.3636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a3c5d8e9f%3A0xabc123!2sHillpark%20Suites%20Langata!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Floating Glass Info Card */}
          <div className="map-float-card">
            <div className="map-float-row">
              <div className="map-float-icon"><MapPin size={18} /></div>
              <div>
                <strong>Enkop Safaris</strong>
                <p>Hillpark Suites, Langata · Nairobi, Kenya</p>
              </div>
            </div>
            <div className="map-float-row">
              <div className="map-float-icon"><Clock size={18} /></div>
              <div>
                <strong>24 / 7 Open</strong>
                <p>Airport pickups & safari dispatch round-the-clock</p>
              </div>
            </div>
            <div className="map-float-divider"></div>
            <div className="map-float-contacts">
              <a href="https://wa.me/254718396228" target="_blank" rel="noopener noreferrer" className="map-contact-chip">
                <Phone size={14} /> +254 718 396 228
              </a>
              <a href="mailto:leikankiok@gmail.com" className="map-contact-chip">
                <Mail size={14} /> leikankiok@gmail.com
              </a>
            </div>
            <a
              href="https://www.google.com/maps/dir//Hillpark+Suites+Langata+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="map-directions-v2"
            >
              Get Directions <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
