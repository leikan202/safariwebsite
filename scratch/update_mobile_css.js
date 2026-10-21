import fs from 'fs';

const cssPath = 'src/index.css';
let css = fs.readFileSync(cssPath, 'utf8');

const target = '/* ==========================================================================\n   MASTER MOBILE RESPONSIVE ENGINE (ENKOP SAFARIS MOBILE-FIRST OPTIMIZATION)\n   ========================================================================== */';

const parts = css.split(target);
if (parts.length !== 2) {
  console.error('Failed to split at target!');
  process.exit(1);
}

const baseStyles = `
/* ==========================================================================
   OUR STORY BANNER SECTION (BASE)
   ========================================================================== */
.enkop-story-section {
  position: relative;
  background-color: var(--color-bg-light);
  overflow: hidden;
  min-height: 480px;
  display: flex;
  align-items: center;
  padding: 80px 0;
}
.enkop-story-img-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  width: 65%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.enkop-story-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
}
.enkop-story-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    var(--color-bg-light) 0%,
    var(--color-bg-light) 25%,
    rgba(248, 245, 239, 0.75) 45%,
    rgba(248, 245, 239, 0) 80%
  );
}
.enkop-story-container {
  position: relative;
  z-index: 2;
  max-width: 1240px;
  margin: 0 auto;
  width: 100%;
}
.enkop-story-content {
  max-width: 520px;
  text-align: left;
}
.enkop-story-kicker {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-secondary);
  margin-bottom: 12px;
}
.enkop-story-title {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 3.5vw, 3.2rem);
  color: var(--color-primary);
  line-height: 1.15;
  font-weight: 500;
  margin-bottom: 20px;
}
.enkop-story-lead {
  font-family: var(--font-body);
  font-size: 0.94rem;
  line-height: 1.75;
  color: #4A4A4A;
  margin-bottom: 30px;
}
.enkop-story-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background-color: var(--color-secondary);
  color: #FFFFFF;
  padding: 13px 28px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.25s ease;
}
.enkop-story-btn:hover {
  background-color: var(--color-primary);
  transform: translateY(-1px);
}

/* Our Story Modal */
.enkop-story-modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(31, 58, 50, 0.75);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.enkop-story-modal-card {
  background-color: var(--color-bg-light);
  max-width: 680px;
  width: 100%;
  padding: 48px 40px;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid var(--color-accent);
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}
.enkop-story-modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: var(--color-secondary);
  line-height: 1;
}
.enkop-story-modal-kicker {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-grey);
  margin-bottom: 12px;
}
.enkop-story-modal-title {
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: var(--color-primary);
  margin-bottom: 24px;
}
.enkop-story-modal-body {
  font-family: var(--font-body);
  font-size: 0.95rem;
  line-height: 1.8;
  color: #3A3A3A;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ==========================================================================
   SERVICES PRICING (BASE)
   ========================================================================== */
.service-price-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid rgba(107, 74, 53, 0.12);
}
.service-price-kicker {
  font-family: var(--font-body);
  font-size: 0.72rem;
  color: var(--color-grey);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 4px;
}
.service-price-amount {
  color: var(--color-black);
  font-size: 1.15rem;
  font-family: var(--font-display);
  font-weight: 600;
}

/* ==========================================================================
   MINIMALIST LUXURY IVORY FOOTER (BASE)
   ========================================================================== */
.footer-section {
  background-color: var(--color-bg-light);
  border-top: 1px solid rgba(107, 74, 53, 0.15);
  padding: 56px 0 32px;
  color: var(--color-primary);
}
.footer-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
  padding-bottom: 36px;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 16px;
}
.footer-brand-logo {
  height: 72px;
  width: auto;
  object-fit: contain;
}
.footer-brand-text {
  display: flex;
  flex-direction: column;
}
.footer-brand-title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-secondary);
  margin: 0;
  line-height: 1.1;
}
.footer-brand-tagline {
  font-family: var(--font-body);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-grey);
  margin: 3px 0 0 0;
}
.footer-nav {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
}
.footer-nav-link {
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;
  letter-spacing: 0.06em;
  transition: color 0.2s ease;
}
.footer-nav-link:hover {
  color: var(--color-secondary);
}
.footer-social {
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--color-primary);
}
.footer-social-link {
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(107, 74, 53, 0.08);
  transition: all 0.25s ease;
}
.footer-social-link:hover {
  background: var(--color-primary);
  color: #FFFFFF;
  transform: translateY(-2px);
}
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid rgba(107, 74, 53, 0.1);
  font-size: 0.75rem;
  color: var(--color-grey);
  font-family: var(--font-body);
  flex-wrap: wrap;
  gap: 14px;
}
.footer-legal {
  display: flex;
  align-items: center;
  gap: 16px;
}
.footer-legal-btn {
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.footer-legal-bullet {
  color: rgba(107, 74, 53, 0.4);
}
.footer-copyright {
  margin: 0;
}

/* ==========================================================================
   PRE-FOOTER CTA BANNER (BASE)
   ========================================================================== */
.cta-banner {
  background-color: #1F3A32;
  position: relative;
  overflow: hidden;
  padding: 70px 0;
  color: #FFFFFF;
}
.cta-banner-watermark {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 24px;
  opacity: 0.45;
  pointer-events: none;
  z-index: 1;
}
.cta-banner-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  flex-wrap: wrap;
  gap: 24px;
}
.cta-banner-kicker {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin: 0 0 10px 0;
}
.cta-banner-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.2vw, 2.8rem);
  font-weight: 500;
  color: #FFFFFF;
  margin: 0;
  line-height: 1.15;
}
.cta-banner-btn-wrap {
  display: flex;
  align-items: center;
}
.cta-banner-btn {
  background-color: transparent;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  padding: 14px 32px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.25s ease;
}
.cta-banner-btn:hover {
  background-color: var(--color-accent);
  color: var(--color-primary);
}
`;

const mobileEngine = `
/* ==========================================================================
   MASTER MOBILE RESPONSIVE ENGINE (ENKOP SAFARIS MOBILE-FIRST OPTIMIZATION)
   ========================================================================== */
@media (max-width: 768px) {
  :root {
    --spacing-section: 64px;
    --spacing-section-mobile: 48px;
  }

  /* Body scroll lock states */
  body.drawer-open,
  body.modal-open,
  body.mobile-menu-open {
    overflow: hidden !important;
    touch-action: none !important;
  }

  /* App container spacing for sticky bottom bar */
  .app {
    padding-bottom: calc(82px + env(safe-area-inset-bottom, 12px));
    overflow-x: hidden;
    width: 100%;
  }

  /* Container padding */
  .container {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  /* Section Header Standards */
  .section-label {
    font-size: 0.72rem !important;
    letter-spacing: 0.18em !important;
    margin-bottom: 12px !important;
  }
  .section-headline {
    font-size: clamp(1.95rem, 5.8vw, 2.7rem) !important;
    line-height: 1.16 !important;
  }
  .section-header-center {
    margin-bottom: 36px !important;
  }

  /* Form controls: 16px prevents iOS Safari automatic page zoom */
  input, select, textarea {
    font-size: 16px !important;
  }

  /* Smooth touch tap highlights */
  * {
    -webkit-tap-highlight-color: transparent;
  }

  /* Navigation Bar */
  .navbar {
    top: 10px;
    width: calc(100% - 24px);
    left: 12px;
    right: 12px;
    margin: 0 auto;
    padding: 7px 14px;
    border-radius: 100px;
    background: rgba(248, 245, 239, 0.92);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(107, 74, 53, 0.16);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
  }
  .nav-inner {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-logo-img {
    height: 38px;
    width: auto;
    object-fit: contain;
  }
  .navbar.scrolled .nav-logo-img {
    height: 34px;
  }
  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    width: 42px;
    height: 42px;
    padding: 9px;
    background: rgba(31, 58, 50, 0.06);
    border-radius: 50%;
    border: 1px solid rgba(107, 74, 53, 0.12);
  }
  .hamburger span {
    display: block;
    width: 18px;
    height: 2px;
    background-color: var(--color-primary);
    border-radius: 2px;
  }

  /* Hero Section */
  .hero {
    height: 100svh;
    min-height: 520px;
    padding: 0 20px;
  }
  .hero-content {
    margin-top: 10px;
    padding: 0 10px;
  }
  .hero-title {
    font-size: clamp(2.4rem, 7.2vw, 3.6rem) !important;
    line-height: 1.08;
    color: #FFFFFF !important;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  }
  .hero-eyebrow {
    margin-bottom: 14px;
    font-size: 0.75rem;
    letter-spacing: 0.22em;
    color: var(--color-accent);
  }
  .hero-scroll-cta {
    bottom: calc(20px + env(safe-area-inset-bottom, 8px));
  }

  /* Intro Section */
  .intro-section {
    padding: 56px 0;
  }
  .intro-headline {
    font-size: clamp(1.95rem, 5.5vw, 2.6rem);
    line-height: 1.18;
    margin-bottom: 18px;
  }
  .intro-body {
    font-size: 0.92rem;
    line-height: 1.7;
    margin-bottom: 24px;
    padding: 0;
  }

  /* Services / Our Expertise Section */
  .services-section {
    padding: 56px 0;
  }
  .services-grid {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .service-card {
    background: #FFFFFF;
    border: 1px solid rgba(107, 74, 53, 0.12);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .service-card:active {
    transform: scale(0.99);
  }
  .service-card .img-wrapper {
    width: 100%;
    aspect-ratio: 16/10;
    overflow: hidden;
    position: relative;
    border-radius: 0;
  }
  .service-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .service-info {
    padding: 20px 18px 18px;
    text-align: left;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .service-info h3 {
    font-size: 1.45rem;
    margin-bottom: 6px;
    color: var(--color-primary);
  }
  .service-info p {
    font-size: 0.88rem;
    line-height: 1.6;
    color: #555555;
    margin-bottom: 16px;
    flex: 1;
  }
  .service-price-wrap {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px solid rgba(107, 74, 53, 0.1);
    margin-top: auto;
  }
  .service-price-kicker {
    font-size: 0.72rem;
    margin-bottom: 0;
  }
  .service-price-amount {
    font-size: 1.2rem;
  }

  /* Our Story Section (Enkop Difference) */
  .enkop-story-section {
    flex-direction: column !important;
    padding: 0 0 54px 0 !important;
    min-height: auto !important;
  }
  .enkop-story-img-wrapper {
    position: relative !important;
    width: 100% !important;
    height: 240px !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }
  .enkop-story-mask {
    background: linear-gradient(
      to bottom,
      rgba(248, 245, 239, 0) 50%,
      var(--color-bg-light) 100%
    ) !important;
  }
  .enkop-story-container {
    padding: 24px 20px 0 !important;
    max-width: 100% !important;
  }
  .enkop-story-content {
    max-width: 100% !important;
  }
  .enkop-story-title {
    font-size: clamp(1.95rem, 5.5vw, 2.6rem) !important;
    line-height: 1.18 !important;
    margin-bottom: 14px !important;
  }
  .enkop-story-lead {
    font-size: 0.9rem !important;
    line-height: 1.7 !important;
    margin-bottom: 24px !important;
  }
  .enkop-story-btn {
    width: 100% !important;
    justify-content: center !important;
    padding: 14px 24px !important;
  }
  .enkop-story-modal-card {
    padding: 36px 22px !important;
    max-height: 86vh !important;
  }
  .enkop-story-modal-title {
    font-size: 1.8rem !important;
    margin-bottom: 18px !important;
  }
  .enkop-story-modal-body {
    font-size: 0.9rem !important;
    line-height: 1.75 !important;
  }

  /* Destinations Cards */
  .destinations-section {
    padding: 0;
  }
  .dest-grid {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 0;
  }
  .dest-card {
    aspect-ratio: 16/11;
    position: relative;
    overflow: hidden;
  }
  .dest-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.72) 0%,
      rgba(0, 0, 0, 0.3) 45%,
      rgba(0, 0, 0, 0) 75%
    );
    pointer-events: none;
  }
  .dest-label {
    bottom: 20px;
    left: 20px;
    right: 20px;
    z-index: 2;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .dest-name {
    font-size: 2rem !important;
    line-height: 1.1;
    color: #FFFFFF !important;
    margin-bottom: 0;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }
  .dest-action {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.35);
    color: #FFFFFF;
    padding: 6px 14px;
    border-radius: 100px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* Cruiser Fade Sections (Best Time to Go & Land Cruiser Preview) */
  .cruiser-fade-section {
    flex-direction: column !important;
    padding: 0 0 54px 0 !important;
    min-height: auto !important;
  }
  .cruiser-fade-bg-wrapper {
    position: relative !important;
    width: 100% !important;
    height: 240px !important;
    opacity: 1 !important;
    pointer-events: auto !important;
    transform: none !important;
  }
  .cruiser-fade-mask {
    background: linear-gradient(
      to bottom,
      rgba(248, 245, 239, 0) 50%,
      var(--color-bg-light) 100%
    ) !important;
  }
  .cruiser-fade-container {
    justify-content: flex-start !important;
    padding: 24px 20px 0 !important;
    max-width: 100% !important;
  }
  .cruiser-fade-content {
    max-width: 100% !important;
    opacity: 1 !important;
    transform: none !important;
  }
  .cruiser-fade-title {
    font-size: clamp(1.85rem, 5.5vw, 2.4rem);
    line-height: 1.2;
    margin-bottom: 14px;
  }
  .cruiser-fade-lead {
    font-size: 0.9rem;
    line-height: 1.65;
    margin-bottom: 24px;
  }
  .cruiser-fade-features {
    gap: 16px;
    margin-bottom: 28px;
  }
  .cruiser-fade-feature-item {
    gap: 14px;
  }
  .cruiser-fade-feature-icon {
    width: 36px;
    height: 36px;
  }
  .cruiser-fade-feature-text h4 {
    font-size: 1.1rem;
    margin-bottom: 2px;
  }
  .cruiser-fade-feature-text p {
    font-size: 0.84rem;
  }
  .cruiser-fade-btn {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
  }

  /* Reveal-up on mobile should never leave blank gaps */
  .reveal-up {
    opacity: 1 !important;
    transform: none !important;
  }

  /* Why Us */
  .why-us-section {
    padding: 56px 0;
  }
  .why-us-inner {
    flex-direction: column;
    gap: 32px;
  }
  .why-us-image {
    height: 260px;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
  }
  .why-us-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .features-list {
    gap: 20px;
    margin-top: 24px;
  }
  .feature-item {
    gap: 14px;
  }
  .feature-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(107, 74, 53, 0.08);
  }
  .feature-text h4 {
    font-size: 1.15rem;
    margin-bottom: 4px;
  }
  .feature-text p {
    font-size: 0.86rem;
    line-height: 1.6;
  }

  /* Wildlife Parallax & Split Sections */
  .split-section {
    flex-direction: column !important;
    min-height: auto;
  }
  .split-image {
    height: 260px;
    width: 100%;
  }
  .split-content {
    padding: 40px 20px;
  }
  .split-headline {
    font-size: clamp(1.95rem, 5.5vw, 2.5rem);
    margin-bottom: 18px;
  }
  .split-body {
    font-size: 0.92rem;
    max-width: 100%;
  }

  /* Conservation */
  .conservation-section {
    padding: 72px 0;
  }
  .conservation-body {
    font-size: 0.95rem;
    margin: 16px auto 28px;
    padding: 0;
  }

  /* Map Section V2 */
  .map-section-v2 {
    padding: 56px 0 0;
  }
  .map-v2-wrapper {
    height: auto;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .map-v2-wrapper iframe {
    height: 230px;
    border-radius: 16px 16px 0 0;
  }
  .map-float-card {
    position: static !important;
    width: 100% !important;
    border-radius: 0 0 16px 16px !important;
    padding: 20px !important;
    box-shadow: none !important;
    border: 1px solid rgba(107, 74, 53, 0.12);
    border-top: none;
    background: #FFFFFF;
  }
  .map-directions-v2 {
    width: 100%;
    justify-content: center;
    padding: 14px 20px;
    border-radius: 100px;
  }

  /* Contact Section */
  .contact-section {
    padding: 72px 0;
  }
  .contact-headline {
    font-size: clamp(2rem, 5.8vw, 2.8rem);
    line-height: 1.15;
  }
  .contact-body {
    font-size: 0.92rem;
    margin-bottom: 28px;
    padding: 0;
  }

  /* Pre-footer CTA banner */
  .cta-banner {
    padding: 48px 0 !important;
  }
  .cta-banner-watermark {
    display: none !important;
  }
  .cta-banner-container {
    justify-content: center !important;
    text-align: center !important;
    gap: 20px !important;
  }
  .cta-banner-btn-wrap {
    width: 100% !important;
  }
  .cta-banner-btn {
    width: 100% !important;
    justify-content: center !important;
    padding: 14px 24px !important;
  }

  /* Ivory Footer */
  .footer-section {
    padding: 44px 0 28px;
  }
  .footer-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 28px;
    padding-bottom: 28px;
  }
  .footer-brand {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  .footer-brand-logo {
    height: 60px;
  }
  .footer-nav {
    justify-content: center;
    gap: 14px 20px;
  }
  .footer-nav-link {
    font-size: 0.8rem;
    padding: 6px 4px;
    min-height: 40px;
    display: inline-flex;
    align-items: center;
  }
  .footer-social {
    gap: 14px;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 14px;
    text-align: center;
    padding-top: 20px;
  }
  .footer-legal {
    justify-content: center;
    gap: 14px;
  }

  /* Mobile Sticky Bottom CTA Bar */
  .mobile-bottom-cta {
    display: block !important;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 10px 16px calc(10px + env(safe-area-inset-bottom, 10px));
    background: rgba(248, 245, 239, 0.94);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border-top: 1px solid rgba(107, 74, 53, 0.16);
    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.09);
    transform: translateY(110%);
    opacity: 0;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
  }
  .mobile-bottom-cta.visible {
    transform: translateY(0);
    opacity: 1;
  }
  .mobile-bottom-cta-inner {
    display: flex;
    gap: 10px;
    max-width: 480px;
    margin: 0 auto;
    width: 100%;
  }
  .mobile-cta-wa {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #FFFFFF;
    color: #128C7E;
    border: 1.5px solid rgba(37, 211, 102, 0.6);
    padding: 12px 14px;
    border-radius: 100px;
    font-family: var(--font-ui);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.2s ease;
    min-height: 46px;
  }
  .mobile-cta-wa:active {
    transform: scale(0.97);
  }
  .mobile-cta-plan {
    flex: 1.35;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: var(--color-primary);
    color: #FFFFFF;
    border: none;
    padding: 12px 18px;
    border-radius: 100px;
    font-family: var(--font-ui);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(31, 58, 50, 0.28);
    transition: all 0.2s ease;
    min-height: 46px;
  }
  .mobile-cta-plan:active {
    transform: scale(0.97);
  }

  /* Destination Dossier Modal */
  .modal-overlay {
    align-items: flex-end !important;
    padding: 0 !important;
  }
  .dest-editorial-modal {
    width: 100% !important;
    max-width: 100% !important;
    height: 94vh !important;
    max-height: 94vh !important;
    border-radius: 24px 24px 0 0 !important;
  }
  .dest-editorial-header {
    height: 180px !important;
  }
  .dest-editorial-meta {
    top: 14px;
    left: 16px;
    right: 56px;
    gap: 8px;
  }
  .dest-editorial-close {
    top: 12px !important;
    right: 14px !important;
    width: 38px !important;
    height: 38px !important;
  }
  .dest-editorial-headline {
    bottom: 16px !important;
    left: 18px !important;
    right: 18px !important;
  }
  .dest-editorial-headline h2 {
    font-size: 1.65rem !important;
  }
  .dest-editorial-body {
    padding: 18px 16px calc(24px + env(safe-area-inset-bottom, 12px)) !important;
  }
  .dest-editorial-tabs {
    gap: 16px !important;
    margin-bottom: 18px !important;
  }
  .dest-specs-strip {
    flex-direction: column !important;
    gap: 14px !important;
    padding: 14px 0 !important;
    margin-bottom: 22px !important;
  }
  .dest-spec-divider {
    display: none !important;
  }
  .dest-highlights-list {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }
  .dest-logistics-grid {
    grid-template-columns: 1fr !important;
    gap: 14px !important;
  }
  .dest-modal-itin-callout {
    padding: 18px 16px !important;
  }
  .dest-modal-itin-headline {
    font-size: 1.25rem !important;
  }
  .dest-modal-view-itin-btn {
    width: 100% !important;
    justify-content: center !important;
  }

  /* Curated Safari Circuits / Itineraries Page */
  .itineraries-topbar {
    padding-top: 86px;
    padding-bottom: 12px;
  }
  .itineraries-container {
    padding: 0 16px !important;
  }
  .itineraries-kicker {
    font-size: 0.68rem;
  }
  .itineraries-title {
    font-size: clamp(1.95rem, 5.5vw, 2.6rem);
  }
  .itineraries-lead {
    font-size: 0.88rem;
    line-height: 1.65;
  }
  /* Horizontal scrollable region filter */
  .itineraries-filter-strip {
    display: flex !important;
    flex-direction: column !important;
    gap: 8px !important;
    margin-bottom: 20px !important;
    padding-bottom: 14px !important;
    border-bottom: 1px solid rgba(107, 74, 53, 0.12) !important;
  }
  .filter-pills {
    display: flex !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    -webkit-overflow-scrolling: touch !important;
    scrollbar-width: none !important;
    gap: 8px !important;
    padding-bottom: 6px !important;
    margin: 0 -16px !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
  .filter-pills::-webkit-scrollbar {
    display: none !important;
  }
  .filter-pill {
    flex-shrink: 0 !important;
    padding: 8px 16px !important;
    white-space: nowrap !important;
    border-radius: 100px !important;
    font-size: 0.75rem !important;
  }
  .itin-compact-view {
    flex-direction: column !important;
    border-radius: 14px !important;
    overflow: hidden !important;
    border: 1px solid rgba(107, 74, 53, 0.15) !important;
    background: #FFFFFF !important;
  }
  .itin-compact-image {
    width: 100% !important;
    height: 220px !important;
    flex: none !important;
  }
  .itin-compact-content {
    padding: 20px 18px !important;
  }
  .itin-card-badges {
    flex-wrap: wrap !important;
    gap: 6px !important;
    margin-bottom: 10px !important;
  }
  .itin-card-title {
    font-size: 1.4rem !important;
    line-height: 1.2 !important;
    margin-bottom: 8px !important;
  }
  .itin-card-tagline {
    font-size: 0.88rem !important;
    margin-bottom: 10px !important;
  }
  .itin-compact-desc {
    font-size: 0.82rem !important;
    line-height: 1.55 !important;
  }
  .itin-compact-footer {
    flex-direction: column !important;
    gap: 14px !important;
    align-items: stretch !important;
    padding-top: 16px !important;
    border-top: 1px solid rgba(107, 74, 53, 0.1) !important;
    margin-top: 16px !important;
  }
  .itin-price-box {
    text-align: left !important;
  }
  .itin-btn-primary {
    width: 100% !important;
    justify-content: center !important;
    padding: 13px 20px !important;
    border-radius: 100px !important;
  }

  /* Dedicated 4x4 Fleet Page */
  .cruiser-page-topbar {
    padding-top: 86px;
    padding-bottom: 12px;
  }
  .cruiser-fleet-container {
    padding: 0 16px !important;
  }
  .cruiser-fleet-title {
    font-size: clamp(1.95rem, 5.5vw, 2.6rem);
  }
  .cruiser-fleet-lead {
    font-size: 0.9rem;
    line-height: 1.65;
  }
  .cruiser-fleet-figure {
    border-radius: 16px;
    margin-bottom: 28px;
  }
  .cruiser-specs-grid {
    grid-template-columns: 1fr !important;
    gap: 14px !important;
  }
  .cruiser-spec-card {
    padding: 20px 18px !important;
    border-radius: 12px !important;
  }
  .cruiser-comparison-row {
    grid-template-columns: 1fr !important;
    padding: 16px !important;
    gap: 12px !important;
    border-radius: 12px !important;
  }
  .cruiser-guide-card {
    padding: 20px 18px !important;
    border-radius: 12px !important;
  }
  .cruiser-cta-box {
    padding: 32px 20px !important;
    border-radius: 16px !important;
  }
}
`;

const newCSS = parts[0] + baseStyles + '\n' + target + '\n' + mobileEngine;
fs.writeFileSync(cssPath, newCSS, 'utf8');
console.log('src/index.css updated successfully with base styles and optimized mobile engine!');
