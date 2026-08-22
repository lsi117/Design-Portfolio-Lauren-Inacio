(function(){
  if(window.__liPalInit) return; window.__liPalInit=true;
  var HOME='index.html';
  var L={
    en:{home:'Home',cases:'Case studies',how:'How I work',about:'About',contact:'Contact',fac:'Facilitation & leadership',
        nav:'Navigate',cs:'Case study',fc:'Facilitation',live:'Live demo',act:'Action',
        coach:'Enterprise Design Thinking coaching',sf:'State Farm workshop',
        abLive:'Adventure Buddy · try it live',znLive:'Zones portal · try it live',
        resume:'Download résumé (PDF)',email:'Email Lauren',
        ph:'Jump to… (case studies, résumé, contact)',none:'No matches',hint:'quick nav'},
    pt:{home:'Início',cases:'Estudos de caso',how:'Como trabalho',about:'Sobre',contact:'Contacto',fac:'Facilitação e liderança',
        nav:'Navegar',cs:'Estudo de caso',fc:'Facilitação',live:'Demo ao vivo',act:'Ação',
        coach:'Coaching de Enterprise Design Thinking',sf:'Workshop State Farm',
        abLive:'Adventure Buddy · experimentar',znLive:'Portal Zones · experimentar',
        resume:'Descarregar currículo (PDF)',email:'Enviar email à Lauren',
        ph:'Ir para… (estudos de caso, currículo, contacto)',none:'Sem resultados',hint:'navegação rápida'},
    de:{home:'Start',cases:'Fallstudien',how:'Wie ich arbeite',about:'Über mich',contact:'Kontakt',fac:'Moderation & Leadership',
        nav:'Navigieren',cs:'Fallstudie',fc:'Moderation',live:'Live-Demo',act:'Aktion',
        coach:'Enterprise-Design-Thinking-Coaching',sf:'State-Farm-Workshop',
        abLive:'Adventure Buddy · live ausprobieren',znLive:'Zones-Portal · live ausprobieren',
        resume:'Lebenslauf herunterladen (PDF)',email:'Lauren eine E-Mail schreiben',
        ph:'Springen zu… (Fallstudien, Lebenslauf, Kontakt)',none:'Keine Treffer',hint:'Schnellnavigation'},
    nl:{home:'Home',cases:'Casestudy\u2019s',how:'Hoe ik werk',about:'Over mij',contact:'Contact',fac:'Facilitatie & leiderschap',
        nav:'Navigeren',cs:'Casestudy',fc:'Facilitatie',live:'Live demo',act:'Actie',
        coach:'Enterprise Design Thinking-coaching',sf:'State Farm-workshop',
        abLive:'Adventure Buddy · probeer live',znLive:'Zones-portaal · probeer live',
        resume:'Cv downloaden (PDF)',email:'E-mail Lauren',
        ph:'Spring naar… (casestudy\u2019s, cv, contact)',none:'Geen resultaten',hint:'snelle navigatie'}
  };
  function tr(){ return L[localStorage.getItem('li-lang')] || L.en; }
  function buildItems(){
    var t=tr();
    return [
      [t.home, HOME, t.nav],
      [t.cases, HOME+'#work', t.nav],
      [t.how, HOME+'#strengths', t.nav],
      [t.about, HOME+'#about', t.nav],
      [t.contact, HOME+'#contact', t.nav],
      [t.fac, HOME+'#archive', t.nav],
      ['watsonx Code Assistant for Z', 'watsonx.html', t.cs],
      ['Adventure Buddy', 'adventure-buddy.html', t.cs],
      ['z/OS Cloud Broker', 'cloud-broker.html', t.cs],
      ['Zones Enablement Portal', 'zones.html', t.cs],
      [t.coach, 'design-thinking-coach.html', t.fc],
      [t.sf, 'statefarm.html', t.fc],
      [t.abLive, 'https://lsi117.github.io/Adventure-Buddy/', t.live],
      [t.znLive, 'https://lsi117.github.io/ZEP-RD/', t.live],
      [t.resume, 'assets/Lauren_Inacio_Product_Designer_Resume_2026.pdf', t.act],
      [t.email, 'mailto:laureninacio@gmail.com', t.act]
    ];
  }
  var items=buildItems();
  var st=document.createElement('style');
  st.textContent='#cp-ov{position:fixed;inset:0;z-index:1600;background:rgba(24,22,30,0.45);display:flex;align-items:flex-start;justify-content:center;padding:12vh 20px 20px}'+
  '#cp-box{width:100%;max-width:560px;background:#F7F5EF;border:1px solid #293132;border-radius:4px;box-shadow:0 30px 80px rgba(0,0,0,0.35);overflow:hidden}'+
  '#cp-in{width:100%;box-sizing:border-box;border:none;outline:none;background:transparent;padding:18px 20px;font-family:\'Spline Sans Mono\',monospace;font-size:15px;color:#293132;border-bottom:1px solid #D8D4C8}'+
  '#cp-ls{max-height:46vh;overflow-y:auto;padding:6px}'+
  '.cp-it{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 14px;border-radius:3px;cursor:pointer;font-family:\'Instrument Sans\',sans-serif;font-size:14.5px;color:#293132}'+
  '.cp-it .cp-k{font-family:\'Spline Sans Mono\',monospace;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:#8A857A}'+
  '.cp-it.on{background:#E9E4F5;color:#3A3168}.cp-it.on .cp-k{color:#4E4187}'+
  '#cp-hint{position:fixed;right:18px;bottom:18px;z-index:1500;display:inline-flex;align-items:center;gap:8px;padding:9px 14px;background:#F7F5EF;border:1px solid #293132;border-radius:4px;font-family:\'Spline Sans Mono\',monospace;font-size:12px;color:#293132;cursor:pointer;box-shadow:0 8px 24px rgba(41,49,50,0.16)}'+
  '#cp-hint:hover{background:#E9E4F5}'+
  '@media(max-width:720px){#cp-hint{display:none}}';
  document.head.appendChild(st);
  var open=false, idx=0, filtered=items;
  function close(){ var o=document.getElementById('cp-ov'); if(o) o.remove(); open=false; }
  function go(href){ close(); if(href.indexOf('mailto:')===0||href.indexOf('http')===0){ window.open(href, href.indexOf('mailto:')===0?'_self':'_blank'); } else location.href=href; }
  function render(){
    var ls=document.getElementById('cp-ls'); if(!ls) return;
    ls.innerHTML='';
    filtered.forEach(function(it,i){
      var d=document.createElement('div');
      d.className='cp-it'+(i===idx?' on':'');
      d.innerHTML='<span></span><span class="cp-k"></span>';
      d.firstChild.textContent=it[0]; d.lastChild.textContent=it[2];
      d.addEventListener('click',function(){ go(it[1]); });
      d.addEventListener('mousemove',function(){ if(idx!==i){ idx=i; render(); } });
      ls.appendChild(d);
    });
    if(!filtered.length){ var e=document.createElement('div'); e.className='cp-it'; e.textContent=tr().none; ls.appendChild(e); }
  }
  function show(){
    if(open){ close(); return; }
    open=true; idx=0; items=buildItems(); filtered=items;
    var ov=document.createElement('div'); ov.id='cp-ov';
    ov.innerHTML='<div id="cp-box"><input id="cp-in" autocomplete="off"><div id="cp-ls"></div></div>';
    document.body.appendChild(ov);
    ov.addEventListener('mousedown',function(e){ if(e.target===ov) close(); });
    var inp=document.getElementById('cp-in');
    inp.placeholder=tr().ph;
    inp.addEventListener('input',function(){
      var q=inp.value.toLowerCase(); idx=0;
      filtered=items.filter(function(it){ return (it[0]+' '+it[2]).toLowerCase().indexOf(q)>-1; });
      render();
    });
    render(); inp.focus();
  }
  document.addEventListener('keydown',function(e){
    if((e.metaKey||e.ctrlKey)&&(e.key==='k'||e.key==='K')){ e.preventDefault(); show(); return; }
    if(!open) return;
    if(e.key==='Escape'){ close(); }
    else if(e.key==='ArrowDown'){ e.preventDefault(); idx=Math.min(idx+1,filtered.length-1); render(); }
    else if(e.key==='ArrowUp'){ e.preventDefault(); idx=Math.max(idx-1,0); render(); }
    else if(e.key==='Enter'&&filtered[idx]){ go(filtered[idx][1]); }
  });
  var hint=document.createElement('button'); hint.id='cp-hint';
  hint.innerHTML='<span>⌘K</span><span style="color:#8A857A"></span>';
  hint.lastChild.textContent=tr().hint;
  hint.addEventListener('click',show);
  document.body.appendChild(hint);
  window.addEventListener('storage',function(e){ if(e.key==='li-lang'){ hint.lastChild.textContent=tr().hint; } });
  setInterval(function(){ var t=tr().hint; if(hint.lastChild.textContent!==t) hint.lastChild.textContent=t; }, 1500);
})();
