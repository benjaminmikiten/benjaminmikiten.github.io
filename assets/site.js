// Theme toggle: follows the system until the reader picks one, then remembers it.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  function current() {
    return root.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  }
  function label() { btn.textContent = '[' + current() + ']'; }
  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    label();
  });
  matchMedia('(prefers-color-scheme: light)').addEventListener('change', label);
  label();
})();

// Table of contents built from the article's headings.
(function () {
  var prose = document.getElementById('prose');
  if (!prose) return;
  var heads = Array.prototype.filter.call(
    prose.querySelectorAll('h1[id], h2[id], h3[id]'),
    function (h) { return !h.closest('.footnotes'); }
  );
  if (heads.length < 2) return;

  var top = Math.min.apply(null, heads.map(function (h) { return +h.tagName[1]; }));
  document.querySelectorAll('[data-toc]').forEach(function (nav) {
    var ol = document.createElement('ol');
    heads.forEach(function (h) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      li.className = 'depth-' + (+h.tagName[1] - top);
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      a.dataset.target = h.id;
      li.appendChild(a);
      ol.appendChild(li);
    });
    nav.appendChild(ol);
    var host = nav.closest('[hidden]');
    if (host) host.hidden = false;
  });

  var links = document.querySelectorAll('.toc a');
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      links.forEach(function (l) { l.classList.toggle('active', l.dataset.target === en.target.id); });
    });
  }, { rootMargin: '0px 0px -70% 0px' });
  heads.forEach(function (h) { obs.observe(h); });
})();
