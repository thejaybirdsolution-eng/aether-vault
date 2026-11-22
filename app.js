/* ==========================================================================
   AETHER // VAULT OS v4.2 — CORE APPLICATION & TELEMETRY ENGINE
   ========================================================================== */

const INITIAL_ARTIFACTS = [
  {
    id: 1,
    name: 'pokefirered_live_action.gba',
    title: 'Pokémon FireRed: Live Action',
    subtitle: 'GBA ROM • Real-Time Action Overhaul',
    category: 'pokemon',
    categoryLabel: 'POKÉMON EDITIONS',
    ext: 'gba',
    codec: 'GBA // ARM7TDMI',
    mb: 16.00,
    bytes: 16777216,
    sha256: '364c1140f472012a08e4380c4f8f053a3793bf8be747d93ac52ba2d3d8bb5101',
    shape: 'icosahedron',
    span2: true,
    desc: 'Full 16MB Pokémon FireRed Live-Action Edition ROM featuring real-time combat mechanics and custom overworld engine.'
  },
  {
    id: 2,
    name: 'Pokemon_LeafGreen_x_Zelda_Minish_Cap.gba',
    title: 'LeafGreen × Zelda Minish Cap',
    subtitle: 'GBA Crossover ROM • Kanto + Hyrule',
    category: 'pokemon',
    categoryLabel: 'POKÉMON EDITIONS',
    ext: 'gba',
    codec: 'GBA // CROSSOVER',
    mb: 16.00,
    bytes: 16777216,
    sha256: '8aa501a8607d3b0d5ff736bd92411d512d7eabeebd04e1e5b5bca6c0755d89d1',
    shape: 'octahedron',
    desc: 'Cross-universe fusion combining Pokémon LeafGreen and The Legend of Zelda: The Minish Cap mechanics and sprites.'
  },
  {
    id: 3,
    name: 'Pokemon - Ruby Version (U) (V1.1) - Mod Menu.gba',
    title: 'Pokémon Ruby (v1.1) + Mod Menu',
    subtitle: 'GBA ROM • Built-In Debug & Mod HUD',
    category: 'pokemon',
    categoryLabel: 'POKÉMON EDITIONS',
    ext: 'gba',
    codec: 'GBA // MOD MENU',
    mb: 16.00,
    bytes: 16777216,
    sha256: 'fead250fedd7f5835a7737162e0d6cca6023c9130badd64fec6e029f5faabf2d',
    shape: 'torusKnot',
    desc: 'Pokémon Ruby v1.1 enhanced with an integrated in-game Mod Menu overlay for instant warp, encounters, and item injection.'
  },
  {
    id: 4,
    name: 'Pokemon_LeafGreen_MK_Edition.gba',
    title: 'Pokémon LeafGreen: MK Edition',
    subtitle: 'GBA ROM • Mortal Kombat Arena Fusion',
    category: 'pokemon',
    categoryLabel: 'POKÉMON EDITIONS',
    ext: 'gba',
    codec: 'GBA // MK EDITION',
    mb: 16.00,
    bytes: 16777216,
    sha256: '6cce12c38347faf9877431fc51f7a7fde65fd0f0c3f9f6e509746d91c98b1142',
    shape: 'dodecahedron',
    desc: 'Custom LeafGreen MK Edition overhaul blending arcade fighter encounters, custom move tables, and Kanto progression.'
  },
  {
    id: 5,
    name: 'Pokemon_Kombat_Advance.gba',
    title: 'Pokémon Kombat Advance',
    subtitle: 'GBA Homebrew Fighter • 64KB Engine',
    category: 'pokemon',
    categoryLabel: 'POKÉMON EDITIONS',
    ext: 'gba',
    codec: 'GBA // FIGHTER',
    mb: 0.06,
    bytes: 65536,
    sha256: '5114375cfa27a422ca532a0a44df6130a9ff57e28f6b5d4e084b3513e2e705d9',
    shape: 'box',
    desc: 'Ultra-compact 60fps 2D arena fighting game engine built natively for Game Boy Advance hardware.'
  },
  {
    id: 6,
    name: 'multiverse_brawl.gba',
    title: 'Multiverse Brawl GBA',
    subtitle: 'GBA Platform Fighter • Custom Roster',
    category: 'original',
    categoryLabel: 'ORIGINAL GBA',
    ext: 'gba',
    codec: 'GBA // BRAWLER',
    mb: 3.28,
    bytes: 3438168,
    sha256: 'c4823e226a2f05f9f326109a65f87a7f89917cb6ec8c10b8bc6fcc513690611e',
    shape: 'torusKnot',
    desc: 'Cross-franchise GBA platform brawler with multi-stage knockback physics, special move cancels, and custom sprites.'
  },
  {
    id: 7,
    name: 'tidemark.gba',
    title: 'Tidemark',
    subtitle: 'Original GBA Adventure • 2.00 MB',
    category: 'original',
    categoryLabel: 'ORIGINAL GBA',
    ext: 'gba',
    codec: 'GBA // NATIVE',
    mb: 2.00,
    bytes: 2097152,
    sha256: '794cf576090c0e9f4e722ced1d4d0b4d2b9eaa23ccb468eebb21ddd7577bec69',
    shape: 'icosahedron',
    desc: 'Maritime tactical exploration and oceanic world-building built from scratch for the Game Boy Advance.'
  },
  {
    id: 8,
    name: 'wildheart.gba',
    title: 'Wildheart',
    subtitle: 'Original GBA Action RPG • 1.75 MB',
    category: 'original',
    categoryLabel: 'ORIGINAL GBA',
    ext: 'gba',
    codec: 'GBA // ACTION RPG',
    mb: 1.75,
    bytes: 1835008,
    sha256: '1c2e8814b26f58d9a21b6ff85a42238476834b99444981c4733debe1bfceb185',
    shape: 'octahedron',
    desc: 'Fast-paced wilderness action-adventure GBA build with custom tile shaders, creature companions, and boss encounters.'
  },
  {
    id: 9,
    name: 'aethermon.gba',
    title: 'Aethermon GBA',
    subtitle: 'Monster Tamer Engine • 1.07 MB',
    category: 'original',
    categoryLabel: 'ORIGINAL GBA',
    ext: 'gba',
    codec: 'GBA // RPG CORE',
    mb: 1.07,
    bytes: 1117472,
    sha256: '0b9949f29ef06b89f42bb682b087d0476b34673be28c17917f4a9e55992faad6',
    shape: 'dodecahedron',
    desc: 'Custom monster-catching RPG engine for GBA featuring elemental synthesis, party synergy, and custom pixel art.'
  },
  {
    id: 10,
    name: 'Emberwake.gba',
    title: 'Emberwake',
    subtitle: 'GBA Tactical Dungeon Crawler • 268 KB',
    category: 'original',
    categoryLabel: 'ORIGINAL GBA',
    ext: 'gba',
    codec: 'GBA // HOMEBREW',
    mb: 0.26,
    bytes: 274764,
    sha256: '6154618ad45290974397267049d18b56f60c6d598fa3180ae576d91eb39b5d86',
    shape: 'box',
    desc: 'Atmospheric volcanic dungeon crawler with dynamic lighting tiles and frame-accurate dodge combat.'
  },
  {
    id: 11,
    name: 'NeonPulse.gba',
    title: 'NeonPulse',
    subtitle: 'Cybernetic Synth Arcade GBA • 128 KB',
    category: 'original',
    categoryLabel: 'ORIGINAL GBA',
    ext: 'gba',
    codec: 'GBA // ARCADE',
    mb: 0.13,
    bytes: 131072,
    sha256: '96bb23dd15eb21b42e9a77ae4b56979511259ed3926c971de5974724b887152c',
    shape: 'waveform',
    freq: 165,
    desc: 'High-speed synthwave reflex shooter and rhythm runner leveraging GBA Mode 7 and DirectSound channels.'
  },
  {
    id: 12,
    name: 'Pokemon-Ruby-Android-1.3.1.apk',
    title: 'Pokémon Ruby Android v1.3.1',
    subtitle: 'Native Android APK • mGBA + Mod Menu + Text Skip',
    category: 'android',
    categoryLabel: 'ANDROID APKS',
    ext: 'apk',
    codec: 'ANDROID // ARM64+V7',
    mb: 21.68,
    bytes: 22733000,
    sha256: '92df07dd5276f8235e5a3726fa9f928e8f546eaf55e14d08368d83125f1f5f7f',
    shape: 'torus',
    span2: true,
    desc: 'Standalone Android APK package running Pokémon Ruby natively via libmgba JNI with floating Mod Menu and dialogue skip.'
  },
  {
    id: 13,
    name: 'Jbird-Reader.apk',
    title: 'Jbird Reader (Android Suite)',
    subtitle: 'Native Android APK • Document & Comic Reader',
    category: 'android',
    categoryLabel: 'ANDROID APKS',
    ext: 'apk',
    codec: 'ANDROID // RELEASE APK',
    mb: 60.49,
    bytes: 63431572,
    sha256: '6133fbf13957434723c4e15fbdb97cf95184ebac58e17956e1533af4d01c394e',
    shape: 'icosahedron',
    span2: true,
    desc: 'Full production Android release APK for Jbird Reader featuring offline library indexing, smooth paging, and dark OLED UI.'
  }
];

/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */
const state = {
  artifacts: [...INITIAL_ARTIFACTS],
  selectedId: 1,
  activeView: 'bento',      // 'bento' | 'orbital' | 'terminal'
  activeCategory: 'all',    // 'all' | 'pokemon' | 'original' | 'android'
  queuedIds: new Set(),
  downloadedIds: new Set(),
  sfxEnabled: true,
  themeIndex: 0,
  themes: [
    { id: 'obsidian', label: 'CYBER', primary: 0x00f0ff, secondary: 0x7b61ff },
    { id: 'solar', label: 'SOLAR', primary: 0xff6b2b, secondary: 0xf59e0b },
    { id: 'emerald', label: 'MATRIX', primary: 0x00ff9d, secondary: 0x00b8ff }
  ],
  isAudioPlaying: false,
  transferSpeedBoost: 1.0
};

/* ==========================================================================
   PROCEDURAL WEB AUDIO API UI SYNTHESIZER
   ========================================================================== */
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.previewInterval = null;
    this.analyser = null;
    this.freqData = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.analyser = this.ctx.createAnalyser();
        this.analyser.fftSize = 128;
        this.freqData = new Uint8Array(this.analyser.frequencyBinCount);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playHover() {
    if (!state.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1480, now);
    osc.frequency.exponentialRampToValueAtTime(620, now + 0.025);
    gain.gain.setValueAtTime(0.022, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.028);
  }

  playSelect() {
    if (!state.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.035);
      gain.gain.setValueAtTime(0.045, now + i * 0.035);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.035 + 0.11);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.035);
      osc.stop(now + i * 0.035 + 0.12);
    });
  }

  playDownloadComplete() {
    if (!state.sfxEnabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [440, 554.37, 659.25, 880].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.045);
      gain.gain.setValueAtTime(0.055, now + i * 0.045);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.045 + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.045);
      osc.stop(now + i * 0.045 + 0.24);
    });
  }
}

const sfx = new SoundEngine();

/* ==========================================================================
   MICRO SVG VISUALIZER GENERATOR FOR EACH BENTO CARD
   ========================================================================== */
function getMicroVizSVG(item) {
  if (item.category === 'android') {
    return `<svg class="micro-viz" viewBox="0 0 46 26" fill="none" stroke="currentColor" stroke-width="1.3">
      <rect x="13" y="2" width="20" height="22" rx="3" stroke-opacity="0.9"/>
      <line x1="19" y1="5" x2="27" y2="5" stroke-opacity="0.6"/>
      <circle cx="23" cy="20" r="1.5" fill="currentColor"/>
    </svg>`;
  }
  if (item.category === 'pokemon') {
    return `<svg class="micro-viz" viewBox="0 0 46 26" fill="none" stroke="currentColor" stroke-width="1.4">
      <circle cx="23" cy="13" r="10" stroke-opacity="0.9"/>
      <line x1="13" y1="13" x2="19" y2="13" stroke-opacity="0.8"/>
      <line x1="27" y1="13" x2="33" y2="13" stroke-opacity="0.8"/>
      <circle cx="23" cy="13" r="3.2" fill="currentColor" fill-opacity="0.35"/>
    </svg>`;
  }
  return `<svg class="micro-viz" viewBox="0 0 46 26" fill="none" stroke="currentColor" stroke-width="1.3">
    <polygon points="23,2 37,9 37,19 23,24 9,19 9,9" stroke-opacity="0.85"/>
    <polyline points="9,9 23,15 37,9" stroke-opacity="0.5"/>
    <line x1="23" y1="15" x2="23" y2="24" stroke-opacity="0.5"/>
  </svg>`;
}

/* ==========================================================================
   RENDER VIEW 01: 4x4 ZERO-SCROLL HOLOGRAPHIC BENTO MATRIX
   ========================================================================== */
function renderBentoMatrix() {
  const grid = document.getElementById('bento-grid');
  grid.innerHTML = '';

  state.artifacts.forEach((item, idx) => {
    const isSelected = item.id === state.selectedId;
    const isQueued = state.queuedIds.has(item.id);
    const isDone = state.downloadedIds.has(item.id);
    const isDimmed = state.activeCategory !== 'all' && item.category !== state.activeCategory;

    const card = document.createElement('article');
    card.className = `artifact-card ${item.span2 ? 'span-2' : ''} ${isSelected ? 'selected' : ''} ${isQueued ? 'queued' : ''} ${isDimmed ? 'dimmed' : ''}`;
    card.dataset.id = item.id;

    const slotStr = String(idx + 1).padStart(2, '0');
    const shortSha = item.sha256.slice(0, 6) + '..' + item.sha256.slice(-4);
    const sizeText = item.mb >= 1 ? `${item.mb.toFixed(2)} MB` : `${Math.round(item.bytes / 1024)} KB`;

    card.innerHTML = `
      <div class="card-top">
        <div class="card-id-group">
          <div class="select-check" data-action="queue" title="Toggle Batch Queue">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span class="card-index">#${slotStr} // ${item.category.toUpperCase()}</span>
        </div>
        <span class="ext-badge ext-${item.ext}">.${item.ext}</span>
      </div>

      <div class="card-body">
        <div class="card-info">
          <div class="card-title" title="${item.name}">${item.title}</div>
          <div class="card-subtitle">${item.subtitle}</div>
        </div>
        <div style="color: var(--accent-primary);">
          ${getMicroVizSVG(item)}
        </div>
      </div>

      <div class="card-footer">
        <div class="size-telemetry">
          <span>${sizeText}</span>
          <span class="sha-pill">${shortSha}</span>
        </div>
        <button class="dl-mini-btn ${isDone ? 'done' : ''}" data-action="download" title="Direct Download (${sizeText})">
          ${isDone ? '✓ SAVED' : '↓ GET'}
        </button>
      </div>
      <div class="card-progress-line" id="card-prog-${item.id}"></div>
    `;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const rotY = ((x / rect.width) - 0.5) * 6;
      const rotX = (0.5 - (y / rect.height)) * 6;
      card.style.transform = `perspective(700px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });

    card.addEventListener('mouseenter', () => sfx.playHover());

    card.addEventListener('click', (e) => {
      const actionEl = e.target.closest('[data-action]');
      if (actionEl) {
        e.stopPropagation();
        const act = actionEl.dataset.action;
        if (act === 'queue') {
          toggleQueueArtifact(item.id);
        } else if (act === 'download') {
          selectArtifact(item.id, false);
          downloadSingleArtifact(item);
        }
        return;
      }
      selectArtifact(item.id, true);
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   RENDER VIEW 03: HIGH-DENSITY TERMINAL DECK
   ========================================================================== */
function renderTerminalDeck() {
  const container = document.getElementById('terminal-rows-container');
  container.innerHTML = '';

  state.artifacts.forEach((item, idx) => {
    const isSelected = item.id === state.selectedId;
    const isDone = state.downloadedIds.has(item.id);
    const isDimmed = state.activeCategory !== 'all' && item.category !== state.activeCategory;

    const row = document.createElement('div');
    row.className = `term-row ${isSelected ? 'selected' : ''}`;
    if (isDimmed) row.style.opacity = '0.28';

    const slotStr = String(idx + 1).padStart(2, '0');
    const shortSha = item.sha256.slice(0, 10) + '...' + item.sha256.slice(-6);
    const sizeText = item.mb >= 1 ? `${item.mb.toFixed(2)} MB` : `${Math.round(item.bytes / 1024)} KB`;

    row.innerHTML = `
      <span>[${slotStr}]</span>
      <span class="term-fname">${item.name}</span>
      <span>${item.categoryLabel}</span>
      <span><span class="ext-badge ext-${item.ext}">.${item.ext}</span></span>
      <span style="color:var(--text-primary);font-weight:600;">${sizeText}</span>
      <span style="color:var(--text-muted);">${shortSha}</span>
      <span style="text-align:right;">
        <button class="dl-mini-btn ${isDone ? 'done' : ''}" style="display:inline-flex;" data-dl="${item.id}">
          ${isDone ? '✓ SAVED' : '↓ PULL'}
        </button>
      </span>
    `;

    row.addEventListener('click', (e) => {
      if (e.target.closest('[data-dl]')) {
        e.stopPropagation();
        selectArtifact(item.id, false);
        downloadSingleArtifact(item);
        return;
      }
      selectArtifact(item.id, true);
    });

    container.appendChild(row);
  });
}

/* ==========================================================================
   UPDATE HOLOGRAPHIC INSPECTOR DOCK
   ========================================================================== */
function updateInspector() {
  const item = state.artifacts.find(a => a.id === state.selectedId) || state.artifacts[0];
  if (!item) return;

  const idx = state.artifacts.findIndex(a => a.id === item.id) + 1;
  const sizeText = item.mb >= 1 ? `${item.mb.toFixed(2)} MB` : `${Math.round(item.bytes / 1024)} KB`;

  document.getElementById('insp-slot-badge').textContent = `SLOT #${String(idx).padStart(2, '0')}`;
  document.getElementById('insp-name').textContent = item.name;
  document.getElementById('insp-desc').textContent = item.desc;
  document.getElementById('insp-size').textContent = `${sizeText} (${item.bytes.toLocaleString()} B)`;
  document.getElementById('insp-format').textContent = item.codec;
  document.getElementById('insp-category').textContent = item.categoryLabel;
  document.getElementById('insp-sha').textContent = `SHA256: ${item.sha256.slice(0, 10)}...${item.sha256.slice(-8)}`;
  document.getElementById('primary-dl-label').textContent = `DOWNLOAD (${sizeText})`;

  const isQueued = state.queuedIds.has(item.id);
  const qLabel = document.getElementById('queue-toggle-label');
  qLabel.textContent = isQueued ? '✓ IN BATCH QUEUE (CLICK TO REMOVE)' : '+ ADD TO BATCH QUEUE';

  const modeChip = document.getElementById('insp-preview-mode');
  if (item.category === 'android') {
    modeChip.textContent = 'ANDROID APK // VERIFIED PACKAGE';
  } else if (item.category === 'pokemon') {
    modeChip.textContent = 'GBA CARTRIDGE // POKÉMON ROM';
  } else {
    modeChip.textContent = 'GBA CARTRIDGE // ORIGINAL BUILD';
  }

  updateSummaryCounters();
}

function selectArtifact(id, playSound = true) {
  state.selectedId = id;
  if (playSound) sfx.playSelect();
  renderBentoMatrix();
  renderTerminalDeck();
  updateInspector();
  if (window.inspector3D) {
    const item = state.artifacts.find(a => a.id === id);
    if (item) window.inspector3D.setArtifact(item);
  }
}

function toggleQueueArtifact(id) {
  if (state.queuedIds.has(id)) {
    state.queuedIds.delete(id);
  } else {
    state.queuedIds.add(id);
  }
  sfx.playHover();
  renderBentoMatrix();
  updateInspector();
}

function updateSummaryCounters() {
  const totalMb = state.artifacts.reduce((acc, a) => acc + a.mb, 0);
  document.getElementById('vault-summary-label').textContent =
    `${state.artifacts.length} BUILDS READY // ${totalMb.toFixed(2)} MB`;
  document.getElementById('count-all').textContent = state.artifacts.length;

  const queuedItems = state.artifacts.filter(a => state.queuedIds.has(a.id));
  const queuedMb = queuedItems.reduce((acc, a) => acc + a.mb, 0);
  document.getElementById('queue-counter').textContent =
    `${queuedItems.length} SELECTED (${queuedMb.toFixed(2)} MB)`;

  const batchBtnLabel = document.getElementById('batch-dl-label');
  if (queuedItems.length > 0) {
    batchBtnLabel.textContent = `DOWNLOAD ${queuedItems.length} QUEUED (${queuedMb.toFixed(2)} MB)`;
  } else {
    batchBtnLabel.textContent = `DOWNLOAD ALL ${state.artifacts.length} (${totalMb.toFixed(2)} MB)`;
  }
}

/* ==========================================================================
   DIRECT REAL FILE DOWNLOAD ENGINE (GITHUB PAGES & LOCAL)
   ========================================================================== */
async function downloadSingleArtifact(item) {
  const statusEl = document.getElementById('transfer-status');
  const barEl = document.getElementById('transfer-bar');
  const cardProg = document.getElementById(`card-prog-${item.id}`);

  state.transferSpeedBoost = 3.8;

  const steps = 8;
  for (let s = 1; s <= steps; s++) {
    const pct = Math.round((s / steps) * 100);
    statusEl.textContent = `STREAMING ${item.name.slice(0, 20)}.. ${pct}%`;
    barEl.style.width = `${pct}%`;
    if (cardProg) cardProg.style.width = `${pct}%`;
    await new Promise(r => setTimeout(r, 18));
  }

  if (item.rawFile instanceof Blob) {
    const url = URL.createObjectURL(item.rawFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = item.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  } else {
    // Direct native browser download from ./vault-files/<filename>
    const fileUrl = `vault-files/${encodeURIComponent(item.name)}`;
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = item.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  const sizeText = item.mb >= 1 ? `${item.mb.toFixed(2)} MB` : `${Math.round(item.bytes / 1024)} KB`;
  state.downloadedIds.add(item.id);
  state.transferSpeedBoost = 1.0;
  statusEl.textContent = `DISPATCHED ✓ // ${item.name.slice(0, 22)} (${sizeText})`;
  sfx.playDownloadComplete();
  showToast(`Downloading ${item.name} (${sizeText})`);
  renderBentoMatrix();
  renderTerminalDeck();
}

async function downloadBatchArtifacts() {
  const targets = state.queuedIds.size > 0
    ? state.artifacts.filter(a => state.queuedIds.has(a.id))
    : state.artifacts;

  showToast(`Initiating batch download: ${targets.length} builds`);
  for (const item of targets) {
    selectArtifact(item.id, false);
    await downloadSingleArtifact(item);
    await new Promise(r => setTimeout(r, 320));
  }
}

/* ==========================================================================
   THREE.JS REACTIVE 3D WEBGL BACKGROUND + LIVE INSPECTOR 3D CANVAS
   ========================================================================== */
function initWebGLBackground() {
  const canvas = document.getElementById('webgl-bg');
  if (!window.THREE || !canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 14;

  const coreGeo = new THREE.IcosahedronGeometry(4.8, 1);
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    wireframe: true,
    transparent: true,
    opacity: 0.08
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  scene.add(coreMesh);

  const innerGeo = new THREE.OctahedronGeometry(2.8, 0);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x7b61ff,
    wireframe: true,
    transparent: true,
    opacity: 0.11
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  scene.add(innerMesh);

  const pCount = 360;
  const pGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 32;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 16;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0x00f0ff,
    size: 0.07,
    transparent: true,
    opacity: 0.45
  });
  const particleSystem = new THREE.Points(pGeo, pMat);
  scene.add(particleSystem);

  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  window.setWebGLThemeColors = (primaryHex, secondaryHex) => {
    coreMat.color.setHex(primaryHex);
    pMat.color.setHex(primaryHex);
    innerMat.color.setHex(secondaryHex);
  };

  let lastFpsUpdate = performance.now();
  let frames = 0;

  function animate(now) {
    requestAnimationFrame(animate);
    frames++;
    if (now - lastFpsUpdate > 750) {
      const fps = Math.min(60, Math.round((frames * 1000) / (now - lastFpsUpdate)));
      const fpsEl = document.getElementById('fps-counter');
      if (fpsEl) fpsEl.textContent = `${fps} FPS // WEBGL2`;
      frames = 0;
      lastFpsUpdate = now;
    }

    const boost = state.transferSpeedBoost;
    coreMesh.rotation.y += 0.0018 * boost;
    coreMesh.rotation.x += 0.0009 * boost;
    innerMesh.rotation.y -= 0.0028 * boost;
    innerMesh.rotation.z += 0.0014 * boost;
    particleSystem.rotation.y += 0.0005 * boost;

    camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.04;
    camera.position.y += (-mouseY * 1.0 - camera.position.y) * 0.04;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);
}

/* ==========================================================================
   HOLOGRAPHIC INSPECTOR LIVE PREVIEW CANVAS
   ========================================================================== */
function initInspectorCanvas() {
  const canvas = document.getElementById('inspector-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let rotX = 0.4, rotY = 0.6;
  let isDragging = false, lastX = 0, lastY = 0;
  let currentArtifact = state.artifacts[0];

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
  });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    rotY += (e.clientX - lastX) * 0.012;
    rotX += (e.clientY - lastY) * 0.012;
    lastX = e.clientX;
    lastY = e.clientY;
  });

  window.inspector3D = {
    setArtifact(item) {
      currentArtifact = item;
    }
  };

  function getVerticesAndEdges(shape) {
    if (shape === 'octahedron') {
      const v = [[0,1.3,0],[0,-1.3,0],[1.3,0,0],[-1.3,0,0],[0,0,1.3],[0,0,-1.3]];
      const e = [[0,2],[0,3],[0,4],[0,5],[1,2],[1,3],[1,4],[1,5],[2,4],[4,3],[3,5],[5,2]];
      return { v, e };
    }
    if (shape === 'box') {
      const s = 0.92;
      const v = [[-s,-s,-s],[s,-s,-s],[s,s,-s],[-s,s,-s],[-s,-s,s],[s,-s,s],[s,s,s],[-s,s,s]];
      const e = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7],[0,6],[1,7]];
      return { v, e };
    }
    const v = [];
    const e = [];
    const rings = 7, segs = 10;
    for (let r = 0; r < rings; r++) {
      const phi = (r / rings) * Math.PI * 2;
      for (let s = 0; s < segs; s++) {
        const theta = (s / segs) * Math.PI * 2;
        const R = 0.85, r2 = 0.38;
        const x = (R + r2 * Math.cos(theta)) * Math.cos(phi);
        const y = (R + r2 * Math.cos(theta)) * Math.sin(phi);
        const z = r2 * Math.sin(theta);
        v.push([x, y, z]);
        const curr = r * segs + s;
        const nextS = r * segs + ((s + 1) % segs);
        const nextR = ((r + 1) % rings) * segs + s;
        e.push([curr, nextS]);
        e.push([curr, nextR]);
      }
    }
    return { v, e };
  }

  function renderLoop() {
    requestAnimationFrame(renderLoop);
    const w = canvas.width / window.devicePixelRatio;
    const h = canvas.height / window.devicePixelRatio;
    ctx.clearRect(0, 0, w, h);

    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || '#00f0ff';

    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
    ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
    ctx.stroke();

    if (!isDragging) {
      rotY += 0.012 * state.transferSpeedBoost;
      rotX += 0.006 * state.transferSpeedBoost;
    }

    const { v, e } = getVerticesAndEdges(currentArtifact ? currentArtifact.shape : 'icosahedron');
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const scale = Math.min(w, h) * 0.36;

    const projected = v.map(([x, y, z]) => {
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;
      const perspective = 3.2 / (3.2 - z2 * 0.5);
      return [w / 2 + x2 * scale * perspective, h / 2 + y1 * scale * perspective, z2];
    });

    ctx.strokeStyle = accent;
    ctx.lineWidth = 1.15;
    e.forEach(([a, b]) => {
      const p1 = projected[a];
      const p2 = projected[b];
      if (!p1 || !p2) return;
      const alpha = Math.max(0.15, Math.min(0.9, (p1[2] + p2[2] + 2) / 3.5));
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.moveTo(p1[0], p1[1]);
      ctx.lineTo(p2[0], p2[1]);
      ctx.stroke();
    });

    ctx.fillStyle = '#ffffff';
    projected.forEach(([px, py, pz]) => {
      if (pz > 0.2) {
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    ctx.globalAlpha = 1;
  }
  requestAnimationFrame(renderLoop);
}

/* ==========================================================================
   VIEW 02: INTERACTIVE ORBITAL CONSTELLATION GRAPH
   ========================================================================== */
function initOrbitalGraph() {
  const canvas = document.getElementById('orbital-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let nodes = [];
  let hubs = [];
  let hoveredNode = null;
  let panX = 0, panY = 0, isPanning = false, startX = 0, startY = 0;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    layoutNodes(rect.width, rect.height);
  }

  function layoutNodes(w, h) {
    const cx = w / 2, cy = h / 2;
    hubs = [
      { id: 'pokemon', label: 'POKÉMON EDITIONS', x: cx - w * 0.24, y: cy - h * 0.12, color: '#00f0ff' },
      { id: 'original', label: 'ORIGINAL GBA BUILDS', x: cx + w * 0.22, y: cy - h * 0.12, color: '#a78bfa' },
      { id: 'android', label: 'ANDROID APK RELEASES', x: cx, y: cy + h * 0.24, color: '#34d399' }
    ];

    nodes = state.artifacts.map((item, idx) => {
      const hub = hubs.find(h => h.id === item.category) || hubs[0];
      const sameCat = state.artifacts.filter(a => a.category === item.category);
      const localIdx = sameCat.findIndex(a => a.id === item.id);
      const baseAngle = (localIdx / Math.max(1, sameCat.length)) * Math.PI * 2;
      return {
        item,
        hub,
        orbitRadius: 74 + (localIdx % 2) * 32,
        angle: baseAngle,
        speed: 0.0035 + (idx % 4) * 0.001,
        x: hub.x,
        y: hub.y
      };
    });
  }

  window.addEventListener('resize', resize);
  setTimeout(resize, 60);

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left - panX;
    const my = e.clientY - rect.top - panY;

    if (isPanning) {
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      return;
    }

    hoveredNode = null;
    for (const n of nodes) {
      const dx = mx - n.x, dy = my - n.y;
      if (Math.hypot(dx, dy) < 22) {
        hoveredNode = n;
        break;
      }
    }
    canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';
  });

  canvas.addEventListener('mousedown', (e) => {
    if (hoveredNode) {
      selectArtifact(hoveredNode.item.id, true);
      return;
    }
    isPanning = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
  });

  canvas.addEventListener('dblclick', () => {
    if (hoveredNode) {
      downloadSingleArtifact(hoveredNode.item);
    }
  });

  window.addEventListener('mouseup', () => { isPanning = false; });

  function draw() {
    requestAnimationFrame(draw);
    if (state.activeView !== 'orbital') return;

    const w = canvas.width / window.devicePixelRatio;
    const h = canvas.height / window.devicePixelRatio;
    if (w === 0 || h === 0) return;

    ctx.clearRect(0, 0, w, h);
    ctx.save();
    ctx.translate(panX, panY);

    const cx = w / 2, cy = h / 2;

    ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, 34, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = '#00f0ff';
    ctx.font = '700 10px "JetBrains Mono"';
    ctx.textAlign = 'center';
    ctx.fillText('VAULT CORE', cx, cy + 3);

    hubs.forEach(hub => {
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(hub.x, hub.y);
      ctx.stroke();

      ctx.strokeStyle = hub.color;
      ctx.globalAlpha = 0.22;
      ctx.beginPath();
      ctx.arc(hub.x, hub.y, 86, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;

      ctx.fillStyle = hub.color;
      ctx.beginPath();
      ctx.arc(hub.x, hub.y, 7, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = '700 10px "JetBrains Mono"';
      ctx.fillText(hub.label, hub.x, hub.y - 14);
    });

    nodes.forEach(n => {
      n.angle += n.speed;
      n.x = n.hub.x + Math.cos(n.angle) * n.orbitRadius;
      n.y = n.hub.y + Math.sin(n.angle) * n.orbitRadius;

      const isSelected = n.item.id === state.selectedId;
      const isHovered = hoveredNode === n;
      const isDimmed = state.activeCategory !== 'all' && n.item.category !== state.activeCategory;

      ctx.globalAlpha = isDimmed ? 0.2 : 1;

      ctx.strokeStyle = n.hub.color;
      ctx.lineWidth = isSelected ? 1.6 : 0.7;
      ctx.beginPath();
      ctx.moveTo(n.hub.x, n.hub.y);
      ctx.lineTo(n.x, n.y);
      ctx.stroke();

      ctx.fillStyle = isSelected || isHovered ? '#ffffff' : n.hub.color;
      ctx.beginPath();
      ctx.arc(n.x, n.y, isSelected ? 9 : 6.5, 0, Math.PI * 2);
      ctx.fill();

      if (isSelected || isHovered) {
        ctx.strokeStyle = n.hub.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 14, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.fillStyle = isSelected ? '#ffffff' : '#c0cae0';
      ctx.font = `${isSelected ? '700' : '500'} 10px "JetBrains Mono"`;
      ctx.textAlign = 'center';
      ctx.fillText(`${n.item.title.slice(0, 20)}`, n.x, n.y + 21);
    });

    ctx.restore();
  }
  requestAnimationFrame(draw);
  window.resizeOrbitalGraph = resize;
}

/* ==========================================================================
   TOAST NOTIFICATIONS & COMMAND PALETTE (CTRL+K)
   ========================================================================== */
function showToast(text) {
  const stack = document.getElementById('toast-stack');
  const el = document.createElement('div');
  el.className = 'toast-msg';
  el.innerHTML = `<span style="color:var(--accent-primary);">●</span> <span>${text}</span>`;
  stack.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.25s ease';
    setTimeout(() => el.remove(), 260);
  }, 2800);
}

function openCommandPalette() {
  const backdrop = document.getElementById('cmd-modal-backdrop');
  const input = document.getElementById('cmd-search-input');
  backdrop.classList.add('open');
  input.value = '';
  renderCommandResults('');
  setTimeout(() => input.focus(), 30);
}

function closeCommandPalette() {
  document.getElementById('cmd-modal-backdrop').classList.remove('open');
}

function renderCommandResults(query) {
  const list = document.getElementById('cmd-results-list');
  const q = query.trim().toLowerCase();
  const matches = state.artifacts.filter(a =>
    !q ||
    a.name.toLowerCase().includes(q) ||
    a.title.toLowerCase().includes(q) ||
    a.categoryLabel.toLowerCase().includes(q) ||
    a.ext.toLowerCase().includes(q)
  );

  list.innerHTML = matches.map(item => {
    const sizeText = item.mb >= 1 ? `${item.mb.toFixed(2)} MB` : `${Math.round(item.bytes / 1024)} KB`;
    return `
      <div class="cmd-item" data-cmd-id="${item.id}">
        <div>
          <strong style="color:var(--text-primary);">${item.name}</strong>
          <span style="margin-left:8px;font-size:0.65rem;color:var(--text-muted);">${item.categoryLabel}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="color:var(--accent-primary);">${sizeText}</span>
          <span class="kbd-tag">ENTER ↓</span>
        </div>
      </div>
    `;
  }).join('');

  list.querySelectorAll('.cmd-item').forEach(el => {
    el.addEventListener('click', () => {
      const id = Number(el.dataset.cmdId);
      const item = state.artifacts.find(a => a.id === id);
      closeCommandPalette();
      if (item) {
        selectArtifact(item.id, true);
        downloadSingleArtifact(item);
      }
    });
  });
}

/* ==========================================================================
   CUSTOM USER FILE INJECTION
   ========================================================================== */
async function injectUserFiles(fileList) {
  if (!fileList || fileList.length === 0) return;
  let added = 0;
  for (const file of Array.from(fileList)) {
    const ext = (file.name.split('.').pop() || 'bin').toLowerCase();
    const mb = Math.max(0.01, file.size / (1024 * 1024));
    const cat = ext === 'apk' ? 'android' : 'original';

    let shaHex = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';
    try {
      const buf = await file.slice(0, 65536).arrayBuffer();
      const digest = await crypto.subtle.digest('SHA-256', buf);
      shaHex = Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (_) {}

    const newItem = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      name: file.name,
      title: file.name.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' '),
      subtitle: 'User Injected Vault Payload',
      category: cat,
      categoryLabel: cat.toUpperCase(),
      ext: ['gba', 'apk', 'zip', 'bin'].includes(ext) ? ext : 'bin',
      codec: `${ext.toUpperCase()} // LOCAL`,
      mb,
      bytes: file.size,
      sha256: shaHex,
      shape: 'icosahedron',
      desc: `User-injected local build (${file.name}) ready for instant download.`,
      rawFile: file
    };

    state.artifacts.unshift(newItem);
    added++;
  }

  if (added > 0) {
    selectArtifact(state.artifacts[0].id, true);
    if (window.resizeOrbitalGraph) window.resizeOrbitalGraph();
    showToast(`Injected ${added} custom build(s) into Vault Grid`);
  }
}

/* ==========================================================================
   EVENT BINDINGS & KEYBOARD SHORTCUTS
   ========================================================================== */
function initEvents() {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchView(btn.dataset.view);
    });
  });

  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeCategory = btn.dataset.cat;
      sfx.playHover();
      renderBentoMatrix();
      renderTerminalDeck();
    });
  });

  document.getElementById('btn-primary-download').addEventListener('click', () => {
    const item = state.artifacts.find(a => a.id === state.selectedId);
    if (item) downloadSingleArtifact(item);
  });

  document.getElementById('btn-toggle-queue').addEventListener('click', () => {
    toggleQueueArtifact(state.selectedId);
  });

  document.getElementById('btn-copy-sha').addEventListener('click', () => {
    const item = state.artifacts.find(a => a.id === state.selectedId);
    if (!item) return;
    navigator.clipboard?.writeText(item.sha256);
    showToast(`Copied SHA-256 checksum to clipboard`);
  });

  document.getElementById('btn-select-all').addEventListener('click', () => {
    if (state.queuedIds.size === state.artifacts.length) {
      state.queuedIds.clear();
      document.getElementById('btn-select-all').textContent = `SELECT ALL ${state.artifacts.length}`;
    } else {
      state.artifacts.forEach(a => state.queuedIds.add(a.id));
      document.getElementById('btn-select-all').textContent = 'CLEAR QUEUE';
    }
    sfx.playSelect();
    renderBentoMatrix();
    updateInspector();
  });

  document.getElementById('btn-batch-download').addEventListener('click', () => {
    downloadBatchArtifacts();
  });

  document.getElementById('btn-sfx-toggle').addEventListener('click', () => {
    state.sfxEnabled = !state.sfxEnabled;
    document.getElementById('sfx-label').textContent = `SFX: ${state.sfxEnabled ? 'ON' : 'OFF'}`;
  });

  document.getElementById('btn-theme-cycle').addEventListener('click', () => {
    state.themeIndex = (state.themeIndex + 1) % state.themes.length;
    const t = state.themes[state.themeIndex];
    document.documentElement.setAttribute('data-theme', t.id);
    document.getElementById('theme-label').textContent = t.label;
    if (window.setWebGLThemeColors) {
      window.setWebGLThemeColors(t.primary, t.secondary);
    }
    sfx.playSelect();
    showToast(`Theme switched to ${t.label} HOLOGRAM`);
  });

  document.getElementById('btn-cmd-palette').addEventListener('click', openCommandPalette);
  document.getElementById('cmd-modal-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'cmd-modal-backdrop') closeCommandPalette();
  });
  document.getElementById('cmd-search-input').addEventListener('input', (e) => {
    renderCommandResults(e.target.value);
  });

  const fileInput = document.getElementById('custom-file-input');
  document.getElementById('btn-inject-files').addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', (e) => injectUserFiles(e.target.files));

  window.addEventListener('dragover', (e) => { e.preventDefault(); });
  window.addEventListener('drop', (e) => {
    e.preventDefault();
    if (e.dataTransfer?.files?.length) {
      injectUserFiles(e.dataTransfer.files);
    }
  });

  window.addEventListener('keydown', (e) => {
    const cmdOpen = document.getElementById('cmd-modal-backdrop').classList.contains('open');
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      cmdOpen ? closeCommandPalette() : openCommandPalette();
      return;
    }
    if (e.key === 'Escape' && cmdOpen) {
      closeCommandPalette();
      return;
    }
    if (cmdOpen) {
      if (e.key === 'Enter') {
        const first = document.querySelector('.cmd-item');
        if (first) first.click();
      }
      return;
    }
    if (e.key === '/') {
      e.preventDefault();
      openCommandPalette();
      return;
    }
    if (e.key === '1') switchView('bento');
    if (e.key === '2') switchView('orbital');
    if (e.key === '3') switchView('terminal');

    const curIdx = state.artifacts.findIndex(a => a.id === state.selectedId);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = state.artifacts[(curIdx + 1) % state.artifacts.length];
      if (next) selectArtifact(next.id, true);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = state.artifacts[(curIdx - 1 + state.artifacts.length) % state.artifacts.length];
      if (prev) selectArtifact(prev.id, true);
    } else if (e.key === ' ') {
      e.preventDefault();
      toggleQueueArtifact(state.selectedId);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = state.artifacts.find(a => a.id === state.selectedId);
      if (item) downloadSingleArtifact(item);
    }
  });
}

function switchView(viewName) {
  state.activeView = viewName;
  document.querySelectorAll('.mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === viewName);
  });
  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(`panel-${viewName}`);
  if (target) target.classList.add('active');
  if (viewName === 'orbital' && window.resizeOrbitalGraph) {
    window.resizeOrbitalGraph();
  }
  sfx.playSelect();
}

/* ==========================================================================
   BOOT SEQUENCE
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  renderBentoMatrix();
  renderTerminalDeck();
  updateInspector();
  initWebGLBackground();
  initInspectorCanvas();
  initOrbitalGraph();
  initEvents();
});
