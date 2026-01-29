/* ================= HERO BG PARTICLES ================= */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 120, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00ffc6" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.6, "random": true },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 120, "color": "#00ffc6", "opacity": 0.3, "width": 1 },
    "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
    "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
  },
  "retina_detect": true
});

/* ================= HERO TEXT ANIMATION ================= */
document.querySelectorAll('.hero-content .line').forEach((line, index) => {
  line.style.animationDelay = (index * 0.3) + 's';
  line.classList.add('slide-in');
});
const heroContent = document.querySelector('.hero-content');
if (heroContent) heroContent.classList.add('depth-float');

/* ================= MOUSE FOLLOWING PARTICLES ================= */
const hero = document.querySelector('.hero');
if (hero) {
  const mouseParticles = [];
  for (let i = 0; i < 15; i++) {
    const p = document.createElement('div');
    p.classList.add('mouse-particle');
    hero.appendChild(p);
    mouseParticles.push(p);
  }
  hero.addEventListener('mousemove', e => {
    mouseParticles.forEach((p, idx) => {
      const offset = idx * 6;
      p.style.transform = `translate(${e.clientX + offset}px, ${e.clientY + offset}px)`;
    });
  });
}

/* ================= FOUNDER TEXT OBSERVER ================= */
const founderObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("show"); });
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

/* ================= TOKENOMICS BAR + PERCENTAGE ANIMATION ================= */
(() => {
  const section = document.getElementById("tokenomics");
  if (!section) return;
  const bars = section.querySelectorAll(".bar-fill");
  bars.forEach(bar => { bar.style.width = "0%"; bar.querySelector("span").textContent = "0%"; });
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      bars.forEach(bar => {
        const span = bar.querySelector("span");
        const target = parseInt(bar.getAttribute("data-width"), 10);
        let current = 0;
        bar.style.transition = "width 1.8s ease-out";
        bar.style.width = target + "%";
        const interval = setInterval(() => {
          if (current < target) { current++; span.textContent = current + "%"; }
          else { span.textContent = target + "%"; clearInterval(interval); }
        }, 18);
      });
      obs.unobserve(section);
    });
  }, { threshold: 0.35 });
  observer.observe(section);
})();

/* ================= HOW B2H WORKS – FLOATING ARROWS ================= */
document.addEventListener("DOMContentLoaded", () => {
  const arrows = document.querySelectorAll(".moving-arrow");
  arrows.forEach((arrow, index) => {
    arrow.style.position = "absolute";
    arrow.style.top = `${20 + Math.random() * 40}%`; // random vertical start
    arrow.style.left = "-10%";
    arrow.style.fontSize = "1.8rem";
    arrow.style.opacity = 0;
    arrow.style.color = arrow.style.color || "#fff";

    // Animate
    const floatArrow = () => {
      arrow.style.transition = "none";
      arrow.style.left = "-10%";
      arrow.style.opacity = 0;
      const duration = 6000 + Math.random() * 2000; // 6-8s
      arrow.style.transition = `left ${duration}ms linear, opacity 1000ms ease-in`;
      arrow.style.left = "110%";
      arrow.style.opacity = 1;
      setTimeout(floatArrow, duration);
    };
    setTimeout(floatArrow, index * 400);
  });
});
