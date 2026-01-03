/* ===============================
   B2H GLOBAL FOUNDATION MAIN JS
=============================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== Smooth Scroll for Anchor Links ===== */
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ===== Fade-In on Scroll ===== */
  const faders = document.querySelectorAll('.fade-in, .why-card, .token-card, .roadmap-card, .gc-card, .v3-box, .founder-message, .founder-image');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  /* ===== Token Bar Animation ===== */
  const tokenFills = document.querySelectorAll('.token-bar .fill');
  tokenFills.forEach(fill => {
    const width = fill.dataset.percentage || fill.style.width || '0%';
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.width = width;
    }, 500);
  });

});
