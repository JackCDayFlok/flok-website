const mobileToggle = document.getElementById('mobileMenuToggle');
const overlay = document.getElementById('mobileOverlay');
const closeBtn = document.getElementById('closeOverlay');
const body = document.body;

function openMenu() {
  overlay.classList.add('open');
  body.classList.add('menu-open');
  mobileToggle.setAttribute('aria-expanded', 'true');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeMenu() {
  overlay.classList.remove('open');
  body.classList.remove('menu-open');
  mobileToggle.setAttribute('aria-expanded', 'false');
  overlay.setAttribute('aria-hidden', 'true');
}

if (mobileToggle && overlay && closeBtn) {
  mobileToggle.addEventListener('click', openMenu);
  mobileToggle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') openMenu();
  });
  closeBtn.addEventListener('click', closeMenu);
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && overlay.classList.contains('open')) {
    closeMenu();
  }
});