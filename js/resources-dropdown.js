// js/resources-dropdown.js
(function () {
  const header = document.querySelector('.sticky-header');
  const btn = document.getElementById('resourcesToggle');
  const panel = document.getElementById('resourcesDropdown');

  if (!header || !btn || !panel) return;

  // keep the dropdown pinned just under the header height
  function positionPanel() {
    panel.style.top = header.offsetHeight + 'px';
  }
  positionPanel();
  window.addEventListener('resize', positionPanel);

  function openPanel() {
    panel.classList.add('open');
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    document.addEventListener('click', onDocClick, true);
    document.addEventListener('keydown', onKeyDown, true);
  }

  function closePanel() {
    panel.classList.remove('open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('click', onDocClick, true);
    document.removeEventListener('keydown', onKeyDown, true);
  }

  function togglePanel() {
    if (panel.classList.contains('open')) closePanel();
    else openPanel();
  }

  function onDocClick(e) {
    if (panel.contains(e.target) || btn.contains(e.target)) return;
    closePanel();
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') closePanel();
  }

  btn.addEventListener('click', togglePanel);
})();
