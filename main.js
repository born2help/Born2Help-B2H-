// ================= FLOATING PARTICLES =================
const particles = document.querySelectorAll(".particles span");

particles.forEach(p => {
  p.style.left = Math.random() * window.innerWidth + "px";
  p.style.animationDuration = 8 + Math.random() * 6 + "s";
  p.style.width = 5 + Math.random() * 6 + "px";
  p.style.height = p.style.width;
});

// ================= FOUNDER TEXT SLIDE =================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".founder-text").forEach(el => {
  observer.observe(el);
});
