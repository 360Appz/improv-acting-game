/* =============================================================
   IMPROV QUEST — Game Engine
   Handles: XP, achievements, shuffle, hour-based seeding,
            sound system (Web Audio API), daily tracking
   ============================================================= */

const Engine = (() => {

  /* ── HOUR-BASED SEED ─────────────────────────────────────── */
  // Seeds shuffle differently each hour of the day
  const getHourSeed = () => {
    const d = new Date();
    return d.getFullYear() * 1000000 + (d.getMonth()+1) * 10000 + d.getDate() * 100 + d.getHours();
  };

  // Seeded pseudo-random (Mulberry32)
  const seededRandom = (seed) => {
    let s = seed >>> 0;
    return () => {
      s += 0x6D2B79F5;
      let t = s;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  };

  const shuffleSeeded = (arr, seed) => {
    const rng = seededRandom(seed);
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const getDailyItem = (arr, offset = 0) => {
    const d = new Date();
    const dayIdx = Math.floor(d.getTime() / 86400000) + offset;
    return arr[dayIdx % arr.length];
  };

  const getHourlyItem = (arr, offset = 0) => {
    const seed = getHourSeed() + offset;
    const rng = seededRandom(seed);
    return arr[Math.floor(rng() * arr.length)];
  };

  /* ── STORAGE ─────────────────────────────────────────────── */
  const store = {
    get: (k, fallback) => { try { const v = localStorage.getItem('iq_' + k); return v !== null ? JSON.parse(v) : fallback; } catch { return fallback; } },
    set: (k, v) => { try { localStorage.setItem('iq_' + k, JSON.stringify(v)); } catch {} }
  };

  /* ── XP SYSTEM ───────────────────────────────────────────── */
  const XP_CONFIG = {
    readSection:    10,
    completeDrill:  20,
    quizCorrect:    25,
    rapidFireDone:  15,
    dailyVisit:     5,
    fullWeek:       100,
    streak:         10
  };

  const xp = {
    total:    () => store.get('xp', 0),
    level:    () => Math.floor(store.get('xp', 0) / 100) + 1,
    progress: () => store.get('xp', 0) % 100,
    add: (amount, reason) => {
      const prev = store.get('xp', 0);
      const next = prev + amount;
      store.set('xp', next);
      xp._notify(amount, reason);
      xp._checkLevel(Math.floor(prev/100)+1, Math.floor(next/100)+1);
      dispatchEvent(new CustomEvent('xpChange', { detail: { xp: next, level: xp.level(), progress: xp.progress() } }));
      return next;
    },
    _notify: (amt, reason) => {
      dispatchEvent(new CustomEvent('xpEarned', { detail: { amount: amt, reason } }));
    },
    _checkLevel: (prevLvl, newLvl) => {
      if (newLvl > prevLvl) {
        dispatchEvent(new CustomEvent('levelUp', { detail: { level: newLvl } }));
      }
    }
  };

  /* ── ACHIEVEMENTS ────────────────────────────────────────── */
  const ACHIEVEMENTS = [
    { id: 'first_read',      title: '👁️ First Look',       desc: 'Read your first section',          xp: 10 },
    { id: 'quiz_ace',        title: '🎯 Quiz Ace',          desc: 'Get 5 quiz questions right',        xp: 50 },
    { id: 'rapid_fire',      title: '⚡ Rapid Fire',        desc: 'Complete a rapid-fire session',     xp: 30 },
    { id: 'daily_visitor',   title: '🌅 Daily Visitor',     desc: 'Visit on 3 different days',         xp: 25 },
    { id: 'all_skills',      title: '🧠 All Skills',        desc: 'Read all 6 core skills',            xp: 60 },
    { id: 'deep_dive',       title: '🌊 Deep Diver',        desc: 'Explore all acting tools',          xp: 40 },
    { id: 'scenario_master', title: '🎭 Scene Master',      desc: 'Read all 7 scenarios',              xp: 70 },
    { id: 'perfectionist',   title: '💎 Perfect Score',     desc: 'Get 100% on a quiz',                xp: 100 },
    { id: 'book_worm',       title: '📚 Book Worm',         desc: 'Visit the reading list',            xp: 15 },
    { id: 'principle_know',  title: '📐 Principled',        desc: 'Read all 7 principles',             xp: 35 },
    { id: 'streak_3',        title: '🔥 On Fire',           desc: '3-day streak',                      xp: 30 },
    { id: 'streak_7',        title: '🌟 Committed',         desc: '7-day streak',                      xp: 70 }
  ];

  const achievements = {
    unlocked: () => store.get('achievements', []),
    isUnlocked: (id) => store.get('achievements', []).includes(id),
    unlock: (id) => {
      const list = store.get('achievements', []);
      if (!list.includes(id)) {
        list.push(id);
        store.set('achievements', list);
        const ach = ACHIEVEMENTS.find(a => a.id === id);
        if (ach) {
          xp.add(ach.xp, 'Achievement: ' + ach.title);
          dispatchEvent(new CustomEvent('achievement', { detail: ach }));
        }
      }
    }
  };

  /* ── STREAK ──────────────────────────────────────────────── */
  const streak = {
    get: () => store.get('streak', 0),
    check: () => {
      const today = new Date().toDateString();
      const last = store.get('lastVisit', '');
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (last === today) return store.get('streak', 0);
      const current = last === yesterday ? store.get('streak', 0) + 1 : 1;
      store.set('streak', current);
      store.set('lastVisit', today);
      xp.add(XP_CONFIG.dailyVisit, 'Daily visit');
      if (current >= 3)  achievements.unlock('streak_3');
      if (current >= 7)  achievements.unlock('streak_7');
      return current;
    }
  };

  /* ── PROGRESS TRACKING ───────────────────────────────────── */
  const progress = {
    getRead:       ()    => store.get('read', {}),
    markRead:      (id)  => {
      const r = store.get('read', {});
      if (!r[id]) { r[id] = true; store.set('read', r); xp.add(XP_CONFIG.readSection, 'Read: ' + id); }
      if (!achievements.isUnlocked('first_read')) achievements.unlock('first_read');
    },
    getCompleted:  ()    => store.get('completed', {}),
    markCompleted: (id)  => {
      const c = store.get('completed', {});
      if (!c[id]) { c[id] = true; store.set('completed', c); xp.add(XP_CONFIG.completeDrill, 'Drill: ' + id); }
    },
    quizScore:     ()    => store.get('quizScore', { correct: 0, total: 0 }),
    addQuizResult: (correct) => {
      const s = store.get('quizScore', { correct: 0, total: 0 });
      s.total++;
      if (correct) { s.correct++; xp.add(XP_CONFIG.quizCorrect, 'Quiz correct'); }
      store.set('quizScore', s);
      if (s.correct >= 5) achievements.unlock('quiz_ace');
    }
  };

  /* ── SOUND ENGINE (Web Audio API) ────────────────────────── */
  const Sound = (() => {
    let ctx = null;
    let muted = false;

    const getCtx = () => {
      if (!ctx) {
        try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch {}
      }
      return ctx;
    };

    const play = (fn) => {
      if (muted) return;
      try {
        const c = getCtx();
        if (!c) return;
        if (c.state === 'suspended') c.resume();
        fn(c);
      } catch {}
    };

    const osc = (c, freq, type, duration, vol = 0.3, fadeOut = true) => {
      const o = c.createOscillator();
      const g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.type = type;
      o.frequency.setValueAtTime(freq, c.currentTime);
      g.gain.setValueAtTime(vol, c.currentTime);
      if (fadeOut) g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + duration);
      o.start(c.currentTime);
      o.stop(c.currentTime + duration);
    };

    const tap = () => play(c => {
      osc(c, 440, 'sine', 0.08, 0.15);
    });

    const pop = () => play(c => {
      osc(c, 800, 'sine', 0.06, 0.2);
      setTimeout(() => osc(c, 1200, 'sine', 0.06, 0.15), 60);
    });

    const success = () => play(c => {
      [523, 659, 784].forEach((f, i) => setTimeout(() => osc(c, f, 'sine', 0.18, 0.25), i * 100));
    });

    const wrong = () => play(c => {
      osc(c, 200, 'sawtooth', 0.25, 0.2);
      setTimeout(() => osc(c, 180, 'sawtooth', 0.25, 0.2), 100);
    });

    const levelUp = () => play(c => {
      [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => osc(c, f, 'triangle', 0.25, 0.3), i * 120));
    });

    const swipe = () => play(c => {
      const o = c.createOscillator();
      const g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.type = 'sine';
      o.frequency.setValueAtTime(600, c.currentTime);
      o.frequency.exponentialRampToValueAtTime(200, c.currentTime + 0.15);
      g.gain.setValueAtTime(0.2, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.15);
      o.start(); o.stop(c.currentTime + 0.15);
    });

    const reveal = () => play(c => {
      [440, 550, 660].forEach((f, i) => setTimeout(() => { osc(c, f, 'sine', 0.12, 0.18); }, i * 80));
    });

    const achieve = () => play(c => {
      [784, 988, 1175, 1568].forEach((f, i) => setTimeout(() => osc(c, f, 'triangle', 0.3, 0.35), i * 90));
    });

    const hover = () => play(c => osc(c, 1200, 'sine', 0.04, 0.06));

    const setMuted = (v) => { muted = v; };
    const isMuted  = ()  => muted;

    return { tap, pop, success, wrong, levelUp, swipe, reveal, achieve, hover, setMuted, isMuted };
  })();

  /* ── THEME ───────────────────────────────────────────────── */
  const theme = {
    get:    ()  => store.get('theme', 'light'),
    set:    (t) => { store.set('theme', t); document.documentElement.setAttribute('data-theme', t); },
    toggle: ()  => theme.set(theme.get() === 'light' ? 'dark' : 'light')
  };

  /* ── CURSOR ──────────────────────────────────────────────── */
  const initCursor = () => {
    const ring = document.getElementById('cursor');
    const dot  = document.getElementById('cursor-dot');
    if (!ring || !dot) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) { ring.style.left = mx + 'px'; ring.style.top = my + 'px'; }
      if (dot)  { dot.style.left  = mx + 'px'; dot.style.top  = my + 'px'; }
      requestAnimationFrame(animate);
    };
    animate();

    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.classList.add('hovering'); Sound.hover(); });
      el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
    });
  };

  /* ── PARTICLES ───────────────────────────────────────────── */
  const initParticles = () => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = ['#ff4d1c','#ffd60a','#0057ff','#00c896','#ff2d8b','#8b5cf6'];

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 2 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.col = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.1;
        this.life = Math.random() * 200 + 100;
        this.age = 0;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.age++;
        if (this.age > this.life || this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha * Math.sin(Math.PI * this.age / this.life);
        ctx.fillStyle = this.col;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const N = Math.min(window.innerWidth < 768 ? 40 : 80, 100);
    for (let i = 0; i < N; i++) particles.push(new Particle());

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(loop);
    };
    loop();
  };

  /* ── PARALLAX ────────────────────────────────────────────── */
  const initParallax = () => {
    const layers = document.querySelectorAll('[data-parallax]');
    if (!layers.length) return;

    const onScroll = () => {
      const sy = window.scrollY;
      layers.forEach(el => {
        const speed = parseFloat(el.dataset.parallax || 0.3);
        el.style.transform = `translateY(${sy * speed}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  };

  /* ── TILT EFFECT (3D cards) ──────────────────────────────── */
  const initTilt = () => {
    document.querySelectorAll('[data-tilt]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width  - 0.5;
        const y = (e.clientY - rect.top)  / rect.height - 0.5;
        el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)';
        el.style.transition = 'transform 0.4s ease';
      });
      el.addEventListener('mouseenter', () => { el.style.transition = 'none'; });
    });
  };

  /* ── REVEAL ANIMATIONS (Intersection Observer) ───────────── */
  const initReveal = () => {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
  };

  /* ── XP BAR UI ───────────────────────────────────────────── */
  const renderXPBar = () => {
    const fill   = document.getElementById('xp-fill');
    const lvlEl  = document.getElementById('xp-level');
    const xpEl   = document.getElementById('xp-total');
    const strEl  = document.getElementById('xp-streak');

    const update = () => {
      if (fill)  fill.style.width  = xp.progress() + '%';
      if (lvlEl) lvlEl.textContent = xp.level();
      if (xpEl)  xpEl.textContent  = xp.total();
      if (strEl) strEl.textContent = streak.get();
    };
    update();

    window.addEventListener('xpChange', update);
    window.addEventListener('levelUp', (e) => {
      Sound.levelUp();
      showAchievementPop('🆙 Level ' + e.detail.level + '!');
    });
    window.addEventListener('achievement', (e) => {
      Sound.achieve();
      showAchievementPop(e.detail.title + ' — ' + e.detail.desc);
    });
  };

  /* ── ACHIEVEMENT POPUP ───────────────────────────────────── */
  const showAchievementPop = (text) => {
    const el = document.getElementById('achievement-pop');
    if (!el) return;
    el.textContent = '🏆 ' + text;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3500);
  };

  /* ── CAROUSEL ────────────────────────────────────────────── */
  const initCarousel = (containerEl) => {
    if (!containerEl) return;
    const track    = containerEl.querySelector('.carousel-track');
    const slides   = Array.from(track ? track.children : []);
    const btnPrev  = containerEl.querySelector('.carousel-prev');
    const btnNext  = containerEl.querySelector('.carousel-next');
    const counter  = containerEl.querySelector('.carousel-counter');
    if (!track || !slides.length) return;

    let current = 0;

    const goto = (idx) => {
      current = (idx + slides.length) % slides.length;
      slides.forEach((s, i) => {
        s.classList.toggle('active', i === current);
        s.setAttribute('aria-hidden', i !== current);
      });
      if (counter) counter.textContent = (current + 1) + ' / ' + slides.length;
      Sound.swipe();
    };

    // Touch/swipe
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend',   e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) goto(dx < 0 ? current + 1 : current - 1);
    });

    if (btnPrev) btnPrev.addEventListener('click', () => goto(current - 1));
    if (btnNext) btnNext.addEventListener('click', () => goto(current + 1));

    goto(0);
    return { goto, current: () => current, total: () => slides.length };
  };

  /* ── INIT ALL ────────────────────────────────────────────── */
  const init = () => {
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', theme.get());

    // Dark mode toggle
    const toggle = document.getElementById('dark-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', theme.get() === 'dark');
      toggle.addEventListener('click', () => {
        theme.toggle();
        toggle.setAttribute('aria-pressed', theme.get() === 'dark');
        Sound.pop();
      });
    }

    // Sound toggle
    const soundToggle = document.getElementById('sound-toggle');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        const m = !Sound.isMuted();
        Sound.setMuted(m);
        soundToggle.classList.toggle('muted', m);
        soundToggle.title = m ? 'Unmute' : 'Mute';
      });
    }

    // Nav links sound
    document.querySelectorAll('.nav-link, .btn').forEach(el => {
      el.addEventListener('click', () => Sound.tap());
    });

    streak.check();
    initCursor();
    initParticles();
    initParallax();
    setTimeout(() => { initTilt(); initReveal(); }, 100);
    renderXPBar();
  };

  return {
    shuffle: shuffleSeeded,
    getDailyItem,
    getHourlyItem,
    getHourSeed,
    xp,
    achievements,
    streak,
    progress,
    Sound,
    theme,
    initCarousel,
    showAchievementPop,
    init,
    XP_CONFIG,
    ACHIEVEMENTS
  };
})();

window.Engine = Engine;
