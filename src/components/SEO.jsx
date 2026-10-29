import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'Enkop Safaris — Bespoke Safaris Led by Licensed Kenyan Driver-Guides';
const DEFAULT_DESC = 'Bespoke Kenyan safaris led by licensed KPSGA driver-guides. Direct bookings, transparent pricing, 15-minute response promise, no middleman fees. Maasai Mara, Amboseli, Laikipia & Diani Beach.';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80';
const BASE_URL = 'https://safaridirectkenya.com';

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  schema,
  breadcrumbs
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    const finalTitle = title ? `${title} | Enkop Safaris` : DEFAULT_TITLE;
    document.title = finalTitle;

    // Helper to set or create meta tag
    const setMetaTag = (selector, attributeName, attributeValue, content) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attributeName, attributeValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Helper to set or create link tag
    const setLinkTag = (rel, href) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    const finalDesc = description || DEFAULT_DESC;
    const finalImage = ogImage || DEFAULT_IMAGE;
    const currentUrl = canonical || `${BASE_URL}${location.pathname}`;

    // Standard Meta
    setMetaTag('meta[name="description"]', 'name', 'description', finalDesc);
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);
    }
    setLinkTag('canonical', currentUrl);

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', finalTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', finalDesc);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', finalImage);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Enkop Safaris');

    // Twitter Card
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', finalTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', finalDesc);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', finalImage);

    // 2. Dynamic JSON-LD Schema
    const scriptId = 'dynamic-route-schema';
    let scriptTag = document.getElementById(scriptId);

    const schemasToInject = [];

    // Optional BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.name,
          item: crumb.item.startsWith('http') ? crumb.item : `${BASE_URL}${crumb.item}`
        }))
      });
    }

    // Custom Route Schema
    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    if (schemasToInject.length > 0) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemasToInject.length === 1 ? schemasToInject[0] : schemasToInject);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, keywords, canonical, ogImage, ogType, schema, breadcrumbs, location.pathname]);

  return null;
}
