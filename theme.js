/*
  DARK MODE
  ==========
  Runs immediately (not deferred) so the theme is set before the page
  paints — this avoids a flash of the wrong theme. Remembers the
  visitor's choice in localStorage, and falls back to their system
  preference the first time they visit.
*/
(function () {
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}

  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = stored || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;

    btn.setAttribute('aria-pressed', String(document.documentElement.getAttribute('data-theme') === 'dark'));

    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      btn.setAttribute('aria-pressed', String(next === 'dark'));
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  });
})();
