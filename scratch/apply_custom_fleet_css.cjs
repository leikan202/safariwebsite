const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'src', 'index.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Locate the old fleet CSS block
const startMarker = '/* --- Dedicated Luxury Fleet Page Styles --- */';
const endMarker = '/* ====================================================\n   DESTINATION MODAL ITINERARY CALLOUT';
const endMarkerAlt = '/* ====================================================\r\n   DESTINATION MODAL ITINERARY CALLOUT';

let startIndex = css.indexOf(startMarker);
let endIndex = css.indexOf(endMarker);
if (endIndex === -1) {
  endIndex = css.indexOf(endMarkerAlt);
}

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found! startIndex:', startIndex, 'endIndex:', endIndex);
  process.exit(1);
}

const newCruiserCSS = `/* --- Dedicated Custom 4x4 Fleet Page (Architectural Luxury Safari) --- */
.cruiser-custom-page {
  background-color: #FAF8F5;
  min-height: 100vh;
  padding: 130px 24px 80px 24px;
}

.cruiser-page-wrapper {
  max-width: 1040px;
  margin: 0 auto;
  width: 100%;
}

/* Editorial Header Block */
.cruiser-editorial-header {
  text-align: center;
  margin-bottom: 32px;
}

.cruiser-sub-kicker {
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #8C6A52;
  margin-bottom: 12px;
}

.cruiser-main-title {
  font-family: var(--font-heading);
  font-size: clamp(2.3rem, 4.4vw, 3.4rem);
  font-weight: 400;
  color: #172E27;
  line-height: 1.15;
  margin: 0 0 14px 0;
  letter-spacing: -0.01em;
}

.cruiser-main-subtitle {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  font-weight: 400;
  color: #555E57;
  max-width: 620px;
  margin: 0 auto 26px;
  line-height: 1.48;
}

/* 4 Feature Badges Strip */
.cruiser-badge-strip {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.cruiser-badge-item {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #4A524D;
  font-family: var(--font-body);
  font-size: 0.64rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.cruiser-badge-icon {
  color: #8C6A52;
  flex-shrink: 0;
}

/* Header Buttons */
.cruiser-header-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
}

.cruiser-btn-dark {
  background-color: #172E27;
  color: #FFFFFF;
  border: 1px solid #172E27;
  border-radius: 2px;
  padding: 12px 24px;
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 6px rgba(23, 46, 39, 0.1);
}

.cruiser-btn-dark:hover {
  background-color: #0F1E19;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(23, 46, 39, 0.18);
}

.cruiser-btn-outline {
  background-color: transparent;
  color: #172E27;
  border: 1px solid rgba(23, 46, 39, 0.25);
  border-radius: 2px;
  padding: 12px 22px;
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cruiser-btn-outline:hover {
  background-color: rgba(23, 46, 39, 0.04);
  border-color: #172E27;
}

/* Photo Stage */
.cruiser-photo-stage {
  width: 100%;
  margin: 0 auto 72px;
}

.cruiser-photo-frame {
  position: relative;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.08);
}

.cruiser-stage-img {
  width: 100%;
  height: auto;
  max-height: 540px;
  object-fit: cover;
  display: block;
}

.cruiser-photo-caption-badge {
  position: absolute;
  bottom: 18px;
  left: 20px;
  background: rgba(250, 248, 245, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  padding: 6px 14px;
  font-family: var(--font-body);
  font-size: 0.66rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: #4B534E;
}

/* Editorial Section Blocks */
.cruiser-editorial-section {
  margin-bottom: 72px;
}

.cruiser-section-label-block {
  margin-bottom: 24px;
}

.cruiser-label-kicker {
  font-family: var(--font-body);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #8C6A52;
  margin-bottom: 6px;
}

.cruiser-section-headline {
  font-family: var(--font-heading);
  font-size: clamp(1.7rem, 2.8vw, 2.2rem);
  color: #172E27;
  font-weight: 400;
  margin: 0;
  letter-spacing: -0.01em;
}

/* Specs Matrix (6 boxes in 3 columns) */
.cruiser-specs-matrix {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.cruiser-spec-box {
  background: #FFFFFF;
  border: 1px solid rgba(140, 106, 82, 0.16);
  border-radius: 2px;
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.cruiser-spec-box:hover {
  border-color: rgba(140, 106, 82, 0.35);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
}

.spec-code {
  font-family: var(--font-body);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8C6A52;
  margin-bottom: 10px;
}

.spec-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 500;
  color: #172E27;
  margin: 0 0 8px 0;
}

.spec-detail {
  font-family: var(--font-body);
  font-size: 0.8rem;
  line-height: 1.58;
  color: #555E57;
  margin: 0;
}

/* Distinction Rows (3 rows comparison) */
.cruiser-rows-matrix {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cruiser-distinction-row {
  display: grid;
  grid-template-columns: 240px 1fr 1fr;
  background: #FFFFFF;
  border: 1px solid rgba(140, 106, 82, 0.16);
  border-radius: 2px;
  padding: 22px 28px;
  align-items: center;
  gap: 28px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.cruiser-distinction-row:hover {
  border-color: rgba(140, 106, 82, 0.35);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
}

.dist-col-aspect .dist-code {
  font-family: var(--font-body);
  font-size: 0.6rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #8C6A52;
  font-weight: 600;
  margin-bottom: 4px;
  display: block;
}

.dist-col-aspect .dist-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: #172E27;
  font-weight: 500;
  margin: 0;
}

.dist-col-cruiser .dist-brand-tag {
  font-family: var(--font-body);
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #172E27;
  font-weight: 700;
  margin-bottom: 4px;
  display: block;
}

.dist-col-cruiser p {
  font-family: var(--font-body);
  font-size: 0.8rem;
  line-height: 1.55;
  color: #37413B;
  margin: 0;
  font-weight: 500;
}

.dist-col-van .dist-van-tag {
  font-family: var(--font-body);
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #8C847E;
  font-weight: 600;
  margin-bottom: 4px;
  display: block;
}

.dist-col-van p {
  font-family: var(--font-body);
  font-size: 0.8rem;
  line-height: 1.55;
  color: #737A74;
  margin: 0;
}

/* Quote Section */
.cruiser-quote-section {
  text-align: center;
  margin: 80px auto 72px;
  max-width: 800px;
  padding: 0 16px;
}

.cruiser-quote-kicker {
  font-family: var(--font-body);
  font-size: 0.66rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #8C6A52;
  font-weight: 600;
  margin-bottom: 20px;
}

.cruiser-quote-text {
  font-family: var(--font-heading);
  font-style: italic;
  font-size: clamp(1.35rem, 2.4vw, 1.85rem);
  color: #172E27;
  line-height: 1.4;
  margin: 0 auto 20px;
  max-width: 720px;
}

.cruiser-quote-creds {
  font-family: var(--font-body);
  font-size: 0.64rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6C746E;
  font-weight: 500;
  margin: 0;
}

/* CTA Card */
.cruiser-banner-cta {
  background: #172E27;
  border-radius: 2px;
  padding: 40px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 28px;
  margin-bottom: 60px;
}

.cruiser-banner-left {
  flex: 1;
}

.cruiser-banner-kicker {
  font-family: var(--font-body);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #D3B88C;
  font-weight: 600;
  margin-bottom: 8px;
}

.cruiser-banner-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: #FFFFFF;
  font-weight: 400;
  line-height: 1.25;
  margin: 0;
}

.cruiser-banner-btn {
  background-color: #E2DBD0;
  color: #172E27;
  border: none;
  border-radius: 2px;
  padding: 14px 28px;
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.cruiser-banner-btn:hover {
  background-color: #ECE5DC;
  transform: translateY(-1px);
}

`;

css = css.slice(0, startIndex) + newCruiserCSS + css.slice(endIndex);

// 2. Remove obsolete fleet rules in bottom mobile media query if present
const mobileFleetMarker = '  /* Dedicated 4x4 Fleet Page */';
const mobileFleetEnd = '  .fleet-btn-primary,\n  .fleet-btn-secondary {\n    width: 100% !important;\n    justify-content: center !important;\n  }';
const mobileFleetEndAlt = '  .fleet-btn-primary,\r\n  .fleet-btn-secondary {\r\n    width: 100% !important;\r\n    justify-content: center !important;\r\n  }';

let mobStart = css.indexOf(mobileFleetMarker);
if (mobStart !== -1) {
  let mobEnd = css.indexOf(mobileFleetEnd, mobStart);
  let len = mobileFleetEnd.length;
  if (mobEnd === -1) {
    mobEnd = css.indexOf(mobileFleetEndAlt, mobStart);
    len = mobileFleetEndAlt.length;
  }
  if (mobEnd !== -1) {
    const newMobileRules = `  /* Dedicated Custom 4x4 Fleet Mobile */
  .cruiser-custom-page {
    padding: 100px 16px 50px 16px !important;
  }
  .cruiser-badge-strip {
    gap: 14px 20px !important;
  }
  .cruiser-specs-matrix {
    grid-template-columns: 1fr !important;
  }
  .cruiser-distinction-row {
    grid-template-columns: 1fr !important;
    gap: 14px !important;
    padding: 20px 18px !important;
  }
  .cruiser-banner-cta {
    flex-direction: column !important;
    text-align: left !important;
    align-items: stretch !important;
    padding: 30px 20px !important;
    gap: 20px !important;
  }
  .cruiser-banner-btn {
    width: 100% !important;
    text-align: center !important;
  }
  .cruiser-header-buttons {
    flex-direction: column !important;
    width: 100% !important;
  }
  .cruiser-btn-dark,
  .cruiser-btn-outline {
    width: 100% !important;
    justify-content: center !important;
  }`;
    css = css.slice(0, mobStart) + newMobileRules + css.slice(mobEnd + len);
  }
}

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully updated src/index.css with custom fleet styles!');
