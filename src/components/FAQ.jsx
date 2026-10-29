import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Calendar, CreditCard, Compass, HeartPulse, Bus, MessageSquare } from 'lucide-react';
import { useTripBuilder } from '../context/TripBuilderContext';

const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'planning', label: 'Planning & Timing', icon: Calendar },
  { id: 'booking', label: 'Booking & Payment', icon: CreditCard },
  { id: 'experience', label: 'Safari Experience', icon: Compass },
  { id: 'health', label: 'Visas & Health', icon: HeartPulse },
  { id: 'logistics', label: 'Transfers & Logistics', icon: Bus }
];

const FAQ_ITEMS = [
  {
    category: 'planning',
    question: 'What is the best month to see the Great Migration in Maasai Mara?',
    answer: 'The Great Migration typically arrives in the Mara between July and October. July–August features dramatic river crossings, while September–October offers peak predator action on golden plains.'
  },
  {
    category: 'planning',
    question: 'How far in advance should I book my Kenya safari?',
    answer: 'For peak months (July–October & December–January), book 6 to 9 months ahead. We can also accommodate last-minute bookings based on lodge availability.'
  },
  {
    category: 'booking',
    question: 'Why should I book directly with Enkop Safaris instead of a travel agency?',
    answer: 'Direct booking connects you straight to licensed Kenyan driver-guides with no middleman commissions, transparent rates, and immediate WhatsApp support.'
  },
  {
    category: 'booking',
    question: 'What payment currencies and methods do you accept?',
    answer: 'We accept USD ($) and KES via International Bank Wire, Credit/Debit Cards, and M-Pesa. A 30% deposit secures your vehicle and lodges, with the balance due 30 days prior.'
  },
  {
    category: 'booking',
    question: 'What is your deposit & flexible booking policy?',
    answer: 'A 30% deposit secures your dates. If plans change, we offer flexible date rebooking up to 30 days before departure without extra penalty.'
  },
  {
    category: 'experience',
    question: 'What is included in a custom Enkop Safaris package?',
    answer: 'Private 4x4 Land Cruiser with pop-up roof, licensed KPSGA guide, full-board lodges, all park & conservancy fees, unlimited game drives, chilled water, and AMREF emergency air evacuation.'
  },
  {
    category: 'experience',
    question: 'What type of safari vehicle will we be traveling in?',
    answer: 'Custom 4WD Toyota Land Cruisers with 360° pop-up roofs, guaranteed window seats (max 6), 220V charging ports, cool box, and long-range VHF radios.'
  },
  {
    category: 'experience',
    question: 'Are your safaris family-friendly for children and seniors?',
    answer: 'Yes. Every safari is 100% private, allowing you to set the daily pace. We tailor rest stops, lodge choices, and drive lengths around your family.'
  },
  {
    category: 'experience',
    question: 'What should I pack for a Kenya bush safari?',
    answer: 'Neutral earth tones (khaki, olive), a warm morning fleece, comfortable shoes, sunscreen, insect repellent, camera, and sunglasses.'
  },
  {
    category: 'health',
    question: 'Do I need a visa or eTA to enter Kenya?',
    answer: 'Yes. Most travelers require an online Electronic Travel Authorisation (eTA) from etakenya.go.ke before travel. We guide you through the quick process.'
  },
  {
    category: 'health',
    question: 'What vaccinations or health precautions are recommended?',
    answer: 'Yellow Fever certificate if coming from an endemic zone, plus standard travel vaccines and malaria prophylactics. Consult your travel clinic.'
  },
  {
    category: 'health',
    question: 'Is travel and medical insurance required?',
    answer: 'Yes. Comprehensive personal travel insurance covering emergency medical expenses, cancellations, and baggage is mandatory for all travelers.'
  },
  {
    category: 'logistics',
    question: 'How do airport transfers and inter-park connections work?',
    answer: 'Your dedicated guide meets you at JKIA or Wilson Airport. We coordinate all road transfers in our 4x4 Land Cruisers and book domestic bush flights.'
  }
];

export default function FAQ({ isStandalone = false }) {
  const { openDrawer } = useTripBuilder();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header-center reveal-up">
          <p className="section-label">FREQUENTLY ASKED QUESTIONS</p>
          {isStandalone ? (
            <h1 className="section-headline">Everything You Need to Know</h1>
          ) : (
            <h2 className="section-headline">Everything You Need to Know</h2>
          )}
          <p className="faq-subtitle">
            Got questions about planning your Kenya safari? Here are answers to the most common inquiries from our travelers.
          </p>
        </div>

        {/* FAQ Search Bar */}
        <div className="faq-search-wrapper reveal-up delay-1">
          <Search size={18} className="faq-search-icon" />
          <input
            type="text"
            className="faq-search-input"
            placeholder="Search questions (e.g., migration, visa, budget, packing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="faq-search-clear" onClick={() => setSearchQuery('')}>
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="faq-category-pills">
          {FAQ_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`faq-cat-pill ${isActive ? 'active' : ''}`}
                onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion-list">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-accordion-trigger"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <div className="faq-chevron-wrapper">
                      <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotated' : ''}`} />
                    </div>
                  </button>
                  <div className="faq-accordion-content">
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="faq-empty-state">
              <p>No questions matched your search "{searchQuery}".</p>
              <button className="faq-reset-btn" onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}>
                View All Questions
              </button>
            </div>
          )}
        </div>

        {/* FAQ CTA Card */}
        <div className="faq-cta-card">
          <div className="faq-cta-content">
            <h3>Still Have Questions?</h3>
            <p>Speak directly with our licensed driver-guides on WhatsApp for instant, personalized answers.</p>
          </div>
          <button className="faq-cta-btn" onClick={() => openDrawer()}>
            <MessageSquare size={18} />
            Ask a Guide on WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}
