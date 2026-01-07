// ================= FLOATING PARTICLES =================
const particles = document.querySelectorAll(".particles span");
particles.forEach(p => {
  p.style.left = Math.random() * 100 + "vw";
  p.style.top = Math.random() * 100 + "vh";   // ✅ THIS WAS MISSING
  const size = 3 + Math.random() * 5;
  p.style.width = size + "px";
  p.style.height = size + "px";
  p.style.animationDuration = 10 + Math.random() * 10 + "s";
  p.style.opacity = 0.6;
});

// ================= HERO TEXT LINE ANIMATION =================
document.querySelectorAll('.hero-content .line').forEach((line, index) => {
  line.style.animation = `lineFadeUp 0.8s forwards`;
  line.style.animationDelay = (index * 0.3) + 's';
});

// ================= FOUNDER TEXT SLIDE =================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".founder-text").forEach(el => observer.observe(el));

// ================= MOUSE FOLLOWING PARTICLES =================
const hero = document.querySelector('.hero');
const mouseParticles = [];

for(let i=0; i<20; i++){
  const p = document.createElement('div');
  p.classList.add('mouse-particle');
  p.style.width = p.style.height = (4 + Math.random()*4) + 'px';
  p.style.position = 'absolute';
  p.style.background = 'rgba(255,255,255,0.3)';
  p.style.borderRadius = '50%';
  p.style.pointerEvents = 'none';
  p.style.transition = 'transform 0.1s linear';
  hero.appendChild(p);
  mouseParticles.push(p);
}

hero.addEventListener('mousemove', e => {
  mouseParticles.forEach((p, idx) => {
    const offset = idx * 5;
    p.style.transform = `translate(${e.clientX + offset}px, ${e.clientY + offset}px)`;
  });
});
