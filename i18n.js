/* Site-wide i18n: swaps text nodes + alt/aria/placeholder attributes using
   dictionaries in window.LI_TR (keyed by normalized English), persists choice
   in localStorage 'li-lang', and injects a language dropdown into the header
   nav on pages without a native switcher. */
(function () {
  var LANGS = {
    en: { name: 'English (US)', flag: '\uD83C\uDDFA\uD83C\uDDF8' },
    pt: { name: 'Portugu\u00EAs (Europeu)', flag: '\uD83C\uDDF5\uD83C\uDDF9' },
    de: { name: 'Deutsch', flag: '\uD83C\uDDE9\uD83C\uDDEA' },
    nl: { name: 'Nederlands', flag: '\uD83C\uDDF3\uD83C\uDDF1' }
  };
  var ATTRS = ['alt', 'aria-label', 'placeholder', 'data-caption', 'title'];
  function lang() { var l = localStorage.getItem('li-lang') || 'en'; return LANGS[l] ? l : 'en'; }
  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }
  function dict() { var l = lang(); return (l !== 'en' && window.LI_TR && window.LI_TR[l]) || null; }

  var observer = null;
  function walk() {
    var d = dict();
    var tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = tw.nextNode())) {
      var p = n.parentNode;
      if (!p || p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE') continue;
      if (n.__liEn === undefined || (n.__liSet !== undefined && n.nodeValue !== n.__liSet)) {
        var t = norm(n.nodeValue);
        if (!t) continue;
        n.__liEn = n.nodeValue; n.__liKey = t;
      }
      var tr = d ? d[n.__liKey] : null;
      var want = (tr === undefined || tr === null) ? n.__liEn : tr;
      if (n.nodeValue !== want) n.nodeValue = want;
      n.__liSet = want;
    }
    var all = document.body.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      for (var j = 0; j < ATTRS.length; j++) {
        var a = ATTRS[j];
        if (!el.hasAttribute(a)) continue;
        el.__liA = el.__liA || {}; el.__liAS = el.__liAS || {};
        var cur = el.getAttribute(a);
        if (el.__liA[a] === undefined || (el.__liAS[a] !== undefined && cur !== el.__liAS[a])) el.__liA[a] = cur;
        var en = el.__liA[a];
        var tr2 = d ? d[norm(en)] : null;
        var want2 = (tr2 === undefined || tr2 === null) ? en : tr2;
        if (cur !== want2) el.setAttribute(a, want2);
        el.__liAS[a] = want2;
      }
    }
    document.documentElement.lang = lang();
  }
  var raf = null;
  function apply() {
    if (raf) return;
    raf = requestAnimationFrame(function () {
      raf = null;
      if (observer) observer.disconnect();
      try { walk(); } catch (e) {}
      if (observer) observer.observe(document.body, { childList: true, subtree: true, characterData: true });
      syncButton();
    });
  }
  window.LIi18n = {
    lang: lang,
    set: function (l) {
      if (!LANGS[l]) return;
      localStorage.setItem('li-lang', l);
      apply();
    }
  };

  /* ---- injected switcher (skipped when the page has its own) ---- */
  var btn = null, menu = null, wrap = null;
  function syncButton() {
    if (!btn) return;
    var l = lang();
    btn.firstChild.textContent = LANGS[l].flag;
    btn.childNodes[1].textContent = ' ' + l.toUpperCase() + ' ';
    if (menu) {
      var items = menu.querySelectorAll('button');
      for (var i = 0; i < items.length; i++) {
        var on = items[i].getAttribute('data-lang') === l;
        items[i].style.background = on ? 'var(--color-brand-soft, #E9E4F5)' : 'transparent';
        items[i].style.color = on ? 'var(--color-brand, #4E4187)' : 'var(--fg-1, #1F1D24)';
      }
    }
  }
  function buildSwitcher(nav) {
    wrap = document.createElement('div');
    wrap.setAttribute('data-li-injected', '');
    wrap.style.cssText = 'position:relative;display:inline-flex;';
    btn = document.createElement('button');
    btn.setAttribute('data-li-btn', '');
    btn.setAttribute('aria-label', 'Change language');
    btn.style.cssText = 'display:inline-flex;align-items:center;gap:6px;min-height:36px;padding:0 12px;border:1px solid var(--border-default,#D8D2C4);border-radius:var(--radius-pill,4px);background:transparent;color:var(--fg-1,#1F1D24);font-family:var(--font-mono,monospace);font-size:12px;letter-spacing:0.06em;cursor:pointer;';
    btn.appendChild(document.createTextNode(''));
    btn.appendChild(document.createTextNode(''));
    var chev = document.createElement('span');
    chev.textContent = '\u25BE'; chev.style.cssText = 'font-size:9px;opacity:0.6;';
    btn.appendChild(chev);
    menu = document.createElement('div');
    menu.setAttribute('role', 'menu');
    menu.style.cssText = 'position:absolute;right:0;top:calc(100% + 8px);min-width:210px;padding:6px;border-radius:var(--radius-md,3px);background:var(--bg-surface,#fff);border:1px solid var(--border-default,#D8D2C4);box-shadow:0 18px 40px rgba(31,29,36,0.14);display:none;z-index:60;';
    Object.keys(LANGS).forEach(function (k) {
      var it = document.createElement('button');
      it.setAttribute('role', 'menuitem');
      it.setAttribute('data-lang', k);
      it.style.cssText = 'display:flex;align-items:center;gap:10px;width:100%;min-height:40px;padding:0 12px;border:none;border-radius:2px;background:transparent;font-family:var(--font-sans,sans-serif);font-size:14px;text-align:left;cursor:pointer;';
      it.textContent = LANGS[k].flag + '  ' + LANGS[k].name;
      it.addEventListener('click', function () {
        window.LIi18n.set(k);
        menu.style.display = 'none';
      });
      menu.appendChild(it);
    });
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
      syncButton();
    });
    document.addEventListener('click', function () { if (menu) menu.style.display = 'none'; });
    wrap.appendChild(btn); wrap.appendChild(menu);
    var last = nav.lastElementChild;
    if (last) nav.insertBefore(wrap, last); else nav.appendChild(wrap);
    syncButton();
  }
  /* Self-healing: the page can re-render its header after we inject (framework
     hydration), leaving zero or duplicate pickers. Reconcile forever. */
  function ensureSwitcher() {
    var injected = document.querySelectorAll('[data-li-injected]');
    /* Native pickers are marked data-li-native; also match the aria-label in every
       site language, since the label itself gets translated. */
    var native = document.querySelector('[data-li-native]');
    if (!native) {
      var LABELS = { 'Change language': 1, 'Mudar idioma': 1, 'Sprache \u00E4ndern': 1, 'Taal wijzigen': 1 };
      var cands = document.querySelectorAll('header button[aria-label]');
      for (var i = 0; i < cands.length; i++) {
        if (LABELS[cands[i].getAttribute('aria-label')] && !cands[i].hasAttribute('data-li-btn') && !cands[i].closest('[data-li-injected]')) { native = cands[i]; break; }
      }
    }
    if (native) { /* page has its own switcher — remove anything we injected */
      for (var i = 0; i < injected.length; i++) injected[i].parentNode && injected[i].parentNode.removeChild(injected[i]);
      btn = menu = wrap = null;
      return;
    }
    if (wrap && wrap.isConnected) { /* ours is live — remove stale clones */
      for (var i = 0; i < injected.length; i++) {
        if (injected[i] !== wrap) injected[i].parentNode && injected[i].parentNode.removeChild(injected[i]);
      }
      return;
    }
    /* ours is gone (or never built) — clear inert leftovers and rebuild */
    for (var i = 0; i < injected.length; i++) injected[i].parentNode && injected[i].parentNode.removeChild(injected[i]);
    btn = menu = wrap = null;
    var nav = document.querySelector('header nav');
    if (nav) buildSwitcher(nav);
  }
  ensureSwitcher();
  setInterval(ensureSwitcher, 500);

  /* ---- boot ---- */
  function boot() {
    observer = new MutationObserver(apply);
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    apply();
    var cur = lang();
    setInterval(function () { var l = lang(); if (l !== cur) { cur = l; apply(); } }, 600);
    window.addEventListener('storage', function (e) { if (e.key === 'li-lang') apply(); });
  }
  var booted = false;
  function bootOnce() { if (booted) return; booted = true; boot(); }
  if (document.body) bootOnce();
  else {
    document.addEventListener('DOMContentLoaded', bootOnce);
    var bw = setInterval(function () { if (document.body) { clearInterval(bw); bootOnce(); } }, 50);
  }
  window.addEventListener('load', function () { bootOnce(); apply(); });
  setTimeout(function () { bootOnce(); apply(); }, 1200);
})();
