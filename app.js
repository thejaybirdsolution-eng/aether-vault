/* ==========================================================================
   JAYBIRD VAULT — SEAMLESS ZERO-SCROLL LAUNCHER
   ========================================================================== */

const VAULT_ITEMS = [
  {
    id: 1,
    file: 'Jbird-Reader.apk',
    title: 'Jbird Reader',
    subtitle: 'Android Document & Comic Reader',
    category: 'android',
    platform: 'Android APK',
    ext: 'APK',
    sizeText: '60.5 MB',
    featuredWide: true,
    accent: '#6366f1',
    gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    glowPrimary: 'rgba(99, 102, 241, 0.22)',
    glowSecondary: 'rgba(139, 92, 246, 0.14)',
    icon: 'book',
    desc: 'Native Android release APK for Jbird Reader with fast offline library indexing, smooth page transitions, and an OLED-optimized dark reading interface.'
  },
  {
    id: 2,
    file: 'Pokemon-Ruby-Android-1.3.1.apk',
    title: 'Pokémon Ruby Android v1.3.1',
    subtitle: 'Standalone Android App + Mod Menu',
    category: 'android',
    platform: 'Android APK',
    ext: 'APK',
    sizeText: '21.7 MB',
    featuredWide: true,
    accent: '#10b981',
    gradient: 'linear-gradient(135deg, #059669, #10b981)',
    glowPrimary: 'rgba(16, 185, 129, 0.22)',
    glowSecondary: 'rgba(6, 182, 212, 0.14)',
    icon: 'smartphone',
    desc: 'Play Pokémon Ruby directly on Android with a built-in native Mod Menu, instant text/dialogue skip, and customizable touch controls.'
  },
  {
    id: 3,
    file: 'pokefirered_live_action.gba',
    title: 'Pokémon FireRed: Live Action',
    subtitle: 'Real-Time Action Overhaul',
    category: 'pokemon',
    platform: 'GBA ROM',
    ext: 'GBA',
    sizeText: '16.0 MB',
    featuredWide: true,
    accent: '#ef4444',
    gradient: 'linear-gradient(135deg, #dc2626, #f97316)',
    glowPrimary: 'rgba(239, 68, 68, 0.22)',
    glowSecondary: 'rgba(249, 115, 22, 0.14)',
    icon: 'flame',
    desc: 'Full 16 MB Pokémon FireRed Live-Action overhaul featuring real-time combat mechanics, direct movement, and custom overworld encounters.'
  },
  {
    id: 4,
    file: 'Pokemon_LeafGreen_x_Zelda_Minish_Cap.gba',
    title: 'LeafGreen × Zelda Minish Cap',
    subtitle: 'Kanto & Hyrule Crossover Edition',
    category: 'pokemon',
    platform: 'GBA ROM',
    ext: 'GBA',
    sizeText: '16.0 MB',
    featuredWide: false,
    accent: '#22c55e',
    gradient: 'linear-gradient(135deg, #16a34a, #eab308)',
    glowPrimary: 'rgba(34, 197, 94, 0.20)',
    glowSecondary: 'rgba(234, 179, 8, 0.14)',
    icon: 'shield',
    desc: 'Cross-universe GBA fusion uniting Pokémon LeafGreen with The Legend of Zelda: The Minish Cap items, world interactions, and sprites.'
  },
  {
    id: 5,
    file: 'Pokemon - Ruby Version (U) (V1.1) - Mod Menu.gba',
    title: 'Pokémon Ruby + Mod Menu',
    subtitle: 'In-Game Cheat & Warp Overlay',
    category: 'pokemon',
    platform: 'GBA ROM',
    ext: 'GBA',
    sizeText: '16.0 MB',
    featuredWide: false,
    accent: '#f43f5e',
    gradient: 'linear-gradient(135deg, #e11d48, #db2777)',
    glowPrimary: 'rgba(244, 63, 94, 0.22)',
    glowSecondary: 'rgba(219, 39, 119, 0.14)',
    icon: 'sliders',
    desc: 'Pokémon Ruby v1.1 GBA ROM enhanced with an integrated in-game Mod Menu for instant teleportation, custom encounters, and item spawning.'
  },
  {
    id: 6,
    file: 'Pokemon_LeafGreen_MK_Edition.gba',
    title: 'LeafGreen: MK Edition',
    subtitle: 'Mortal Kombat Arena Crossover',
    category: 'pokemon',
    platform: 'GBA ROM',
    ext: 'GBA',
    sizeText: '16.0 MB',
    featuredWide: false,
    accent: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706, #ef4444)',
    glowPrimary: 'rgba(245, 158, 11, 0.22)',
    glowSecondary: 'rgba(239, 68, 68, 0.14)',
    icon: 'zap',
    desc: 'Custom Pokémon LeafGreen MK Edition overhaul blending arcade fighter encounters, custom move tables, and Kanto progression.'
  },
  {
    id: 7,
    file: 'Pokemon_Kombat_Advance.gba',
    title: 'Pokémon Kombat Advance',
    subtitle: '2D Arcade Arena Fighter',
    category: 'pokemon',
    platform: 'GBA ROM',
    ext: 'GBA',
    sizeText: '64 KB',
    featuredWide: false,
    accent: '#eab308',
    gradient: 'linear-gradient(135deg, #ca8a04, #f97316)',
    glowPrimary: 'rgba(234, 179, 8, 0.20)',
    glowSecondary: 'rgba(249, 115, 22, 0.14)',
    icon: 'swords',
    desc: 'Fast 60fps 2D arena fighting game built natively for Game Boy Advance hardware featuring head-to-head combat.'
  },
  {
    id: 8,
    file: 'multiverse_brawl.gba',
    title: 'Multiverse Brawl',
    subtitle: 'Cross-Franchise Platform Fighter',
    category: 'original',
    platform: 'GBA ROM',
    ext: 'GBA',
    sizeText: '3.28 MB',
    featuredWide: false,
    accent: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    glowPrimary: 'rgba(139, 92, 246, 0.22)',
    glowSecondary: 'rgba(236, 72, 153, 0.14)',
    icon: 'sparkles',
    desc: 'GBA platform brawler featuring a custom crossover roster, knockback physics, special move combos, and dynamic stages.'
  },
  {
    id: 9,
    file: 'tidemark.gba',
    title: 'Tidemark',
    subtitle: 'Maritime Tactical Adventure',
    category: 'original',
    platform: 'GBA ROM',
    ext: 'GBA',
    sizeText: '2.00 MB',
    featuredWide: false,
    accent: '#06b6d4',
    gradient: 'linear-gradient(135deg, #0284c7, #06b6d4)',
    glowPrimary: 'rgba(6, 182, 212, 0.22)',
    glowSecondary: 'rgba(59, 130, 246, 0.14)',
    icon: 'compass',
    desc: 'Original maritime exploration and oceanic adventure game engineered from scratch for the Game Boy Advance.'
  },
  {
    id: 10,
    file: 'wildheart.gba',
    title: 'Wildheart',
    subtitle: 'Wilderness Action RPG',
    category: 'original',
    platform: 'GBA ROM',
    ext: 'GBA',
    sizeText: '1.75 MB',
    featuredWide: false,
    accent: '#14b8a6',
    gradient: 'linear-gradient(135deg, #0d9488, #22c55e)',
    glowPrimary: 'rgba(20, 184, 166, 0.22)',
    glowSecondary: 'rgba(34, 197, 94, 0.14)',
    icon: 'leaf',
    desc: 'Fast-paced wilderness action RPG for GBA with custom pixel shaders, creature companions, and boss encounters.'
  },
  {
    id: 11,
    file: 'aethermon.gba',
    title: 'Aethermon',
    subtitle: 'Original Monster-Taming RPG',
    category: 'original',
    platform: 'GBA ROM',
    ext: 'GBA',
    sizeText: '1.07 MB',
    featuredWide: false,
    accent: '#a855f7',
    gradient: 'linear-gradient(135deg, #9333ea, #6366f1)',
    glowPrimary: 'rgba(168, 85, 247, 0.22)',
    glowSecondary: 'rgba(99, 102, 241, 0.14)',
    icon: 'star',
    desc: 'Custom monster-catching RPG engine for GBA featuring elemental synthesis, party synergy, and original pixel artwork.'
  },
  {
    id: 12,
    file: 'Emberwake.gba',
    title: 'Emberwake',
    subtitle: 'Volcanic Dungeon Crawler',
    category: 'original',
    platform: 'GBA ROM',
    ext: 'GBA',
    sizeText: '268 KB',
    featuredWide: false,
    accent: '#f97316',
    gradient: 'linear-gradient(135deg, #ea580c, #f59e0b)',
    glowPrimary: 'rgba(249, 115, 22, 0.22)',
    glowSecondary: 'rgba(245, 158, 11, 0.14)',
    icon: 'flame',
    desc: 'Atmospheric dungeon crawler for GBA with dynamic torch lighting and responsive dodge-and-strike combat.'
  },
  {
    id: 13,
    file: 'NeonPulse.gba',
    title: 'NeonPulse',
    subtitle: 'Synthwave Arcade Runner',
    category: 'original',
    platform: 'GBA ROM',
    ext: 'GBA',
    sizeText: '128 KB',
    featuredWide: false,
    accent: '#ec4899',
    gradient: 'linear-gradient(135deg, #db2777, #8b5cf6)',
    glowPrimary: 'rgba(236, 72, 153, 0.22)',
    glowSecondary: 'rgba(139, 92, 246, 0.14)',
    icon: 'music',
    desc: 'High-speed synthwave arcade reflex runner using GBA hardware scaling and custom chiptune audio.'
  }
];

let selectedId = 1;
let activeCategory = 'all';
let searchQuery = '';
const downloadedSet = new Set();

function getIconSVG(type, size = 20) {
  const icons = {
    book: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    smartphone: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
    flame: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
    shield: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    sliders: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`,
    zap: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    swords: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"></polyline><line x1="13" y1="19" x2="19" y2="13"></line><line x1="16" y1="16" x2="20" y2="20"></line><line x1="19" y1="21" x2="21" y2="19"></line></svg>`,
    sparkles: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"></path></svg>`,
    compass: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
    leaf: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>`,
    star: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    music: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`
  };
  return icons[type] || icons.star;
}

function renderGrid() {
  const grid = document.getElementById('bento-grid');
  grid.innerHTML = '';

  const q = searchQuery.trim().toLowerCase();

  VAULT_ITEMS.forEach(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = !q ||
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.file.toLowerCase().includes(q) ||
      item.platform.toLowerCase().includes(q);

    const isVisible = matchesCat && matchesSearch;
    const isSelected = item.id === selectedId;
    const isDownloaded = downloadedSet.has(item.id);

    const card = document.createElement('article');
    card.className = [
      'item-card',
      item.featuredWide ? 'featured-wide' : '',
      isSelected ? 'active' : '',
      !isVisible ? 'hidden-by-filter' : ''
    ].filter(Boolean).join(' ');

    card.style.setProperty('--card-accent', item.accent);
    card.style.setProperty('--card-gradient', item.gradient);

    const badgeClass = item.ext === 'APK' ? 'badge-apk' : 'badge-gba';

    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon">
          ${getIconSVG(item.icon, 19)}
        </div>
        <span class="platform-badge ${badgeClass}">${item.platform}</span>
      </div>

      <div class="card-content">
        <h3 class="card-name">${item.title}</h3>
        <p class="card-tagline">${item.subtitle}</p>
      </div>

      <div class="card-bottom">
        <span class="file-size">${item.sizeText}</span>
        <button class="btn-card-dl ${isDownloaded ? 'downloaded' : ''}" data-dl="${item.id}">
          ${isDownloaded ? '✓ Downloaded' : '↓ Download'}
        </button>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-dl]')) {
        e.stopPropagation();
        selectItem(item.id);
        triggerDownload(item);
        return;
      }
      selectItem(item.id);
    });

    card.addEventListener('mouseenter', () => {
      selectItem(item.id);
    });

    grid.appendChild(card);
  });
}

function selectItem(id) {
  if (selectedId === id && document.getElementById('spotlight-icon').innerHTML !== '') {
    // Still update active class lightly
  }
  selectedId = id;
  const item = VAULT_ITEMS.find(i => i.id === id) || VAULT_ITEMS[0];

  // Update Left Spotlight Card
  document.getElementById('spotlight-art').style.background = item.gradient;
  document.getElementById('spotlight-icon').innerHTML = getIconSVG(item.icon, 32);
  document.getElementById('spotlight-badge').textContent = item.platform;
  document.getElementById('spotlight-subtitle').textContent = item.subtitle;
  document.getElementById('spotlight-subtitle').style.color = item.accent;
  document.getElementById('spotlight-title').textContent = item.title;
  document.getElementById('spotlight-desc').textContent = item.desc;
  document.getElementById('spotlight-size').textContent = item.sizeText;
  document.getElementById('spotlight-ext').textContent = `.${item.ext} File`;
  document.getElementById('btn-hero-text').textContent = `Download ${item.title} (${item.sizeText})`;

  // Smoothly shift ambient aurora glow
  const backdrop = document.getElementById('ambient-backdrop');
  backdrop.style.setProperty('--glow-primary', item.glowPrimary);
  backdrop.style.setProperty('--glow-secondary', item.glowSecondary);

  // Highlight active card without rebuilding DOM on hover
  const cards = document.querySelectorAll('.item-card');
  cards.forEach((c, idx) => {
    const cardItem = VAULT_ITEMS[idx];
    if (cardItem) {
      c.classList.toggle('active', cardItem.id === selectedId);
    }
  });
}

function triggerDownload(item) {
  const url = `vault-files/${encodeURIComponent(item.file)}`;
  const a = document.createElement('a');
  a.href = url;
  a.download = item.file;
  document.body.appendChild(a);
  a.click();
  a.remove();

  downloadedSet.add(item.id);
  renderGrid();
  showToast(`Downloading ${item.title} (${item.sizeText})`);
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.25s ease';
    setTimeout(() => toast.remove(), 260);
  }, 2800);
}

window.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  selectItem(1);

  // Category filter buttons
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.cat;
      renderGrid();

      // Auto-select first matching item in that category
      const firstMatch = VAULT_ITEMS.find(i => activeCategory === 'all' || i.category === activeCategory);
      if (firstMatch) selectItem(firstMatch.id);
    });
  });

  // Search box
  document.getElementById('search-input').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderGrid();
  });

  // Hero download button
  document.getElementById('btn-hero-download').addEventListener('click', () => {
    const item = VAULT_ITEMS.find(i => i.id === selectedId);
    if (item) triggerDownload(item);
  });
});
