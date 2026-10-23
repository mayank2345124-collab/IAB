/**
 * IAB - Web Design & Development
 * Interactive Script for Standalone HTML Pages
 * Features: Dark Mode Toggle, Mobile Drawer, Portfolio Filters, FAQ Accordion, Contact Form Validation
 */

// 1. Dark Mode Initialization & Logic
(function initTheme() {
  const storedTheme = localStorage.getItem('iab-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons if loaded
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // 2. Dark Mode Toggle Buttons (Desktop & Mobile)
  const themeToggleButtons = document.querySelectorAll('[data-theme-toggle]');
  themeToggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('iab-theme', isDark ? 'dark' : 'light');
    });
  });

  // 3. Mobile Navigation Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileMenuToggle && mobileMenuDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenuDrawer.classList.toggle('hidden');
    });
  }

  // 4. Portfolio Category Filtering
  const filterButtons = document.querySelectorAll('[data-portfolio-filter]');
  const projectCards = document.querySelectorAll('[data-portfolio-card]');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-portfolio-filter');

        // Update active filter button styling
        filterButtons.forEach((b) => {
          b.classList.remove('bg-blue-600', 'text-white', 'font-semibold');
          b.classList.add('bg-white', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
        });
        btn.classList.add('bg-blue-600', 'text-white', 'font-semibold');
        btn.classList.remove('bg-white', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');

        // Filter projects
        projectCards.forEach((card) => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. FAQ Accordion Logic
  const faqButtons = document.querySelectorAll('[data-faq-button]');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.faq-icon');
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close other FAQs
      faqButtons.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherAns = otherBtn.nextElementSibling;
          if (otherAns) otherAns.classList.add('hidden');
          const otherIcon = otherBtn.querySelector('.faq-icon');
          if (otherIcon) otherIcon.classList.remove('rotate-180', 'text-blue-600');
        }
      });

      // Toggle this FAQ
      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (answer) answer.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180', 'text-blue-600');
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.classList.remove('hidden');
        if (icon) icon.classList.add('rotate-180', 'text-blue-600');
      }
    });
  });

  // 6. Contact Form Validation and Submission
  const contactForm = document.getElementById('iab-contact-form');
  const formSuccessBox = document.getElementById('form-success-box');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const phoneInput = document.getElementById('contact-phone');
      const businessType = document.getElementById('contact-business-type');
      const serviceNeeded = document.getElementById('contact-service-needed');
      const budgetRange = document.getElementById('contact-budget');
      const messageInput = document.getElementById('contact-message');

      let hasError = false;

      // Helper to set error
      const setError = (element, message) => {
        hasError = true;
        const errEl = element.parentElement.querySelector('.field-error');
        if (errEl) {
          errEl.textContent = message;
          errEl.classList.remove('hidden');
        }
        element.classList.add('border-red-500');
      };

      // Helper to clear error
      const clearError = (element) => {
        const errEl = element.parentElement.querySelector('.field-error');
        if (errEl) {
          errEl.textContent = '';
          errEl.classList.add('hidden');
        }
        element.classList.remove('border-red-500');
      };

      [nameInput, emailInput, phoneInput, messageInput].forEach((el) => {
        if (el) clearError(el);
      });

      // Validations
      if (!nameInput.value || nameInput.value.trim().length < 2) {
        setError(nameInput, 'Please enter your full name (at least 2 characters).');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value || !emailRegex.test(emailInput.value.trim())) {
        setError(emailInput, 'Please provide a valid email address.');
      }

      const digits = phoneInput.value.replace(/[^\d+]/g, '');
      if (!digits || digits.length < 8) {
        setError(phoneInput, 'Please enter a valid phone number (at least 8 digits).');
      }

      if (!messageInput.value || messageInput.value.trim().length < 10) {
        setError(messageInput, 'Please tell us briefly about your project (at least 10 characters).');
      }

      if (hasError) return;

      // Generate mailto link
      const subject = encodeURIComponent(`Website Inquiry from ${nameInput.value.trim()} - ${serviceNeeded ? serviceNeeded.value : 'Web Development'}`);
      const body = encodeURIComponent(
`Hi Mayank & IAB Team,

I'm reaching out regarding a website project with the following details:

- Name: ${nameInput.value.trim()}
- Email: ${emailInput.value.trim()}
- Phone: ${phoneInput.value.trim()}
- Business Type: ${businessType ? businessType.value : 'General'}
- Service Needed: ${serviceNeeded ? serviceNeeded.value : 'Web Development'}
- Budget Range: ${budgetRange ? budgetRange.value : 'Not specified'}

Project Overview:
${messageInput.value.trim()}

Looking forward to discussing further!
`
      );

      const mailtoUrl = `mailto:mayank2345124@gmail.com?subject=${subject}&body=${body}`;

      // Show success box
      if (formSuccessBox) {
        formSuccessBox.classList.remove('hidden');
        contactForm.classList.add('hidden');
        const mailtoLinkBtn = document.getElementById('open-email-btn');
        if (mailtoLinkBtn) {
          mailtoLinkBtn.setAttribute('href', mailtoUrl);
        }
      }

      // Try triggering mailto directly
      window.location.href = mailtoUrl;
    });
  }
});
