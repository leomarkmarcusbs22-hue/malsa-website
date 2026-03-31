// ═══ MALSA Corporation — Shared JS ═══

// AOS Init
AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 80 });

// Navbar scroll
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('nav-scrolled', window.scrollY > 40);
  });
}

// Mobile menu
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Counter animation
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.dataset.target);
    if (!target) return;
    const duration = 2000;
    const start = performance.now();
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      el.textContent = target >= 1000 ? current.toLocaleString() : current;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

const counters = document.querySelectorAll('.counter');
if (counters.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { animateCounters(); obs.disconnect(); } });
  }, { threshold: 0.3 });
  const section = counters[0].closest('section');
  if (section) obs.observe(section);
}
