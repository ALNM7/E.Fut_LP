// Mobile menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

function setMenu(open){
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.hidden = !open;
}

burger?.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') !== 'true';
  setMenu(open);
});

// Close mobile menu when clicking a link
mobileMenu?.addEventListener('click', (e) => {
  const t = e.target;
  if (t && t.matches('a')) setMenu(false);
});

// Reveal on scroll
const revealEls = Array.from(document.querySelectorAll('.reveal'));
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  }
}, { threshold: 0.12, rootMargin: '-80px 0px -80px 0px' });

revealEls.forEach(el => io.observe(el));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Safety: close menu on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) setMenu(false);
});
