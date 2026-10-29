import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollReveal Hook
 * Automatically observes elements with reveal classes and toggles .is-visible
 * Also drives a sleek top scroll progress indicator.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // 1. Reading Scroll Progress Bar
    const progressBar = document.getElementById('scroll-progress');
    const updateProgress = () => {
      if (!progressBar) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    // 2. IntersectionObserver for reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    const elementsToObserve = document.querySelectorAll(
      '.reveal-up, .reveal-fade, .reveal-scale, .reveal-slide-left, .reveal-slide-right, .reveal-stagger'
    );
    elementsToObserve.forEach((el) => {
      // If already in viewport on load, immediately reveal
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      observer.disconnect();
    };
  }, [location.pathname, location.hash]);
}
