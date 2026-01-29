/* ================= HERO PARTICLES (particles.js) ================= */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 150, "density": { "enable": true, "value_area": 900 } },
    "color": { "value": ["#32cd32","#00ffd0","#7CFC00"] },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.7, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 130, "color": "#32cd32", "opacity": 0.25, "width": 1 },
    "move": { "enable": true, "speed": 2.5, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
    "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.6 } }, "push": { "particles_nb": 4 } }
  },
  "retina_detect": true
});


/* ================= HERO TEXT ANIMATION ================= */
const heroContent = document.querySelector('.hero-content');
if(heroContent) heroContent.classList.add('depth-float');
document.querySelectorAll('.hero-content .line').forEach((line, index) => {
  line.style.animationDelay = `${index * 0.3}s`;
  line.classList.add('slide-in');
});

/* ================= TOKENOMICS BAR + PERCENTAGE ANIMATION ================= */
(() => {
  const section = document.getElementById("tokenomics");
  if (!section) return;

  const bars = section.querySelectorAll(".bar-fill");
  bars.forEach(bar => { bar.style.width = "0%"; bar.querySelector("span").textContent = "0%"; });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;

      bars.forEach(bar => {
        const span = bar.querySelector("span");
        const target = parseInt(bar.getAttribute("data-width"), 10);
        let current = 0;
        bar.style.transition = "width 2s ease-out";
        bar.style.width = target + "%";

        const interval = setInterval(() => {
          if(current < target){ current++; span.textContent = current + "%"; }
          else { span.textContent = target + "%"; clearInterval(interval); }
        }, 20);
      });

      obs.unobserve(section);
    });
  }, { threshold: 0.35 });

  observer.observe(section);
})();

/* ================= HOW B2H ARROWS ================= */
document.querySelectorAll(".moving-arrow").forEach((arrow, index) => {
  arrow.style.left = "0";
  arrow.style.animationDelay = `${index * 0.4}s`;
});

/* ================= FOUNDER TEXT OBSERVER ================= */
const founderObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add("show"); });
}, { threshold: 0.4 });
document.querySelectorAll(".founder-text").forEach(el => founderObserver.observe(el));

/* ================= CARD HOVER GLOW ================= */
['.asset-card', '.charity-card', '.board-card', '.mv-card'].forEach(selector => {
  document.querySelectorAll(selector).forEach(card => {
    const glow = document.createElement('div');
    glow.classList.add('card-hover-glow');
    card.style.position = 'relative';
    card.appendChild(glow);

    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      glow.style.opacity = '1';
      glow.style.transform = 'scale(1)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      glow.style.opacity = '0';
      glow.style.transform = 'scale(0)';
    });
  });
});
