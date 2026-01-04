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
