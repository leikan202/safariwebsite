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
import GoogleReviews from './components/GoogleReviews';
import WildlifeParallax from './components/WildlifeParallax';
import Conservation from './components/Conservation';
import SocialFeed from './components/SocialFeed';
import FullBleed from './components/FullBleed';
import FAQ from './components/FAQ';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomCTA from './components/MobileBottomCTA';
import TripBuilderDrawer from './components/TripBuilderDrawer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <CurrencyProvider>
      <TripBuilderProvider>
        <div className="app">
          <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />
          <MobileOverlay isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
          <Hero />
          <Intro />
          <Services />
          <Destinations />
          <WhyUs />
          <GoogleReviews />
          <WildlifeParallax />
          <Conservation />
          <SocialFeed />
          <FullBleed />
          <FAQ />
          <MapSection />
          <Contact />
          <Footer />
          <MobileBottomCTA />
          <TripBuilderDrawer />
        </div>
      </TripBuilderProvider>
    </CurrencyProvider>
  );
}
