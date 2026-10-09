import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { TripBuilderProvider } from './context/TripBuilderContext';
import Navbar from './components/Navbar';
import MobileOverlay from './components/MobileOverlay';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Services from './components/Services';
import Destinations from './components/Destinations';
import BestTimeToTravel from './components/BestTimeToTravel';
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

import LandCruiserSection from './components/LandCruiserSection';
import LandCruiserPage from './components/LandCruiserPage';
import ItinerariesPage from './components/ItinerariesPage';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <OurStory />
      <Destinations />
      <BestTimeToTravel />
      <WhyUs />
      <LandCruiserSection />
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
          <ScrollToHash />
          <div className="app">
            <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
            <MobileOverlay isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/4x4-landcruisers" element={<LandCruiserPage />} />
              <Route path="/safari-fleet" element={<LandCruiserPage />} />
              <Route path="/itineraries" element={<ItinerariesPage />} />
              <Route path="/safaris" element={<ItinerariesPage />} />
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
