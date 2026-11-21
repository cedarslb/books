(function () {
  'use strict';

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  function setMenu(open) {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });

  // Copyright year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Sharing (uses the canonical URL when the page is not served over http/https, e.g. file://)
  var canonical = document.querySelector('link[rel="canonical"]').href;
  var pageUrl = /^https?:/.test(location.protocol) ? location.origin + location.pathname : canonical;
  var title = document.title;
  var text = encodeURIComponent(title + ' ' + pageUrl);

  document.getElementById('share-facebook').href =
    'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(pageUrl);
  document.getElementById('share-whatsapp').href = 'https://wa.me/?text=' + text;
  document.getElementById('share-email').href =
    'mailto:?subject=' + encodeURIComponent(title) + '&body=' + text;

  var status = document.getElementById('copy-status');
  document.getElementById('copy-link').addEventListener('click', function () {
    function done(msg) { status.textContent = msg; }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(pageUrl).then(function () { done('Link copied.'); },
        function () { done('Could not copy. Please copy the address from your browser.'); });
    } else {
      var t = document.createElement('textarea');
      t.value = pageUrl;
      document.body.appendChild(t);
      t.select();
      try { document.execCommand('copy'); done('Link copied.'); }
      catch (err) { done('Could not copy. Please copy the address from your browser.'); }
      document.body.removeChild(t);
    }
  });
})();
