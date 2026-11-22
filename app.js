/* ==========================================================================
   JAYBIRD ARCHIVE — MONOCHROME ARCHITECTURAL LAUNCHER
   ========================================================================== */

const RELEASES = [
  // ========================================================================
  // TIER 1: 4 STARRED FLAGSHIPS
  // ========================================================================
  {
    id: 1,
    file: 'Jbird-Reader.apk',
    title: 'Jbird Reader',
    desc: 'Native Android book, document, and comic reader with offline library indexing and OLED dark UI.',
    category: 'android',
    format: 'ANDROID APK',
    ext: 'apk',
    size: '60.5 MB',
    starred: true
  },
  {
    id: 2,
    file: 'Multiverse-Brawl-Android.apk',
    title: 'Multiverse Brawl Android',
    desc: 'Standalone Android APK build of Multiverse Brawl with custom touch controls and full roster.',
    category: 'android',
    format: 'ANDROID APK',
    ext: 'apk',
    size: '10.6 MB',
    starred: true
  },
  {
    id: 3,
    file: 'Pokemon - Ruby Version (U) (V1.1) - Mod Menu.gba',
    title: 'Pokémon Ruby + Mod Menu',
    desc: 'Pokémon Ruby (v1.1) GBA ROM with integrated in-game Mod Menu for warp, spawns, and debug tools.',
    category: 'pokemon',
    format: 'GBA ROM',
    ext: 'gba',
    size: '16.0 MB',
    starred: true
  },
  {
    id: 4,
    file: 'multiverse_brawl.gba',
    title: 'Multiverse Brawl',
    desc: 'Cross-franchise GBA platform fighter featuring custom knockback physics, special cancels, and arenas.',
    category: 'original',
    format: 'GBA ROM',
    ext: 'gba',
    size: '3.28 MB',
    starred: true
  },

  // ========================================================================
  // TIER 2: 10 ARCHIVE BUILDS (5 x 2 GRID)
  // ========================================================================
  {
    id: 5,
    file: 'Pokemon-Ruby-Android-1.3.1.apk',
    title: 'Pokémon Ruby Android v1.3.1',
    desc: 'Native Android APK with built-in Mod Menu overlay and instant dialogue skip.',
    category: 'android',
    format: 'ANDROID APK',
    ext: 'apk',
    size: '21.7 MB',
    starred: false
  },
  {
    id: 6,
    file: 'pokefirered_live_action.gba',
    title: 'Pokémon FireRed: Live Action',
    desc: '16 MB FireRed overhaul with real-time combat mechanics and direct overworld action.',
    category: 'pokemon',
    format: 'GBA ROM',
    ext: 'gba',
    size: '16.0 MB',
    starred: false
  },
  {
    id: 7,
    file: 'Pokemon_LeafGreen_x_Zelda_Minish_Cap.gba',
    title: 'LeafGreen × Zelda Minish Cap',
    desc: 'Kanto & Hyrule crossover blending Pokémon LeafGreen and Minish Cap mechanics.',
    category: 'pokemon',
    format: 'GBA ROM',
    ext: 'gba',
    size: '16.0 MB',
    starred: false
  },
  {
    id: 8,
    file: 'Pokemon_LeafGreen_MK_Edition.gba',
    title: 'LeafGreen: MK Edition',
    desc: 'Custom LeafGreen Mortal Kombat Edition featuring arcade fighter encounters.',
    category: 'pokemon',
    format: 'GBA ROM',
    ext: 'gba',
    size: '16.0 MB',
    starred: false
  },
  {
    id: 9,
    file: 'Pokemon_Kombat_Advance.gba',
    title: 'Pokémon Kombat Advance',
    desc: '60fps 2D arena fighting engine engineered natively for Game Boy Advance.',
    category: 'pokemon',
    format: 'GBA ROM',
    ext: 'gba',
    size: '64 KB',
    starred: false
  },
  {
    id: 10,
    file: 'tidemark.gba',
    title: 'Tidemark',
    desc: 'Original maritime tactical exploration and oceanic adventure built for GBA.',
    category: 'original',
    format: 'GBA ROM',
    ext: 'gba',
    size: '2.00 MB',
    starred: false
  },
  {
    id: 11,
    file: 'wildheart.gba',
    title: 'Wildheart',
    desc: 'Wilderness action RPG with creature companions, custom tile shaders, and bosses.',
    category: 'original',
    format: 'GBA ROM',
    ext: 'gba',
    size: '1.75 MB',
    starred: false
  },
  {
    id: 12,
    file: 'aethermon.gba',
    title: 'Aethermon',
    desc: 'Original monster-taming RPG engine featuring elemental synthesis and pixel art.',
    category: 'original',
    format: 'GBA ROM',
    ext: 'gba',
    size: '1.07 MB',
    starred: false
  },
  {
    id: 13,
    file: 'Emberwake.gba',
    title: 'Emberwake',
    desc: 'Volcanic dungeon crawler with dynamic lighting tiles and frame-accurate combat.',
    category: 'original',
    format: 'GBA ROM',
    ext: 'gba',
    size: '268 KB',
    starred: false
  },
  {
    id: 14,
    file: 'NeonPulse.gba',
    title: 'NeonPulse',
    desc: 'High-speed synthwave reflex runner utilizing GBA hardware scaling and chiptune DSP.',
    category: 'original',
    format: 'GBA ROM',
    ext: 'gba',
    size: '128 KB',
    starred: false
  }
];

let activeFilter = 'all';
let searchQuery = '';
const downloadedIds = new Set();

function matchesFilter(item) {
  const q = searchQuery.trim().toLowerCase();
  const textMatch = !q ||
    item.title.toLowerCase().includes(q) ||
    item.file.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q) ||
    item.format.toLowerCase().includes(q);

  if (!textMatch) return false;
  if (activeFilter === 'all') return true;
  if (activeFilter === 'starred') return item.starred;
  return item.category === activeFilter;
}

function createCardElement(item, indexNum) {
  const isMatch = matchesFilter(item);
  const isDone = downloadedIds.has(item.id);
  const numStr = String(indexNum).padStart(2, '0');

  const card = document.createElement('article');
  card.className = [
    'release-card',
    item.starred ? 'starred' : '',
    !isMatch ? 'filtered-out' : ''
  ].filter(Boolean).join(' ');

  card.innerHTML = `
    <div class="card-meta-row">
      <span class="format-tag ${item.ext === 'apk' ? 'tag-apk' : ''}">${item.format}</span>
      ${item.starred
        ? `<span class="star-badge" title="Featured Release">★ Starred</span>`
        : `<span class="index-num">${numStr}</span>`
      }
    </div>

    <div class="card-body">
      <h2 class="card-title">${item.title}</h2>
      <p class="card-desc">${item.desc}</p>
    </div>

    <div class="card-footer-row">
      <span class="size-label">${item.size}</span>
      <button class="dl-button ${isDone ? 'done' : ''}" type="button">
        ${isDone ? '✓ Saved' : '↓ Download'}
      </button>
    </div>
  `;

  // Cursor-tracked subtle monochrome specular light
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  });

  // Update bottom architectural status bar on hover
  card.addEventListener('mouseenter', () => {
    const statusEl = document.getElementById('status-inspect');
    if (statusEl) {
      statusEl.textContent = `${item.title}  ·  ${item.file} (${item.size})`;
    }
  });

  // Clicking anywhere on the card downloads the file immediately
  card.addEventListener('click', () => {
    downloadBuild(item);
  });

  return card;
}

function renderAll() {
  const featuredContainer = document.getElementById('featured-grid');
  const libraryContainer = document.getElementById('library-grid');
  featuredContainer.innerHTML = '';
  libraryContainer.innerHTML = '';

  let visibleCount = 0;

  RELEASES.forEach((item, idx) => {
    if (matchesFilter(item)) visibleCount++;
    const card = createCardElement(item, idx + 1);
    if (item.starred) {
      featuredContainer.appendChild(card);
    } else {
      libraryContainer.appendChild(card);
    }
  });

  const countEl = document.getElementById('status-count');
  if (countEl) {
    countEl.textContent = `${visibleCount} / ${RELEASES.length} Visible`;
  }
}

function downloadBuild(item) {
  const url = `vault-files/${encodeURIComponent(item.file)}`;
  const a = document.createElement('a');
  a.href = url;
  a.download = item.file;
  document.body.appendChild(a);
  a.click();
  a.remove();

  downloadedIds.add(item.id);
  renderAll();
  showToast(`Downloading ${item.file} (${item.size})`);
}

function showToast(text) {
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className = 'toast-item';
  el.innerHTML = `<span style="color:#e2b96f;">★</span> <span>${text}</span>`;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.2s ease';
    setTimeout(() => el.remove(), 220);
  }, 2600);
}

window.addEventListener('DOMContentLoaded', () => {
  renderAll();

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderAll();
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderAll();
  });

  // Press '/' to focus search, 'Esc' to clear
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    } else if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.value = '';
      searchQuery = '';
      searchInput.blur();
      renderAll();
    }
  });
});
