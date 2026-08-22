(function(){
  if(window.__liRevInit) return; window.__liRevInit=true;
  var st=document.createElement('style');
  st.textContent='[data-rv]{opacity:0;transform:translateY(18px);transition:opacity 640ms cubic-bezier(0.32,0.72,0.24,1),transform 640ms cubic-bezier(0.32,0.72,0.24,1)}[data-rv="in"]{opacity:1;transform:none}img.lb-zoomable{transition:transform 240ms cubic-bezier(0.32,0.72,0.24,1)}img.lb-zoomable:hover{transform:scale(1.015)}@media (prefers-reduced-motion:reduce){[data-rv]{opacity:1;transform:none;transition:none}}';
  st.textContent+='body::after{content:"";position:fixed;inset:0;z-index:1400;pointer-events:none;opacity:0.05;mix-blend-mode:multiply;background-image:url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27><filter id=%27n%27><feTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27/></filter><rect width=%27160%27 height=%27160%27 filter=%27url(%23n)%27/></svg>")}'
    +'[data-tilt]{will-change:transform}';
  document.head.appendChild(st);
  // reading progress bar on case + archive pages
  if(/Case%20-|Archive%20-/.test(location.pathname)){
    var pb=document.createElement('div');
    pb.style.cssText='position:fixed;top:0;left:0;height:3px;width:0;background:#4E4187;z-index:1550;transition:width 80ms linear';
    document.body.appendChild(pb);
    var upd=function(){
      var h=document.documentElement;
      var max=h.scrollHeight-h.clientHeight;
      pb.style.width=(max>0?(h.scrollTop/max*100):0)+'%';
    };
    document.addEventListener('scroll',upd,{passive:true}); upd();
  }
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.setAttribute('data-rv','in'); io.unobserve(e.target); } });
  },{threshold:0.12, rootMargin:'0px 0px -6% 0px'});
  function tag(){
    document.querySelectorAll('article, figure, section h2').forEach(function(el){
      if(el.hasAttribute('data-rv')||el.closest('#lb-overlay')) return;
      var r=el.getBoundingClientRect();
      if(r.top < window.innerHeight*0.92 && r.bottom > 0){ el.setAttribute('data-rv','in'); }
      else { el.setAttribute('data-rv',''); io.observe(el); }
    });
  }
  var cio=new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting) return;
      var el=e.target; cio.unobserve(el);
      var m=(el.textContent||'').match(/^([^0-9]*)([0-9][0-9.,]*)(.*)$/);
      if(!m){ el.setAttribute('data-count','done'); return; }
      var pre=m[1], numStr=m[2], suf=m[3];
      var target=parseFloat(numStr.replace(/,/g,''));
      if(isNaN(target)){ el.setAttribute('data-count','done'); return; }
      var dec=(numStr.split('.')[1]||'').length;
      if(dec===0 && target>=1900 && target<=2100){ el.setAttribute('data-count','done'); return; }
      var t0=null, dur=2200;
      function fmt(v){ var s=v.toFixed(dec); if(numStr.indexOf(',')>-1) s=s.replace(/\B(?=(\d{3})+(?!\d))/g,','); return s; }
      function step(ts){
        if(!t0) t0=ts;
        var p=Math.min((ts-t0)/dur,1);
        p=1-Math.pow(1-p,3);
        el.textContent=pre+fmt(target*p)+suf;
        if(p<1) requestAnimationFrame(step); else el.textContent=pre+numStr+suf;
      }
      el.setAttribute('data-count','done');
      requestAnimationFrame(step);
    });
  },{threshold:0.6});
  function tagCounts(){
    document.querySelectorAll('[data-count]').forEach(function(el){
      if(el.getAttribute('data-count')==='done'||el.getAttribute('data-count')==='seen') return;
      el.setAttribute('data-count','seen'); cio.observe(el);
    });
  }
  // device tilt toward cursor
  function tilts(){
    document.querySelectorAll('[data-tilt]').forEach(function(el){
      if(el.getAttribute('data-tilt')==='on') return;
      el.setAttribute('data-tilt','on');
      el.style.transition='transform 240ms cubic-bezier(0.32,0.72,0.24,1)';
      el.addEventListener('mousemove',function(e){
        var r=el.getBoundingClientRect();
        var rx=((e.clientY-r.top)/r.height-0.5)*-7;
        var ry=((e.clientX-r.left)/r.width-0.5)*9;
        el.style.transform='perspective(900px) rotateX('+rx.toFixed(2)+'deg) rotateY('+ry.toFixed(2)+'deg)';
      });
      el.addEventListener('mouseleave',function(){ el.style.transform='perspective(900px)'; });
    });
  }
  // hero headline word stagger (once)
  var didStagger=false,_sTxt='',_sOk=0;
  function stagger(){
    if(didStagger) return;
    var h1=document.querySelector('[data-stagger]');
    if(!h1||!h1.textContent.trim()||h1.textContent.indexOf('{{')!==-1) return;
    if(h1.textContent!==_sTxt){ _sTxt=h1.textContent; _sOk=0; return; }
    if(++_sOk<3) return;
    didStagger=true;
    var nodes=[];
    (function walk(n){ Array.prototype.slice.call(n.childNodes).forEach(function(c){ if(c.nodeType===3) nodes.push(c); else if(c.nodeType===1) walk(c); }); })(h1);
    nodes.forEach(function(tn){
      var frag=document.createDocumentFragment();
      tn.textContent.split(/(\s+)/).forEach(function(w){
        if(!w){ return; }
        if(/^\s+$/.test(w)){ frag.appendChild(document.createTextNode(w)); return; }
        var s=document.createElement('span');
        s.textContent=w;
        s.style.cssText='display:inline-block;opacity:0;transform:translateY(0.5em)';
        s.setAttribute('data-sw','');
        frag.appendChild(s);
      });
      tn.parentNode.replaceChild(frag,tn);
    });
    var ws=h1.querySelectorAll('[data-sw]');
    ws.forEach(function(s,i){
      s.style.transition='opacity 520ms cubic-bezier(0.32,0.72,0.24,1) '+(i*70)+'ms, transform 520ms cubic-bezier(0.32,0.72,0.24,1) '+(i*70)+'ms';
    });
    requestAnimationFrame(function(){ requestAnimationFrame(function(){
      ws.forEach(function(s){ s.style.opacity='1'; s.style.transform='none'; });
    }); });
  }
  // terminal decode on the eyebrow (once)
  tag(); tagCounts(); tilts();
  var sIv=setInterval(function(){ if(didStagger){ clearInterval(sIv); return; } stagger(); }, 250);
  setInterval(function(){ tag(); tagCounts(); tilts(); }, 900);
})();
