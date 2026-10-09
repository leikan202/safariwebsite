import React, { useState } from 'react';
import { CurrencyProvider } from './context/CurrencyContext';
import { TripBuilderProvider } from './context/TripBuilderContext';
import Navbar from './components/Navbar';
import MobileOverlay from './components/MobileOverlay';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Destinations from './components/Destinations';
import WhyUs from './components/WhyUs';
import OurStory from './components/OurStory';

import WildlifeParallax from './components/WildlifeParallax';
import Conservation from './components/Conservation';
import SocialFeed from './components/SocialFeed';
import FAQ from './components/FAQ';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomCTA from './components/MobileBottomCTA';
import TripBuilderDrawer from './components/TripBuilderDrawer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <OurStory />
      <Destinations />
      <WhyUs />
      <WildlifeParallax />
      <Conservation />
      <SocialFeed />
      <MapSection />
      <Contact />
    </>
  );
}

function FAQPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <FAQ />
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <CurrencyProvider>
      <TripBuilderProvider>
        <Router>
          <div className="app">
            <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
            <MobileOverlay isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>

            <Footer />
            <MobileBottomCTA />
            <TripBuilderDrawer />
          </div>
        </Router>
      </TripBuilderProvider>
    </CurrencyProvider>
  );
}
