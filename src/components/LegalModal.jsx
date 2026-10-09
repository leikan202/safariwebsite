import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="legal-modal-card">
        <div className="legal-modal-header">
          <div className="legal-modal-title">
            {isPrivacy ? <ShieldCheck size={22} style={{ color: 'var(--color-accent)' }} /> : <FileText size={22} style={{ color: 'var(--color-accent)' }} />}
            <h3>{isPrivacy ? 'Privacy Policy' : 'Booking Terms & Conditions'}</h3>
          </div>
          <button className="legal-modal-close" onClick={onClose} aria-label="Close modal">
            <X size={24} />
          </button>
        </div>

        <div className="legal-modal-body">
          {isPrivacy ? (
            <>
              <h4>1. Information We Collect</h4>
              <p>When you inquire or book a safari through Enkop Safaris, we collect details such as your name, email address, WhatsApp number, travel dates, passenger counts, and accommodation preferences solely to organize your safari logistics.</p>

              <h4>2. How We Use Your Data</h4>
              <p>Your information is strictly used to communicate trip options, reserve lodge accommodations, arrange licensed 4x4 transport, and acquire national park entry permits. We never sell or trade your personal data to third-party advertisers.</p>

              <h4>3. Direct Communication Security</h4>
              <p>Communications initiated through our website redirect directly to our official business WhatsApp (+254 718 396 228) and secure email (leikankiok@gmail.com). Payment receipts and itinerary contracts are handled through verified financial institutions.</p>
            </>
          ) : (
            <>
              <h4>1. Booking Confirmation & Deposit</h4>
              <p>A 30% deposit is required to confirm your safari itinerary, reserve private 4x4 Land Cruisers, and lock in lodge/tented camp accommodations. The remaining balance is payable 30 days prior to arrival or as agreed in writing.</p>

              <h4>2. Flexible Rebooking & Cancellations</h4>
              <p>We understand travel plans can shift. Cancellations made more than 45 days prior to arrival receive a full refund minus non-refundable lodge deposit fees. Date modifications can be made free of charge up to 30 days before departure.</p>

              <h4>3. Licensed Guides & Park Permits</h4>
              <p>All safaris are conducted by KPSGA-certified licensed professional driver-guides in custom 4x4 Toyota Land Cruisers. All park entry fees and conservancy levies are handled in accordance with Kenya Wildlife Service (KWS) regulations.</p>

              <h4>4. Assumption of Risk & Liability</h4>
              <p>African safaris inherently involve proximity to wild, unpredictable animals and travel through remote natural environments. By booking, you acknowledge these inherent risks. Enkop Safaris and its agents shall not be held liable for any injury, illness, loss of property, or travel delays caused by forces of nature, weather, or circumstances beyond our control. <strong>Wildlife sightings, while highly probable, are completely natural occurrences and cannot be 100% guaranteed.</strong></p>

              <h4>5. Mandatory Travel & Medical Insurance</h4>
              <p>Comprehensive travel insurance covering medical emergencies, trip cancellation, repatriation, and loss of baggage is <strong>strictly mandatory</strong> for all guests. While we may provide temporary Flying Doctors (AMREF) evacuation coverage from the bush to a Nairobi hospital (if included in your quote), this does not cover medical treatment bills or international flights home.</p>
            </>
          )}
        </div>

        <div className="legal-modal-footer">
          <button type="button" className="legal-modal-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
