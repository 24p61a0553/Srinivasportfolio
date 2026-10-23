/**
 * SRINIVAS BHUKYA - PORTFOLIO JAVASCRIPT
 * Description: Client-side interactivity, navigation, scroll effects, 
 *              form validation, and accessible UI controls.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. DOM ELEMENT REFERENCES
     ========================================================================== */
  const header = document.getElementById('header');
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav__link');
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const currentYearSpan = document.getElementById('current-year');
  const sections = document.querySelectorAll('section[id]');
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const toastElement = document.getElementById('toast');

  /* ==========================================================================
     2. DYNAMIC COPYRIGHT YEAR
     ========================================================================== */
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     3. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const openMenu = () => {
    if (navMenu) {
      navMenu.classList.add('show-menu');
      navToggle?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
  };

  const closeMenu = () => {
    if (navMenu) {
      navMenu.classList.remove('show-menu');
      navToggle?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = ''; // Restore background scrolling
    }
  };

  if (navToggle) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      openMenu();
    });
  }

  if (navClose) {
    navClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  // Close menu when clicking on any navigation item
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', (event) => {
    if (navMenu && navMenu.classList.contains('show-menu')) {
      const isClickInside = navMenu.contains(event.target) || (navToggle && navToggle.contains(event.target));
      if (!isClickInside) {
        closeMenu();
      }
    }
  });

  // Close menu on ESC key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('show-menu')) {
      closeMenu();
      navToggle?.focus();
    }
  });

  /* ==========================================================================
     4. HEADER SCROLL EFFECT
     ========================================================================== */
  const handleHeaderScroll = () => {
    if (!header) return;
    if (window.scrollY >= 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Run on initial load

  /* ==========================================================================
     5. SCROLLSPY (ACTIVE NAV LINK HIGHLIGHT)
     ========================================================================== */
  const handleScrollSpy = () => {
    const scrollY = window.pageYOffset || window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingNavLink = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

      if (matchingNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingNavLink.classList.add('active-link');
        } else {
          matchingNavLink.classList.remove('active-link');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScrollSpy, { passive: true });

  /* ==========================================================================
     6. SCROLL TO TOP FLOATING BUTTON
     ========================================================================== */
  const handleScrollToTopVisibility = () => {
    if (!scrollToTopBtn) return;
    if (window.scrollY >= 400) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', handleScrollToTopVisibility, { passive: true });

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     7. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Unobserve once animated
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver isn't supported
    revealElements.forEach((el) => el.classList.add('active'));
  }

  /* ==========================================================================
     8. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  let toastTimer = null;
  const showToast = (message, duration = 4000) => {
    if (!toastElement) return;

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastElement.innerHTML = `<i class="fa-solid fa-circle-info" style="color: var(--accent-purple-light);"></i> <span>${message}</span>`;
    toastElement.classList.add('show');

    toastTimer = setTimeout(() => {
      toastElement.classList.remove('show');
    }, duration);
  };

  /* ==========================================================================
     9. CONTACT FORM VALIDATION & CLIENT-SIDE FEEDBACK
     ========================================================================== */
  if (contactForm) {
    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const subjectInput = document.getElementById('user-subject');
    const messageInput = document.getElementById('user-message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');

    // Email format validator
    const isValidEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
      return emailRegex.test(String(email).toLowerCase());
    };

    // Generic input validation handler
    const validateField = (input, errorElement, condition) => {
      if (!condition) {
        input.classList.add('is-invalid');
        errorElement.classList.add('visible');
        return false;
      } else {
        input.classList.remove('is-invalid');
        errorElement.classList.remove('visible');
        return true;
      }
    };

    // Real-time error clearing on input
    nameInput?.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 2) {
        validateField(nameInput, nameError, true);
      }
    });

    emailInput?.addEventListener('input', () => {
      if (isValidEmail(emailInput.value.trim())) {
        validateField(emailInput, emailError, true);
      }
    });

    subjectInput?.addEventListener('input', () => {
      if (subjectInput.value.trim().length >= 3) {
        validateField(subjectInput, subjectError, true);
      }
    });

    messageInput?.addEventListener('input', () => {
      if (messageInput.value.trim().length >= 10) {
        validateField(messageInput, messageError, true);
      }
    });

    // Form submit listener
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Reset feedback box
      if (formFeedback) {
        formFeedback.className = 'form-feedback';
        formFeedback.style.display = 'none';
        formFeedback.innerHTML = '';
      }

      // Check all fields
      const isNameValid = validateField(
        nameInput,
        nameError,
        nameInput.value.trim().length >= 2
      );

      const isEmailValid = validateField(
        emailInput,
        emailError,
        isValidEmail(emailInput.value.trim())
      );

      const isSubjectValid = validateField(
        subjectInput,
        subjectError,
        subjectInput.value.trim().length >= 3
      );

      const isMessageValid = validateField(
        messageInput,
        messageError,
        messageInput.value.trim().length >= 10
      );

      const isFormValid = isNameValid && isEmailValid && isSubjectValid && isMessageValid;

      if (!isFormValid) {
        // Focus first invalid element
        const firstInvalid = contactForm.querySelector('.is-invalid');
        firstInvalid?.focus();
        showToast('Please correct the highlighted fields before submitting.');
        return;
      }

      // IMPORTANT HONEST FEEDBACK:
      // Since no backend or form service (like Formspree or EmailJS) is configured yet,
      // we inform the user transparently and provide a direct "Send via Email Client" mailto fallback!
      const enteredName = nameInput.value.trim();
      const enteredEmail = emailInput.value.trim();
      const enteredSubject = subjectInput.value.trim();
      const enteredMessage = messageInput.value.trim();

      // Encoded mailto link for direct sending
      const mailtoLink = `mailto:srinivas.bhukya.placeholder@example.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${enteredSubject}`
      )}&body=${encodeURIComponent(
        `Name: ${enteredName}\nEmail: ${enteredEmail}\n\nMessage:\n${enteredMessage}`
      )}`;

      if (formFeedback) {
        formFeedback.className = 'form-feedback success';
        formFeedback.style.display = 'block';
        formFeedback.innerHTML = `
          <div style="margin-bottom: 0.65rem;">
            <strong><i class="fa-solid fa-circle-check"></i> Form validated successfully!</strong>
          </div>
          <p style="margin-bottom: 0.75rem; font-size: 0.875rem;">
            <em>Note:</em> As this portfolio runs statically without a configured email API backend, 
            you can click the button below to immediately open your default email app with this message prefilled.
          </p>
          <a href="${mailtoLink}" class="btn btn--sm btn--primary" style="display: inline-flex; width: auto; margin-top: 0.25rem;">
            <i class="fa-regular fa-paper-plane"></i>
            <span>Open Email App to Send</span>
          </a>
        `;
      }

      showToast('Validation passed! Click the button in the form to open your email client.');

      // Clear the form fields
      contactForm.reset();
    });
  }

  /* ==========================================================================
     10. SMOOTH LINK SCROLL WITH KEYBOARD FOCUS MANAGEMENT
     ========================================================================== */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });

        // Set focus to the target element for screen readers/keyboard users
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  /* ==========================================================================
     11. SUBTLE AMBIENT MOUSE GLOW PARALLAX (DESKTOP ONLY)
     ========================================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && window.innerWidth > 992) {
    const bgGlow1 = document.querySelector('.bg-glow-1');
    const bgGlow2 = document.querySelector('.bg-glow-2');

    let mouseX = 0;
    let mouseY = 0;
    let currentX1 = 0;
    let currentY1 = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    }, { passive: true });

    const animateAmbientGlow = () => {
      currentX1 += (mouseX - currentX1) * 0.05;
      currentY1 += (mouseY - currentY1) * 0.05;

      if (bgGlow1) {
        bgGlow1.style.transform = `translate(${currentX1}px, ${currentY1}px)`;
      }
      if (bgGlow2) {
        bgGlow2.style.transform = `translate(${-currentX1 * 0.8}px, ${-currentY1 * 0.8}px)`;
      }

      requestAnimationFrame(animateAmbientGlow);
    };

    animateAmbientGlow();
  }

});
