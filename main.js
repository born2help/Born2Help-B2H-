/* ================= HERO BG PARTICLES ================= */
const hero = document.querySelector('.hero');
const bgParticles = document.querySelectorAll('.bg-particles span');

if (hero && bgParticles.length) {
  bgParticles.forEach(p => {
    p.style.left = Math.random() * 100 + '%';
    const size = 3 + Math.random() * 6;
    p.style.width = p.style.height = size + 'px';
    p.style.animationDuration = 10 + Math.random() * 15 + 's';
    p.style.animationDelay = Math.random() * 10 + 's';
  });
}

/* ================= HERO TEXT ANIMATION ================= */
document.querySelectorAll('.hero-content .line').forEach((line, index) => {
  line.style.animationDelay = (index * 0.3) + 's';
  line.classList.add('slide-in');
});

const heroContent = document.querySelector('.hero-content');
if (heroContent) heroContent.classList.add('depth-float');

/* ================= MOUSE FOLLOWING PARTICLES ================= */
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
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.4 });

document.querySelectorAll(".founder-text").forEach(el => observer.observe(el));

/* ================= CARD HOVER GLOW ================= */
const cardSelectors = ['.asset-card', '.charity-card', '.board-card', '.mv-card'];

cardSelectors.forEach(selector => {
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

/* ================= TOKENOMICS BAR ANIMATION + PARTICLES ================= */
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.bar-fill');

  // Animate width based on class or data attribute
  const observerBar = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetWidth = el.dataset.width || el.style.getPropertyValue('--bar-width') || '50%';
        let current = 0;
        const maxWidth = parseFloat(targetWidth);

        const anim = () => {
          if (current < maxWidth) {
            current += 0.5; // growth speed
            el.style.width = current + '%';
            requestAnimationFrame(anim);
          } else {
            el.style.width = targetWidth;
          }
        };
        anim();
        observerBar.unobserve(el);

        // Add floating particles inside this bar
        for (let i = 0; i < 4; i++) {
          const particle = document.createElement('span');
          particle.classList.add('bar-particle');
          particle.style.position = 'absolute';
          particle.style.width = (2 + Math.random() * 4) + 'px';
          particle.style.height = particle.style.width;
          particle.style.background = 'rgba(255,255,255,0.6)';
          particle.style.borderRadius = '50%';
          particle.style.top = Math.random() * 100 + '%';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.pointerEvents = 'none';
          particle.style.animation = `floatParticle ${3 + Math.random()*2}s ease-in-out infinite alternate`;
          el.appendChild(particle);
        }
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observerBar.observe(bar));

  // Add keyframes for floating particles
  const floatParticleStyle = document.createElement('style');
  floatParticleStyle.innerHTML = `
    @keyframes floatParticle {
      0% { transform: translate(0,0); opacity: 0.6; }
      50% { transform: translate(0,-8px); opacity: 0.9; }
      100% { transform: translate(0,0); opacity: 0.6; }
    }
    .bar-fill span { pointer-events: none; }
  `;
  document.head.appendChild(floatParticleStyle);

  // Add subtle particle movement inside bar tracks (optional)
  const barParticleStyle = document.createElement('style');
  barParticleStyle.textContent = `
    @keyframes barParticleMove {
      0% { transform: translateY(0) translateX(0); opacity: 0.6; }
      50% { transform: translateY(-6px) translateX(4px); opacity: 1; }
      100% { transform: translateY(0) translateX(0); opacity: 0.6; }
    }
  `;
  document.head.appendChild(barParticleStyle);
});
