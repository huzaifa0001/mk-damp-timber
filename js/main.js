document.addEventListener('DOMContentLoaded', function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll([
    '.section',
    '.hero',
    '.hero-header',
    '.hero-panel',
    '.hero-banner',
    '.card',
    '.panel',
    '.glass-panel',
    '.service-card',
    '.project-card',
    '.method',
    '.faq-item',
    '.cta-banner',
    '.contact-card',
    '.stats-card',
    '.team-card',
    '.timeline-card',
    '.timeline-step',
    '.feature-card'
  ].join(','));

  revealTargets.forEach(function (element, index) {
    element.classList.add('reveal-in');
    element.style.setProperty('--reveal-delay', Math.min(index % 6, 5) * 55 + 'ms');
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(function (element) {
      element.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.12
  });

  revealTargets.forEach(function (element) {
    observer.observe(element);
  });
});
