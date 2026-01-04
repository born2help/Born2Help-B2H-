document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineLine = document.querySelector(".timeline-line");

  function onScroll() {
    let visibleCount = 0;
    const trigger = window.innerHeight * 0.85;

    timelineItems.forEach(item => {
      if (item.getBoundingClientRect().top < trigger) {
        item.classList.add("visible");
        visibleCount++;
      }
    });

    if (timelineLine) {
      timelineLine.style.height = visibleCount * 120 + "px";
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});

// ===== Cursor-reactive particles =====
document.addEventListener("mousemove", (e) => {
  const particles = document.querySelectorAll(".particles span");
  const centerX = window.innerWidth;
  const centerY = window.innerHeight;

  particles.forEach((p, i) => {
    const offsetX = (e.clientX - centerX/2) * 0.02 * (i+1);
    const offsetY = (e.clientY - centerY/2) * 0.02 * (i+1);
    p.style.setProperty("--x", offsetX + "px");
    p.style.setProperty("--y", offsetY + "px");
  });
});
