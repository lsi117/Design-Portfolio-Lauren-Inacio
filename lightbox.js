(function(){
  if(window.__lbInit) return; window.__lbInit=true;
  function close(){ var o=document.getElementById('lb-overlay'); if(o) o.remove(); }
  function open(img){
    close();
    var o=document.createElement('div'); o.id='lb-overlay';
    var big=document.createElement('img'); big.src=img.src; big.alt=img.alt||'';
    o.appendChild(big);
    var c=document.createElement('div'); c.className='lb-cap'; o.appendChild(c);
    function setCap(t){ c.textContent=t||''; c.style.display=t?'':'none'; }
    var fig=img.closest('figure'); var cap=fig ? fig.querySelector('figcaption') : null;
    setCap((cap && cap.textContent) || img.alt);
    var groupEl=img.closest('[data-lb-slides]');
    if(groupEl){
      var slides=[]; try{ slides=JSON.parse(groupEl.getAttribute('data-lb-slides')); }catch(e){}
      if(slides.length>1){
        var idx=slides.findIndex(function(s){ return img.src.indexOf(s.src)>-1; });
        if(idx<0) idx=0;
        function show(i){
          idx=(i+slides.length)%slides.length;
          big.src=slides[idx].src;
          setCap((idx+1)+' / '+slides.length+'  \u00b7  '+slides[idx].cap);
        }
        function mkBtn(label,side,delta){
          var b=document.createElement('button');
          b.textContent=label; b.setAttribute('aria-label', delta<0?'Previous slide':'Next slide');
          b.style.cssText='position:absolute; top:50%; transform:translateY(-50%); '+side+':20px; min-width:40px; min-height:40px; border:1px solid rgba(255,255,255,0.4); background:rgba(0,0,0,0.45); color:#fff; font-size:16px; cursor:pointer; z-index:2;';
          b.addEventListener('click', function(e){ e.stopPropagation(); show(idx+delta); });
          o.appendChild(b);
        }
        mkBtn('\u2190','left',-1); mkBtn('\u2192','right',1);
        o.__lbNav=show; o.__lbIdx=function(){ return idx; };
        show(idx);
      }
    }
    o.addEventListener('click', close);
    document.body.appendChild(o);
  }
  document.addEventListener('click', function(e){
    if(e.target.closest('#lb-overlay')) return;
    var bg=e.target.closest('[data-lb-open]');
    if(bg){ e.preventDefault(); open({src:bg.getAttribute('data-src'), alt:bg.getAttribute('data-alt')||'', closest:bg.closest.bind(bg)}); return; }
    var img=e.target.closest('img');
    if(!img || img.closest('a') || img.clientWidth<120) return;
    e.preventDefault(); open(img);
  });
  document.addEventListener('keydown', function(e){
    var o=document.getElementById('lb-overlay');
    if(e.key==='Escape') close();
    if(o && o.__lbNav){
      if(e.key==='ArrowLeft') o.__lbNav(o.__lbIdx()-1);
      if(e.key==='ArrowRight') o.__lbNav(o.__lbIdx()+1);
    }
  });
  setInterval(function(){
  if(window.__lbInit) return; window.__lbInit=true;
    document.querySelectorAll('img').forEach(function(img){
      if(!img.closest('a') && !img.closest('#lb-overlay') && img.clientWidth>=120) img.classList.add('lb-zoomable');
    });
  }, 800);
})();
