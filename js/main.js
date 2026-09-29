/* ========================
   YEAR
======================== */
document.getElementById('year').textContent = new Date().getFullYear();

/* ========================
   LIVE CLOCK
======================== */
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const el = document.getElementById('hud-time');
  if (el) el.textContent = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

/* ========================
   CHANNEL NAMES
======================== */
const channelNames = {
  'ch-home':     '[ CH.00 — HOME ]',
  'ch-about':    '[ CH.01 — ABOUT ME ]',
  'ch-projects': '[ CH.02 — PROJECTS ]',
  'ch-skills':   '[ CH.03 — MISC ]',
  'ch-contact':  '[ CH.04 — CONTACT ]',
};

/* ========================
   PROJECT DATA
   Fill in your real URLs and
   update the text before deploying
======================== */
const projectData = {
  tindahan: {
    title: 'Tindahan',
    cat: 'WEB APP',
    status: 'live',
    tags: ['HTML', 'CSS', 'JavaScript'],
    brief: 'Sari-sari store owners in the Philippines track stock and customer credit in paper notebooks that get lost or miscounted. There was no simple, offline-first digital solution built for their needs.',
    built: 'A mobile-first web app with a product inventory list, quick add/subtract stock buttons, and a customer credit ledger. All data persists in localStorage — no account or internet connection required.',
    learned: 'I had not worked with localStorage before this project. Stock counts were resetting on refresh until I understood that browser memory clears on reload — I then built a save/load layer that syncs on every change.',
    liveUrl:   '#',
    githubUrl: '#'
  },
  starfall: {
    title: 'Starfall',
    cat: 'GAME',
    status: 'wip',
    tags: ['Phaser.js', 'JavaScript', 'Tiled'],
    brief: 'I wanted to build a playable RPG town prototype to learn game development fundamentals — tile maps, player movement, collision, and NPC interaction — without a full engine like Unity.',
    built: 'A 2D top-down RPG town using Phaser.js with a walkable tile map built in Tiled, sprite-based player movement, collision layers, and proximity-triggered NPC dialogue boxes.',
    learned: 'Tile map layers and collision zones were the trickiest part. I learned to separate walkable tiles, collision objects, and decorative layers in Tiled and reference each correctly in Phaser.',
    liveUrl:   '#',
    githubUrl: '#'
  },
  bloom: {
    title: 'Bloom',
    cat: 'APP',
    status: 'live',
    tags: ['HTML', 'CSS', 'JavaScript'],
    brief: 'I kept forgetting to water my plants and had no easy way to track which ones needed attention and when — without something that felt clinical or boring.',
    built: 'A plant care tracker with a plant list, individual watering schedules, health status tags, and a dashboard showing what needs attention today. Styled with a soft, cute UI.',
    learned: 'Working with date calculations in JavaScript — figuring out days since last watered and comparing to each plant\'s watering interval — taught me a lot about the Date API.',
    liveUrl:   '#',
    githubUrl: '#'
  },
  cipher: {
    title: 'Cipher UI',
    cat: 'DESIGN',
    status: 'live',
    tags: ['Figma', 'UI/UX'],
    brief: 'Ethical hacking tools typically have outdated, intimidating interfaces that prioritise function over clarity. I wanted to design a dashboard that felt modern and readable.',
    built: 'A Figma UI concept for an ethical hacking dashboard — network scan results, vulnerability tables, live log feeds, and status indicators — in a clean dark interface with clear data hierarchy.',
    learned: 'Designing for dense, technical data taught me a lot about visual hierarchy and whitespace. Making a vulnerability table feel scannable rather than overwhelming was the core design challenge.',
    liveUrl:   '#',
    githubUrl: '#'
  },
  orbit: {
    title: 'Orbit',
    cat: 'WEB',
    status: 'live',
    tags: ['HTML', 'CSS', 'JavaScript'],
    brief: 'I wanted a journaling app that felt personal and cosy rather than clinical — something I\'d actually want to open every day rather than a productivity tool.',
    built: 'A personal journaling web app with a pixel art aesthetic, mood tagging on each entry, a monthly calendar view, and a streak tracker. All entries stored in localStorage.',
    learned: 'Building the calendar view taught me how to work with the JavaScript Date object — calculating which day of the week a month starts on, handling month lengths, and rendering a dynamic grid.',
    liveUrl:   '#',
    githubUrl: '#'
  },
  hmbtv: {
    title: 'HMB.TV',
    cat: 'PORTFOLIO',
    status: 'live',
    tags: ['HTML', 'CSS', 'JavaScript'],
    brief: 'I wanted a portfolio that felt like me — playful, aesthetic, and technically interesting — rather than another standard developer template that every graduate submits.',
    built: 'A channel-based portfolio styled as Y2K Coquette meets Retro CRT TV. Channel switching with static effects, a live clock HUD, an interactive canvas particle system that reacts to mouse movement.',
    learned: 'This project taught me how to combine many small techniques — CSS clip-path animations, canvas particle physics with velocity and repulsion, CRT visual effects, and a complete design system — into one coherent experience.',
    liveUrl:   '#',
    githubUrl: '#'
  }
};

/* ========================
   PROJECT MODAL
======================== */
const modal      = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close-btn');

function openModal(projectKey) {
  const p = projectData[projectKey];
  if (!p) return;

  document.getElementById('modal-title').textContent   = p.title;
  document.getElementById('modal-cat').textContent     = p.cat;
  document.getElementById('modal-brief').textContent   = p.brief;
  document.getElementById('modal-built').textContent   = p.built;
  document.getElementById('modal-learned').textContent = p.learned;

  const statusEl       = document.getElementById('modal-status');
  statusEl.textContent = p.status === 'live' ? '● LIVE' : '● WIP';
  statusEl.className   = `modal-status ${p.status}`;

  const tagsEl     = document.getElementById('modal-tags');
  tagsEl.innerHTML = p.tags.map(t => `<span class="ptag">${t}</span>`).join('');

  const liveBtn   = document.getElementById('modal-live');
  const githubBtn = document.getElementById('modal-github');
  liveBtn.href    = p.liveUrl;
  githubBtn.href  = p.githubUrl;

  liveBtn.style.display   = p.liveUrl   === '#' ? 'none' : 'inline-block';
  githubBtn.style.display = p.githubUrl === '#' ? 'none' : 'inline-block';

  document.getElementById('modal-screenshot').innerHTML =
    `[ SCREENSHOT ]<br>Add assets/images/${projectKey}.png`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('.project-card[data-project]').forEach(card => {
  card.addEventListener('click', () => openModal(card.getAttribute('data-project')));
});

/* ========================
   TV TURN-ON SEQUENCE
======================== */
const tvScreen = document.querySelector('.screen');
tvScreen.style.opacity  = '0';
tvScreen.style.clipPath = 'inset(50% 0 50% 0 round 32px)';

const tvLine = document.createElement('div');
tvLine.className = 'tv-startup-line';
document.body.appendChild(tvLine);

window.addEventListener('load', () => {

  setTimeout(() => tvLine.classList.add('visible'), 300);

  setTimeout(() => {
    tvLine.remove();
    tvScreen.style.transition = 'clip-path 0.5s ease, opacity 0.4s ease';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      tvScreen.style.clipPath = 'inset(0% 0 0% 0 round 32px)';
      tvScreen.style.opacity  = '1';
    }));
  }, 700);

  setTimeout(staticBurst, 820);

  const heroMain = document.querySelector('.hero-main');
  if (heroMain) {
    heroMain.style.opacity    = '0';
    heroMain.style.transform  = 'translateY(20px)';
    heroMain.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    setTimeout(() => {
      heroMain.style.opacity   = '1';
      heroMain.style.transform = 'translateY(0)';
    }, 1200);
  }

  setTimeout(() => {
    tvScreen.style.transition = '';
    tvScreen.style.clipPath   = '';
  }, 1400);

  setTimeout(() => {
    initHeroCanvas();
    scheduleGlitch();
  }, 900);
});

/* ========================
   STATIC BURST
======================== */
function staticBurst() {
  const burst = document.createElement('div');
  burst.style.cssText = `
    position: fixed; inset: 20px; border-radius: 32px;
    z-index: 9997; pointer-events: none; opacity: 0.6;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
    animation: burstfade 0.5s ease forwards;
  `;
  document.body.appendChild(burst);
  const s = document.createElement('style');
  s.textContent = `@keyframes burstfade { 0% { opacity:0.6; } 100% { opacity:0; } }`;
  document.head.appendChild(s);
  setTimeout(() => { burst.remove(); s.remove(); }, 600);
}

/* ========================
   HERO CANVAS
   Interactive particle system
======================== */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx   = canvas.getContext('2d');
  const wrap  = canvas.parentElement;
  const mouse = { x: null, y: null };
  const particles = [];

  function resize() {
    canvas.width  = wrap.offsetWidth;
    canvas.height = wrap.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const COLORS = [
    '#A83830', '#EDCCC0', '#D4907E',
    '#B86050', '#C04030', '#5C2E1A'
  ];

  class Particle {
    constructor() { this.init(); }

    init() {
      this.x        = Math.random() * canvas.width;
      this.y        = Math.random() * canvas.height;
      this.size     = Math.random() * 13 + 5;
      this.baseSpX  = (Math.random() - 0.5) * 0.35;
      this.baseSpY  = -(Math.random() * 0.55 + 0.15);
      this.opacity  = Math.random() * 0.45 + 0.15;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.025;
      this.type     = Math.random() > 0.45 ? 'star' : 'heart';
      this.color    = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.vx       = 0;
      this.vy       = 0;
    }

    drawStar(r) {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const oA = (i * 4 * Math.PI / 5) - Math.PI / 2;
        const iA = oA + (2 * Math.PI / 10);
        if (i === 0) ctx.moveTo(Math.cos(oA) * r,        Math.sin(oA) * r);
        else         ctx.lineTo(Math.cos(oA) * r,        Math.sin(oA) * r);
                     ctx.lineTo(Math.cos(iA) * r * 0.42, Math.sin(iA) * r * 0.42);
      }
      ctx.closePath();
    }

    drawHeart(r) {
      ctx.beginPath();
      ctx.moveTo(0, -r * 0.1);
      ctx.bezierCurveTo( r * 0.5, -r * 0.75,  r,  r * 0.25, 0,  r * 0.9);
      ctx.bezierCurveTo(-r,        r * 0.25, -r * 0.5, -r * 0.75, 0, -r * 0.1);
      ctx.closePath();
    }

    update() {
      if (mouse.x !== null) {
        const dx   = this.x - mouse.x;
        const dy   = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const R    = 130;
        if (dist < R && dist > 0) {
          const force = ((R - dist) / R) * 5;
          this.vx += (dx / dist) * force;
          this.vy += (dy / dist) * force;
        }
      }

      this.vx *= 0.90;
      this.vy *= 0.90;
      this.x  += this.baseSpX + this.vx;
      this.y  += this.baseSpY + this.vy;
      this.rotation += this.rotSpeed;

      if (this.y < -this.size * 2) {
        this.x  = Math.random() * canvas.width;
        this.y  = canvas.height + this.size;
        this.vx = 0;
        this.vy = 0;
      }

      if (this.x < -this.size * 2)               this.x = canvas.width + this.size;
      if (this.x > canvas.width + this.size * 2)  this.x = -this.size;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle   = this.color;
      if (this.type === 'star') this.drawStar(this.size);
      else                      this.drawHeart(this.size);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 70; i++) particles.push(new Particle());

  wrap.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  wrap.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }

  animate();
}

/* ========================
   CHANNEL SWITCHING
======================== */
function switchChannel(targetId) {
  const current    = document.querySelector('.channel.active');
  const target     = document.getElementById(targetId);
  const hudChannel = document.getElementById('hud-channel');
  const viewport   = document.querySelector('.channel-viewport');

  if (!target || current === target) return;

  const overlay = document.createElement('div');
  overlay.className = 'channel-static';
  document.body.appendChild(overlay);

  setTimeout(() => {
    current.classList.remove('active');
    target.classList.add('active');
    target.classList.add('channel-tuning');
    setTimeout(() => target.classList.remove('channel-tuning'), 350);

    if (hudChannel) {
      hudChannel.style.opacity = '0';
      setTimeout(() => {
        hudChannel.textContent   = channelNames[targetId] || targetId;
        hudChannel.style.opacity = '1';
      }, 100);
    }

    document.querySelectorAll('.tv-ch-btn').forEach(btn => {
      btn.classList.toggle('active',
        btn.getAttribute('data-channel') === targetId
      );
    });

    if (viewport) viewport.scrollTop = 0;
  }, 260);

  setTimeout(() => overlay.remove(), 600);
}

document.querySelectorAll('[data-channel]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    switchChannel(el.getAttribute('data-channel'));
  });
});

/* ========================
   CRT GLITCH
======================== */
const heroPort = document.querySelector('.hero-port');

function glitch() {
  if (!heroPort) return;
  heroPort.style.textShadow = '4px 0 var(--rose), -4px 0 var(--pink-soft)';
  heroPort.style.transform  = 'skewX(-1.5deg)';
  heroPort.style.opacity    = '0.82';
  setTimeout(() => {
    heroPort.style.textShadow = 'none';
    heroPort.style.transform  = 'skewX(0deg)';
    heroPort.style.opacity    = '1';
  }, 130);
}

function scheduleGlitch() {
  const delay = Math.random() * 4000 + 3000;
  setTimeout(() => { glitch(); scheduleGlitch(); }, delay);
}

/* ========================
   PROJECT FILTER
======================== */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.project-card').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-cat') === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ========================
   CUSTOM CURSOR
======================== */
const customCursor = document.createElement('div');
customCursor.className = 'custom-cursor';
customCursor.innerHTML = `
  <div class="custom-cursor-star"></div>
  <div class="custom-cursor-dot"></div>
`;
document.body.appendChild(customCursor);

document.addEventListener('mousemove', e => {
  customCursor.style.left = e.clientX + 'px';
  customCursor.style.top  = e.clientY + 'px';
});

const hoverTargets = [
  'a', 'button',
  '[data-channel]', '[data-project]',
  '.project-card', '.quiz-card',
  '.tv-ch-btn', '.filter-btn',
  '.social-btn', '.tool-badge',
  '.role-pill', '.chip',
  '.resume-btn', '.modal-close',
  '.modal-btn', '.ns-item',
  '.about-cred-card', '.skill-row'
].join(', ');

document.querySelectorAll(hoverTargets).forEach(el => {
  el.addEventListener('mouseenter', () => customCursor.classList.add('is-hovering'));
  el.addEventListener('mouseleave', () => customCursor.classList.remove('is-hovering'));
});

document.addEventListener('mousedown', () => customCursor.classList.add('is-clicking'));
document.addEventListener('mouseup',   () => customCursor.classList.remove('is-clicking'));
document.addEventListener('mouseleave', () => { customCursor.style.opacity = '0'; });
document.addEventListener('mouseenter', () => { customCursor.style.opacity = '1'; });