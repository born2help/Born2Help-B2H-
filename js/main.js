<script>
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.founder-image-wrapper, .founder-message');

  function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.85;

    elements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('founder-visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // run once on page load
});
</script>
