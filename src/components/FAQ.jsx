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
    answer: 'The Great Wildebeest Migration typically arrives in the Maasai Mara from Tanzania’s Serengeti between July and August, remaining through October. July–August offers peak dramatic Mara River crossings, while September–October provides abundant predator action across golden savannah plains. Please note that as a natural wildlife event, exact timing depends heavily on seasonal rainfall and cannot be fully guaranteed.'
  },
  {
    category: 'planning',
    question: 'How far in advance should I book my Kenya safari?',
    answer: 'For peak season travel (July–October and December–January), we recommend booking 6 to 9 months in advance to secure top luxury tented camps and private conservancies. However, because we work directly with licensed guides, we can also accommodate last-minute bookings subject to lodge availability.'
  },
  {
    category: 'booking',
    question: 'Why should I book directly with Safari Direct Kenya instead of a travel agency?',
    answer: 'Booking directly connects you straight to licensed local driver-guides without third-party commission markups. You get 100% transparent pricing, a custom-crafted itinerary tailored to your exact budget, and direct WhatsApp communication with the team on the ground.'
  },
  {
    category: 'booking',
    question: 'What payment currencies and methods do you accept?',
    answer: 'We accept both USD ($) and KES (Kenyan Shillings). Payments can be made securely via International Bank Wire Transfer, Credit/Debit Cards, or local M-Pesa. A 30% deposit secures your booking, with the remaining balance due 30 days prior to arrival.'
  },
  {
    category: 'booking',
    question: 'What is your deposit & flexible booking policy?',
    answer: 'We require a 30% deposit to lock in your private 4x4 Land Cruiser and lodge reservations. If your travel dates change, we offer flexible date rebooking options up to 30 days before departure at no extra penalty.'
  },
  {
    category: 'experience',
    question: 'What is included in a custom Safari Direct Kenya package?',
    answer: 'Our packages are all-inclusive of private 4x4 Land Cruiser transport with pop-up roof, experienced licensed driver-guide, full-board lodge/camp accommodations, all national park & conservancy entry fees, unlimited game drives, and complimentary bottled water. Many packages also include temporary AMREF Flying Doctors evacuation cover (which provides emergency airlift from the bush to a Nairobi hospital, but does not cover the hospital medical bills).'
  },
  {
    category: 'experience',
    question: 'What type of safari vehicle will we be traveling in?',
    answer: 'You will travel in a custom-built 4x4 Toyota Land Cruiser specially fitted with pop-up roofs for 360-degree game viewing, high ground clearance, wide sliding windows, charging sockets, fridge/cooler box, and long-range HF radio communication.'
  },
  {
    category: 'experience',
    question: 'Are your safaris family-friendly for children and seniors?',
    answer: 'Yes! All our safaris are 100% private, meaning you set the pace of game drives. We pair families with child-friendly guides, recommend lodges with swimming pools and family suites, and tailor daily schedules around rest times.'
  },
  {
    category: 'experience',
    question: 'What should I pack for a Kenya bush safari?',
    answer: 'We recommend lightweight neutral-colored clothing (khaki, beige, green), a warm jacket or fleece for early morning game drives, comfortable walking shoes, sunscreen, high-SPF lip balm, insect repellent, sunglasses, camera with zoom lens, and binoculars.'
  },
  {
    category: 'health',
    question: 'Do I need a visa or eTA to enter Kenya?',
    answer: 'Yes, most foreign visitors require an Electronic Travel Authorisation (eTA) applied online prior to travel via the official Kenya government portal (etakenya.go.go.ke). Processing takes 3 working days, and our team provides step-by-step guidance.'
  },
  {
    category: 'health',
    question: 'What vaccinations or health precautions are recommended?',
    answer: 'Yellow Fever vaccination is required if traveling from a yellow fever endemic country. Routine vaccines and malaria prophylactics are generally advised for safari parks. We strongly recommend consulting your local travel clinic prior to departure.'
  },
  {
    category: 'health',
    question: 'Is travel and medical insurance required?',
    answer: 'Yes, comprehensive travel insurance is strictly mandatory for all guests. Your policy must cover medical emergencies, hospital bills, trip cancellation, repatriation, and loss of baggage. Safari Direct Kenya cannot be held liable for medical costs or trip interruptions.'
  },
  {
    category: 'logistics',
    question: 'How do airport transfers and inter-park connections work?',
    answer: 'Our private licensed guide meets you directly at Jomo Kenyatta International Airport (JKIA) or Wilson Airport with a personalized name board. We handle all seamless transfers between Nairobi, national parks, and coastal destinations (Diani, Watamu) via 4x4 Cruiser or domestic bush flights.'
  }
];

export default function FAQ() {
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
        <div className="section-header-center">
          <p className="section-label">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="section-headline">Everything You Need to Know</h2>
          <p className="faq-subtitle">
            Got questions about planning your Kenya safari? Here are answers to the most common inquiries from our travelers.
          </p>
        </div>

        {/* FAQ Search Bar */}
        <div className="faq-search-wrapper">
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
