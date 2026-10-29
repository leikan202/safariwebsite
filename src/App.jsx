import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { TripBuilderProvider } from './context/TripBuilderContext';
import { useScrollReveal } from './hooks/useScrollReveal';
import SEO from './components/SEO';
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
const LandCruiserPage = React.lazy(() => import('./components/LandCruiserPage'));
const ItinerariesPage = React.lazy(() => import('./components/ItinerariesPage'));

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
      <SEO
        title="Bespoke Safaris Led by Licensed Kenyan Driver-Guides"
        description="Private Kenyan safaris crafted and guided by licensed KPSGA naturalists in custom 4x4 Land Cruisers. Direct booking, transparent rates, Maasai Mara, Amboseli & beyond."
        keywords="Kenya safari, Maasai Mara safari, Amboseli safari, private Kenya safari, licensed Kenyan driver guide, 4x4 Land Cruiser safari, Wildebeest migration Kenya, bespoke African safari, Enkop Safaris"
        canonical="https://safaridirectkenya.com/"
      />
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
      <SEO
        title="Kenya Safari FAQ & Travel Guide"
        description="Answers to frequently asked questions about Kenya safaris: migration timing, eTA visas, packing advice, costs, private vehicles, safety, and payment options."
        keywords="Kenya safari FAQ, best time to visit Maasai Mara, Kenya visa requirements, safari packing list Kenya, safari costs Kenya"
        canonical="https://safaridirectkenya.com/faq"
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Safari FAQ', item: '/faq' }
        ]}
      />
      <FAQ isStandalone={true} />
    </div>
  );
}

function AppLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useScrollReveal();

  return (
    <div className="app">
      {/* Sleek Champagne Gold Scroll Reading Progress Indicator */}
      <div id="scroll-progress" className="scroll-progress-bar" aria-hidden="true" />
      
      <ScrollToHash />
      <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      <MobileOverlay isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      
      <React.Suspense fallback={<div className="page-route-loader" aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/4x4-landcruisers" element={<LandCruiserPage />} />
          <Route path="/safari-fleet" element={<LandCruiserPage />} />
          <Route path="/itineraries" element={<ItinerariesPage />} />
          <Route path="/safaris" element={<ItinerariesPage />} />
        </Routes>
      </React.Suspense>

      <Footer />
      <MobileBottomCTA />
      <TripBuilderDrawer />
    </div>
  );
}

export default function App() {
  return (
    <CurrencyProvider>
      <TripBuilderProvider>
        <Router>
          <AppLayout />
        </Router>
      </TripBuilderProvider>
    </CurrencyProvider>
  );
}

