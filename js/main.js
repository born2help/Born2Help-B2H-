// ================= MAIN.JS =================
document.addEventListener("DOMContentLoaded", function() {
  // Only reveal specific elements, not entire sections
  const revealElements = document.querySelectorAll(
    ".founder-image-wrapper, .founder-message, .airdrop-card, .connect-card, .donate-card, .social-card"
  );

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
    revealElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add("founder-visible");
      }
    });
  }

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
