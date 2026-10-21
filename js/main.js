(function () {
  'use strict';

  var config = window.FRAGONIA_CONFIG || { whatsapp: '', mensajes: {} };

  /* ---------- Enlaces de WhatsApp ---------- */
  function waUrl(key) {
    var num = String(config.whatsapp || '').replace(/\D/g, '');
    var base = num ? 'https://wa.me/' + num : 'https://wa.me/';
    var msg = (config.mensajes && config.mensajes[key]) || config.mensajes.pedido || '';
    return msg ? base + '?text=' + encodeURIComponent(msg) : base;
  }

  document.querySelectorAll('[data-wa]').forEach(function (link) {
    link.href = waUrl(link.getAttribute('data-wa'));
  });

  /* ---------- Menú móvil ---------- */
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu-movil');

  function setMenu(open) {
    if (!menuBtn || !menu) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.hidden = !open;
  }

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        setMenu(false);
        menuBtn.focus();
      }
    });
    window.matchMedia('(min-width: 1081px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- Header compacto al hacer scroll ---------- */
  var header = document.querySelector('.hd');
  var ticking = false;

  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
    ticking = false;
  }

  if (header) {
    updateHeader();
    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateHeader);
      }
    }, { passive: true });
  }

  /* ---------- Aparición de elementos al entrar en pantalla ---------- */
  var revealables = document.querySelectorAll('.rv, .rv-img');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('in'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    revealables.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Año del footer ---------- */
  var year = document.getElementById('anio');
  if (year) year.textContent = new Date().getFullYear();
})();
