document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineLine = document.querySelector('.timeline-line');

  function animateTimeline() {
    const triggerBottom = window.innerHeight * 0.85;

    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add('visible');
      }
    });

    // Grow the vertical line based on scroll
    const timelineTop = timelineLine.getBoundingClientRect().top;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (timelineTop < windowHeight) {
      timelineLine.classList.add('active');
      timelineLine.style.height = `${timelineItems.length * 120}px`; // adjust for spacing
    }
  }

  window.addEventListener('scroll', animateTimeline);
  animateTimeline(); // trigger on load
});

document.addEventListener("DOMContentLoaded", function() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineLine = document.querySelector('.timeline-line');

  function animateTimeline() {
    const triggerBottom = window.innerHeight * 0.85;

    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add('visible');
      }
    });

    // Grow vertical line based on visible items
    let visibleCount = document.querySelectorAll('.timeline-item.visible').length;
    const lineHeight = visibleCount * 120; // adjust spacing
    timelineLine.style.height = lineHeight + 'px';
  }

  window.addEventListener('scroll', animateTimeline);
  animateTimeline(); // initial trigger
});

/*
ALL CODE TEMPORARILY DISABLED
*/
