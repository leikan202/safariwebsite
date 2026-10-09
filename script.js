/**
 * Enkop Safaris — LUXURY MINIMALIST SCRIPT (2026 EDITION)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --------------------------------------------------------------------------
  // 1. NAVBAR SCROLL EFFECT & MOBILE MENU
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileMenu = document.getElementById('closeMobileMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileMenuBtn && mobileMenu && closeMobileMenu) {
    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.add('active'));
    closeMobileMenu.addEventListener('click', () => mobileMenu.classList.remove('active'));
    
    document.querySelectorAll('.overlay-link, .overlay-wa-btn').forEach(el => {
      el.addEventListener('click', () => mobileMenu.classList.remove('active'));
    });
  }

  // --------------------------------------------------------------------------
  // 2. CURRENCY TOGGLE
  // --------------------------------------------------------------------------
  const currencySpans = document.querySelectorAll('.currency-toggle span');
  currencySpans.forEach(span => {
    span.addEventListener('click', (e) => {
      currencySpans.forEach(s => s.classList.remove('active'));
      e.target.classList.add('active');
      // In a real app, this would dispatch an event to update prices
    });
  });

  // --------------------------------------------------------------------------
  // 3. PARALLAX SCROLLING (SPLIT SECTIONS & FULL BLEED)
  // --------------------------------------------------------------------------
  if (!prefersReducedMotion) {
    const parallaxImages = document.querySelectorAll('.parallax-img');
    
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          parallaxImages.forEach(img => {
            const rect = img.parentElement.getBoundingClientRect();
            // Only animate if container is in viewport
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
              // Calculate scroll percentage through the container
              const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
              // Translate Y up to 15% (matching the negative top in CSS)
              const yPos = scrollPercent * 15;
              img.style.transform = `translate3d(0, ${yPos}%, 0)`;
              img.style.willChange = 'transform';
            } else {
              img.style.willChange = 'auto';
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. INTERACTIVE QUIZ DRAWER
  // --------------------------------------------------------------------------
  const waDrawer = document.getElementById('waDrawer');
  const closeWaDrawer = document.getElementById('closeWaDrawer');
  const quizProgress = document.getElementById('quizProgress');
  
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  
  // Quiz State
  let quizData = {
    destination: '',
    month: '',
    groupSize: '',
    notes: ''
  };

  function openWaDrawer() {
    if (waDrawer) waDrawer.classList.add('active');
  }

  function closeWaDrawerFunc() {
    if (waDrawer) {
      waDrawer.classList.remove('active');
      // Optional: reset quiz on close
      // setTimeout(resetQuiz, 500); 
    }
  }

  // Bind all triggers
  const waTriggerIds = [
    'openTripBuilderBtn', 'openTripBuilderBtn2', 'openTripBuilderBtn4',
    'openWhatsappHeaderBtn', 'openWhatsappMobileBtn', 'footerWaBtn',
    'mobileBottomWaBtn'
  ];
  waTriggerIds.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', (e) => { e.preventDefault(); openWaDrawer(); });
  });

  // Also bind destination cards
  document.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('click', () => {
      // Pre-select step 1 based on card
      const destName = card.querySelector('.dest-name').textContent;
      document.querySelectorAll('#step1 .quiz-option').forEach(opt => {
        if (opt.dataset.value === destName) {
          opt.classList.add('selected');
          quizData.destination = destName;
        }
      });
      goToStep(2);
      openWaDrawer();
    });
  });

  if (closeWaDrawer) closeWaDrawer.addEventListener('click', closeWaDrawerFunc);
  if (waDrawer) waDrawer.addEventListener('click', (e) => { if (e.target === waDrawer) closeWaDrawerFunc(); });

  // Navigation Logic
  function goToStep(stepNumber) {
    step1.classList.remove('active');
    step2.classList.remove('active');
    step3.classList.remove('active');

    if (stepNumber === 1) {
      step1.classList.add('active');
      quizProgress.textContent = "Step 1 of 3: Destination";
    } else if (stepNumber === 2) {
      step2.classList.add('active');
      quizProgress.textContent = "Step 2 of 3: Timeline & Group";
    } else if (stepNumber === 3) {
      step3.classList.add('active');
      quizProgress.textContent = "Step 3 of 3: Final Details";
    }
  }

  // Step 1: Selection
  document.querySelectorAll('#step1 .quiz-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove selection from others
      document.querySelectorAll('#step1 .quiz-option').forEach(b => b.classList.remove('selected'));
      e.target.classList.add('selected');
      quizData.destination = e.target.dataset.value;
      
      // Auto-advance after small delay
      setTimeout(() => goToStep(2), 300);
    });
  });

  // Step 2: Selection
  document.querySelectorAll('#step2 .quiz-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#step2 .quiz-option').forEach(b => b.classList.remove('selected'));
      e.target.classList.add('selected');
      quizData.groupSize = e.target.dataset.value;
    });
  });

  document.getElementById('nextToStep3').addEventListener('click', () => {
    const monthSelect = document.getElementById('quizMonth');
    quizData.month = monthSelect.options[monthSelect.selectedIndex].value;
    goToStep(3);
  });

  // Step 3: Submission
  document.getElementById('submitQuizBtn').addEventListener('click', () => {
    quizData.notes = document.getElementById('quizNotes').value.trim();
    
    // Construct WA Message
    const messageText = `Hello Enkop Safaris! I've planned my safari:\n\n- Destination: ${quizData.destination || 'Not sure yet'}\n- Timeline: ${quizData.month || 'Flexible'}\n- Group: ${quizData.groupSize || 'Not specified'}${quizData.notes ? `\n- Notes: ${quizData.notes}` : ''}\n\nCould you connect me with an expert driver guide to discuss?`;

    const encodedMessage = encodeURIComponent(messageText);
    const waUrl = `https://wa.me/254700000000?text=${encodedMessage}`;

    window.open(waUrl, '_blank');
    closeWaDrawerFunc();
  });

  function resetQuiz() {
    quizData = { destination: '', month: '', groupSize: '', notes: '' };
    document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
    document.getElementById('quizMonth').selectedIndex = 0;
    document.getElementById('quizNotes').value = '';
    goToStep(1);
  }

  // --------------------------------------------------------------------------
  // 5. FAQ ACCORDION
  // --------------------------------------------------------------------------
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.faq-answer');
      
      // Toggle current item
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        // Close others (optional, but good for UX)
        document.querySelectorAll('.faq-item.active').forEach(activeItem => {
          activeItem.classList.remove('active');
          activeItem.querySelector('.faq-answer').style.maxHeight = null;
        });
        
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

});
// Liquid Glass Animation Logic
const liquidFilter = document.getElementById('liquid-disp');
if (liquidFilter) {
  let scale = 0;
  let targetScale = 0;
  let animating = false;
  
  function animateLiquid() {
    // Spring physics / easing
    scale += (targetScale - scale) * 0.15;
    liquidFilter.setAttribute('scale', scale);
    
    if (Math.abs(targetScale - scale) > 0.1 || scale > 0.1) {
      requestAnimationFrame(animateLiquid);
    } else {
      scale = 0;
      liquidFilter.setAttribute('scale', 0);
      animating = false;
    }
  }

  const liquidBtns = document.querySelectorAll('.liquid-glass-btn');
  liquidBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      targetScale = 64; // from user's React component displacementScale={64}
      if (!animating) {
        animating = true;
        requestAnimationFrame(animateLiquid);
      }
    });
    btn.addEventListener('mouseleave', () => {
      targetScale = 0;
    });
  });
}

// Currency Toggle Logic
const currencyToggle = document.getElementById('currencyToggle');
if (currencyToggle) {
  const btns = currencyToggle.querySelectorAll('.currency-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isKes = btn.dataset.currency === 'KES';
      
      // Update toggle visual state
      if (isKes) {
        currencyToggle.classList.add('is-kes');
      } else {
        currencyToggle.classList.remove('is-kes');
      }
      
      // Update active classes
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update prices on the page
      document.querySelectorAll('.price-display').forEach(el => {
        const usdPrice = el.dataset.usd;
        const kesPrice = el.dataset.kes;
        if (usdPrice && kesPrice) {
          if (isKes) {
            el.textContent = 'KES ' + parseInt(kesPrice).toLocaleString();
          } else {
            el.textContent = 'USD ' + parseInt(usdPrice).toLocaleString();
          }
        }
      });
    });
  });
}

// Initialize Date Picker
const dateInput = document.getElementById('quizDate');
if (dateInput && typeof flatpickr !== 'undefined') {
  flatpickr(dateInput, {
    minDate: "today",
    dateFormat: "Y-m-d",
    altInput: true,
    altFormat: "F j, Y",
  });
}
