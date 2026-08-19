/* OB.1 motion engine · reveals, count-ups, dial arcs, SVG draw-on-scroll,
   3D tilt cards, hero particle field, section rail. No dependencies. */
(function(){
  'use strict';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Scroll reveals ---- */
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('on'); io.unobserve(e.target); }
    });
  },{threshold:.14,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  /* ---- Count-up numbers: <b data-count="53" data-suffix="%" data-decimals="1"> ---- */
  function countUp(el){
    var target = parseFloat(el.dataset.count), dec = parseInt(el.dataset.decimals||'0',10);
    var pre = el.dataset.prefix||'', suf = el.dataset.suffix||'', dur = 1500, t0 = null;
    if(reduced){ el.textContent = pre + target.toFixed(dec) + suf; return; }
    function tick(ts){
      if(!t0) t0 = ts;
      var k = Math.min((ts-t0)/dur,1), e = 1-Math.pow(1-k,3);
      el.textContent = pre + (target*e).toFixed(dec) + suf;
      if(k<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var cio = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){ countUp(e.target); cio.unobserve(e.target); }
    });
  },{threshold:.5});
  document.querySelectorAll('[data-count]').forEach(function(el){ cio.observe(el); });

  /* ---- Dial arc: <circle class="dial-arc" data-score="53" r="77"> ---- */
  var dio = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting) return;
      var c = e.target, r = parseFloat(c.getAttribute('r')), C = 2*Math.PI*r;
      var score = parseFloat(c.dataset.score);
      c.style.strokeDasharray = C;
      c.style.strokeDashoffset = C;
      c.getBoundingClientRect();
      c.style.transition = reduced ? 'none' : 'stroke-dashoffset 1.6s cubic-bezier(.2,.7,.2,1)';
      c.style.strokeDashoffset = C - C*(score/100);
      dio.unobserve(c);
    });
  },{threshold:.5});
  document.querySelectorAll('.dial-arc').forEach(function(el){ dio.observe(el); });

  /* ---- SVG draw-on-scroll: every .schematic .draw path animates its stroke ---- */
  function prepDraw(p,i){
    var len; try{ len = p.getTotalLength(); }catch(e){ return; }
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = len;
    p.dataset.len = len; p.dataset.idx = i;
  }
  document.querySelectorAll('.schematic').forEach(function(s){
    var paths = s.querySelectorAll('.draw');
    paths.forEach(prepDraw);
    var texts = s.querySelectorAll('text');
    texts.forEach(function(t){ t.style.opacity = 0; t.style.transition = 'opacity .7s ease'; });
    var sio = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting) return;
        paths.forEach(function(p){
          if(!p.dataset.len) return;
          var d = 120*parseInt(p.dataset.idx,10);
          p.style.transition = reduced ? 'none' : 'stroke-dashoffset 1.5s cubic-bezier(.2,.7,.2,1) '+d+'ms';
          p.style.strokeDashoffset = 0;
        });
        var base = reduced?0:900;
        texts.forEach(function(t,i){ setTimeout(function(){ t.style.opacity = 1; }, base + i*90); });
        sio.unobserve(e.target);
      });
    },{threshold:.3});
    sio.observe(s);
  });

  /* ---- 3D tilt: pointer-tracked, desktop only ---- */
  if(!reduced && matchMedia('(pointer:fine)').matches){
    document.querySelectorAll('.tilt-wrap').forEach(function(w){
      var card = w.querySelector('.tilt'); if(!card) return;
      w.addEventListener('pointermove', function(ev){
        var r = w.getBoundingClientRect();
        var x = (ev.clientX-r.left)/r.width - .5, y = (ev.clientY-r.top)/r.height - .5;
        card.style.transform = 'rotateY('+(x*7)+'deg) rotateX('+(-y*7)+'deg)';
      });
      w.addEventListener('pointerleave', function(){ card.style.transform = ''; });
    });
  }

  /* ---- Hero particle field: <canvas class="hero-canvas" data-density="1"> ----
     Drifting plotter points + short connective linework, brand tinted, very low key. */
  document.querySelectorAll('canvas.hero-canvas').forEach(function(cv){
    if(reduced) return;
    var ctx = cv.getContext('2d'), pts = [], W, H, raf;
    var dark = cv.dataset.theme === 'dark';
    function size(){
      var r = cv.parentElement.getBoundingClientRect();
      W = cv.width = r.width * devicePixelRatio;
      H = cv.height = r.height * devicePixelRatio;
      cv.style.width = r.width+'px'; cv.style.height = r.height+'px';
      var n = Math.min(70, Math.floor(r.width/22) * (parseFloat(cv.dataset.density||'1')));
      pts = [];
      for(var i=0;i<n;i++) pts.push({
        x:Math.random()*W, y:Math.random()*H,
        vx:(Math.random()-.5)*.14*devicePixelRatio, vy:(Math.random()-.5)*.14*devicePixelRatio,
        o:Math.random()*.5+.2, hot:Math.random()<.12
      });
    }
    function step(){
      ctx.clearRect(0,0,W,H);
      var linkD = 130*devicePixelRatio;
      for(var i=0;i<pts.length;i++){
        var p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if(p.x<0||p.x>W) p.vx*=-1;
        if(p.y<0||p.y>H) p.vy*=-1;
        for(var j=i+1;j<pts.length;j++){
          var q = pts[j], dx = p.x-q.x, dy = p.y-q.y, d = Math.sqrt(dx*dx+dy*dy);
          if(d<linkD){
            ctx.strokeStyle = dark
              ? 'rgba(127,168,205,'+(.13*(1-d/linkD))+')'
              : 'rgba(74,127,181,'+(.15*(1-d/linkD))+')';
            ctx.lineWidth = devicePixelRatio*.7;
            ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y); ctx.stroke();
          }
        }
        ctx.fillStyle = p.hot
          ? 'rgba(217,119,87,'+(p.o*.9)+')'
          : (dark ? 'rgba(127,168,205,'+(p.o*.7)+')' : 'rgba(46,94,142,'+(p.o*.6)+')');
        ctx.beginPath(); ctx.arc(p.x,p.y,(p.hot?2.2:1.5)*devicePixelRatio,0,7); ctx.fill();
      }
      raf = requestAnimationFrame(step);
    }
    var vio = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){ if(!raf) step(); }
        else { cancelAnimationFrame(raf); raf = null; }
      });
    });
    size(); vio.observe(cv);
    addEventListener('resize', function(){ size(); });
  });

  /* ---- Section rail: <div class="rail"><a href="#s1">... highlights on scroll ---- */
  var rail = document.querySelector('.rail');
  if(rail){
    var links = [].slice.call(rail.querySelectorAll('a'));
    var secs = links.map(function(a){ return document.querySelector(a.getAttribute('href')); });
    var rio = new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){
          links.forEach(function(a){ a.classList.remove('on'); });
          var i = secs.indexOf(e.target);
          if(i>-1) links[i].classList.add('on');
        }
      });
    },{rootMargin:'-45% 0px -45% 0px'});
    secs.forEach(function(s){ if(s) rio.observe(s); });
  }
})();
